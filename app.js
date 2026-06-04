(function () {
  "use strict";

  const questions = Array.isArray(window.WINE_QUESTIONS) ? window.WINE_QUESTIONS : [];
  const storageKey = "wineExpertReviewApp.v1";
  const mixedCategoryRules = {
    "フランス": (category) => category === "フランス概論" || category.startsWith("フランス/"),
    "イタリア": (category) => category.startsWith("イタリア/"),
    "ドイツ": (category) => category.startsWith("ドイツ/")
  };
  const mixedCategorySize = 10;

  const defaultState = {
    answers: {},
    wrongIds: [],
    reviewIds: [],
    filters: {
      mode: "all",
      importance: "all",
      category: "all"
    },
    currentIndex: 0,
    selectedId: null
  };

  const state = loadState();
  let currentSet = [];
  let answered = false;
  let selectedChoiceIndexes = [];

  const els = {
    quizPanel: document.getElementById("quizPanel"),
    statsPanel: document.getElementById("statsPanel"),
    savedPanel: document.getElementById("savedPanel"),
    modeFilter: document.getElementById("modeFilter"),
    importanceFilter: document.getElementById("importanceFilter"),
    categoryFilter: document.getElementById("categoryFilter"),
    questionCounter: document.getElementById("questionCounter"),
    accuracyNow: document.getElementById("accuracyNow"),
    wrongCount: document.getElementById("wrongCount"),
    questionCard: document.getElementById("questionCard"),
    emptyState: document.getElementById("emptyState"),
    categoryBadge: document.getElementById("categoryBadge"),
    importanceBadge: document.getElementById("importanceBadge"),
    questionText: document.getElementById("questionText"),
    questionImageBox: document.getElementById("questionImageBox"),
    questionImage: document.getElementById("questionImage"),
    questionImageCaption: document.getElementById("questionImageCaption"),
    choices: document.getElementById("choices"),
    textAnswerBox: document.getElementById("textAnswerBox"),
    textAnswerInput: document.getElementById("textAnswerInput"),
    textSubmitButton: document.getElementById("textSubmitButton"),
    multiSubmitButton: document.getElementById("multiSubmitButton"),
    answerResult: document.getElementById("answerResult"),
    explanationBox: document.getElementById("explanationBox"),
    explanationText: document.getElementById("explanationText"),
    reviewButton: document.getElementById("reviewButton"),
    nextButton: document.getElementById("nextButton"),
    resetSessionButton: document.getElementById("resetSessionButton"),
    statsList: document.getElementById("statsList"),
    clearHistoryButton: document.getElementById("clearHistoryButton"),
    wrongSavedCount: document.getElementById("wrongSavedCount"),
    reviewSavedCount: document.getElementById("reviewSavedCount"),
    wrongModeButton: document.getElementById("wrongModeButton"),
    reviewModeButton: document.getElementById("reviewModeButton"),
    savedList: document.getElementById("savedList")
  };

  try {
    init();
  } catch (error) {
    showStartupError(error);
  }

  function init() {
    populateCategories();
    syncFiltersToControls();
    bindEvents();
    rebuildSet();
    renderAll();
  }

  function loadState() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey));
      return {
        ...defaultState,
        ...saved,
        filters: { ...defaultState.filters, ...(saved && saved.filters) }
      };
    } catch (error) {
      return cloneDefaultState();
    }
  }

  function saveState() {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch (error) {
      // Some file:// or private browsing contexts block storage. The quiz should still work.
    }
  }

  function populateCategories() {
    const categories = ["all", ...getCategoryOptions()];
    els.categoryFilter.innerHTML = categories
      .map((category) => {
        const label = category === "all" ? "すべて" : category;
        return `<option value="${escapeHtml(category)}">${escapeHtml(label)}</option>`;
      })
      .join("");
  }

  function syncFiltersToControls() {
    els.modeFilter.value = state.filters.mode;
    els.importanceFilter.value = state.filters.importance;
    els.categoryFilter.value = state.filters.category;
  }

  function bindEvents() {
    [els.modeFilter, els.importanceFilter, els.categoryFilter].forEach((control) => {
      control.addEventListener("change", () => {
        applyFiltersFromControls();
      });
      control.addEventListener("input", () => {
        applyFiltersFromControls();
      });
    });

    function applyFiltersFromControls() {
        state.filters.mode = els.modeFilter.value;
        state.filters.importance = els.importanceFilter.value;
        state.filters.category = els.categoryFilter.value;
        state.currentIndex = 0;
        answered = false;
        rebuildSet();
        saveState();
        renderAll();
    }

    els.nextButton.addEventListener("click", () => {
      if (!currentSet.length) return;
      state.currentIndex = (state.currentIndex + 1) % currentSet.length;
      answered = false;
      saveState();
      renderQuiz();
    });

    els.reviewButton.addEventListener("click", () => {
      const question = getCurrentQuestion();
      if (!question) return;
      toggleReview(question.id);
      renderQuiz();
      renderSaved();
    });

    els.resetSessionButton.addEventListener("click", () => {
      state.currentIndex = 0;
      answered = false;
      rebuildSet();
      saveState();
      renderQuiz();
    });

    els.clearHistoryButton.addEventListener("click", () => {
      if (!confirm("回答履歴、誤答保存、復習リストを消去しますか。")) return;
      state.answers = {};
      state.wrongIds = [];
      state.reviewIds = [];
      state.currentIndex = 0;
      answered = false;
      rebuildSet();
      saveState();
      renderAll();
    });

    els.wrongModeButton.addEventListener("click", () => switchMode("wrong"));
    els.reviewModeButton.addEventListener("click", () => switchMode("review"));

    els.choices.addEventListener("click", (event) => {
      const target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : event.target.parentElement;
      const button = target && target.closest(".choice-button");
      if (!button || button.disabled) return;
      const question = getCurrentQuestion();
      if (!question) return;
      const choiceIndex = Number(button.dataset.choiceIndex);
      if (isMultipleChoiceQuestion(question)) {
        toggleMultipleChoice(button, choiceIndex, question);
        return;
      }
      answerQuestion(question, [choiceIndex]);
    });

    els.multiSubmitButton.addEventListener("click", () => {
      const question = getCurrentQuestion();
      if (!question || answered || !isMultipleChoiceQuestion(question) || !selectedChoiceIndexes.length) return;
      answerQuestion(question, selectedChoiceIndexes);
    });

    els.textAnswerInput.addEventListener("input", () => {
      els.textSubmitButton.disabled = !els.textAnswerInput.value.trim();
    });

    els.textAnswerInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || els.textSubmitButton.disabled) return;
      event.preventDefault();
      els.textSubmitButton.click();
    });

    els.textSubmitButton.addEventListener("click", () => {
      const question = getCurrentQuestion();
      const value = els.textAnswerInput.value.trim();
      if (!question || answered || !isTextAnswerQuestion(question) || !value) return;
      answerTextQuestion(question, value);
    });

    document.querySelectorAll(".nav-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".nav-button").forEach((item) => item.classList.remove("active"));
        document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
        button.classList.add("active");
        document.getElementById(button.dataset.panel).classList.add("active");
      });
    });
  }

  function switchMode(mode) {
    state.filters.mode = mode;
    state.currentIndex = 0;
    answered = false;
    syncFiltersToControls();
    rebuildSet();
    saveState();
    renderAll();
    document.getElementById("quizTab").click();
  }

  function rebuildSet() {
    const categoryFilter = state.filters.category;
    const isMixed = isMixedCategory(categoryFilter);
    const mixedSourceCategories = isMixed ? getMixedSourceCategories(categoryFilter) : [];
    const sourceQuestions = isMixed
      ? questions.filter((question) => mixedSourceCategories.includes(question.category))
      : questions;

    currentSet = sourceQuestions.filter((question) => {
      if (state.filters.importance !== "all" && question.importance !== state.filters.importance) return false;
      if (categoryFilter !== "all" && !isMixed && question.category !== categoryFilter) return false;
      if (state.filters.mode === "wrong" && !state.wrongIds.includes(question.id)) return false;
      if (state.filters.mode === "review" && !state.reviewIds.includes(question.id)) return false;
      return true;
    });

    if (isMixed) {
      currentSet = shuffleQuestions(currentSet).slice(0, mixedCategorySize);
    }

    if (state.currentIndex >= currentSet.length) {
      state.currentIndex = 0;
    }
  }

  function renderAll() {
    renderQuiz();
    renderStats();
    renderSaved();
  }

  function renderQuiz() {
    const question = getCurrentQuestion();
    const totals = getTotals();
    els.questionCounter.textContent = currentSet.length ? `${state.currentIndex + 1} / ${currentSet.length}` : `0 / 0`;
    els.accuracyNow.textContent = totals.total ? `${Math.round((totals.correct / totals.total) * 100)}%` : "-";
    els.wrongCount.textContent = String(state.wrongIds.length);

    if (!question) {
      els.questionCard.hidden = true;
      els.emptyState.hidden = false;
      els.textAnswerBox.hidden = true;
      els.multiSubmitButton.hidden = true;
      return;
    }

    if (!answered) selectedChoiceIndexes = [];
    els.questionCard.hidden = false;
    els.emptyState.hidden = true;
    els.categoryBadge.textContent = isMixedCategory(state.filters.category) ? state.filters.category : question.category;
    els.importanceBadge.textContent = `重要度 ${question.importance}`;
    els.importanceBadge.dataset.importance = question.importance;
    els.questionText.textContent = question.question;
    renderQuestionImage(question);
    els.explanationText.textContent = question.explanation;
    els.answerResult.hidden = true;
    els.answerResult.className = "answer-result";
    els.explanationBox.hidden = true;
    els.nextButton.disabled = true;
    els.multiSubmitButton.hidden = !isMultipleChoiceQuestion(question);
    els.multiSubmitButton.disabled = true;
    els.textAnswerBox.hidden = !isTextAnswerQuestion(question);
    els.textAnswerInput.value = "";
    els.textAnswerInput.disabled = false;
    els.textSubmitButton.disabled = true;

    const inReview = state.reviewIds.includes(question.id);
    els.reviewButton.classList.toggle("selected", inReview);
    els.reviewButton.innerHTML = `<span aria-hidden="true">${inReview ? "★" : "☆"}</span>${inReview ? "復習から外す" : "復習に追加"}`;

    els.choices.innerHTML = "";
    if (isTextAnswerQuestion(question)) return;
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.dataset.choiceIndex = String(index);
      if (isMultipleChoiceQuestion(question)) button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span>${index + 1}</span><strong>${escapeHtml(choice)}</strong>`;
      els.choices.appendChild(button);
    });
  }

  function renderQuestionImage(question) {
    if (!question.image) {
      els.questionImageBox.hidden = true;
      els.questionImage.removeAttribute("src");
      els.questionImage.alt = "";
      els.questionImageCaption.textContent = "";
      return;
    }

    els.questionImageBox.hidden = false;
    els.questionImage.src = question.image.src;
    els.questionImage.alt = question.image.alt || "問題画像";
    els.questionImageCaption.textContent = question.image.caption || "";
  }

  function toggleMultipleChoice(button, choiceIndex, question) {
    if (answered) return;
    const maxSelections = question.maxSelections || getAnswerIndexes(question).length;
    const alreadySelected = selectedChoiceIndexes.includes(choiceIndex);
    if (alreadySelected) {
      selectedChoiceIndexes = selectedChoiceIndexes.filter((index) => index !== choiceIndex);
      button.classList.remove("selected");
      button.setAttribute("aria-pressed", "false");
    } else {
      if (selectedChoiceIndexes.length >= maxSelections) return;
      selectedChoiceIndexes.push(choiceIndex);
      button.classList.add("selected");
      button.setAttribute("aria-pressed", "true");
    }
    els.multiSubmitButton.disabled = !selectedChoiceIndexes.length;
  }

  function answerQuestion(question, choiceIndexes) {
    if (answered) return;
    answered = true;
    const answerIndexes = getAnswerIndexes(question);
    const isCorrect = areSameIndexes(choiceIndexes, answerIndexes);
    const previous = state.answers[question.id] || { correct: 0, total: 0 };
    state.answers[question.id] = {
      correct: previous.correct + (isCorrect ? 1 : 0),
      total: previous.total + 1,
      lastCorrect: isCorrect,
      lastAnsweredAt: new Date().toISOString()
    };

    if (isCorrect) {
      state.wrongIds = state.wrongIds.filter((id) => id !== question.id);
    } else if (!state.wrongIds.includes(question.id)) {
      state.wrongIds.push(question.id);
    }

    saveState();
    revealAnswer(question, choiceIndexes, isCorrect);
    renderStats();
    renderSaved();
  }

  function answerTextQuestion(question, answerText) {
    if (answered) return;
    answered = true;
    const isCorrect = getAnswerTexts(question).includes(normalizeTextAnswer(answerText));
    const previous = state.answers[question.id] || { correct: 0, total: 0 };
    state.answers[question.id] = {
      correct: previous.correct + (isCorrect ? 1 : 0),
      total: previous.total + 1,
      lastCorrect: isCorrect,
      lastAnsweredAt: new Date().toISOString()
    };

    if (isCorrect) {
      state.wrongIds = state.wrongIds.filter((id) => id !== question.id);
    } else if (!state.wrongIds.includes(question.id)) {
      state.wrongIds.push(question.id);
    }

    saveState();
    revealTextAnswer(question, answerText, isCorrect);
    renderStats();
    renderSaved();
  }

  function revealAnswer(question, choiceIndexes, isCorrect) {
    const answerIndexes = getAnswerIndexes(question);
    [...els.choices.children].forEach((button, index) => {
      button.disabled = true;
      if (answerIndexes.includes(index)) button.classList.add("correct");
      if (choiceIndexes.includes(index) && !answerIndexes.includes(index)) button.classList.add("incorrect");
    });

    els.multiSubmitButton.disabled = true;
    els.answerResult.hidden = false;
    els.answerResult.classList.add(isCorrect ? "correct" : "incorrect");
    els.answerResult.innerHTML = `
      <strong>${isCorrect ? "正解です" : "不正解です。誤答として保存しました"}</strong>
      <span>正解：${escapeHtml(formatAnswers(question, answerIndexes))}</span>
      <span>あなたの回答：${escapeHtml(formatAnswers(question, choiceIndexes))}</span>
    `;
    els.explanationBox.hidden = false;
    els.nextButton.disabled = false;
  }

  function revealTextAnswer(question, answerText, isCorrect) {
    els.textAnswerInput.disabled = true;
    els.textSubmitButton.disabled = true;
    els.answerResult.hidden = false;
    els.answerResult.classList.add(isCorrect ? "correct" : "incorrect");
    els.answerResult.innerHTML = `
      <strong>${isCorrect ? "正解です" : "不正解です。誤答として保存しました"}</strong>
      <span>正解：${escapeHtml(question.answerText)}</span>
      <span>あなたの回答：${escapeHtml(answerText)}</span>
    `;
    els.explanationBox.hidden = false;
    els.nextButton.disabled = false;
  }

  function isMultipleChoiceQuestion(question) {
    return Array.isArray(question.answerIndexes);
  }

  function isTextAnswerQuestion(question) {
    return typeof question.answerText === "string";
  }

  function getAnswerIndexes(question) {
    return isMultipleChoiceQuestion(question) ? question.answerIndexes : [question.answerIndex];
  }

  function areSameIndexes(selectedIndexes, answerIndexes) {
    if (selectedIndexes.length !== answerIndexes.length) return false;
    const selected = [...selectedIndexes].sort((a, b) => a - b);
    const answers = [...answerIndexes].sort((a, b) => a - b);
    return selected.every((index, position) => index === answers[position]);
  }

  function formatAnswers(question, indexes) {
    if (!indexes.length) return "未選択";
    return [...indexes]
      .sort((a, b) => a - b)
      .map((index) => `${index + 1}. ${question.choices[index]}`)
      .join(" / ");
  }

  function getAnswerTexts(question) {
    const answers = [question.answerText, ...(question.answerTextAliases || [])];
    return answers.map(normalizeTextAnswer);
  }

  function normalizeTextAnswer(value) {
    return String(value).normalize("NFKC").replace(/\s+/g, "").trim();
  }

  function renderStats() {
    const categories = getCategoryOptions();
    els.statsList.innerHTML = categories
      .map((category) => {
        const mixedSourceCategories = isMixedCategory(category) ? getMixedSourceCategories(category) : [];
        const categoryQuestions = isMixedCategory(category)
          ? questions.filter((question) => mixedSourceCategories.includes(question.category))
          : questions.filter((question) => question.category === category);
        const stats = categoryQuestions.reduce(
          (acc, question) => {
            const answer = state.answers[question.id];
            if (!answer) return acc;
            acc.correct += answer.correct;
            acc.total += answer.total;
            return acc;
          },
          { correct: 0, total: 0 }
        );
        const percent = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
        return `
          <article class="stat-row">
            <div>
              <strong>${escapeHtml(category)}</strong>
              <span>${stats.correct} / ${stats.total} 正解</span>
            </div>
            <div class="meter" aria-label="${escapeHtml(category)}の正答率 ${percent}%">
              <i style="width: ${percent}%"></i>
            </div>
            <b>${stats.total ? `${percent}%` : "-"}</b>
          </article>
        `;
      })
      .join("");
  }

  function renderSaved() {
    els.wrongSavedCount.textContent = String(state.wrongIds.length);
    els.reviewSavedCount.textContent = String(state.reviewIds.length);

    const savedIds = [...new Set([...state.wrongIds, ...state.reviewIds])];
    if (!savedIds.length) {
      els.savedList.innerHTML = `<p class="quiet">まだ保存された問題はありません。</p>`;
      return;
    }

    els.savedList.innerHTML = savedIds
      .map((id) => {
        const question = questions.find((item) => item.id === id);
        if (!question) return "";
        const tags = [
          state.wrongIds.includes(id) ? "誤答" : "",
          state.reviewIds.includes(id) ? "復習" : ""
        ].filter(Boolean);
        return `
          <article class="saved-item">
            <div>
              <span>${escapeHtml(question.category)}・重要度${escapeHtml(question.importance)}</span>
              <strong>${escapeHtml(question.question)}</strong>
            </div>
            <small>${tags.map(escapeHtml).join(" / ")}</small>
          </article>
        `;
      })
      .join("");
  }

  function toggleReview(id) {
    if (state.reviewIds.includes(id)) {
      state.reviewIds = state.reviewIds.filter((savedId) => savedId !== id);
    } else {
      state.reviewIds.push(id);
    }
    saveState();
  }

  function getCurrentQuestion() {
    return currentSet[state.currentIndex] || null;
  }

  function getTotals() {
    return Object.values(state.answers).reduce(
      (acc, answer) => {
        acc.correct += answer.correct;
        acc.total += answer.total;
        return acc;
      },
      { correct: 0, total: 0 }
    );
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function cloneDefaultState() {
    return JSON.parse(JSON.stringify(defaultState));
  }

  function getCategoryOptions() {
    const categories = [...new Set(questions.map((question) => question.category))];
    Object.keys(mixedCategoryRules).forEach((mixedCategory) => {
      const sourceCategories = getMixedSourceCategories(mixedCategory);
      const sourceIndex = categories.findIndex((category) => sourceCategories.includes(category));
      const existingIndex = categories.indexOf(mixedCategory);
      if (existingIndex >= 0) categories.splice(existingIndex, 1);
      if (sourceIndex >= 0) {
        categories.splice(sourceIndex, 0, mixedCategory);
      } else {
        categories.push(mixedCategory);
      }
    });
    return categories;
  }

  function isMixedCategory(category) {
    return Object.prototype.hasOwnProperty.call(mixedCategoryRules, category);
  }

  function getMixedSourceCategories(mixedCategory) {
    const rule = mixedCategoryRules[mixedCategory];
    if (!rule) return [];
    return [...new Set(
      questions
        .map((question) => question.category)
        .filter((category) => category !== mixedCategory && rule(category))
    )];
  }

  function shuffleQuestions(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
    }
    return shuffled;
  }

  function showStartupError(error) {
    const message = document.createElement("div");
    message.className = "startup-error";
    message.textContent = "アプリの読み込み中に問題が起きました。ページを再読み込みしてください。";
    document.body.prepend(message);
    console.error(error);
  }
})();
