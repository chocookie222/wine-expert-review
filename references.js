(function () {
  "use strict";

  const franceReferences = {
    "フランス概論": [552, 555, "フランス概論"],
    "フランス/シャンパーニュ": [556, 562, "Champagne（シャンパーニュ）"],
    "フランス/アルザス": [563, 567, "Alsace-Lorraine（アルザス・ロレーヌ）"],
    "フランス/ブルゴーニュ（概要・AOC）": [568, 597, "Bourgogne & Beaujolais（ブルゴーニュ＆ボージョレ）"],
    "フランス/ブルゴーニュ（グラン・クリュ）": [568, 597, "Bourgogne & Beaujolais（ブルゴーニュ＆ボージョレ）"],
    "フランス/ブルゴーニュ（その他）": [568, 597, "Bourgogne & Beaujolais（ブルゴーニュ＆ボージョレ）"],
    "フランス/ジュラ、サヴォワ": [598, 605, "Jura & Savoie（ジュラ＆サヴォワ）"],
    "フランス/ローヌ渓谷": [606, 613, "Vallée du Rhône（ローヌ渓谷）"],
    "フランス/プロヴァンス": [614, 622, "Provence-Corse（プロヴァンス＆コルシカ）"],
    "フランス/ラングドック・ルーション": [623, 634, "Languedoc-Roussillon（ラングドック・ルーション）"],
    "フランス/シュッド・ウエスト": [635, 645, "Sud-Ouest（シュッド・ウエスト）"],
    "フランス/ボルドー（概要・AOC）": [646, 660, "Bordeaux（ボルドー）"],
    "フランス/ボルドー（格付け基礎）": [646, 660, "Bordeaux（ボルドー）"],
    "フランス/ボルドー（格付け実践）": [646, 660, "Bordeaux（ボルドー）"],
    "フランス/ロワール渓谷地方": [661, 673, "Val de Loire（ロワール渓谷）"]
  };

  const italyRegions = [
    [["Valle d'Aosta", "ヴァッレ・ダオスタ"], 202, 203, "Valle d'Aosta（ヴァッレ・ダオスタ州）"],
    [["Piemonte", "ピエモンテ", "Barolo", "Barbaresco", "Asti", "Alta Langa", "Brachetto d'Acqui", "Dogliani", "Gattinara", "Gavi", "Ghemme", "Roero", "Ruchè", "Dolcetto di Ovada", "Erbaluce di Caluso", "Nizza", "Canelli", "Barbera d'Asti"], 204, 210, "Piemonte（ピエモンテ州）"],
    [["Liguria", "リグーリア"], 211, 212, "Liguria（リグーリア州）"],
    [["Lombardia", "ロンバルディア", "Franciacorta", "Oltrepò Pavese", "Oltrepo Pavese", "Sforzato di Valtellina", "Valtellina Superiore", "Moscato di Scanzo"], 213, 215, "Lombardia（ロンバルディア州）"],
    [["Trentino-Alto Adige", "トレンティーノ・アルト・アディジェ", "Trento"], 216, 218, "Trentino-Alto Adige（トレンティーノ・アルト・アディジェ州）"],
    [["Veneto", "ヴェネト", "Amarone della Valpolicella", "Valpolicella", "Asolo", "Bagnoli Friularo", "Bardolino Superiore", "Colli di Conegliano", "Colli Euganei", "Conegliano Valdobbiadene", "Lison", "Montello Rosso", "Piave Malanotte", "Recioto di Gambellara", "Recioto di Soave", "Recioto della Valpolicella", "Soave Superiore"], 219, 223, "Veneto（ヴェネト州）"],
    [["Friuli-Venezia Giulia", "フリウリ・ヴェネツィア・ジュリア", "Colli Orientali del Friuli Picolit", "Ramandolo", "Rosazzo"], 224, 226, "Friuli-Venezia Giulia（フリウリ・ヴェネツィア・ジュリア州）"],
    [["Emilia Romagna", "Emilia-Romagna", "エミリア・ロマーニャ", "Romagna Albana", "Albana di Romagna", "Colli Bolognesi Pignoletto"], 227, 229, "Emilia Romagna（エミリア・ロマーニャ州）"],
    [["Toscana", "トスカーナ", "Brunello di Montalcino", "Carmignano", "Chianti", "Elba Aleatico", "Montecucco Sangiovese", "Morellino di Scansano", "Suvereto", "Val di Cornia", "Vernaccia di San Gimignano", "Vino Nobile di Montepulciano"], 230, 235, "Toscana（トスカーナ州）"],
    [["Umbria", "ウンブリア", "Montefalco Sagrantino", "Torgiano Rosso Riserva"], 236, 237, "Umbria（ウンブリア州）"],
    [["Marche", "マルケ", "Castelli di Jesi Verdicchio", "Conero", "Offida", "Verdicchio di Matelica", "Vernaccia di Serrapetrona"], 238, 240, "Marche（マルケ州）"],
    [["Lazio", "ラツィオ", "Cannellino di Frascati", "Cesanese del Piglio", "Frascati Superiore"], 241, 243, "Lazio（ラツィオ州）"],
    [["Abruzzo", "アブルッツォ", "Montepulciano d'Abruzzo Colline Teramane", "Tullum"], 244, 245, "Abruzzo（アブルッツォ州）"],
    [["Molise", "モリーゼ"], 246, 247, "Molise（モリーゼ州）"],
    [["Campania", "カンパーニア", "Aglianico del Taburno", "Fiano di Avellino", "Greco di Tufo", "Taurasi"], 248, 250, "Campania（カンパーニア州）"],
    [["Puglia", "プーリア", "Castel del Monte", "Primitivo di Manduria Dolce Naturale"], 251, 253, "Puglia（プーリア州）"],
    [["Basilicata", "バジリカータ", "Aglianico del Vulture Superiore"], 254, 254, "Basilicata（バジリカータ州）"],
    [["Calabria", "カラブリア", "Cirò Classico", "Ciro Classico"], 255, 256, "Calabria（カラブリア州）"],
    [["Sicilia", "シチリア", "シチーリア", "Cerasuolo di Vittoria", "Etna", "Marsala"], 257, 259, "Sicilia（シチリア州）"],
    [["Sardegna", "サルデーニャ", "Vermentino di Gallura"], 260, 263, "Sardegna（サルデーニャ州）"]
  ];

  const japanRegions = [
    [["北海道", "上川", "空知", "後志", "十勝"], 106, 109, "北海道"],
    [["岩手県", "岩手"], 110, 111, "岩手県"],
    [["山形県", "山形", "置賜", "庄内"], 112, 114, "山形県"],
    [["宮城県", "秋田県", "青森県", "福島県", "東北"], 115, 115, "東北その他"],
    [["新潟県", "新潟", "岩の原"], 116, 116, "新潟県"],
    [["富山県", "石川県", "福井県", "北陸"], 117, 117, "北陸・関東"],
    [["長野県", "長野", "塩尻", "桔梗ヶ原", "千曲川", "東御", "信州ワインバレー", "天竜川ワインバレー", "日本アルプスワインバレー"], 118, 122, "長野県"],
    [["山梨県", "山梨", "甲州", "勝沼", "北杜", "甲府", "塩山", "明野", "穂坂"], 123, 126, "山梨県"],
    [["静岡県", "愛知県", "岐阜県", "三重県", "東海"], 127, 127, "東海"],
    [["大阪府", "大阪", "堅下"], 128, 128, "大阪府"],
    [["京都府", "兵庫県", "滋賀県", "奈良県", "和歌山県", "近畿"], 129, 129, "近畿その他"],
    [["岡山県", "広島県", "島根県", "鳥取県", "山口県", "四国", "中国地方"], 130, 130, "中国・四国"],
    [["宮崎県", "熊本県", "大分県", "福岡県", "鹿児島県", "沖縄県", "都農", "九州"], 130, 130, "九州・沖縄"]
  ];

  const generalReferences = {
    "ワイン概論/特性・分類・統計": [3, 12, "ワイン概論・特性・分類・統計"],
    "栽培・醸造": [13, 60, "ブドウ栽培・ワイン醸造"],
    "ワイン以外の飲料": [61, 86, "酒類飲料概論・飲料概論"],
    "日本酒・焼酎": [61, 76, "日本酒・焼酎"]
  };

  function answerText(question) {
    if (typeof question.answerText === "string") return question.answerText;
    const indexes = Array.isArray(question.answerIndexes) ? question.answerIndexes : [question.answerIndex];
    return indexes.map((index) => question.choices?.[index] || "").join(" ");
  }

  function findRegion(question, regions) {
    const primary = `${question.question || ""} ${answerText(question)}`;
    const secondary = `${primary} ${question.explanation || ""}`;
    for (const source of [primary, secondary]) {
      let best = null;
      regions.forEach((region) => {
        region[0].forEach((term) => {
          const position = source.indexOf(term);
          if (position >= 0 && (!best || position < best.position)) best = { region, position };
        });
      });
      if (best) return best.region;
    }
    return null;
  }

  function makeReference(start, end, section) {
    return {
      pages: start === end ? `p.${start}` : `p.${start}〜${end}`,
      section
    };
  }

  function resolveReference(question) {
    const france = franceReferences[question.category];
    if (france) return makeReference(france[0], france[1], france[2]);

    if (question.category?.startsWith("イタリア/")) {
      const region = findRegion(question, italyRegions);
      return region
        ? makeReference(region[1], region[2], region[3])
        : makeReference(198, 201, "イタリア概論・歴史・品種・ワイン法");
    }

    if (question.category?.startsWith("日本/")) {
      if (question.category === "日本/産地") {
        const region = findRegion(question, japanRegions);
        if (region) return makeReference(region[1], region[2], region[3]);
        return makeReference(106, 130, "日本の主要産地");
      }
      return makeReference(88, 105, "日本概論・歴史・ワイン法・品種");
    }

    const general = generalReferences[question.category];
    return general ? makeReference(general[0], general[1], general[2]) : null;
  }

  window.WINE_REFERENCE_RESOLVER = resolveReference;
})();
