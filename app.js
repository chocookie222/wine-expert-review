(function () {
  "use strict";

  const questions = Array.isArray(window.WINE_QUESTIONS) ? window.WINE_QUESTIONS : [];
  const questionIds = new Set(questions.map((question) => question.id));
  const readingFormatter = typeof window.WINE_READING_FORMATTER === "function"
    ? window.WINE_READING_FORMATTER
    : (value) => String(value || "");
  const referenceResolver = typeof window.WINE_REFERENCE_RESOLVER === "function"
    ? window.WINE_REFERENCE_RESOLVER
    : () => null;
  const storageKey = "wineExpertReviewApp.v1";
  const mixedCategoryRules = {
    "フランス": (category) => category === "フランス概論" || category.startsWith("フランス/"),
    "イタリア": (category) => category.startsWith("イタリア/"),
    "ドイツ": (category) => category.startsWith("ドイツ/")
  };
  const categoryInsertions = [
    {
      before: "日本/概論・歴史・ワイン法・品種",
      categories: ["ワイン概論/特性・分類・統計", "栽培・醸造", "ワイン以外の飲料", "日本酒・焼酎"]
    },
    { after: "アルゼンチン", categories: ["ウルグアイ", "南アフリカ"] },
    {
      after: "ニュージーランド",
      categories: [
        "スイス",
        "ハンガリー",
        "スロヴェニア",
        "スロバキア",
        "クロアチア",
        "ルクセンブルク",
        "英国",
        "ルーマニア",
        "モルドバ共和国",
        "ブルガリア",
        "ギリシャ",
        "ジョージア",
        "購入・保管・熟成・販売",
        "チーズ",
        "テイスティング",
        "サービス実技"
      ]
    }
  ];
  const reviewIntervals = [1, 3, 7, 14, 30, 60];
  const numericQuestionPattern = /\d|％|%|以上|以下|未満|以内|年|月|日|時間|期間|温度|度数|糖分|面積|生産量|数量|順位|第[一二三四五六七八九十]/;

  const defaultState = {
    answers: {},
    wrongIds: [],
    reviewIds: [],
    filters: {
      mode: "all",
      importance: "all",
      category: "all",
      questionLimit: 20
    },
    importanceOverrides: {},
    reviewSchedule: {},
    confidence: {},
    dailyActivity: {},
    studyPlan: {
      examDate: "",
      dailyTarget: 20
    },
    mockSettings: {
      questionCount: 60,
      minutes: 35
    },
    preferences: {
      showKanaReadings: true
    },
    importedTransfers: [],
    similarSourceId: null,
    currentIndex: 0,
    selectedId: null
  };

  const state = loadState();
  if (state.filters.category === "ペアリング") {
    state.filters.category = "テイスティング";
  }
  let currentSet = [];
  let answered = false;
  let selectedChoiceIndexes = [];
  let sessionAnswers = {};
  let showingResult = false;
  let mockSession = null;
  let mockTimerId = null;

  const els = {
    quizPanel: document.getElementById("quizPanel"),
    statsPanel: document.getElementById("statsPanel"),
    savedPanel: document.getElementById("savedPanel"),
    modeFilter: document.getElementById("modeFilter"),
    importanceFilter: document.getElementById("importanceFilter"),
    categoryFilter: document.getElementById("categoryFilter"),
    questionLimitControl: document.getElementById("questionLimitControl"),
    kanaReadingToggle: document.getElementById("kanaReadingToggle"),
    questionCounter: document.getElementById("questionCounter"),
    accuracyNow: document.getElementById("accuracyNow"),
    wrongCount: document.getElementById("wrongCount"),
    mockTimerBox: document.getElementById("mockTimerBox"),
    mockTimer: document.getElementById("mockTimer"),
    finishMockButton: document.getElementById("finishMockButton"),
    dueModeButton: document.getElementById("dueModeButton"),
    numericModeButton: document.getElementById("numericModeButton"),
    mockModeButton: document.getElementById("mockModeButton"),
    dueQuestionCount: document.getElementById("dueQuestionCount"),
    numericQuestionCount: document.getElementById("numericQuestionCount"),
    mockSetup: document.getElementById("mockSetup"),
    mockQuestionCount: document.getElementById("mockQuestionCount"),
    mockMinutes: document.getElementById("mockMinutes"),
    startMockButton: document.getElementById("startMockButton"),
    questionCard: document.getElementById("questionCard"),
    resultCard: document.getElementById("resultCard"),
    resultTitle: document.getElementById("resultTitle"),
    resultScore: document.getElementById("resultScore"),
    resultRate: document.getElementById("resultRate"),
    resultSummary: document.getElementById("resultSummary"),
    mockCategoryResults: document.getElementById("mockCategoryResults"),
    mockCategoryResultsList: document.getElementById("mockCategoryResultsList"),
    mockQuestionReview: document.getElementById("mockQuestionReview"),
    mockQuestionReviewList: document.getElementById("mockQuestionReviewList"),
    resultRestartButton: document.getElementById("resultRestartButton"),
    resultStatsButton: document.getElementById("resultStatsButton"),
    emptyState: document.getElementById("emptyState"),
    categoryBadge: document.getElementById("categoryBadge"),
    importanceBadge: document.getElementById("importanceBadge"),
    importanceEditor: document.getElementById("importanceEditor"),
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
    textbookReference: document.getElementById("textbookReference"),
    textbookReferenceText: document.getElementById("textbookReferenceText"),
    confidencePanel: document.getElementById("confidencePanel"),
    similarButton: document.getElementById("similarButton"),
    previousButton: document.getElementById("previousButton"),
    nextButton: document.getElementById("nextButton"),
    resetSessionButton: document.getElementById("resetSessionButton"),
    statsList: document.getElementById("statsList"),
    clearHistoryButton: document.getElementById("clearHistoryButton"),
    examDateInput: document.getElementById("examDateInput"),
    dailyTargetInput: document.getElementById("dailyTargetInput"),
    daysRemaining: document.getElementById("daysRemaining"),
    todayProgress: document.getElementById("todayProgress"),
    dueReviewMetric: document.getElementById("dueReviewMetric"),
    dailyProgressBar: document.getElementById("dailyProgressBar"),
    confidentStatCount: document.getElementById("confidentStatCount"),
    unsureStatCount: document.getElementById("unsureStatCount"),
    guessStatCount: document.getElementById("guessStatCount"),
    incorrectStatCount: document.getElementById("incorrectStatCount"),
    weaknessList: document.getElementById("weaknessList"),
    mockTransferStatus: document.getElementById("mockTransferStatus"),
    mockTransferFeedback: document.getElementById("mockTransferFeedback"),
    exportLatestMockButton: document.getElementById("exportLatestMockButton"),
    importMockInput: document.getElementById("importMockInput"),
    wrongSavedCount: document.getElementById("wrongSavedCount"),
    reviewSavedCount: document.getElementById("reviewSavedCount"),
    wrongModeButton: document.getElementById("wrongModeButton"),
    reviewModeButton: document.getElementById("reviewModeButton"),
    unsureModeButton: document.getElementById("unsureModeButton"),
    guessModeButton: document.getElementById("guessModeButton"),
    unsureSavedCount: document.getElementById("unsureSavedCount"),
    guessSavedCount: document.getElementById("guessSavedCount"),
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
    syncStudyControls();
    bindEvents();
    rebuildSet();
    renderAll();
  }

  function loadState() {
    try {
      const saved = JSON.parse(window.localStorage.getItem(storageKey));
      const loaded = {
        ...defaultState,
        ...saved,
        filters: { ...defaultState.filters, ...(saved && saved.filters) },
        importanceOverrides: { ...defaultState.importanceOverrides, ...(saved && saved.importanceOverrides) },
        reviewSchedule: { ...defaultState.reviewSchedule, ...(saved && saved.reviewSchedule) },
        confidence: { ...defaultState.confidence, ...(saved && saved.confidence) },
        dailyActivity: { ...defaultState.dailyActivity, ...(saved && saved.dailyActivity) },
        studyPlan: { ...defaultState.studyPlan, ...(saved && saved.studyPlan) },
        mockSettings: { ...defaultState.mockSettings, ...(saved && saved.mockSettings) },
        preferences: { ...defaultState.preferences, ...(saved && saved.preferences) }
      };
      if (!Array.isArray(loaded.importedTransfers)) loaded.importedTransfers = [];
      Object.keys(loaded.confidence).forEach((id) => {
        if (loaded.confidence[id] === "again") loaded.confidence[id] = "guess";
      });
      Object.values(loaded.answers).forEach((answer) => {
        if (answer && answer.confidence === "again") answer.confidence = "guess";
      });
      Object.keys(loaded.confidence).forEach((id) => {
        if (loaded.confidence[id] === "unsure" && loaded.answers[id]?.lastCorrect) {
          loaded.confidence[id] = "guess";
        }
      });
      Object.values(loaded.answers).forEach((answer) => {
        if (answer && answer.confidence === "unsure" && answer.lastCorrect) answer.confidence = "guess";
      });
      if (![60, 120].includes(Number(loaded.mockSettings.questionCount))) loaded.mockSettings.questionCount = 60;
      if (![35, 70].includes(Number(loaded.mockSettings.minutes))) loaded.mockSettings.minutes = 35;
      return loaded;
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
        const label = getCategoryLabel(category);
        return `<option value="${escapeHtml(category)}">${escapeHtml(label)}</option>`;
      })
      .join("");
  }

  function syncFiltersToControls() {
    els.modeFilter.value = state.filters.mode;
    els.importanceFilter.value = state.filters.importance;
    els.categoryFilter.value = state.filters.category;
    const selectedLimit = String(state.filters.questionLimit || 20);
    els.questionLimitControl.querySelectorAll("[data-question-limit]").forEach((button) => {
      const selected = button.dataset.questionLimit === selectedLimit;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
  }

  function syncStudyControls() {
    els.examDateInput.value = state.studyPlan.examDate || "";
    els.dailyTargetInput.value = String(state.studyPlan.dailyTarget || 20);
    els.mockQuestionCount.value = String(state.mockSettings.questionCount || 60);
    els.mockMinutes.value = String(state.mockSettings.minutes || 35);
    els.kanaReadingToggle.checked = state.preferences.showKanaReadings !== false;
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

    els.questionLimitControl.addEventListener("click", (event) => {
      const target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : event.target.parentElement;
      const button = target && target.closest("[data-question-limit]");
      if (!button) return;
      state.filters.questionLimit = button.dataset.questionLimit === "all" ? "all" : Number(button.dataset.questionLimit);
      state.currentIndex = 0;
      answered = false;
      resetSessionProgress();
      syncFiltersToControls();
      rebuildSet();
      saveState();
      renderAll();
    });

    els.kanaReadingToggle.addEventListener("change", () => {
      state.preferences.showKanaReadings = els.kanaReadingToggle.checked;
      saveState();
      renderQuiz();
      renderSaved();
    });

    function applyFiltersFromControls() {
        stopMockTimer();
        mockSession = null;
        state.filters.mode = els.modeFilter.value;
        state.filters.importance = els.importanceFilter.value;
        state.filters.category = els.categoryFilter.value;
        state.currentIndex = 0;
        answered = false;
        resetSessionProgress();
        rebuildSet();
        saveState();
        renderAll();
    }

    els.dueModeButton.addEventListener("click", () => switchMode("due"));
    els.numericModeButton.addEventListener("click", () => switchMode("numeric"));
    els.mockModeButton.addEventListener("click", () => switchMode("mock"));

    els.startMockButton.addEventListener("click", startMockExam);
    els.finishMockButton.addEventListener("click", () => {
      if (!isMockActive()) return;
      if (!confirm("模擬試験を終了して結果を表示しますか。")) return;
      finishMockExam();
    });

    [els.mockQuestionCount, els.mockMinutes].forEach((control) => {
      control.addEventListener("change", () => {
        state.mockSettings.questionCount = Number(els.mockQuestionCount.value) || 60;
        state.mockSettings.minutes = Number(els.mockMinutes.value) || 35;
        saveState();
      });
    });

    els.confidencePanel.addEventListener("click", (event) => {
      const target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : event.target.parentElement;
      const button = target && target.closest("[data-confidence]");
      const question = getCurrentQuestion();
      if (!button || !question || !answered || isMockActive()) return;
      setConfidence(question.id, button.dataset.confidence);
      renderConfidence(question);
      renderStats();
      renderSaved();
    });

    els.similarButton.addEventListener("click", () => {
      const question = getCurrentQuestion();
      if (!question) return;
      state.similarSourceId = question.id;
      switchMode("similar");
    });

    els.examDateInput.addEventListener("change", () => {
      state.studyPlan.examDate = els.examDateInput.value;
      saveState();
      renderStudyDashboard();
    });

    els.dailyTargetInput.addEventListener("change", () => {
      state.studyPlan.dailyTarget = clamp(Number(els.dailyTargetInput.value) || 20, 1, 500);
      els.dailyTargetInput.value = String(state.studyPlan.dailyTarget);
      saveState();
      renderStudyDashboard();
    });

    els.exportLatestMockButton.addEventListener("click", exportLatestMockTransfer);
    els.importMockInput.addEventListener("change", importMockTransfer);

    els.weaknessList.addEventListener("click", (event) => {
      const target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : event.target.parentElement;
      const button = target && target.closest("[data-weak-category]");
      if (!button) return;
      state.filters.category = button.dataset.weakCategory;
      state.filters.mode = "all";
      state.currentIndex = 0;
      answered = false;
      resetSessionProgress();
      syncFiltersToControls();
      rebuildSet();
      saveState();
      renderAll();
      document.getElementById("quizTab").click();
    });

    els.previousButton.addEventListener("click", () => moveQuestion(-1));
    els.nextButton.addEventListener("click", () => moveQuestion(1));

    els.resultRestartButton.addEventListener("click", () => {
      if (state.filters.mode === "mock") {
        startMockExam();
        return;
      }
      state.currentIndex = 0;
      answered = false;
      resetSessionProgress();
      saveState();
      renderQuiz();
    });

    els.resultStatsButton.addEventListener("click", () => {
      document.getElementById("statsTab").click();
    });

    els.importanceEditor.addEventListener("change", () => {
      const question = getCurrentQuestion();
      if (!question) return;
      setQuestionImportance(question.id, els.importanceEditor.value);
    });

    els.resetSessionButton.addEventListener("click", () => {
      state.currentIndex = 0;
      answered = false;
      resetSessionProgress();
      rebuildSet();
      saveState();
      renderQuiz();
    });

    els.clearHistoryButton.addEventListener("click", () => {
      if (!confirm("回答履歴、誤答保存、復習リスト、復習期限を消去しますか。")) return;
      stopMockTimer();
      mockSession = null;
      state.answers = {};
      state.wrongIds = [];
      state.reviewIds = [];
      state.reviewSchedule = {};
      state.confidence = {};
      state.dailyActivity = {};
      state.similarSourceId = null;
      state.currentIndex = 0;
      answered = false;
      resetSessionProgress();
      rebuildSet();
      saveState();
      renderAll();
    });

    els.wrongModeButton.addEventListener("click", () => switchMode("wrong"));
    els.reviewModeButton.addEventListener("click", () => switchMode("review"));
    els.unsureModeButton.addEventListener("click", () => switchMode("unsure"));
    els.guessModeButton.addEventListener("click", () => switchMode("guess"));

    els.savedList.addEventListener("click", (event) => {
      const target = event.target.nodeType === Node.ELEMENT_NODE ? event.target : event.target.parentElement;
      const button = target && target.closest("[data-saved-action]");
      if (!button) return;
      const id = button.dataset.questionId;
      if (!id) return;
      if (button.dataset.savedAction === "remove-wrong") {
        removeWrong(id);
      }
      renderQuiz();
      renderStats();
      renderSaved();
    });

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
      if (!question || (answered && !isMockActive()) || !isMultipleChoiceQuestion(question) || !selectedChoiceIndexes.length) return;
      answerQuestion(question, selectedChoiceIndexes);
    });

    els.textAnswerInput.addEventListener("input", () => {
      els.textSubmitButton.disabled = !els.textAnswerInput.value.trim();
      const question = getCurrentQuestion();
      if (question && answered && isMockActive()) {
        delete sessionAnswers[question.id];
        answered = false;
        updateProgressSummary();
        updateNextButtonAfterAnswer();
      }
    });

    els.textAnswerInput.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" || els.textSubmitButton.disabled) return;
      event.preventDefault();
      els.textSubmitButton.click();
    });

    els.textSubmitButton.addEventListener("click", () => {
      const question = getCurrentQuestion();
      const value = els.textAnswerInput.value.trim();
      if (!question || (answered && !isMockActive()) || !isTextAnswerQuestion(question) || !value) return;
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

  function moveQuestion(step) {
    if (!currentSet.length) return;
    if (step > 0 && isCurrentSetComplete()) {
      if (state.filters.mode === "mock") finishMockExam();
      else {
        showingResult = true;
        renderQuiz();
      }
      return;
    }
    state.currentIndex = (state.currentIndex + step + currentSet.length) % currentSet.length;
    answered = false;
    showingResult = false;
    saveState();
    renderQuiz();
  }

  function switchMode(mode) {
    stopMockTimer();
    mockSession = null;
    state.filters.mode = mode;
    state.currentIndex = 0;
    answered = false;
    resetSessionProgress();
    syncFiltersToControls();
    rebuildSet();
    saveState();
    renderAll();
    document.getElementById("quizTab").click();
  }

  function startMockExam() {
    const count = clamp(Number(els.mockQuestionCount.value) || 60, 1, 120);
    const minutes = clamp(Number(els.mockMinutes.value) || 35, 1, 70);
    state.mockSettings = { questionCount: count, minutes };
    state.filters.mode = "mock";
    const source = getQuestionsForCategory(state.filters.category).filter((question) => {
      return state.filters.importance === "all" || getQuestionImportance(question) === state.filters.importance;
    });
    const mockQuestions = shuffleQuestions(source).slice(0, Math.min(count, source.length));
    const startedAt = Date.now();
    mockSession = {
      questions: mockQuestions,
      startedAt,
      endsAt: startedAt + minutes * 60 * 1000,
      committed: false
    };
    state.currentIndex = 0;
    answered = false;
    resetSessionProgress();
    currentSet = mockQuestions;
    syncFiltersToControls();
    saveState();
    startMockTimer();
    renderAll();
  }

  function isMockActive() {
    return state.filters.mode === "mock" && Boolean(mockSession) && !showingResult;
  }

  function startMockTimer() {
    stopMockTimer();
    updateMockTimer();
    mockTimerId = window.setInterval(updateMockTimer, 1000);
  }

  function stopMockTimer() {
    if (mockTimerId) window.clearInterval(mockTimerId);
    mockTimerId = null;
  }

  function updateMockTimer() {
    if (!mockSession) return;
    const remaining = Math.max(0, mockSession.endsAt - Date.now());
    const totalSeconds = Math.ceil(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    els.mockTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    if (remaining <= 0) finishMockExam();
  }

  function finishMockExam() {
    if (!mockSession || showingResult) return;
    stopMockTimer();
    commitMockAnswers();
    showingResult = true;
    renderQuiz();
    renderStats();
    renderSaved();
    renderStudySummary();
  }

  function commitMockAnswers() {
    if (!mockSession || mockSession.committed) return;
    currentSet.forEach((question) => {
      const answer = sessionAnswers[question.id];
      if (answer) recordAnswer(question, answer.isCorrect);
    });
    mockSession.committed = true;
    saveState();
  }

  function rebuildSet() {
    const categoryFilter = state.filters.category;
    const isMixed = isMixedCategory(categoryFilter);
    const mixedSourceCategories = isMixed ? getMixedSourceCategories(categoryFilter) : [];
    const sourceQuestions = isMixed
      ? questions.filter((question) => mixedSourceCategories.includes(question.category))
      : questions;

    const baseSet = sourceQuestions.filter((question) => {
      if (state.filters.importance !== "all" && getQuestionImportance(question) !== state.filters.importance) return false;
      if (categoryFilter !== "all" && !isMixed && question.category !== categoryFilter) return false;
      return true;
    });

    if (state.filters.mode === "mock") {
      currentSet = mockSession ? mockSession.questions : [];
    } else if (state.filters.mode === "similar") {
      currentSet = getSimilarQuestions(state.similarSourceId, baseSet);
    } else {
      currentSet = baseSet.filter((question) => {
        if (state.filters.mode === "wrong" && !state.wrongIds.includes(question.id)) return false;
        if (state.filters.mode === "review" && !state.reviewIds.includes(question.id)) return false;
        if (state.filters.mode === "unsure" && !(getSavedConfidence(question.id) === "unsure" && !state.answers[question.id]?.lastCorrect)) return false;
        if (state.filters.mode === "guess" && !(getSavedConfidence(question.id) === "guess" && state.answers[question.id]?.lastCorrect)) return false;
        if (state.filters.mode === "due" && !isReviewDue(question.id)) return false;
        if (state.filters.mode === "numeric" && !isNumericQuestion(question)) return false;
        return true;
      });
    }

    if (state.filters.mode !== "mock" && state.filters.mode !== "similar") {
      currentSet = sampleQuestionSet(
        currentSet,
        state.filters.questionLimit,
        categoryFilter === "all" || isMixed
      );
    }

    if (state.currentIndex >= currentSet.length) {
      state.currentIndex = 0;
    }
  }

  function renderAll() {
    renderQuiz();
    renderStats();
    renderSaved();
    renderStudySummary();
    renderMockTransferStatus();
  }

  function getLatestMockTransferCandidate() {
    const latestAnswers = Object.entries(state.answers)
      .filter(([id, answer]) => questionIds.has(id) && answer?.lastAnsweredAt)
      .map(([id, answer]) => ({
        id,
        isCorrect: Boolean(answer.lastCorrect),
        answeredAt: answer.lastAnsweredAt,
        time: new Date(answer.lastAnsweredAt).getTime()
      }))
      .filter((answer) => Number.isFinite(answer.time))
      .sort((a, b) => b.time - a.time)
      .slice(0, 60);

    const correct = latestAnswers.filter((answer) => answer.isCorrect).length;
    const rate = latestAnswers.length ? Math.round((correct / latestAnswers.length) * 100) : 0;
    const valid = latestAnswers.length === 60 && rate === 28;
    const signature = latestAnswers
      .map((answer) => `${answer.id}:${answer.isCorrect ? 1 : 0}:${answer.answeredAt}`)
      .sort()
      .join("|");

    return {
      answers: latestAnswers,
      correct,
      rate,
      valid,
      transferId: valid ? `mock-60-28-${hashTransferSignature(signature)}` : ""
    };
  }

  function renderMockTransferStatus() {
    const candidate = getLatestMockTransferCandidate();
    els.exportLatestMockButton.disabled = !candidate.valid;
    if (candidate.valid) {
      els.mockTransferStatus.textContent = `直近の模試を確認できました：${candidate.correct} / 60（正答率 ${candidate.rate}%）。iPhone側のデータは消去されません。`;
      return;
    }
    if (candidate.answers.length < 60) {
      els.mockTransferStatus.textContent = `回答履歴が${candidate.answers.length}問のため、今回の60問模試をまだ特定できません。`;
      return;
    }
    els.mockTransferStatus.textContent = `直近60問の正答率が${candidate.rate}%のため、正答率28%の模試とは確認できませんでした。`;
  }

  function exportLatestMockTransfer() {
    const candidate = getLatestMockTransferCandidate();
    if (!candidate.valid) return;
    const payload = {
      kind: "wine-expert-mock-transfer",
      version: 1,
      transferId: candidate.transferId,
      createdAt: new Date().toISOString(),
      questionCount: 60,
      correctCount: candidate.correct,
      rate: candidate.rate,
      results: candidate.answers.map(({ id, isCorrect, answeredAt }) => ({ id, isCorrect, answeredAt }))
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "wine-mock-60questions-28percent.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    els.mockTransferFeedback.textContent = "転送ファイルを書き出しました。iPhoneへ送って読み込んでください。";
  }

  async function importMockTransfer(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const payload = JSON.parse(await file.text());
      const validResults = Array.isArray(payload.results)
        && payload.results.length === 60
        && new Set(payload.results.map((result) => result.id)).size === 60
        && payload.results.every((result) => typeof result.id === "string" && typeof result.isCorrect === "boolean");
      const transferredCorrect = validResults
        ? payload.results.filter((result) => result.isCorrect).length
        : 0;
      if (payload.kind !== "wine-expert-mock-transfer"
        || payload.version !== 1
        || payload.questionCount !== 60
        || payload.correctCount !== transferredCorrect
        || payload.rate !== 28
        || Math.round((transferredCorrect / 60) * 100) !== 28
        || !payload.transferId
        || !validResults) {
        throw new Error("このアプリ用の60問模試データではありません。");
      }
      if (state.importedTransfers.includes(payload.transferId)) {
        els.mockTransferFeedback.textContent = "この模試結果はすでに統合済みです。データは変更していません。";
        return;
      }

      const transferredQuestions = payload.results.map((result) => ({
        result,
        question: questions.find((item) => item.id === result.id)
      }));
      if (transferredQuestions.some(({ question }) => !question)) {
        throw new Error("iPhone側に存在しない問題が含まれていたため統合を中止しました。");
      }

      transferredQuestions.forEach(({ result, question }) => {
        const answeredAt = Number.isFinite(new Date(result.answeredAt).getTime())
          ? result.answeredAt
          : payload.createdAt;
        recordAnswer(question, result.isCorrect, { answeredAt, countDaily: false });
      });

      state.importedTransfers.push(payload.transferId);
      saveState();
      renderAll();
      els.mockTransferFeedback.textContent = `60問の模試結果を既存データへ追加しました（${payload.correctCount}問正解）。`;
    } catch (error) {
      els.mockTransferFeedback.textContent = error instanceof Error ? error.message : "模試データを読み込めませんでした。";
    } finally {
      event.target.value = "";
    }
  }

  function hashTransferSignature(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  function renderQuiz() {
    const question = getCurrentQuestion();
    const awaitingMockStart = state.filters.mode === "mock" && !isMockActive();
    els.questionLimitControl.hidden = state.filters.mode === "mock";
    els.mockSetup.hidden = !awaitingMockStart;
    els.mockTimerBox.hidden = !isMockActive();
    updateProgressSummary();

    if (showingResult && currentSet.length) {
      renderResult();
      return;
    }

    if (!question) {
      els.questionCard.hidden = true;
      els.resultCard.hidden = true;
      els.emptyState.hidden = awaitingMockStart;
      els.textAnswerBox.hidden = true;
      els.multiSubmitButton.hidden = true;
      els.previousButton.disabled = true;
      els.nextButton.disabled = true;
      return;
    }

    if (!answered) selectedChoiceIndexes = [];
    els.questionCard.hidden = false;
    els.resultCard.hidden = true;
    els.emptyState.hidden = true;
    answered = Boolean(sessionAnswers[question.id]);
    els.categoryBadge.textContent = isMixedCategory(state.filters.category) ? state.filters.category : question.category;
    const importance = getQuestionImportance(question);
    els.importanceBadge.textContent = `重要度 ${importance}`;
    els.importanceBadge.dataset.importance = importance;
    els.importanceEditor.value = importance;
    els.questionText.textContent = formatStudyText(question.question);
    renderQuestionImage(question);
    renderExplanation(formatStudyText(question.explanation));
    renderTextbookReference(question);
    els.answerResult.hidden = true;
    els.answerResult.className = "answer-result";
    els.explanationBox.hidden = true;
    els.confidencePanel.hidden = true;
    els.similarButton.hidden = true;
    els.previousButton.disabled = currentSet.length <= 1;
    els.nextButton.disabled = currentSet.length <= 1;
    els.nextButton.innerHTML = `次の問題<span aria-hidden="true">›</span>`;
    els.multiSubmitButton.hidden = !isMultipleChoiceQuestion(question);
    els.multiSubmitButton.disabled = true;
    els.textAnswerBox.hidden = !isTextAnswerQuestion(question);
    els.textAnswerInput.value = "";
    els.textAnswerInput.disabled = false;
    els.textSubmitButton.disabled = true;

    els.choices.innerHTML = "";
    if (isTextAnswerQuestion(question)) {
      restoreSessionAnswer(question);
      return;
    }
    question.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.dataset.choiceIndex = String(index);
      if (isMultipleChoiceQuestion(question)) button.setAttribute("aria-pressed", "false");
      button.innerHTML = `<span>${index + 1}</span><strong>${escapeHtml(formatStudyText(choice))}</strong>`;
      els.choices.appendChild(button);
    });
    restoreSessionAnswer(question);
  }

  function renderExplanation(explanation) {
    const paragraphs = String(explanation || "")
      .split(/\n+/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    els.explanationText.replaceChildren();
    paragraphs.forEach((paragraph) => {
      const block = document.createElement("span");
      block.className = "explanation-paragraph";
      block.textContent = paragraph.replace(/、(?=[^、。\n]{1,36}→)/g, "\n");
      els.explanationText.appendChild(block);
    });
  }

  function renderTextbookReference(question) {
    const reference = referenceResolver(question);
    els.textbookReference.hidden = !reference;
    els.textbookReferenceText.textContent = reference
      ? `${reference.pages}「${reference.section}」参照`
      : "";
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
    els.questionImage.alt = formatStudyText(question.image.alt || "問題画像");
    els.questionImageCaption.textContent = formatStudyText(question.image.caption || "");
  }

  function toggleMultipleChoice(button, choiceIndex, question) {
    if (answered && !isMockActive()) return;
    const editingMockAnswer = answered && isMockActive();
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
    if (editingMockAnswer) {
      delete sessionAnswers[question.id];
      answered = false;
      updateProgressSummary();
      updateNextButtonAfterAnswer();
    }
    els.multiSubmitButton.disabled = !selectedChoiceIndexes.length;
  }

  function answerQuestion(question, choiceIndexes) {
    const mockActive = isMockActive();
    if (answered && !mockActive) return;
    answered = true;
    const answerIndexes = getAnswerIndexes(question);
    const isCorrect = areSameIndexes(choiceIndexes, answerIndexes);
    sessionAnswers[question.id] = { type: "choice", choiceIndexes: [...choiceIndexes], isCorrect };
    updateProgressSummary();
    if (mockActive) {
      revealMockChoiceAnswer(choiceIndexes);
      return;
    }
    recordAnswer(question, isCorrect);
    saveState();
    revealAnswer(question, choiceIndexes, isCorrect);
    renderStats();
    renderSaved();
  }

  function answerTextQuestion(question, answerText) {
    const mockActive = isMockActive();
    if (answered && !mockActive) return;
    answered = true;
    const isCorrect = getAnswerTexts(question).includes(normalizeTextAnswer(answerText));
    sessionAnswers[question.id] = { type: "text", answerText, isCorrect };
    updateProgressSummary();
    if (mockActive) {
      revealMockTextAnswer();
      return;
    }
    recordAnswer(question, isCorrect);
    saveState();
    revealTextAnswer(question, answerText, isCorrect);
    renderStats();
    renderSaved();
  }

  function recordAnswer(question, isCorrect, options = {}) {
    const previous = state.answers[question.id] || { correct: 0, total: 0 };
    const recentResults = [...(previous.recentResults || []), isCorrect].slice(-5);
    const consecutiveCorrect = isCorrect ? (previous.consecutiveCorrect || 0) + 1 : 0;
    state.answers[question.id] = {
      correct: previous.correct + (isCorrect ? 1 : 0),
      total: previous.total + 1,
      lastCorrect: isCorrect,
      lastAnsweredAt: options.answeredAt || new Date().toISOString(),
      recentResults,
      consecutiveCorrect
    };
    delete state.confidence[question.id];

    if (isCorrect) {
      if (consecutiveCorrect >= 2) {
        state.wrongIds = state.wrongIds.filter((id) => id !== question.id);
      }
    } else if (!state.wrongIds.includes(question.id)) {
      state.wrongIds.push(question.id);
    }

    if (!isCorrect) {
      if (!state.reviewIds.includes(question.id)) state.reviewIds.push(question.id);
      scheduleIncorrectReview(question.id);
    }

    if (options.countDaily !== false) recordDailyActivity();
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
      <span>正解：${escapeHtml(formatStudyText(formatAnswers(question, answerIndexes)))}</span>
      <span>あなたの回答：${escapeHtml(formatStudyText(formatAnswers(question, choiceIndexes)))}</span>
    `;
    els.explanationBox.hidden = false;
    renderConfidence(question);
    els.similarButton.hidden = false;
    updateNextButtonAfterAnswer();
  }

  function revealTextAnswer(question, answerText, isCorrect) {
    els.textAnswerInput.disabled = true;
    els.textSubmitButton.disabled = true;
    els.answerResult.hidden = false;
    els.answerResult.classList.add(isCorrect ? "correct" : "incorrect");
    els.answerResult.innerHTML = `
      <strong>${isCorrect ? "正解です" : "不正解です。誤答として保存しました"}</strong>
      <span>正解：${escapeHtml(formatStudyText(question.answerText))}</span>
      <span>あなたの回答：${escapeHtml(answerText)}</span>
    `;
    els.explanationBox.hidden = false;
    renderConfidence(question);
    els.similarButton.hidden = false;
    updateNextButtonAfterAnswer();
  }

  function revealMockChoiceAnswer(choiceIndexes) {
    [...els.choices.children].forEach((button, index) => {
      button.disabled = false;
      const selected = choiceIndexes.includes(index);
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    els.multiSubmitButton.disabled = !isMultipleChoiceQuestion(getCurrentQuestion());
    els.answerResult.hidden = true;
    els.explanationBox.hidden = true;
    els.confidencePanel.hidden = true;
    els.similarButton.hidden = true;
    updateNextButtonAfterAnswer();
  }

  function revealMockTextAnswer() {
    els.textAnswerInput.disabled = false;
    els.textSubmitButton.disabled = false;
    els.answerResult.hidden = true;
    els.explanationBox.hidden = true;
    els.confidencePanel.hidden = true;
    els.similarButton.hidden = true;
    updateNextButtonAfterAnswer();
  }

  function restoreSessionAnswer(question) {
    const saved = sessionAnswers[question.id];
    if (!saved) return;
    if (saved.type === "text") {
      els.textAnswerInput.value = saved.answerText;
      if (isMockActive()) revealMockTextAnswer();
      else revealTextAnswer(question, saved.answerText, saved.isCorrect);
      return;
    }
    if (isMockActive()) {
      selectedChoiceIndexes = [...saved.choiceIndexes];
      revealMockChoiceAnswer(saved.choiceIndexes);
    }
    else revealAnswer(question, saved.choiceIndexes, saved.isCorrect);
  }

  function updateNextButtonAfterAnswer() {
    els.nextButton.innerHTML = `次の問題<span aria-hidden="true">›</span>`;
    els.nextButton.disabled = currentSet.length <= 1 && !isCurrentSetComplete();
    if (isCurrentSetComplete()) {
      els.nextButton.disabled = false;
      els.nextButton.innerHTML = `結果を見る<span aria-hidden="true">›</span>`;
    }
  }

  function renderResult() {
    const totals = getSessionTotals();
    const resultTotal = state.filters.mode === "mock" ? currentSet.length : totals.total;
    const percent = resultTotal ? Math.round((totals.correct / resultTotal) * 100) : 0;
    const categoryLabel = state.filters.category === "all" ? "現在のセット" : getCategoryLabel(state.filters.category);
    updateProgressSummary();
    els.questionCard.hidden = true;
    els.emptyState.hidden = true;
    els.resultCard.hidden = false;
    els.mockSetup.hidden = true;
    els.mockTimerBox.hidden = true;
    els.resultTitle.textContent = `${categoryLabel}の結果`;
    els.resultScore.textContent = `${totals.correct} / ${resultTotal}`;
    els.resultRate.textContent = `正答率 ${percent}%`;
    els.resultSummary.textContent = state.filters.mode === "mock"
      ? `${currentSet.length}問中${totals.correct}問正解です。未回答は不正解として扱います。分野別成績と問題ごとの回答は下で確認できます。`
      : `${totals.total}問中${totals.correct}問正解です。復習したい問題は「復習」タブから確認できます。`;
    renderMockResultDetails();
  }

  function renderMockResultDetails() {
    const isMockResult = state.filters.mode === "mock" && Boolean(mockSession);
    els.mockCategoryResults.hidden = !isMockResult;
    els.mockQuestionReview.hidden = !isMockResult;
    els.mockCategoryResultsList.replaceChildren();
    els.mockQuestionReviewList.replaceChildren();
    if (!isMockResult) return;

    const categoryTotals = new Map();
    currentSet.forEach((question) => {
      const answer = sessionAnswers[question.id];
      const totals = categoryTotals.get(question.category) || { correct: 0, total: 0 };
      totals.total += 1;
      if (answer?.isCorrect) totals.correct += 1;
      categoryTotals.set(question.category, totals);
    });

    [...categoryTotals.entries()]
      .sort((a, b) => a[0].localeCompare(b[0], "ja"))
      .forEach(([category, totals]) => {
        const rate = Math.round((totals.correct / totals.total) * 100);
        const row = document.createElement("div");
        row.className = "mock-category-row";
        row.innerHTML = `<span>${escapeHtml(category)}</span><strong>${totals.correct} / ${totals.total}（${rate}%）</strong>`;
        els.mockCategoryResultsList.appendChild(row);
      });

    currentSet.forEach((question, index) => {
      const answer = sessionAnswers[question.id];
      const status = !answer ? "unanswered" : answer.isCorrect ? "correct" : "incorrect";
      const statusLabel = status === "correct" ? "正解" : status === "incorrect" ? "不正解" : "未回答";
      const correctAnswer = isTextAnswerQuestion(question)
        ? question.answerText
        : formatAnswers(question, getAnswerIndexes(question));
      const userAnswer = !answer
        ? "未回答"
        : answer.type === "text"
          ? answer.answerText
          : formatAnswers(question, answer.choiceIndexes);
      const reference = referenceResolver(question);
      const details = document.createElement("details");
      details.className = `mock-review-item ${status}`;
      if (status !== "correct") details.open = true;
      details.innerHTML = `
        <summary>
          <span class="mock-status ${status}">${statusLabel}</span>
          <strong>${index + 1}. ${escapeHtml(formatStudyText(question.question))}</strong>
        </summary>
        <div class="mock-review-body">
          <p><b>あなたの回答</b>${escapeHtml(formatStudyText(userAnswer))}</p>
          <p><b>正解</b>${escapeHtml(formatStudyText(correctAnswer))}</p>
          <p><b>解説</b>${escapeHtml(formatStudyText(question.explanation || "解説はありません"))}</p>
          ${reference ? `<p><b>教本参照</b>${escapeHtml(`${reference.pages}「${reference.section}」`)}</p>` : ""}
        </div>
      `;
      els.mockQuestionReviewList.appendChild(details);
    });
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

  function renderConfidence(question) {
    if (isMockActive()) {
      els.confidencePanel.hidden = true;
      return;
    }
    els.confidencePanel.hidden = false;
    const selected = getSavedConfidence(question.id);
    const isIncorrect = Boolean(state.answers[question.id] && !state.answers[question.id].lastCorrect);
    els.confidencePanel.querySelectorAll("[data-confidence]").forEach((button) => {
      button.hidden = isIncorrect ? button.dataset.confidence === "confident" : button.dataset.confidence === "unsure";
      const active = button.dataset.confidence === selected;
      button.classList.toggle("selected", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function setConfidence(id, confidence) {
    if (!["guess", "unsure", "confident"].includes(confidence)) return;
    const answer = state.answers[id];
    const isIncorrect = Boolean(answer && !answer.lastCorrect);
    if ((isIncorrect && confidence === "confident") || (!isIncorrect && confidence === "unsure")) return;
    state.confidence[id] = confidence;
    if (answer) answer.confidence = confidence;

    if (confidence === "confident" && !isIncorrect && !state.wrongIds.includes(id)) {
      state.reviewIds = state.reviewIds.filter((savedId) => savedId !== id);
      delete state.reviewSchedule[id];
    } else {
      if (!state.reviewIds.includes(id)) state.reviewIds.push(id);
      scheduleReview(id, confidence, isIncorrect);
    }
    saveState();
  }

  function scheduleReview(id, confidence, isIncorrect = false) {
    const previous = state.reviewSchedule[id] || { stage: 0 };
    let stage = previous.stage || 0;
    if (isIncorrect || confidence === "guess") stage = 0;
    else if (confidence === "unsure") stage = Math.max(1, stage);
    else if (confidence === "confident") stage = Math.min(reviewIntervals.length - 1, stage + 1);
    const intervalDays = reviewIntervals[stage];
    state.reviewSchedule[id] = {
      stage,
      intervalDays,
      dueAt: new Date(Date.now() + intervalDays * 86400000).toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  function scheduleIncorrectReview(id) {
    state.reviewSchedule[id] = {
      stage: 0,
      intervalDays: 1,
      dueAt: new Date(Date.now() + 86400000).toISOString(),
      updatedAt: new Date().toISOString()
    };
  }

  function getSavedConfidence(id) {
    const value = state.answers[id]?.confidence || state.confidence[id] || "";
    return value === "again" ? "guess" : value;
  }

  function getConfidenceLabel(confidence) {
    if (confidence === "confident") return "😎 自信あり";
    if (confidence === "unsure") return "😐 自信あった";
    if (confidence === "guess") return "😭 勘";
    return "";
  }

  function isReviewDue(id) {
    const schedule = state.reviewSchedule[id];
    if (!schedule || !schedule.dueAt) return false;
    return new Date(schedule.dueAt).getTime() <= Date.now();
  }

  function getDueQuestions() {
    return questions.filter((question) => isReviewDue(question.id));
  }

  function isNumericQuestion(question) {
    return numericQuestionPattern.test(`${question.question} ${(question.choices || []).join(" ")}`);
  }

  function recordDailyActivity() {
    const key = getLocalDateKey();
    state.dailyActivity[key] = (state.dailyActivity[key] || 0) + 1;
  }

  function getLocalDateKey(date = new Date()) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function getSimilarQuestions(sourceId, candidates = questions) {
    const source = questions.find((question) => question.id === sourceId);
    if (!source) return [];
    const sourceAnswer = getCorrectAnswerLabel(source);
    const sourceTerms = extractStudyTerms(`${source.question} ${sourceAnswer}`);
    return candidates
      .filter((question) => question.id !== source.id && question.category === source.category)
      .map((question) => {
        const candidateText = `${question.question} ${getCorrectAnswerLabel(question)}`;
        const candidateTerms = extractStudyTerms(candidateText);
        let score = getCorrectAnswerLabel(question) === sourceAnswer ? 8 : 0;
        sourceTerms.forEach((term) => {
          if (candidateTerms.includes(term)) score += 1;
        });
        if (candidateText.includes(sourceAnswer) || source.question.includes(getCorrectAnswerLabel(question))) score += 3;
        return { question, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((item) => item.question);
  }

  function getCorrectAnswerLabel(question) {
    if (isTextAnswerQuestion(question)) return question.answerText;
    return getAnswerIndexes(question).map((index) => question.choices[index]).join(" ");
  }

  function extractStudyTerms(value) {
    const stopWords = new Set(["次の中から", "選択してください", "選んでください", "ワイン", "フランス", "イタリア", "正しいもの"]);
    const terms = String(value)
      .normalize("NFKC")
      .match(/[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'!-]{2,}|[ァ-ヶー]{3,}|[一-龠]{2,}/g) || [];
    return [...new Set(terms.filter((term) => !stopWords.has(term)).map((term) => term.toLowerCase()))];
  }

  function renderStats() {
    const categories = getCategoryOptions();
    els.statsList.innerHTML = categories
      .map((category) => {
        const categoryQuestions = getQuestionsForCategory(category);
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
              <strong>${escapeHtml(getCategoryLabel(category))}</strong>
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
    renderStudyDashboard();
    renderWeaknesses();
    renderStudySummary();
  }

  function renderStudySummary() {
    const dueCount = getDueQuestions().length;
    els.dueQuestionCount.textContent = String(dueCount);
    els.numericQuestionCount.textContent = String(questions.filter(isNumericQuestion).length);
    els.dueReviewMetric.textContent = String(dueCount);
  }

  function renderStudyDashboard() {
    const target = state.studyPlan.dailyTarget || 20;
    const today = state.dailyActivity[getLocalDateKey()] || 0;
    els.todayProgress.textContent = `${today} / ${target}`;
    els.dailyProgressBar.style.width = `${Math.min(100, Math.round((today / target) * 100))}%`;

    if (!state.studyPlan.examDate) {
      els.daysRemaining.textContent = "未設定";
    } else {
      const examDate = new Date(`${state.studyPlan.examDate}T00:00:00`);
      const todayStart = new Date();
      todayStart.setHours(0, 0, 0, 0);
      const days = Math.ceil((examDate.getTime() - todayStart.getTime()) / 86400000);
      els.daysRemaining.textContent = days >= 0 ? `${days}日` : "終了";
    }
    els.dueReviewMetric.textContent = String(getDueQuestions().length);
    const confidenceCounts = { confident: 0, unsure: 0, guess: 0 };
    questions.forEach((question) => {
      const confidence = getSavedConfidence(question.id);
      if (Object.prototype.hasOwnProperty.call(confidenceCounts, confidence)) confidenceCounts[confidence] += 1;
    });
    els.confidentStatCount.textContent = String(confidenceCounts.confident);
    els.unsureStatCount.textContent = String(confidenceCounts.unsure);
    els.guessStatCount.textContent = String(confidenceCounts.guess);
    els.incorrectStatCount.textContent = String(state.wrongIds.length);
  }

  function renderWeaknesses() {
    const weaknesses = getCategoryOptions()
      .map((category) => {
        const stats = getQuestionsForCategory(category).reduce(
          (acc, question) => {
            const answer = state.answers[question.id];
            if (!answer) return acc;
            acc.correct += answer.correct;
            acc.total += answer.total;
            return acc;
          },
          { correct: 0, total: 0 }
        );
        return { category, ...stats, percent: stats.total ? Math.round((stats.correct / stats.total) * 100) : 100 };
      })
      .filter((item) => item.total > 0 && !isMixedCategory(item.category))
      .sort((a, b) => a.percent - b.percent || b.total - a.total)
      .slice(0, 5);

    if (!weaknesses.length) {
      els.weaknessList.innerHTML = `<p class="quiet">回答すると苦手分野がここに表示されます。</p>`;
      return;
    }

    els.weaknessList.innerHTML = weaknesses
      .map((item) => `
        <button type="button" class="weakness-row" data-weak-category="${escapeHtml(item.category)}">
          <span>${escapeHtml(item.category)}</span>
          <strong>${item.percent}%</strong>
          <small>${item.correct} / ${item.total}</small>
        </button>
      `)
      .join("");
  }

  function renderSaved() {
    els.wrongSavedCount.textContent = String(state.wrongIds.length);
    els.reviewSavedCount.textContent = String(state.reviewIds.length);
    const unsureIds = questions
      .filter((question) => getSavedConfidence(question.id) === "unsure" && !state.answers[question.id]?.lastCorrect)
      .map((question) => question.id);
    const guessIds = questions
      .filter((question) => getSavedConfidence(question.id) === "guess" && state.answers[question.id]?.lastCorrect)
      .map((question) => question.id);
    els.unsureSavedCount.textContent = String(unsureIds.length);
    els.guessSavedCount.textContent = String(guessIds.length);

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
          state.reviewIds.includes(id) ? "復習" : "",
          getConfidenceLabel(getSavedConfidence(id))
        ].filter(Boolean);
        return `
          <article class="saved-item">
            <div>
              <span>${escapeHtml(question.category)}・重要度${escapeHtml(getQuestionImportance(question))}</span>
              <strong>${escapeHtml(formatStudyText(question.question))}</strong>
            </div>
            <small>${tags.map(escapeHtml).join(" / ")}</small>
            ${state.wrongIds.includes(id) ? `
              <div class="saved-actions">
                <button class="text-button" type="button" data-saved-action="remove-wrong" data-question-id="${escapeHtml(id)}">誤答を解除</button>
              </div>
            ` : ""}
          </article>
        `;
      })
      .join("");
  }

  function removeWrong(id) {
    state.wrongIds = state.wrongIds.filter((savedId) => savedId !== id);
    if (state.filters.mode === "wrong") {
      rebuildSet();
    }
    saveState();
  }

  function setQuestionImportance(id, importance) {
    if (!["S", "A", "B", "C"].includes(importance)) return;
    const question = questions.find((item) => item.id === id);
    if (!question) return;
    if (question.importance === importance) {
      delete state.importanceOverrides[id];
    } else {
      state.importanceOverrides[id] = importance;
    }
    if (state.filters.importance !== "all") {
      rebuildSet();
    }
    saveState();
    populateCategories();
    syncFiltersToControls();
    renderAll();
  }

  function getQuestionImportance(question) {
    return state.importanceOverrides[question.id] || question.importance || "A";
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

  function getSessionTotals() {
    return currentSet.reduce(
      (acc, question) => {
        const answer = sessionAnswers[question.id];
        if (!answer) return acc;
        acc.correct += answer.isCorrect ? 1 : 0;
        acc.total += 1;
        return acc;
      },
      { correct: 0, total: 0 }
    );
  }

  function updateProgressSummary() {
    const sessionTotals = getSessionTotals();
    els.questionCounter.textContent = currentSet.length ? `${state.currentIndex + 1} / ${currentSet.length}` : `0 / 0`;
    els.accuracyNow.textContent = currentSet.length ? `${sessionTotals.total} / ${currentSet.length}` : "-";
    els.wrongCount.textContent = String(state.wrongIds.length);
  }

  function isCurrentSetComplete() {
    return Boolean(currentSet.length) && currentSet.every((question) => sessionAnswers[question.id]);
  }

  function resetSessionProgress() {
    sessionAnswers = {};
    showingResult = false;
    selectedChoiceIndexes = [];
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function formatStudyText(value) {
    const text = String(value || "");
    return state.preferences.showKanaReadings ? readingFormatter(text) : text;
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
    applyCategoryInsertions(categories);
    return categories;
  }

  function applyCategoryInsertions(categories) {
    categoryInsertions.forEach((insertion) => {
      const anchor = insertion.before || insertion.after;
      const anchorIndex = categories.indexOf(anchor);
      let insertIndex = anchorIndex >= 0 ? anchorIndex : categories.length;
      if (anchorIndex >= 0 && insertion.after) insertIndex += 1;
      insertion.categories.forEach((category) => {
        const existingIndex = categories.indexOf(category);
        if (existingIndex >= 0) {
          categories.splice(existingIndex, 1);
          if (existingIndex < insertIndex) insertIndex -= 1;
        }
        categories.splice(insertIndex, 0, category);
        insertIndex += 1;
      });
    });
  }

  function isMixedCategory(category) {
    return Object.prototype.hasOwnProperty.call(mixedCategoryRules, category);
  }

  function getCategoryLabel(category) {
    const label = category === "all" ? "すべて" : category;
    return `${label}（${getQuestionsForCategory(category).length}）`;
  }

  function getQuestionsForCategory(category) {
    if (category === "all") return questions;
    if (isMixedCategory(category)) {
      const sourceCategories = getMixedSourceCategories(category);
      return questions.filter((question) => sourceCategories.includes(question.category));
    }
    return questions.filter((question) => question.category === category);
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

  function sampleQuestionSet(items, requestedLimit, balanceCategories) {
    const limit = requestedLimit === "all" ? items.length : Math.max(1, Number(requestedLimit) || 20);
    if (!balanceCategories) return shuffleQuestions(items).slice(0, limit);

    const buckets = new Map();
    items.forEach((question) => {
      if (!buckets.has(question.category)) buckets.set(question.category, []);
      buckets.get(question.category).push(question);
    });
    const categoryOrder = shuffleQuestions([...buckets.keys()]);
    categoryOrder.forEach((category) => buckets.set(category, shuffleQuestions(buckets.get(category))));

    const sampled = [];
    while (sampled.length < Math.min(limit, items.length)) {
      let added = false;
      categoryOrder.forEach((category) => {
        if (sampled.length >= limit) return;
        const question = buckets.get(category).pop();
        if (!question) return;
        sampled.push(question);
        added = true;
      });
      if (!added) break;
    }
    return shuffleQuestions(sampled);
  }

  function showStartupError(error) {
    const message = document.createElement("div");
    message.className = "startup-error";
    message.textContent = "アプリの読み込み中に問題が起きました。ページを再読み込みしてください。";
    document.body.prepend(message);
    console.error(error);
  }
})();
