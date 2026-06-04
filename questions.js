/*
  問題データはこのファイルで管理します。
  アプリ画面には問題追加機能やJSON入力欄を置かず、開発者がここを編集します。

  id: 一意のID
  category: 分野名
  importance: "A" | "B" | "C"
  question: 問題文
  choices: 4択の選択肢
  answerIndex: 正解の番号。0が1つ目、1が2つ目
  answerIndexes: 複数選択問題の正解番号。0が1つ目、1が2つ目
  maxSelections: 複数選択問題で選べる最大数
  answerText: 記述問題の正解
  answerTextAliases: 記述問題で正解扱いにする別表記
  explanation: 回答後に表示する解説
*/
window.WINE_QUESTIONS = [
  {
    id: "france-general-001",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの黒ブドウで栽培面積が第3位の品種を選択してください。",
    choices: ["カベルネ・ソーヴィニョン", "メルロ", "グルナッシュ", "シラー"],
    answerIndex: 3,
    explanation: "フランスの黒ブドウ品種の栽培面積では、メルロ、グルナッシュに続き、シラーが上位に位置します。"
  },
  {
    id: "france-general-002",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの位置する緯度を選択してください。",
    choices: ["北緯42〜51度", "北緯57〜64度", "北緯52〜63度", "北緯37〜42度"],
    answerIndex: 0,
    explanation: "フランスはおおむね北緯42〜51度に位置し、産地ごとの気候差がワインの個性に大きく関わります。"
  },
  {
    id: "france-general-003",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスのワイン法の分類で、地理的表示保護ワインに相当するものの名称を選択してください。",
    choices: ["Vin Régional", "Indication Géographique Protégée", "Appellation d'Origine Contrôlée", "Vin de France"],
    answerIndex: 1,
    explanation: "地理的表示保護ワインに相当する分類はIGP、Indication Géographique Protégéeです。AOCは原産地呼称保護に相当します。"
  },
  {
    id: "france-general-004",
    category: "フランス概論",
    importance: "A",
    question: "フランスワイン法の歴史で次の出来事が起きた年代を選択してください。「AOCの下位カテゴリーであったVDQSが消滅した」",
    choices: ["2006年", "2002年", "2011年", "2009年"],
    answerIndex: 2,
    explanation: "VDQSはAOCの下位カテゴリーとして存在していましたが、制度変更により2011年に消滅しました。"
  },
  {
    id: "france-general-005",
    category: "フランス概論",
    importance: "A",
    question: "次の中から紀元前6世紀ころ、フォカイヤ人によってフランスに初めてブドウ栽培がもたらされた場所を選択してください。",
    choices: ["マルセイユ", "ボルドー", "カルカッソンヌ", "ロワール"],
    answerIndex: 0,
    explanation: "紀元前6世紀ころ、フォカイヤ人が現在のマルセイユ周辺にもたらしたブドウ栽培が、フランスにおけるワイン史の重要な起点とされます。"
  },
  {
    id: "france-general-006",
    category: "フランス概論",
    importance: "A",
    question: "近年、EUレベルで新しいワイン法が導入され、フランスワインも品質等級の変更を行いました。次の中から従来のVin de Tableに替わる新しいカテゴリーの名称を選択してください。",
    choices: ["Vin Ordinaire", "Vin Régional", "Vin de France", "Vin de Pays"],
    answerIndex: 2,
    explanation: "従来のVin de Tableに替わるカテゴリーはVin de Franceです。地理的表示を伴わないワインの分類として整理されました。"
  },
  {
    id: "france-general-007",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの白ブドウで栽培面積が第2位の品種を選択してください。",
    choices: ["シャルドネ", "セミヨン", "ソーヴィニョン・ブラン", "ミュスカデ"],
    answerIndex: 0,
    explanation: "フランスの白ブドウ品種の栽培面積では、シャルドネが上位に位置します。主要白品種の順位は頻出事項です。"
  },
  {
    id: "france-general-008",
    category: "フランス概論",
    importance: "A",
    question: "フランスワイン法の歴史で次の出来事が起きた年代を選択してください。「INAO（国立原産地および品質機関）の前身が設立された」",
    choices: ["1949年", "1935年", "1945年", "1955年"],
    answerIndex: 1,
    explanation: "INAOの前身となる機関は1935年に設立され、フランスの原産地呼称制度の整備に大きく関わりました。"
  },
  {
    id: "france-general-009",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスの2023年のワイン輸出額に最も近いものを選択してください。",
    choices: ["10億ユーロ", "112億ユーロ", "38億ユーロ", "130億ユーロ"],
    answerIndex: 1,
    explanation: "2023年のフランスのワイン輸出額は、選択肢の中では112億ユーロが最も近い値です。"
  },
  {
    id: "france-general-010",
    category: "フランス概論",
    importance: "A",
    question: "フランスワインの歴史上で次の出来事が起きた年代を選択してください。「フランスに初めてブドウ栽培がもたらされた」",
    choices: ["紀元1世紀頃", "紀元前6世紀頃", "紀元4世紀頃まで", "紀元前3世紀頃"],
    answerIndex: 1,
    explanation: "フランスに初めてブドウ栽培がもたらされたのは、紀元前6世紀頃とされています。フォカイヤ人がマルセイユ周辺にもたらしたことが重要です。"
  },
  {
    id: "france-general-011",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの白ブドウで栽培面積が第3位の品種を選択してください。",
    choices: ["シャルドネ", "セミヨン", "ユニ・ブラン", "ソーヴィニョン・ブラン"],
    answerIndex: 3,
    explanation: "フランスの白ブドウ品種の栽培面積では、ソーヴィニョン・ブランが上位に位置します。白ブドウの栽培面積順位は概論で押さえたいポイントです。"
  },
  {
    id: "france-general-012",
    category: "フランス概論",
    importance: "A",
    question: "近年、EUレベルで新しいワイン法が導入され、フランスワインも品質等級の変更を行いました。次の中から従来のVin de Paysに替わる新しいカテゴリーの略称を選択してください。",
    choices: ["VSIG", "IGP", "AOP", "IGT"],
    answerIndex: 1,
    explanation: "従来のVin de Paysに替わるカテゴリーはIGPです。IGPはIndication Géographique Protégéeの略称です。"
  },
  {
    id: "france-general-013",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスの2023年のワイン生産量（非商品化分を除く）に最も近いものを選択してください。",
    choices: ["6400万ヘクトリットル", "4600万ヘクトリットル", "3700万ヘクトリットル", "2200万ヘクトリットル"],
    answerIndex: 1,
    explanation: "2023年のフランスのワイン生産量は、選択肢の中では4600万ヘクトリットルが最も近い値です。"
  },
  {
    id: "france-general-014",
    category: "フランス概論",
    importance: "A",
    question: "フランスワイン法の歴史で次の出来事が起きた年代を選択してください。「AOCより規制が緩やかだが原産地を指定するVDQSが制定された」",
    choices: ["1949年", "1945年", "1940年", "1935年"],
    answerIndex: 0,
    explanation: "AOCより規制が緩やかで原産地を指定するVDQSは、1949年に制定されました。"
  },
  {
    id: "france-general-015",
    category: "フランス概論",
    importance: "A",
    question: "フランスワインの歴史上で次の出来事が起きた年代を選択してください。「ベト病やウドン粉病、フィロキセラによる被害を受けた」",
    choices: ["16世紀後半", "18世紀後半", "19世紀後半", "17世紀後半"],
    answerIndex: 2,
    explanation: "ベト病、ウドン粉病、フィロキセラによる大きな被害は19世紀後半の出来事として整理されます。"
  },
  {
    id: "france-general-016",
    category: "フランス概論",
    importance: "A",
    question: "フランスワインの歴史上で次の出来事が起きた年代を選択してください。「古代ローマ人の手によってブドウ栽培とワイン造りが広がり、ローヌにブドウが植えられた」",
    choices: ["紀元6世紀頃まで", "紀元前3世紀頃", "紀元前6世紀頃", "紀元1世紀頃"],
    answerIndex: 3,
    explanation: "古代ローマ人の手によってブドウ栽培とワイン造りが広がり、ローヌにブドウが植えられた出来事は紀元1世紀頃として整理されます。"
  },
  {
    id: "france-general-017",
    category: "フランス概論",
    importance: "A",
    question: "近年、EUレベルで新しいワイン法が導入され、フランスワインも品質等級の変更を行いました。次の中から新しいカテゴリー「地理的表示のあるワイン」を管理する組織を選択してください。",
    choices: ["FranceAgriMer", "ONIVINS", "INAO", "Viniflhor"],
    answerIndex: 2,
    explanation: "地理的表示のあるワインを管理する組織はINAOです。INAOは原産地および品質に関わる制度管理で重要な機関です。"
  },
  {
    id: "france-general-018",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスで栽培面積が第1位の品種を選択してください。",
    choices: ["メルロ", "グルナッシュ", "ユニ・ブラン", "シャルドネ"],
    answerIndex: 0,
    explanation: "フランスで栽培面積が第1位の品種はメルロです。黒ブドウ・白ブドウを含めた主要品種順位として押さえます。"
  },
  {
    id: "france-general-019",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスの2023年のブドウ畑の総面積に最も近いものを選択してください。",
    choices: ["123万ヘクタール", "75万ヘクタール", "45万ヘクタール", "63万ヘクタール"],
    answerIndex: 1,
    explanation: "2023年のフランスのブドウ畑の総面積は、選択肢の中では75万ヘクタールが最も近い値です。"
  },
  {
    id: "france-general-020",
    category: "フランス概論",
    importance: "A",
    question: "近年、EUレベルで新しいワイン法が導入され、フランスワインも品質等級の変更を行いました。次の中から新しいカテゴリー「Vin de France」に認められるラベル表示を選択してください。",
    choices: ["品種のみ表示可能、収穫年は表示不可", "品種、収穫年両方を表示可能", "品種、収穫年両方とも表示不可", "収穫年のみ表示可能、品種は表示不可"],
    answerIndex: 1,
    explanation: "Vin de Franceでは、条件を満たせば品種名と収穫年の両方をラベルに表示できます。"
  },
  {
    id: "france-general-021",
    category: "フランス概論",
    importance: "B",
    question: "フランスの歴史上で次の出来事が起きた年代を選択してください。「フランス革命が起きた」",
    choices: ["1659年", "1789年", "1508年", "1814年"],
    answerIndex: 1,
    explanation: "フランス革命が起きた年は1789年です。フランス史とワイン制度・土地所有の変化を理解するうえで重要です。"
  },
  {
    id: "france-general-022",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスの2023年のワイン輸出額順位を選択してください。",
    choices: ["世界第4位", "世界第2位", "世界第1位", "世界第3位"],
    answerIndex: 2,
    explanation: "2023年のフランスのワイン輸出額順位は世界第1位です。輸出額と輸出量は順位が異なる場合があるため区別して覚えます。"
  },
  {
    id: "france-general-023",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの白ブドウで栽培面積が第1位の品種を選択してください。",
    choices: ["セミヨン", "ソーヴィニョン・ブラン", "ミュスカデ", "ユニ・ブラン"],
    answerIndex: 3,
    explanation: "フランスの白ブドウで栽培面積が第1位の品種はユニ・ブランです。コニャックやアルマニャックの原料品種としても重要です。"
  },
  {
    id: "france-general-024",
    category: "フランス概論",
    importance: "A",
    question: "フランスワイン法の歴史で次の出来事が起きた年代を選択してください。「虚偽ワインの規制と市場の安定を図るためAOC法が制定された」",
    choices: ["1955年", "1935年", "1945年", "1940年"],
    answerIndex: 1,
    explanation: "虚偽ワインの規制と市場の安定を図るため、AOC法は1935年に制定されました。"
  },
  {
    id: "france-general-025",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスにおけるブドウ品種ユニ・ブランの2019/20年の栽培面積に最も近いものを選択してください。",
    choices: ["120万ヘクタール", "80万ヘクタール", "9万ヘクタール", "32万ヘクタール"],
    answerIndex: 2,
    explanation: "フランスにおけるユニ・ブランの2019/20年の栽培面積は、選択肢の中では9万ヘクタールが最も近い値です。"
  },
  {
    id: "france-general-026",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスのワイン法の分類で、地理的表示のないワインに相当するものの名称を選択してください。",
    choices: ["Indication Géographique Protégée", "Appellation d'Origine Contrôlée", "Vin Régional", "Vin de France"],
    answerIndex: 3,
    explanation: "地理的表示のないワインに相当する分類はVin de Franceです。IGPやAOCとは区別して整理します。"
  },
  {
    id: "france-general-027",
    category: "フランス概論",
    importance: "A",
    question: "フランスワイン法の歴史で次の出来事が起きた年代を選択してください。「地域にかかわらず植え付け可能なブドウ品種が自由化された」",
    choices: ["2009年", "2011年", "2006年", "2002年"],
    answerIndex: 0,
    explanation: "地域にかかわらず植え付け可能なブドウ品種が自由化されたのは2009年です。EUレベルのワイン法改正に関わる重要事項です。"
  },
  {
    id: "france-general-028",
    category: "フランス概論",
    importance: "A",
    question: "フランスワインの歴史上で次の出来事が起きた年代を選択してください。「ブドウ栽培がボルドーやブルゴーニュなどフランス各地に広がった後、冷涼なシャンパーニュ地方にも伝えられた」",
    choices: ["紀元1世紀頃", "紀元前3世紀頃", "紀元4世紀頃まで", "紀元6世紀頃まで"],
    answerIndex: 2,
    explanation: "ブドウ栽培がボルドーやブルゴーニュなどに広がった後、冷涼なシャンパーニュ地方にも伝えられたのは紀元4世紀頃までの出来事として整理されます。"
  },
  {
    id: "france-general-029",
    category: "フランス概論",
    importance: "A",
    question: "近年、EUレベルで新しいワイン法が導入され、フランスワインも品質等級の変更を行いました。次の中からEUのカテゴリー「地理的表示のないワイン」の名称を選択してください。",
    choices: ["Appellation d'Origine Contrôlée", "Indication Géographique Protégée", "Vin Sans Indication Géographique", "Appellation d'Origine Protégée"],
    answerIndex: 2,
    explanation: "EUのカテゴリーで地理的表示のないワインは、Vin Sans Indication Géographiqueです。フランス国内表示のVin de Franceと対応関係を整理して覚えます。"
  },
  {
    id: "france-general-030",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの黒ブドウで栽培面積が第2位の品種を選択してください。",
    choices: ["カベルネ・ソーヴィニョン", "シラー", "グルナッシュ", "メルロ"],
    answerIndex: 2,
    explanation: "フランスの黒ブドウ品種の栽培面積では、グルナッシュが上位に位置します。メルロ、グルナッシュ、シラーの順位は概論の頻出ポイントです。"
  },
  {
    id: "france-general-031",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスのワイン法の分類で、原産地呼称保護ワインに相当するものの名称を選択してください。",
    choices: ["Vin de France", "Vin Régional", "Appellation d'Origine Contrôlée", "Indication Géographique Protégée"],
    answerIndex: 2,
    explanation: "原産地呼称保護ワインに相当する分類はAOC、Appellation d'Origine Contrôléeです。IGPやVin de Franceとの違いを整理して覚えます。"
  },
  {
    id: "france-general-032",
    category: "フランス概論",
    importance: "A",
    question: "次の中からフランスの黒ブドウで栽培面積が第1位の品種を選択してください。",
    choices: ["グルナッシュ", "シラー", "メルロ", "カベルネ・ソーヴィニョン"],
    answerIndex: 2,
    explanation: "フランスの黒ブドウで栽培面積が第1位の品種はメルロです。グルナッシュ、シラー、カベルネ・ソーヴィニョンとの順位を整理して覚えます。"
  },
  {
    id: "france-general-033",
    category: "フランス概論",
    importance: "B",
    question: "次の中からフランスにおけるブドウ品種メルロの2019/20年の栽培面積に最も近いものを選択してください。",
    choices: ["80万ヘクタール", "120万ヘクタール", "11万ヘクタール", "2万ヘクタール"],
    answerIndex: 2,
    explanation: "フランスにおけるメルロの2019/20年の栽培面積は、選択肢の中では11万ヘクタールが最も近い値です。"
  },
  {
    id: "france-champagne-001",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上でAvizeに相当する番号を選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["5番", "8番", "9番", "12番"],
    answerIndex: 3,
    explanation: "Avizeはコート・デ・ブラン地区の代表的なグラン・クリュです。この地図では12番に相当します。"
  },
  {
    id: "france-champagne-002",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の説明に合致するシャンパーニュのラベル表示略号を選択してください。「自社畑で収穫されたブドウのみを用い、自ら醸造も行う栽培農家。」",
    choices: ["MA", "NM", "RM", "CM"],
    answerIndex: 2,
    explanation: "RMはRécoltant-Manipulantの略で、自社畑のブドウを用いて自ら醸造する栽培農家を示します。"
  },
  {
    id: "france-champagne-003",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュの製造工程を最初から最後の順序で正しく並べたものを選択してください。",
    choices: ["Dosage, Pressurage, Fermentation Malolactique, Remuage", "Pressurage, Fermentation Alcoolique, Bouchage, Dégorgement", "Assemblage, Fermentation Alcoolique, Dosage, Remuage", "Pressurage, Tirage, Deuxième Fermentation en Bouteille, Bouchage"],
    answerIndex: 3,
    explanation: "シャンパーニュでは圧搾後、瓶内二次発酵へ向けたTirageを行い、瓶内二次発酵を経て最終的に栓をします。"
  },
  {
    id: "france-champagne-004",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方Montagne de Reims地区に属するグラン・クリュを選択してください。",
    choices: ["Oger", "Cramant", "Aÿ", "Puisieulx"],
    answerIndex: 3,
    explanation: "PuisieulxはMontagne de Reims地区に属するグラン・クリュです。Oger、Cramantはコート・デ・ブラン、Aÿはヴァレ・ド・ラ・マルヌの代表的なグラン・クリュです。"
  },
  {
    id: "france-champagne-005",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程の圧搾において、最初に搾汁された部分の名称を選択してください。",
    choices: ["Tranche", "Cuvée", "Taille", "Cube"],
    answerIndex: 1,
    explanation: "シャンパーニュの圧搾で最初に得られる果汁はCuvéeと呼ばれます。その後に得られる部分はTailleです。"
  },
  {
    id: "france-champagne-006",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方の中心都市で、歴代フランス王の戴冠式が行われた大聖堂があるところを選択してください。",
    choices: ["シャロン", "トロワ", "ランス", "エペルネ"],
    answerIndex: 2,
    explanation: "ランスには歴代フランス王の戴冠式が行われた大聖堂があり、シャンパーニュ地方の重要都市です。"
  },
  {
    id: "france-champagne-007",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からPremier Cruと表示されたシャンパーニュの意味として適切なものを選択してください。",
    choices: ["格付け90%以上の村のブドウだけから造られた", "格付け70%以上の村のブドウだけから造られた", "格付け80%以上の村のブドウだけから造られた", "格付け100%の村のブドウだけから造られた"],
    answerIndex: 0,
    explanation: "Premier Cruは、格付け90%以上の村のブドウだけから造られたシャンパーニュに表示できます。100%の村はGrand Cruです。"
  },
  {
    id: "france-champagne-008",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方の主要3品種の別名であるものを選択してください。",
    choices: ["フルミント", "モナストレル", "シュヴァルツリースリング", "プルニョーロ・ジェンティーレ"],
    answerIndex: 2,
    explanation: "シュヴァルツリースリングはムニエの別名です。シャンパーニュの主要3品種はシャルドネ、ピノ・ノワール、ムニエです。"
  },
  {
    id: "france-champagne-009",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの甘辛度Pas Doséの残糖度を選択してください。",
    choices: ["17〜32g/リットル", "12〜17g/リットル", "32〜50g/リットル", "3g/リットル未満"],
    answerIndex: 3,
    explanation: "Pas Doséはドザージュをしない、または極めて少ない辛口表示で、残糖度は3g/リットル未満です。"
  },
  {
    id: "france-champagne-010",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、瓶内二次発酵を意味するフランス語を選択してください。",
    choices: ["Vendange", "Remuage", "Deuxième Fermentation en Bouteille", "Dosage"],
    answerIndex: 2,
    explanation: "瓶内二次発酵はDeuxième Fermentation en Bouteilleです。Remuageは動瓶、Dosageは門出のリキュール添加を指します。"
  },
  {
    id: "france-champagne-011",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、Vendangeを意味する日本語を選択してください。",
    choices: ["打栓", "収穫", "糖分調整", "アルコール発酵"],
    answerIndex: 1,
    explanation: "Vendangeは収穫を意味します。シャンパーニュ製造工程では最初に位置する基本用語です。"
  },
  {
    id: "france-champagne-012",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方で赤ロゼ白の非発泡ワインを生産するAOCを選択してください。",
    choices: ["Côte des Blancs", "Côtes de Champenois", "Côtes du Champagne", "Coteaux Champenois"],
    answerIndex: 3,
    explanation: "Coteaux Champenoisはシャンパーニュ地方の非発泡ワインのAOCで、赤、ロゼ、白が生産されます。"
  },
  {
    id: "france-champagne-013",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの甘辛度Extra Dryの残糖度を選択してください。",
    choices: ["0〜6g/リットル", "12〜17g/リットル", "32〜50g/リットル", "12g/リットル未満"],
    answerIndex: 1,
    explanation: "Extra Dryの残糖度は12〜17g/リットルです。名称はDryですが、Brutより残糖が多い点に注意します。"
  },
  {
    id: "france-champagne-014",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュのラベル表示略号SRの説明として適切なものを選択してください。",
    choices: ["加盟する栽培農家が持ち込んだブドウから醸造、販売する生産者協同組合。", "協同組合にブドウを持ち込み醸造を委託、相当量のシャンパーニュを買い取り自社銘柄で販売する栽培農家。", "原料となるブドウを他社から購入し醸造する。いわゆるメゾン。", "一族の所有するブドウ畑で収穫された原料を用いて醸造、販売する栽培農家。"],
    answerIndex: 3,
    explanation: "SRはSociété de Récoltantsの略で、一族の所有するブドウ畑で収穫された原料を用いて醸造、販売する栽培農家を示します。"
  },
  {
    id: "france-champagne-015",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方Côte des Blancs地区に属するグラン・クリュを選択してください。",
    choices: ["Avize", "Tours sur Marne", "Verzenay", "Ambonnay"],
    answerIndex: 0,
    explanation: "AvizeはCôte des Blancs地区に属するグラン・クリュです。シャルドネの産地として重要です。"
  },
  {
    id: "france-champagne-016",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方で2022年に気候変動への適応のために新しく使用が認められた品種を選択してください。",
    choices: ["Pinot Blanc", "Voltis", "Petit Meslier", "Pinot Gris"],
    answerIndex: 1,
    explanation: "Voltisは、気候変動への適応を目的として2022年にシャンパーニュ地方で使用が認められた品種です。"
  },
  {
    id: "france-champagne-017",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方の年間平均気温を選択してください。",
    choices: ["約21度", "約6度", "約11度", "約16度"],
    answerIndex: 2,
    explanation: "シャンパーニュ地方の年間平均気温は約11度です。冷涼な気候が高酸度のブドウを生みます。"
  },
  {
    id: "france-champagne-018",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュのラベル表示略号MAの説明として適切なものを選択してください。",
    choices: ["協同組合にブドウを持ち込み醸造を委託、相当量のシャンパーニュを買い取り自社銘柄で販売する栽培農家。", "自社畑で収穫されたブドウのみを用い、自ら醸造も行う栽培農家。", "完成したシャンパーニュを購入し、自社ブランドのラベルを貼って販売する流通業者。", "スーパーやレストランなどのプライベートラベルが貼られたシャンパーニュ。"],
    answerIndex: 3,
    explanation: "MAはMarque d'Acheteurの略で、スーパーやレストランなどのプライベートラベルが貼られたシャンパーニュを示します。"
  },
  {
    id: "france-champagne-019",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの甘辛度Secの残糖度を選択してください。",
    choices: ["17〜32g/リットル", "12g/リットル未満", "3g/リットル未満", "12〜17g/リットル"],
    answerIndex: 0,
    explanation: "Secの残糖度は17〜32g/リットルです。Extra Dryより甘く、Demi-Secより辛口側に位置します。"
  },
  {
    id: "france-champagne-020",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュのBlanc de Noirsに使用可能な品種を選択してください。",
    choices: ["ピノ・ノワールのみ", "シャルドネとピノ・ノワール", "シャルドネ、ムニエ、ピノ・ノワール", "ピノ・ノワールとムニエ"],
    answerIndex: 3,
    explanation: "Blanc de Noirsは黒ブドウから造る白のシャンパーニュで、ピノ・ノワールとムニエを使用できます。"
  },
  {
    id: "france-champagne-021",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上でAmbonnayに相当する番号を選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["13番", "16番", "17番", "1番"],
    answerIndex: 3,
    explanation: "AmbonnayはMontagne de Reims地区の代表的なグラン・クリュです。この地図では1番に相当します。"
  },
  {
    id: "france-champagne-022",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方のAOCワインRosé des Riceysが生産することができるワインの種類を選択してください。",
    choices: ["赤ロゼの非発泡", "ロゼ白の発泡", "赤ロゼ白の発泡", "ロゼの非発泡"],
    answerIndex: 3,
    explanation: "Rosé des Riceysは、シャンパーニュ地方で造られるロゼの非発泡ワインのAOCです。"
  },
  {
    id: "france-champagne-023",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、打栓を意味するフランス語を選択してください。",
    choices: ["Bouchage", "Deuxième Fermentation en Bouteille", "Dégorgement", "Vendange"],
    answerIndex: 0,
    explanation: "Bouchageは打栓を意味します。Deuxième Fermentation en Bouteilleは瓶内二次発酵、Dégorgementは澱抜きです。"
  },
  {
    id: "france-champagne-024",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方の2023年のブドウ栽培面積に最も近いものを選択してください。",
    choices: ["3.1万ヘクタール", "1.2万ヘクタール", "5.6万ヘクタール", "28万ヘクタール"],
    answerIndex: 0,
    explanation: "シャンパーニュ地方の2023年のブドウ栽培面積は、選択肢の中では3.1万ヘクタールが最も近い値です。"
  },
  {
    id: "france-champagne-025",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方のプルミエ・クリュの総数を選択してください。",
    choices: ["42", "15", "17", "3"],
    answerIndex: 0,
    explanation: "シャンパーニュ地方のプルミエ・クリュの村は42です。グラン・クリュ17村とあわせて整理します。"
  },
  {
    id: "france-champagne-026",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の説明に合致するシャンパーニュのラベル表示略号を選択してください。「加盟する栽培農家が持ち込んだブドウから醸造、販売する生産者協同組合。」",
    choices: ["RM", "RC", "MA", "CM"],
    answerIndex: 3,
    explanation: "CMはCoopérative de Manipulationの略で、加盟する栽培農家が持ち込んだブドウから醸造、販売する生産者協同組合を示します。"
  },
  {
    id: "france-champagne-027",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程で搾汁された果汁について正しいものを選択してください。",
    choices: ["Cuvéeは酸の豊富なピュアな果汁だが、熟成向きではない。", "Tailleは酸が少なくフルーティであり、長い熟成に耐えうる。", "Tailleは酸の豊富なピュアな果汁だが、熟成向きではない。", "Cuvéeは酸の豊富なピュアな果汁であり、長い熟成に耐えうる。"],
    answerIndex: 3,
    explanation: "Cuvéeは最初に搾汁される酸の豊富なピュアな果汁で、長い熟成に耐えうるとされます。Tailleは後半に得られる果汁です。"
  },
  {
    id: "france-champagne-028",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上でMailly-Champagneに相当する番号を選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["13番", "14番", "5番", "15番"],
    answerIndex: 2,
    explanation: "Mailly-ChampagneはMontagne de Reims地区のグラン・クリュです。この地図では5番に相当します。"
  },
  {
    id: "france-champagne-029",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からGrand Cruと表示されたシャンパーニュの意味として適切なものを選択してください。",
    choices: ["格付け80%以上の村のブドウだけから造られた", "格付け100%の村のブドウだけから造られた", "格付け70%以上の村のブドウだけから造られた", "格付け90%以上の村のブドウだけから造られた"],
    answerIndex: 1,
    explanation: "Grand Cruは、格付け100%の村のブドウだけから造られたシャンパーニュに表示できます。"
  },
  {
    id: "france-champagne-030",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からフランスのパリから140kmほど東に位置する産地を選択してください。",
    choices: ["ブルゴーニュ", "アルザス", "シャンパーニュ", "ジュラ"],
    answerIndex: 2,
    explanation: "シャンパーニュ地方はパリから約140km東に位置する冷涼な産地です。"
  },
  {
    id: "france-champagne-031",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの甘辛度Dosage Zéroの残糖度を選択してください。",
    choices: ["17〜32g/リットル", "3g/リットル未満", "32〜50g/リットル", "0〜6g/リットル"],
    answerIndex: 1,
    explanation: "Dosage ZéroはPas Doséと同様、残糖度3g/リットル未満の表示です。"
  },
  {
    id: "france-champagne-032",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方のブドウ畑の7割を占める県名を選択してください。",
    choices: ["Reims", "Aisne", "Seine-et-Marne", "Marne"],
    answerIndex: 3,
    explanation: "シャンパーニュ地方のブドウ畑の約7割はMarne県にあります。Reimsは都市名です。"
  },
  {
    id: "france-champagne-033",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上で3番のクリュを選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["Bouzy", "Oger", "Chouilly", "Cramant"],
    answerIndex: 0,
    explanation: "この地図で3番に相当するグラン・クリュはBouzyです。Montagne de Reims地区の重要な村です。"
  },
  {
    id: "france-champagne-034",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方のAOCワインChampagneが生産することができるワインの種類を選択してください。",
    choices: ["赤ロゼ白の発泡", "赤ロゼ白の非発泡", "ロゼ白の発泡", "赤白の非発泡"],
    answerIndex: 2,
    explanation: "AOC Champagneで生産できるのは、白またはロゼの発泡ワインです。非発泡ワインは別AOCで整理します。"
  },
  {
    id: "france-champagne-035",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程の圧搾でTailleとして許される最大の搾汁量を選択してください。",
    choices: ["4000キロのブドウから2550リットル", "4000キロのブドウから2050リットル", "4000キロのブドウから1050リットル", "4000キロのブドウから500リットル"],
    answerIndex: 3,
    explanation: "シャンパーニュの圧搾では、4000キロのブドウからCuvée 2050リットル、Taille 500リットルまでが認められます。"
  },
  {
    id: "france-champagne-036",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュ地方で使われている主要品種の中から次の特徴に合致するものを選択してください。「主要3品種の中では栽培面積が一番大きく、全体の38%を占める。シャンパーニュにボディと骨格をもたらす。」",
    choices: ["ピノ・ブラン", "シャルドネ", "ムニエ", "ピノ・ノワール"],
    answerIndex: 3,
    explanation: "ピノ・ノワールはシャンパーニュの主要3品種の中で栽培面積が大きく、ワインにボディと骨格をもたらします。"
  },
  {
    id: "france-champagne-037",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュNon Millésiméの法定熟成期間を選択してください。",
    choices: ["澱抜きから出荷まで最低12ヶ月", "二次発酵のための瓶詰めから出荷まで最低12ヶ月", "澱抜きから出荷まで最低15ヶ月", "二次発酵のための瓶詰めから出荷まで最低15ヶ月"],
    answerIndex: 3,
    explanation: "Non Millésiméのシャンパーニュは、二次発酵のための瓶詰めから出荷まで最低15ヶ月の熟成が必要です。"
  },
  {
    id: "france-champagne-038",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、Dosageを意味する日本語を選択してください。",
    choices: ["収穫", "糖分調整", "動瓶", "アルコール発酵"],
    answerIndex: 1,
    explanation: "Dosageは糖分調整を意味します。澱抜き後に門出のリキュールを加え、甘辛度を調整する工程です。"
  },
  {
    id: "france-champagne-039",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、マロラクティック発酵を意味するフランス語を選択してください。",
    choices: ["Maturation sur lies", "Fermentation Malolactique", "Dosage", "Dégorgement"],
    answerIndex: 1,
    explanation: "マロラクティック発酵はFermentation Malolactiqueです。Maturation sur liesは澱とともに熟成させる工程、Dégorgementは澱抜きです。"
  },
  {
    id: "france-champagne-040",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方Montagne de Reims地区に属し、力強くボディのしっかりしたピノ・ノワールを生み出す南向きのグラン・クリュを選択してください。",
    choices: ["Bouzy", "Mailly-Champagne", "Verzenay", "Le Mesnil sur Oger"],
    answerIndex: 0,
    explanation: "BouzyはMontagne de Reims地区に属する南向きのグラン・クリュで、力強くボディのしっかりしたピノ・ノワールで知られます。"
  },
  {
    id: "france-champagne-041",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュのラベル表示略号NMの説明として適切なものを選択してください。",
    choices: ["協同組合にブドウを持ち込み醸造を委託、相当量のシャンパーニュを買い取り自社銘柄で販売する栽培農家。", "原料となるブドウを他社から購入し醸造する。いわゆるメゾン。", "加盟する栽培農家が持ち込んだブドウから醸造、販売する生産者協同組合。", "一族の所有するブドウ畑で収穫された原料を用いて醸造、販売する栽培農家。"],
    answerIndex: 1,
    explanation: "NMはNégociant-Manipulantの略で、原料となるブドウを他社から購入し醸造する、いわゆるメゾンを示します。"
  },
  {
    id: "france-champagne-042",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュ地方で使われている主要品種の中から次の特徴に合致するものを選択してください。「発芽の遅い品種で栽培面積の占有率は31%。シャンパーニュにフルーティさとしなやかさをもたらす。」",
    choices: ["ムニエ", "ピノ・ノワール", "ピノ・ブラン", "シャルドネ"],
    answerIndex: 0,
    explanation: "ムニエは発芽が遅く、シャンパーニュにフルーティさとしなやかさをもたらす主要品種です。"
  },
  {
    id: "france-champagne-043",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュNon Millésiméの醸造で、二次発酵のための瓶詰めから澱抜きまで、澱とともに熟成させる期間を選択してください。",
    choices: ["最低15ヶ月", "最低12ヶ月", "最低24ヶ月", "最低9ヶ月"],
    answerIndex: 1,
    explanation: "Non Millésiméでは、二次発酵のための瓶詰めから澱抜きまで、澱とともに最低12ヶ月熟成させます。"
  },
  {
    id: "france-champagne-044",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程で許される最大の合計搾汁量を選択してください。",
    choices: ["2000キロのブドウから2550リットル", "4000キロのブドウから2550リットル", "4000キロのブドウから2050リットル", "2000キロのブドウから2050リットル"],
    answerIndex: 1,
    explanation: "シャンパーニュの圧搾では、4000キロのブドウから最大2550リットルまでの搾汁が認められます。"
  },
  {
    id: "france-champagne-045",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方Vallée de la Marne地区に属するグラン・クリュを選択してください。",
    choices: ["Beaumont sur Vesle", "Aÿ", "Sillery", "Verzy"],
    answerIndex: 1,
    explanation: "AÿはVallée de la Marne地区に属する代表的なグラン・クリュです。"
  },
  {
    id: "france-champagne-046",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上で13番のクリュを選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["Verzenay", "Mailly-Champagne", "Chouilly", "Bouzy"],
    answerIndex: 2,
    explanation: "この地図で13番に相当するグラン・クリュはChouillyです。Côte des Blancs地区の重要な村です。"
  },
  {
    id: "france-champagne-047",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、動瓶を意味するフランス語を選択してください。",
    choices: ["Fermentation Alcoolique", "Vendange", "Assemblage", "Remuage"],
    answerIndex: 3,
    explanation: "動瓶はRemuageです。澱を瓶口に集めるため、瓶を少しずつ回転させながら倒立させていく工程です。"
  },
  {
    id: "france-champagne-048",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、Assemblageを意味する日本語を選択してください。",
    choices: ["アルコール発酵", "マロラクティック発酵", "調合", "圧搾"],
    answerIndex: 2,
    explanation: "Assemblageは調合を意味します。複数のワインを組み合わせ、シャンパーニュの味わいを整える重要な工程です。"
  },
  {
    id: "france-champagne-049",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上でVerzyに相当する番号を選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["16番", "13番", "15番", "9番"],
    answerIndex: 3,
    explanation: "VerzyはMontagne de Reims地区のグラン・クリュです。この地図では9番に相当します。"
  },
  {
    id: "france-champagne-050",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方で、かつて村（クリュ）が格付けされていた時の格付け範囲を選択してください。",
    choices: ["60〜100%", "80〜100%", "50〜100%", "70〜100%"],
    answerIndex: 1,
    explanation: "シャンパーニュ地方では、かつて村（クリュ）が80〜100%の範囲で格付けされていました。"
  },
  {
    id: "france-champagne-051",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方のAOCワイン Rosé des Riceysが使用できる品種を選択してください。",
    choices: ["ムニエのみ", "ピノ・ノワールのみ", "ピノ・ノワール、ムニエ", "ピノ・ノワール、ムニエ、シャルドネ"],
    answerIndex: 1,
    explanation: "Rosé des Riceysは、ピノ・ノワールのみから造られるロゼの非発泡ワインです。"
  },
  {
    id: "france-champagne-052",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュのラベル表示略号RCの説明として適切なものを選択してください。",
    choices: ["原料となるブドウを他社から購入し醸造する。いわゆるメゾン。", "加盟する栽培農家が持ち込んだブドウから醸造、販売する生産者協同組合。", "協同組合にブドウを持ち込み醸造を委託、相当量のシャンパーニュを買い取り自社銘柄で販売する栽培農家。", "自社畑で収穫されたブドウのみを用い、自ら醸造も行う栽培農家。"],
    answerIndex: 2,
    explanation: "RCはRécoltant-Coopérateurの略で、協同組合に醸造を委託し、相当量のシャンパーニュを買い取って自社銘柄で販売する栽培農家を示します。"
  },
  {
    id: "france-champagne-053",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュのラベル表示略号NDの説明として適切なものを選択してください。",
    choices: ["完成したシャンパーニュを購入し、自社ブランドのラベルを貼って販売する流通業者。", "協同組合にブドウを持ち込み醸造を委託、相当量のシャンパーニュを買い取り自社銘柄で販売する栽培農家。", "スーパーやレストランなどのプライベートラベルが貼られたシャンパーニュ。", "自社畑で収穫されたブドウのみを用い、自ら醸造も行う栽培農家。"],
    answerIndex: 0,
    explanation: "NDはNégociant-Distributeurの略で、完成したシャンパーニュを購入し、自社ブランドのラベルを貼って販売する流通業者を示します。"
  },
  {
    id: "france-champagne-054",
    category: "フランス/シャンパーニュ",
    importance: "B",
    question: "次の中からシャンパーニュ地方の大手メゾンの出荷量の全体に対する割合を選択してください。",
    choices: ["約9割", "約7割", "約5割", "約3割"],
    answerIndex: 1,
    explanation: "シャンパーニュ地方では、大手メゾンの出荷量が全体の約7割を占めます。"
  },
  {
    id: "france-champagne-055",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上でLe Mesnil sur Ogerに相当する番号を選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["1番", "15番", "6番", "3番"],
    answerIndex: 1,
    explanation: "Le Mesnil sur OgerはCôte des Blancs地区のグラン・クリュです。この地図では15番に相当します。"
  },
  {
    id: "france-champagne-056",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程で24グラム/リットルの糖分から二次発酵で得られるガス圧を選択してください。",
    choices: ["6気圧", "4気圧", "2気圧", "8気圧"],
    answerIndex: 0,
    explanation: "シャンパーニュでは、24グラム/リットルの糖分により瓶内二次発酵で約6気圧のガス圧が得られます。"
  },
  {
    id: "france-champagne-057",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の説明に合致するシャンパーニュの生産地区を選択してください。「ランスとエペルネの間に位置する小高い丘の周りにブドウ畑が広がる。ピノ・ノワールが多く植えられている。」",
    choices: ["Côte des Blancs", "Vallée de la Marne", "Montagne de Reims", "Côte des Bars"],
    answerIndex: 2,
    explanation: "Montagne de Reimsはランスとエペルネの間に位置する小高い丘の周辺に広がり、ピノ・ノワールが多く植えられています。"
  },
  {
    id: "france-champagne-058",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの製造工程の圧搾でCuvéeとして許される最大の搾汁量を選択してください。",
    choices: ["4000キロのブドウから2050リットル", "2000キロのブドウから2550リットル", "4000キロのブドウから2550リットル", "2000キロのブドウから2050リットル"],
    answerIndex: 0,
    explanation: "Cuvéeとして許される最大の搾汁量は、4000キロのブドウから2050リットルです。"
  },
  {
    id: "france-champagne-059",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、Deuxième Fermentation en Bouteilleを意味する日本語を選択してください。",
    choices: ["打栓", "果汁清澄", "動瓶", "瓶内二次発酵"],
    answerIndex: 3,
    explanation: "Deuxième Fermentation en Bouteilleは瓶内二次発酵を意味します。シャンパーニュの泡を生み出す重要な工程です。"
  },
  {
    id: "france-champagne-060",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方Montagne de Reims地区に属し、エレガントで引き締まったピノ・ノワールを生み出す北向きのグラン・クリュを選択してください。",
    choices: ["Ambonnay", "Le Mesnil sur Oger", "Verzy", "Bouzy"],
    answerIndex: 2,
    explanation: "VerzyはMontagne de Reims地区に属する北向きのグラン・クリュで、エレガントで引き締まったピノ・ノワールを生み出します。"
  },
  {
    id: "france-champagne-061",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方でプルミエクリュと認められている42村の格付けを選択してください。",
    choices: ["90〜99%", "80〜99%", "90〜100%", "80〜89%"],
    answerIndex: 0,
    explanation: "シャンパーニュ地方でプルミエクリュと認められている42村の格付けは90〜99%です。"
  },
  {
    id: "france-champagne-062",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "下記の画像はフランス、シャンパーニュ地方のグラン・クリュの地図です。地図上で16番のクリュを選択してください。",
    image: {
      src: "assets/champagne-grand-cru-map.jpg",
      alt: "シャンパーニュ地方のグラン・クリュ地図",
      caption: "シャンパーニュ地方 グラン・クリュ地図"
    },
    choices: ["Oger", "Verzy", "Bouzy", "Verzenay"],
    answerIndex: 0,
    explanation: "この地図で16番に相当するグラン・クリュはOgerです。Côte des Blancs地区の重要な村です。"
  },
  {
    id: "france-champagne-063",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュの甘辛度Extra Brutの残糖度を選択してください。",
    choices: ["12〜17g/リットル", "50g/リットル以上", "32〜50g/リットル", "0〜6g/リットル"],
    answerIndex: 3,
    explanation: "Extra Brutの残糖度は0〜6g/リットルです。Brut NatureやPas Doséより広い範囲の辛口表示です。"
  },
  {
    id: "france-champagne-064",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "シャンパーニュにLiqueur de Tirageとして添加される糖分は1リットルあたりどれくらいか選択してください。",
    choices: ["12グラム", "24グラム", "48グラム", "18グラム"],
    answerIndex: 1,
    explanation: "Liqueur de Tirageとして添加される糖分は1リットルあたり24グラムです。瓶内二次発酵で約6気圧のガス圧を得る基準として重要です。"
  },
  {
    id: "france-champagne-065",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中から、シャンパーニュの製造工程で、Pressurageを意味する日本語を選択してください。",
    choices: ["澱抜き", "瓶内熟成", "圧搾", "収穫"],
    answerIndex: 2,
    explanation: "Pressurageは圧搾を意味します。収穫したブドウから果汁を搾る工程です。"
  },
  {
    id: "france-champagne-066",
    category: "フランス/シャンパーニュ",
    importance: "A",
    question: "次の中からシャンパーニュ地方の主な土壌を選択してください。",
    choices: ["泥灰質", "白亜質", "粘土質", "砂質"],
    answerIndex: 1,
    explanation: "シャンパーニュ地方の主な土壌は白亜質です。保水性と排水性をあわせ持ち、冷涼な産地のブドウ栽培に関わります。"
  },
  {
    id: "france-bourgogne-aoc-001",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ポマール」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤ワインのみ", "白ワインのみ", "ロゼワインのみ"],
    answerIndex: 1,
    explanation: "Pommardはコート・ド・ボーヌ地区の村名AOCで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-002",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ド・ニュイ地区の村を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Gevrey-Chambertin, Chambolle-Musigny, Marsannay, Morey-Saint-Denis", "Fixin, Morey-Saint-Denis, Vosne-Romanée, Chambolle-Musigny", "Chambolle-Musigny, Vosne-Romanée, Marsannay, Vougeot", "Fixin, Morey-Saint-Denis, Chambolle-Musigny, Vosne-Romanée"],
    answerIndex: 3,
    explanation: "コート・ド・ニュイでは、北からFixin、Morey-Saint-Denis、Chambolle-Musigny、Vosne-Romanéeの順に位置します。"
  },
  {
    id: "france-bourgogne-aoc-003",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Meursault", "Pouilly-Fuissé", "Saint-Bris", "Saint-Véran", "Savigny-lès-Beaune", "Beaujolais", "Chassagne-Montrachet", "Gevrey-Chambertin"],
    answerIndexes: [7],
    maxSelections: 2,
    explanation: "この選択肢の中ではGevrey-Chambertinが赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-004",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「コート・ド・ブルイィ」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "赤・白・ロゼワイン", "ロゼワインのみ", "白ワインのみ"],
    answerIndex: 0,
    explanation: "Côte de Brouillyはボージョレ地区のクリュのひとつで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-005",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ニュイ・サン・ジョルジュ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤ワインのみ", "白ワインのみ", "ロゼワインのみ"],
    answerIndex: 0,
    explanation: "Nuits-Saint-Georgesは村名AOCで、赤ワインと白ワインの生産が認められています。"
  },
  {
    id: "france-bourgogne-aoc-006",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サン・ブリ」の品種を選択してください。",
    choices: ["ソーヴィニョン・ブラン", "ピノ・ノワール", "シャルドネ", "ガメイ"],
    answerIndex: 0,
    explanation: "Saint-Brisはブルゴーニュでは珍しく、ソーヴィニョン・ブランを用いる白ワインのAOCです。"
  },
  {
    id: "france-bourgogne-aoc-007",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「リュリー」を生産することができる地区を選択してください。",
    choices: ["ボージョレ地区", "コート・ド・ニュイ地区", "シャブリ地区", "コート・シャロネーズ地区"],
    answerIndex: 3,
    explanation: "Rullyはコート・シャロネーズ地区の村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-008",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からボージョレ地区をのぞくブルゴーニュ地方において、ピノ・ノワールが占める栽培比率を選択してください。",
    choices: ["30.5%", "51%", "39.5%", "62%"],
    answerIndex: 2,
    explanation: "ボージョレ地区を除くブルゴーニュ地方では、ピノ・ノワールの栽培比率は選択肢の中では39.5%です。"
  },
  {
    id: "france-bourgogne-aoc-009",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のAOCの総数を選択してください。",
    choices: ["約80個", "約20個", "約40個", "約160個"],
    answerIndex: 0,
    explanation: "ブルゴーニュ地方には多くのAOCがあり、総数は約80個です。"
  },
  {
    id: "france-bourgogne-aoc-010",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補の中から赤ワインと白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Irancy", "Chénas", "Chorey-lès-Beaune", "Pouilly-Fuissé", "Saint-Bris", "Pouilly-Loché", "Mercurey", "Volnay"],
    answerIndexes: [2, 6],
    maxSelections: 2,
    explanation: "Chorey-lès-BeauneとMercureyは、赤ワインと白ワインの生産が認められているAOCです。"
  },
  {
    id: "france-bourgogne-aoc-011",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインの産地を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Saint-Bris, Santenay, Viré-Clessé, Brouilly", "Montagny, Saint-Bris, Santenay, Bouzeron", "Montagny, Brouilly, Viré-Clessé, Bouzeron", "Saint-Bris, Saint-Amour, Fixin, Bouzeron"],
    answerIndex: 0,
    explanation: "北から見ると、Saint-Bris、Santenay、Viré-Clessé、Brouillyの順になります。"
  },
  {
    id: "france-bourgogne-aoc-012",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方の年間ワイン生産量（ボージョレ地区を除く）に最も近いものを選択してください。",
    choices: ["82万ヘクトリットル", "325万ヘクトリットル", "143万ヘクトリットル", "234万ヘクトリットル"],
    answerIndex: 2,
    explanation: "ボージョレ地区を除くブルゴーニュ地方の年間ワイン生産量は、選択肢の中では143万ヘクトリットルが最も近い値です。"
  },
  {
    id: "france-bourgogne-aoc-013",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方マコネ地区の村名AOCを全て選択してください。2個まで選択できます。",
    choices: ["Bouzeron", "Givry", "Pouilly-Vinzelles", "Rully", "Montagny", "Mercurey"],
    answerIndexes: [2],
    maxSelections: 2,
    explanation: "この選択肢の中でマコネ地区の村名AOCに該当するのはPouilly-Vinzellesです。"
  },
  {
    id: "france-bourgogne-aoc-014",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Morey-Saint-Denis", "Volnay", "Côte de Beaune", "Ladoix", "Auxey-Duresses", "Vézelay", "Juliénas", "Vougeot"],
    answerIndexes: [1, 6],
    maxSelections: 2,
    explanation: "VolnayとJuliénasは赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-015",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「オーセ・デュレス」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤・白ワイン", "赤・白・ロゼワイン", "白ワインのみ"],
    answerIndex: 1,
    explanation: "Auxey-Duressesは赤ワインと白ワインの生産が認められている村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-016",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインと白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Beaujolais", "Irancy", "Saint-Bris", "Côte de Brouilly", "Vézelay", "Montagny", "Meursault", "Monthélie"],
    answerIndexes: [6, 7],
    maxSelections: 2,
    explanation: "MeursaultとMonthélieは、赤ワインと白ワインの生産が認められているAOCです。"
  },
  {
    id: "france-bourgogne-aoc-017",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方のAOCの種類を選択してください。「ブルゴーニュのAOCシステムで最も底辺に位置するAOCである。」",
    choices: ["Appellation Communale", "Appellation Régionale", "Appellation Grand Cru", "Appellation Nationale"],
    answerIndex: 1,
    explanation: "ブルゴーニュのAOC階層で最も広域かつ基礎に位置するのはAppellation Régionaleです。"
  },
  {
    id: "france-bourgogne-aoc-018",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Auxey-Duresses", "Marsannay", "Volnay", "Saint-Bris", "Côte de Beaune", "Chassagne-Montrachet", "Pouilly-Loché", "Maranges"],
    answerIndexes: [3, 6],
    maxSelections: 2,
    explanation: "Saint-BrisとPouilly-Lochéは白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-019",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ボージョレ・ヴィラージュ」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤ワインのみ", "赤・白・ロゼワイン", "赤・白ワイン"],
    answerIndex: 2,
    explanation: "Beaujolais-Villagesでは、赤・白・ロゼワインの生産が認められています。"
  },
  {
    id: "france-bourgogne-aoc-020",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ヴージョ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "白ワインのみ", "赤・白・ロゼワイン", "赤ワインのみ"],
    answerIndex: 0,
    explanation: "Vougeotは赤ワインと白ワインの生産が認められている村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-021",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Côte de Brouilly", "Beaune", "Givry", "Maranges", "Meursault", "Blagny", "Viré-Clessé", "Santenay"],
    answerIndexes: [0, 5],
    maxSelections: 2,
    explanation: "Côte de BrouillyとBlagnyは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-022",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サントネ」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤・白・ロゼワイン", "赤・白ワイン", "白ワインのみ"],
    answerIndex: 2,
    explanation: "Santenayは赤ワインと白ワインの生産が認められているAOCです。"
  },
  {
    id: "france-bourgogne-aoc-023",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方で1443年、ニコラ・ロランが困窮者のための施療院オテル・デューを建設した都市を選択してください。",
    choices: ["ボーヌ", "シャロン", "ディジョン", "トロワ"],
    answerIndex: 0,
    explanation: "ニコラ・ロランが1443年にオテル・デューを建設した都市はボーヌです。ブルゴーニュの歴史で重要な事項です。"
  },
  {
    id: "france-bourgogne-aoc-024",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Volnay", "Morey-Saint-Denis", "Beaune", "Pouilly-Loché", "Morgon", "Monthélie", "Saint-Romain", "Juliénas"],
    answerIndexes: [3],
    maxSelections: 2,
    explanation: "この選択肢の中で白ワインのみを生産できるAOCはPouilly-Lochéです。"
  },
  {
    id: "france-bourgogne-aoc-025",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・シャロネーズ地区の村名AOCを全て選択してください。2個まで選択できます。",
    choices: ["Givry", "Pouilly-Fuissé", "Rully", "Viré-Clessé", "Saint-Véran", "Pouilly-Vinzelles"],
    answerIndexes: [0, 2],
    maxSelections: 2,
    explanation: "GivryとRullyはコート・シャロネーズ地区の村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-026",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シャンボール・ミュジニー」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "赤・白・ロゼワイン", "赤・白ワイン", "ロゼワインのみ"],
    answerIndex: 0,
    explanation: "Chambolle-Musignyは赤ワインのみを生産できる村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-027",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シャブリ」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤・白・ロゼワイン", "白ワインのみ", "赤ワインのみ"],
    answerIndex: 2,
    explanation: "Chablisはシャルドネから造られる白ワインのみのAOCです。"
  },
  {
    id: "france-bourgogne-aoc-028",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤、白、ロゼワインを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Puligny-Montrachet", "Vougeot", "Morey-Saint-Denis", "Fleurie", "Beaujolais Villages", "Bourgogne Hautes-Côtes de Beaune", "Mâcon-Villages", "Monthélie"],
    answerIndexes: [4, 5],
    maxSelections: 2,
    explanation: "Beaujolais VillagesとBourgogne Hautes-Côtes de Beauneは、赤・白・ロゼワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-029",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中から主にソーヌ・エ・ロワール県に属しているブルゴーニュ地方の生産地区を選択してください。",
    choices: ["シャブリ地区", "マコネ地区", "コート・ド・ボーヌ地区", "グラン・オーセロワ地区"],
    answerIndex: 1,
    explanation: "マコネ地区は主にソーヌ・エ・ロワール県に属します。"
  },
  {
    id: "france-bourgogne-aoc-030",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シェナス」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤ワインのみ", "赤・白・ロゼワイン", "赤・白ワイン"],
    answerIndex: 1,
    explanation: "Chénasはボージョレ地区のクリュのひとつで、赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-031",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方（ボージョレ地区を除く）で白ワインの占める割合に最も近いものを選択してください。",
    choices: ["60%", "70%", "40%", "50%"],
    answerIndex: 0,
    explanation: "ボージョレ地区を除くブルゴーニュ地方では、白ワインの割合は選択肢の中では60%が最も近い値です。"
  },
  {
    id: "france-bourgogne-aoc-032",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「マルサネ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "白ワインのみ", "赤ワインのみ", "赤・白ワイン"],
    answerIndex: 0,
    explanation: "Marsannayは赤・白・ロゼワインの生産が認められている村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-033",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補からブルゴーニュ地方コート・シャロネーズ地区の村名AOCを全て選択してください。2個まで選択できます。",
    choices: ["Bouzeron", "Pouilly-Vinzelles", "Mercurey", "Viré-Clessé", "Pouilly-Fuissé", "Pouilly-Loché"],
    answerIndexes: [0, 2],
    maxSelections: 2,
    explanation: "BouzeronとMercureyはコート・シャロネーズ地区の村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-034",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ド・ニュイ地区の村を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Fixin, Chambolle-Musigny, Vosne-Romanée, Marsannay", "Vosne-Romanée, Nuits-Saint-Georges, Fixin, Vougeot", "Marsannay, Gevrey-Chambertin, Vosne-Romanée, Nuits-Saint-Georges", "Nuits-Saint-Georges, Fixin, Chambolle-Musigny, Morey-Saint-Denis"],
    answerIndex: 2,
    explanation: "コート・ド・ニュイでは、北からMarsannay、Gevrey-Chambertin、Vosne-Romanée、Nuits-Saint-Georgesの順になります。"
  },
  {
    id: "france-bourgogne-aoc-035",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サン・ヴェラン」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤・白ワイン", "ロゼワインのみ", "白ワインのみ"],
    answerIndex: 3,
    explanation: "Saint-Véranはマコネ地区の白ワインのみのAOCです。"
  },
  {
    id: "france-bourgogne-aoc-036",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「イランシー」の品種を選択してください。",
    choices: ["アリゴテ", "ガメイ", "ソーヴィニョン・ブラン", "ピノ・ノワール"],
    answerIndex: 3,
    explanation: "Irancyは主にピノ・ノワールから造られる赤ワインのAOCです。"
  },
  {
    id: "france-bourgogne-aoc-037",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Fleurie", "Saint-Romain", "Mâcon-Villages", "Chablis Premier Cru", "Pouilly-Vinzelles", "Maranges", "Fixin", "Vosne-Romanée"],
    answerIndexes: [0, 7],
    maxSelections: 2,
    explanation: "FleurieとVosne-Romanéeは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-038",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "以下の候補の中から赤、白、ロゼワインを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Chassagne-Montrachet", "Meursault", "Bourgogne Hautes-Côtes de Beaune", "Pouilly-Vinzelles", "Saint-Bris", "Beaujolais Supérieur", "Bourgogne Hautes-Côtes de Nuits", "Chablis"],
    answerIndexes: [2, 6],
    maxSelections: 2,
    explanation: "Bourgogne Hautes-Côtes de BeauneとBourgogne Hautes-Côtes de Nuitsは、赤・白・ロゼワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-039",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サン・トーバン」が生産することができるワインの種類を選択してください。",
    choices: ["白ワインのみ", "ロゼワインのみ", "赤・白ワイン", "赤・白・ロゼワイン"],
    answerIndex: 2,
    explanation: "Saint-Aubinは赤ワインと白ワインの生産が認められている村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-040",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方で、フィリップ豪胆公がガメイ種を植えることを禁止した年を選択してください。",
    choices: ["630年", "1141年", "1443年", "1395年"],
    answerIndex: 3,
    explanation: "フィリップ豪胆公がガメイ種の植え付けを禁止した年は1395年です。ブルゴーニュの品種史で重要な出来事です。"
  },
  {
    id: "france-bourgogne-aoc-041",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「モレ・サン・ドニ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "ロゼワインのみ", "赤ワインのみ", "赤・白・ロゼワイン"],
    answerIndex: 0,
    explanation: "Morey-Saint-Denisは赤ワインと白ワインの生産が認められている村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-042",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シャブリ・グラン・クリュ」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "ロゼワインのみ", "白ワインのみ", "赤・白ワイン"],
    answerIndex: 2,
    explanation: "Chablis Grand Cruは白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-043",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「サン・タムール」を生産することができる地区を選択してください。",
    choices: ["グラン・オーセロワ地区", "ボージョレ地区", "マコネ地区", "コート・ド・ニュイ地区"],
    answerIndex: 1,
    explanation: "Saint-Amourはボージョレ地区のクリュのひとつです。"
  },
  {
    id: "france-bourgogne-aoc-044",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ボージョレ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤ワインのみ", "赤・白ワイン", "ロゼワインのみ"],
    answerIndex: 0,
    explanation: "Beaujolaisは赤・白・ロゼワインの生産が認められているAOCです。"
  },
  {
    id: "france-bourgogne-aoc-045",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Vougeot", "Chablis Premier Cru", "Chénas", "Pouilly-Fuissé", "Côte de Brouilly", "Puligny-Montrachet", "Saint-Bris", "Beaujolais"],
    answerIndexes: [2, 4],
    maxSelections: 2,
    explanation: "ChénasとCôte de Brouillyは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-046",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方のAOCの種類を選択してください。「ブルゴーニュのAOCシステムで最上位に位置するAOCである。」",
    choices: ["Appellation Grand Cru", "Appellation Supérieure", "Appellation Nationale", "Appellation Communale"],
    answerIndex: 0,
    explanation: "ブルゴーニュのAOC階層で最上位に位置するのはAppellation Grand Cruです。"
  },
  {
    id: "france-bourgogne-aoc-047",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中から主にソーヌ・エ・ロワール県に属しているブルゴーニュ地方の生産地区を選択してください。",
    choices: ["シャブリ地区", "コート・ド・ニュイ地区", "コート・ド・ボーヌ地区", "コート・シャロネーズ地区"],
    answerIndex: 3,
    explanation: "コート・シャロネーズ地区は主にソーヌ・エ・ロワール県に属する生産地区です。"
  },
  {
    id: "france-bourgogne-aoc-048",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Givry", "Beaujolais", "Nuits-Saint-Georges", "Pouilly-Fuissé", "Pommard", "Chablis Premier Cru", "Beaujolais Supérieur", "Chassagne-Montrachet"],
    answerIndexes: [3, 5],
    maxSelections: 2,
    explanation: "Pouilly-FuisséとChablis Premier Cruは、この選択肢の中で白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-049",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「フルーリー」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤・白ワイン", "赤・白・ロゼワイン", "赤ワインのみ"],
    answerIndex: 3,
    explanation: "Fleurieはボージョレ地区のクリュのひとつで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-050",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「コート・ド・ボーヌ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤ワインのみ", "赤・白・ロゼワイン", "白ワインのみ"],
    answerIndex: 0,
    explanation: "Côte de Beauneは赤ワインと白ワインの生産が認められているAOCです。"
  },
  {
    id: "france-bourgogne-aoc-051",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ヴォーヌ・ロマネ」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "赤・白ワイン", "ロゼワインのみ", "赤・白・ロゼワイン"],
    answerIndex: 0,
    explanation: "Vosne-Romanéeはコート・ド・ニュイ地区の村名AOCで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-052",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤、白、ロゼワインを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Bourgogne Hautes-Côtes de Nuits", "Saint-Aubin", "Côte de Brouilly", "Beaujolais Supérieur", "Volnay", "Régnié", "Aloxe-Corton", "Mâcon"],
    answerIndexes: [0, 7],
    maxSelections: 2,
    explanation: "Bourgogne Hautes-Côtes de NuitsとMâconは、赤・白・ロゼワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-053",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Marsannay", "Brouilly", "Blagny", "Chambolle-Musigny", "Pouilly-Loché", "Vosne-Romanée", "Montagny", "Fixin"],
    answerIndexes: [4, 6],
    maxSelections: 2,
    explanation: "Pouilly-LochéとMontagnyは、この選択肢の中で白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-054",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインの産地を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Santenay, Saint-Amour, Volnay, Pouilly-Loché", "Fixin, Saint-Bris, Nuits-Saint-Georges, Brouilly", "Saint-Bris, Nuits-Saint-Georges, Volnay, Montagny", "Viré-Clessé, Nuits-Saint-Georges, Volnay, Saint-Amour"],
    answerIndex: 2,
    explanation: "北から見ると、Saint-Bris、Nuits-Saint-Georges、Volnay、Montagnyの順に位置します。"
  },
  {
    id: "france-bourgogne-aoc-055",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Savigny-lès-Beaune", "Volnay", "Saint-Bris", "Juliénas", "Beaujolais", "Fleurie", "Beaune", "Chablis"],
    answerIndexes: [2, 7],
    maxSelections: 2,
    explanation: "Saint-BrisとChablisは、この選択肢の中で白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-056",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中から主にヨンヌ県に属しているブルゴーニュ地方の生産地区を選択してください。",
    choices: ["コート・ド・ニュイ地区", "マコネ地区", "シャブリ地区", "コート・シャロネーズ地区"],
    answerIndex: 2,
    explanation: "シャブリ地区は主にヨンヌ県に属しています。"
  },
  {
    id: "france-bourgogne-aoc-057",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「サントネ」を生産することができる地区を選択してください。",
    choices: ["コート・ド・ニュイ地区", "ボージョレ地区", "コート・ド・ボーヌ地区", "シャブリ地区"],
    answerIndex: 2,
    explanation: "Santenayはコート・ド・ボーヌ地区に位置するAOCです。"
  },
  {
    id: "france-bourgogne-aoc-058",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方の年間ワイン生産量（ボージョレ地区のみ）に最も近いものを選択してください。",
    choices: ["143万ヘクトリットル", "60万ヘクトリットル", "230万ヘクトリットル", "320万ヘクトリットル"],
    answerIndex: 1,
    explanation: "ボージョレ地区のみの年間ワイン生産量は、選択肢の中では60万ヘクトリットルが最も近い値です。"
  },
  {
    id: "france-bourgogne-aoc-059",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方の生産地区を選択してください。「生産量の大部分が単一品種のガメイから造られるフルーティな赤ワインの産地。自らの村名を名乗る10個のクリュもある。」",
    choices: ["マコネ地区", "ボージョレ地区", "コート・シャロネーズ地区", "シャブリ地区"],
    answerIndex: 1,
    explanation: "単一品種のガメイから造られるフルーティな赤ワインと10のクリュで知られるのはボージョレ地区です。"
  },
  {
    id: "france-bourgogne-aoc-060",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サン・ロマン」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤ワインのみ", "赤・白ワイン", "白ワインのみ"],
    answerIndex: 2,
    explanation: "Saint-Romainはコート・ド・ボーヌ地区の村名AOCで、赤ワインと白ワインの生産が認められています。"
  },
  {
    id: "france-bourgogne-aoc-061",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ド・ニュイ地区の村を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Chambolle-Musigny, Gevrey-Chambertin, Vougeot, Nuits-Saint-Georges", "Nuits-Saint-Georges, Fixin, Vosne-Romanée, Gevrey-Chambertin", "Marsannay, Fixin, Gevrey-Chambertin, Nuits-Saint-Georges", "Vougeot, Nuits-Saint-Georges, Marsannay, Chambolle-Musigny"],
    answerIndex: 2,
    explanation: "コート・ド・ニュイ地区の村は、北からMarsannay、Fixin、Gevrey-Chambertin、Nuits-Saint-Georgesの順に位置します。"
  },
  {
    id: "france-bourgogne-aoc-062",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「シャサーニュ・モンラッシェ」を生産することができる地区を選択してください。",
    choices: ["マコネ地区", "コート・ド・ボーヌ地区", "ボージョレ地区", "コート・シャロネーズ地区"],
    answerIndex: 1,
    explanation: "Chassagne-Montrachetはコート・ド・ボーヌ地区に位置する村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-063",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "下記の説明に合致するブルゴーニュ地方の生産地区を選択してください。「コート・ドールの南に続く南北約25kmの産地。洗練さにやや欠けるものの総じてお値打ちな赤白ワインが造られている。」",
    choices: ["コート・シャロネーズ地区", "シャブリ地区", "マコネ地区", "コート・ド・ニュイ地区"],
    answerIndex: 0,
    explanation: "コート・ドールの南に続き、赤白ワインを産する産地はコート・シャロネーズ地区です。"
  },
  {
    id: "france-bourgogne-aoc-064",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方で1395年、フィリップ豪胆公が禁止したことを選択してください。",
    choices: ["ガメイ種を植えること", "修道院以外の場所でワインを造ること", "ロゼワインを造ること", "シャルドネ種を植えること"],
    answerIndex: 0,
    explanation: "1395年、フィリップ豪胆公はブルゴーニュでガメイ種を植えることを禁止しました。"
  },
  {
    id: "france-bourgogne-aoc-065",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「サン・タムール」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "ロゼワインのみ", "白ワインのみ", "赤・白ワイン"],
    answerIndex: 0,
    explanation: "Saint-Amourはボージョレ地区のクリュのひとつで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-066",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Givry", "Montagny", "Fixin", "Beaune", "Chorey-lès-Beaune", "Saint-Amour", "Chablis Grand Cru", "Auxey-Duresses"],
    answerIndexes: [1, 6],
    maxSelections: 2,
    explanation: "MontagnyとChablis Grand Cruは、この選択肢の中で白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-067",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Mercurey", "Chiroubles", "Mâcon", "Morey-Saint-Denis", "Pouilly-Loché", "Pommard", "Marsannay", "Fixin"],
    answerIndexes: [1, 5],
    maxSelections: 2,
    explanation: "ChiroublesとPommardは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-068",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Aloxe-Corton", "Beaujolais Villages", "Chablis", "Chénas", "Saint-Véran", "Pouilly-Fuissé", "Chambolle-Musigny", "Montagny"],
    answerIndexes: [3, 6],
    maxSelections: 2,
    explanation: "ChénasとChambolle-Musignyは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-069",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Vézelay", "Morey-Saint-Denis", "Santenay", "Chablis", "Saint-Amour", "Vosne-Romanée", "Mercurey", "Meursault"],
    answerIndexes: [0, 3],
    maxSelections: 2,
    explanation: "VézelayとChablisは、この選択肢の中で白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-070",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方の生産地区を選択してください。\n「この地区の多くの村では、赤ワインとともに白ワインも造られる。世界的に高価格で取引される白ワインのグラン・クリュはこの地区に集中している。」",
    choices: ["コート・シャロネーズ地区", "マコネ地区", "ボージョレ地区", "コート・ド・ボーヌ地区"],
    answerIndex: 3,
    explanation: "白ワインの銘醸グラン・クリュが集中するのはコート・ド・ボーヌ地区です。"
  },
  {
    id: "france-bourgogne-aoc-071",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からボージョレ地区をのぞくブルゴーニュ地方において、アリゴテが占める栽培比率を選択してください。",
    choices: ["9%", "12%", "18%", "6%"],
    answerIndex: 3,
    explanation: "ボージョレ地区を除くブルゴーニュ地方では、アリゴテの栽培比率は約6%です。"
  },
  {
    id: "france-bourgogne-aoc-072",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シャブリ・プルミエ・クリュ」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤・白・ロゼワイン", "白ワインのみ", "赤ワインのみ"],
    answerIndex: 2,
    explanation: "Chablis Premier Cruは白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-073",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインの産地を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Gevrey-Chambertin, Chambolle-Musigny, Chassagne-Montrachet, Irancy", "Gevrey-Chambertin, Pommard, Marsannay, Irancy", "Pommard, Meursault, Marsannay, Chambolle-Musigny", "Irancy, Marsannay, Vosne-Romanée, Meursault"],
    answerIndex: 3,
    explanation: "北から南へ、Irancy、Marsannay、Vosne-Romanée、Meursaultの順になります。"
  },
  {
    id: "france-bourgogne-aoc-074",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ラドワ」が生産することができるワインの種類を選択してください。",
    choices: ["白ワインのみ", "赤ワインのみ", "赤・白・ロゼワイン", "赤・白ワイン"],
    answerIndex: 3,
    explanation: "Ladoixは赤ワインと白ワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-075",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方のボーヌにオテル・デューが建設された年を選択してください。",
    choices: ["1443年", "1115年", "1789年", "630年"],
    answerIndex: 0,
    explanation: "ボーヌのオテル・デューは1443年に建設されました。"
  },
  {
    id: "france-bourgogne-aoc-076",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「シルーブル」が生産することができるワインの種類を選択してください。",
    choices: ["白ワインのみ", "ロゼワインのみ", "赤・白ワイン", "赤ワインのみ"],
    answerIndex: 3,
    explanation: "Chiroublesはボージョレ地区のクリュのひとつで、生産できるワインは赤ワインのみです。"
  },
  {
    id: "france-bourgogne-aoc-077",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Beaujolais Supérieur", "Beaujolais", "Côte de Beaune", "Volnay", "Régnié", "Morgon", "Pommard", "Mâcon-Villages"],
    answerIndexes: [7],
    maxSelections: 2,
    explanation: "この選択肢の中では、Mâcon-Villagesが白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-078",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインと白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Saint-Romain", "Beaujolais", "Maranges", "Bouzeron", "Blagny", "Volnay", "Chablis Premier Cru", "Gevrey-Chambertin"],
    answerIndexes: [0, 2],
    maxSelections: 2,
    explanation: "Saint-RomainとMarangesは、この選択肢の中で赤ワインと白ワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-079",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Morey-Saint-Denis", "Beaujolais", "Monthélie", "Pouilly-Loché", "Mâcon-Villages", "Chénas", "Fleurie", "Viré-Clessé"],
    answerIndexes: [5, 6],
    maxSelections: 2,
    explanation: "ChénasとFleurieは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-080",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「アロース・コルトン」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "白ワインのみ", "赤・白ワイン", "赤ワインのみ"],
    answerIndex: 2,
    explanation: "Aloxe-Cortonは赤ワインと白ワインを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-081",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ド・ニュイ地区の村を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Vougeot, Morey-Saint-Denis, Chambolle-Musigny, Marsannay", "Gevrey-Chambertin, Vougeot, Marsannay, Fixin", "Vosne-Romanée, Morey-Saint-Denis, Gevrey-Chambertin, Chambolle-Musigny", "Marsannay, Gevrey-Chambertin, Morey-Saint-Denis, Vougeot"],
    answerIndex: 3,
    explanation: "コート・ド・ニュイ地区では北からMarsannay、Gevrey-Chambertin、Morey-Saint-Denis、Vougeotの順です。"
  },
  {
    id: "france-bourgogne-aoc-082",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインの産地を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Marsannay, Meursault, Gevrey-Chambertin, Vosne-Romanée", "Chambolle-Musigny, Vosne-Romanée, Pommard, Meursault", "Vosne-Romanée, Gevrey-Chambertin, Marsannay, Meursault", "Marsannay, Pommard, Vosne-Romanée, Chambolle-Musigny"],
    answerIndex: 1,
    explanation: "北からChambolle-Musigny、Vosne-Romanée、Pommard、Meursaultの順になります。"
  },
  {
    id: "france-bourgogne-aoc-083",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「シェナス」を生産することができる地区を選択してください。",
    choices: ["シャブリ地区", "ボージョレ地区", "コート・ド・ニュイ地区", "コート・シャロネーズ地区"],
    answerIndex: 1,
    explanation: "Chénasはボージョレ地区のクリュのひとつです。"
  },
  {
    id: "france-bourgogne-aoc-084",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ブラニィ」が生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "白ワインのみ", "赤・白ワイン", "赤・白・ロゼワイン"],
    answerIndex: 0,
    explanation: "Blagnyは赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-085",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方の気候を選択してください。",
    choices: ["一般に大陸性または高山性気候、南部は海洋性気候の影響を受ける", "一般に半大陸性または地中海性気候、北部は高山性気候の影響を受ける", "一般に半大陸性または大陸性気候、南部は地中海性気候の影響を受ける", "一般に海洋性または地中海性気候、北部は大陸性気候の影響を受ける"],
    answerIndex: 2,
    explanation: "ブルゴーニュは一般に半大陸性または大陸性気候で、南部は地中海性気候の影響も受けます。"
  },
  {
    id: "france-bourgogne-aoc-086",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "B",
    question: "次の中からブルゴーニュ地方の特級畑クロ・ド・タールが誕生した年を選択してください。",
    choices: ["630年", "1115年", "1789年", "1141年"],
    answerIndex: 3,
    explanation: "Clos de Tartは1141年に誕生したとされる歴史ある畑です。"
  },
  {
    id: "france-bourgogne-aoc-087",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Bouzeron", "Pouilly-Fuissé", "Irancy", "Chorey-lès-Beaune", "Santenay", "Rully", "Chiroubles", "Chablis"],
    answerIndexes: [2, 6],
    maxSelections: 2,
    explanation: "IrancyとChiroublesは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-088",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方のAOCの種類を選択してください。\n「村名を冠したAOCである。単一の区画から造られた場合は区画名を名乗ることができる。」",
    choices: ["Appellation Communale", "Appellation Grand Cru", "Appellation Régionale", "Appellation Nationale"],
    answerIndex: 0,
    explanation: "村名を冠したAOCはAppellation Communaleです。"
  },
  {
    id: "france-bourgogne-aoc-089",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Pouilly-Vinzelles", "Marsannay", "Vougeot", "Volnay", "Monthélie", "Aloxe-Corton", "Blagny", "Chassagne-Montrachet"],
    answerIndexes: [3, 6],
    maxSelections: 2,
    explanation: "VolnayとBlagnyは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-090",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤、白、ロゼワインを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Beaujolais", "Pouilly-Vinzelles", "Fixin", "Pernand-Vergelesses", "Saint-Amour", "Pouilly-Fuissé", "Savigny-lès-Beaune", "Mâcon"],
    answerIndexes: [0, 7],
    maxSelections: 2,
    explanation: "BeaujolaisとMâconは赤・白・ロゼワインの生産が認められています。"
  },
  {
    id: "france-bourgogne-aoc-091",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方の生産地区を選択してください。\n「オーセール市から東に20kmに位置し、冷涼な気候から爽やかでミネラル感のあるシャルドネワインが生まれる。ワインの品質によって4つのAOCに分類されている。」",
    choices: ["マコネ地区", "ボージョレ地区", "シャブリ地区", "コート・シャロネーズ地区"],
    answerIndex: 2,
    explanation: "オーセール東方に位置し、4階層のAOCで知られるのはシャブリ地区です。"
  },
  {
    id: "france-bourgogne-aoc-092",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ド・ニュイ地区の村を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Chambolle-Musigny, Vougeot, Gevrey-Chambertin, Nuits-Saint-Georges", "Marsannay, Chambolle-Musigny, Vougeot, Vosne-Romanée", "Vougeot, Morey-Saint-Denis, Marsannay, Nuits-Saint-Georges", "Vougeot, Nuits-Saint-Georges, Gevrey-Chambertin, Fixin"],
    answerIndex: 1,
    explanation: "北からMarsannay、Chambolle-Musigny、Vougeot、Vosne-Romanéeの順に位置します。"
  },
  {
    id: "france-bourgogne-aoc-093",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・シャロネーズ地区の村名AOCを全て選択してください。2個まで選択できます。",
    choices: ["Pouilly-Vinzelles", "Viré-Clessé", "Rully", "Pouilly-Fuissé", "Montagny", "Saint-Véran"],
    answerIndexes: [2, 4],
    maxSelections: 2,
    explanation: "RullyとMontagnyはコート・シャロネーズ地区の村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-094",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から主にコート・ドール県に属しているブルゴーニュ地方の生産地区を選択してください。",
    choices: ["マコネ地区", "グラン・オーセロワ地区", "コート・ド・ニュイ地区", "シャブリ地区"],
    answerIndex: 2,
    explanation: "コート・ド・ニュイ地区は主にコート・ドール県に属します。"
  },
  {
    id: "france-bourgogne-aoc-095",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「ボーヌ」が生産することができるワインの種類を選択してください。",
    choices: ["ロゼワインのみ", "赤・白ワイン", "赤ワインのみ", "赤・白・ロゼワイン"],
    answerIndex: 1,
    explanation: "Beauneは赤ワインと白ワインの生産が認められています。"
  },
  {
    id: "france-bourgogne-aoc-096",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインの産地を北から南の順序で正しく並べたものを選択してください。",
    choices: ["Viré-Clessé, Saint-Amour, Montagny, Pouilly-Loché", "Brouilly, Saint-Amour, Saint-Bris, Montagny", "Santenay, Brouilly, Fixin, Pouilly-Loché", "Saint-Bris, Nuits-Saint-Georges, Bouzeron, Saint-Amour"],
    answerIndex: 3,
    explanation: "北からSaint-Bris、Nuits-Saint-Georges、Bouzeron、Saint-Amourの順です。"
  },
  {
    id: "france-bourgogne-aoc-097",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワイン「モルゴン」が生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤ワインのみ", "ロゼワインのみ", "白ワインのみ"],
    answerIndex: 1,
    explanation: "Morgonはボージョレのクリュで、赤ワインのみを生産できます。"
  },
  {
    id: "france-bourgogne-aoc-098",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中からブルゴーニュ地方コート・ドール県の県庁所在地を選択してください。",
    choices: ["リヨン", "ディジョン", "トロワ", "ボーヌ"],
    answerIndex: 1,
    explanation: "コート・ドール県の県庁所在地はディジョンです。"
  },
  {
    id: "france-bourgogne-aoc-099",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインと白ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Saint-Aubin", "Mâcon", "Montagny", "Beaujolais Villages", "Pouilly-Vinzelles", "Fixin", "Vézelay", "Régnié"],
    answerIndexes: [0, 5],
    maxSelections: 2,
    explanation: "Saint-AubinとFixinは赤ワインと白ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-aoc-100",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中でブルゴーニュ地方のAOCワイン「ニュイ・サン・ジョルジュ」を生産することができる地区を選択してください。",
    choices: ["シャブリ地区", "ボージョレ地区", "コート・シャロネーズ地区", "コート・ド・ニュイ地区"],
    answerIndex: 3,
    explanation: "Nuits-Saint-Georgesはコート・ド・ニュイ地区の村名AOCです。"
  },
  {
    id: "france-bourgogne-aoc-101",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "下記の説明に合致するブルゴーニュ地方の生産地区を選択してください。\n「ディジョン市を北端とし、ピノ・ノワールから造られる赤ワインの銘醸地で白ワインはごくわずかである。赤ワインのグラン・クリュはこの地区に集中している。」",
    choices: ["マコネ地区", "ボージョレ地区", "コート・ド・ニュイ地区", "コート・シャロネーズ地区"],
    answerIndex: 2,
    explanation: "ディジョンを北端とし赤のグラン・クリュが集中するのはコート・ド・ニュイ地区です。"
  },
  {
    id: "france-bourgogne-aoc-102",
    category: "フランス/ブルゴーニュ（概要・AOC）",
    importance: "A",
    question: "次の中から赤ワインのみを生産することができるAOCを全て選択してください。2個まで選択できます。",
    choices: ["Auxey-Duresses", "Mercurey", "Chablis", "Chassagne-Montrachet", "Morgon", "Côte de Brouilly", "Vézelay", "Puligny-Montrachet"],
    answerIndexes: [4, 5],
    maxSelections: 2,
    explanation: "MorgonとCôte de Brouillyは、この選択肢の中で赤ワインのみを生産できるAOCです。"
  },
  {
    id: "france-bourgogne-grand-cru-001",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュLa Grande Rueが属する村名を選択してください。",
    choices: ["Aloxe-Corton村", "Gevrey-Chambertin村", "Vosne-Romanée村", "Puligny-Montrachet村"],
    answerIndex: 2,
    explanation: "La Grande RueはVosne-Romanée村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-002",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Clos de la Roche", "Les Grands Champs", "Aux Malconsorts", "Charmes", "Hervelets", "Mazoyères-Chambertin", "Les Duresses", "Clos des Varoilles"],
    answerIndexes: [0, 5],
    maxSelections: 2,
    explanation: "Clos de la RocheとMazoyères-Chambertinはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-003",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上で6番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    answerText: "シャンベルタン",
    explanation: "地図上の6番はChambertin、カタカナではシャンベルタンです。"
  },
  {
    id: "france-bourgogne-grand-cru-004",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上でLa Grande Rueに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    choices: ["4番", "9番", "7番", "8番"],
    answerIndex: 3,
    explanation: "La Grande Rueに相当する番号は8番です。"
  },
  {
    id: "france-bourgogne-grand-cru-005",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Clos des 60 Ouvrées", "Clos Saint-Jacques", "Perrières", "Beauroy"],
    answerIndex: 3,
    explanation: "Beauroyはシャブリのプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-006",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュCortonが属する村名を選択してください。",
    choices: ["Pernand-Vergelesses村, Aloxe-Corton村", "Pernand-Vergelesses村, Ladoix-Serrigny村", "Pernand-Vergelesses村, Aloxe-Corton村, Ladoix-Serrigny村", "Aloxe-Corton村, Ladoix-Serrigny村"],
    answerIndex: 2,
    explanation: "CortonはPernand-Vergelesses村、Aloxe-Corton村、Ladoix-Serrigny村にまたがるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-007",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュChevalier-Montrachetが属している村名として適切なものを選択してください。",
    choices: ["Puligny-Montrachet村", "Meursault村, Puligny-Montrachet村", "Puligny-Montrachet村, Chassagne-Montrachet村", "Chassagne-Montrachet村"],
    answerIndex: 0,
    explanation: "Chevalier-MontrachetはPuligny-Montrachet村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-008",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方シャブリ地区のグラン・クリュの地図です。地図上で4番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-chablis-grand-cru.jpg",
      alt: "シャブリ地区のグラン・クリュ地図",
      caption: "シャブリ地区 グラン・クリュ地図"
    },
    answerText: "グルヌイユ",
    explanation: "地図上の4番はGrenouilles、カタカナではグルヌイユです。"
  },
  {
    id: "france-bourgogne-grand-cru-009",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方シャブリ地区で、ヴォーデジールとプルーズにまたがる非公式なグラン・クリュを選択してください。",
    choices: ["グルヌイユ", "ラ・ムートンヌ", "フルショム", "ヴァイヨン"],
    answerIndex: 1,
    explanation: "La Moutonneは、ヴォーデジールとプルーズにまたがる非公式なグラン・クリュとして知られます。"
  },
  {
    id: "france-bourgogne-grand-cru-010",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュGriotte-Chambertinが生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤・白・ロゼワイン", "赤ワインのみ", "白ワインのみ"],
    answerIndex: 2,
    explanation: "Griotte-Chambertinは赤ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-011",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュBâtard-Montrachetが属している村名として適切なものを選択してください。",
    choices: ["Chassagne-Montrachet村", "Meursault村, Puligny-Montrachet村", "Puligny-Montrachet村, Chassagne-Montrachet村", "Puligny-Montrachet村"],
    answerIndex: 2,
    explanation: "Bâtard-MontrachetはPuligny-Montrachet村とChassagne-Montrachet村にまたがるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-012",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のVolnay村に存在するグラン・クリュの数を選択してください。",
    choices: ["0個", "3個", "7個", "5個"],
    answerIndex: 0,
    explanation: "Volnay村にはグラン・クリュは存在しません。"
  },
  {
    id: "france-bourgogne-grand-cru-013",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方でグラン・クリュが存在する村名を選択してください。",
    choices: ["Savigny-lès-Beaune村", "Beaune村", "Pernand-Vergelesses村", "Monthélie村"],
    answerIndex: 2,
    explanation: "Pernand-Vergelesses村にはCortonなど、グラン・クリュに関わる畑があります。"
  },
  {
    id: "france-bourgogne-grand-cru-014",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・グラン・クリュ（非公式な名称も含む）を全て選択してください。2個まで選択できます。",
    choices: ["Vosgros", "Côte de Léchet", "Grenouilles", "Les Fourneaux", "Vaucoupin", "La Moutonne", "Beauroy", "Vaillons"],
    answerIndexes: [2, 5],
    maxSelections: 2,
    explanation: "Grenouillesはシャブリ・グラン・クリュ、La Moutonneは非公式なグラン・クリュ名として扱われます。"
  },
  {
    id: "france-bourgogne-grand-cru-015",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュRichebourgが生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "赤・白・ロゼワイン", "白ワインのみ", "赤・白ワイン"],
    answerIndex: 0,
    explanation: "Richebourgは赤ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-016",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Le Porusot", "Les Vignes Franches", "La Maltroie", "Musigny", "Clavaillon", "Clos de La Perrière", "Chambertin", "Aux Combottes"],
    answerIndexes: [3, 6],
    maxSelections: 2,
    explanation: "MusignyとChambertinはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-017",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上でLa Tâcheに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    choices: ["9番", "6番", "7番", "3番"],
    answerIndex: 0,
    explanation: "La Tâcheに相当する番号は9番です。"
  },
  {
    id: "france-bourgogne-grand-cru-018",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方シャブリ地区のグラン・クリュの地図です。地図上で2番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-chablis-grand-cru.jpg",
      alt: "シャブリ地区のグラン・クリュ地図",
      caption: "シャブリ地区 グラン・クリュ地図"
    },
    answerText: "ブーグロ",
    explanation: "地図上の2番はBougros、カタカナではブーグロです。"
  },
  {
    id: "france-bourgogne-grand-cru-019",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Clos des 60 Ouvrées", "Les Bouchères", "Ile des Vergelesses", "Montée de Tonnerre"],
    answerIndex: 3,
    explanation: "Montée de Tonnerreはシャブリのプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-020",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上で8番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    answerText: "ラトリシエール・シャンベルタン",
    answerTextAliases: ["ラトリシエールシャンベルタン"],
    explanation: "地図上の8番はLatricières-Chambertin、カタカナではラトリシエール・シャンベルタンです。"
  },
  {
    id: "france-bourgogne-grand-cru-021",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュBienvenues-Bâtard-Montrachetが属している村名として適切なものを選択してください。",
    choices: ["Chassagne-Montrachet村", "Puligny-Montrachet村", "Meursault村, Puligny-Montrachet村", "Puligny-Montrachet村, Chassagne-Montrachet村"],
    answerIndex: 1,
    explanation: "Bienvenues-Bâtard-MontrachetはPuligny-Montrachet村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-022",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のBeaune村に存在するグラン・クリュの数を選択してください。",
    choices: ["1個", "9個", "0個", "6個"],
    answerIndex: 2,
    explanation: "Beaune村にはグラン・クリュは存在しません。"
  },
  {
    id: "france-bourgogne-grand-cru-023",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のグラン・クリュを北から南の順序で正しく並べたものを選択してください。",
    choices: ["Mazis-Chambertin, Clos Saint-Denis, Bonnes-Mares, Grands Echézeaux", "Bonnes-Mares, Charmes-Chambertin, Mazis-Chambertin, Grands Echézeaux", "Grands Echézeaux, Clos Saint-Denis, Mazis-Chambertin, Richebourg", "Charmes-Chambertin, Clos Saint-Denis, Bonnes-Mares, Mazis-Chambertin"],
    answerIndex: 0,
    explanation: "北から南の順序では、Mazis-Chambertin、Clos Saint-Denis、Bonnes-Mares、Grands Echézeauxとなります。"
  },
  {
    id: "france-bourgogne-grand-cru-024",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュCharmes-Chambertinが生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤ワインのみ", "白ワインのみ", "赤・白・ロゼワイン"],
    answerIndex: 1,
    explanation: "Charmes-Chambertinは赤ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-025",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上で5番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    answerText: "ラ・ロマネ",
    answerTextAliases: ["ラロマネ"],
    explanation: "地図上の5番はLa Romanée、カタカナではラ・ロマネです。"
  },
  {
    id: "france-bourgogne-grand-cru-026",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュCorton-Charlemagneが、Pernand-Vergelesses村の区画から生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "白ワインのみ", "赤・白ワイン", "赤・白・ロゼワイン"],
    answerIndex: 1,
    explanation: "Corton-CharlemagneのPernand-Vergelesses村の区画から生産できるのは白ワインのみです。"
  },
  {
    id: "france-bourgogne-grand-cru-027",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、ヴォーヌ・ロマネ村で最も南に位置するグラン・クリュを選択してください。",
    choices: ["La Tâche", "La Grande Rue", "Romanée-Saint-Vivant", "Richebourg"],
    answerIndex: 0,
    explanation: "ヴォーヌ・ロマネ村のグラン・クリュの中で、最も南に位置するのはLa Tâcheです。"
  },
  {
    id: "france-bourgogne-grand-cru-028",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方シャブリ地区のグラン・クリュの地図です。地図上でPreusesに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-chablis-grand-cru.jpg",
      alt: "シャブリ地区のグラン・クリュ地図",
      caption: "シャブリ地区 グラン・クリュ地図"
    },
    choices: ["2番", "7番", "3番", "5番"],
    answerIndex: 3,
    explanation: "Preusesに相当する番号は5番です。"
  },
  {
    id: "france-bourgogne-grand-cru-029",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上で6番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    answerText: "ロマネ・コンティ",
    answerTextAliases: ["ロマネコンティ"],
    explanation: "地図上の6番はRomanée-Conti、カタカナではロマネ・コンティです。"
  },
  {
    id: "france-bourgogne-grand-cru-030",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上でMazis-Chambertinに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    choices: ["7番", "3番", "2番", "5番"],
    answerIndex: 2,
    explanation: "Mazis-Chambertinに相当する番号は2番です。"
  },
  {
    id: "france-bourgogne-grand-cru-031",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュClos de Tartが属する村名を選択してください。",
    choices: ["Morey-Saint-Denis村", "Gevrey-Chambertin村", "Vougeot村", "Chassagne-Montrachet村"],
    answerIndex: 0,
    explanation: "Clos de TartはMorey-Saint-Denis村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-032",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方でグラン・クリュが存在する村名を選択してください。",
    choices: ["Monthélie村", "Flagey-Echézeaux村", "Pommard村", "Savigny-lès-Beaune村"],
    answerIndex: 1,
    explanation: "Flagey-Echézeaux村にはグラン・クリュが存在します。"
  },
  {
    id: "france-bourgogne-grand-cru-033",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Les Fournières", "Côte de Léchet", "Les Bressandes", "Clos des Ursules"],
    answerIndex: 1,
    explanation: "Côte de Léchetはシャブリのプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-034",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Clos des Maréchaudes", "Les Sorbès", "Les Vignes Franches", "Les Fèves", "Chapelle-Chambertin", "Clos des Réas", "Beauregard", "Bonnes-Mares"],
    answerIndexes: [4, 7],
    maxSelections: 2,
    explanation: "Chapelle-ChambertinとBonnes-Maresはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-035",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュCriots-Bâtard-Montrachetが生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "白ワインのみ", "赤ワインのみ", "赤・白ワイン"],
    answerIndex: 1,
    explanation: "Criots-Bâtard-Montrachetは白ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-036",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュLatricières-Chambertinが生産することができるワインの種類を選択してください。",
    choices: ["赤ワインのみ", "赤・白・ロゼワイン", "白ワインのみ", "赤・白ワイン"],
    answerIndex: 0,
    explanation: "Latricières-Chambertinは赤ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-037",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のグラン・クリュを北から南の順序で正しく並べたものを選択してください。",
    choices: ["Clos Saint-Denis, Grands Echézeaux, Richebourg, La Tâche", "Bonnes-Mares, Richebourg, La Tâche, Grands Echézeaux", "Bonnes-Mares, La Tâche, Charmes-Chambertin, Mazis-Chambertin", "Clos Saint-Denis, Charmes-Chambertin, La Tâche, Richebourg"],
    answerIndex: 0,
    explanation: "北から南の順序では、Clos Saint-Denis、Grands Echézeaux、Richebourg、La Tâcheとなります。"
  },
  {
    id: "france-bourgogne-grand-cru-038",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のPommard村に存在するグラン・クリュの数を選択してください。",
    choices: ["6個", "0個", "4個", "3個"],
    answerIndex: 1,
    explanation: "Pommard村にはグラン・クリュは存在しません。"
  },
  {
    id: "france-bourgogne-grand-cru-039",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Champeaux", "Beauroy", "Genevrières", "Hautes Mourottes"],
    answerIndex: 1,
    explanation: "Beauroyはシャブリのプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-040",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Les Caillerets", "Les Rugiens-Bas", "La Tâche", "Aux Combottes", "A l'Ecu", "Chambertin", "Les Petits Vougeots", "Les Millandes"],
    answerIndexes: [2, 5],
    maxSelections: 2,
    explanation: "La TâcheとChambertinはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-041",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュの地図です。地図上で5番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-puligny-montrachet-grand-cru.jpg",
      alt: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュ地図",
      caption: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村 グラン・クリュ地図"
    },
    answerText: "クリオ・バタール・モンラッシェ",
    answerTextAliases: ["クリオバタールモンラッシェ"],
    explanation: "地図上の5番はCriots-Bâtard-Montrachet、カタカナではクリオ・バタール・モンラッシェです。"
  },
  {
    id: "france-bourgogne-grand-cru-042",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュGrands Echézeauxが属する村名を選択してください。",
    choices: ["Vougeot村", "Puligny-Montrachet村", "Flagey-Echézeaux村", "Pernand-Vergelesses村"],
    answerIndex: 2,
    explanation: "Grands EchézeauxはFlagey-Echézeaux村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-043",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュChevalier-Montrachetが生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤・白ワイン", "白ワインのみ", "赤ワインのみ"],
    answerIndex: 2,
    explanation: "Chevalier-Montrachetは白ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-044",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュの地図です。地図上でCriots-Bâtard-Montrachetに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-puligny-montrachet-grand-cru.jpg",
      alt: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュ地図",
      caption: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村 グラン・クリュ地図"
    },
    choices: ["5番", "2番", "4番", "3番"],
    answerIndex: 0,
    explanation: "Criots-Bâtard-Montrachetに相当する番号は5番です。"
  },
  {
    id: "france-bourgogne-grand-cru-045",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュRomanée-Saint-Vivantが属する村名を選択してください。",
    choices: ["Aloxe-Corton村", "Morey-Saint-Denis村", "Flagey-Echézeaux村", "Vosne-Romanée村"],
    answerIndex: 3,
    explanation: "Romanée-Saint-VivantはVosne-Romanée村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-046",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上で4番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    answerText: "シャペル・シャンベルタン",
    answerTextAliases: ["シャペルシャンベルタン"],
    explanation: "地図上の4番はChapelle-Chambertin、カタカナではシャペル・シャンベルタンです。"
  },
  {
    id: "france-bourgogne-grand-cru-047",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Aux Combottes", "Clos des Ursules", "Clos de la Roche", "Les Chouacheux", "Les Grands Champs", "Clos de la Bousse d'Or", "Chambertin Clos-de-Bèze", "Clavaillon"],
    answerIndexes: [2, 6],
    maxSelections: 2,
    explanation: "Clos de la RocheとChambertin Clos-de-Bèzeはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-048",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上で7番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    answerText: "ロマネ・サン・ヴィヴァン",
    answerTextAliases: ["ロマネサンヴィヴァン", "ロマネ・サンヴィヴァン"],
    explanation: "地図上の7番はRomanée-Saint-Vivant、カタカナではロマネ・サン・ヴィヴァンです。"
  },
  {
    id: "france-bourgogne-grand-cru-049",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のMorey-Saint-Denis村に存在するグラン・クリュの数を選択してください。",
    choices: ["5個", "7個", "8個", "6個"],
    answerIndex: 0,
    explanation: "Morey-Saint-Denis村には5つのグラン・クリュが存在します。"
  },
  {
    id: "france-bourgogne-grand-cru-050",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・グラン・クリュ（非公式な名称も含む）を全て選択してください。2個まで選択できます。",
    choices: ["Côte de Léchet", "Montée de Tonnerre", "La Moutonne", "Les Clos", "Beauroy", "Vaillons", "Mont de Milieu", "Fourchaume"],
    answerIndexes: [2, 3],
    maxSelections: 2,
    explanation: "La Moutonneは非公式なグラン・クリュ名、Les Closはシャブリ・グラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-051",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Hautes Mourottes", "Clos Saint-Jean", "Les Vignes Franches", "La Romanée", "Les Chaumes", "Romanée-Saint-Vivant", "Les Charmes", "En Cailleret"],
    answerIndexes: [3, 5],
    maxSelections: 2,
    explanation: "La RomanéeとRomanée-Saint-Vivantはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-052",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュCharlemagneが、Pernand-Vergelesses村の区画から生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤・白ワイン", "白ワインのみ", "赤ワインのみ"],
    answerIndex: 2,
    explanation: "Pernand-Vergelesses村の区画から生産されるCharlemagneは白ワインのみです。"
  },
  {
    id: "france-bourgogne-grand-cru-053",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のMonthélie村に存在するグラン・クリュの数を選択してください。",
    choices: ["7個", "8個", "9個", "0個"],
    answerIndex: 3,
    explanation: "Monthélie村にはグラン・クリュは存在しません。"
  },
  {
    id: "france-bourgogne-grand-cru-054",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Montmains", "Aux Combottes", "Les Vaucrains", "Santenots"],
    answerIndex: 0,
    explanation: "Montmainsはシャブリ・プルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-055",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュの地図です。地図上でBienvenues-Bâtard-Montrachetに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-puligny-montrachet-grand-cru.jpg",
      alt: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村にかけてのグラン・クリュ地図",
      caption: "ピュリニィ・モンラッシェ村からシャサーニュ・モンラッシェ村 グラン・クリュ地図"
    },
    choices: ["2番", "3番", "5番", "1番"],
    answerIndex: 3,
    explanation: "Bienvenues-Bâtard-Montrachetに相当する番号は1番です。"
  },
  {
    id: "france-bourgogne-grand-cru-056",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方シャブリ地区のグラン・クリュの地図です。地図上で3番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-chablis-grand-cru.jpg",
      alt: "シャブリ地区のグラン・クリュ地図",
      caption: "シャブリ地区 グラン・クリュ地図"
    },
    answerText: "レ・クロ",
    answerTextAliases: ["レクロ"],
    explanation: "地図上の3番はLes Clos、カタカナではレ・クロです。"
  },
  {
    id: "france-bourgogne-grand-cru-057",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュBonnes-Maresが属する村名を選択してください。",
    choices: ["Morey-Saint-Denis村, Chambolle-Musigny村", "Vougeot村, Vosne-Romanée村", "Chambolle-Musigny村, Vougeot村", "Gevrey-Chambertin村, Morey-Saint-Denis村"],
    answerIndex: 0,
    explanation: "Bonnes-MaresはMorey-Saint-Denis村とChambolle-Musigny村にまたがるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-058",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュMontrachetが属している村名として適切なものを選択してください。",
    choices: ["Chassagne-Montrachet村", "Puligny-Montrachet村, Chassagne-Montrachet村", "Puligny-Montrachet村", "Meursault村, Puligny-Montrachet村"],
    answerIndex: 1,
    explanation: "MontrachetはPuligny-Montrachet村とChassagne-Montrachet村にまたがるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-059",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュClos des Lambraysが属する村名を選択してください。",
    choices: ["Vougeot村", "Puligny-Montrachet村", "Morey-Saint-Denis村", "Ladoix-Serrigny村"],
    answerIndex: 2,
    explanation: "Clos des LambraysはMorey-Saint-Denis村に属するグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-060",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のSavigny-lès-Beaune村に存在するグラン・クリュの数を選択してください。",
    choices: ["7個", "0個", "9個", "1個"],
    answerIndex: 1,
    explanation: "Savigny-lès-Beaune村にはグラン・クリュは存在しません。"
  },
  {
    id: "france-bourgogne-grand-cru-061",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュの地図です。地図上で8番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-vosne-romanee-grand-cru.jpg",
      alt: "ヴォーヌ・ロマネ村からヴージョ村にかけてのグラン・クリュ地図",
      caption: "ヴォーヌ・ロマネ村からヴージョ村 グラン・クリュ地図"
    },
    answerText: "ラ・グランド・リュー",
    answerTextAliases: ["ラグランドリュー"],
    explanation: "地図上の8番はLa Grande Rue、カタカナではラ・グランド・リューです。"
  },
  {
    id: "france-bourgogne-grand-cru-062",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方シャブリ地区のグラン・クリュの地図です。地図上で7番のグラン・クリュ名をカタカナで入力してください。",
    image: {
      src: "assets/bourgogne-chablis-grand-cru.jpg",
      alt: "シャブリ地区のグラン・クリュ地図",
      caption: "シャブリ地区 グラン・クリュ地図"
    },
    answerText: "ヴォーデジール",
    answerTextAliases: ["ボーデジール", "ヴォデジール"],
    explanation: "地図上の7番はVaudésir、カタカナではヴォーデジールです。"
  },
  {
    id: "france-bourgogne-grand-cru-063",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Mont de Milieu", "Les Chaillots", "Aux Combottes", "Beauregard"],
    answerIndex: 0,
    explanation: "Mont de Milieuはシャブリ・プルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-064",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のグラン・クリュを北から南の順序で正しく並べたものを選択してください。",
    choices: ["Clos Saint-Denis, Mazis-Chambertin, Bonnes-Mares, La Tâche", "Mazis-Chambertin, Charmes-Chambertin, Clos Saint-Denis, Richebourg", "Bonnes-Mares, La Tâche, Charmes-Chambertin, Mazis-Chambertin", "Grands Echézeaux, Clos Saint-Denis, Richebourg, Mazis-Chambertin"],
    answerIndex: 1,
    explanation: "北から南の順序では、Mazis-Chambertin、Charmes-Chambertin、Clos Saint-Denis、Richebourgとなります。"
  },
  {
    id: "france-bourgogne-grand-cru-065",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュMontrachetが生産することができるワインの種類を選択してください。",
    choices: ["赤・白・ロゼワイン", "赤・白ワイン", "赤ワインのみ", "白ワインのみ"],
    answerIndex: 3,
    explanation: "Montrachetは白ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-066",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上でRuchottes-Chambertinに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    choices: ["8番", "1番", "2番", "6番"],
    answerIndex: 1,
    explanation: "Ruchottes-Chambertinに相当する番号は1番です。"
  },
  {
    id: "france-bourgogne-grand-cru-067",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のグラン・クリュRomanée-Contiが生産することができるワインの種類を選択してください。",
    choices: ["赤・白ワイン", "赤ワインのみ", "白ワインのみ", "赤・白・ロゼワイン"],
    answerIndex: 1,
    explanation: "Romanée-Contiは赤ワインのみを生産できるグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-068",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "ブルゴーニュ地方のFlagey-Echézeaux村に存在するグラン・クリュの数を選択してください。",
    choices: ["0個", "5個", "2個", "4個"],
    answerIndex: 2,
    explanation: "Flagey-Echézeaux村にはEchézeauxとGrands Echézeauxの2つのグラン・クリュが存在します。"
  },
  {
    id: "france-bourgogne-grand-cru-069",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・グラン・クリュ（非公式な名称も含む）を全て選択してください。2個まで選択できます。",
    choices: ["Montmains", "Beauroy", "La Moutonne", "Fourchaume", "Vaudésir", "Les Fourneaux", "Côte de Léchet", "Montée de Tonnerre"],
    answerIndexes: [2, 4],
    maxSelections: 2,
    explanation: "La Moutonneは非公式なグラン・クリュ名、Vaudésirはシャブリ・グラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-070",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のシャブリ・プルミエ・クリュを選択してください。",
    choices: ["Champeaux", "Beauroy", "Genevrières", "Hautes Mourottes"],
    answerIndex: 1,
    explanation: "Beauroyはシャブリ・プルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-071",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の画像はフランス、ブルゴーニュ地方ジュヴレ・シャンベルタン村のグラン・クリュの地図です。地図上でChambertin Clos-de-Bèzeに相当する番号を選択してください。",
    image: {
      src: "assets/bourgogne-gevrey-chambertin-grand-cru.jpg",
      alt: "ジュヴレ・シャンベルタン村のグラン・クリュ地図",
      caption: "ジュヴレ・シャンベルタン村 グラン・クリュ地図"
    },
    choices: ["5番", "3番", "6番", "8番"],
    answerIndex: 1,
    explanation: "Chambertin Clos-de-Bèzeに相当する番号は3番です。"
  },
  {
    id: "france-bourgogne-grand-cru-072",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のグラン・クリュを全て選択してください。2個まで選択できます。",
    choices: ["Clos de la Commaraine", "Aux Thorey", "Latricières-Chambertin", "Genevrières", "Clos de Tart", "Champ Canet", "Aux Coucherias", "Les Valozières"],
    answerIndexes: [2, 4],
    maxSelections: 2,
    explanation: "Latricières-ChambertinとClos de Tartはブルゴーニュ地方のグラン・クリュです。"
  },
  {
    id: "france-bourgogne-grand-cru-073",
    category: "フランス/ブルゴーニュ（グラン・クリュ）",
    importance: "A",
    question: "次の中からブルゴーニュ地方でグラン・クリュが存在する村名を選択してください。",
    choices: ["Santenay村", "Beaune村", "Volnay村", "Vougeot村"],
    answerIndex: 3,
    explanation: "Vougeot村にはClos de Vougeotなどのグラン・クリュが存在します。"
  },
  {
    id: "france-bourgogne-other-001",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Bouchèresが属する村名を選択してください。",
    choices: ["Vougeot村", "Puligny-Montrachet村", "Monthélie村", "Meursault村"],
    answerIndex: 3,
    explanation: "Les BouchèresはMeursault村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-002",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Clos de Tart", "Les Vaucrains", "Chevalier-Montrachet", "Corton-Charlemagne"],
    answerIndex: 1,
    explanation: "Les Vaucrainsはブルゴーニュ地方のプルミエ・クリュです。Clos de Tart、Chevalier-Montrachet、Corton-Charlemagneはいずれもグラン・クリュです。"
  },
  {
    id: "france-bourgogne-other-003",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、ジュヴレ・シャンベルタン村のグラン・クリュChambertin Clos-de-BèzeとGriotte-Chambertinの両方に隣接している畑を選択してください。",
    choices: ["Mazoyères-Chambertin", "Ruchottes-Chambertin", "Chapelle-Chambertin", "Charmes-Chambertin"],
    answerIndex: 2,
    explanation: "Chapelle-ChambertinはChambertin Clos-de-BèzeとGriotte-Chambertinの両方に隣接しています。"
  },
  {
    id: "france-bourgogne-other-004",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "B",
    question: "次のブルゴーニュ地方のAOCの中から、栽培面積が最大のところを選択してください。",
    choices: ["Gevrey-Chambertin", "Beaune", "Pouilly-Fuissé", "Meursault"],
    answerIndex: 2,
    explanation: "この選択肢の中で栽培面積が最大なのはPouilly-Fuisséです。"
  },
  {
    id: "france-bourgogne-other-005",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Vosne-Romanée村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Rugiens-Hauts", "Les Bressandes", "En Caradeux", "Clos des Réas"],
    answerIndex: 3,
    explanation: "Clos des RéasはVosne-Romanée村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-006",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Ladoix-Serrigny村に属するモノポールを選択してください。",
    choices: ["Clos des Cortons-Faiveley", "Clos des Réas", "Clos de Tart", "La Tâche"],
    answerIndex: 0,
    explanation: "Clos des Cortons-FaiveleyはLadoix-Serrigny村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-007",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Ursulesの所有者を選択してください。",
    choices: ["Domaine de la Vougeraie", "Comtes Lafon", "Domaine Albert Grivault", "Louis Jadot"],
    answerIndex: 3,
    explanation: "Clos des Ursulesの所有者はLouis Jadotです。"
  },
  {
    id: "france-bourgogne-other-008",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Gaudichots", "Clos des Hospices", "Champ Canet", "Les Amoureuses"],
    answerIndex: 1,
    explanation: "Clos des Hospicesは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-009",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方シャブリ地区のグラン・クリュが位置するところを選択してください。",
    choices: ["マルヌ川左岸", "ソーヌ川左岸", "スラン川右岸", "スラン川左岸"],
    answerIndex: 2,
    explanation: "シャブリ地区のグラン・クリュはスラン川右岸に位置します。"
  },
  {
    id: "france-bourgogne-other-010",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos du Fontenyが属する村を選択してください。",
    choices: ["Gevrey-Chambertin", "Chablis", "Mercurey", "Morey-Saint-Denis"],
    answerIndex: 0,
    explanation: "Clos du FontenyはGevrey-Chambertin村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-011",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールGrèves Vigne de l'Enfant Jésusが属する村を選択してください。",
    choices: ["Meursault", "Ladoix-Serrigny", "Beaune", "Nuits-Saint-Georges"],
    answerIndex: 2,
    explanation: "Grèves Vigne de l'Enfant JésusはBeaune村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-012",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のAOCワインBourgogne Passe-Tout-Grainsの品種規定を選択してください。",
    choices: ["ガメイ30%以上、ピノ・ノワール15%以上", "ガメイ75%以上", "ピノ・ノワール30%以上、ガメイ15%以上", "ガメイ85%以上"],
    answerIndex: 2,
    explanation: "Bourgogne Passe-Tout-Grainsは、ピノ・ノワール30%以上、ガメイ15%以上という品種規定がポイントです。"
  },
  {
    id: "france-bourgogne-other-013",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方で最も栽培面積の小さいグラン・クリュを選択してください。",
    choices: ["Clos des Lambrays", "Musigny", "Clos Saint-Denis", "La Romanée"],
    answerIndex: 3,
    explanation: "ブルゴーニュ地方で最も栽培面積の小さいグラン・クリュはLa Romanéeです。"
  },
  {
    id: "france-bourgogne-other-014",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Vosne-Romanée村に属するプルミエ・クリュを選択してください。",
    choices: ["En Caradeux", "La Maladière", "Clos Saint-Jacques", "Les Suchots"],
    answerIndex: 3,
    explanation: "Les SuchotsはVosne-Romanée村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-015",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、シャブリ・グラン・クリュLes Closに隣接している畑を選択してください。",
    choices: ["Bougros", "Preuses", "Grenouilles", "Blanchot"],
    answerIndex: 3,
    explanation: "Les Closに隣接している畑として、選択肢の中ではBlanchotが該当します。"
  },
  {
    id: "france-bourgogne-other-016",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Fèves", "Les Pucelles", "Clos de la Maréchale", "Clos de Vougeot"],
    answerIndex: 2,
    explanation: "Clos de la Maréchaleは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-017",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Criots-Bâtard-Montrachet", "Musigny", "Aux Guettes", "Ruchottes-Chambertin"],
    answerIndex: 2,
    explanation: "Aux Guettesはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-018",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Gevrey-Chambertin村に属するモノポールを選択してください。",
    choices: ["La Grande Rue", "Clos des Ursules", "Clos des Ruchottes", "Clos de la Barre"],
    answerIndex: 2,
    explanation: "Clos des RuchottesはGevrey-Chambertin村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-019",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Beaux Montsが属する村名を選択してください。",
    choices: ["Vosne-Romanée村", "Monthélie村", "Meursault村", "Chambolle-Musigny村"],
    answerIndex: 0,
    explanation: "Les Beaux MontsはVosne-Romanée村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-020",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos de la Bousse d'Orの所有者を選択してください。",
    choices: ["Domaine de la Romanée Conti", "Domaine de la Pousse d'Or", "Domaine Faiveley", "Groupe Artemis"],
    answerIndex: 1,
    explanation: "Clos de la Bousse d'Orの所有者はDomaine de la Pousse d'Orです。"
  },
  {
    id: "france-bourgogne-other-021",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Ducsの所有者を選択してください。",
    choices: ["Domaine Albert Grivault", "Domaine de la Vougeraie", "Domaine Marquis d'Angerville", "Domaine de la Pousse d'Or"],
    answerIndex: 2,
    explanation: "Clos des Ducsの所有者はDomaine Marquis d'Angervilleです。"
  },
  {
    id: "france-bourgogne-other-022",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Beaune村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Crâs", "Le Porusot", "Les Sorbès", "Clos des Mouches"],
    answerIndex: 3,
    explanation: "Clos des MouchesはBeaune村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-023",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Clos de la Roche", "Richebourg", "Chevalier-Montrachet", "Les Chaumes"],
    answerIndex: 3,
    explanation: "Les Chaumesはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-024",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Vosne-Romanée村に属するモノポールを選択してください。",
    choices: ["Clos de la Mouchère", "La Romanée", "Clos des Porrets Saint-Georges", "Clos des Ursules"],
    answerIndex: 1,
    explanation: "La RomanéeはVosne-Romanée村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-025",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方シャブリ地区に流れる川を選択してください。",
    choices: ["スラン川", "セーヌ川", "ソーヌ川", "マルヌ川"],
    answerIndex: 0,
    explanation: "シャブリ地区を流れる川はスラン川です。"
  },
  {
    id: "france-bourgogne-other-026",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Murgers des dents de chienが属する村名を選択してください。",
    choices: ["Saint-Aubin村", "Pernand-Vergelesses村", "Savigny-lès-Beaune村", "Beaune村"],
    answerIndex: 0,
    explanation: "Les Murgers des dents de chienはSaint-Aubin村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-027",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Vaucrains", "Mazoyères-Chambertin", "Les Bressandes", "La Romanée"],
    answerIndex: 3,
    explanation: "La Romanéeは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-028",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、シャブリ・グラン・クリュLes Closに隣接している畑を選択してください。",
    choices: ["Bougros", "Valmur", "Preuses", "Vaudésir"],
    answerIndex: 1,
    explanation: "Les Closに隣接している畑として、選択肢の中ではValmurが該当します。"
  },
  {
    id: "france-bourgogne-other-029",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Myglandが属する村を選択してください。",
    choices: ["Beaune", "Mercurey", "Chassagne-Montrachet", "Vosne-Romanée"],
    answerIndex: 1,
    explanation: "Clos des MyglandはMercurey村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-030",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のクリュボージョレの中で最北であるものを選択してください。",
    choices: ["Brouilly", "Fleurie", "Saint-Amour", "Côte de Brouilly"],
    answerIndex: 2,
    explanation: "クリュ・ボージョレの中で最北に位置するのはSaint-Amourです。"
  },
  {
    id: "france-bourgogne-other-031",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、ジュヴレ・シャンベルタン村のグラン・クリュChambertinに隣接している畑を選択してください。",
    choices: ["Chapelle-Chambertin", "Mazis-Chambertin", "Mazoyères-Chambertin", "Charmes-Chambertin"],
    answerIndex: 3,
    explanation: "Chambertinに隣接している畑として、選択肢の中ではCharmes-Chambertinが該当します。"
  },
  {
    id: "france-bourgogne-other-032",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Romanée-Saint-Vivant", "Corton", "Les Cras", "Montrachet"],
    answerIndex: 2,
    explanation: "Les Crasはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-033",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Porrets Saint-Georgesの所有者を選択してください。",
    choices: ["Domaine Armand Rousseau", "Henri Gouges", "Domaine de la Pousse d'Or", "Domaine Jacques-Frédéric Mugnier"],
    answerIndex: 1,
    explanation: "Clos des Porrets Saint-Georgesの所有者はHenri Gougesです。"
  },
  {
    id: "france-bourgogne-other-034",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Puligny-Montrachet村に属するモノポールを選択してください。",
    choices: ["Clos de la Garenne", "La Tâche", "Clos Blanc de Vougeot", "Clos de la Bousse d'Or"],
    answerIndex: 0,
    explanation: "Clos de la GarenneはPuligny-Montrachet村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-035",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Pucellesが属する村名を選択してください。",
    choices: ["Fixin村", "Puligny-Montrachet村", "Morey-Saint-Denis村", "Meursault村"],
    answerIndex: 1,
    explanation: "Les PucellesはPuligny-Montrachet村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-036",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Auxey-Duresses村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Duresses", "Ile des Vergelesses", "Les Grands Epenots", "Aux Vergelesses"],
    answerIndex: 0,
    explanation: "Les DuressesはAuxey-Duresses村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-037",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールMorgeot Clos de la Chapelleが属する村を選択してください。",
    choices: ["Volnay", "Puligny-Montrachet", "Chassagne-Montrachet", "Mercurey"],
    answerIndex: 2,
    explanation: "Morgeot Clos de la ChapelleはChassagne-Montrachet村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-038",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "B",
    question: "次の中からブルゴーニュ地方コート・ドール地区で栽培面積が第2位の村を選択してください。",
    choices: ["Meursault村", "Chambolle-Musigny村", "Puligny-Montrachet村", "Beaune村"],
    answerIndex: 3,
    explanation: "コート・ドール地区で栽培面積が第2位の村は、選択肢の中ではBeaune村です。"
  },
  {
    id: "france-bourgogne-other-039",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Nuits-Saint-Georges村に属するモノポールを選択してください。",
    choices: ["Clos de la Mouchère", "Clos des Mygland", "Clos de l'Ecu", "Clos de la Maréchale"],
    answerIndex: 3,
    explanation: "Clos de la MaréchaleはNuits-Saint-Georges村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-040",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Pommard村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Rugiens-Bas", "Les Cras", "Les Fournières", "Clavaillon"],
    answerIndex: 0,
    explanation: "Les Rugiens-BasはPommard村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-041",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Amoureusesが属する村名を選択してください。",
    choices: ["Savigny-lès-Beaune村", "Puligny-Montrachet村", "Fixin村", "Chambolle-Musigny村"],
    answerIndex: 3,
    explanation: "Les AmoureusesはChambolle-Musigny村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-042",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のクリュボージョレの中で面積最大であるものを選択してください。",
    choices: ["Chénas", "Régnié", "Brouilly", "Morgon"],
    answerIndex: 2,
    explanation: "クリュ・ボージョレの中で面積最大なのはBrouillyです。"
  },
  {
    id: "france-bourgogne-other-043",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールLa Tâcheの所有者を選択してください。",
    choices: ["Domaine Armand Rousseau", "Domaine Faiveley", "Domaine de la Romanée Conti", "Domaine Albert Grivault"],
    answerIndex: 2,
    explanation: "La Tâcheの所有者はDomaine de la Romanée Contiです。"
  },
  {
    id: "france-bourgogne-other-044",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Grèves", "Les Sorbès", "Grèves Vigne de l'Enfant Jésus", "Les Grands Epenots"],
    answerIndex: 2,
    explanation: "Grèves Vigne de l'Enfant Jésusは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-045",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Mazis-Chambertin", "Chevalier-Montrachet", "Clos Saint-Jean", "Richebourg"],
    answerIndex: 2,
    explanation: "Clos Saint-Jeanはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-046",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Ursulesが属する村を選択してください。",
    choices: ["Volnay", "Puligny-Montrachet", "Beaune", "Ladoix-Serrigny"],
    answerIndex: 2,
    explanation: "Clos des UrsulesはBeaune村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-047",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次のブルゴーニュ地方、ジュヴレ・シャンベルタン村のグラン・クリュに関する文章の中から正しいものを選択してください。",
    choices: ["ChambertinのワインはChambertin Clos-de-Bèzeを名乗れる", "Mazoyères-ChambertinのワインはCharmes-Chambertinを名乗れる", "Mazoyères-ChambertinのワインはChambertinを名乗れる", "Charmes-ChambertinのワインはMazoyères-Chambertinを名乗れる"],
    answerIndex: 1,
    explanation: "Mazoyères-ChambertinのワインはCharmes-Chambertinを名乗ることができます。"
  },
  {
    id: "france-bourgogne-other-048",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Pommard村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Grands Epenots", "Les Cents Vignes", "Les Ecussaux", "Perrières"],
    answerIndex: 0,
    explanation: "Les Grands EpenotsはPommard村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-049",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Vougeot村に属するモノポールを選択してください。",
    choices: ["Grèves Vigne de l'Enfant Jésus", "Clos de la Maréchale", "La Tâche", "Clos Blanc de Vougeot"],
    answerIndex: 3,
    explanation: "Clos Blanc de VougeotはVougeot村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-050",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Clos Saint-Denis", "Clos des Lambrays", "Les Teurons", "Corton"],
    answerIndex: 2,
    explanation: "Les Teuronsはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-051",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Grèves", "Les Marconnets", "Clos des Ruchottes", "En Cailleret"],
    answerIndex: 2,
    explanation: "Clos des Ruchottesは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-052",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Caillesが属する村名を選択してください。",
    choices: ["Puligny-Montrachet村", "Gevrey-Chambertin村", "Auxey-Duresses村", "Nuits-Saint-Georges村"],
    answerIndex: 3,
    explanation: "Les CaillesはNuits-Saint-Georges村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-053",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Ducsが属する村を選択してください。",
    choices: ["Puligny-Montrachet", "Volnay", "Beaune", "Chablis"],
    answerIndex: 1,
    explanation: "Clos des DucsはVolnay村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-054",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、ジュヴレ・シャンベルタン村のグラン・クリュを北から南の順序で正しく並べたものを選択してください。",
    choices: ["Chambertin Clos-de-Bèze, Chambertin, Mazis-Chambertin, Latricières-Chambertin", "Latricières-Chambertin, Mazis-Chambertin, Chambertin Clos-de-Bèze, Chambertin", "Chambertin, Latricières-Chambertin, Mazis-Chambertin, Chambertin Clos-de-Bèze", "Mazis-Chambertin, Chambertin Clos-de-Bèze, Chambertin, Latricières-Chambertin"],
    answerIndex: 3,
    explanation: "北から南の順序では、Mazis-Chambertin、Chambertin Clos-de-Bèze、Chambertin、Latricières-Chambertinとなります。"
  },
  {
    id: "france-bourgogne-other-055",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Chassagne-Montrachet村に属するプルミエ・クリュを選択してください。",
    choices: ["Les Caillerets", "En Cailleret", "Les Marconnets", "Les Grands Epenots"],
    answerIndex: 1,
    explanation: "En CailleretはChassagne-Montrachet村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-056",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュClos de La Perrièreが属する村名を選択してください。",
    choices: ["Gevrey-Chambertin村", "Pernand-Vergelesses村", "Beaune村", "Fixin村"],
    answerIndex: 3,
    explanation: "Clos de La PerrièreはFixin村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-057",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Chablis村に属するモノポールを選択してください。",
    choices: ["Clos des Hospices", "Clos Tamisot", "Clos des 60 Ouvrées", "Clos des Ursules"],
    answerIndex: 0,
    explanation: "Clos des HospicesはChablis村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-058",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Latricières-Chambertin", "Les Fichots", "La Tâche", "Corton-Charlemagne"],
    answerIndex: 1,
    explanation: "Les Fichotsはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-059",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos de la Garenneの所有者を選択してください。",
    choices: ["Domaine Faiveley", "Louis Jadot", "Comtes Lafon", "Domaine de la Romanée Conti"],
    answerIndex: 1,
    explanation: "Clos de la Garenneの所有者はLouis Jadotです。"
  },
  {
    id: "france-bourgogne-other-060",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "B",
    question: "次の中からブルゴーニュ地方コート・ドール地区で栽培面積が第1位の村を選択してください。",
    choices: ["Gevrey-Chambertin村", "Vosne-Romanée村", "Flagey-Echézeaux村", "Aloxe-Corton村"],
    answerIndex: 0,
    explanation: "コート・ドール地区で栽培面積が第1位の村は、選択肢の中ではGevrey-Chambertin村です。"
  },
  {
    id: "france-bourgogne-other-061",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Grands Echézeaux", "Santenots", "Les Teurons", "Clos de la Mouchère"],
    answerIndex: 3,
    explanation: "Clos de la Mouchèreは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-062",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos de la Mouchèreが属する村を選択してください。",
    choices: ["Chassagne-Montrachet", "Puligny-Montrachet", "Vosne-Romanée", "Mercurey"],
    answerIndex: 1,
    explanation: "Clos de la MouchèreはPuligny-Montrachet村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-063",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Monthélie村に属するプルミエ・クリュを選択してください。",
    choices: ["Le Meix Bataille", "Les Pucelles", "Aux Vergelesses", "Les Vercots"],
    answerIndex: 0,
    explanation: "Le Meix BatailleはMonthélie村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-064",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Ruchottesが属する村を選択してください。",
    choices: ["Beaune", "Gevrey-Chambertin", "Mercurey", "Vosne-Romanée"],
    answerIndex: 1,
    explanation: "Clos des RuchottesはGevrey-Chambertin村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-065",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Crâsが属する村名を選択してください。",
    choices: ["Morey-Saint-Denis村", "Puligny-Montrachet村", "Saint-Aubin村", "Vougeot村"],
    answerIndex: 3,
    explanation: "Les CrâsはVougeot村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-066",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["Les Pruliers", "Romanée-Conti", "Les Pucelles", "Grands Echézeaux"],
    answerIndex: 1,
    explanation: "Romanée-Contiは所有者が単独の畑です。"
  },
  {
    id: "france-bourgogne-other-067",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のクリュボージョレの中で最新であるものを選択してください。",
    choices: ["Moulin-à-Vent", "Juliénas", "Saint-Amour", "Régnié"],
    answerIndex: 3,
    explanation: "クリュ・ボージョレの中で最新なのはRégniéです。"
  },
  {
    id: "france-bourgogne-other-068",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Les Cailles", "Latricières-Chambertin", "Charlemagne", "Montrachet"],
    answerIndex: 0,
    explanation: "Les Caillesはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-069",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方で最も栽培面積の大きいグラン・クリュを選択してください。",
    choices: ["Romanée-Saint-Vivant", "Clos de Vougeot", "Chambertin", "Bâtard-Montrachet"],
    answerIndex: 1,
    explanation: "ブルゴーニュ地方で最も栽培面積の大きいグラン・クリュはClos de Vougeotです。"
  },
  {
    id: "france-bourgogne-other-070",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のプルミエ・クリュLes Vaucrainsが属する村名を選択してください。",
    choices: ["Meursault村", "Saint-Aubin村", "Nuits-Saint-Georges村", "Puligny-Montrachet村"],
    answerIndex: 2,
    explanation: "Les VaucrainsはNuits-Saint-Georges村に属するプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-071",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方のプルミエ・クリュを選択してください。",
    choices: ["Chambertin Clos-de-Bèze", "Chambertin", "Les Grands Epenots", "La Tâche"],
    answerIndex: 2,
    explanation: "Les Grands Epenotsはブルゴーニュ地方のプルミエ・クリュです。"
  },
  {
    id: "france-bourgogne-other-072",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos de la Maréchaleが属する村を選択してください。",
    choices: ["Ladoix-Serrigny", "Puligny-Montrachet", "Nuits-Saint-Georges", "Chablis"],
    answerIndex: 2,
    explanation: "Clos de la MaréchaleはNuits-Saint-Georges村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-073",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方Meursault村に属するモノポールを選択してください。",
    choices: ["Clos des Mygland", "Clos des Perrières", "Clos des Ruchottes", "La Tâche"],
    answerIndex: 1,
    explanation: "Clos des PerrièresはMeursault村に属するモノポールです。"
  },
  {
    id: "france-bourgogne-other-074",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "ブルゴーニュ地方のモノポールClos des Réasの所有者を選択してください。",
    choices: ["Domaine de la Pousse d'Or", "Domaine François Lamarche", "Henri Boillot", "Michel Gros"],
    answerIndex: 3,
    explanation: "Clos des Réasの所有者はMichel Grosです。"
  },
  {
    id: "france-bourgogne-other-075",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方、ジュヴレ・シャンベルタン村のグラン・クリュを北から南の順序で正しく並べたものを選択してください。",
    choices: ["Chapelle-Chambertin, Mazoyères-Chambertin, Charmes-Chambertin, Griotte-Chambertin", "Mazoyères-Chambertin, Charmes-Chambertin, Griotte-Chambertin, Chapelle-Chambertin", "Chapelle-Chambertin, Griotte-Chambertin, Charmes-Chambertin, Mazoyères-Chambertin", "Charmes-Chambertin, Mazoyères-Chambertin, Griotte-Chambertin, Chapelle-Chambertin"],
    answerIndex: 2,
    explanation: "北から南の順序では、Chapelle-Chambertin、Griotte-Chambertin、Charmes-Chambertin、Mazoyères-Chambertinとなります。"
  },
  {
    id: "france-bourgogne-other-076",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "次の中からブルゴーニュ地方のクリュボージョレの中で生産量最大であるものを選択してください。",
    choices: ["Régnié", "Brouilly", "Moulin-à-Vent", "Côte de Brouilly"],
    answerIndex: 1,
    explanation: "クリュ・ボージョレの中で生産量最大なのはBrouillyです。"
  },
  {
    id: "france-bourgogne-other-077",
    category: "フランス/ブルゴーニュ（その他）",
    importance: "A",
    question: "下記の中からブルゴーニュ地方の所有者が単独の畑を選択してください。",
    choices: ["La Maladière", "Les Cazetiers", "Morgeot Clos de la Chapelle", "Chambertin"],
    answerIndex: 2,
    explanation: "Morgeot Clos de la Chapelleは所有者が単独の畑です。"
  },
  {
    id: "france-bordeaux-aoc-001",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOCの地図です。地図上で6番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-sauternes-entre-deux-mers.jpg",
      alt: "ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOC地図",
      caption: "ボルドー ソーテルヌ＆バルサック / アントル・ドゥー・メール地区"
    },
    answerText: "カディヤック",
    explanation: "地図上の6番はCadillac、カタカナではカディヤックです。"
  },
  {
    id: "france-bordeaux-aoc-002",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の説明に合致するボルドーの生産地区を選択してください。「イル川の西に位置するドルドーニュ川右岸のワイン産地。軟質砂岩が特徴で粘土石灰質の土壌にこれが混じっている。属するAOCにはフロンサックとカノン・フロンサックがある。」",
    choices: ["フロンサデ", "グラーヴ", "サンテミリオン", "ポムロール"],
    answerIndex: 0,
    explanation: "説明に合致する地区はフロンサデです。FronsacとCanon Fronsacが属します。"
  },
  {
    id: "france-bordeaux-aoc-003",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドーのAOCワイン「ポイヤック」が生産されている地区を選択してください。",
    choices: ["メドック", "ポムロール", "ソーテルヌ", "サンテミリオン"],
    answerIndex: 0,
    explanation: "Pauillacはメドック地区のAOCです。"
  },
  {
    id: "france-bordeaux-aoc-004",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、メドック＆グラーヴ地区のAOCの地図です。地図上で5番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-medoc-graves.jpg",
      alt: "メドック＆グラーヴ地区のAOC地図",
      caption: "ボルドー メドック＆グラーヴ地区"
    },
    answerText: "サン・ジュリアン",
    answerTextAliases: ["サンジュリアン"],
    explanation: "地図上の5番はSaint-Julien、カタカナではサン・ジュリアンです。"
  },
  {
    id: "france-bordeaux-aoc-005",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で赤ワインのみが認められているAOCを選択してください。",
    choices: ["サンテミリオン", "プルミエール・コート・ド・ボルドー", "サント・クロワ・デュ・モン", "ボルドー"],
    answerIndex: 0,
    explanation: "Saint-Émilionは赤ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-006",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、サン・テミリオン・ポムロール・フロンサック地区のAOCの地図です。地図上でPuisseguin-Saint-Émilionに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-saint-emilion-pomerol-fronsac.jpg",
      alt: "サン・テミリオン・ポムロール・フロンサック地区のAOC地図",
      caption: "ボルドー サン・テミリオン / ポムロール / フロンサック地区"
    },
    choices: ["2番", "7番", "5番", "1番"],
    answerIndex: 2,
    explanation: "Puisseguin-Saint-Émilionに相当する番号は5番です。"
  },
  {
    id: "france-bordeaux-aoc-007",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次のAOCワインの中から、ドルドーニュ川右岸で生産されているワインを選択してください。",
    choices: ["Cérons", "Castillon Côtes de Bordeaux", "Haut-Médoc", "Listrac-Médoc"],
    answerIndex: 1,
    explanation: "Castillon Côtes de Bordeauxはドルドーニュ川右岸で生産されるAOCです。"
  },
  {
    id: "france-bordeaux-aoc-008",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からフランス、ボルドー市が位置する緯度を選択してください。",
    choices: ["北緯43度", "北緯45度", "北緯47度", "北緯41度"],
    answerIndex: 1,
    explanation: "ボルドー市はおおむね北緯45度に位置します。"
  },
  {
    id: "france-bordeaux-aoc-009",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で甘口ワインのみが認められているAOCを選択してください。",
    choices: ["カディヤック", "アントル・ドゥー・メール・オー・ブノージュ", "カスティヨン・コート・ド・ボルドー", "ボルドー・シュペリュール"],
    answerIndex: 0,
    explanation: "Cadillacは甘口ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-010",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からフランス、ボルドー地方、ドルドーニュ川およびジロンド川右岸の土壌を選択してください。",
    choices: ["粘土質土壌", "砂礫質土壌", "花崗岩質土壌", "石灰質土壌"],
    answerIndex: 0,
    explanation: "ドルドーニュ川およびジロンド川右岸は粘土質土壌が重要です。"
  },
  {
    id: "france-bordeaux-aoc-011",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で甘口ワインのみが認められているAOCを選択してください。",
    choices: ["グラーヴ・ド・ヴェイル", "カノン・フロンサック", "ルーピアック", "ペサック・レオニャン"],
    answerIndex: 2,
    explanation: "Loupiacは甘口ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-012",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドーのAOCワイン「ムーリス」が生産されている地区を選択してください。",
    choices: ["ソーテルヌ", "サンテミリオン", "アントル・ドゥー・メール", "メドック"],
    answerIndex: 3,
    explanation: "Moulisはメドック地区のAOCです。"
  },
  {
    id: "france-bordeaux-aoc-013",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で赤ワインのみが認められているAOCを選択してください。",
    choices: ["ルーピアック", "オー・メドック", "ボルドー", "セロンス"],
    answerIndex: 1,
    explanation: "Haut-Médocは赤ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-014",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、サン・テミリオン・ポムロール・フロンサック地区のAOCの地図です。地図上でSaint-Georges Saint-Émilionに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-saint-emilion-pomerol-fronsac.jpg",
      alt: "サン・テミリオン・ポムロール・フロンサック地区のAOC地図",
      caption: "ボルドー サン・テミリオン / ポムロール / フロンサック地区"
    },
    choices: ["2番", "7番", "1番", "4番"],
    answerIndex: 0,
    explanation: "Saint-Georges Saint-Émilionに相当する番号は2番です。"
  },
  {
    id: "france-bordeaux-aoc-015",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、メドック＆グラーヴ地区のAOCの地図です。地図上で2番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-medoc-graves.jpg",
      alt: "メドック＆グラーヴ地区のAOC地図",
      caption: "ボルドー メドック＆グラーヴ地区"
    },
    answerText: "オー・メドック",
    answerTextAliases: ["オーメドック"],
    explanation: "地図上の2番はHaut-Médoc、カタカナではオー・メドックです。"
  },
  {
    id: "france-bordeaux-aoc-016",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からフランス、ボルドー地方でユネスコの世界遺産に登録されているところを選択してください。",
    choices: ["ガロンヌ川左岸の貴腐ワイン生産地", "メドックのシャトー", "ボルドー市の市街区域", "ポムロールの畑の景観"],
    answerIndex: 2,
    explanation: "ボルドー市の市街区域はユネスコの世界遺産に登録されています。"
  },
  {
    id: "france-bordeaux-aoc-017",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中から、ドルドーニュ川とガロンヌ川の間で生産されている甘口ワインのみのAOCを選択してください。",
    choices: ["Saint-Émilion Grand Cru", "Lalande-de-Pomerol", "Cadillac", "Blaye Côtes de Bordeaux"],
    answerIndex: 2,
    explanation: "Cadillacはドルドーニュ川とガロンヌ川の間で生産される甘口ワインのみのAOCです。"
  },
  {
    id: "france-bordeaux-aoc-018",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の説明に合致するボルドーの生産地区を選択してください。「ドルドーニュ川右岸に位置する歴史的な町を拠点に広がるワイン産地。バルバンヌ川を挟んで北側には衛星地区と呼ばれる4つのAOCがある。」",
    choices: ["サンテミリオン", "ソーテルヌ＆バルサック", "グラーヴ", "ポムロール"],
    answerIndex: 0,
    explanation: "説明に合致する地区はサンテミリオンです。北側には衛星地区と呼ばれるAOCがあります。"
  },
  {
    id: "france-bordeaux-aoc-019",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOCの地図です。地図上でCéronsに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-sauternes-entre-deux-mers.jpg",
      alt: "ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOC地図",
      caption: "ボルドー ソーテルヌ＆バルサック / アントル・ドゥー・メール地区"
    },
    choices: ["1番", "5番", "2番", "3番"],
    answerIndex: 3,
    explanation: "Céronsに相当する番号は3番です。"
  },
  {
    id: "france-bordeaux-aoc-020",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOCの地図です。地図上で1番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-sauternes-entre-deux-mers.jpg",
      alt: "ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOC地図",
      caption: "ボルドー ソーテルヌ＆バルサック / アントル・ドゥー・メール地区"
    },
    answerText: "ソーテルヌ",
    explanation: "地図上の1番はSauternes、カタカナではソーテルヌです。"
  },
  {
    id: "france-bordeaux-aoc-021",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からボルドー地方で2020年の収穫をもって消滅したAOCを選択してください。",
    choices: ["Bordeaux Rosé", "Côtes de Blaye", "Barsac", "Médoc"],
    answerIndex: 1,
    explanation: "Côtes de Blayeは2020年の収穫をもって消滅したAOCです。"
  },
  {
    id: "france-bordeaux-aoc-022",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中から、ドルドーニュ川とガロンヌ川の間で生産されている甘口ワインのみのAOCを選択してください。",
    choices: ["Sainte-Croix du Mont", "Bordeaux-Haut-Benauge", "Puisseguin-Saint-Émilion", "Castillon Côtes de Bordeaux"],
    answerIndex: 0,
    explanation: "Sainte-Croix du Montはドルドーニュ川とガロンヌ川の間で生産される甘口ワインのみのAOCです。"
  },
  {
    id: "france-bordeaux-aoc-023",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、サン・テミリオン・ポムロール・フロンサック地区のAOCの地図です。地図上でMontagne Saint-Émilionに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-saint-emilion-pomerol-fronsac.jpg",
      alt: "サン・テミリオン・ポムロール・フロンサック地区のAOC地図",
      caption: "ボルドー サン・テミリオン / ポムロール / フロンサック地区"
    },
    choices: ["9番", "3番", "6番", "4番"],
    answerIndex: 1,
    explanation: "Montagne Saint-Émilionに相当する番号は3番です。"
  },
  {
    id: "france-bordeaux-aoc-024",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、メドック＆グラーヴ地区のAOCの地図です。地図上で10番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-medoc-graves.jpg",
      alt: "メドック＆グラーヴ地区のAOC地図",
      caption: "ボルドー メドック＆グラーヴ地区"
    },
    answerText: "ペサック・レオニャン",
    answerTextAliases: ["ペサックレオニャン"],
    explanation: "地図上の10番はPessac-Léognan、カタカナではペサック・レオニャンです。"
  },
  {
    id: "france-bordeaux-aoc-025",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方でソーテルヌとバルサックの間に流れる川の名前を選択してください。",
    choices: ["ドルドーニュ川", "ロット川", "シロン川", "レイヨン川"],
    answerIndex: 2,
    explanation: "ソーテルヌとバルサックの間に流れる川はシロン川です。"
  },
  {
    id: "france-bordeaux-aoc-026",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からフランス第2位の規模を持つAOCワインの産地を選択してください。",
    choices: ["南西地方", "コート・デュ・ローヌ地方", "ラングドック・ルーション地方", "ボルドー地方"],
    answerIndex: 1,
    explanation: "フランス第2位の規模を持つAOCワイン産地は、選択肢の中ではコート・デュ・ローヌ地方です。"
  },
  {
    id: "france-bordeaux-aoc-027",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、サン・テミリオン・ポムロール・フロンサック地区のAOCの地図です。地図上でLalande-de-Pomerolに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-saint-emilion-pomerol-fronsac.jpg",
      alt: "サン・テミリオン・ポムロール・フロンサック地区のAOC地図",
      caption: "ボルドー サン・テミリオン / ポムロール / フロンサック地区"
    },
    choices: ["7番", "9番", "5番", "6番"],
    answerIndex: 0,
    explanation: "Lalande-de-Pomerolに相当する番号は7番です。"
  },
  {
    id: "france-bordeaux-aoc-028",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOCの地図です。地図上でLoupiacに相当する番号を選択してください。",
    image: {
      src: "assets/bordeaux-sauternes-entre-deux-mers.jpg",
      alt: "ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOC地図",
      caption: "ボルドー ソーテルヌ＆バルサック / アントル・ドゥー・メール地区"
    },
    choices: ["5番", "3番", "4番", "6番"],
    answerIndex: 0,
    explanation: "Loupiacに相当する番号は5番です。"
  },
  {
    id: "france-bordeaux-aoc-029",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からフランス、ボルドー地方のサンテミリオン管轄区がユネスコの世界遺産に登録された年を選択してください。",
    choices: ["1994年", "2003年", "1999年", "2016年"],
    answerIndex: 2,
    explanation: "サンテミリオン管轄区は1999年にユネスコの世界遺産に登録されました。"
  },
  {
    id: "france-bordeaux-aoc-030",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次のAOCワインの中から、ドルドーニュ川右岸で生産されているワインを選択してください。",
    choices: ["Fronsac", "Sainte-Croix du Mont", "Saint-Estèphe", "Entre-Deux-Mers-Haut-Benauge"],
    answerIndex: 0,
    explanation: "Fronsacはドルドーニュ川右岸で生産されるAOCです。"
  },
  {
    id: "france-bordeaux-aoc-031",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "B",
    question: "次の中からボルドー地方で2028年の収穫をもって抹消予定のAOCを選択してください。",
    choices: ["Graves Supérieures", "Bordeaux Rosé", "Puisseguin-Saint-Émilion", "Médoc"],
    answerIndex: 0,
    explanation: "Graves Supérieuresは2028年の収穫をもって抹消予定のAOCです。"
  },
  {
    id: "france-bordeaux-aoc-032",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方のAOCワインの産地をガロンヌ川およびジロンド川の上流から下流の順序で正しく並べたものを選択してください。",
    choices: ["Pessac-Léognan, Saint-Estèphe, Sauternes, Cérons", "Barsac, Margaux, Saint-Estèphe, Pessac-Léognan", "Barsac, Cérons, Saint-Julien, Pauillac", "Pauillac, Pessac-Léognan, Barsac, Cérons"],
    answerIndex: 2,
    explanation: "上流から下流の順序では、Barsac、Cérons、Saint-Julien、Pauillacとなります。"
  },
  {
    id: "france-bordeaux-aoc-033",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で赤ワインのみが認められているAOCを選択してください。",
    choices: ["ボルドー・セック", "サント・クロワ・デュ・モン", "モンターニュ・サンテミリオン", "ペサック・レオニャン"],
    answerIndex: 2,
    explanation: "Montagne Saint-Émilionは赤ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-034",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、メドック＆グラーヴ地区のAOCの地図です。地図上で4番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-medoc-graves.jpg",
      alt: "メドック＆グラーヴ地区のAOC地図",
      caption: "ボルドー メドック＆グラーヴ地区"
    },
    answerText: "ポイヤック",
    explanation: "地図上の4番はPauillac、カタカナではポイヤックです。"
  },
  {
    id: "france-bordeaux-aoc-035",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドーのAOCワイン「サン・テステフ」が生産されている地区を選択してください。",
    choices: ["メドック", "サンテミリオン", "ソーテルヌ", "アントル・ドゥー・メール"],
    answerIndex: 0,
    explanation: "Saint-Estèpheはメドック地区のAOCです。"
  },
  {
    id: "france-bordeaux-aoc-036",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドーのAOCワイン「マルゴー」が生産されている地区を選択してください。",
    choices: ["アントル・ドゥー・メール", "ソーテルヌ", "サンテミリオン", "メドック"],
    answerIndex: 3,
    explanation: "Margauxはメドック地区のAOCです。"
  },
  {
    id: "france-bordeaux-aoc-037",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次のAOCワインの中から、ドルドーニュ川右岸で生産されているワインを選択してください。",
    choices: ["Saint-Estèphe", "Haut-Médoc", "Saint-Julien", "Canon Fronsac"],
    answerIndex: 3,
    explanation: "Canon Fronsacはドルドーニュ川右岸で生産されるAOCです。"
  },
  {
    id: "france-bordeaux-aoc-038",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "次の中からボルドー地方で甘口ワインのみが認められているAOCを選択してください。",
    choices: ["ボルドー・ロゼ", "アントル・ドゥー・メール", "ボルドー・シュペリュール", "ソーテルヌ"],
    answerIndex: 3,
    explanation: "Sauternesは甘口ワインのみが認められているAOCです。"
  },
  {
    id: "france-bordeaux-aoc-039",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、サン・テミリオン・ポムロール・フロンサック地区のAOCの地図です。地図上で7番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-saint-emilion-pomerol-fronsac.jpg",
      alt: "サン・テミリオン・ポムロール・フロンサック地区のAOC地図",
      caption: "ボルドー サン・テミリオン / ポムロール / フロンサック地区"
    },
    answerText: "ラランド・ド・ポムロール",
    answerTextAliases: ["ラランドドポムロール"],
    explanation: "地図上の7番はLalande-de-Pomerol、カタカナではラランド・ド・ポムロールです。"
  },
  {
    id: "france-bordeaux-aoc-040",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOCの地図です。地図上で2番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-sauternes-entre-deux-mers.jpg",
      alt: "ソーテルヌ＆バルサック地区、およびアントル・ドゥー・メール地区のAOC地図",
      caption: "ボルドー ソーテルヌ＆バルサック / アントル・ドゥー・メール地区"
    },
    answerText: "バルサック",
    explanation: "地図上の2番はBarsac、カタカナではバルサックです。"
  },
  {
    id: "france-bordeaux-aoc-041",
    category: "フランス/ボルドー（概要・AOC）",
    importance: "A",
    question: "下記の画像はフランス、ボルドー地方、メドック＆グラーヴ地区のAOCの地図です。地図上で3番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/bordeaux-medoc-graves.jpg",
      alt: "メドック＆グラーヴ地区のAOC地図",
      caption: "ボルドー メドック＆グラーヴ地区"
    },
    answerText: "サン・テステフ",
    answerTextAliases: ["サンテステフ"],
    explanation: "地図上の3番はSaint-Estèphe、カタカナではサン・テステフです。"
  },
  {
    id: "france-bordeaux-classification-001",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の4級格付けシャトーを選択してください。",
    choices: ["シャトー・ラ・ラギュンヌ", "シャトー・ブラネール・デュクリュ", "シャトー・クレール・ミロン", "シャトー・デュクリュ・ボカイユ"],
    answerIndex: 1,
    explanation: "シャトー・ブラネール・デュクリュはメドック格付け4級です。"
  },
  {
    id: "france-bordeaux-classification-002",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の5級格付けシャトーを選択してください。",
    choices: ["シャトー・ダルマイヤック", "シャトー・モンローズ", "シャトー・ジスクール", "シャトー・ローザン・セグラ"],
    answerIndex: 0,
    explanation: "シャトー・ダルマイヤックはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-003",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方サンテミリオン地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ローザン・ガシー", "シャトー・ベレール・モナンジュ", "シャトー・マルゴー", "シャトー・コス・ラボリー"],
    answerIndex: 1,
    explanation: "シャトー・ベレール・モナンジュはサンテミリオン地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-004",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の2級格付けシャトーを選択してください。",
    choices: ["シャトー・マルゴー", "シャトー・ムートン・ロートシルト", "シャトー・バタイイ", "シャトー・ラスコンブ"],
    answerIndex: 3,
    explanation: "シャトー・ラスコンブはメドック格付け2級です。"
  },
  {
    id: "france-bordeaux-classification-005",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の3級格付けシャトーを選択してください。",
    choices: ["シャトー・ムートン・ロートシルト", "シャトー・マルキ・ダレーム・ベッケール", "シャトー・レオヴィル・ポワフェレ", "シャトー・コス・デストゥールネル"],
    answerIndex: 1,
    explanation: "シャトー・マルキ・ダレーム・ベッケールはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-006",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方ソーテルヌ＆バルサック地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ラモット・ギニャール", "シャトー・パルメ", "シャトー・カノン", "シャトー・スミス・オー・ラフィット"],
    answerIndex: 0,
    explanation: "シャトー・ラモット・ギニャールはソーテルヌ＆バルサック地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-007",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の格付けシャトーを選択してください。",
    choices: ["シャトー・クーアン", "シャトー・ラフルール", "シャトー・ピション・ロングヴィル・コンテス・ド・ラランド", "シャトー・ネラック"],
    answerIndex: 0,
    explanation: "シャトー・クーアンはグラーヴ地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-008",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の4級格付けシャトーを選択してください。",
    choices: ["シャトー・レオヴィル・ポワフェレ", "シャトー・ランシュ・ムーサス", "シャトー・デュアール・ミロン・ロートシルト", "シャトー・オー・バージュ・リベラル"],
    answerIndex: 2,
    explanation: "シャトー・デュアール・ミロン・ロートシルトはメドック格付け4級です。"
  },
  {
    id: "france-bordeaux-classification-009",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方ソーテルヌ＆バルサック地区の格付けシャトーを選択してください。",
    choices: ["シャトー・マラルティック・ラグラヴィエール", "シャトー・ラフォン・ロッシェ", "シャトー・スオ", "シャトー・オー・バイィ"],
    answerIndex: 2,
    explanation: "シャトー・スオはソーテルヌ＆バルサック地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-010",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ドワジー・デュブロカ", "ラトゥール・ア・ポムロール", "シャトー・ラモット・ギニャール", "シャトー・ラ・ミッション・オー・ブリオン"],
    answerIndex: 3,
    explanation: "シャトー・ラ・ミッション・オー・ブリオンはグラーヴ地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-011",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の5級格付けシャトーを選択してください。",
    choices: ["シャトー・ピション・ロングヴィル・コンテス・ド・ラランド", "シャトー・ドーザック", "シャトー・デュルフォール・ヴィヴァン", "シャトー・グリュオ・ラローズ"],
    answerIndex: 1,
    explanation: "シャトー・ドーザックはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-012",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の2級格付けシャトーを選択してください。",
    choices: ["シャトー・マレスコ・サン・テグジュペリ", "シャトー・ベイシュヴェル", "シャトー・クロワゼ・バージュ", "シャトー・モンローズ"],
    answerIndex: 3,
    explanation: "シャトー・モンローズはメドック格付け2級です。"
  },
  {
    id: "france-bordeaux-classification-013",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方サンテミリオン地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ヴァランドロー", "シャトー・レオヴィル・ラス・カーズ", "シャトー・ペトリュス", "シャトー・デュアール・ミロン・ロートシルト"],
    answerIndex: 0,
    explanation: "シャトー・ヴァランドローはサンテミリオン地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-014",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の4級格付けシャトーを選択してください。",
    choices: ["シャトー・ピション・ロングヴィル・バロン", "シャトー・ジスクール", "シャトー・マルキ・ド・テルム", "シャトー・マルキ・ダレーム・ベッケール"],
    answerIndex: 2,
    explanation: "シャトー・マルキ・ド・テルムはメドック格付け4級です。"
  },
  {
    id: "france-bordeaux-classification-015",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の3級格付けシャトーを選択してください。",
    choices: ["シャトー・マレスコ・サン・テグジュペリ", "シャトー・プリゥレ・リシーヌ", "シャトー・ポンテ・カネ", "シャトー・ブラーヌ・カントナック"],
    answerIndex: 0,
    explanation: "シャトー・マレスコ・サン・テグジュペリはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-016",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の格付けシャトーを選択してください。",
    choices: ["シャトー・トロタノワ", "シャトー・ネナン", "シャトー・スオ", "シャトー・カルボニュー"],
    answerIndex: 3,
    explanation: "シャトー・カルボニューはグラーヴ地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-017",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の2級格付けシャトーを選択してください。",
    choices: ["シャトー・デュアール・ミロン・ロートシルト", "シャトー・ローザン・セグラ", "シャトー・ディサン", "シャトー・マルキ・ダレーム・ベッケール"],
    answerIndex: 1,
    explanation: "シャトー・ローザン・セグラはメドック格付け2級です。"
  },
  {
    id: "france-bordeaux-classification-018",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の3級格付けシャトーを選択してください。",
    choices: ["シャトー・カントメルル", "シャトー・ポンテ・カネ", "シャトー・ド・カマンサック", "シャトー・ボイド・カントナック"],
    answerIndex: 3,
    explanation: "シャトー・ボイド・カントナックはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-019",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の5級格付けシャトーを選択してください。",
    choices: ["シャトー・ラフォン・ロッシェ", "シャトー・ド・カマンサック", "シャトー・モンローズ", "シャトー・グリュオ・ラローズ"],
    answerIndex: 1,
    explanation: "シャトー・ド・カマンサックはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-020",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方サンテミリオン地区の格付けシャトーを選択してください。",
    choices: ["シャトー・スオ", "シャトー・ベルグラーヴ", "シャトー・スデュイロー", "シャトー・ボー・セジュール・ベコ"],
    answerIndex: 3,
    explanation: "シャトー・ボー・セジュール・ベコはサンテミリオン地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-021",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方ソーテルヌ＆バルサック地区の格付けシャトーを選択してください。",
    choices: ["シャトー・グリュオ・ラローズ", "シャトー・カイユー", "シャトー・プリゥレ・リシーヌ", "シャトー・ボイド・カントナック"],
    answerIndex: 1,
    explanation: "シャトー・カイユーはソーテルヌ＆バルサック地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-022",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の5級格付けシャトーを選択してください。",
    choices: ["シャトー・ディサン", "シャトー・ブラーヌ・カントナック", "シャトー・レオヴィル・ポワフェレ", "シャトー・グラン・ピュイ・デュカス"],
    answerIndex: 3,
    explanation: "シャトー・グラン・ピュイ・デュカスはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-023",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の3級格付けシャトーを選択してください。",
    choices: ["シャトー・フェリエール", "シャトー・ローザン・ガシー", "シャトー・ローザン・セグラ", "シャトー・ラトゥール"],
    answerIndex: 0,
    explanation: "シャトー・フェリエールはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-024",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ド・ミラ", "シャトー・ド・フューザル", "シャトー・クロ・オー・ペラゲ", "シャトー・カノン・ラ・ガフリエール"],
    answerIndex: 1,
    explanation: "シャトー・ド・フューザルはグラーヴ地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-025",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方サンテミリオン地区の格付けシャトーを選択してください。",
    choices: ["シャトー・カントメルル", "シャトー・ラフルール", "シャトー・ラ・ラギュンヌ", "シャトー・カノン・ラ・ガフリエール"],
    answerIndex: 3,
    explanation: "シャトー・カノン・ラ・ガフリエールはサンテミリオン地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-026",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の2級格付けシャトーを選択してください。",
    choices: ["シャトー・サン・ピエール", "シャトー・グラン・ピュイ・デュカス", "シャトー・ポンテ・カネ", "シャトー・レオヴィル・ポワフェレ"],
    answerIndex: 3,
    explanation: "シャトー・レオヴィル・ポワフェレはメドック格付け2級です。"
  },
  {
    id: "france-bordeaux-classification-027",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の3級格付けシャトーを選択してください。",
    choices: ["シャトー・オー・バタイイ", "シャトー・ピション・ロングヴィル・バロン", "シャトー・ペデスクロー", "シャトー・カロン・セギュール"],
    answerIndex: 3,
    explanation: "シャトー・カロン・セギュールはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-028",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の格付けシャトーを選択してください。",
    choices: ["シャトー・オー・バージュ・リベラル", "シャトー・ジスクール", "シャトー・カントナック・ブラウン", "シャトー・ラ・トゥール・オー・ブリオン"],
    answerIndex: 3,
    explanation: "シャトー・ラ・トゥール・オー・ブリオンはグラーヴ地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-029",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の4級格付けシャトーを選択してください。",
    choices: ["シャトー・ラフィット・ロートシルト", "シャトー・デスミライユ", "シャトー・プージェ", "シャトー・オー・バタイイ"],
    answerIndex: 2,
    explanation: "シャトー・プージェはメドック格付け4級です。"
  },
  {
    id: "france-bordeaux-classification-030",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方ソーテルヌ＆バルサック地区の格付けシャトーを選択してください。",
    choices: ["シャトー・コス・デストゥールネル", "シャトー・ド・ミラ", "シャトー・ローザン・ガシー", "クロ・フルテ"],
    answerIndex: 1,
    explanation: "シャトー・ド・ミラはソーテルヌ＆バルサック地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-031",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の2級格付けシャトーを選択してください。",
    choices: ["シャトー・デスミライユ", "シャトー・フェリエール", "シャトー・ピション・ロングヴィル・コンテス・ド・ラランド", "シャトー・ラ・トゥール・カルネ"],
    answerIndex: 2,
    explanation: "シャトー・ピション・ロングヴィル・コンテス・ド・ラランドはメドック格付け2級です。"
  },
  {
    id: "france-bordeaux-classification-032",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方メドック地区の5級格付けシャトーを選択してください。",
    choices: ["シャトー・カントナック・ブラウン", "シャトー・ラフィット・ロートシルト", "シャトー・ローザン・セグラ", "シャトー・ペデスクロー"],
    answerIndex: 3,
    explanation: "シャトー・ペデスクローはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-033",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方サンテミリオン地区の格付けシャトーを選択してください。",
    choices: ["シャトー・マラルティック・ラグラヴィエール", "シャトー・ジスクール", "シャトー・ラ・トゥール・カルネ", "クロ・フルテ"],
    answerIndex: 3,
    explanation: "クロ・フルテはサンテミリオン地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-034",
    category: "フランス/ボルドー（格付け基礎）",
    importance: "A",
    question: "次の中からボルドー地方ソーテルヌ＆バルサック地区の格付けシャトーを選択してください。",
    choices: ["シャトー・ラフルール", "ル・パン", "シャトー・ドワジー・ヴェドリーヌ", "シャトー・トロタノワ"],
    answerIndex: 2,
    explanation: "シャトー・ドワジー・ヴェドリーヌはソーテルヌ＆バルサック地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-001",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方Sauternes & Barsac地区でPremier Crusに格付けされているものを全て選択してください。2個まで選択できます。",
    choices: ["Château Belair-Monange", "Château Haut-Bailly", "Château Rieussec", "La Mondotte", "Château Suduiraut", "Domaine de l'Eglise", "Château Broustet", "Château La Mission-Haut-Brion"],
    answerIndexes: [2, 4],
    maxSelections: 2,
    explanation: "Château RieussecとChâteau SuduirautはSauternes & Barsac地区のPremier Cruです。"
  },
  {
    id: "france-bordeaux-classification-practice-002",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からCantenac村で生産されている3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Cos-Labory", "Château Desmirail", "Château Cos d'Estournel", "Château Talbot", "Château Boyd-Cantenac", "Château Branaire-Ducru", "Château Grand-Puy-Ducasse", "Château Marquis d'Alesme-Becker"],
    answerIndexes: [1, 4],
    maxSelections: 2,
    explanation: "Château DesmirailとChâteau Boyd-CantenacはCantenac村のメドック格付け3級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-003",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Graves地区の格付けシャトーの中から赤ワインと白ワイン両方が格付けされているものを全て選択してください。2個まで選択できます。",
    choices: ["Château Haut-Brion", "Domaine de Chevalier", "Château Couhins-Lurton", "Château Haut-Bailly", "Château Couhins", "Château Carbonnieux", "Château Pape Clément", "Château La Tour-Haut-Brion"],
    answerIndexes: [1, 5],
    maxSelections: 2,
    explanation: "Domaine de ChevalierとChâteau Carbonnieuxは、赤ワインと白ワインの両方がグラーヴ格付けに含まれます。"
  },
  {
    id: "france-bordeaux-classification-practice-004",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中から、ボルドー地方Saint-Émilion地区の2022年の格付けで、格付けへの参加を見送り、Premiers Grands Crus Classés Aから名前が消えたものを選択してください。",
    choices: ["Château Beauséjour Héritiers Duffau Lagarrosse", "Château Cheval Blanc", "Château Troplong Mondot", "Château Canon la Gaffelière"],
    answerIndex: 1,
    explanation: "Château Cheval Blancは2022年格付けへの参加を見送り、Premiers Grands Crus Classés Aから外れました。"
  },
  {
    id: "france-bordeaux-classification-practice-005",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Graves地区の格付けシャトーの中から、Martillac村で生産されているものを選択してください。",
    choices: ["Château Smith-Haut-Lafitte", "Château de Fieuzal", "Château Haut-Brion", "Château Laville Haut-Brion"],
    answerIndex: 0,
    explanation: "Château Smith-Haut-LafitteはMartillac村に位置するグラーヴ格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-006",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からPauillac村で生産されている5級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Léoville-Barton", "Château Branaire-Ducru", "Château Ferrière", "Château Pontet-Canet", "Château Cos-Labory", "Château Calon-Ségur", "Château Cantenac-Brown", "Château Clerc-Milon"],
    answerIndexes: [3, 7],
    maxSelections: 2,
    explanation: "Château Pontet-CanetとChâteau Clerc-MilonはPauillac村のメドック格付け5級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-007",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からCantenac村で生産されAOC Margauxとなる3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Margaux", "Château Desmirail", "Château Cantenac-Brown", "Château Giscours", "Château Durfort-Vivens", "Château Marquis d'Alesme-Becker", "Château Marquis de Terme", "Château Pouget"],
    answerIndexes: [1, 2],
    maxSelections: 2,
    explanation: "Château DesmirailとChâteau Cantenac-BrownはCantenac村で生産されるAOC Margauxの3級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-008",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からAOC名がMargauxと表示され、格付け等級が最も上位なものを選択してください。",
    choices: ["Château Gruaud-Larose", "Château Léoville-Barton", "Château Rauzan-Gassies", "Château Haut-Batailley"],
    answerIndex: 2,
    explanation: "Château Rauzan-GassiesはAOC Margauxの2級格付けで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-009",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Sauternes & Barsac地区の格付けシャトーの中から、格付け等級が最も上位なものを選択してください。",
    choices: ["Château La Tour Blanche", "Château Romer du Hayot", "Château Romer", "Château Broustet"],
    answerIndex: 0,
    explanation: "Château La Tour BlancheはPremier Cruで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-010",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からSaint-Julien村で生産されている4級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Duhart-Milon-Rothschild", "Château Beychevelle", "Château Croizet-Bages", "Château Talbot", "Château Boyd-Cantenac", "Château Ducru-Beaucaillou", "Château Mouton-Rothschild", "Château Haut-Bages-Libéral"],
    answerIndexes: [1, 3],
    maxSelections: 2,
    explanation: "Château BeychevelleとChâteau TalbotはSaint-Julien村のメドック格付け4級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-011",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方Sauternes & Barsac地区でPremier Crusに格付けされているものを全て選択してください。2個まで選択できます。",
    choices: ["Château Valandraud", "Château Lamothe", "Château Latour à Pomerol", "Château Filhot", "Château La Tour Blanche", "Château Belair-Monange", "Château Troplong Mondot", "Château Lafaurie Peyraguey"],
    answerIndexes: [4, 7],
    maxSelections: 2,
    explanation: "Château La Tour BlancheとChâteau Lafaurie PeyragueyはSauternes & Barsac地区のPremier Cruです。"
  },
  {
    id: "france-bordeaux-classification-practice-012",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Graves地区の格付けシャトーの中から、Pessac村で生産されているものを選択してください。",
    choices: ["Château Pape Clément", "Château Carbonnieux", "Château de Fieuzal", "Château Haut-Bailly"],
    answerIndex: 0,
    explanation: "Château Pape ClémentはPessac村に位置するグラーヴ格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-013",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Sauternes & Barsac地区の格付けシャトーの中からBommes村で生産されているものを選択してください。",
    choices: ["Château Suduiraut", "Château Guiraud", "Château Climens", "Château Rabaud-Promis"],
    answerIndex: 3,
    explanation: "Château Rabaud-PromisはBommes村に位置するSauternes & Barsac地区の格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-014",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方の格付けシャトーChâteau Mouton Baronne PhilippeがChâteau d'Armailhacに名称を変更した年を選択してください。",
    choices: ["1973年", "1993年", "1989年", "1969年"],
    answerIndex: 2,
    explanation: "Château Mouton Baronne Philippeは1989年にChâteau d'Armailhacへ名称変更しました。"
  },
  {
    id: "france-bordeaux-classification-practice-015",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からAOC名がSaint-Estèpheと表示され、格付け等級が最も上位なものを選択してください。",
    choices: ["Château Montrose", "Château de Camensac", "Château La Lagune", "Château Dauzac"],
    answerIndex: 0,
    explanation: "Château MontroseはSaint-Estèpheの2級格付けで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-016",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からPauillac村で生産されている5級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Margaux", "Château Mouton-Rothschild", "Château Malescot Saint-Exupéry", "Château Haut-Bages-Libéral", "Château Batailley", "Château du Tertre", "Château Boyd-Cantenac", "Château Palmer"],
    answerIndexes: [3, 4],
    maxSelections: 2,
    explanation: "Château Haut-Bages-LibéralとChâteau BatailleyはPauillac村のメドック格付け5級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-017",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からLabarde村で生産されAOC Margauxとなる3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Prieuré-Lichine", "Château Dauzac", "Château Rauzan-Gassies", "Château Cantenac-Brown", "Château Giscours", "Château Marquis d'Alesme-Becker", "Château Brane-Cantenac", "Château Malescot Saint-Exupéry"],
    answerIndexes: [4],
    maxSelections: 2,
    explanation: "Château GiscoursはLabarde村で生産されるAOC Margauxの3級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-018",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からSaint-Julien村で生産されている4級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Clerc-Milon", "Château Haut-Bages-Libéral", "Château Grand-Puy-Ducasse", "Château Desmirail", "Château Ducru-Beaucaillou", "Château Cos-Labory", "Château Branaire-Ducru", "Château Saint-Pierre"],
    answerIndexes: [6, 7],
    maxSelections: 2,
    explanation: "Château Branaire-DucruとChâteau Saint-PierreはSaint-Julien村のメドック格付け4級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-019",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中から3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Rauzan-Gassies", "Château Pichon-Longueville Baron", "Château Beychevelle", "Château Batailley", "Château Brane-Cantenac", "Château Ferrière", "Château Pichon-Longueville Comtesse de Lalande", "Château Kirwan"],
    answerIndexes: [5, 7],
    maxSelections: 2,
    explanation: "Château FerrièreとChâteau Kirwanはメドック格付け3級です。"
  },
  {
    id: "france-bordeaux-classification-practice-020",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からSaint-Julien村で生産されている2級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Grand-Puy-Ducasse", "Château Pichon-Longueville Baron", "Château Léoville-Las Cases", "Château La Lagune", "Château Malescot Saint-Exupéry", "Château Gruaud-Larose", "Château Lafon-Rochet", "Château Prieuré-Lichine"],
    answerIndexes: [2, 5],
    maxSelections: 2,
    explanation: "Château Léoville-Las CasesとChâteau Gruaud-LaroseはSaint-Julien村のメドック格付け2級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-021",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Sauternes & Barsac地区の格付けシャトーの中からBommes村で生産されているものを選択してください。",
    choices: ["Château Suduiraut", "Château Guiraud", "Château Clos-Haut-Peyraguey", "Château Climens"],
    answerIndex: 2,
    explanation: "Château Clos-Haut-PeyragueyはBommes村に位置します。"
  },
  {
    id: "france-bordeaux-classification-practice-022",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中から5級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Pédesclaux", "Château Beychevelle", "Château Boyd-Cantenac", "Château Ducru-Beaucaillou", "Château Lagrange", "Château Lynch-Bages", "Château Saint-Pierre", "Château La Tour-Carnet"],
    answerIndexes: [0, 5],
    maxSelections: 2,
    explanation: "Château PédesclauxとChâteau Lynch-Bagesはメドック格付け5級です。"
  },
  {
    id: "france-bordeaux-classification-practice-023",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Sauternes & Barsac地区の格付けシャトーの中から、格付け等級が最も上位なものを選択してください。",
    choices: ["Château Doisy-Védrines", "Château d'Arche", "Château Lamothe-Guignard", "Château Guiraud"],
    answerIndex: 3,
    explanation: "Château GuiraudはPremier Cruで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-024",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からSaint-Estèphe村で生産されている3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château d'Armailhac", "Château Cantemerle", "Château Calon-Ségur", "Château Rauzan-Gassies", "Château Rauzan-Ségla", "Château Batailley", "Château Langoa-Barton", "Château d'Issan"],
    answerIndexes: [2],
    maxSelections: 2,
    explanation: "Château Calon-SégurはSaint-Estèphe村のメドック格付け3級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-025",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Saint-Émilion地区の格付けシャトーの中から、格付け等級が最も上位なものを選択してください。",
    choices: ["Château Pavie", "Château Beau-Séjour-Bécot", "Château Trottevieille", "Château Belair-Monange"],
    answerIndex: 0,
    explanation: "Château PavieはPremiers Grands Crus Classés Aで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-026",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からSaint-Julien村で生産されている4級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Pichon-Longueville Baron", "Château Cos-Labory", "Château Léoville-Las Cases", "Château Cos d'Estournel", "Château Palmer", "Château Haut-Batailley", "Château Desmirail", "Château Saint-Pierre"],
    answerIndexes: [7],
    maxSelections: 2,
    explanation: "Château Saint-PierreはSaint-Julien村のメドック格付け4級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-027",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方Sauternes & Barsac地区でPremier Crusに格付けされているものを全て選択してください。2個まで選択できます。",
    choices: ["Domaine de Chevalier", "Château de Myrat", "Château Climens", "Château Pétrus", "Château Canon", "La Mondotte", "Château Couhins-Lurton", "Château Guiraud"],
    answerIndexes: [2, 7],
    maxSelections: 2,
    explanation: "Château ClimensとChâteau GuiraudはSauternes & Barsac地区のPremier Cruです。"
  },
  {
    id: "france-bordeaux-classification-practice-028",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Graves地区の格付けシャトーの中から赤ワインと白ワイン両方が格付けされているものを全て選択してください。2個まで選択できます。",
    choices: ["Château Haut-Bailly", "Château Carbonnieux", "Château de Fieuzal", "Château Olivier", "Château Smith-Haut-Lafitte", "Château La Mission-Haut-Brion", "Château Couhins", "Château Haut-Brion"],
    answerIndexes: [1, 3],
    maxSelections: 2,
    explanation: "Château CarbonnieuxとChâteau Olivierは赤ワインと白ワインの両方がグラーヴ格付けに含まれます。"
  },
  {
    id: "france-bordeaux-classification-practice-029",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方グラーヴ地区の最初の格付けが発表された年を選択してください。",
    choices: ["1855年", "1854年", "1953年", "1954年"],
    answerIndex: 2,
    explanation: "グラーヴ地区の最初の格付けは1953年に発表されました。"
  },
  {
    id: "france-bordeaux-classification-practice-030",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からAOC名がSaint-Julienと表示され、格付け等級が最も上位なものを選択してください。",
    choices: ["Château Brane-Cantenac", "Château Branaire-Ducru", "Château Batailley", "Château Léoville-Las Cases"],
    answerIndex: 3,
    explanation: "Château Léoville-Las CasesはSaint-Julienの2級格付けで、この選択肢の中では最上位です。"
  },
  {
    id: "france-bordeaux-classification-practice-031",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からMacau村で生産されている5級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Rauzan-Ségla", "Château Calon-Ségur", "Château Giscours", "Château Mouton-Rothschild", "Château Lafite-Rothschild", "Château Croizet-Bages", "Château Palmer", "Château Cantemerle"],
    answerIndexes: [7],
    maxSelections: 2,
    explanation: "Château CantemerleはMacau村のメドック格付け5級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-032",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中からCantenac村で生産されている3級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Lafon-Rochet", "Château Desmirail", "Château Gruaud-Larose", "Château Montrose", "Château Latour", "Château Cantenac-Brown", "Château du Tertre", "Château Croizet-Bages"],
    answerIndexes: [1, 5],
    maxSelections: 2,
    explanation: "Château DesmirailとChâteau Cantenac-BrownはCantenac村のメドック格付け3級シャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-033",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Graves地区の格付けシャトーの中から、Pessac村で生産されているものを選択してください。",
    choices: ["Château Haut-Bailly", "Château Couhins-Lurton", "Château Haut-Brion", "Château Olivier"],
    answerIndex: 2,
    explanation: "Château Haut-BrionはPessac村に位置するグラーヴ格付けシャトーです。"
  },
  {
    id: "france-bordeaux-classification-practice-034",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次の中からボルドー地方Saint-Émilion地区で、Château PavieがPremiers Grands Crus Classés Aに昇格した年を選択してください。",
    choices: ["2006年", "2012年", "1996年", "2022年"],
    answerIndex: 1,
    explanation: "Château Pavieは2012年にPremiers Grands Crus Classés Aへ昇格しました。"
  },
  {
    id: "france-bordeaux-classification-practice-035",
    category: "フランス/ボルドー（格付け実践）",
    importance: "A",
    question: "次のボルドー地方Médoc地区の格付けシャトーの中から4級のシャトーを全て選択してください。2個まで選択できます。",
    choices: ["Château Margaux", "Château Branaire-Ducru", "Château Haut-Bages-Libéral", "Château Léoville-Poyferré", "Château Lafon-Rochet", "Château La Lagune", "Château Lagrange", "Château Langoa-Barton"],
    answerIndexes: [1, 4],
    maxSelections: 2,
    explanation: "Château Branaire-DucruとChâteau Lafon-Rochetはメドック格付け4級です。"
  },
  {
    id: "france-alsace-001",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceに用いることが可能な品種を選択してください。",
    choices: ["ミュスカ", "ゲヴュルツトラミネール", "ピノ・ブラン", "シャスラ"],
    answerIndex: 2,
    explanation: "Crémant d'Alsaceではピノ・ブランを用いることができます。"
  },
  {
    id: "france-alsace-002",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesを造る時、ゲヴュルツトラミネールに求められる最低糖分含有量を選択してください。",
    choices: ["235グラム/リットル", "306グラム/リットル", "257グラム/リットル", "270グラム/リットル"],
    answerIndex: 1,
    explanation: "Sélection de Grains Noblesのゲヴュルツトラミネールでは、最低糖分含有量306グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-003",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、品種に関して例外の規定が設けられているところを選択してください。",
    choices: ["Zotzenberg", "Engelberg", "Wiebelsberg", "Schlossberg"],
    answerIndex: 0,
    explanation: "ZotzenbergはAlsace Grand Cruで品種に関する例外規定がある畑です。"
  },
  {
    id: "france-alsace-004",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方の東部を流れている川の名前を選択してください。",
    choices: ["ライン川", "ソーヌ川", "スラン川", "シロン川"],
    answerIndex: 0,
    explanation: "アルザス地方の東側にはライン川が流れ、ドイツとの国境にもなっています。"
  },
  {
    id: "france-alsace-005",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方で栽培されている品種ピノ・ノワールの別名を選択してください。",
    choices: ["ミュスカデ", "シュペートブルグンダー", "ムニエ", "ユニ・ブラン"],
    answerIndex: 1,
    explanation: "ピノ・ノワールはドイツ語圏ではシュペートブルグンダーとも呼ばれます。"
  },
  {
    id: "france-alsace-006",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス・ロレーヌ地方のAOC Côtes de Toulの赤ワインの主要品種を選択してください。",
    choices: ["ピノ・ノワール", "プールサール", "ピノ・ノワールとガメイ", "モンデューズ"],
    answerIndex: 0,
    explanation: "Côtes de Toulの赤ワインではピノ・ノワールが主要品種です。"
  },
  {
    id: "france-alsace-007",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方の気候の特徴として最も正しいものを選択してください。",
    choices: ["ミストラルと呼ばれる北風が吹き抜けている", "大西洋の影響を受け降水量が多い", "西側の山脈の影響を受け降水量が多い", "フェーン現象により暖かく乾燥している"],
    answerIndex: 3,
    explanation: "アルザスはヴォージュ山脈の雨陰にあり、フェーン現象の影響で暖かく乾燥した気候になります。"
  },
  {
    id: "france-alsace-008",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceに用いることが可能な品種を選択してください。",
    choices: ["ゲヴュルツトラミネール", "シルヴァネール", "ミュスカ", "オーセロワ"],
    answerIndex: 3,
    explanation: "Crémant d'Alsaceではオーセロワを用いることができます。"
  },
  {
    id: "france-alsace-009",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス・ロレーヌ地方のAOC Moselleの赤ワインの主要品種を選択してください。",
    choices: ["ガメイ", "ピノ・ノワール", "プールサール", "ピノ・ノワールとガメイ"],
    answerIndex: 1,
    explanation: "AOC Moselleの赤ワインではピノ・ノワールが主要品種です。"
  },
  {
    id: "france-alsace-010",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、例外的にピノ・ノワールを単一で醸造した赤ワインの生産が可能であるところを選択してください。",
    choices: ["Schlossberg", "Kaefferkopf", "Hengst", "Engelberg"],
    answerIndex: 2,
    explanation: "Hengstでは例外的にピノ・ノワール単一の赤ワイン生産が認められています。"
  },
  {
    id: "france-alsace-011",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["シポン", "ムニエ", "ブラウアー・ブルグンダー", "グロ・プラン"],
    answerIndex: 2,
    explanation: "ブラウアー・ブルグンダーはピノ・ノワール系の名称で、アルザスで使用される品種に該当します。"
  },
  {
    id: "france-alsace-012",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス・ロレーヌ地方のAOC Alsaceが生産可能なワインの色を選択してください。（ロゼはヴァン・グリを含むものとします）",
    choices: ["赤のみ", "赤・ロゼ・白", "赤・ロゼ", "白のみ"],
    answerIndex: 1,
    explanation: "AOC Alsaceでは白に加えて、ピノ・ノワール由来の赤やヴァン・グリを含むロゼも生産可能です。"
  },
  {
    id: "france-alsace-013",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceの製法を選択してください。",
    choices: ["Méthode rurale", "Méthode cuvée close", "Méthode charmat", "Méthode traditionnelle"],
    answerIndex: 3,
    explanation: "Crémant d'Alsaceは瓶内二次発酵によるMéthode traditionnelleで造られます。"
  },
  {
    id: "france-alsace-014",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesを造る時、ミュスカに求められる最低糖分含有量を選択してください。",
    choices: ["335グラム/リットル", "205グラム/リットル", "244グラム/リットル", "257グラム/リットル"],
    answerIndex: 2,
    explanation: "Vendanges Tardivesのミュスカでは最低糖分含有量244グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-015",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesを造る時、ゲヴュルツトラミネールに求められる最低糖分含有量を選択してください。",
    choices: ["257グラム/リットル", "270グラム/リットル", "205グラム/リットル", "235グラム/リットル"],
    answerIndex: 1,
    explanation: "Vendanges Tardivesのゲヴュルツトラミネールでは最低糖分含有量270グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-016",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["ゲヴュルツトラミネール", "カリニェナ", "リヴァーナー", "カリニャン"],
    answerIndex: 0,
    explanation: "ゲヴュルツトラミネールはアルザスを代表する品種の一つです。"
  },
  {
    id: "france-alsace-017",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、品種に関して例外の規定が設けられているところを選択してください。",
    choices: ["Osterberg", "Wiebelsberg", "Engelberg", "Kirchberg de Barr"],
    answerIndex: 3,
    explanation: "Kirchberg de BarrはAlsace Grand Cruで品種に関する例外規定がある畑です。"
  },
  {
    id: "france-alsace-018",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のワイン産地の南北の長さを選択してください。",
    choices: ["約170km", "約110km", "約250km", "約60km"],
    answerIndex: 0,
    explanation: "アルザスのワイン産地は南北に約170km伸びています。"
  },
  {
    id: "france-alsace-019",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesに原則として認められていない品種を選択してください。",
    choices: ["ゲヴュルツトラミネール", "リースリング", "ピノ・グリ", "シルヴァネール"],
    answerIndex: 3,
    explanation: "Sélection de Grains Noblesは原則として高貴品種が対象で、シルヴァネールは認められていません。"
  },
  {
    id: "france-alsace-020",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["プルニョーロ・ジェンティーレ", "サン・テミリオン", "ピノ・ブラン", "ヴェルメンティーノ"],
    answerIndex: 2,
    explanation: "ピノ・ブランはアルザスで使用される主要品種の一つです。"
  },
  {
    id: "france-alsace-021",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesを造る時、リースリングに求められる最低糖分含有量を選択してください。",
    choices: ["244グラム/リットル", "270グラム/リットル", "306グラム/リットル", "235グラム/リットル"],
    answerIndex: 0,
    explanation: "Vendanges Tardivesのリースリングでは最低糖分含有量244グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-022",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges TardivesまたはSélection de Grains Noblesの最低熟成期間を選択してください。",
    choices: ["収穫翌年の4月30日まで", "収穫翌々年の8月31日まで", "収穫翌年の6月1日まで", "収穫翌年の8月1日まで"],
    answerIndex: 2,
    explanation: "Vendanges TardivesまたはSélection de Grains Noblesは、収穫翌年の6月1日までの熟成が必要です。"
  },
  {
    id: "france-alsace-023",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス・ロレーヌ地方のAOC Crémant d'Alsaceが生産可能なワインの色を選択してください。（ロゼはヴァン・グリを含むものとします）",
    choices: ["ロゼ・白", "ロゼのみ", "赤・ロゼ・白", "赤のみ"],
    answerIndex: 0,
    explanation: "Crémant d'Alsaceでは白とロゼの発泡ワインが生産可能です。"
  },
  {
    id: "france-alsace-024",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["ナチュレ", "オーセロワ", "パイス", "ビウラ"],
    answerIndex: 1,
    explanation: "オーセロワはアルザスで使用される品種です。"
  },
  {
    id: "france-alsace-025",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceに用いることが可能な品種を選択してください。",
    choices: ["ミュスカ", "ピノ・ノワール", "シャスラ", "ゲヴュルツトラミネール"],
    answerIndex: 1,
    explanation: "Crémant d'Alsaceではピノ・ノワールを用いることができます。"
  },
  {
    id: "france-alsace-026",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceに用いることが可能な品種を選択してください。",
    choices: ["リースリング", "シャスラ", "シルヴァネール", "ミュスカ"],
    answerIndex: 0,
    explanation: "Crémant d'Alsaceではリースリングを用いることができます。"
  },
  {
    id: "france-alsace-027",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、品種に関して例外の規定が設けられているところを選択してください。",
    choices: ["Osterberg", "Schlossberg", "Vorbourg", "Wiebelsberg"],
    answerIndex: 2,
    explanation: "VorbourgはAlsace Grand Cruで品種に関する例外規定がある畑です。"
  },
  {
    id: "france-alsace-028",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesを造る時、ピノ・グリに求められる最低糖分含有量を選択してください。",
    choices: ["270グラム/リットル", "235グラム/リットル", "205グラム/リットル", "306グラム/リットル"],
    answerIndex: 0,
    explanation: "Vendanges Tardivesのピノ・グリでは最低糖分含有量270グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-029",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAOCクレマン・ダルザスが制定された年を選択してください。",
    choices: ["1962年", "1976年", "1968年", "1935年"],
    answerIndex: 1,
    explanation: "AOC Crémant d'Alsaceは1976年に制定されました。"
  },
  {
    id: "france-alsace-030",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["カリニャン", "スティーン", "シャスラ", "ソーヴィニョン・ブラン"],
    answerIndex: 2,
    explanation: "シャスラはアルザスで使用される品種です。"
  },
  {
    id: "france-alsace-031",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesが造ることのできるワインの色を選択してください。",
    choices: ["赤のみ", "白のみ", "赤・白", "赤・ロゼ・白"],
    answerIndex: 1,
    explanation: "Sélection de Grains Noblesは白ワインとして造られます。"
  },
  {
    id: "france-alsace-032",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のCrémant d'Alsaceに用いることが可能な品種を選択してください。",
    choices: ["ミュスカ", "シャスラ", "ピノ・グリ", "シルヴァネール"],
    answerIndex: 2,
    explanation: "Crémant d'Alsaceではピノ・グリを用いることができます。"
  },
  {
    id: "france-alsace-033",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesに原則として認められていない品種を選択してください。",
    choices: ["ピノ・ブラン", "ミュスカ", "ゲヴュルツトラミネール", "リースリング"],
    answerIndex: 0,
    explanation: "Vendanges Tardivesは原則として高貴品種が対象で、ピノ・ブランは認められていません。"
  },
  {
    id: "france-alsace-034",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方の気候を選択してください。",
    choices: ["高山性気候", "大陸性気候", "海洋性気候", "半大陸性気候"],
    answerIndex: 1,
    explanation: "アルザス地方は大陸性気候の影響が強い産地です。"
  },
  {
    id: "france-alsace-035",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方で栽培されている品種ピノ・グリの別名を選択してください。",
    choices: ["サヴァニャン", "ルーレンダー", "ティンタ・デ・トロ", "ジンファンデル"],
    answerIndex: 1,
    explanation: "ピノ・グリはドイツ語圏でルーレンダーとも呼ばれます。"
  },
  {
    id: "france-alsace-036",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス・ロレーヌ地方のAOC Côtes de Toulが生産可能なワインの色を選択してください。（ロゼはヴァン・グリを含むものとします）",
    choices: ["ロゼ・白", "赤・ロゼ・白", "ロゼのみ", "赤のみ"],
    answerIndex: 1,
    explanation: "AOC Côtes de Toulでは赤・ロゼ・白の生産が可能です。"
  },
  {
    id: "france-alsace-037",
    category: "フランス/アルザス",
    importance: "B",
    question: "次の中からアルザス地方の2023年のブドウ栽培面積に最も近いものを選択してください。",
    choices: ["12万ヘクタール", "5.0万ヘクタール", "3.0万ヘクタール", "1.6万ヘクタール"],
    answerIndex: 3,
    explanation: "アルザス地方の2023年のブドウ栽培面積は約1.6万ヘクタールです。"
  },
  {
    id: "france-alsace-038",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、Vendanges TardivesおよびSélection de Grains Noblesにおいてピノ・グリが認められないところを選択してください。",
    choices: ["Altenberg de Bergheim", "Kaefferkopf", "Wiebelsberg", "Engelberg"],
    answerIndex: 1,
    explanation: "KaefferkopfではVendanges TardivesおよびSélection de Grains Noblesにおいてピノ・グリが認められません。"
  },
  {
    id: "france-alsace-039",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["ユニ・ブラン", "ルーレンダー", "マスエロ", "カリニャン"],
    answerIndex: 1,
    explanation: "ルーレンダーはピノ・グリの別名で、アルザスで使用される品種に該当します。"
  },
  {
    id: "france-alsace-040",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesを造る時、ピノ・グリに求められる最低糖分含有量を選択してください。",
    choices: ["276グラム/リットル", "235グラム/リットル", "306グラム/リットル", "257グラム/リットル"],
    answerIndex: 2,
    explanation: "Sélection de Grains Noblesのピノ・グリでは最低糖分含有量306グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-041",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、例外的にシルヴァネールを単一で使用できるところを選択してください。",
    choices: ["Wiebelsberg", "Zotzenberg", "Osterberg", "Kirchberg de Barr"],
    answerIndex: 1,
    explanation: "Zotzenbergは例外的にシルヴァネール単一での使用が認められるAlsace Grand Cruです。"
  },
  {
    id: "france-alsace-042",
    category: "フランス/アルザス",
    importance: "B",
    question: "次の中からアルザス地方の2023年の年間ワイン生産量に最も近いものを選択してください。",
    choices: ["81万ヘクトリットル", "104万ヘクトリットル", "120万ヘクトリットル", "180万ヘクトリットル"],
    answerIndex: 1,
    explanation: "アルザス地方の2023年の年間ワイン生産量は約104万ヘクトリットルです。"
  },
  {
    id: "france-alsace-043",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のグラン・クリュに認められているリュー・ディの数を選択してください。",
    choices: ["16", "45", "51", "50"],
    answerIndex: 2,
    explanation: "アルザス地方のグラン・クリュに認められているリュー・ディは51です。"
  },
  {
    id: "france-alsace-044",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesが造ることのできるワインの色を選択してください。",
    choices: ["ロゼ・白", "白のみ", "赤・ロゼ", "赤・ロゼ・白"],
    answerIndex: 1,
    explanation: "Vendanges Tardivesは白ワインとして造られます。"
  },
  {
    id: "france-alsace-045",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方で栽培されている品種ピノ・ノワールの別名を選択してください。",
    choices: ["ムールヴェドル", "ティンタ・デ・マドリード", "パイス", "ブラウアー・ブルグンダー"],
    answerIndex: 3,
    explanation: "ブラウアー・ブルグンダーはピノ・ノワールの別名です。"
  },
  {
    id: "france-alsace-046",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruに原則として認められていない品種を選択してください。",
    choices: ["シルヴァネール", "ピノ・グリ", "リースリング", "ミュスカ"],
    answerIndex: 0,
    explanation: "Alsace Grand Cruでは原則としてシルヴァネールは認められていません。ただし一部の例外規定があります。"
  },
  {
    id: "france-alsace-047",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAOCアルザスおよびヴァン・ダルザスにおいて、複数の品種を混醸またはアッサンブラージュした場合の表記として適切なものを選択してください。",
    choices: ["Gentil", "Vendanges Tardives", "Zotzenberg", "Edelzwicker"],
    answerIndex: 3,
    explanation: "複数品種の混醸またはアッサンブラージュではEdelzwickerの表記が用いられます。"
  },
  {
    id: "france-alsace-048",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesを造る時、ミュスカに求められる最低糖分含有量を選択してください。",
    choices: ["276グラム/リットル", "257グラム/リットル", "335グラム/リットル", "205グラム/リットル"],
    answerIndex: 0,
    explanation: "Sélection de Grains Noblesのミュスカでは最低糖分含有量276グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-049",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、品種に関して例外の規定が設けられているところを選択してください。",
    choices: ["Osterberg", "Kaefferkopf", "Schlossberg", "Wiebelsberg"],
    answerIndex: 1,
    explanation: "KaefferkopfはAlsace Grand Cruで品種に関する例外規定がある畑です。"
  },
  {
    id: "france-alsace-050",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["アルテス", "フォル・ブランシュ", "ティント・デル・パイス", "ラインリースリング"],
    answerIndex: 3,
    explanation: "ラインリースリングはリースリングを指し、アルザスで使用される品種です。"
  },
  {
    id: "france-alsace-051",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、例外的に混醸が可能であり、その際はゲヴュルツトラミネールを60〜80%使わなければいけないところを選択してください。",
    choices: ["Wiebelsberg", "Hengst", "Kaefferkopf", "Altenberg de Bergheim"],
    answerIndex: 2,
    explanation: "Kaefferkopfでは例外的に混醸が可能で、ゲヴュルツトラミネールを60〜80%使用する規定があります。"
  },
  {
    id: "france-alsace-052",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAOCアルザスおよびヴァン・ダルザスにおいて、複数の高貴品種を50%以上使用しアッサンブラージュした場合の表記として適切なものを選択してください。",
    choices: ["Edelzwicker", "Gentil", "Zotzenberg", "Vendanges Tardives"],
    answerIndex: 1,
    explanation: "複数の高貴品種を50%以上使用したアッサンブラージュではGentilの表記が用いられます。"
  },
  {
    id: "france-alsace-053",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVendanges Tardivesに原則として認められていない品種を選択してください。",
    choices: ["シャスラ", "ゲヴュルツトラミネール", "リースリング", "ピノ・グリ"],
    answerIndex: 0,
    explanation: "Vendanges Tardivesは原則として高貴品種が対象で、シャスラは認められていません。"
  },
  {
    id: "france-alsace-054",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のSélection de Grains Noblesを造る時、リースリングに求められる最低糖分含有量を選択してください。",
    choices: ["235グラム/リットル", "335グラム/リットル", "257グラム/リットル", "276グラム/リットル"],
    answerIndex: 3,
    explanation: "Sélection de Grains Noblesのリースリングでは最低糖分含有量276グラム/リットルが求められます。"
  },
  {
    id: "france-alsace-055",
    category: "フランス/アルザス",
    importance: "B",
    question: "次の中からアルザス地方のワイン生産の中心地で木骨造りの建物が並んでいる街を選択してください。",
    choices: ["ミュルーズ", "コルマール", "トロワ", "バーゼル"],
    answerIndex: 1,
    explanation: "コルマールはアルザス地方のワイン生産の中心地として知られ、木骨造りの建物が並ぶ街です。"
  },
  {
    id: "france-alsace-056",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からフランスで最も消費量の多いクレマンを選択してください。",
    choices: ["クレマン・ダルザス", "クレマン・ド・ボルドー", "クレマン・ド・ロワール", "クレマン・ド・ブルゴーニュ"],
    answerIndex: 0,
    explanation: "クレマン・ダルザスはフランスで消費量の多いクレマンとして知られます。"
  },
  {
    id: "france-alsace-057",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方の西部にある山脈の名前を選択してください。",
    choices: ["ヴォージュ山脈", "ピレネー山脈", "アペニン山脈", "アルプス山脈"],
    answerIndex: 0,
    explanation: "アルザス地方の西側にはヴォージュ山脈があり、産地の気候にも大きく影響します。"
  },
  {
    id: "france-alsace-058",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のVin d'Alsaceに使用される品種を選択してください。品種は別の産地の名前で表示されていることもあります。",
    choices: ["ブラウブルグンダー", "スティーン", "ムロン・ド・ブルゴーニュ", "ピノ・グリ"],
    answerIndex: 3,
    explanation: "ピノ・グリはアルザス地方のVin d'Alsaceに使用される主要品種の一つです。"
  },
  {
    id: "france-alsace-059",
    category: "フランス/アルザス",
    importance: "A",
    question: "次の中からアルザス地方のAlsace Grand Cruにおいて、単一で醸造する場合、原則としてミュスカは使用できないところを選択してください。",
    choices: ["Vorbourg", "Hengst", "Wiebelsberg", "Zotzenberg"],
    answerIndex: 3,
    explanation: "Zotzenbergでは、単一で醸造する場合に原則としてミュスカは使用できません。"
  },
  {
    id: "france-jura-savoie-001",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からフランス、ジュラ地方の出身でワイン醸造学に大きな功績を残した人物を選択してください。",
    choices: ["ジョゼフ・ルイ・ゲイリュサック", "ジャン・アントワーヌ・シャプタル", "ミシェル・ロラン", "ルイ・パストゥール"],
    answerIndex: 3,
    explanation: "ルイ・パストゥールはジュラ地方出身で、発酵や微生物研究を通じてワイン醸造学にも大きな功績を残しました。"
  },
  {
    id: "france-jura-savoie-002",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からジュラ地方においてVin de Pailleの生産に認められていない品種を選択してください。",
    choices: ["ジャケール", "サヴァニャン", "プールサール", "トゥルソー"],
    answerIndex: 0,
    explanation: "Vin de Pailleではサヴァニャン、シャルドネ、プールサール、トゥルソーなどが認められ、ジャケールは認められていません。"
  },
  {
    id: "france-jura-savoie-003",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方のVin Jauneの生産における熟成規定を選択してください。",
    choices: ["60ヶ月以上産膜酵母の下で熟成", "72ヶ月以上産膜酵母の下で熟成", "36ヶ月以上産膜酵母の下で熟成", "24ヶ月以上産膜酵母の下で熟成"],
    answerIndex: 0,
    explanation: "Vin Jauneは産膜酵母の下で60ヶ月以上熟成させる規定があります。"
  },
  {
    id: "france-jura-savoie-004",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "サヴォワ地方のAOCワイン Vin de Savoie Crémantに認められているワインの色またはタイプを選択してください。",
    choices: ["赤・白", "赤・ロゼ", "白のみ", "黄・藁"],
    answerIndex: 2,
    explanation: "Vin de Savoie Crémantは白の発泡ワインとして認められています。"
  },
  {
    id: "france-jura-savoie-005",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin de Pailleの生産が認められているAOCを選択してください。",
    choices: ["Crépy", "L'Étoile", "Bugey", "Seyssel mousseux"],
    answerIndex: 1,
    explanation: "L'Étoileはジュラ地方でVin de Pailleの生産が認められているAOCです。"
  },
  {
    id: "france-jura-savoie-006",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からジュラ地方のシャトー・シャロンなどでヴァン・ジョーヌを生み出す品種を選択してください。（品種の名前は別名で表示されていることもあります）",
    choices: ["サヴァニャン", "プールサール", "アルテス", "シャルドネ"],
    answerIndex: 0,
    explanation: "ジュラ地方のヴァン・ジョーヌはサヴァニャンから造られます。"
  },
  {
    id: "france-jura-savoie-007",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin Jauneの生産が認められているAOCを選択してください。",
    choices: ["Bugey", "Crémant du Jura", "Seyssel", "L'Étoile"],
    answerIndex: 3,
    explanation: "L'Étoileはジュラ地方でVin Jauneの生産が認められているAOCです。"
  },
  {
    id: "france-jura-savoie-008",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からジュラ地方においてVin de Pailleの生産に認められていない品種を選択してください。",
    choices: ["サヴァニャン", "トゥルソー", "プールサール", "ピノ・ノワール"],
    answerIndex: 3,
    explanation: "ジュラ地方のVin de Pailleではサヴァニャン、シャルドネ、プールサール、トゥルソーなどが認められ、ピノ・ノワールは認められていません。"
  },
  {
    id: "france-jura-savoie-009",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "サヴォワ地方のAOCワイン Vin de Savoie Mousseuxに認められているワインの色またはタイプを選択してください。",
    choices: ["ロゼのみ", "赤・ロゼ・白・黄・藁", "赤・白", "黄・藁"],
    answerIndex: 0,
    explanation: "Vin de Savoie Mousseuxではロゼのみが認められています。"
  },
  {
    id: "france-jura-savoie-010",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からフランス、サヴォワ地方の中心都市でサヴォワ公国の首都として栄えたところを選択してください。",
    choices: ["アルボワ", "グルノーブル", "シャンベリー", "ナンシー"],
    answerIndex: 2,
    explanation: "シャンベリーはサヴォワ地方の中心都市で、サヴォワ公国の首都として栄えました。"
  },
  {
    id: "france-jura-savoie-011",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からサヴォワ地方のAOCを選択してください。",
    choices: ["L'Étoile", "Château-Chalon", "Seyssel", "Arbois"],
    answerIndex: 2,
    explanation: "Seysselはサヴォワ地方のAOCです。"
  },
  {
    id: "france-jura-savoie-012",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方のVin Jauneの生産における最低熟成期間を選択してください。",
    choices: ["収穫から2年目の12月15日まで", "収穫から6年目の12月15日まで", "収穫から8年目の12月15日まで", "収穫から3年目の12月15日まで"],
    answerIndex: 1,
    explanation: "Vin Jauneは収穫から6年目の12月15日まで熟成させる規定があります。"
  },
  {
    id: "france-jura-savoie-013",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からVin de Pailleを生産可能なAOCが存在するフランスのワイン産地を選択してください。",
    choices: ["コート・デュ・ローヌ地方北部", "アルザス地方", "サヴォワ地方", "コート・デュ・ローヌ地方南部"],
    answerIndex: 0,
    explanation: "Vin de Pailleを生産可能なAOCは、コート・デュ・ローヌ地方北部にも存在します。"
  },
  {
    id: "france-jura-savoie-014",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からサヴォワ地方ではオート・サヴォワ県のみで栽培されているが、スイスでは栽培面積第1位の白ブドウ品種を選択してください。（品種の名前は別名で表示されていることもあります）",
    choices: ["シャスラ", "ジャケール", "ナチュレ", "サヴァニャン"],
    answerIndex: 0,
    explanation: "シャスラはサヴォワ地方ではオート・サヴォワ県で栽培され、スイスでは主要な白ブドウ品種です。"
  },
  {
    id: "france-jura-savoie-015",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方のVin Jauneの生産において禁止されている工程を選択してください。",
    choices: ["Ouillage", "Collage", "Macération", "Foulage"],
    answerIndex: 0,
    explanation: "Vin Jauneでは産膜酵母の下で熟成させるため、補酒を意味するOuillageは禁止されています。"
  },
  {
    id: "france-jura-savoie-016",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からサヴォワ地方のAOCワインVin de Savoie Crépyの主要品種を選択してください。",
    choices: ["シャスラ", "モンデューズ", "アルテス", "サヴァニャン"],
    answerIndex: 0,
    explanation: "Vin de Savoie Crépyの主要品種はシャスラです。"
  },
  {
    id: "france-jura-savoie-017",
    category: "フランス/ジュラ、サヴォワ",
    importance: "B",
    question: "次の中からフランス、ジュラ地方でビオロジック栽培が行われている耕作面積の割合を選択してください。",
    choices: ["約45%", "約15%", "約30%", "約60%"],
    answerIndex: 1,
    explanation: "ジュラ地方ではビオロジック栽培が行われている耕作面積の割合は約15%です。"
  },
  {
    id: "france-jura-savoie-018",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方のAOCワイン Côtes du Juraに認められているワインの色またはタイプを選択してください。",
    choices: ["黄のみ", "黄・藁", "赤・白", "赤・ロゼ・白・黄・藁"],
    answerIndex: 3,
    explanation: "Côtes du Juraでは赤・ロゼ・白のほか、ヴァン・ジョーヌやヴァン・ド・パイユも認められます。"
  },
  {
    id: "france-jura-savoie-019",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin de Pailleの生産が認められているAOCを選択してください。",
    choices: ["Seyssel mousseux", "Côtes du Jura", "Seyssel", "Bugey"],
    answerIndex: 1,
    explanation: "Côtes du JuraではVin de Pailleの生産が認められています。"
  },
  {
    id: "france-jura-savoie-020",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin Jauneの生産が認められているAOCを選択してください。",
    choices: ["Crémant du Jura", "Côtes du Jura", "Macvin du Jura", "Seyssel"],
    answerIndex: 1,
    explanation: "Côtes du JuraではVin Jauneの生産が認められています。"
  },
  {
    id: "france-jura-savoie-021",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からサヴォワ地方の主要品種の一つで、キプロス島から持ち込まれたと言われている白ブドウ品種を選択してください。（品種の名前は別名で表示されていることもあります）",
    choices: ["モンデューズ", "ナチュレ", "アルテス", "サヴァニャン"],
    answerIndex: 2,
    explanation: "アルテスはサヴォワ地方の主要白品種の一つで、キプロス島由来と伝えられます。"
  },
  {
    id: "france-jura-savoie-022",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からフランス、ジュラ地方の気候を選択してください。",
    choices: ["半大陸性気候", "高山性気候", "大陸性気候", "海洋性気候"],
    answerIndex: 0,
    explanation: "ジュラ地方は半大陸性気候の影響を受けます。"
  },
  {
    id: "france-jura-savoie-023",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方のAOCワイン Macvin du Juraに認められているワインの色またはタイプを選択してください。",
    choices: ["赤・ロゼ・白", "黄のみ", "赤・ロゼ・白・黄", "ロゼ・白"],
    answerIndex: 0,
    explanation: "Macvin du Juraでは赤・ロゼ・白が認められています。"
  },
  {
    id: "france-jura-savoie-024",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からCrémant du Juraの瓶内最低熟成期間を選択してください。",
    choices: ["15ヶ月", "12ヶ月", "18ヶ月", "9ヶ月"],
    answerIndex: 3,
    explanation: "Crémant du Juraは瓶内で最低9ヶ月熟成させます。"
  },
  {
    id: "france-jura-savoie-025",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin de Pailleの生産が認められているAOCを選択してください。",
    choices: ["Seyssel", "Château-Chalon", "Arbois Pupillin", "Macvin du Jura"],
    answerIndex: 2,
    explanation: "Arbois PupillinではVin de Pailleの生産が認められています。"
  },
  {
    id: "france-jura-savoie-026",
    category: "フランス/ジュラ、サヴォワ",
    importance: "B",
    question: "次の中からフランス、サヴォワ地方のワインの輸出量の比率を選択してください。",
    choices: ["全生産量の約75%", "全生産量の約50%", "全生産量の約5%", "全生産量の約10%"],
    answerIndex: 2,
    explanation: "サヴォワ地方のワインの輸出比率は全生産量の約5%です。"
  },
  {
    id: "france-jura-savoie-027",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin Jauneの生産が認められているAOCを選択してください。",
    choices: ["Crémant du Jura", "Macvin du Jura", "Arbois", "Bugey"],
    answerIndex: 2,
    explanation: "ArboisではVin Jauneの生産が認められています。"
  },
  {
    id: "france-jura-savoie-028",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からジュラ地方のブドウ栽培面積の50%を占め、この地方で最も栽培されている品種を選択してください。（品種の名前は別名で表示されていることもあります）",
    choices: ["ピノ・ノワール", "ジャケール", "ムロン・ダルボワ", "シャスラ"],
    answerIndex: 2,
    explanation: "ムロン・ダルボワはシャルドネの別名で、ジュラ地方で広く栽培されています。"
  },
  {
    id: "france-jura-savoie-029",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "サヴォワ地方のAOCワイン Roussette de Savoieに認められているワインの色またはタイプを選択してください。",
    choices: ["赤・ロゼ・白・黄・藁", "ロゼのみ", "赤・ロゼ・白", "白のみ"],
    answerIndex: 3,
    explanation: "Roussette de Savoieは白ワインのみが認められています。"
  },
  {
    id: "france-jura-savoie-030",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "次の中からジュラ地方のVin de Pailleの最低熟成期間を選択してください。",
    choices: ["収穫から2年目の11月15日まで", "収穫から3年目の11月15日まで", "収穫から5年目の11月15日まで", "収穫から4年目の11月15日まで"],
    answerIndex: 1,
    explanation: "Vin de Pailleは収穫から3年目の11月15日まで熟成させる規定があります。"
  },
  {
    id: "france-jura-savoie-031",
    category: "フランス/ジュラ、サヴォワ",
    importance: "A",
    question: "ジュラ地方においてVin de Pailleの生産が認められていないAOCを選択してください。",
    choices: ["L'Étoile", "Château-Chalon", "Arbois Pupillin", "Côtes du Jura"],
    answerIndex: 1,
    explanation: "Château-ChalonはVin Jauneで知られるAOCで、Vin de Pailleの生産は認められていません。"
  },
  {
    id: "france-rhone-001",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方南部地区で、14世紀には法皇クレメンス5世が座所に定めていた都市を選択してください。",
    choices: ["アヴィニョン", "アルル", "ヴィエンヌ", "オランジュ"],
    answerIndex: 0,
    explanation: "14世紀、法皇クレメンス5世はアヴィニョンを座所に定めました。"
  },
  {
    id: "france-rhone-002",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から白ワインだけが認められているものを選択してください。",
    choices: ["Côtes du Vivarais", "Saint-Joseph", "Hermitage", "Clairette de Bellegarde"],
    answerIndex: 3,
    explanation: "Clairette de Bellegardeは白ワインのみが認められています。"
  },
  {
    id: "france-rhone-003",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方北部地区にあるAOCを選択してください。",
    choices: ["Châtillon-en-Diois", "Vinsobres", "Muscat de Beaumes de Venise", "Clairette de Bellegarde"],
    answerIndex: 0,
    explanation: "Châtillon-en-Dioisはローヌ渓谷地方北部地区のAOCです。"
  },
  {
    id: "france-rhone-004",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方南部地区にあるAOCを選択してください。",
    choices: ["Cornas", "Château-Grillet", "Côte-Rôtie", "Laudun"],
    answerIndex: 3,
    explanation: "Laudunはローヌ渓谷地方南部地区のAOCです。"
  },
  {
    id: "france-rhone-005",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からChâteauneuf-du-Papeに使用が認められている品種の数を選択してください。",
    choices: ["12品種", "11品種", "13品種", "14品種"],
    answerIndex: 2,
    explanation: "Châteauneuf-du-Papeでは13品種の使用が認められています。"
  },
  {
    id: "france-rhone-006",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCの中からヴァン・ド・パイユの生産が認められているものを選択してください。",
    choices: ["Cornas", "Costières de Nîmes", "Hermitage", "Tavel"],
    answerIndex: 2,
    explanation: "Hermitageではヴァン・ド・パイユの生産が認められています。"
  },
  {
    id: "france-rhone-007",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方のAOCワインSaint-Josephの赤の品種構成を選択してください。",
    choices: ["シラー90%以上+ヴィオニエ", "シラー85%以上+ヴィオニエ", "シラー90%以上+マルサンヌ、ルーサンヌ", "シラー85%以上+マルサンヌ、ルーサンヌ"],
    answerIndex: 2,
    explanation: "Saint-Joseph赤はシラー90%以上で、マルサンヌ、ルーサンヌを補助的に使用できます。"
  },
  {
    id: "france-rhone-008",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方南部のAOCの地図です。地図上で15番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/rhone-meridional-map.jpg",
      alt: "ローヌ渓谷地方南部のAOC地図",
      caption: "ローヌ渓谷地方南部"
    },
    answerText: "シャトーヌフ・デュ・パプ",
    explanation: "南部地図の15番はシャトーヌフ・デュ・パプです。"
  },
  {
    id: "france-rhone-009",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方北部のAOCの地図です。地図上で2番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/rhone-septentrional-map.jpg",
      alt: "ローヌ渓谷地方北部のAOC地図",
      caption: "ローヌ渓谷地方北部"
    },
    answerText: "コンドリュー",
    explanation: "北部地図の2番はコンドリューです。"
  },
  {
    id: "france-rhone-010",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインと白ワインだけが認められているものを選択してください。",
    choices: ["Cornas", "Laudun", "Saint-Joseph", "Côtes du Vivarais"],
    answerIndex: 2,
    explanation: "Saint-Josephは赤ワインと白ワインが認められています。"
  },
  {
    id: "france-rhone-011",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCの中からVins Doux Naturelsの生産が認められているものを選択してください。",
    choices: ["Costières de Nîmes", "Laudun", "Tavel", "Muscat de Beaumes de Venise"],
    answerIndex: 3,
    explanation: "Muscat de Beaumes de VeniseではVins Doux Naturelsが認められています。"
  },
  {
    id: "france-rhone-012",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインと白ワインだけが認められているものを選択してください。",
    choices: ["Cornas", "Châtillon-en-Diois", "Châteauneuf-du-Pape", "Gigondas"],
    answerIndex: 2,
    explanation: "Châteauneuf-du-Papeは赤ワインと白ワインが認められています。"
  },
  {
    id: "france-rhone-013",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方北部地区にあるAOCを選択してください。",
    choices: ["Muscat de Beaumes de Venise", "Rasteau", "Château-Grillet", "Gigondas"],
    answerIndex: 2,
    explanation: "Château-Grilletはローヌ渓谷地方北部地区のAOCです。"
  },
  {
    id: "france-rhone-014",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤・白・ロゼワインが認められているものを選択してください。",
    choices: ["Tavel", "Condrieu", "Saint-Péray", "Luberon"],
    answerIndex: 3,
    explanation: "Luberonは赤・白・ロゼワインが認められています。"
  },
  {
    id: "france-rhone-015",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインだけが認められているものを選択してください。",
    choices: ["Château-Grillet", "Vinsobres", "Côtes du Vivarais", "Crémant de Die"],
    answerIndex: 1,
    explanation: "Vinsobresは赤ワインのみが認められています。"
  },
  {
    id: "france-rhone-016",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤・白・ロゼワインが認められているものを選択してください。",
    choices: ["Ventoux", "Hermitage", "Cornas", "Condrieu"],
    answerIndex: 0,
    explanation: "Ventouxは赤・白・ロゼワインが認められています。"
  },
  {
    id: "france-rhone-017",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方南部のAOCの地図です。地図上で17番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/rhone-meridional-map.jpg",
      alt: "ローヌ渓谷地方南部のAOC地図",
      caption: "ローヌ渓谷地方南部"
    },
    answerText: "タヴェル",
    explanation: "南部地図の17番はタヴェルです。"
  },
  {
    id: "france-rhone-018",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインだけが認められているものを選択してください。",
    choices: ["Luberon", "Beaumes de Venise", "Laudun", "Crémant de Die"],
    answerIndex: 1,
    explanation: "Beaumes de Veniseは赤ワインのみが認められています。"
  },
  {
    id: "france-rhone-019",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方北部のAOCの地図です。地図上で1番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/rhone-septentrional-map.jpg",
      alt: "ローヌ渓谷地方北部のAOC地図",
      caption: "ローヌ渓谷地方北部"
    },
    answerText: "コート・ロティ",
    explanation: "北部地図の1番はコート・ロティです。"
  },
  {
    id: "france-rhone-020",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から白ワインだけが認められているものを選択してください。",
    choices: ["Saint-Joseph", "Duché d'Uzès", "Saint-Péray", "Costières de Nîmes"],
    answerIndex: 2,
    explanation: "Saint-Pérayは白ワインのみが認められています。"
  },
  {
    id: "france-rhone-021",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方ローヌ川左岸のAOCを選択してください。",
    choices: ["Gigondas", "Côte-Rôtie", "Condrieu", "Tavel"],
    answerIndex: 0,
    explanation: "Gigondasはローヌ川左岸側に位置するAOCです。"
  },
  {
    id: "france-rhone-022",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方ローヌ川右岸のAOCを選択してください。",
    choices: ["Beaumes de Venise", "Vinsobres", "Châtillon-en-Diois", "Lirac"],
    answerIndex: 3,
    explanation: "Liracはローヌ川右岸側に位置するAOCです。"
  },
  {
    id: "france-rhone-023",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中から2024年にCôtes du Rhône Villagesからクリュに昇格した新しいAOCを選択してください。",
    choices: ["Laudun", "Côtes du Vivarais", "Vacqueyras", "Costières de Nîmes"],
    answerIndex: 0,
    explanation: "Laudunは2024年にCôtes du Rhône Villagesからクリュへ昇格しました。"
  },
  {
    id: "france-rhone-024",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方のAOCワインHermitageの赤の品種構成を選択してください。",
    choices: ["シラー85%以上+ヴィオニエ", "シラー85%以上+マルサンヌ、ルーサンヌ", "シラー80%以上+ヴィオニエ", "シラー90%以上+ヴィオニエ"],
    answerIndex: 1,
    explanation: "Hermitage赤はシラー85%以上で、マルサンヌ、ルーサンヌを補助的に使用できます。"
  },
  {
    id: "france-rhone-025",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方北部地区にあるAOCを選択してください。",
    choices: ["Condrieu", "Rasteau", "Duché d'Uzès", "Costières de Nîmes"],
    answerIndex: 0,
    explanation: "Condrieuはローヌ渓谷地方北部地区のAOCです。"
  },
  {
    id: "france-rhone-026",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方ローヌ川右岸のAOCを選択してください。",
    choices: ["Châteauneuf-du-Pape", "Tavel", "Crozes-Hermitage", "Hermitage"],
    answerIndex: 1,
    explanation: "Tavelはローヌ川右岸側に位置するAOCです。"
  },
  {
    id: "france-rhone-027",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方南部地区にあるAOCを選択してください。",
    choices: ["Crémant de Die", "Vinsobres", "Cornas", "Hermitage"],
    answerIndex: 1,
    explanation: "Vinsobresはローヌ渓谷地方南部地区のAOCです。"
  },
  {
    id: "france-rhone-028",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方ローヌ川左岸のAOCを選択してください。",
    choices: ["Cornas", "Château-Grillet", "Tavel", "Crémant de Die"],
    answerIndex: 3,
    explanation: "Crémant de Dieはローヌ川左岸側に位置するAOCです。"
  },
  {
    id: "france-rhone-029",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方南部のAOCの地図です。地図上で16番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/rhone-meridional-map.jpg",
      alt: "ローヌ渓谷地方南部のAOC地図",
      caption: "ローヌ渓谷地方南部"
    },
    answerText: "リラック",
    explanation: "南部地図の16番はリラックです。"
  },
  {
    id: "france-rhone-030",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤・白・ロゼワインが認められているものを選択してください。",
    choices: ["Saint-Péray", "Côte-Rôtie", "Condrieu", "Lirac"],
    answerIndex: 3,
    explanation: "Liracは赤・白・ロゼワインが認められています。"
  },
  {
    id: "france-rhone-031",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方北部のAOCの地図です。地図上でChâteau-Grilletに相当する番号を選択してください。",
    image: {
      src: "assets/rhone-septentrional-map.jpg",
      alt: "ローヌ渓谷地方北部のAOC地図",
      caption: "ローヌ渓谷地方北部"
    },
    choices: ["3番", "7番", "4番", "8番"],
    answerIndex: 0,
    explanation: "北部地図でChâteau-Grilletに相当する番号は3番です。"
  },
  {
    id: "france-rhone-032",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインと白ワインだけが認められているものを選択してください。",
    choices: ["Côtes du Vivarais", "Duché d'Uzès", "Crozes-Hermitage", "Saint-Péray"],
    answerIndex: 2,
    explanation: "Crozes-Hermitageは赤ワインと白ワインが認められています。"
  },
  {
    id: "france-rhone-033",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方のAOCワインCornasの品種構成を選択してください。",
    choices: ["シラー90%以上+マルサンヌ、ルーサンヌ", "シラー100%", "シラー80%以上+ヴィオニエ", "シラー85%以上+ヴィオニエ"],
    answerIndex: 1,
    explanation: "Cornasはシラー100%の赤ワインです。"
  },
  {
    id: "france-rhone-034",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "下記の画像はフランス、ローヌ渓谷地方北部のAOCの地図です。地図上でCondrieuに相当する番号を選択してください。",
    image: {
      src: "assets/rhone-septentrional-map.jpg",
      alt: "ローヌ渓谷地方北部のAOC地図",
      caption: "ローヌ渓谷地方北部"
    },
    choices: ["1番", "2番", "5番", "8番"],
    answerIndex: 1,
    explanation: "北部地図でCondrieuに相当する番号は2番です。"
  },
  {
    id: "france-rhone-035",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方の4つのAOCの中で、スパークリングワインを生産しているものを選択してください。",
    choices: ["Saint-Joseph", "Saint-Péray Mousseux", "Hermitage", "Château-Grillet"],
    answerIndex: 1,
    explanation: "Saint-Péray Mousseuxではスパークリングワインが生産されています。"
  },
  {
    id: "france-rhone-036",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次の中からフランス、ローヌ渓谷地方北部地区にあるAOCを選択してください。",
    choices: ["Vinsobres", "Lirac", "Crozes-Hermitage", "Châteauneuf-du-Pape"],
    answerIndex: 2,
    explanation: "Crozes-Hermitageはローヌ渓谷地方北部地区のAOCです。"
  },
  {
    id: "france-rhone-037",
    category: "フランス/ローヌ渓谷",
    importance: "B",
    question: "次の中からフランス、ローヌ渓谷地方北部地区、ローヌ川左岸で面積最小のAOCを選択してください。",
    choices: ["Château-Grillet", "Cornas", "Tavel", "Hermitage"],
    answerIndex: 3,
    explanation: "北部地区のローヌ川左岸ではHermitageが面積最小のAOCです。"
  },
  {
    id: "france-rhone-038",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から赤ワインだけが認められているものを選択してください。",
    choices: ["Cornas", "Rasteau", "Clairette de Bellegarde", "Crozes-Hermitage"],
    answerIndex: 0,
    explanation: "Cornasは赤ワインのみが認められています。"
  },
  {
    id: "france-rhone-039",
    category: "フランス/ローヌ渓谷",
    importance: "A",
    question: "次のフランス、ローヌ渓谷地方のAOCワインの中から白ワインだけが認められているものを選択してください。",
    choices: ["Duché d'Uzès", "Condrieu", "Tavel", "Luberon"],
    answerIndex: 1,
    explanation: "Condrieuは白ワインのみが認められています。"
  },
  {
    id: "france-provence-001",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "次の中からフランス、プロヴァンス地方のAOCワインBelletの赤ワインの最も主たる品種を選択してください。",
    choices: ["シラー", "カリニャン", "グルナッシュ", "ブラケとフェラ・ネラ"],
    answerIndex: 3,
    explanation: "Belletの赤ワインではブラケとフェラ・ネラが重要な品種です。"
  },
  {
    id: "france-provence-002",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "次の中からフランス、プロヴァンス地方の気候を選択してください。",
    choices: ["半大陸性気候", "海洋性気候", "地中海性気候", "大陸性気候"],
    answerIndex: 2,
    explanation: "プロヴァンス地方は地中海性気候の産地です。"
  },
  {
    id: "france-provence-003",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上で10番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    answerText: "カシス",
    explanation: "地図上の10番はCassisです。"
  },
  {
    id: "france-provence-004",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、プロヴァンス地方のAOCワインの産地を東から西の順序で正しく並べたものを選択してください。",
    choices: [
      "Bandol, Les Baux de Provence, Bellet, Palette",
      "Bandol, Palette, Les Baux de Provence, Bellet",
      "Bellet, Bandol, Palette, Les Baux de Provence",
      "Les Baux de Provence, Bandol, Bellet, Palette"
    ],
    answerIndex: 2,
    explanation: "東側のニース近郊にBelletがあり、西に向かってBandol、Palette、Les Baux de Provenceの順になります。"
  },
  {
    id: "france-provence-005",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、コルシカ島のAOCワインの中からVDNを生産しているものを選択してください。",
    choices: ["Ajaccio", "Vin de Corse Calvi", "Muscat du Cap Corse", "Patrimonio"],
    answerIndex: 2,
    explanation: "Muscat du Cap CorseはVDNを生産するAOCです。"
  },
  {
    id: "france-provence-006",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上で9番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    answerText: "バンドール",
    explanation: "地図上の9番はBandolです。"
  },
  {
    id: "france-provence-007",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、プロヴァンス地方のAOCワインの産地を東から西の順序で正しく並べたものを選択してください。",
    choices: [
      "Cassis, Bandol, Les Baux de Provence, Bellet",
      "Bellet, Bandol, Cassis, Les Baux de Provence",
      "Les Baux de Provence, Bellet, Bandol, Cassis",
      "Les Baux de Provence, Bellet, Cassis, Bandol"
    ],
    answerIndex: 1,
    explanation: "東から西へ、Bellet、Bandol、Cassis、Les Baux de Provenceの順です。"
  },
  {
    id: "france-provence-008",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島のナポレオン生誕地に位置するAOCを選択してください。",
    choices: ["Patrimonio", "Bellet", "Pierrevert", "Ajaccio"],
    answerIndex: 3,
    explanation: "ナポレオンの生誕地として知られるアジャクシオに位置するAOCはAjaccioです。"
  },
  {
    id: "france-provence-009",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、プロヴァンス地方の3大AOCが生産するロゼワインが、世界中のロゼワインに占める割合に最も近いものを選択してください。",
    choices: ["5%", "24%", "2%", "65%"],
    answerIndex: 0,
    explanation: "プロヴァンス地方の3大AOCが生産するロゼワインは、世界のロゼワインの約5%とされます。"
  },
  {
    id: "france-provence-010",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島の2023年のAOCワインのブドウ栽培面積に最も近いものを選択してください。",
    choices: ["5千ヘクタール", "8千ヘクタール", "3千ヘクタール", "1万ヘクタール"],
    answerIndex: 2,
    explanation: "コルシカ島のAOCワインのブドウ栽培面積は約3千ヘクタールです。"
  },
  {
    id: "france-provence-011",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島のAOCワインPatrimonioの生産可能なワインの色を選択してください。",
    choices: ["赤のみ", "赤・白", "赤・ロゼ", "赤・白・ロゼ"],
    answerIndex: 3,
    explanation: "Patrimonioでは赤・白・ロゼの生産が認められています。"
  },
  {
    id: "france-provence-012",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "次の中からフランス、プロヴァンス地方のAOCワインBandolの赤ワインの最も主たる品種を選択してください。",
    choices: ["シラー", "ムールヴェードル", "ブラケとフェラ・ネラ", "カリニャン"],
    answerIndex: 1,
    explanation: "Bandolの赤ワインではムールヴェードルが最も重要な品種です。"
  },
  {
    id: "france-provence-013",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方のAOCワインの中から、ニース近郊に位置するものを選択してください。",
    choices: ["Bellet", "Côtes de Provence Fréjus", "Coteaux d'Aix-en-Provence", "Palette"],
    answerIndex: 0,
    explanation: "Belletはニース近郊に位置するAOCです。"
  },
  {
    id: "france-provence-014",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上でCassisに相当する番号を選択してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    choices: ["11番", "12番", "9番", "10番"],
    answerIndex: 3,
    explanation: "Cassisは地図上の10番です。"
  },
  {
    id: "france-provence-015",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上で8番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    answerText: "レ・ボー・ド・プロヴァンス",
    explanation: "地図上の8番はLes Baux de Provenceです。"
  },
  {
    id: "france-provence-016",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島のAOCワインAjaccioの白ワインの最も主たる品種を選択してください。",
    choices: ["ヴェルメンティーノ", "ニエルッチョ", "ユニ・ブラン", "グルナッシュ・ブラン"],
    answerIndex: 0,
    explanation: "Ajaccioの白ワインではヴェルメンティーノが主たる品種です。"
  },
  {
    id: "france-provence-017",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、プロヴァンス地方の3大AOCが生産するロゼワインが、フランス全体のAOCロゼワインに占める割合に最も近いものを選択してください。",
    choices: ["28%", "42%", "89%", "56%"],
    answerIndex: 1,
    explanation: "プロヴァンス地方の3大AOCのロゼは、フランス全体のAOCロゼワインの約42%を占めます。"
  },
  {
    id: "france-provence-018",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上で12番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    answerText: "ベレ",
    answerTextAliases: ["ヴァン・ド・ベレ", "ベレ、ヴァン・ド・ベレ", "ベレ,ヴァン・ド・ベレ"],
    explanation: "地図上の12番はBellet（Vin de Bellet）です。"
  },
  {
    id: "france-provence-019",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島のAOCワインAjaccioの赤ワインの最も主たる品種を選択してください。",
    choices: ["シャカレッロ", "ブラケ", "ニエルッチョ", "ムールヴェードル"],
    answerIndex: 0,
    explanation: "Ajaccioの赤ワインではシャカレッロが主たる品種です。"
  },
  {
    id: "france-provence-020",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "次の中からフランス、プロヴァンス地方のAOCワインBandolの生産可能なワインの色を選択してください。",
    choices: ["赤のみ", "赤・白", "赤・白・ロゼ", "赤・ロゼ"],
    answerIndex: 2,
    explanation: "Bandolでは赤・白・ロゼの生産が認められています。"
  },
  {
    id: "france-provence-021",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方のAOCワインの中から、同地方で最北に位置するものを選択してください。",
    choices: ["Côtes de Provence Fréjus", "Bellet", "Pierrevert", "Les Baux de Provence"],
    answerIndex: 2,
    explanation: "Pierrevertはプロヴァンス地方のAOCの中で北側に位置します。"
  },
  {
    id: "france-provence-022",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上でPierrevertに相当する番号を選択してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    choices: ["13番", "11番", "9番", "8番"],
    answerIndex: 0,
    explanation: "Pierrevertは地図上の13番です。"
  },
  {
    id: "france-provence-023",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、プロヴァンス地方の2023年の年間ワイン生産量に最も近いものを選択してください。",
    choices: ["420万ヘクトリットル", "120万ヘクトリットル", "190万ヘクトリットル", "86万ヘクトリットル"],
    answerIndex: 2,
    explanation: "プロヴァンス地方の2023年の年間ワイン生産量は約190万ヘクトリットルです。"
  },
  {
    id: "france-provence-024",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方のAOCワインの中から、マルセイユ近郊の海辺に位置するものを選択してください。",
    choices: ["Coteaux Varois en Provence", "Bandol", "Palette", "Cassis"],
    answerIndex: 3,
    explanation: "Cassisはマルセイユ近郊の海辺に位置するAOCです。"
  },
  {
    id: "france-provence-025",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方のAOCワインの中から、エクス・アン・プロヴァンス近郊の小村に位置するものを選択してください。",
    choices: ["Côtes de Provence La Londe", "Palette", "Coteaux Varois en Provence", "Bellet"],
    answerIndex: 1,
    explanation: "Paletteはエクス・アン・プロヴァンス近郊の小村に位置するAOCです。"
  },
  {
    id: "france-provence-026",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中からフランス、コルシカ島のAOCワインPatrimonioの赤ワインの最も主たる品種を選択してください。",
    choices: ["ブラケ", "サンソー", "ニエルッチョ", "カリニャン"],
    answerIndex: 2,
    explanation: "Patrimonioの赤ワインではニエルッチョが主たる品種です。"
  },
  {
    id: "france-provence-027",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "次の中からフランス、プロヴァンス地方のAOCワインBandolの赤ワインの最低樽熟成期間を選択してください。",
    choices: ["12ヶ月", "18ヶ月", "24ヶ月", "6ヶ月"],
    answerIndex: 1,
    explanation: "Bandolの赤ワインは最低18ヶ月の樽熟成が求められます。"
  },
  {
    id: "france-provence-028",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上で11番のAOC名をカタカナで入力してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    answerText: "パレット",
    explanation: "地図上の11番はPaletteです。"
  },
  {
    id: "france-provence-029",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方およびコルシカ島のAOCワインの中から、赤・ロゼワインだけが認められているものを選択してください。",
    choices: ["Côtes de Provence Pierrefeu", "Côtes de Provence La Londe", "Palette", "Coteaux Varois en Provence"],
    answerIndex: 0,
    explanation: "Côtes de Provence Pierrefeuは赤・ロゼワインだけが認められています。"
  },
  {
    id: "france-provence-030",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次の中から2025年に初めてクリュとしてのステータスを獲得して名前を改めたプロヴァンス地方のAOCを選択してください。",
    choices: ["Bandol", "Coteaux d'Aix-en-Provence", "Côtes de Provence Cru Sainte-Victoire", "Cassis"],
    answerIndex: 2,
    explanation: "Côtes de Provence Cru Sainte-Victoireは2025年にクリュとしてのステータスを獲得して名称を改めました。"
  },
  {
    id: "france-provence-031",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方およびコルシカ島のAOCワインの中から、赤・ロゼワインだけが認められているものを選択してください。",
    choices: ["Côtes de Provence Cru Sainte-Victoire", "Vin de Corse Figari", "Les Baux de Provence", "Vin de Corse Sartène"],
    answerIndex: 0,
    explanation: "Côtes de Provence Cru Sainte-Victoireは赤・ロゼワインだけが認められています。"
  },
  {
    id: "france-provence-032",
    category: "フランス/プロヴァンス",
    importance: "B",
    question: "次のフランス、プロヴァンス地方のAOCワインの中から、1936年に同地方で最初に認定されたものを選択してください。",
    choices: ["Les Baux de Provence", "Pierrevert", "Cassis", "Côtes de Provence Cru Sainte-Victoire"],
    answerIndex: 2,
    explanation: "Cassisは1936年にプロヴァンス地方で最初に認定されたAOCです。"
  },
  {
    id: "france-provence-033",
    category: "フランス/プロヴァンス",
    importance: "A",
    question: "下記の画像はフランス、プロヴァンス地方のAOCの地図です。地図上でPaletteに相当する番号を選択してください。",
    image: {
      src: "assets/provence-aoc-map.jpg",
      alt: "プロヴァンス地方のAOC地図"
    },
    choices: ["10番", "13番", "9番", "11番"],
    answerIndex: 3,
    explanation: "Paletteは地図上の11番です。"
  },
  {
    id: "italy-overview-law-001",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「ワインの生産量は多く、赤ワインと白ワインをほぼ同量生産する。スプマンテの中では最も人気があるフランチャコルタの産地である。」",
    choices: ["ロンバルディア", "ヴァッレ・ダオスタ", "プーリア", "カンパーニア"],
    answerIndex: 0,
    explanation: "フランチャコルタはロンバルディア州を代表する高品質スプマンテです。"
  },
  {
    id: "italy-overview-law-002",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで一般的に「北部イタリア」と分類されている州を選んでください。",
    choices: ["モリーゼ", "エミリア・ロマーニャ", "バジリカータ", "トスカーナ"],
    answerIndex: 1,
    explanation: "エミリア・ロマーニャ州は北部イタリアに分類されます。"
  },
  {
    id: "italy-overview-law-003",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上でVenetoに相当する番号を選択してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    choices: ["5番", "16番", "6番", "7番"],
    answerIndex: 2,
    explanation: "地図上でVenetoは6番です。"
  },
  {
    id: "italy-overview-law-004",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、トレンティーノ・アルト・アディジェ州で世界遺産に登録されているものを選択してください。",
    choices: ["神秘的な城カステル・デル・モンテ", "ドロミーティ山塊", "チンクエ・テッレの海に迫る絶壁の段々畑の風景", "ランゲ・ロエロ・モンフェッラートの葡萄畑の景観"],
    answerIndex: 1,
    explanation: "トレンティーノ・アルト・アディジェ州ではドロミーティ山塊が世界遺産に登録されています。"
  },
  {
    id: "italy-overview-law-005",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ヴェネト州の州都を選択してください。",
    choices: ["トリエステ", "ジェノヴァ", "ポテンツァ", "ヴェネツィア"],
    answerIndex: 3,
    explanation: "ヴェネト州の州都はヴェネツィアです。"
  },
  {
    id: "italy-overview-law-006",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次のイタリアのVino Novelloに関する記述の中で正しいものを選んでください。",
    choices: ["収穫年を記載しなくてはいけない", "炭酸ガス浸漬法(MC法)で造られたワインを100%使用", "DOワインのみに認められる", "アルコール度数8%以上"],
    answerIndex: 0,
    explanation: "Vino Novelloは収穫年の表示が必要です。"
  },
  {
    id: "italy-overview-law-007",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中から、イタリアのDOP(DOCG)ワインBrunello di Montalcinoの品種サンジョヴェーゼの、この地方の別名を選んでください。",
    choices: ["プルニョーロ・ジェンティーレ", "ブルネッロ", "スパンナ", "キアヴェンナスカ"],
    answerIndex: 1,
    explanation: "Brunello di Montalcinoではサンジョヴェーゼの地方名としてブルネッロが使われます。"
  },
  {
    id: "italy-overview-law-008",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアのスティルワインに表示される風味表示で残存糖分が12〜45グラム/リットルのものに表示されるものを選んでください。",
    choices: ["Amabile", "Semi Secco", "Dolce", "Abboccato"],
    answerIndex: 0,
    explanation: "スティルワインで残糖12〜45g/Lに相当する表示はAmabileです。"
  },
  {
    id: "italy-overview-law-009",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで栽培面積が第1位の品種を選択してください。",
    choices: ["バルベーラ", "メルロ", "トレッビアーノ・トスカーノ", "サンジョヴェーゼ"],
    answerIndex: 3,
    explanation: "イタリアで栽培面積が最も大きい品種はサンジョヴェーゼです。"
  },
  {
    id: "italy-overview-law-010",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「ワインは軽めのタイプが多く74%が白ワインである。白ワインの代表にエスト!・エスト!!・エスト!!!がある。」",
    choices: ["リグーリア", "モリーゼ", "ラツィオ", "トレンティーノ・アルト・アディジェ"],
    answerIndex: 2,
    explanation: "エスト!・エスト!!・エスト!!!はラツィオ州を代表する白ワインです。"
  },
  {
    id: "italy-overview-law-011",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの首都ローマと概ね同じ緯度に位置する日本の都市を選択してください。",
    choices: ["東京", "釧路", "福岡", "函館"],
    answerIndex: 3,
    explanation: "ローマはおおむね函館と同じ緯度に位置します。"
  },
  {
    id: "italy-overview-law-012",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上でLombardiaに相当する番号を選択してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    choices: ["4番", "19番", "10番", "3番"],
    answerIndex: 0,
    explanation: "地図上でLombardiaは4番です。"
  },
  {
    id: "italy-overview-law-013",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、フリウリ・ヴェネツィア・ジューリア州の州都を選択してください。",
    choices: ["ジェノヴァ", "ペルージャ", "トリエステ", "ローマ"],
    answerIndex: 2,
    explanation: "フリウリ・ヴェネツィア・ジューリア州の州都はトリエステです。"
  },
  {
    id: "italy-overview-law-014",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアでローマ皇帝パウルス3世のワイン担当者だった人でソムリエの元祖とも言える人を選んでください。",
    choices: ["ピエトロ・デ・クレシェンツィ", "サンテ・ランチェリオ", "フランチェスコ・ノムリエ", "アンドレア・バッチ"],
    answerIndex: 1,
    explanation: "サンテ・ランチェリオはローマ皇帝パウルス3世のワイン担当者で、ソムリエの元祖ともいわれます。"
  },
  {
    id: "italy-overview-law-015",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「西を地中海に接し、北と東をアペニン山脈に囲まれている。ピサ、ルッカ、アレッツォなど観光地が多くあり文化財の宝庫である。オリーブオイルの品質の高さでも有名である。」",
    choices: ["トスカーナ", "サルデーニャ", "カラブリア", "ピエモンテ"],
    answerIndex: 0,
    explanation: "説明はトスカーナ州に合致します。"
  },
  {
    id: "italy-overview-law-016",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「フランスとの国境からティレニア海に沿って伸びる細長い州で、州都はジェノヴァである。」",
    choices: ["リグーリア", "アブルッツォ", "カラブリア", "ピエモンテ"],
    answerIndex: 0,
    explanation: "州都ジェノヴァを持つ細長い沿岸州はリグーリア州です。"
  },
  {
    id: "italy-overview-law-017",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアの白ブドウの中で栽培面積が第3位の品種を選択してください。",
    choices: ["トレッビアーノ・トスカーノ", "シャルドネ", "ピノ・グリージョ", "グレーラ"],
    answerIndex: 0,
    explanation: "イタリアの白ブドウで栽培面積第3位はトレッビアーノ・トスカーノです。"
  },
  {
    id: "italy-overview-law-018",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、エミリア・ロマーニャ州とロンバルディア州の一部で栽培されている主要な黒ブドウ品種を選んでください。",
    choices: ["ノジオーラ", "リボッラ・ジャッラ", "ドルチェット", "ランブルスコ"],
    answerIndex: 3,
    explanation: "ランブルスコはエミリア・ロマーニャ州とロンバルディア州の一部で栽培される主要な黒ブドウ品種です。"
  },
  {
    id: "italy-overview-law-019",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、トスカーナ州、キアンティ・クラシコ地区およびモンタルチーノの土壌を選択してください。",
    choices: ["ガッルーラと呼ばれる石灰質土壌", "ガレストロと呼ばれる泥灰土土壌", "ガレストロと呼ばれる火山性土壌", "ガッルーラと呼ばれる花崗岩土壌"],
    answerIndex: 1,
    explanation: "キアンティ・クラシコ地区やモンタルチーノでは、ガレストロと呼ばれる泥灰土土壌が重要です。"
  },
  {
    id: "italy-overview-law-020",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで一般的に「中部イタリア」と分類されている州を選んでください。",
    choices: ["ピエモンテ", "プーリア", "ウンブリア", "サルデーニャ"],
    answerIndex: 2,
    explanation: "ウンブリア州は中部イタリアに分類されます。"
  },
  {
    id: "italy-overview-law-021",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、トスカーナ州に接している州を選択してください。",
    choices: ["トレンティーノ・アルト・アディジェ州", "カンパーニア州", "エミリア・ロマーニャ州", "ロンバルディア州"],
    answerIndex: 2,
    explanation: "トスカーナ州は北側でエミリア・ロマーニャ州に接しています。"
  },
  {
    id: "italy-overview-law-022",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次のイタリアのVino Novelloに関する記述の中で正しいものを選んでください。",
    choices: ["醸造期間は醸造開始後1ヶ月以内", "アルコール度数8%以上", "DOワインとIGTワインに認められる", "収穫年の記載は任意"],
    answerIndex: 2,
    explanation: "Vino NovelloはDOワインとIGTワインに認められます。"
  },
  {
    id: "italy-overview-law-023",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアの黒ブドウの中で栽培面積が第2位の品種を選択してください。",
    choices: ["モンテプルチャーノ", "ネッビオーロ", "サンジョヴェーゼ", "メルロ"],
    answerIndex: 0,
    explanation: "イタリアの黒ブドウで栽培面積第2位はモンテプルチャーノです。"
  },
  {
    id: "italy-overview-law-024",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「海に囲まれて魚介類が豊富な土地である。ワインの生産量はとても多くイタリア全州でトップ4に入る。白ワインが64%の割合を占め、アルカモやエトナといった軽めのものが有名である。」",
    choices: ["プーリア", "トスカーナ", "トレンティーノ・アルト・アディジェ", "シチリア"],
    answerIndex: 3,
    explanation: "アルカモやエトナで知られる島の州はシチリア州です。"
  },
  {
    id: "italy-overview-law-025",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中から地中海で一番大きな島を選択してください。",
    choices: ["サルデーニャ島", "シチリア島", "キプロス島", "コルシカ島"],
    answerIndex: 1,
    explanation: "地中海最大の島はシチリア島です。"
  },
  {
    id: "italy-overview-law-026",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ピエモンテ州南部で栽培されている白ブドウで、一般に若飲みのシンプルなワインを生む品種を選んでください。",
    choices: ["コルテーゼ", "ティンティリア", "リボッラ・ジャッラ", "ノジオーラ"],
    answerIndex: 0,
    explanation: "コルテーゼはピエモンテ州南部で栽培され、若飲みの白ワインを生む品種です。"
  },
  {
    id: "italy-overview-law-027",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ピエモンテ州で世界遺産に登録されているものを選択してください。",
    choices: ["百の塔の町サン・ジミニャーノ", "チンクエ・テッレの海に迫る絶壁の段々畑の風景", "ランゲ・ロエロ・モンフェッラートの葡萄畑の景観", "ドロミーティ山塊"],
    answerIndex: 2,
    explanation: "ピエモンテ州ではランゲ・ロエロ・モンフェッラートの葡萄畑の景観が世界遺産に登録されています。"
  },
  {
    id: "italy-overview-law-028",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上でBasilicataに相当する番号を選択してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    choices: ["16番", "18番", "14番", "17番"],
    answerIndex: 3,
    explanation: "地図上でBasilicataは17番です。"
  },
  {
    id: "italy-overview-law-029",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「西をアペニン山脈、東をアドリア海に囲まれた南北に細長い州である。アドリア海の豊富な魚介類を使ったアンコーナ風の魚のスープが有名である。」",
    choices: ["バジリカータ", "マルケ", "プーリア", "ヴェネト"],
    answerIndex: 1,
    explanation: "アンコーナを州都とし、アドリア海沿いに位置するのはマルケ州です。"
  },
  {
    id: "italy-overview-law-030",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「生産量は全州の中で最も少ないが個性のあるワインを造っている。山麓地帯らしく赤ワインが61%を占めている。」",
    choices: ["ヴァッレ・ダオスタ", "カンパーニア", "カラブリア", "マルケ"],
    answerIndex: 0,
    explanation: "イタリアでワイン生産量が最も少ない州はヴァッレ・ダオスタ州です。"
  },
  {
    id: "italy-overview-law-031",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「ティレニア海に浮かぶ大きな島で、イタリアで3番目に大きな州である。独自の文化、習慣が色濃く残り、今でも興味深い土着品種が数多く残っている。」",
    choices: ["トスカーナ", "ピエモンテ", "サルデーニャ", "ヴェネト"],
    answerIndex: 2,
    explanation: "ティレニア海に浮かぶ大きな島で独自文化を持つのはサルデーニャ州です。"
  },
  {
    id: "italy-overview-law-032",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの北部に東西に延びる山脈の名前を選択してください。",
    choices: ["ピレネー山脈", "ヴォージュ山脈", "アペニン山脈", "アルプス山脈"],
    answerIndex: 3,
    explanation: "イタリア北部にはアルプス山脈が東西に延びています。"
  },
  {
    id: "italy-overview-law-033",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、フリウリ・ヴェネツィア・ジューリア州東部とスロヴェニアの白ブドウで、軽やかでフレッシュな白ワインを生む品種を選んでください。",
    choices: ["ドルチェット", "ティンティリア", "リボッラ・ジャッラ", "サグランティーノ"],
    answerIndex: 2,
    explanation: "リボッラ・ジャッラはフリウリ東部やスロヴェニアで見られる白ブドウ品種です。"
  },
  {
    id: "italy-overview-law-034",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで栽培面積が第3位の品種を選択してください。",
    choices: ["トレッビアーノ・トスカーノ", "ピノ・グリージョ", "シャルドネ", "モンテプルチャーノ"],
    answerIndex: 1,
    explanation: "イタリアで栽培面積第3位の品種はピノ・グリージョです。"
  },
  {
    id: "italy-overview-law-035",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの弱発泡性ワインの総称を選択してください。",
    choices: ["Vino Frizzante", "Bassano del Grappa", "Limoncello", "Vermut di Torino"],
    answerIndex: 0,
    explanation: "イタリアの弱発泡性ワインはVino Frizzanteと呼ばれます。"
  },
  {
    id: "italy-overview-law-036",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、エミリア・ロマーニャ州の州都を選択してください。",
    choices: ["ヴェネツィア", "ペルージャ", "ボローニャ", "トリエステ"],
    answerIndex: 2,
    explanation: "エミリア・ロマーニャ州の州都はボローニャです。"
  },
  {
    id: "italy-overview-law-037",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上でUmbriaに相当する番号を選択してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    choices: ["10番", "5番", "14番", "12番"],
    answerIndex: 0,
    explanation: "地図上でUmbriaは10番です。"
  },
  {
    id: "italy-overview-law-038",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアでアレッツォ、フィレンツェ、プラート、ピストイア、ピサ、シエナの6県の広い地域で年間約80万ヘクトリットルを生産するワインを選択してください。",
    choices: ["Trentino", "Soave", "Chianti", "Asti Spumante"],
    answerIndex: 2,
    explanation: "Chiantiはトスカーナ州の広い地域で生産される代表的なワインです。"
  },
  {
    id: "italy-overview-law-039",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、マルケ州の州都を選択してください。",
    choices: ["アンコーナ", "ボローニャ", "ペルージャ", "ポテンツァ"],
    answerIndex: 0,
    explanation: "マルケ州の州都はアンコーナです。"
  },
  {
    id: "italy-overview-law-040",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上で8番の州名をカタカナで入力してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    answerText: "エミリア・ロマーニャ",
    answerTextAliases: ["エミリアロマーニャ"],
    explanation: "地図上の8番はEmilia-Romagna、カタカナではエミリア・ロマーニャです。"
  },
  {
    id: "italy-overview-law-041",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで一般的に「北部イタリア」と分類されている州を選んでください。",
    choices: ["アブルッツォ", "ロンバルディア", "サルデーニャ", "バジリカータ"],
    answerIndex: 1,
    explanation: "ロンバルディア州は北部イタリアに分類されます。"
  },
  {
    id: "italy-overview-law-042",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中から、イタリアのDOP(DOCG)ワインValtellina Superioreの品種ネッビオーロの、この地方の別名を選んでください。",
    choices: ["キアヴェンナスカ", "スパンナ", "プルニョーロ・ジェンティーレ", "モレッリーノ"],
    answerIndex: 0,
    explanation: "Valtellina Superioreではネッビオーロはキアヴェンナスカと呼ばれます。"
  },
  {
    id: "italy-overview-law-043",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「イタリア半島をブーツに例えると土踏まずの部分にあたる。西側はティレニア海、南側はイオニア海にわずかに開けている。平地は8%にすぎずワインの生産量は少ない。」",
    choices: ["フリウリ・ヴェネツィア・ジューリア", "ラツィオ", "バジリカータ", "プーリア"],
    answerIndex: 2,
    explanation: "説明はバジリカータ州に合致します。"
  },
  {
    id: "italy-overview-law-044",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「白ワインの生産量が38%で赤ワインの方が多い。代表的なワインにモンテプルチャーノ種を使った赤ワインがあり、特にテラモ県、ペスカーラ県で素晴らしいワインが生産されている。」",
    choices: ["アブルッツォ", "マルケ", "トスカーナ", "リグーリア"],
    answerIndex: 0,
    explanation: "モンテプルチャーノ種を使った赤ワインで知られるのはアブルッツォ州です。"
  },
  {
    id: "italy-overview-law-045",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで栽培面積が第4位の品種を選択してください。",
    choices: ["サンジョヴェーゼ", "シャルドネ", "バルベーラ", "モンテプルチャーノ"],
    answerIndex: 3,
    explanation: "イタリアで栽培面積第4位の品種はモンテプルチャーノです。"
  },
  {
    id: "italy-overview-law-046",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "イタリアのワイン産地は石灰質土壌のところが多いが、一部火山性土壌の産地もある。次の中から火山性土壌の産地を選択してください。",
    choices: ["エトナ", "フランチャコルタ", "バルドリーノ", "ガッルーラ"],
    answerIndex: 0,
    explanation: "エトナは火山性土壌の産地として知られます。"
  },
  {
    id: "italy-overview-law-047",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアに本格的なブドウ栽培を伝えたとされる民族を選んでください。",
    choices: ["ギリシャ人", "ガリア人", "エジプト人", "フェニキア人"],
    answerIndex: 0,
    explanation: "イタリアに本格的なブドウ栽培を伝えたとされるのはギリシャ人です。"
  },
  {
    id: "italy-overview-law-048",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアで最初の原産地呼称法が公布された年を選んでください。",
    choices: ["1935年", "1963年", "1716年", "1945年"],
    answerIndex: 1,
    explanation: "イタリアで最初の原産地呼称法が公布されたのは1963年です。"
  },
  {
    id: "italy-overview-law-049",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ウンブリア州、ペルージャ県モンテファルコ村の周辺だけで栽培されている個性的な黒ブドウ品種を選んでください。",
    choices: ["サグランティーノ", "ドルチェット", "ランブルスコ", "レフォスコ・ダル・ペドゥンコロ・ロッソ"],
    answerIndex: 0,
    explanation: "サグランティーノはウンブリア州モンテファルコ周辺で知られる黒ブドウ品種です。"
  },
  {
    id: "italy-overview-law-050",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアの黒ブドウの中で栽培面積が第3位の品種を選択してください。",
    choices: ["バルベーラ", "モンテプルチャーノ", "サンジョヴェーゼ", "メルロ"],
    answerIndex: 0,
    explanation: "イタリアの黒ブドウで栽培面積第3位はバルベーラです。"
  },
  {
    id: "italy-overview-law-051",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次のイタリアのVino Novelloに関する記述の中で正しいものを選んでください。",
    choices: ["アルコール度数8%以上", "収穫年の記載は任意", "醸造期間は醸造開始後10日以内", "収穫翌年の3月31日までに瓶詰め"],
    answerIndex: 2,
    explanation: "Vino Novelloでは醸造期間は醸造開始後10日以内とされています。"
  },
  {
    id: "italy-overview-law-052",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「湖、川が多く水に恵まれていて、州土の70%を占める緑の丘陵地帯は『緑の心臓』と呼ばれている。」",
    choices: ["ラツィオ", "トレンティーノ・アルト・アディジェ", "アブルッツォ", "ウンブリア"],
    answerIndex: 3,
    explanation: "『緑の心臓』と呼ばれるのはウンブリア州です。"
  },
  {
    id: "italy-overview-law-053",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、リグーリア州の州都を選択してください。",
    choices: ["ジェノヴァ", "ペルージャ", "アンコーナ", "ポテンツァ"],
    answerIndex: 0,
    explanation: "リグーリア州の州都はジェノヴァです。"
  },
  {
    id: "italy-overview-law-054",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで一般的に「南部イタリア」と分類されている州を選んでください。",
    choices: ["フリウリ・ヴェネツィア・ジューリア", "モリーゼ", "シチリア", "エミリア・ロマーニャ"],
    answerIndex: 2,
    explanation: "シチリア州は南部イタリアに分類されます。"
  },
  {
    id: "italy-overview-law-055",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの2024年のワイン生産量順位を選択してください。",
    choices: ["世界第4位", "世界第2位", "世界第3位", "世界第1位"],
    answerIndex: 3,
    explanation: "2024年のイタリアのワイン生産量順位は世界第1位です。"
  },
  {
    id: "italy-overview-law-056",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。「イタリア半島をブーツに例えるとつま先の部分にあたり、ティレニア海沿岸地帯で最南端の州。ワインの生産量は少ないが、オリーブオイル生産量はイタリア第2位である。」",
    choices: ["プーリア", "ヴェネト", "カラブリア", "リグーリア"],
    answerIndex: 2,
    explanation: "ブーツのつま先にあたる州はカラブリア州です。"
  },
  {
    id: "italy-overview-law-057",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアのスティルワインに表示される風味表示で残存糖分が4〜12グラム/リットルのものに表示されるものを選んでください。",
    choices: ["Abboccato", "Amabile", "Asciutto", "Secco"],
    answerIndex: 0,
    explanation: "残糖4〜12g/Lのスティルワインの風味表示はAbboccatoです。"
  },
  {
    id: "italy-overview-law-058",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで近年のワイン生産量が第2位である州を選択してください。",
    choices: ["プーリア", "リグーリア", "フリウリ・ヴェネツィア・ジューリア", "ヴァッレ・ダオスタ"],
    answerIndex: 0,
    explanation: "近年のイタリアのワイン生産量で第2位に挙げられる州はプーリアです。"
  },
  {
    id: "italy-overview-law-059",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上で18番の州名をカタカナで入力してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    answerText: "カラブリア",
    answerTextAliases: ["カラブリア州"],
    explanation: "地図上の18番はカラブリアです。"
  },
  {
    id: "italy-overview-law-060",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの東側に面した海の名前を選択してください。",
    choices: ["ティレニア海", "アドリア海", "ミルトア海", "エーゲ海"],
    answerIndex: 1,
    explanation: "イタリア半島の東側はアドリア海に面しています。"
  },
  {
    id: "italy-overview-law-061",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中から古代ギリシャ人が呼んだイタリア半島の名前を選んでください。",
    choices: ["エノトリア・テルス", "エノロゴ", "レックス・マルキアーナ", "ピトイ"],
    answerIndex: 0,
    explanation: "古代ギリシャ人はイタリア半島をエノトリア・テルスと呼びました。"
  },
  {
    id: "italy-overview-law-062",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「古代ローマ帝国建設の地であり、首都ローマは政治と観光の中心地である。」",
    choices: ["ピエモンテ", "ラツィオ", "ロンバルディア", "トスカーナ"],
    answerIndex: 1,
    explanation: "首都ローマを擁し、古代ローマ帝国建設の地にあたる州はラツィオです。"
  },
  {
    id: "italy-overview-law-063",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアのスティルワインに表示される風味表示で残存糖分が0〜4グラム/リットルのものに表示されるものを選んでください。",
    choices: ["Semi Secco", "Amabile", "Asciutto", "Abboccato"],
    answerIndex: 2,
    explanation: "残糖0〜4g/Lのスティルワインの風味表示はAsciuttoです。"
  },
  {
    id: "italy-overview-law-064",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで一般的に「中部イタリア」と分類されている州を選んでください。",
    choices: ["モリーゼ", "ヴァッレ・ダオスタ", "エミリア・ロマーニャ", "リグーリア"],
    answerIndex: 0,
    explanation: "モリーゼは一般的に中部イタリアに分類されます。"
  },
  {
    id: "italy-overview-law-065",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、モリーゼ州だけで栽培されている黒ブドウ品種で、一時期見捨てられていたが品質は高く再評価されこの州を代表するようになった品種を選んでください。",
    choices: ["ガリオッポ", "レフォスコ・ダル・ペドゥンコロ・ロッソ", "ティンティリア", "ノジオーラ"],
    answerIndex: 2,
    explanation: "モリーゼ州を代表する黒ブドウ品種はティンティリアです。"
  },
  {
    id: "italy-overview-law-066",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「平地はほとんど無く、生産量は全州の中で2番目に少ない。白ワインが69%を占め、有名なワインとしてチンクエ・テッレがある。」",
    choices: ["リグーリア", "トスカーナ", "エミリア・ロマーニャ", "モリーゼ"],
    answerIndex: 0,
    explanation: "チンクエ・テッレで知られる細長い沿岸の州はリグーリアです。"
  },
  {
    id: "italy-overview-law-067",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、トスカーナ州に接している州を選択してください。",
    choices: ["リグーリア州", "トレンティーノ・アルト・アディジェ州", "フリウリ・ヴェネツィア・ジューリア州", "ロンバルディア州"],
    answerIndex: 0,
    explanation: "トスカーナ州は北西側でリグーリア州に接しています。"
  },
  {
    id: "italy-overview-law-068",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「生産量の85%が白ワインで、白ワインの産地として知られている。有名なワインにコッリオがあり、リボッラ・ジャッラという興味深い品種も使用されている。」",
    choices: ["カンパーニア", "ラツィオ", "フリウリ・ヴェネツィア・ジューリア", "アブルッツォ"],
    answerIndex: 2,
    explanation: "コッリオやリボッラ・ジャッラで知られる白ワイン産地はフリウリ・ヴェネツィア・ジューリアです。"
  },
  {
    id: "italy-overview-law-069",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアのブドウ品種を選んでください。「シチリア州エトナの代表的な黒ブドウ品種で、色が薄めで酸とタンニンが強い。」",
    choices: ["カッリカンテ", "カタラット", "ネレッロ・マスカレーゼ", "ネーロ・ダヴォラ"],
    answerIndex: 2,
    explanation: "エトナを代表する黒ブドウ品種はネレッロ・マスカレーゼです。"
  },
  {
    id: "italy-overview-law-070",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「北をオーストリア、東をスロヴェニア、南をアドリア海に接している。州都はトリエステである。」",
    choices: ["アブルッツォ", "シチリア", "フリウリ・ヴェネツィア・ジューリア", "バジリカータ"],
    answerIndex: 2,
    explanation: "州都トリエステを持ち、オーストリアとスロヴェニアに接する州はフリウリ・ヴェネツィア・ジューリアです。"
  },
  {
    id: "italy-overview-law-071",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「白ワインはヴェルディッキオ・ディ・カステッリ・ディ・イエージが有名である。赤ワインはモンテプルチャーノ種から力強いワインが生まれている。」",
    choices: ["ロンバルディア", "リグーリア", "マルケ", "ラツィオ"],
    answerIndex: 2,
    explanation: "ヴェルディッキオ・ディ・カステッリ・ディ・イエージで知られる州はマルケです。"
  },
  {
    id: "italy-overview-law-072",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上でSiciliaに相当する番号を選択してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    choices: ["19番", "3番", "16番", "6番"],
    answerIndex: 0,
    explanation: "シチリアは地図上の19番です。"
  },
  {
    id: "italy-overview-law-073",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアのサルデーニャ島のすぐ北に位置する島の名前を選択してください。",
    choices: ["コルシカ島", "キプロス島", "サントリーニ島", "シチリア島"],
    answerIndex: 0,
    explanation: "サルデーニャ島のすぐ北に位置する島はコルシカ島です。"
  },
  {
    id: "italy-overview-law-074",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアで近年のワイン生産量が第1位である州を選択してください。",
    choices: ["フリウリ・ヴェネツィア・ジューリア", "ヴェネト", "カラブリア", "トスカーナ"],
    answerIndex: 1,
    explanation: "近年のイタリアのワイン生産量で第1位に挙げられる州はヴェネトです。"
  },
  {
    id: "italy-overview-law-075",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア半島最南端に位置する州を選択してください。",
    choices: ["バジリカータ州", "シチリア州", "カラブリア州", "プーリア州"],
    answerIndex: 2,
    explanation: "イタリア半島最南端に位置する州はカラブリア州です。"
  },
  {
    id: "italy-overview-law-076",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「平地は9%に過ぎずワインの生産量は少ない。代表的なDOPワインにチロがあり、白はグレーコ・ビアンコ種、赤とロゼはガリオッポ種主体である。」",
    choices: ["ラツィオ", "トレンティーノ・アルト・アディジェ", "カラブリア", "エミリア・ロマーニャ"],
    answerIndex: 2,
    explanation: "チロで知られ、ガリオッポ主体の赤・ロゼを生む州はカラブリアです。"
  },
  {
    id: "italy-overview-law-077",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアの州の数を選択してください。",
    choices: ["13", "24", "18", "20"],
    answerIndex: 3,
    explanation: "イタリアの州は20州です。"
  },
  {
    id: "italy-overview-law-078",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の中からイタリアの白ブドウの中で栽培面積が第2位の品種を選択してください。",
    choices: ["シャルドネ", "グレーラ", "ピノ・グリージョ", "トレッビアーノ・トスカーノ"],
    answerIndex: 2,
    explanation: "イタリアの白ブドウで栽培面積第2位に挙げられるのはピノ・グリージョです。"
  },
  {
    id: "italy-overview-law-079",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "下記の画像はイタリア20州の地図です。地図上で10番の州名をカタカナで入力してください。",
    image: {
      src: "assets/italy-regions-map.jpg",
      alt: "イタリア20州の地図",
      caption: "イタリア20州"
    },
    answerText: "ウンブリア",
    answerTextAliases: ["ウンブリア州"],
    explanation: "地図上の10番はウンブリアです。"
  },
  {
    id: "italy-overview-law-080",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアで一番大きな州を選択してください。",
    choices: ["ピエモンテ州", "サルデーニャ州", "シチリア州", "ロンバルディア州"],
    answerIndex: 2,
    explanation: "イタリアで一番大きな州はシチリア州です。"
  },
  {
    id: "italy-overview-law-081",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリアでトスカーナ大公国のコジモ3世がChiantiなどの生産地の線引きを行った年を選んでください。",
    choices: ["1857年", "1716年", "1584年", "1638年"],
    answerIndex: 1,
    explanation: "コジモ3世がChiantiなどの生産地を線引きしたのは1716年です。"
  },
  {
    id: "italy-overview-law-082",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ティレニア海沿岸の州を北から南の順序で正しく並べたものを選択してください。",
    choices: [
      "リグーリア, トスカーナ, カンパーニア, カラブリア",
      "リグーリア, カラブリア, ラツィオ, トスカーナ",
      "カラブリア, トスカーナ, カンパーニア, ラツィオ",
      "リグーリア, トスカーナ, カラブリア, カンパーニア"
    ],
    answerIndex: 0,
    explanation: "ティレニア海沿岸を北から南へ見ると、リグーリア、トスカーナ、カンパーニア、カラブリアの順です。"
  },
  {
    id: "italy-overview-law-083",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からヴェネト州でブドウの搾り粕から生産されている蒸留酒を選択してください。",
    choices: ["Vino Liquoroso", "Limoncello", "Bassano del Grappa", "Vino Novello"],
    answerIndex: 2,
    explanation: "ヴェネト州ではブドウの搾り粕から生産される蒸留酒としてBassano del Grappaが知られます。"
  },
  {
    id: "italy-overview-law-084",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中からイタリア、ピエモンテ州に接している州を選択してください。",
    choices: ["ロンバルディア州", "フリウリ・ヴェネツィア・ジューリア州", "ラツィオ州", "マルケ州"],
    answerIndex: 0,
    explanation: "ピエモンテ州はロンバルディア州に接しています。"
  },
  {
    id: "italy-overview-law-085",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中から、イタリアのDOP(DOCG)ワインGattinaraの品種ネッビオーロの、この地方の別名を選んでください。",
    choices: ["モレッリーノ", "ブルネッロ", "キアヴェンナスカ", "スパンナ"],
    answerIndex: 3,
    explanation: "Gattinaraで用いられるネッビオーロの地方名はスパンナです。"
  },
  {
    id: "italy-overview-law-086",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の中から紀元前9世紀ころ中部イタリアを広い範囲にわたって支配していた民族を選んでください。",
    choices: ["ギリシャ人", "エトルリア人", "ガリア人", "フェニキア人"],
    answerIndex: 1,
    explanation: "紀元前9世紀ころ中部イタリアを広く支配していたのはエトルリア人です。"
  },
  {
    id: "italy-overview-law-087",
    category: "イタリア/概論、歴史、品種、ワイン法",
    importance: "A",
    question: "次の説明に最も良く合致するイタリアの州を選んでください。\n「北イタリアのほぼ中央に位置し東西に長く横たわっている。州都ボローニャを境にして2つの地方に分けられる。」",
    choices: ["モリーゼ", "トレンティーノ・アルト・アディジェ", "エミリア・ロマーニャ", "フリウリ・ヴェネツィア・ジューリア"],
    answerIndex: 2,
    explanation: "州都ボローニャを境にエミリアとロマーニャに分かれる州はエミリア・ロマーニャです。"
  },
  ...[
      { id: "001", q: "次の中からイタリア、ピエモンテ州で生産されているフレーヴァードワインを選択してください。", c: ["Nizza", "Erbaluce di Caluso", "Ruchè di Castagnole Monferrato", "Barolo Chinato"], a: 3, e: "Barolo Chinatoはピエモンテ州で生産されるフレーヴァードワインです。" },
      { id: "002", q: "次のイタリアのDOP(DOCG)ワインの中から赤ワインのみが認められているものを選んでください。", c: ["Barolo", "Conegliano Valdobbiadene-Prosecco", "Soave Superiore", "Asti"], a: 0, e: "Baroloは赤ワインのみが認められるDOCGです。" },
      { id: "003", q: "次の中から主要品種がマルヴァジーア・ビアンカ・ディ・カンディアであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Torgiano Rosso Riserva", "Morellino di Scansano", "Montello Rosso", "Frascati Superiore"], a: 3, e: "Frascati Superioreはマルヴァジーア・ビアンカ・ディ・カンディアを主要品種とするDOCGです。" },
      { id: "004", q: "次の中からイタリアのDOP(DOCG)ワインConegliano Valdobbiadene-Proseccoが生産されている州を選んでください。", c: ["ヴェネト", "トスカーナ", "カラブリア", "ピエモンテ"], a: 0, e: "Conegliano Valdobbiadene-Proseccoはヴェネト州のDOCGです。" },
      { id: "005", q: "次の中からイタリアのDOP(DOCG)ワインAstiの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["モスカート・ビアンコ", "チェサネーゼ・ディ・アッフィレ,チェサネーゼ・コムーネ", "キアヴェンナスカ", "ドルチェット"], a: 0, e: "Astiの主要品種はモスカート・ビアンコです。" },
      { id: "006", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Colli Bolognesi Pignoletto", "Recioto di Gambellara", "Torgiano Rosso Riserva", "Lison"], a: 1, e: "Recioto di Gambellaraではスプマンテが認められています。" },
      { id: "007", q: "次の中からイタリアで、ピーマンとトマトで煮込んだ鶏肉料理を選択してください。", c: ["Peperone Ripieno", "Pastissada de Caval", "Ossobuco", "Pollo alla Romana"], a: 3, e: "Pollo alla Romanaはピーマンとトマトで煮込むローマ風の鶏肉料理です。" },
      { id: "008", q: "次の中からイタリアのDOP(DOCG)ワインCarmignanoの主要品種に含まれているものを選んでください。", c: ["マンゾーニ・ビアンコ", "マルヴァジーア・デル・ラツィオ", "カベルネ・ソーヴィニョン", "ベッローネ"], a: 2, e: "Carmignanoの主要品種にはカベルネ・ソーヴィニョンが含まれます。" },
      { id: "009", q: "次のイタリアのDOP(DOCG)ワインの中から赤ワインのみが認められているものを選んでください。", c: ["Conegliano Valdobbiadene-Prosecco", "Ramandolo", "Ruchè di Castagnole Monferrato", "Offida"], a: 2, e: "Ruchè di Castagnole Monferratoは赤ワインのみが認められるDOCGです。" },
      { id: "010", q: "次の中からイタリア、ロンバルディア州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Colli Orientali del Friuli Picolit", "Aglianico del Vulture Superiore", "Colli Euganei Fior d'Arancio", "Franciacorta", "Recioto della Valpolicella", "Rosazzo", "Aglianico del Taburno", "Gavi"], aa: [3], max: 2, e: "Franciacortaはロンバルディア州のDOCGです。" },
      { id: "011", q: "次の中からイタリア、プーリア州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Terre Tollesi", "Vermentino di Gallura", "Montello Rosso", "Recioto della Valpolicella", "Vernaccia di Serrapetrona", "Montecucco Sangiovese", "Castel del Monte Rosso Riserva", "Primitivo di Manduria Dolce Naturale"], aa: [6, 7], max: 2, e: "Castel del Monte Rosso RiservaとPrimitivo di Manduria Dolce Naturaleはプーリア州のDOCGです。" },
      { id: "012", q: "次の中からイタリアで、ピエモンテ名産のピーマンにツナ、ケッパーなどを詰めた料理を選択してください。", c: ["Carne Cruda Battuta", "Polpo alla Luciana", "Pastissada de Caval", "Peperone Ripieno"], a: 3, e: "Peperone Ripienoはピーマンにツナやケッパーなどを詰めた料理です。" },
      { id: "013", q: "次の中からイタリア、ピエモンテ州で生産されているDOP(DOC)ワインを選んでください。", c: ["Marsala", "Orvieto", "Nebbiolo d'Alba", "Rossese di Dolceacqua"], a: 2, e: "Nebbiolo d'Albaはピエモンテ州のDOP(DOC)ワインです。" },
      { id: "014", q: "次の中からイタリアのDOP(DOCG)ワインLisonの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["ネーロ・ダヴォラ", "アルバーナ", "タイ", "ブラケット"], a: 2, e: "Lisonの主要品種はタイです。" },
      { id: "015", q: "次の中から主要品種がバルベーラであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Terre Alfieri", "Ghemme", "Colli di Conegliano", "Barbera d'Asti"], a: 3, e: "Barbera d'Astiはバルベーラを主要品種とするDOCGです。" },
      { id: "016", q: "次の中から主要品種がガルガネガであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Chianti Classico", "Castelli di Jesi Verdicchio Riserva", "Recioto di Soave", "Alta Langa"], a: 2, e: "Recioto di Soaveはガルガネガを主要品種とするDOCGです。" },
      { id: "017", q: "次の中からイタリアのDOP(DOCG)ワインCannellino di Frascatiが生産されている州を選んでください。", c: ["ラツィオ", "トスカーナ", "ヴェネト", "プーリア"], a: 0, e: "Cannellino di Frascatiはラツィオ州のDOCGです。" },
      { id: "018", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Valtellina Superiore", "Suvereto", "Carmignano", "Vermentino di Gallura"], a: 3, e: "Vermentino di Galluraではスプマンテが認められています。" },
      { id: "019", q: "次の中からイタリアのDOP(DOCG)ワインAsoloの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["フリウラーノ", "グレーラ", "モスカート・ディ・スカンツォ", "コルテーゼ"], a: 1, e: "Asoloの主要品種はグレーラです。" },
      { id: "020", q: "次のイタリアのDOP(DOCG)ワインの中から1981年に昇格したものを選んでください。", c: ["Vermentino di Gallura", "Soave Superiore", "Barolo", "Piave Malanotte"], a: 2, e: "Baroloは1981年にDOCGへ昇格しました。" },
      { id: "021", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Asolo", "Barbera del Monferrato Superiore", "Lison", "Vino Nobile di Montepulciano"], a: 0, e: "Asoloではスプマンテが認められています。" },
      { id: "022", q: "次の中から主要品種がドルチェットであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Vernaccia di Serrapetrona", "Brunello di Montalcino", "Recioto di Gambellara", "Dolcetto di Ovada Superiore"], a: 3, e: "Dolcetto di Ovada Superioreはドルチェットを主要品種とするDOCGです。" },
      { id: "023", q: "次のイタリアのDOP(DOCG)ワインの中から1981年に昇格したものを選んでください。", c: ["Colline Teramane Montepulciano d'Abruzzo", "Fiano di Avellino", "Ruchè di Castagnole Monferrato", "Barbaresco"], a: 3, e: "Barbarescoは1981年にDOCGへ昇格しました。" },
      { id: "024", q: "次の中からイタリア、トスカーナ州のDOP(DOCG)ワインの産地を北から南の順序で正しく並べたものを選択してください。", c: ["Vino Nobile di Montepulciano, Morellino di Scansano, Carmignano, Vernaccia di San Gimignano", "Carmignano, Vino Nobile di Montepulciano, Vernaccia di San Gimignano, Morellino di Scansano", "Carmignano, Vernaccia di San Gimignano, Morellino di Scansano, Vino Nobile di Montepulciano", "Carmignano, Vernaccia di San Gimignano, Vino Nobile di Montepulciano, Morellino di Scansano"], a: 3, e: "北から南へ、Carmignano、Vernaccia di San Gimignano、Vino Nobile di Montepulciano、Morellino di Scansanoの順です。" },
      { id: "025", q: "次のイタリアのDOP(DOCG)ワインの中から白ワインのみが認められているものを選んでください。", c: ["Bagnoli Friularo", "Morellino di Scansano", "Barbaresco", "Fiano di Avellino"], a: 3, e: "Fiano di Avellinoは白ワインのみが認められるDOCGです。" },
      { id: "026", q: "次の中からピエモンテ州のDOP(DOCG)ワインBarolo Riservaの最低熟成期間を選んでください。", c: ["収穫年の翌年1月1日より48ヶ月", "収穫年の11月1日より38ヶ月", "収穫年の11月1日より62ヶ月", "収穫年の11月1日より24ヶ月"], a: 2, e: "Barolo Riservaの最低熟成期間は収穫年の11月1日から62ヶ月です。" },
      { id: "027", q: "次の中からイタリアのDOP(DOCG)ワインBarbera d'Astiが生産されている州を選んでください。", c: ["バジリカータ", "トレンティーノ・アルト・アディジェ", "モリーゼ", "ピエモンテ"], a: 3, e: "Barbera d'Astiはピエモンテ州のDOCGです。" },
      { id: "028", q: "次の中からイタリアのDOP(DOCG)ワインAmarone della Valpolicellaの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["コルヴィーナ・ヴェロネーゼ,コルヴィノーネ", "エルバルーチェ", "アリアーニコ", "フィアーノ"], a: 0, e: "Amarone della Valpolicellaの主要品種はコルヴィーナ・ヴェロネーゼおよびコルヴィノーネです。" },
      { id: "029", q: "次のイタリアのDOP(DOCG)ワインの中から白ワインのみが認められているものを選んでください。", c: ["Castel del Monte Nero di Troia Riserva", "Cesanese del Piglio", "Colli Orientali del Friuli Picolit", "Aglianico del Taburno"], a: 2, e: "Colli Orientali del Friuli Picolitは白ワインのみが認められるDOCGです。" },
      { id: "030", q: "次の中からイタリアのDOP(DOCG)ワインChiantiの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["シャルドネ,ピノ・ネーロ", "ブルネッロ", "サンジョヴェーゼ", "スパンナ"], a: 2, e: "Chiantiの主要品種はサンジョヴェーゼです。" },
      { id: "041", q: "次の中からイタリア、カンパーニア州で最古のDOCGを選んでください。", c: ["Taurasi", "Greco di Tufo", "Aglianico del Taburno", "Fiano di Avellino"], a: 0, e: "カンパーニア州で最古のDOCGはTaurasiです。" },
      { id: "042", q: "次のイタリアのDOP(DOCG)ワインの中で甘口ワインに該当するものを入力してください。選択肢: Ruchè di Castagnole Monferrato / Montecucco Sangiovese / Moscato di Scanzo / Montello Rosso", t: "Moscato di Scanzo", aliases: ["モスカート・ディ・スカンツォ", "モスカートディスカンツォ"], e: "Moscato di Scanzoは甘口ワインのDOCGです。" },
      { id: "043", q: "次の中からイタリアのDOP(DOCG)ワインRosso della Val di Corniaの主要品種に含まれているものを選んでください。", c: ["ピノ・ビアンコ", "ネッビオーロ", "ペコリーノ", "カベルネ・ソーヴィニョン"], a: 3, e: "Rosso della Val di Corniaの主要品種にはカベルネ・ソーヴィニョンが含まれます。" },
      { id: "044", q: "次の中からイタリアのDOP(DOCG)ワインBrachetto d'Acquiが生産されている州を選んでください。", c: ["フリウリ・ヴェネツィア・ジューリア", "カンパーニア", "ヴェネト", "ピエモンテ"], a: 3, e: "Brachetto d'Acquiはピエモンテ州のDOCGです。" },
      { id: "045", q: "次の中からカリフォルニアのジンファンデルと同じ品種からDOP(DOCG)ワインが生産されている州を選択してください。", c: ["リグーリア", "プーリア", "ロンバルディア", "ウンブリア"], a: 1, e: "ジンファンデルと同系統のプリミティーヴォはプーリア州で重要です。" },
      { id: "047", q: "次のイタリア、トスカーナ州のDOPワインの中から産地がフィレンツェとシエナの間に位置するものを選んでください。", c: ["Brunello di Montalcino", "Carmignano", "Chianti Classico", "Morellino di Scansano"], a: 2, e: "Chianti Classicoはフィレンツェとシエナの間に位置します。" },
      { id: "048", q: "次の中からイタリア、カンパーニア州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Recioto della Valpolicella", "Franciacorta", "Bardolino Superiore", "Asti", "Dolcetto di Diano d'Alba", "Dolcetto di Ovada Superiore", "Taurasi", "Chianti Classico"], aa: [6], max: 2, e: "Taurasiはカンパーニア州のDOCGです。" },
      { id: "049", q: "次の中から主要品種がタイであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Chianti", "Amarone della Valpolicella", "Roero", "Lison"], a: 3, e: "Lisonの主要品種はタイです。" },
      { id: "050", q: "次の中からイタリア、トスカーナ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Cesanese del Piglio", "Franciacorta", "Rosso della Val di Cornia", "Barbera del Monferrato Superiore", "Carmignano", "Aglianico del Vulture Superiore", "Erbaluce di Caluso", "Colline Teramane Montepulciano d'Abruzzo"], aa: [2, 4], max: 2, e: "Rosso della Val di CorniaとCarmignanoはトスカーナ州のDOCGです。" },
      { id: "051", q: "次のイタリアのDOP(DOCG)ワインの中から甘口ワインを選んでください。", c: ["Ruchè di Castagnole Monferrato", "Cerasuolo di Vittoria", "Barbaresco", "Primitivo di Manduria Dolce Naturale"], a: 3, e: "Primitivo di Manduria Dolce Naturaleは甘口ワインのDOCGです。" },
      { id: "052", q: "次のイタリアのDOP(DOCG)ワインの中から赤ワインのみが認められているものを選んでください。", c: ["Gavi", "Dolcetto di Ovada Superiore", "Terre Tollesi", "Romagna Albana"], a: 1, e: "Dolcetto di Ovada Superioreは赤ワインのみが認められるDOCGです。" },
      { id: "053", q: "次のイタリアのDOP(DOCG)ワインの中から白ワインのみが認められているものを選んでください。", c: ["Nizza", "Rosazzo", "Barbera d'Asti", "Colline Teramane Montepulciano d'Abruzzo"], a: 1, e: "Rosazzoは白ワインのみが認められるDOCGです。" },
      { id: "055", q: "次の中からイタリア、マルケ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Montello Rosso", "Rosazzo", "Colli Bolognesi Pignoletto", "Offida", "Frascati Superiore", "Elba Aleatico Passito", "Chianti", "Cirò Classico"], aa: [3], max: 2, e: "Offidaはマルケ州のDOCGです。" },
      { id: "056", q: "次の中からイタリア、モリーゼ州で生産されているDOP(DOC)ワインを選んでください。", c: ["Est! Est!! Est!!! di Montefiascone", "Biferno", "Barbera d'Alba", "Etna"], a: 1, e: "Bifernoはモリーゼ州のDOP(DOC)ワインです。" },
      { id: "057", q: "次の中からエレガントで優しい個性から「ピエモンテの女王」と称されるピエモンテ州のDOP(DOCG)ワインを選んでください。", c: ["Barolo", "Barbaresco", "Nizza", "Terre Alfieri"], a: 1, e: "Barbarescoはエレガントな個性から「ピエモンテの女王」と称されます。" },
      { id: "058", q: "次の中からイタリアのDOP(DOCG)ワインErbaluce di Calusoが生産されている州を選んでください。", c: ["ピエモンテ", "ロンバルディア", "カンパーニア", "カラブリア"], a: 0, e: "Erbaluce di Calusoはピエモンテ州のDOCGです。" },
      { id: "059", q: "次の中からイタリア、カンパーニア州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Dogliani", "Amarone della Valpolicella", "Brachetto d'Acqui", "Greco di Tufo", "Valtellina Superiore", "Cònero", "Asolo", "Dolcetto di Ovada Superiore"], aa: [3], max: 2, e: "Greco di Tufoはカンパーニア州のDOCGです。" },
      { id: "061", q: "次の中からイタリアのDOP(DOCG)ワインCarmignanoが生産されている州を選んでください。", c: ["ピエモンテ", "ヴェネト", "トスカーナ", "ヴァッレ・ダオスタ"], a: 2, e: "Carmignanoはトスカーナ州のDOCGです。" },
      { id: "062", q: "次のイタリアのDOP(DOCG)ワインの中から赤ワインのみが認められているものを選んでください。", c: ["Soave Superiore", "Asolo", "Vermentino di Gallura", "Barbera d'Asti"], a: 3, e: "Barbera d'Astiは赤ワインのみが認められるDOCGです。" },
      { id: "063", q: "次の中からイタリアのDOP(DOCG)ワインValtellina Superioreが生産されている州を選んでください。", c: ["モリーゼ", "ロンバルディア", "カンパーニア", "トレンティーノ・アルト・アディジェ"], a: 1, e: "Valtellina Superioreはロンバルディア州のDOCGです。" },
      { id: "064", q: "次のイタリアDOPワインの中から、イギリス人ジョン・ウッドハウスが1773年に白ワインにアルコールを添加して造ったワインを選んでください。", c: ["Marsala", "Valpolicella Ripasso", "Malvasia di Bosa", "Barbera d'Alba"], a: 0, e: "Marsalaはジョン・ウッドハウスにより酒精強化ワインとして発展しました。" },
      { id: "066", q: "次の中からイタリアのDOP(DOCG)ワインCastelli di Jesi Verdicchio Riservaの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["ヴェルディッキオ", "エルバルーチェ", "チェサネーゼ・ディ・アッフィレ,チェサネーゼ・コムーネ", "アリアーニコ"], a: 0, e: "Castelli di Jesi Verdicchio Riservaの主要品種はヴェルディッキオです。" },
      { id: "067", q: "次のイタリアのDOP(DOCG)ワインの中から赤白両方のワインが認められているものを選んでください。", c: ["Nizza", "Barbera del Monferrato Superiore", "Roero", "Verdicchio di Matelica Riserva"], a: 2, e: "Roeroは赤白両方のワインが認められるDOCGです。" },
      { id: "069", q: "次の中からイタリア、ピエモンテ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Morellino di Scansano", "Asti", "Vernaccia di San Gimignano", "Fiano di Avellino", "Gattinara", "Aglianico del Vulture Superiore", "Offida", "Chianti"], aa: [1, 4], max: 2, e: "AstiとGattinaraはピエモンテ州のDOCGです。" },
      { id: "071", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Roero", "Brunello di Montalcino", "Bardolino Superiore", "Gattinara"], a: 0, e: "Roeroではスプマンテが認められています。" },
      { id: "073", q: "次の中からイタリアのDOP(DOCG)ワインBrachetto d'Acquiの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["アレアティコ", "コルヴィーナ・ヴェロネーゼ", "サンジョヴェーゼ", "ブラケット"], a: 3, e: "Brachetto d'Acquiの主要品種はブラケットです。" },
      { id: "077", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Romagna Albana", "Colli Euganei Fior d'Arancio", "Castel del Monte Rosso Riserva", "Castel del Monte Nero di Troia Riserva"], a: 1, e: "Colli Euganei Fior d'Arancioではスプマンテが認められています。" },
      { id: "078", q: "次の中からイタリア、マルケ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Montefalco Sagrantino", "Vernaccia di Serrapetrona", "Valtellina Superiore", "Cirò Classico", "Cònero", "Romagna Albana", "Soave Superiore", "Chianti"], aa: [1, 4], max: 2, e: "Vernaccia di SerrapetronaとCòneroはマルケ州のDOCGです。" },
      { id: "079", q: "次の中からイタリア、プーリア州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Rosazzo", "Brunello di Montalcino", "Moscato di Scanzo", "Terre Tollesi", "Bagnoli Friularo", "Chianti Classico", "Castel del Monte Rosso Riserva", "Castel del Monte Bombino Nero"], aa: [6, 7], max: 2, e: "Castel del Monte Rosso RiservaとCastel del Monte Bombino Neroはプーリア州のDOCGです。" },
      { id: "081", q: "次のイタリアのDOP(DOCG)ワインの中から白ワインのみが認められているものを選んでください。", c: ["Cirò Classico", "Vernaccia di San Gimignano", "Cesanese del Piglio", "Aglianico del Vulture Superiore"], a: 1, e: "Vernaccia di San Gimignanoは白ワインのみが認められるDOCGです。" },
      { id: "082", q: "次の中からイタリアのDOP(DOCG)ワインRamandoloが生産されている州を選んでください。", c: ["フリウリ・ヴェネツィア・ジューリア", "ウンブリア", "カンパーニア", "ヴェネト"], a: 0, e: "Ramandoloはフリウリ・ヴェネツィア・ジューリア州のDOCGです。" },
      { id: "084", q: "次のイタリアのDOP(DOCG)ワインの中から赤白両方のワインが認められているものを選んでください。", c: ["Colli di Conegliano", "Fiano di Avellino", "Colli Orientali del Friuli Picolit", "Gattinara"], a: 0, e: "Colli di Coneglianoは赤白両方のワインが認められるDOCGです。" },
      { id: "085", q: "次の中からイタリア、ピエモンテ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Dolcetto di Diano d'Alba", "Castel del Monte Rosso Riserva", "Nizza", "Torgiano Rosso Riserva", "Vermentino di Gallura", "Franciacorta", "Chianti", "Elba Aleatico Passito"], aa: [0, 2], max: 2, e: "Dolcetto di Diano d'AlbaとNizzaはピエモンテ州のDOCGです。" },
      { id: "087", q: "次の中から主要品種がネーロ・ダヴォラであるイタリアのDOP(DOCG)ワインを選択してください。", c: ["Asti", "Cerasuolo di Vittoria", "Barbaresco", "Lison"], a: 1, e: "Cerasuolo di Vittoriaはネーロ・ダヴォラを主要品種に含むDOCGです。" },
      { id: "088", q: "次の中からイタリアのDOP(DOCG)ワインGreco di Tufoの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["フリウラーノ", "サンジョヴェーゼ", "グレーコ", "プルニョーロ・ジェンティーレ"], a: 2, e: "Greco di Tufoの主要品種はグレーコです。" },
      { id: "089", q: "次の中からイタリア、シチリア州で古木に用いられている伝統的な仕立て方を選んでください。", c: ["クルラ", "テンドーネ", "アルベレッロ", "ペルゴラ"], a: 2, e: "シチリア州の古木にはアルベレッロ仕立てが用いられます。" },
      { id: "090", q: "次の中からイタリア、ラツィオ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Brachetto d'Acqui", "Franciacorta", "Cerasuolo di Vittoria", "Dolcetto di Diano d'Alba", "Frascati Superiore", "Oltrepò Pavese Metodo Classico", "Colline Teramane Montepulciano d'Abruzzo", "Cesanese del Piglio"], aa: [4, 7], max: 2, e: "Frascati SuperioreとCesanese del Piglioはラツィオ州のDOCGです。" },
      { id: "091", q: "次のイタリアのDOP(DOCG)ワインの中からスプマンテが認められているものを選んでください。", c: ["Morellino di Scansano", "Conegliano Valdobbiadene-Prosecco", "Castel del Monte Nero di Troia Riserva", "Dogliani"], a: 1, e: "Conegliano Valdobbiadene-Proseccoではスプマンテが認められています。" },
      { id: "092", q: "次の中からイタリア、ラツィオ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Colli Bolognesi Pignoletto", "Barbaresco", "Sforzato di Valtellina", "Piave Malanotte", "Rosso della Val di Cornia", "Erbaluce di Caluso", "Cannellino di Frascati", "Cesanese del Piglio"], aa: [6, 7], max: 2, e: "Cannellino di FrascatiとCesanese del Piglioはラツィオ州のDOCGです。" },
      { id: "093", q: "次のイタリアのDOP(DOCG)ワインの中から赤ワインのみが認められているものを選んでください。", c: ["Offida", "Castelli di Jesi Verdicchio Riserva", "Ramandolo", "Castel del Monte Rosso Riserva"], a: 3, e: "Castel del Monte Rosso Riservaは赤ワインのみが認められるDOCGです。" },
      { id: "094", q: "次の中からイタリアのDOP(DOCG)ワインVerdicchio di Matelica Riservaの主要品種を選んでください。なお、その品種に別名がある時には、その地方で使われている別名を選んでください。", c: ["フィアーノ", "ガルガネガ", "アリアーニコ", "ヴェルディッキオ"], a: 3, e: "Verdicchio di Matelica Riservaの主要品種はヴェルディッキオです。" },
      { id: "095", q: "次の中からイタリア、トスカーナ州で生産されているDOP(DOCG)ワインを全て選んでください。2個まで選択できます。", c: ["Castel del Monte Rosso Riserva", "Elba Aleatico Passito", "Taurasi", "Romagna Albana", "Alta Langa", "Colli Bolognesi Pignoletto", "Bagnoli Friularo", "Suvereto"], aa: [1, 7], max: 2, e: "Elba Aleatico PassitoとSuveretoはトスカーナ州のDOCGです。" },
      { id: "096", q: "次の中からイタリアのDOP(DOCG)ワインFranciacortaの主要品種に含まれているものを選んでください。", c: ["モスカート", "ピノ・グリージョ", "ガルガネガ", "ピノ・ビアンコ"], a: 3, e: "Franciacortaの主要品種にはピノ・ビアンコが含まれます。" },
      { id: "099", q: "次のイタリアのDOP(DOCG)ワインの中から甘口ワインを選んでください。", c: ["Gattinara", "Ghemme", "Dolcetto di Diano d'Alba", "Elba Aleatico Passito"], a: 3, e: "Elba Aleatico Passitoは甘口ワインのDOCGです。" }
    ].map((item) => {
      const base = {
        id: `italy-docg-doc-${item.id}`,
        category: "イタリア/DOCG、DOC",
        importance: "A",
        question: item.q,
        explanation: item.e
      };
      if (item.t) {
        return {
          ...base,
          answerText: item.t,
          answerTextAliases: item.aliases || []
        };
      }
      return {
        ...base,
        choices: item.c,
        ...(item.aa ? { answerIndexes: item.aa, maxSelections: item.max || item.aa.length } : { answerIndex: item.a })
      };
    }),
  ...[
    { id: "001", q: "次の中からドイツの交配品種ショイレーベの親を選択してください。", c: ["ミュラー・トゥルガウ", "ブケットトラウベ", "ヘロルトレーベ", "ポルトギーザー"], a: 1, e: "ショイレーベの親にはブケットトラウベが含まれます。" },
    { id: "002", q: "次のドイツワインに関する記述の中から正しいものを選択してください。", c: ["赤ワイン用ブドウ品種の栽培面積は、2005年以降増加を続けている。", "ドイツ全体で見てみると、近年増えているのはハイブリッド系の交配品種である。", "ドイツではメルロやカベルネ・ソーヴィニョンはほとんど栽培されていない。", "1995〜2024年の間で、ミュラー・トゥルガウの栽培面積は大幅に減少した。"], a: 3, e: "1995〜2024年の間で、ミュラー・トゥルガウの栽培面積は大きく減少しました。" },
    { id: "003", q: "次の中からドイツのQualitätsweinで必要な最低アルコール度数を選択してください。", c: ["8.5%", "5.5%", "9.5%", "7.0%"], a: 3, e: "ドイツのQualitätsweinで必要な最低アルコール度数は7.0%です。" },
    { id: "004", q: "次の中からドイツの黒ブドウ品種で栽培面積が第2位のものを選択してください。", c: ["ポルトギーザー", "シュヴァルツリースリング", "シュペートブルグンダー", "ドルンフェルダー"], a: 3, e: "ドイツの黒ブドウ品種で栽培面積第2位はドルンフェルダーです。" },
    { id: "005", q: "次の中からスキアーヴァのシノニム（同一異名品種）を選択してください。", c: ["シュヴァルツリースリング", "トロリンガー", "ミュラー・トゥルガウ", "ピノ・ムニエ"], a: 1, e: "スキアーヴァはドイツではトロリンガーの名でも知られます。" },
    { id: "006", q: "次の中から2021年改正のドイツワイン法で正しい記述を選択してください。", c: ["Großes GewächsまたはErstes Gewächsに格付けされた場合、肩書き（Prädikat）は表記しない", "Einzellageを名乗る場合、GemeindeまたはOrtsteilの名は併記できない", "地理的表示保護ワインは、trockenまたはhalbtrockenのみに制限される", "格付けの基準が、地理的呼称範囲から収穫時の果汁糖度に変わる"], a: 0, e: "Großes GewächsまたはErstes Gewächsでは、肩書き（Prädikat）は表記しません。" },
    { id: "007", q: "次の中からドイツの病害抵抗性を持つ交配品種（PIWI）を選択してください。", c: ["ムスカリス", "ミュラー・トゥルガウ", "レンベルガー", "ケルナー"], a: 0, e: "ムスカリスは病害抵抗性を持つPIWI品種です。" },
    { id: "008", q: "ドイツワインの歴史上で次の出来事が起きた年代を選択してください。「フランス革命後、モーゼルのブドウ畑の格付け地図が出版された。」", c: ["1868年", "1892年", "1935年", "1867年"], a: 0, e: "モーゼルのブドウ畑の格付け地図は1868年に出版されました。" },
    { id: "009", q: "次の中からドイツのQualitätsweinについての適切な記述を選択してください。", c: ["補糖は一切認められない", "一部地域を除き、甘口と中辛口のみ許可されている", "収穫時のブドウの状態、果汁糖度、ワインのスタイルによって6段階の肩書きがある", "13の特定ワイン生産地域のいずれか一つのブドウを100%用いる"], a: 3, e: "Qualitätsweinは13の特定ワイン生産地域のいずれか一つのブドウを100%用います。" },
    { id: "010", q: "次の中からドイツの交配品種ドミナの親を選択してください。", c: ["ミュラー・トゥルガウ", "ジルヴァーナー", "ブケットトラウベ", "ポルトギーザー"], a: 3, e: "ドミナの親にはポルトギーザーが含まれます。" },
    { id: "011", q: "次の中からドイツの白ブドウ品種を選択してください。", c: ["ショイレーベ", "シュペートブルグンダー", "トロリンガー", "ポルトギーザー"], a: 0, e: "ショイレーベはドイツの白ブドウ品種です。" },
    { id: "012", q: "次の中からルーレンダーのシノニム（同一異名品種）を選択してください。", c: ["ミュラー・トゥルガウ", "グラウブルグンダー", "フェルナッチ", "リヴァーナー"], a: 1, e: "ルーレンダーはグラウブルグンダーのシノニムです。" },
    { id: "013", q: "次の説明に合致する、ドイツのPrädikatsweinの肩書きを選択してください。「最低果汁糖度70〜85°Oe、繊細で軽いスタイルのワインであることが期待される。」", c: ["Kabinett", "Trockenbeerenauslese", "Spätlese", "Auslese"], a: 0, e: "Kabinettは繊細で軽いスタイルが期待されるPrädikatです。" },
    { id: "014", q: "次の中からドイツの交配品種バッフスの親を選択してください。", c: ["マドレーヌ・ロワイヤル", "ジルヴァーナー", "ヘロルトレーベ", "ポルトギーザー"], a: 1, e: "バッフスの親にはジルヴァーナーが含まれます。" },
    { id: "015", q: "次の中からドイツの白ブドウが栽培面積に占める比率を選択してください。", c: ["約6割", "約5割", "約8割", "約7割"], a: 3, e: "ドイツでは白ブドウが栽培面積の約7割を占めます。" },
    { id: "016", q: "次の中からドイツのブドウ品種で栽培面積が第1位のものを選択してください。", c: ["リースリング", "ポルトギーザー", "シュペートブルグンダー", "ミュラー・トゥルガウ"], a: 0, e: "ドイツで栽培面積第1位の品種はリースリングです。" },
    { id: "017", q: "ドイツワインの歴史上で次の出来事が起きた年代を選択してください。「18世紀以降ブドウ栽培が改善され、エーバーバッハ修道院が所有するシュタインベルクで貴腐ブドウの収穫が行われた。」", c: ["1720年", "1775年", "1753年", "1786年"], a: 2, e: "シュタインベルクで貴腐ブドウの収穫が行われたのは1753年です。" },
    { id: "018", q: "次の中から2021年改正のドイツワイン法で正しい記述を選択してください。", c: ["Großes GewächsまたはErstes Gewächsに格付けされた場合、肩書き（Prädikat）を必ず表記する", "Großlageを名乗る場合には、Bereichという語を併記する", "地理的表示保護ワインは、trockenまたはhalbtrockenのみに制限される", "原産地呼称保護ワインの生産条件は、現行のQualitätsweinと同じである"], a: 3, e: "2021年改正では、原産地呼称保護ワインの生産条件は現行のQualitätsweinと同じです。" },
    { id: "019", q: "次の中からドイツの白ブドウ品種で栽培面積が第3位のものを選択してください。", c: ["リースリング", "グラウブルグンダー", "ミュラー・トゥルガウ", "ジルヴァーナー"], a: 1, e: "ドイツの白ブドウ品種で栽培面積第3位はグラウブルグンダーです。" },
    { id: "020", q: "次の中からピノ・グリのシノニム（同一異名品種）を選択してください。", c: ["ピノ・ノワール", "ルーレンダー", "フェルナッチ", "リヴァーナー"], a: 1, e: "ピノ・グリはドイツではルーレンダーとも呼ばれます。" },
    { id: "021", q: "次の中からドイツの白ブドウ品種を選択してください。", c: ["ドルンフェルダー", "レゲント", "ポルトギーザー", "リースリング"], a: 3, e: "リースリングはドイツを代表する白ブドウ品種です。" },
    { id: "022", q: "次の中からドイツのブドウ品種で栽培面積が第3位のものを選択してください。", c: ["ポルトギーザー", "リースリング", "シュペートブルグンダー", "ミュラー・トゥルガウ"], a: 3, e: "ドイツで栽培面積第3位の品種はミュラー・トゥルガウです。" },
    { id: "023", q: "次の中からブラウフレンキッシュのシノニム（同一異名品種）を選択してください。", c: ["スキアーヴァ", "グラウブルグンダー", "ミュラー・トゥルガウ", "レンベルガー"], a: 3, e: "ブラウフレンキッシュはドイツではレンベルガーとも呼ばれます。" },
    { id: "024", q: "次の中からドイツの交配品種レゲントの親を選択してください。", c: ["シュペートブルグンダー", "シャンボールサン", "ヘルフェンシュタイナー", "ブケットトラウベ"], a: 1, e: "レゲントの親にはシャンボールサンが含まれます。" },
    { id: "025", q: "ドイツワインの歴史上で次の出来事が起きた年代を選択してください。「フランス革命後、ラインガウのブドウ畑の格付け地図が出版された。」", c: ["1945年", "1867年", "1935年", "1892年"], a: 1, e: "ラインガウのブドウ畑の格付け地図は1867年に出版されました。" },
    { id: "026", q: "次の中から2021年改正のドイツワイン法で、略称 g.g.A. が意味するものを選択してください。", c: ["EUワイン", "地理的表示のないワイン", "地理的表示保護ワイン", "原産地呼称保護ワイン"], a: 2, e: "g.g.A.は地理的表示保護ワインを意味します。" },
    { id: "027", q: "次の中からドイツのTrockenbeerenausleseの原料ブドウに必要な最低果汁糖度を選択してください。", c: ["150〜154°Oe", "180〜194°Oe", "210〜225°Oe", "80〜95°Oe"], a: 0, e: "Trockenbeerenausleseに必要な最低果汁糖度は150〜154°Oeです。" },
    { id: "028", q: "次の中からドイツワインのBestimmte Anbaugebieteの数を選択してください。", c: ["13", "153", "51", "42"], a: 0, e: "ドイツのBestimmte Anbaugebieteは13です。" },
    { id: "029", q: "次の中からドイツの白ブドウ品種を選択してください。", c: ["ポルトギーザー", "ヴァイスブルグンダー", "シュペートブルグンダー", "レンベルガー"], a: 1, e: "ヴァイスブルグンダーはドイツの白ブドウ品種です。" },
    { id: "030", q: "次の説明に合致する、ドイツのPrädikatsweinの肩書きを選択してください。「樹上で凍結したブドウを、凍結した状態で圧搾し醸造する。」", c: ["Trockenbeerenauslese", "Beerenauslese", "Eiswein", "Spätlese"], a: 2, e: "樹上で凍結したブドウを凍結したまま圧搾して造るのはEisweinです。" },
    { id: "032", q: "次の中からドイツの病害抵抗性を持つ交配品種（PIWI）を選択してください。", c: ["レゲント", "ドミナ", "ドルンフェルダー", "ジルヴァーナー"], a: 0, e: "レゲントは病害抵抗性を持つPIWI品種です。" },
    { id: "034", q: "次の中からドイツの黒ブドウ品種で栽培面積が第1位のものを選択してください。", c: ["シュペートブルグンダー", "トロリンガー", "シュヴァルツリースリング", "ドルンフェルダー"], a: 0, e: "ドイツの黒ブドウ品種で栽培面積第1位はシュペートブルグンダーです。" },
    { id: "035", q: "次の中からドイツの2021年のワイン生産量順位を選択してください。", c: ["世界第8位", "世界第9位", "世界第6位", "世界第10位"], a: 1, e: "ドイツの2021年のワイン生産量順位は世界第9位です。" },
    { id: "037", q: "次の中からドイツの交配品種ドミナの親を選択してください。", c: ["ヘルフェンシュタイナー", "ヘロルトレーベ", "シュペートブルグンダー", "ジルヴァーナー"], a: 2, e: "ドミナの親にはシュペートブルグンダーが含まれます。" },
    { id: "038", q: "次の中からドイツのBeerenausleseで必要な最低アルコール度数を選択してください。", c: ["9.5%", "7.0%", "5.5%", "8.5%"], a: 2, e: "Beerenausleseで必要な最低アルコール度数は5.5%です。" },
    { id: "041", q: "次の中から2021年改正のドイツワイン法で正しい記述を選択してください。", c: ["原産地呼称保護ワインは、g.U.とQualitätsweinの両方を必ず表記する", "GemeindeまたはOrtsteilを名乗る場合、現行のSpätlese以上の果汁糖度が必要である", "Großlageを名乗る場合には、Bereichという語を併記する", "格付けの基準が、収穫時の果汁糖度から地理的呼称範囲に変わる"], a: 3, e: "2021年改正では、格付けの基準が収穫時の果汁糖度から地理的呼称範囲へ変わりました。" },
    { id: "042", q: "次の中からドイツの黒ブドウ品種を選択してください。", c: ["ショイレーベ", "ミュラー・トゥルガウ", "ジルヴァーナー", "シュペートブルグンダー"], a: 3, e: "シュペートブルグンダーはドイツの黒ブドウ品種です。" },
    { id: "043", q: "ドイツワインの歴史上で次の出来事が起きた年代を選択してください。「18世紀以降ブドウ栽培が改善され、ラインガウのヨハニスベルク修道院でリースリングが大量に植樹された。」", c: ["1753年", "1775年", "1786年", "1720年"], a: 3, e: "ヨハニスベルク修道院でリースリングが大量に植樹されたのは1720年です。" },
    { id: "044", q: "次の中からドイツワインのBereicheの数を選択してください。", c: ["42", "8", "51", "26"], a: 2, e: "ドイツワインのBereicheは51です。" },
    { id: "045", q: "次の中からドイツの交配品種ドルンフェルダーの親を選択してください。", c: ["ヘロルトレーベ", "シュペートブルグンダー", "ジルヴァーナー", "リースリング"], a: 0, e: "ドルンフェルダーの親にはヘロルトレーベが含まれます。" },
    { id: "047", q: "次の中からレンベルガーのシノニム（同一異名品種）を選択してください。", c: ["ラインリースリング", "ブラウフレンキッシュ", "リヴァーナー", "ピノ・グリ"], a: 1, e: "レンベルガーはブラウフレンキッシュのシノニムです。" },
    { id: "049", q: "ドイツワインの歴史上で次の出来事が起きた年代を選択してください。「格付けシステムが根本的に変わり、収穫時の果汁糖度に応じて格が上がることになった。」", c: ["1971年", "1964年", "2003年", "1945年"], a: 0, e: "収穫時の果汁糖度に応じる格付けシステムは1971年に導入されました。" },
    { id: "052", q: "次の中からグラウブルグンダーのシノニム（同一異名品種）を選択してください。", c: ["ピノ・ムニエ", "スキアーヴァ", "ヴァイスブルグンダー", "ルーレンダー"], a: 3, e: "グラウブルグンダーはルーレンダーのシノニムです。" },
    { id: "053", q: "次の中からドイツの交配品種ミュラー・トゥルガウの親を選択してください。", c: ["ジルヴァーナー", "ポルトギーザー", "マドレーヌ・ロワイヤル", "シャンボールサン"], a: 2, e: "ミュラー・トゥルガウの親にはマドレーヌ・ロワイヤルが含まれます。" },
    { id: "054", q: "次の中からドイツの病害抵抗性を持つ交配品種（PIWI）を選択してください。", c: ["ドルンフェルダー", "シュペートブルグンダー", "ドミナ", "カベルネ・ブラン"], a: 3, e: "カベルネ・ブランは病害抵抗性を持つPIWI品種です。" },
    { id: "056", q: "次の中から2021年改正のドイツのワイン法で、格付けを上位から下位の順序で正しく並べたものを選択してください。", c: ["Einzellage, BereichまたはRegion, GemeindeまたはOrtsteil, Anbaugebiet", "BereichまたはRegion, Anbaugebiet, GemeindeまたはOrtsteil, Einzellage", "Anbaugebiet, Einzellage, GemeindeまたはOrtsteil, BereichまたはRegion", "Einzellage, GemeindeまたはOrtsteil, BereichまたはRegion, Anbaugebiet"], a: 3, e: "上位からEinzellage、GemeindeまたはOrtsteil、BereichまたはRegion、Anbaugebietの順です。" },
    { id: "057", q: "次の中からドイツの黒ブドウ品種を選択してください。", c: ["レンベルガー", "バッフス", "グラウブルグンダー", "ショイレーベ"], a: 0, e: "レンベルガーはドイツの黒ブドウ品種です。" },
    { id: "058", q: "次の説明に合致する、ドイツのPrädikatsweinの肩書きを選択してください。「最低果汁糖度80〜95°Oe、遅くまで待ち、完熟したブドウを用いる。」", c: ["Spätlese", "Eiswein", "Trockenbeerenauslese", "Auslese"], a: 0, e: "Spätleseは遅くまで待ち、完熟したブドウを用いる肩書きです。" },
    { id: "059", q: "次の中からミュラーレーベのシノニム（同一異名品種）を選択してください。", c: ["シュペートブルグンダー", "ラインリースリング", "ピノ・ムニエ", "ヴァイスブルグンダー"], a: 2, e: "ミュラーレーベはピノ・ムニエのシノニムです。" },
    { id: "061", q: "次の中からドイツの交配品種ミュラー・トゥルガウの親を選択してください。", c: ["ミュラー・トゥルガウ", "リースリング", "ヘルフェンシュタイナー", "ブケットトラウベ"], a: 1, e: "ミュラー・トゥルガウの親にはリースリングが含まれます。" },
    { id: "064", q: "次の中からドイツのQualitätsweinについての適切な記述を選択してください。", c: ["アルコール度数を補うための補糖は可能", "収穫時のブドウの状態、果汁糖度、ワインのスタイルによって6段階の肩書きがある", "一部地域を除き、甘口と中辛口のみ許可されている", "26の特定ワイン生産地域のいずれか一つのブドウを100%用いる"], a: 0, e: "Qualitätsweinではアルコール度数を補うための補糖が可能です。" }
  ].map((item) => ({
    id: `germany-overview-law-${item.id}`,
    category: "ドイツ/概論、歴史、品種、ワイン法",
    importance: "A",
    question: item.q,
    choices: item.c,
    answerIndex: item.a,
    explanation: item.e
  })),
  ...[
    { id: "001", q: "次のドイツのラインガウ地方の村の中で、最も西に位置するものを選択してください。", c: ["Erbach", "Hochheim", "Kiedrich", "Lorch"], a: 3, e: "ラインガウ地方の村の中で、Lorchは最も西に位置します。" },
    { id: "002", q: "次の説明に合致するドイツの生産地域を選択してください。「ポーランド国境近くのエルベ川沿いに位置する産地。州都ドレスデンにも近い。ボーリングのピンのようなボトルと、交配品種ゴルトリースリングが特産品である。」", c: ["ザクセン", "プファルツ", "フランケン", "ヘッシッシェ・ベルクシュトラーセ"], a: 0, e: "説明はザクセンに合致します。ドレスデン近郊、エルベ川沿いの産地です。" },
    { id: "003", q: "下記の画像はドイツのワイン産地の地図です。地図上で7番の特定ワイン生産地域名をカタカナで入力してください。", t: "プファルツ", img: true, e: "地図上の7番はPfalz、カタカナではプファルツです。" },
    { id: "004", q: "次のようなドイツ料理を選択してください。「ヴュルテンベルクの郷土料理の一つで、卵入りの太麺にチーズをおろして溶かしフライドオニオンを散らした料理」", c: ["Sauerkraut", "Käsespätzle", "Zwiebelkuchen", "Handkäse mit Musik"], a: 1, e: "Käsespätzleは太麺にチーズを絡め、フライドオニオンを散らす郷土料理です。" },
    { id: "005", q: "次のドイツのベライヒの中からバーデン地方に属するものを選択してください。", c: ["Kaiserstuhl", "Burg Cochem", "Saar", "Johannisberg"], a: 0, e: "Kaiserstuhlはバーデン地方のベライヒです。" },
    { id: "006", q: "次の中からドイツ、モーゼル地域のEitelsbach村に属する畑を選択してください。", c: ["Prälat", "Karthäusserhofberg", "Scharzhofberg", "Sonnenuhr"], a: 1, e: "Karthäusserhofbergはモーゼル地域Eitelsbach村に属する畑です。" },
    { id: "007", q: "次の中からドイツ産のロゼワインを選択してください。", c: ["Schaumwein", "Schillerwein", "Sekt", "Pét-Nat"], a: 1, e: "Schillerweinはドイツ産ロゼワインの一種です。" },
    { id: "008", q: "次の中からドイツのVDPプレディカーツヴァイン醸造所連盟が定める4段階の品質基準の中で、第3階級（村名入りワイン）に相当するクラスを選択してください。", c: ["Ortswein", "Großlage", "Erste Lage", "Gutswein"], a: 0, e: "VDPの第3階級、村名入りワインはOrtsweinです。" },
    { id: "009", q: "次の中からドイツの生産地域モーゼルで最も栽培面積の大きいブドウ品種を選択してください。", c: ["ジルヴァーナー", "シュペートブルグンダー", "リースリング", "トロリンガー"], a: 2, e: "モーゼルで最も栽培面積が大きい品種はリースリングです。" },
    { id: "010", q: "次のドイツワイン生産地域の中からRauenthal村が属する産地を選択してください。", c: ["ラインガウ", "ラインヘッセン", "ヴュルテンベルク", "ザクセン"], a: 0, e: "Rauenthal村はラインガウに属します。" },
    { id: "011", q: "下記の画像はドイツのワイン産地の地図です。地図上で1番の特定ワイン生産地域名をカタカナで入力してください。", t: "アール", img: true, e: "地図上の1番はAhr、カタカナではアールです。" },
    { id: "012", q: "次の説明に最もよく合致するドイツ産スパークリングワインを選択してください。「発泡性ワインで20℃で3.0気圧以上、最低アルコール度数9.5%。白・赤・生産国などの異なるワインをブレンドしたベースワインを使用できる。」", c: ["Sekt b.A.", "Schaumwein", "Pét-Nat", "Perlwein"], a: 1, e: "説明はSchaumweinに合致します。" },
    { id: "013", q: "次の説明に合致するドイツの生産地域を選択してください。「ドイツで3番目に大きなワイン生産地域で、南北におよそ400kmにわたって細長く広がり、南はスイス国境まで達する。9つのベライヒに区分され、シュペートブルグンダーが栽培面積の約32%を占める。」", c: ["ザクセン", "ナーエ", "ヴュルテンベルク", "バーデン"], a: 3, e: "説明はバーデンに合致します。南北に長く、シュペートブルグンダーも重要です。" },
    { id: "014", q: "次のようなドイツ料理を選択してください。「アールの郷土料理の一つで、イノシシをソテーし、赤ワインと香草を加えて蒸し煮にした料理」", c: ["Rheinischer Sauerbraten", "Wildschweinbraten", "Frankfurter Grüne Soße", "Zwiebelkuchen"], a: 1, e: "Wildschweinbratenはイノシシを使った料理です。" },
    { id: "015", q: "次のドイツワイン生産地域の中からWürzburg村が属する産地を選択してください。", c: ["フランケン", "バーデン", "モーゼル", "プファルツ"], a: 0, e: "Würzburg村はフランケンに属します。" },
    { id: "016", q: "次の中からドイツのラインガウ地方の村を、西から東の順序で正しく並べたものを選択してください。", c: ["Rüdesheim, Assmannshausen, Hattenheim, Johannisberg", "Johannisberg, Assmannshausen, Rüdesheim, Erbach", "Rüdesheim, Hattenheim, Assmannshausen, Johannisberg", "Rüdesheim, Johannisberg, Hattenheim, Erbach"], a: 3, e: "西から東へ、Rüdesheim、Johannisberg、Hattenheim、Erbachの順です。" },
    { id: "017", q: "次の中からドイツ、ラインガウ地域のRauenthal村に属する畑を選択してください。", c: ["Baiken", "Steinberg", "Königin Victoriaberg", "Schloss Vollrads"], a: 0, e: "Baikenはラインガウ地域Rauenthal村に属する畑です。" },
    { id: "018", q: "次の中からドイツの生産地域ヴュルテンベルクで最も栽培面積の大きい赤ワイン用品種を選択してください。", c: ["トロリンガー", "シュペートブルグンダー", "ポルトギーザー", "ドルンフェルダー"], a: 0, e: "ヴュルテンベルクで最も栽培面積が大きい赤ワイン用品種はトロリンガーです。" },
    { id: "019", q: "次の中からドイツのVDPプレディカーツヴァイン醸造所連盟が定める品質基準の中で、VDP Große Lageの規定として適切なものを選択してください。", c: ["収穫は選別しながらの手作業", "辛口ワインのみに認められる", "村名と認定畑名を合わせて記載する", "ヘクタール当たりの収穫量は75ヘクトリットル以下"], a: 0, e: "VDP Große Lageでは、収穫は選別しながらの手作業とされます。" },
    { id: "020", q: "次のドイツのベライヒの中からバーデン地方に属するものを選択してください。", c: ["Tuniberg", "Nierstein", "Obermosel", "Frankens Saalestück"], a: 0, e: "Tunibergはバーデン地方のベライヒです。" },
    { id: "021", q: "次の中からドイツ、ラインガウ地域のRauenthal村に属する畑を選択してください。", c: ["Gräfenberg", "Turmberg", "Nonnenberg", "Steinberg"], a: 2, e: "Nonnenbergはラインガウ地域Rauenthal村に属する畑です。" },
    { id: "022", q: "次の中からドイツのモーゼル川中流域に位置するベライヒを選択してください。", c: ["Ruwertal", "Saar", "Moseltor", "Bernkastel"], a: 3, e: "モーゼル川中流域に位置するベライヒはBernkastelです。" },
    { id: "023", q: "次のドイツワイン生産地域の中からEscherndorf村が属する産地を選択してください。", c: ["フランケン", "アール", "ラインガウ", "ザクセン"], a: 0, e: "Escherndorf村はフランケンに属します。" },
    { id: "024", q: "次の説明に合致するドイツの生産地域を選択してください。「ドイツで2番目に大きな生産地域で、西のハールト山地からライン川に向かって続く平野に広がり、南端はフランスとの国境に接している。桃やイチジクなど様々な果樹の栽培にも適した温暖な気候である。」", c: ["ナーエ", "プファルツ", "ラインヘッセン", "ザクセン"], a: 1, e: "説明はプファルツに合致します。" },
    { id: "025", q: "次のようなドイツ料理を選択してください。「ラインガウの郷土料理の一つで、茹でたジャガイモや玉子にかける、サワークリームに7種類の香草を混ぜたソース」", c: ["Zwiebelkuchen", "Blaue Zipfel", "Frankfurter Grüne Soße", "Wildschweinbraten"], a: 2, e: "Frankfurter Grüne Soßeは7種類の香草を使う緑色のソースです。" },
    { id: "026", q: "次の中からドイツのVDPプレディカーツヴァイン醸造所連盟が定める4段階の品質基準の中で、最高級クラス（特級区画）に相当するクラスを選択してください。", c: ["Ortswein", "Erste Lage", "Große Lage", "Gutswein"], a: 2, e: "VDPの最高級クラス、特級区画はGroße Lageです。" },
    { id: "027", q: "下記の画像はドイツのワイン産地の地図です。地図上で3番の特定ワイン生産地域名をカタカナで入力してください。", t: "ミッテルライン", img: true, e: "地図上の3番はMittelrhein、カタカナではミッテルラインです。" },
    { id: "028", q: "次の説明に最も合致するドイツ産ロゼワインを選択してください。「赤ワイン用ブドウと白ワイン用ブドウ、もしくはそれぞれ破砕して果汁に漬けた状態で混ぜて一緒に圧搾・醸造したロゼワイン。」", c: ["Rotling", "Weißherbst", "Blanc de Noir", "Pét-Nat"], a: 0, e: "説明はRotlingに合致します。" },
    { id: "029", q: "次のドイツのベライヒの中からフランケン地方に属するものを選択してください。", c: ["Württembergisch-Unterland", "Mittelfränkische Bocksbeutelstraße", "Nahetal", "Obermosel"], a: 1, e: "Mittelfränkische Bocksbeutelstraßeはフランケン地方のベライヒです。" },
    { id: "030", q: "次の中からドイツの生産地域ラインガウで最も栽培面積の大きいブドウ品種を選択してください。", c: ["リースリング", "トロリンガー", "シュペートブルグンダー", "ジルヴァーナー"], a: 0, e: "ラインガウで最も栽培面積が大きい品種はリースリングです。" },
    { id: "031", q: "下記の画像はドイツのワイン産地の地図です。地図上でHessische Bergstraßeに相当する番号を選択してください。", c: ["10番", "8番", "13番", "6番"], a: 1, img: true, e: "Hessische Bergstraßeは地図上の8番です。" },
    { id: "032", q: "次の中からドイツ最東端であるドイツの生産地域を選択してください。", c: ["ラインガウ", "プファルツ", "ザクセン", "ザーレ・ウンストルート"], a: 2, e: "ドイツ最東端のワイン生産地域はザクセンです。" },
    { id: "033", q: "次の中からドイツのワイン産地で、かつて「3B」と呼ばれた大御所中心の産地から、若手が活躍するダイナミックな産地へと変貌しているところを選択してください。", c: ["ラインヘッセン", "バーデン", "アール", "プファルツ"], a: 3, e: "説明はプファルツに合致します。" },
    { id: "035", q: "次のようなドイツ料理を選択してください。「プファルツの郷土料理の一つで、豚の胃袋に豚肉、ジャガイモなどを詰めて茹でた後、フライパンで炙って供される料理」", c: ["Gräwes", "Saumagen", "Nürnberger Bratwurst", "Frankfurter Grüne Soße"], a: 1, e: "Saumagenはプファルツの郷土料理です。" },
    { id: "036", q: "次の説明に最もよく合致するドイツ産スパークリングワインを選択してください。「発泡性ワインで20℃で3.5気圧以上、最低アルコール度数は10%。白・赤・生産国などの異なるワインをブレンドしたベースワインを使用できる。」", c: ["Sekt b.A.", "Schaumwein", "Perlwein", "Sekt"], a: 3, e: "説明はSektに合致します。" },
    { id: "037", q: "次のドイツのベライヒの中からモーゼル地方に属するものを選択してください。", c: ["Nahetal", "Nierstein", "Tauberfranken", "Saar"], a: 3, e: "Saarはモーゼル地方のベライヒです。" },
    { id: "038", q: "次の中からドイツ、ラインガウ地域のKiedrich村に属する畑を選択してください。", c: ["Gräfenberg", "Berg Rottland", "Steinberg", "Königin Victoriaberg"], a: 0, e: "GräfenbergはKiedrich村に属する畑です。" },
    { id: "039", q: "次のドイツワイン生産地域の中からBrauneberg村が属する産地を選択してください。", c: ["ザーレ・ウンストルート", "ヘッシッシェ・ベルクシュトラーセ", "プファルツ", "モーゼル"], a: 3, e: "Brauneberg村はモーゼルに属します。" },
    { id: "040", q: "次の中からドイツで、市町村名の一部区画(Ortsteil)の地理的呼称をラベルに表記する例外的な畑を選択してください。", c: ["Uhlen", "Braune Kupp", "Schloss Vollrads", "Prälat"], a: 2, e: "Schloss VollradsはOrtsteilの地理的呼称をラベルに表記する例外的な畑です。" },
    { id: "041", q: "次の説明に最も合致するドイツ産ロゼワインを選択してください。「バーデン産のロゼワインで、グラウブルグンダーとシュペートブルグンダーから醸造される。」", c: ["Weißherbst", "Blanc de Noir", "Badisch Rotgold", "Schillerwein"], a: 2, e: "Badisch Rotgoldはバーデン産のロゼワインです。" },
    { id: "042", q: "次の中からドイツの生産地域フランケンで最も栽培面積の大きいブドウ品種を選択してください。", c: ["トロリンガー", "リースリング", "シュペートブルグンダー", "ジルヴァーナー"], a: 3, e: "フランケンで最も栽培面積が大きい品種はジルヴァーナーです。" },
    { id: "043", q: "次のドイツのベライヒの中からフランケン地方に属するものを選択してください。", c: ["Burg Cochem", "Oberer Neckar", "Volkacher Mainschleife", "Walporzheim/Ahrtal"], a: 2, e: "Volkacher Mainschleifeはフランケン地方のベライヒです。" },
    { id: "044", q: "次のドイツワイン生産地域の中からWehlen村が属する産地を選択してください。", c: ["ラインガウ", "モーゼル", "ザクセン", "ナーエ"], a: 1, e: "Wehlen村はモーゼルに属します。" },
    { id: "046", q: "次のようなドイツ料理を選択してください。「乳酸発酵したキャベツ」", c: ["Sauerkraut", "Rheinischer Sauerbraten", "Handkäse mit Musik", "Nürnberger Bratwurst"], a: 0, e: "乳酸発酵したキャベツはSauerkrautです。" },
    { id: "047", q: "次の中からドイツのVDPプレディカーツヴァイン醸造所連盟が定める4段階の品質基準の中で、第4階級（醸造所名入りワイン）に相当するクラスを選択してください。", c: ["Große Lage", "Großlage", "Ortswein", "Gutswein"], a: 3, e: "第4階級、醸造所名入りワインはGutsweinです。" },
    { id: "048", q: "下記の画像はドイツのワイン産地の地図です。地図上で9番の特定ワイン生産地域名をカタカナで入力してください。", t: "フランケン", img: true, e: "地図上の9番はFranken、カタカナではフランケンです。" },
    { id: "049", q: "次の説明に合致するドイツの生産地域を選択してください。「ドイツのブドウ栽培醸造技術を研究するガイゼンハイム大学があり、高品質なドイツワインをリードする産地である。多くの畑はタウヌス山地とライン川の間の斜面にあり、リースリングが約76%を占める。」", c: ["ラインヘッセン", "ヴュルテンベルク", "ラインガウ", "ヘッシッシェ・ベルクシュトラーセ"], a: 2, e: "説明はラインガウに合致します。" },
    { id: "050", q: "次の中からドイツのワイン生産地、ラインヘッセンに接しているところを選択してください。", c: ["ザクセン", "ナーエ", "フランケン", "ヴュルテンベルク"], a: 1, e: "ラインヘッセンはナーエに接しています。" },
    { id: "051", q: "次のドイツワイン生産地域の中からÜrzig村が属する産地を選択してください。", c: ["フランケン", "モーゼル", "ザーレ・ウンストルート", "ヴュルテンベルク"], a: 1, e: "Ürzig村はモーゼルに属します。" },
    { id: "053", q: "次の中からドイツのVDPプレディカーツヴァイン醸造所連盟が定める4段階の品質基準の中で、醸造所名を名乗る日常消費用のワインに相当するクラスを選択してください。", c: ["Gutswein", "Erste Lage", "Großlage", "Ortswein"], a: 0, e: "醸造所名を名乗る日常消費用のワインはGutsweinです。" },
    { id: "054", q: "次の説明に最も合致するドイツ産ロゼワインを選択してください。「単一の赤ワイン用品種から造られるロゼワイン。クヴァリテーツヴァイン以上の品質であることが求められる。5%まで同一品種の赤ワインまたはマストを添加することができる。」", c: ["Weißherbst", "Pét-Nat", "Rotling", "Blanc de Noir"], a: 0, e: "説明はWeißherbstに合致します。" },
    { id: "055", q: "下記の画像はドイツのワイン産地の地図です。地図上でSachsenに相当する番号を選択してください。", c: ["10番", "1番", "8番", "13番"], a: 3, img: true, e: "Sachsenは地図上の13番です。" },
    { id: "056", q: "次の中からドイツ、モーゼル地域のKanzem村に属する畑を選択してください。", c: ["Braune Kupp", "Uhlen", "Altenberg", "Doktor"], a: 2, e: "Altenbergはモーゼル地域Kanzem村に属する畑です。" },
    { id: "057", q: "次のドイツのラインガウ地方の村の中で、最も東に位置するものを選択してください。", c: ["Hochheim", "Kiedrich", "Assmannshausen", "Rüdesheim"], a: 0, e: "ラインガウ地方の村の中で、Hochheimは最も東に位置します。" },
    { id: "058", q: "次のドイツのワイン生産地の中から、最も南に位置しているところを選択してください。", c: ["プファルツ", "ナーエ", "ラインヘッセン", "ラインガウ"], a: 0, e: "この選択肢の中で最も南に位置するのはプファルツです。" },
    { id: "059", q: "次のドイツのベライヒの中からラインヘッセン地方に属するものを選択してください。", c: ["Frankens Saalestück", "Starkenburg", "Nierstein", "Bodensee"], a: 2, e: "Niersteinはラインヘッセン地方のベライヒです。" },
    { id: "060", q: "次の説明に合致するドイツの生産地域を選択してください。「ドイツで2番目に栽培面積の狭いワイン生産地域。ブドウ畑はオーデンヴァルト山地の西側斜面と北の端に散在し、南をバーデン・ヴュルテンベルク州に接している。」", c: ["ヘッシッシェ・ベルクシュトラーセ", "ナーエ", "ラインヘッセン", "ミッテルライン"], a: 0, e: "説明はヘッシッシェ・ベルクシュトラーセに合致します。" }
  ].map((item) => {
    const base = {
      id: `germany-regions-${item.id}`,
      category: "ドイツ/産地",
      importance: "A",
      question: item.q,
      explanation: item.e,
      ...(item.img ? {
        image: {
          src: "assets/germany-regions-map.jpg",
          alt: "ドイツのワイン産地の地図",
          caption: "ドイツの特定ワイン生産地域"
        }
      } : {})
    };
    if (item.t) {
      return {
        ...base,
        answerText: item.t
      };
    }
    return {
      ...base,
      choices: item.c,
      answerIndex: item.a
    };
  }),
  ...[
    { id: "001", q: "次の中からポルトガルのマデイラでSpecial Reservaと表記されたものの熟成規定を選んでください。", c: ["樽熟成30年以上", "樽熟成5年以上", "樽熟成10年以上", "樽熟成20年以上"], a: 2, e: "Special Reservaは樽熟成10年以上のマデイラです。" },
    { id: "002", q: "次のポルトガルのポートに関する記述の中から正しいものを選択してください。", c: ["ポートの畑は、土壌と気候条件に基づき、A〜Dまで4段階に区分けされている。", "一般に、熟成年数表記トウニー・ポートはデカンタージュを必要とする。", "ライト・ドライ・ホワイト以外のポートは、アルコール18〜20度に限定されている。", "ポートの甘さは、エクストラ・ドライ〜ヴェリー・スイートまで5段階ある。"], a: 3, e: "ポートの甘さは、エクストラ・ドライからヴェリー・スイートまで5段階で表されます。" },
    { id: "003", q: "下記の画像はポルトガル、ポルトとドウロのワイン産地の地図です。地図上で1番のエリア名をカタカナで入力してください。", t: "バイショ・コルゴ", aliases: ["バイショコルゴ"], img: "douro", e: "地図上の1番はBaixo Corgo、カタカナではバイショ・コルゴです。" },
    { id: "004", q: "次の中からポルトガルでDOPワイン用のブドウ栽培面積が最も大きい産地を選択してください。", c: ["Minho", "Alentejo", "Lisboa", "Douro"], a: 3, e: "DOPワイン用のブドウ栽培面積が最も大きい産地はDouroです。" },
    { id: "005", q: "次の中からポルトガルのマデイラに使用される品種を選択してください。", c: ["バスタルド", "バガ", "マリア・ゴメス", "ティンタ・ロリス"], a: 0, e: "バスタルドはマデイラに使用される黒ブドウ品種です。" },
    { id: "006", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される加熱熟成法を選んでください。「タンクの内部又は外周に通した管のなかに湯を循環させてタンク内のワインを温める方法。簡単で比較的早く加熱熟成の効果が得られる。」", c: ["エストゥファ", "ベネフィシオ", "バスタルド", "カンテイロ"], a: 0, e: "タンク内のワインを温める人工的な加熱熟成法はエストゥファです。" },
    { id: "007", q: "下記の画像はポルトガルのワイン産地の地図です。地図上でTerras de Cisterに相当する番号を選択してください。", c: ["8番", "10番", "7番", "4番"], a: 3, img: "portugal", e: "Terras de Cisterは地図上の4番です。" },
    { id: "008", q: "次の説明に最も良く合致するポルトガルのDOCワインを選んでください。「DOC名は緑のワインという意味である。アルヴァリーニョ種から辛口の白ワインを生産している。」", c: ["ダン", "ドウロ", "カルカヴェロス", "ヴィーニョ・ヴェルデ"], a: 3, e: "緑のワインを意味し、アルヴァリーニョの白ワインで知られるのはヴィーニョ・ヴェルデです。" },
    { id: "009", q: "次の中からポルトガルの白ブドウ品種で栽培面積が第3位のものを選択してください。", c: ["アルヴァリーニョ", "フェルナォン・ピレス", "ロウレイロ", "アリント"], a: 2, e: "ポルトガルの白ブドウ品種で栽培面積第3位はロウレイロです。" },
    { id: "010", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される品種を選んでください。「かつて栽培されていた黒ブドウ品種。現在ではほとんど見かけることがなくなった。」", c: ["セルシアル", "マルヴァジア", "ヴェルデーリョ", "バスタルド"], a: 3, e: "説明はバスタルドに合致します。" },
    { id: "011", q: "次の中からポルトガルのマデイラで品種名が表記されたものの規定を選んでください。", c: ["表示品種70%以上使用", "表示品種100%使用", "表示品種85%以上使用", "表示品種50%以上使用"], a: 2, e: "マデイラで品種名を表示する場合、表示品種を85%以上使用します。" },
    { id: "012", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される加熱熟成法を選んでください。「タンクの内部又は外周に通した管のなかに湯を循環させてタンク内のワインを温める方法。簡単で比較的早く加熱熟成の効果が得られる。」", c: ["カンテイロ", "コリェイタ", "クーバ・デ・カロール", "ベネフィシオ"], a: 2, e: "説明はクーバ・デ・カロールに合致します。" },
    { id: "013", q: "下記の画像はポルトガルのワイン産地の地図です。地図上で1番のワイン産地名をカタカナで入力してください。", t: "ミーニョ", aliases: ["ミーニヨ"], img: "portugal", e: "地図上の1番はMinho、カタカナではミーニョです。" },
    { id: "015", q: "次の中からポルトガルのワイン法で「最もシンプルなワインであり、様々な地域のブドウのブレンドによりワインを造ることができる。」と規定されているワインを選択してください。", c: ["Vino de la Tierra", "Vinho", "Vino de Pago", "Vinho Regional"], a: 1, e: "最もシンプルなワインとして規定されるのはVinhoです。" },
    { id: "016", q: "下記の画像はポルトガル、ポルトとドウロのワイン産地の地図です。地図上で2番のエリア名をカタカナで入力してください。", t: "シマ・コルゴ", aliases: ["シマコルゴ"], img: "douro", e: "地図上の2番はCima Corgo、カタカナではシマ・コルゴです。" },
    { id: "017", q: "次の中からポルトガルのブドウ品種で栽培面積が第3位のものを選択してください。", c: ["トウリガ・ナショナル", "バガ", "トウリガ・フランカ", "カステラォン"], a: 0, e: "ポルトガルのブドウ品種で栽培面積第3位はトウリガ・ナショナルです。" },
    { id: "018", q: "次の中からポルトガルのマデイラに添加するグレープ・スピリッツのアルコール度数を選択してください。", c: ["77%", "96%", "40%", "65%"], a: 1, e: "マデイラにはアルコール度数96%のグレープ・スピリッツを添加します。" },
    { id: "019", q: "次の中からポルトガル南東部の気候を選択してください。", c: ["海の影響を受け、温暖", "湿度が高く、温暖な海洋性気候", "海の影響を受け、降雨量が多く、比較的涼しい", "内陸部で乾燥"], a: 3, e: "ポルトガル南東部は内陸部で乾燥した気候です。" },
    { id: "020", q: "次の説明に最も良く合致するポルトガルのDOCワインを選んでください。「ポルトガルで初めてスパークリングワインの産地として認定された。」", c: ["ドウロ", "タヴォラ・ヴァローザ", "カルカヴェロス", "バイラーダ"], a: 1, e: "ポルトガルで初めてスパークリングワインの産地として認定されたのはタヴォラ・ヴァローザです。" },
    { id: "021", q: "次の中からポルトガルのマデイラに使用される品種を選択してください。", c: ["バガ", "アルヴァリーニョ", "セルシアル", "ティンタ・ロリス"], a: 2, e: "セルシアルはマデイラに使用される白ブドウ品種です。" },
    { id: "022", q: "次の説明に最も良く合致するポルトガルのDOCワインを選んでください。「火山島の産地で、かつてロシア帝国や英国の宮廷で愛されていた中辛口タイプの酒精強化ワインLajidoが生産されている。」", c: ["ヴィーニョ・ヴェルデ", "ピコ", "ダン", "タヴォラ・ヴァローザ"], a: 1, e: "説明はアソーレス諸島のピコに合致します。" },
    { id: "023", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される加熱熟成法を選んでください。「3年熟成などのスタンダードワインに用いられる人工的な加熱方法。」", c: ["ベネフィシオ", "バスタルド", "コリェイタ", "クーバ・デ・カロール"], a: 3, e: "3年熟成などのスタンダードなマデイラにはクーバ・デ・カロールが用いられます。" },
    { id: "024", q: "次の中からポルトガルのマデイラでFrasqueiraと表記されたものの熟成規定を選んでください。", c: ["樽熟成30年以上", "樽熟成20年以上", "樽熟成3年以上", "樽熟成5年以上"], a: 1, e: "Frasqueiraは樽熟成20年以上です。" },
    { id: "025", q: "次の中からポルトガル半島部の気候を選択してください。", c: ["湿度が高く、温暖な海洋性気候", "海の影響を受け、降雨量が多く、比較的涼しい", "内陸部で乾燥", "海の影響を受け、温暖"], a: 0, e: "ポルトガル半島部は湿度が高く、温暖な海洋性気候です。" },
    { id: "026", q: "下記の画像はポルトガルのワイン産地の地図です。地図上でTransmontanoに相当する番号を選択してください。", c: ["4番", "9番", "3番", "2番"], a: 3, img: "portugal", e: "Transmontanoは地図上の2番です。" },
    { id: "028", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される品種を選んでください。「比較的冷涼な気候の地域で栽培される白ブドウ品種。酸味を生かして辛口タイプで華やかな香りのワインに造られる。」", c: ["ボアル", "マルヴァジア", "ヴェルデーリョ", "セルシアル"], a: 3, e: "説明はセルシアルに合致します。" },
    { id: "030", q: "次の説明に最も良く合致するポルトガルのポルトワインの名称を選んでください。「トウニータイプに属するが収穫年とともに瓶詰めの年も表示するポート。」", c: ["コリェイタ", "ロゼ・ポート", "ガラフェイラ・ポート", "ヴィンテージ・ポート"], a: 0, e: "収穫年と瓶詰め年を表示するトウニータイプのポートはコリェイタです。" },
    { id: "031", q: "次の説明に最も良く合致するポルトガルのポルトワインの名称を選んでください。「白ブドウを原料とし、低温発酵で通常のポートよりも発酵を長くしてからグレープ・スピリッツを添加した比較的辛口タイプのもの。」", c: ["レイト・ボトルド・ヴィンテージ・ポート", "ガラフェイラ・ポート", "ヴィンテージ・キャラクター", "ライト・ドライ・ホワイト・ポート"], a: 3, e: "説明はライト・ドライ・ホワイト・ポートに合致します。" },
    { id: "032", q: "下記の画像はポルトガル、ポルトとドウロ地区のワイン産地の地図です。次の中からポートワイン造りにおいて最も品質の高いブドウが産出されるところを選択してください。", c: ["2番", "1番の右岸", "3番", "1番の左岸"], a: 0, img: "douro", e: "ポートワイン造りで最も品質の高いブドウが産出される中心的なエリアは、地図上の2番です。" },
    { id: "033", q: "次の中からポルトガルの白ブドウ品種で栽培面積が第2位のものを選択してください。", c: ["アルヴァリーニョ", "ロウレイロ", "アリント", "フェルナォン・ピレス"], a: 2, e: "ポルトガルの白ブドウ品種で栽培面積第2位はアリントです。" },
    { id: "034", q: "次の中からポルトガルの年間ワイン生産量に最も近いものを選択してください。", c: ["1150万ヘクトリットル", "550万ヘクトリットル", "750万ヘクトリットル", "950万ヘクトリットル"], a: 2, e: "ポルトガルの年間ワイン生産量は、選択肢の中では750万ヘクトリットルが最も近い値です。" },
    { id: "035", q: "次の説明に最も良く合致するポルトガルのマデイラに使用される品種を選んでください。「涼しい北部地域で栽培されることが多い白ブドウ品種。中辛口タイプで味わいの豊かなワインに造られる。」", c: ["ヴェルデーリョ", "バスタルド", "ボアル", "セルシアル"], a: 0, e: "説明はヴェルデーリョに合致します。" },
    { id: "036", q: "次の説明に最も良く合致するポルトガルのDOCワインを選んでください。「リスボンから南西に1,000kmの大西洋上に浮ぶ、エンリケ航海王によって開発された島。酒精強化ワインが生産されている。」", c: ["ヴィーニョ・ヴェルデ", "コラーレス", "マデイラ", "カルカヴェロス"], a: 2, e: "説明はマデイラに合致します。" },
    { id: "037", q: "次の中からポルトガルのマデイラでExtra Reservaと表記されたものの熟成規定を選んでください。", c: ["樽熟成10年以上", "樽熟成30年以上", "樽熟成3年以上", "樽熟成15年以上"], a: 3, e: "Extra Reservaは樽熟成15年以上のマデイラです。" },
    { id: "038", q: "下記の画像はポルトガル、ポルトとドウロのワイン産地の地図です。地図上で3番のエリア名をカタカナで入力してください。", t: "ドウロ・スーペリオール", aliases: ["ドウロスーペリオール"], img: "douro", e: "地図上の3番はDouro Superior、カタカナではドウロ・スーペリオールです。" },
    { id: "039", q: "次の説明に最も良く合致するポルトガルのポルトワインのタイプを選んでください。「小さい樽で熟成させ酸化が進み、ワインが黄褐色に変わったタイプ。」", c: ["クラステッドタイプ", "ヴィンテージタイプ", "ルビータイプ", "トウニータイプ"], a: 3, e: "小さい樽で酸化熟成し、黄褐色に変わったタイプはトウニータイプです。" },
    { id: "040", q: "次の中からポルトガルのマデイラでFrasqueiraと表記されたものの規定を選んでください。", c: ["表示品種100%使用", "表示品種70%以上使用", "表示品種50%以上使用", "表示品種85%以上使用"], a: 0, e: "Frasqueiraは表示品種100%使用の規定があります。" },
    { id: "041", q: "下記の画像はポルトガルのワイン産地の地図です。地図上で5番のワイン産地名をカタカナで入力してください。", t: "テラス・ド・ダン", aliases: ["テラスドダン"], img: "portugal", e: "地図上の5番はTerras do Dão、カタカナではテラス・ド・ダンです。" },
    { id: "042", q: "次の特徴に最も良く当てはまるポルトガルのブドウ品種を選択してください。「スペインのテンプラニーリョと同じ黒品種で、ポートやドウロの主要品種を担う。」", c: ["バガ", "トウリガ・フランカ", "ティンタ・ロリス", "フェルナォン・ピレス"], a: 2, e: "ティンタ・ロリスはスペインのテンプラニーリョと同じ品種です。" },
    { id: "043", q: "次の中からポルトガルのポルトワインの畑の分類（土地台帳に基づくポイント制度）の名称を選択してください。", c: ["ラガール", "カダストロ", "ベネフィシオ", "アデガ"], a: 1, e: "ポートワインの畑の分類はカダストロと呼ばれるポイント制度です。" },
    { id: "044", q: "次の説明に最も良く合致するポルトガルのDOCワインを選んでください。「ポルトガルの北西部に位置し、ミーニョ川一帯に広がる栽培地区で生産されている。」", c: ["コラーレス", "ドウロ", "セトゥーバル", "ヴィーニョ・ヴェルデ"], a: 3, e: "ポルトガル北西部のミーニョ川一帯に広がる産地はヴィーニョ・ヴェルデです。" }
  ].map((item) => {
    const base = {
      id: `portugal-${item.id}`,
      category: "ポルトガル",
      importance: "A",
      question: item.q,
      explanation: item.e,
      ...(item.img === "portugal" ? {
        image: {
          src: "assets/portugal-regions-map.jpg",
          alt: "ポルトガルのワイン産地の地図",
          caption: "ポルトガルのワイン産地"
        }
      } : {}),
      ...(item.img === "douro" ? {
        image: {
          src: "assets/portugal-douro-map.jpg",
          alt: "ポルトガル、ポルトとドウロのワイン産地の地図",
          caption: "ポルトとドウロのワイン産地"
        }
      } : {})
    };
    if (item.t) {
      return {
        ...base,
        answerText: item.t,
        answerTextAliases: item.aliases || []
      };
    }
    return {
      ...base,
      choices: item.c,
      answerIndex: item.a
    };
  }),
  ...[
    { id: "001", q: "次の中からスペインのCava Gran Reservaの瓶詰めから澱抜きまでの最低熟成期間を選択してください。", c: ["30ヶ月", "9ヶ月", "12ヶ月", "36ヶ月"], a: 0, e: "Cava Gran Reservaは瓶詰めから澱抜きまで最低30ヶ月の熟成が必要です。" },
    { id: "002", q: "スペインワインの歴史上で次の出来事が起きた年代を選択してください。「フィロキセラの害で畑を失ったフランス人が、リオハなどスペイン北部のワイン産地にやってきてワイン造りに従事した。」", c: ["18世紀後半", "19世紀後半", "20世紀前半", "17世紀後半"], a: 1, e: "フィロキセラ被害後、19世紀後半にフランス人がリオハなどに移り、ワイン造りに影響を与えました。" },
    { id: "003", q: "次の中からスペインのリオハの赤ワインへの使用が認定されていない品種を選択してください。", c: ["メンシア", "グラシアーノ", "ガルナッチャ", "テンプラニーリョ"], a: 0, e: "メンシアはリオハ赤ワインの認定品種ではありません。" },
    { id: "004", q: "次の中からスペインのワイン産地、プリオラートの土壌を選択してください。", c: ["スレート土壌", "石灰岩で真っ白な土壌", "赤い粘土質の土壌", "火山性土壌"], a: 0, e: "プリオラートはリコレリャと呼ばれるスレート土壌で知られます。" },
    { id: "005", q: "次の中からスペインのリオハの産地で、最も西部に位置し全栽培面積の約50%を占めるところを選択してください。", c: ["リオハ・アラベサ", "リオハ・アルタ", "リオハ・デマンダ", "リオハ・オリエンタル"], a: 1, e: "リオハ・アルタは最も西部に位置し、リオハの主要な栽培地域です。" },
    { id: "006", q: "次の中からスペイン、Andalucía州に属するDOまたはDOCaを選択してください。", c: ["Bierzo", "La Mancha", "Granada", "Rías Baixas"], a: 2, e: "GranadaはAndalucía州に属するDOです。" },
    { id: "007", q: "スペインで2番目に多く栽培されている品種を選択してください。", c: ["ベルデホ", "テンプラニーリョ", "ボバル", "アイレン"], a: 3, e: "スペインで2番目に多く栽培されている品種はアイレンです。" },
    { id: "008", q: "次のスペインのDOまたはDOCaの中から、最もバルセロナの近くに位置するところを選択してください。", c: ["ナバーラ", "ペネデス", "リベラ・デル・ドゥエロ", "ヘレス"], a: 1, e: "ペネデスはカタルーニャ州にあり、バルセロナに近い産地です。" },
    { id: "009", q: "下記の画像はスペインのワイン産地の地図です。地図上で5番の産地名をカタカナで入力してください。", t: "ガリシア", img: "spain", e: "地図上の5番はGalicia、カタカナではガリシアです。" },
    { id: "010", q: "次の説明に合致するスペインのシェリーのタイプを選択してください。「濃い琥珀色からマホガニー色。酸化熟成したワインをベースとする甘口のシェリー。」", c: ["Medium", "Pale Dry", "Cream", "Pale Cream"], a: 2, e: "酸化熟成したワインをベースとする甘口シェリーはCreamです。" },
    { id: "011", q: "次の中からスペインでシェリーの熟成システムで、樽を段積みしたブロックの呼称を選択してください。", c: ["ロシオ", "ソレラ", "アンダナ", "ソブレタブラ"], a: 2, e: "樽を段積みしたブロックはアンダナと呼ばれます。" },
    { id: "012", q: "スペインでレセルバと表記された赤ワインの最低熟成期間を選択してください。", c: ["36ヶ月", "24ヶ月", "48ヶ月", "60ヶ月"], a: 0, e: "赤ワインのReservaは最低36ヶ月熟成です。" },
    { id: "013", q: "下記の画像はスペイン、リオハのワイン産地の地図です。地図上でRioja Altaに相当する記号を選択してください。", c: ["B（左のみ）", "B（左右両方）", "C", "A"], a: 3, img: "rioja", e: "Rioja Altaは地図上のAです。" },
    { id: "014", q: "次の中からスペインのDOまたはDOCa Toroが属する州を選択してください。", c: ["Galicia", "Extremadura", "Cataluña", "Castilla y León"], a: 3, e: "ToroはCastilla y León州に属します。" },
    { id: "015", q: "次のスペインのDOまたはDOCaの中から、最もバルセロナの近くに位置するところを選択してください。", c: ["プリオラート", "モンティーリャ・モリーレス", "リオハ", "リベイラ・サクラ"], a: 0, e: "この中ではプリオラートがバルセロナに最も近い産地です。" },
    { id: "017", q: "次の中からスペインのワイン産地、ラ・マンチャ地方の土壌を選択してください。", c: ["火山性土壌", "スレート土壌", "石灰岩で真っ白な土壌", "赤い粘土質の土壌"], a: 3, e: "ラ・マンチャ地方は赤い粘土質の土壌が特徴です。" },
    { id: "018", q: "次の中でスペインのDOまたはDOCa「ソモンターノ」が属する地方を選択してください。", c: ["地中海地方", "内陸部地方", "北部地方", "大西洋地方"], a: 2, e: "Somontanoはスペイン北部地方に属します。" },
    { id: "019", q: "次の中からスペインの2024年のワイン生産量順位を選択してください。", c: ["世界第3位", "世界第4位", "世界第2位", "世界第1位"], a: 0, e: "スペインの2024年ワイン生産量は世界第3位です。" },
    { id: "020", q: "スペインで最も多く栽培されている白ブドウ品種を選択してください。", c: ["ベルデホ", "アイレン", "テンプラニーリョ", "マカベオ"], a: 1, e: "スペインで最も多く栽培されている白ブドウ品種はアイレンです。" },
    { id: "021", q: "次の中からスペインのリオハの産地で、エブロ川左岸に位置し南向きの斜面に畑が多く見られるところを選択してください。", c: ["リオハ・デマンダ", "リオハ・アラベサ", "リオハ・アルタ", "リオハ・オリエンタル"], a: 1, e: "Rioja Alavesaはエブロ川左岸に位置し、南向き斜面に畑が多く見られます。" },
    { id: "023", q: "スペインで3番目に多く栽培されている黒ブドウ品種を選択してください。", c: ["ボバル", "ガルナッチャ・ティンタ", "ベルデホ", "テンプラニーリョ"], a: 0, e: "スペインで3番目に多く栽培されている黒ブドウ品種はボバルです。" },
    { id: "024", q: "次の説明に合致するスペインのシェリーのタイプを選択してください。「淡い黄色から淡い金色。フロールのもとで熟成したワインをベースにする甘口のシェリー。」", c: ["Medium", "Pale Cream", "Pale Dry", "Cream"], a: 1, e: "フロールのもとで熟成したワインをベースにする甘口シェリーはPale Creamです。" },
    { id: "025", q: "次の中からスペインのDOまたはDOCa Prioratoが属する州を選択してください。", c: ["Islas Canarias", "Galicia", "Extremadura", "Cataluña"], a: 3, e: "PrioratoはCataluña州に属します。" },
    { id: "026", q: "次の中からスペインのCava de Guardaの瓶詰めから澱抜きまでの最低熟成期間を選択してください。", c: ["36ヶ月", "12ヶ月", "30ヶ月", "9ヶ月"], a: 3, e: "Cava de Guardaは瓶詰めから澱抜きまで最低9ヶ月熟成です。" },
    { id: "027", q: "スペインでクリアンサと表記されたワインの熟成用の樽の容量を選択してください。", c: ["230リットル以下", "225リットル以下", "600リットル", "330リットル以下"], a: 3, e: "クリアンサの熟成に用いる樽は330リットル以下です。" },
    { id: "028", q: "次の中からスペインのCavaに使用される品種マカベオの別名を選択してください。", c: ["ビウラ", "ベルデホ", "アルバリーニョ", "パレリャーダ"], a: 0, e: "マカベオはビウラとも呼ばれます。" },
    { id: "029", q: "次のスペインのDOまたはDOCaの中から、標高750〜850mの高い位置に畑があるところを選択してください。", c: ["ヘレス", "モンティーリャ・モリーレス", "リベラ・デル・ドゥエロ", "ナバーラ"], a: 2, e: "Ribera del Dueroは標高750〜850mほどの高地に畑があります。" },
    { id: "030", q: "次の中からスペインの2024年のワイン輸出量順位を選択してください。", c: ["世界第1位", "世界第4位", "世界第3位", "世界第2位"], a: 3, e: "スペインの2024年ワイン輸出量順位は世界第2位です。" },
    { id: "031", q: "次の中でスペインのDOまたはDOCa「ルエダ」が属する地方を選択してください。", c: ["北部地方", "大西洋地方", "地中海地方", "内陸部地方"], a: 3, e: "Ruedaは内陸部地方に属します。" },
    { id: "032", q: "下記の画像はスペイン、リオハのワイン産地の地図です。地図上でCのゾーン名をカタカナで入力してください。", t: "リオハ・オリエンタル", aliases: ["リオハオリエンタル"], img: "rioja", e: "地図上のCはRioja Oriental、カタカナではリオハ・オリエンタルです。" },
    { id: "034", q: "下記の画像はスペインのワイン産地の地図です。地図上でCataluñaに相当する番号を選択してください。", c: ["13番", "2番", "6番", "4番"], a: 2, img: "spain", e: "Cataluñaは地図上の6番です。" },
    { id: "035", q: "次の中から辛口タイプのシェリーの呼称を選択してください。", c: ["Vino Generoso de Licor", "Vino Dulce Natural", "Vino Generoso", "Vino de Pago"], a: 2, e: "辛口タイプのシェリーはVino Generosoに分類されます。" },
    { id: "036", q: "次の中からスペイン、Castilla La Mancha州に属するDOまたはDOCaを選択してください。", c: ["Rías Baixas", "La Mancha", "Montilla-Moriles", "Málaga"], a: 1, e: "La ManchaはCastilla La Mancha州に属します。" },
    { id: "037", q: "次の中からスペインのCavaに使用される主要品種を選択してください。", c: ["アイレン", "パロミノ", "ビウラ", "アルバリーニョ"], a: 2, e: "Cavaの主要品種の一つにビウラ（マカベオ）があります。" },
    { id: "038", q: "スペインでレセルバと表記された白ワインの最低樽熟成期間を選択してください。", c: ["24ヶ月", "12ヶ月", "6ヶ月", "18ヶ月"], a: 2, e: "白ワインのReservaは最低6ヶ月の樽熟成が必要です。" },
    { id: "039", q: "次の中からスペインのリオハの白ワインの主たる品種として最も適切なものを選択してください。", c: ["ビウラ", "チャレッロとマカベオ", "パロミノ", "アイレン"], a: 0, e: "リオハの白ワインの主たる品種はビウラです。" },
    { id: "040", q: "次の中からスペインのDOまたはDOCa Lanzaroteが属する州を選択してください。", c: ["Castilla La Mancha", "Andalucía", "Cataluña", "Islas Canarias"], a: 3, e: "LanzaroteはIslas Canarias州に属します。" },
    { id: "041", q: "次の中からスペインのシェリーに影響を与える土壌を選択してください。", c: ["クリアデラ", "テラ・ロッサ", "アルバリサ", "ソレラ"], a: 2, e: "シェリー産地では白いアルバリサ土壌が重要です。" },
    { id: "042", q: "次の中からスペインのCavaのロゼに使用される黒ブドウ品種を選択してください。", c: ["テンプラニーリョ", "ピノ・ノワール", "ボバル", "ビウラ"], a: 1, e: "Cavaのロゼにはピノ・ノワールなどの黒ブドウ品種が使用されます。" },
    { id: "043", q: "次の中からOlorosoタイプのシェリーのアルコール度を選択してください。", c: ["13〜16%", "17〜22%", "19〜24%", "15〜17%"], a: 1, e: "Olorosoタイプのシェリーは17〜22%程度のアルコール度です。" },
    { id: "044", q: "次のスペインのDOまたはDOCaの中から、タラゴナの北西、モンサン山脈の山間部にあり、粘板岩の地質のところを選択してください。", c: ["プリオラート", "リオハ", "ヘレス", "ルエダ"], a: 0, e: "説明はプリオラートに合致します。" },
    { id: "045", q: "次の中からスペイン、ガリシア州のRías Baixasで、栽培ブドウの約95%を占めている品種を選択してください。", c: ["アイレン", "マカベオ", "ボバル", "アルバリーニョ"], a: 3, e: "Rías Baixasではアルバリーニョが栽培ブドウの大部分を占めます。" },
    { id: "046", q: "次の中でスペインのDOまたはDOCa「トロ」が属する地方を選択してください。", c: ["南部地方", "内陸部地方", "大西洋地方", "地中海地方"], a: 1, e: "Toroは内陸部地方に属します。" },
    { id: "049", q: "次の中からスペインで原産地呼称シェリーを名乗ることができる熟成地を選択してください。", c: ["パロ・コルタド", "マンサニーリャ", "ヘレス・デ・ラ・フロンテラ", "ビノ・デ・ヘレス"], a: 2, e: "シェリーを名乗ることができる熟成地の一つはヘレス・デ・ラ・フロンテラです。" },
    { id: "050", q: "スペインで2番目に多く栽培されている白ブドウ品種を選択してください。", c: ["ビウラ", "ベルデホ", "テンプラニーリョ", "アイレン"], a: 0, e: "スペインで2番目に多く栽培されている白ブドウ品種はビウラです。" },
    { id: "051", q: "次の中からスペインで近年ミネラルとフレッシュさのあるグラン・レセルバクラスのCavaに用いられ、ワインに酸味をもたらす品種を選択してください。", c: ["アルバリーニョ", "ペドロ・ヒメネス", "チャレッロ", "パロミノ"], a: 2, e: "チャレッロはCavaに酸味をもたらす重要品種です。" },
    { id: "052", q: "次の中からスペインのDOまたはDOCa Ruedaが属する州を選択してください。", c: ["Extremadura", "Castilla y León", "Andalucía", "Cataluña"], a: 1, e: "RuedaはCastilla y León州に属します。" },
    { id: "053", q: "次の中からスペイン、Castilla y León州に属するDOまたはDOCaを選択してください。", c: ["Ribeira Sacra", "Montilla-Moriles", "Rueda", "Málaga"], a: 2, e: "RuedaはCastilla y León州に属します。" },
    { id: "055", q: "次の中からスペインの品種テンプラニーリョの別名ではないものを選択してください。", c: ["ウル・デ・リェブレ", "カリニェナ", "ティンタ・ロリス", "ティンタ・デル・パイス"], a: 1, e: "カリニェナはテンプラニーリョの別名ではありません。" },
    { id: "056", q: "次の説明に合致するスペインのシェリーのタイプを選択してください。「ごく短期間フロールのもとにあったが、特別な酸化熟成タイプになると判断され酸化熟成を行ったタイプ。」", c: ["Oloroso", "Palo Cortado", "Fino", "Amontillado"], a: 1, e: "説明はPalo Cortadoに合致します。" },
    { id: "057", q: "スペインワインの歴史上で次の出来事が起きた年代を選択してください。「フェニキア人が大西洋岸の町、現在のカディスに到達し、内陸のヘレス地域や地中海沿岸地域でワイン造りをし交易に使った。」", c: ["西暦200年頃", "紀元前200年頃", "紀元前1100年頃", "西暦700年頃"], a: 2, e: "フェニキア人がカディス周辺に到達したのは紀元前1100年頃です。" },
    { id: "058", q: "次の中からスペインのビエルソの赤ワインの主たる品種として最も適切なものを選択してください。", c: ["ガルナッチャとカリニェナ", "テンプラニーリョとカベルネ・ソーヴィニョン", "ボバル", "メンシア"], a: 3, e: "ビエルソの赤ワインの主たる品種はメンシアです。" },
    { id: "059", q: "下記の画像はスペイン、リオハのワイン産地の地図です。地図上でAのゾーン名をカタカナで入力してください。", t: "リオハ・アルタ", aliases: ["リオハアルタ"], img: "rioja", e: "地図上のAはRioja Alta、カタカナではリオハ・アルタです。" },
    { id: "060", q: "次のスペインのDOまたはDOCaの中から、最も南に位置するところを選択してください。", c: ["リベイラ・サクラ", "ラ・マンチャ", "ヘレス", "リベラ・デル・ドゥエロ"], a: 2, e: "この中で最も南に位置するのはヘレスです。" },
    { id: "061", q: "スペインでクリアンサと表記された赤ワインの最低熟成期間を選択してください。", c: ["24ヶ月", "48ヶ月", "12ヶ月", "36ヶ月"], a: 0, e: "赤ワインのCrianzaは最低24ヶ月熟成です。" },
    { id: "062", q: "次の中からスペインのシェリーでVORSと表示がなされたものの平均熟成期間を選択してください。", c: ["20年以上", "10年以上", "30年以上", "5年以上"], a: 2, e: "VORSは平均熟成期間30年以上を示します。" },
    { id: "063", q: "下記の画像はスペインのワイン産地の地図です。地図上でValenciaに相当する番号を選択してください。", c: ["7番", "4番", "11番", "2番"], a: 0, img: "spain", e: "Valenciaは地図上の7番です。" },
    { id: "064", q: "次の中でスペインのDOまたはDOCa「リオハ」が属する地方を選択してください。", c: ["南部地方", "北部地方", "内陸部地方", "地中海地方"], a: 1, e: "Riojaはスペイン北部地方に属します。" },
    { id: "065", q: "下記の画像はスペイン、リオハのワイン産地の地図です。地図上でRioja Alavesaに相当する記号を選択してください。", c: ["B（左のみ）", "B（左右両方）", "B（右のみ）", "A"], a: 1, img: "rioja", e: "Rioja Alavesaは地図上のB（左右両方）です。" },
    { id: "066", q: "次の中からスペインで2025年時点で認定されているD.O.の数を選択してください。", c: ["27", "7", "69", "2"], a: 2, e: "2025年時点でスペインのD.O.は69です。" },
    { id: "067", q: "次の中からスペインのリオハの産地で、他の地域に比べて地中海性気候の影響を受け、気温が高く乾燥しているところを選択してください。", c: ["リオハ・アルタ", "リオハ・デマンダ", "リオハ・アラベサ", "リオハ・オリエンタル"], a: 3, e: "Rioja Orientalは他の地区より地中海性気候の影響を受け、気温が高く乾燥しています。" },
    { id: "068", q: "次の中からスペイン、Castilla y León州に属するDOまたはDOCaを選択してください。", c: ["Valdepeñas", "Somontano", "Ribera del Duero", "Priorato"], a: 2, e: "Ribera del DueroはCastilla y León州に属します。" },
    { id: "069", q: "次の中からスペインのワイン産地、バルセロナ県のサン・サドゥルニ・ダノイアが属する州を選択してください。", c: ["Castilla La Mancha", "Cataluña", "Castilla y León", "Aragón"], a: 1, e: "サン・サドゥルニ・ダノイアはCataluña州に属します。" },
    { id: "070", q: "次の中からスペインのCavaに使用される主要品種を選択してください。", c: ["アルバリーニョ", "パレリャーダ", "モスカテル", "ペドロ・ヒメネス"], a: 1, e: "パレリャーダはCavaに使用される主要品種の一つです。" },
    { id: "071", q: "次の中からスペインで2025年時点で認定されているVino de la Tierraの数を選択してください。", c: ["105", "2", "7", "43"], a: 3, e: "2025年時点でスペインのVino de la Tierraは43です。" },
    { id: "072", q: "下記の画像はスペインのワイン産地の地図です。地図上でPaís Vascoに相当する番号を選択してください。", c: ["4番", "13番", "1番", "2番"], a: 0, img: "spain", e: "País Vascoは地図上の4番です。" },
    { id: "073", q: "次の中からスペインのCavaの生産量の中でペネデスを中心としたカタルーニャ州が占める割合を選択してください。", c: ["85%", "95%", "75%", "65%"], a: 1, e: "Cavaの生産量は、ペネデスを中心としたカタルーニャ州が約95%を占めます。" },
    { id: "074", q: "次の中からスペインのリベラ・デル・ドゥエロの赤ワインの品種規定を選択してください。", c: ["テンプラニーリョ85%以上", "ガルナッチャ・ティンタ75%以上", "ガルナッチャ・ティンタ85%以上", "テンプラニーリョ75%以上"], a: 3, e: "Ribera del Dueroの赤ワインはテンプラニーリョを75%以上使用します。" },
    { id: "075", q: "次の中からスペインのCavaのロゼに使用される黒ブドウ品種を選択してください。", c: ["チャレッロ", "ビウラ", "ガルナッチャ・ティンタ", "パレリャーダ"], a: 2, e: "Cavaのロゼにはガルナッチャ・ティンタなどの黒ブドウ品種が使用されます。" },
    { id: "076", q: "次の中からスペイン中央部に広がる高く平らな地形の呼称を選択してください。", c: ["テラロッサ", "テュフォー", "ランサローテ", "メセタ"], a: 3, e: "スペイン中央部に広がる高く平らな地形はメセタと呼ばれます。" },
    { id: "077", q: "次の中から紀元前1100年頃スペインのカディスに到達し、ワイン造りを行った人種を選択してください。", c: ["フェニキア人", "エジプト人", "ローマ人", "ムーア人"], a: 0, e: "紀元前1100年頃、カディスに到達してワイン造りを行ったのはフェニキア人です。" },
    { id: "078", q: "次の中からスペインのリオハの産地で、2018年にリオハ・バハから改名されたところを選択してください。", c: ["リオハ・アルタ", "リオハ・アラベサ", "リオハ・オリエンタル", "リオハ・デマンダ"], a: 2, e: "Rioja Bajaは2018年にRioja Orientalへ改名されました。" },
    { id: "079", q: "下記の画像はスペイン、リオハのワイン産地の地図です。地図上でBのゾーン名をカタカナで入力してください。", t: "リオハ・アラベサ", aliases: ["リオハアラベサ"], img: "rioja", e: "地図上のBはRioja Alavesa、カタカナではリオハ・アラベサです。" },
    { id: "080", q: "次の中からスペインのDOまたはDOCa Valdepeñasが属する州を選択してください。", c: ["Extremadura", "Islas Canarias", "Castilla La Mancha", "Cataluña"], a: 2, e: "ValdepeñasはCastilla La Mancha州に属します。" },
    { id: "081", q: "次の中からスペイン、Castilla y León州に属するDOまたはDOCaを選択してください。", c: ["Somontano", "Bierzo", "Granada", "Priorato"], a: 1, e: "BierzoはCastilla y León州に属します。" },
    { id: "082", q: "下記の画像はスペインのワイン産地の地図です。地図上でAragónに相当する番号を選択してください。", c: ["4番", "3番", "9番", "5番"], a: 1, img: "spain", e: "Aragónは地図上の3番です。" },
    { id: "083", q: "次のスペインのDOまたはDOCaの中から、最も北に位置するところを選択してください。", c: ["ラ・マンチャ", "リベイラ・サクラ", "ナバーラ", "プリオラート"], a: 2, e: "この中で最も北に位置するのはナバーラです。" },
    { id: "084", q: "次の中からスペインのCavaに使用される主要品種を選択してください。", c: ["アルバリーニョ", "チャレッロ", "アイレン", "ベルデホ"], a: 1, e: "チャレッロはCavaに使用される主要品種の一つです。" },
    { id: "085", q: "次の中からスペインでシェリーを熟成させる時、600リットルの樽に入れるワインの量を選択してください。", c: ["600リットル", "300リットル", "400リットル", "500リットル"], a: 3, e: "シェリー熟成では600リットルの樽に約500リットルのワインを入れます。" },
    { id: "086", q: "次の中からスペインで最大の産地カスティーリャ・ラ・マンチャ州の生産量が全体に占める割合を選択してください。", c: ["51%", "71%", "62%", "35%"], a: 0, e: "カスティーリャ・ラ・マンチャ州はスペインの生産量の約51%を占めます。" },
    { id: "087", q: "スペインワインの歴史上で次の出来事が起きた年代を選択してください。「プリオラートが特選原産地呼称ワインに認定された。」", c: ["2009年", "1998年", "1991年", "2015年"], a: 0, e: "プリオラートが特選原産地呼称ワインに認定されたのは2009年です。" },
    { id: "088", q: "次の中からスペインのCavaのロゼに使用される黒ブドウ品種を選択してください。", c: ["チャレッロ", "トレパット", "テンプラニーリョ", "ボバル"], a: 1, e: "トレパットはCavaのロゼに使用される黒ブドウ品種です。" },
    { id: "089", q: "次の説明に合致するスペインのシェリーのタイプを選択してください。「フロールのもとで熟成したのち、フロールを消失し酸化熟成したタイプ。琥珀色でシャープな辛口である。」", c: ["Amontillado", "Palo Cortado", "Fino", "Oloroso"], a: 0, e: "説明はAmontilladoに合致します。" },
    { id: "090", q: "次の中からスペイン、Cataluña州に属するDOまたはDOCaを選択してください。", c: ["Lanzarote", "Penedés", "Toro", "La Mancha"], a: 1, e: "PenedésはCataluña州に属します。" },
    { id: "091", q: "スペインでノーブレと表記されたワインの最低熟成期間を選択してください。", c: ["9ヶ月", "12ヶ月", "18ヶ月", "24ヶ月"], a: 2, e: "Nobleは最低18ヶ月熟成です。" },
    { id: "092", q: "次の中からスペインのワイン産地、アンダルシア地方のシェリーやモンティーリャの土壌を選択してください。", c: ["火山性土壌", "赤い粘土質の土壌", "スレート土壌", "石灰岩で真っ白な土壌"], a: 3, e: "シェリーやモンティーリャの産地は、石灰岩で真っ白なアルバリサ土壌で知られます。" },
    { id: "093", q: "次の中からスペインのリオハの産地で、エブロ川上流の右岸と左岸に位置し全栽培面積の約50%を占めるところを選択してください。", c: ["リオハ・アラベサ", "リオハ・デマンダ", "リオハ・オリエンタル", "リオハ・アルタ"], a: 3, e: "Rioja Altaはエブロ川上流の右岸と左岸に位置し、全栽培面積の約50%を占めます。" },
    { id: "094", q: "下記の画像はスペインのワイン産地の地図です。地図上で11番の産地名をカタカナで入力してください。", t: "カスティーリャ・ラ・マンチャ", aliases: ["カスティーリャラマンチャ"], img: "spain", e: "地図上の11番はCastilla La Mancha、カタカナではカスティーリャ・ラ・マンチャです。" },
    { id: "095", q: "次の中からCavaの一つのカテゴリーで、単一収穫年のみなど厳格な規定があり、単一畑とは限らないが2025年現在18のエリアが認められているものを選択してください。", c: ["Cava de Origen Calificada", "Cava Gran Reserva", "Cava de Paraje Calificado", "Cava Extra Añejo"], a: 2, e: "Cava de Paraje Calificadoは厳格な規定を持つCavaのカテゴリーです。" },
    { id: "096", q: "次の中でスペインのDOまたはDOCa「ヘレス」が属する地方を選択してください。", c: ["南部地方", "北部地方", "地中海地方", "内陸部地方"], a: 0, e: "Jerezは南部地方に属します。" },
    { id: "097", q: "次の中からスペインのDOまたはDOCa Rías Baixasが属する州を選択してください。", c: ["Islas Canarias", "Galicia", "Castilla La Mancha", "Castilla y León"], a: 1, e: "Rías BaixasはGalicia州に属します。" },
    { id: "098", q: "次の中からスペインのCavaで使用が認められている外来品種を選択してください。", c: ["ピノ・ブラン", "ソーヴィニョン・ブラン", "シャルドネ", "ムニエ"], a: 2, e: "Cavaでは外来品種としてシャルドネの使用が認められています。" },
    { id: "099", q: "次の中からスペインで最大の産地カスティーリャ・ラ・マンチャ州の栽培面積が全体に占める割合を選択してください。", c: ["62%", "48%", "71%", "54%"], a: 1, e: "カスティーリャ・ラ・マンチャ州の栽培面積は、スペイン全体の約48%を占めます。" },
    { id: "100", q: "次の説明に合致するスペインのシェリーのタイプを選択してください。「フロールを消して酸化熟成させたタイプ。琥珀色からマホガニー色でやや甘く感じるが辛口である。」", c: ["Amontillado", "Fino", "Manzanilla", "Oloroso"], a: 3, e: "説明はOlorosoに合致します。" },
    { id: "101", q: "スペインでクリアンサと表記されたDOCa Riojaの熟成用の樽の容量を選択してください。", c: ["1050リットル", "225リットル", "600リットル", "330リットル"], a: 1, e: "DOCa RiojaのCrianzaでは225リットル樽が用いられます。" },
    { id: "102", q: "次の中でスペインのDOまたはDOCa「プリオラート」が属する地方を選択してください。", c: ["大西洋地方", "北部地方", "地中海地方", "南部地方"], a: 2, e: "Prioratoは地中海地方に属します。" },
    { id: "103", q: "次の中でスペインのDOまたはDOCa「リベラ・デル・ドゥエロ」が属する地方を選択してください。", c: ["北部地方", "地中海地方", "内陸部地方", "南部地方"], a: 2, e: "Ribera del Dueroは内陸部地方に属します。" },
    { id: "104", q: "次の中からスペインのリオハの産地で、他の地域に比べてガルナッチャの栽培が多くアルコール度数の高い赤・ロゼワインが造られているところを選択してください。", c: ["リオハ・アルタ", "リオハ・デマンダ", "リオハ・アラベサ", "リオハ・オリエンタル"], a: 3, e: "Rioja Orientalはガルナッチャの栽培が多く、アルコール度数の高い赤・ロゼワインが造られます。" },
    { id: "105", q: "次のスペインのDOまたはDOCaの中から、大西洋に面しているところを選択してください。", c: ["リアス・バイシャス", "リオハ", "ソモンターノ", "ラ・マンチャ"], a: 0, e: "Rías Baixasは大西洋に面した産地です。" },
    { id: "106", q: "次の中からスペインの産地リベラ・デル・ドゥエロにおけるテンプラニーリョの別名を選択してください。", c: ["ティンタ・デ・マドリッド", "ウル・デ・リェブレ", "ティント・フィノ", "アラゴネス"], a: 2, e: "Ribera del Dueroではテンプラニーリョはティント・フィノとも呼ばれます。" },
    { id: "107", q: "次の中からスペインの「Cava」のカタルーニャ語における意味を選択してください。", c: ["湧水", "洞窟", "塩味", "山麓"], a: 1, e: "Cavaはカタルーニャ語で洞窟を意味します。" }
  ].map((item) => {
    const base = {
      id: `spain-${item.id}`,
      category: "スペイン",
      importance: "A",
      question: item.q,
      explanation: item.e,
      ...(item.img === "spain" ? {
        image: {
          src: "assets/spain-wine-regions-map.jpg",
          alt: "スペインのワイン産地の地図",
          caption: "スペインのワイン産地"
        }
      } : {}),
      ...(item.img === "rioja" ? {
        image: {
          src: "assets/spain-rioja-map.jpg",
          alt: "スペイン、リオハのワイン産地の地図",
          caption: "リオハのワイン産地"
        }
      } : {})
    };
    if (item.t) {
      return {
        ...base,
        answerText: item.t,
        answerTextAliases: item.aliases || []
      };
    }
    return {
      ...base,
      choices: item.c,
      answerIndex: item.a
    };
  }),
  ...[
    { id: "001", q: "次の中から米国オレゴン州で最も冷涼な気候で、良質のピノ・ノワールを生産しているAVAを選択してください。", c: ["Oakville", "Lewis-Clark Valley", "Willamette Valley", "Puget Sound"], a: 2, e: "Willamette Valleyはオレゴン州を代表する冷涼なAVAで、ピノ・ノワールの産地として高く評価されています。" },
    { id: "002", q: "次の中から米国カリフォルニア州でSonoma Countyに属するAVAを選択してください。", c: ["Atlas Peak", "Spring Mountain District", "Petaluma Gap", "Mount Veeder"], a: 2, e: "Petaluma GapはSonoma Countyに属するAVAです。" },
    { id: "003", q: "次の中から米国ニューヨーク州で2019年1月に承認された新しいAVAを選択してください。", c: ["Upper Hudson", "Puget Sound", "Van Duzer Corridor", "Yamhill-Carlton District"], a: 0, e: "Upper Hudsonはニューヨーク州で2019年1月に承認されたAVAです。" },
    { id: "004", q: "次の中から米国のテーブルワインの規定アルコール度数を選択してください。", c: ["7%以上13%以下", "7%以上14%以下", "8%以上15%以下", "8%以上14%以下"], a: 1, e: "米国のテーブルワインは、アルコール度数7%以上14%以下と規定されています。" },
    { id: "005", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["1976年のパリ・テイスティングでは、ナパ・ヴァレーのワインが赤白ともに第1位となった。", "1976年のパリ・テイスティングを開催したのは、フランス人エミール・ペイノーである。", "19世紀初頭、ロシア人がカリフォルニア州ナパ・カウンティに最初のブドウを植えて入植した。", "ニューヨーク州では18世紀中頃オランダ人によってマンハッタン島に初めてブドウが植えられた。"], a: 0, e: "1976年のパリ・テイスティングでは、ナパ・ヴァレーのワインが赤白ともに第1位となりました。" },
    { id: "006", q: "次の中から米国ワシントン州で1850年代からブドウ栽培が始まったパイオニア的ワイナリーが多く存在する地区で、特にシラーが高い評価を受けているAVAを選択してください。", c: ["Columbia Valley", "Lewis-Clark Valley", "Walla Walla Valley", "Columbia Gorge"], a: 2, e: "Walla Walla Valleyはワシントン州の歴史ある産地で、シラーも高く評価されています。" },
    { id: "007", q: "次の中から米国カリフォルニア州で白ブドウの中で栽培面積が第1位の品種を選択してください。", c: ["フレンチ・コロンバール", "ピノ・グリ", "ソーヴィニョン・ブラン", "シャルドネ"], a: 3, e: "カリフォルニア州の白ブドウではシャルドネが栽培面積第1位です。" },
    { id: "008", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でSan Diegoに相当する番号を選択してください。", c: ["2番", "37番", "12番", "1番"], a: 1, img: "california", e: "地図上でSan Diegoに相当する番号は37番です。" },
    { id: "009", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["The Rocks District of Milton-Freewater", "Laurelwood District", "Red Hill Douglas County", "Rogue Valley"], a: 1, e: "Laurelwood DistrictはWillamette Valley AVAのサブリージョンです。" },
    { id: "010", q: "次の中から米国カリフォルニア州Napa Countyでヴァカ山脈側に位置するAVAを選択してください。", c: ["Spring Mountain District", "Diamond Mountain District", "Crystal Springs of Napa Valley", "Mount Veeder"], a: 2, e: "Crystal Springs of Napa ValleyはNapa Countyのヴァカ山脈側に位置します。" },
    { id: "011", q: "次の中から米国カリフォルニア州でSonoma Countyに属するAVAを選択してください。", c: ["Yountville", "Mount Veeder", "Calistoga", "Chalk Hill"], a: 3, e: "Chalk HillはSonoma Countyに属するAVAです。" },
    { id: "012", q: "次の中から米国ワシントン州とアイダホ州にまたがるAVAを選択してください。", c: ["Mount Veeder", "Finger Lakes", "Yakima Valley", "Lewis-Clark Valley"], a: 3, e: "Lewis-Clark Valleyはワシントン州とアイダホ州にまたがるAVAです。" },
    { id: "013", q: "下記の画像はアメリカ、ニューヨーク州のワイン産地の地図です。地図上でChamplain Valley of New Yorkに相当する番号を選択してください。", c: ["6番", "10番", "11番", "1番"], a: 2, img: "new-york", e: "Champlain Valley of New Yorkに相当する番号は11番です。" },
    { id: "014", q: "次の中から米国ワシントン州で最も生産量の多い白ブドウ品種を選択してください。", c: ["ピノ・グリ", "シャルドネ", "ソーヴィニョン・ブラン", "リースリング"], a: 3, e: "ワシントン州で最も生産量の多い白ブドウ品種はリースリングです。" },
    { id: "015", q: "次の中から米国ニューヨーク州に属するAVAを選択してください。", c: ["Puget Sound", "Oakville", "Hudson River Region", "Yakima Valley"], a: 2, e: "Hudson River Regionはニューヨーク州に属するAVAです。" },
    { id: "016", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上で2番のカウンティ名をカタカナで入力してください。", t: "ソノマ", img: "california", e: "地図上の2番はSonoma、カタカナではソノマです。" },
    { id: "017", q: "次の中から米国オレゴン州、Southern Oregon AVAのサブリージョンを選択してください。", c: ["Yamhill-Carlton District", "Mt.Pisgah, Polk County, Oregon", "Lower Long Tom", "Rogue Valley"], a: 3, e: "Rogue ValleyはSouthern Oregon AVAのサブリージョンです。" },
    { id: "018", q: "次の中から米国カリフォルニア州サザン・カリフォルニア地区で最も南に位置するカウンティを選択してください。", c: ["San Diego", "Marin", "Los Angeles", "Santa Barbara"], a: 0, e: "サザン・カリフォルニア地区で最も南に位置するカウンティはSan Diegoです。" },
    { id: "019", q: "次の中から米国の2023年の国内ワイン消費量順位を選択してください。", c: ["世界第1位", "世界第3位", "世界第4位", "世界第2位"], a: 0, e: "米国の2023年の国内ワイン消費量は世界第1位です。" },
    { id: "020", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["ニューヨーク州では18世紀中頃オランダ人によってマンハッタン島に初めてブドウが植えられた。", "マイクロソフト社の本拠地、任天堂のアメリカ本社はニューヨーク州にある。", "1976年のパリ・テイスティングを開催したのは、イギリス人スティーヴン・スパリアである。", "アメリカ合衆国誕生時、東部に自生していたブドウはヴィティス・ヴィニフェラ系がほとんどだった。"], a: 2, e: "1976年のパリ・テイスティングを開催したのは、イギリス人スティーヴン・スパリアです。" },
    { id: "021", q: "次の中から米国ヴァージニア州で最も生産量の多い黒ブドウ品種を選択してください。", c: ["カベルネ・フラン", "メルロ", "シラー", "ジンファンデル"], a: 0, e: "ヴァージニア州で最も生産量の多い黒ブドウ品種はカベルネ・フランです。" },
    { id: "022", q: "次の中から米国でワイン生産量が第4位の州を選択してください。", c: ["オレゴン州", "ヴァージニア州", "ニューヨーク州", "ワシントン州"], a: 0, e: "米国でワイン生産量が第4位の州はオレゴン州です。" },
    { id: "023", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["Rogue Valley", "The Rocks District of Milton-Freewater", "Red Hill Douglas County", "Yamhill-Carlton District"], a: 3, e: "Yamhill-Carlton DistrictはWillamette Valley AVAのサブリージョンです。" },
    { id: "024", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でFのワイン・リージョン名をカタカナで入力してください。", t: "サザン・カリフォルニア", img: "california", e: "地図上のFはSouthern California、カタカナではサザン・カリフォルニアです。" },
    { id: "025", q: "次の中から米国オレゴン州に属するAVAを選択してください。", c: ["Yakima Valley", "Puget Sound", "Walla Walla Valley", "Lewis-Clark Valley"], a: 2, e: "Walla Walla Valleyはオレゴン州にも属するAVAです。" },
    { id: "026", q: "次の中から米国カリフォルニア州セントラル・コースト地区に属するカウンティを選択してください。", c: ["Mendocino", "Lake", "Santa Cruz", "Los Angeles"], a: 2, e: "Santa Cruzはカリフォルニア州セントラル・コースト地区に属するカウンティです。" },
    { id: "027", q: "次の中から米国オレゴン州で、「AVA名」をラベルに表記する場合、該当するブドウの最低使用比率を選択してください。", c: ["100%", "95%", "85%", "75%"], a: 1, e: "オレゴン州でAVA名を表記する場合、該当するブドウを95%以上使用する必要があります。" },
    { id: "028", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上でCarneros/Los Carnerosに相当する番号を選択してください。", c: ["4番", "13番", "8番", "3番"], a: 1, img: "napa", e: "Carneros/Los Carnerosに相当する番号は13番です。" },
    { id: "029", q: "次の中から米国カリフォルニア州でNapa Countyに属するAVAを選択してください。", c: ["Mount Veeder", "Bennett Valley", "Fort Ross-Seaview", "Knights Valley"], a: 0, e: "Mount VeederはNapa Countyに属するAVAです。" },
    { id: "030", q: "次の中から米国カリフォルニア州ノース・コースト地区に属するカウンティを選択してください。", c: ["San Francisco", "San Benito", "Marin", "Los Angeles"], a: 2, e: "Marinはカリフォルニア州ノース・コースト地区に属するカウンティです。" },
    { id: "031", q: "下記の画像はアメリカ、ニューヨーク州のワイン産地の地図です。地図上でHudson River Regionに相当する番号を選択してください。", c: ["6番", "9番", "4番", "10番"], a: 2, img: "new-york", e: "Hudson River Regionに相当する番号は4番です。" },
    { id: "032", q: "次の中から米国カリフォルニア州のワイン産出カウンティを北から南の順序で正しく並べたものを選択してください。", c: ["Mendocino, Sonoma, Monterey, Santa Barbara", "Monterey, Sonoma, San Francisco, Santa Barbara", "San Francisco, Monterey, Sonoma, Santa Cruz", "Mendocino, San Francisco, Monterey, Santa Cruz"], a: 0, e: "北から南の順序はMendocino, Sonoma, Monterey, Santa Barbaraです。" },
    { id: "033", q: "次の中から米国でブドウ栽培面積が第3位の州を選択してください。", c: ["ワシントン州", "ヴァージニア州", "オレゴン州", "ニューヨーク州"], a: 2, e: "米国でブドウ栽培面積が第3位の州はオレゴン州です。" },
    { id: "034", q: "次の中からアメリカ合衆国が独立を宣言し誕生した年代を選択してください。", c: ["1833年", "1776年", "1249年", "1492年"], a: 1, e: "アメリカ合衆国は1776年に独立を宣言しました。" },
    { id: "035", q: "次の中から米国ニューヨーク州で穏やかな海洋性気候に恵まれたAVAを選択してください。", c: ["Long Island", "Willamette Valley", "Yamhill-Carlton District", "The Rocks District of Milton-Freewater"], a: 0, e: "Long Islandは穏やかな海洋性気候に恵まれたニューヨーク州のAVAです。" },
    { id: "036", q: "次の中から米国ワシントン州に属するAVAを選択してください。", c: ["Ancient Lakes of Columbia Valley", "Mount Veeder", "St. Helena", "Long Island"], a: 0, e: "Ancient Lakes of Columbia Valleyはワシントン州に属するAVAです。" },
    { id: "037", q: "次の中から2025年8月現在、米国カリフォルニア州に存在するAVAの数を選択してください。", c: ["154", "78", "147", "97"], a: 0, e: "2025年8月現在、カリフォルニア州には154のAVAがあります。" },
    { id: "038", q: "次の中から米国オレゴン州で、「州名」をラベルに表記する場合、該当するブドウの最低使用比率を選択してください。", c: ["75%", "100%", "85%", "95%"], a: 1, e: "オレゴン州で州名を表記する場合、該当するブドウを100%使用する必要があります。" },
    { id: "039", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["19世紀初頭、ロシア人がカリフォルニア州ナパ・カウンティに最初のブドウを植えて入植した。", "1934年にカリフォルニアで、ワイン生産者組合で組織される協会、ワイン・インスティテュートが設立された。", "ニューヨーク州では18世紀中頃オランダ人によってマンハッタン島に初めてブドウが植えられた。", "1976年のパリ・テイスティングでは、ナパ・ヴァレーのワインが赤は第1位、白は第2位に入った。"], a: 1, e: "1934年にカリフォルニアでワイン・インスティテュートが設立されました。" },
    { id: "040", q: "次の中から米国の州をワイン生産量の多い順に正しく並べたものを選択してください。", c: ["ニューヨーク州, ヴァージニア州, ワシントン州, オレゴン州", "ワシントン州, ヴァージニア州, オレゴン州, ニューヨーク州", "ヴァージニア州, ワシントン州, オレゴン州, ニューヨーク州", "ニューヨーク州, ワシントン州, オレゴン州, ヴァージニア州"], a: 3, e: "生産量の多い順は、ニューヨーク州、ワシントン州、オレゴン州、ヴァージニア州です。" },
    { id: "041", q: "次の中から米国カリフォルニア州で白ブドウの中で栽培面積が第3位の品種を選択してください。", c: ["シャルドネ", "ピノ・グリ", "フレンチ・コロンバール", "ソーヴィニョン・ブラン"], a: 1, e: "カリフォルニア州で白ブドウ栽培面積第3位の品種はピノ・グリです。" },
    { id: "042", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でAのワイン・リージョン名をカタカナで入力してください。", t: "ファー・ノース・カリフォルニア", aliases: ["ファーノースカリフォルニア"], img: "california", e: "地図上のAはFar North California、カタカナではファー・ノース・カリフォルニアです。" },
    { id: "043", q: "次の中から米国ワシントン州で最初に認可されたAVAを選択してください。", c: ["Yakima Valley", "Puget Sound", "Columbia Valley", "Willamette Valley"], a: 0, e: "ワシントン州で最初に認可されたAVAはYakima Valleyです。" },
    { id: "044", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でNorth Coastに相当する記号を選択してください。", c: ["F", "B", "A", "E"], a: 1, img: "california", e: "North Coastに相当する記号はBです。" },
    { id: "045", q: "次の中から米国カリフォルニア州で、ナパ・ヴァレー西端にある山を選択してください。", c: ["マヤカマス山脈", "ヴァカ山脈", "カスケード山脈", "セント・ヘレナ山"], a: 0, e: "ナパ・ヴァレー西端にある山はマヤカマス山脈です。" },
    { id: "046", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でFar North Californiaに相当する記号を選択してください。", c: ["D", "C", "A", "B"], a: 2, img: "california", e: "Far North Californiaに相当する記号はAです。" },
    { id: "047", q: "次の中から米国カリフォルニア州、Lodi AVAを歴史的にも代表する品種を選択してください。", c: ["シラー", "フレンチ・コロンバール", "カベルネ・ソーヴィニョン", "ジンファンデル"], a: 3, e: "Lodi AVAは歴史的にもジンファンデルを代表品種とする産地です。" },
    { id: "048", q: "下記の画像はアメリカ、ニューヨーク州のワイン産地の地図です。地図上で1番のA.V.A名をカタカナで入力してください。", t: "ロング・アイランド", aliases: ["ロングアイランド"], img: "new-york", e: "地図上の1番はLong Island、カタカナではロング・アイランドです。" },
    { id: "049", q: "次の中から米国ヴァージニア州北部、ワシントンDCの西約80kmに位置するAVAを選択してください。", c: ["Middleburg Virginia", "Long Island", "Monticello", "Rogue Valley"], a: 0, e: "Middleburg VirginiaはワシントンDCの西約80kmに位置するAVAです。" },
    { id: "050", q: "次の中から米国ワシントン州に属するAVAを選択してください。", c: ["Yamhill-Carlton District", "Puget Sound", "Dundee Hills", "Niagara Escarpment"], a: 1, e: "Puget Soundはワシントン州に属するAVAです。" },
    { id: "051", q: "次の中から米国カリフォルニア州セントラル・コースト地区に属するカウンティを選択してください。", c: ["Lake", "San Benito", "Los Angeles", "Sonoma"], a: 1, e: "San Benitoはセントラル・コースト地区に属するカウンティです。" },
    { id: "052", q: "次の中から米国カリフォルニア州セントラル・コースト地区で最も南に位置するカウンティを選択してください。", c: ["San Luis Obispo", "San Benito", "Monterey", "Santa Barbara"], a: 3, e: "セントラル・コースト地区で最も南に位置するのはSanta Barbaraです。" },
    { id: "053", q: "次の中から米国（オレゴン州を除く）で、「品種名」をラベルに表記する場合、該当するブドウの最低使用比率を選択してください。", c: ["75%", "100%", "95%", "85%"], a: 0, e: "米国では、オレゴン州を除き品種名を表記する場合は原則75%以上の使用が必要です。" },
    { id: "054", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["1976年のパリ・テイスティングでは、ナパ・ヴァレーのワインが赤は第1位、白は第2位に入った。", "19世紀初頭、ロシア人がカリフォルニア州ナパ・カウンティに最初のブドウを植えて入植した。", "マイクロソフト社の本拠地、任天堂のアメリカ本社はニューヨーク州にある。", "ワシントン州には現在1000軒を超えるワイナリーがある。"], a: 3, e: "ワシントン州には現在1000軒を超えるワイナリーがあります。" },
    { id: "055", q: "次の中から米国カリフォルニア州でNapa Countyに属するAVAを選択してください。", c: ["Knights Valley", "Petaluma Gap", "Chalk Hill", "Diamond Mountain District"], a: 3, e: "Diamond Mountain DistrictはNapa Countyに属するAVAです。" },
    { id: "056", q: "次の中から米国オレゴン州、コロンビア・ヴァレー流域で初の、オレゴン側に100%含まれる新設されたAVAを選択してください。", c: ["Yakima Valley", "The Rocks District of Milton-Freewater", "Oakville", "Finger Lakes"], a: 1, e: "The Rocks District of Milton-Freewaterはオレゴン側に100%含まれるAVAです。" },
    { id: "057", q: "次の中から米国でワイン生産量が第2位の州を選択してください。", c: ["ニューヨーク州", "オレゴン州", "ヴァージニア州", "ワシントン州"], a: 0, e: "米国でワイン生産量が第2位の州はニューヨーク州です。" },
    { id: "058", q: "次の中から米国オレゴン州、Southern Oregon AVAのサブリージョンを選択してください。", c: ["Mt.Pisgah, Polk County, Oregon", "Red Hill Douglas County", "Tualatin Hills", "The Rocks District of Milton-Freewater"], a: 1, e: "Red Hill Douglas CountyはSouthern Oregon AVAのサブリージョンです。" },
    { id: "059", q: "次の中から長い間、米国のジンファンデルと同じであると見なされていた品種を選択してください。", c: ["カリニャン", "ネロ・ダヴォラ", "プリミティーヴォ", "ルビー・カベルネ"], a: 2, e: "プリミティーヴォは長い間、米国のジンファンデルと同じ品種と見なされていました。" },
    { id: "060", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でSierra Foothillsに相当する記号を選択してください。", c: ["B", "D", "C", "A"], a: 1, img: "california", e: "Sierra Foothillsに相当する記号はDです。" },
    { id: "061", q: "次の中から米国カリフォルニア州Napa Countyでヴァカ山脈側に位置するAVAを選択してください。", c: ["Diamond Mountain District", "Howell Mountain", "Mount Veeder", "Spring Mountain District"], a: 1, e: "Howell MountainはNapa Countyのヴァカ山脈側に位置するAVAです。" },
    { id: "062", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["The Rocks District of Milton-Freewater", "Red Hill Douglas County", "Rogue Valley", "Eola-Amity Hills"], a: 3, e: "Eola-Amity HillsはWillamette Valley AVAのサブリージョンです。" },
    { id: "063", q: "次の中から米国カリフォルニア州のブドウ品種の中で栽培面積が第2位のものを選択してください。", c: ["ジンファンデル", "カベルネ・ソーヴィニョン", "シャルドネ", "ピノ・ノワール"], a: 2, e: "カリフォルニア州のブドウ品種で栽培面積第2位はシャルドネです。" },
    { id: "064", q: "次の中からクリストファー・コロンブスがアメリカ大陸を発見した年代を選択してください。", c: ["1492年", "1776年", "1903年", "1249年"], a: 0, e: "クリストファー・コロンブスがアメリカ大陸に到達したのは1492年です。" },
    { id: "065", q: "次の中から米国カリフォルニア州でSonoma Countyに属するAVAを選択してください。", c: ["Atlas Peak", "Alexander Valley", "Diamond Mountain District", "Yountville"], a: 1, e: "Alexander ValleyはSonoma Countyに属するAVAです。" },
    { id: "066", q: "次の中から米国ワシントン州のYakima Valley AVAのサブ・アペレーションを選択してください。", c: ["Columbia Gorge", "Ancient Lakes of Columbia Valley", "Puget Sound", "Candy Mountain"], a: 3, e: "Candy MountainはYakima Valley AVAのサブ・アペレーションです。" },
    { id: "067", q: "次の中から米国カリフォルニア州セントラル・コースト地区に属するカウンティを選択してください。", c: ["Napa", "Marin", "Santa Barbara", "Sonoma"], a: 2, e: "Santa Barbaraはセントラル・コースト地区に属するカウンティです。" },
    { id: "068", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でInland Valleysに相当する記号を選択してください。", c: ["F", "B", "E", "D"], a: 2, img: "california", e: "Inland Valleysに相当する記号はEです。" },
    { id: "069", q: "次の中から米国カリフォルニア州サザン・カリフォルニア地区に属するカウンティを選択してください。", c: ["San Diego", "Santa Cruz", "Marin", "Monterey"], a: 0, e: "San Diegoはサザン・カリフォルニア地区に属するカウンティです。" },
    { id: "070", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上でCalistogaに相当する番号を選択してください。", c: ["8番", "4番", "3番", "2番"], a: 2, img: "napa", e: "Calistogaに相当する番号は3番です。" },
    { id: "071", q: "次の中から米国カリフォルニア州でNapa County, Sonoma County両方に属するAVAを選択してください。", c: ["Spring Mountain District", "Carneros/Los Carneros", "Chiles Valley", "Oakville"], a: 1, e: "Carneros/Los CarnerosはNapa CountyとSonoma Countyの両方に属するAVAです。" },
    { id: "072", q: "次の中から米国ニューヨーク州のFinger Lakes AVAのサブ・アペレーションの数を選択してください。", c: ["7", "5", "11", "2"], a: 3, e: "Finger Lakes AVAには2つのサブ・アペレーションがあります。" },
    { id: "073", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でDのワイン・リージョン名をカタカナで入力してください。", t: "シエラ・フットヒルズ", aliases: ["シエラフットヒルズ"], img: "california", e: "地図上のDはSierra Foothills、カタカナではシエラ・フットヒルズです。" },
    { id: "074", q: "次の中から米国オレゴン州に属するAVAを選択してください。", c: ["Oakville", "Coombsville", "Finger Lakes", "Columbia Valley"], a: 3, e: "Columbia Valleyはオレゴン州にもまたがるAVAです。" },
    { id: "075", q: "次の中から米国ワシントン州に属するAVAを選択してください。", c: ["Willamette Valley", "Yamhill-Carlton District", "Yakima Valley", "Dundee Hills"], a: 2, e: "Yakima Valleyはワシントン州に属するAVAです。" },
    { id: "076", q: "次の中から米国ヴァージニア州の気候に影響を与え、同州の南東部を温暖にしている海流を選択してください。", c: ["ベンゲラ海流", "北大西洋海流", "北太平洋海流", "アガラス海流"], a: 1, e: "北大西洋海流はヴァージニア州南東部を温暖にする要因です。" },
    { id: "077", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["1934年にカリフォルニアで、ワイン生産者組合で組織される協会、ワイン・アカデミーが設立された。", "ニューヨーク州では18世紀中頃オランダ人によってマンハッタン島に初めてブドウが植えられた。", "マイクロソフト社の本拠地、任天堂のアメリカ本社はワシントン州にある。", "ワシントン州には現在約120軒のワイナリーがある。"], a: 2, e: "マイクロソフト社の本拠地と任天堂のアメリカ本社はワシントン州にあります。" },
    { id: "078", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["Red Hill Douglas County", "McMinnville", "Rogue Valley", "The Rocks District of Milton-Freewater"], a: 1, e: "McMinnvilleはWillamette Valley AVAのサブリージョンです。" },
    { id: "079", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上でHowell Mountainに相当する番号を選択してください。", c: ["8番", "4番", "3番", "2番"], a: 3, img: "napa", e: "Howell Mountainに相当する番号は2番です。" },
    { id: "080", q: "次の中から米国ニューヨーク州に属するAVAを選択してください。", c: ["Dundee Hills", "Willamette Valley", "Upper Hudson", "Lewis-Clark Valley"], a: 2, e: "Upper Hudsonはニューヨーク州に属するAVAです。" },
    { id: "081", q: "次の中から米国ワシントン州に属するAVAを選択してください。", c: ["Lewis-Clark Valley", "Long Island", "Oakville", "Dundee Hills"], a: 0, e: "Lewis-Clark Valleyはワシントン州にも属するAVAです。" },
    { id: "082", q: "次の中から米国カリフォルニア州でSonoma Countyに属するAVAを選択してください。", c: ["Stags Leap District", "Howell Mountain", "Russian River Valley", "Rutherford"], a: 2, e: "Russian River ValleyはSonoma Countyに属するAVAです。" },
    { id: "083", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上でOakvilleに相当する番号を選択してください。", c: ["3番", "8番", "13番", "2番"], a: 1, img: "napa", e: "Oakvilleに相当する番号は8番です。" },
    { id: "084", q: "次の中から米国カリフォルニア州で、Napa CountyとSonoma Countyの間にある山を選択してください。", c: ["セント・ヘレナ山", "マヤカマス山脈", "ヴァカ山脈", "カスケード山脈"], a: 1, e: "Napa CountyとSonoma Countyの間にある山はマヤカマス山脈です。" },
    { id: "085", q: "次の中から米国カリフォルニア州Napa Countyでヴァカ山脈側に位置するAVAを選択してください。", c: ["Diamond Mountain District", "Spring Mountain District", "Wild Horse Valley", "Mount Veeder"], a: 2, e: "Wild Horse ValleyはNapa Countyのヴァカ山脈側に位置するAVAです。" },
    { id: "086", q: "次の中から米国のワイン法におけるAVAの意味を選択してください。", c: ["原産地名称保護", "地理的表示保護", "ブドウ栽培地域", "高品質ワイン基準"], a: 2, e: "AVAはAmerican Viticultural Areaの略で、ブドウ栽培地域を意味します。" },
    { id: "087", q: "次の中から米国ワシントン州で最も生産量の多い黒ブドウ品種を選択してください。", c: ["シラー", "カベルネ・ソーヴィニョン", "ピノ・ノワール", "メルロ"], a: 1, e: "ワシントン州で最も生産量の多い黒ブドウ品種はカベルネ・ソーヴィニョンです。" },
    { id: "088", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上で3番のA.V.A名をカタカナで入力してください。", t: "カリストガ", aliases: ["カリストガAVA", "カリストガ・AVA"], img: "napa", e: "地図上の3番はCalistoga、カタカナではカリストガです。" },
    { id: "089", q: "次の中から米国カリフォルニア州で、ナパ・ヴァレー北端にある山を選択してください。", c: ["カスケード山脈", "マヤカマス山脈", "ヴァカ山脈", "セント・ヘレナ山"], a: 3, e: "ナパ・ヴァレー北端にある山はセント・ヘレナ山です。" },
    { id: "090", q: "次の中から米国カリフォルニア州でNapa Countyに属するAVAを選択してください。", c: ["Russian River Valley", "Fort Ross-Seaview", "Chalk Hill", "Calistoga"], a: 3, e: "CalistogaはNapa Countyに属するAVAです。" },
    { id: "091", q: "次の中から米国でアペレーションの規定を含む現在のワイン法の原形が形成された年代を選択してください。", c: ["1949年", "1978年", "1953年", "1971年"], a: 1, e: "米国で現在のワイン法の原形が形成されたのは1978年です。" },
    { id: "092", q: "下記の画像はアメリカ、ニューヨーク州のワイン産地の地図です。地図上でLong Islandに相当する番号を選択してください。", c: ["10番", "9番", "1番", "4番"], a: 2, img: "new-york", e: "Long Islandに相当する番号は1番です。" },
    { id: "093", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["Tualatin Hills", "Red Hill Douglas County", "Rogue Valley", "The Rocks District of Milton-Freewater"], a: 0, e: "Tualatin HillsはWillamette Valley AVAのサブリージョンです。" },
    { id: "094", q: "次の中から米国カリフォルニア州のNapa Valley AVAのサブ・リージョンの数を選択してください。", c: ["14", "19", "11", "17"], a: 3, e: "Napa Valley AVAのサブ・リージョンの数は17です。" },
    { id: "095", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でSanta Cruzに相当する番号を選択してください。", c: ["37番", "1番", "2番", "12番"], a: 3, img: "california", e: "Santa Cruzに相当する番号は12番です。" },
    { id: "096", q: "次の中から米国でRobert M. Parker Jr.が発行する独自のワインニュースレターを選択してください。", c: ["Wine Advocate", "Wine Enthusiast", "Wine Spectator", "Decanter"], a: 0, e: "Robert M. Parker Jr.が発行する独自のワインニュースレターはWine Advocateです。" },
    { id: "097", q: "次の中から米国カリフォルニア州でSonoma Countyに属するAVAを選択してください。", c: ["Mount Veeder", "St. Helena", "Rockpile", "Atlas Peak"], a: 2, e: "RockpileはSonoma Countyに属するAVAです。" },
    { id: "098", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上で1番のカウンティ名をカタカナで入力してください。", t: "メンドシーノ", aliases: ["メンドチーノ", "メンドシノ"], img: "california", e: "地図上の1番はMendocino、カタカナではメンドシーノです。" },
    { id: "099", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でSouthern Californiaに相当する記号を選択してください。", c: ["B", "A", "F", "E"], a: 2, img: "california", e: "Southern Californiaに相当する記号はFです。" },
    { id: "100", q: "次の中から米国カリフォルニア州で、Napa CountyとSolano Countyの間にある山を選択してください。", c: ["カスケード山脈", "ヴァカ山脈", "セント・ヘレナ山", "マヤカマス山脈"], a: 1, e: "Napa CountyとSolano Countyの間にある山はヴァカ山脈です。" },
    { id: "101", q: "次の中から米国ニューヨーク州でマンハッタン近郊に位置するAVAを選択してください。", c: ["Van Duzer Corridor", "Oakville", "Long Island", "Rogue Valley"], a: 2, e: "マンハッタン近郊に位置するニューヨーク州のAVAはLong Islandです。" },
    { id: "102", q: "次の中から米国ワシントン州のYakima Valley AVAのサブ・アペレーションの数を選択してください。", c: ["3", "9", "5", "11"], a: 2, e: "Yakima Valley AVAのサブ・アペレーションの数は5です。" },
    { id: "103", q: "次の中から米国オレゴン州に属するAVAを選択してください。", c: ["Long Island", "Oakville", "Yamhill-Carlton District", "Yakima Valley"], a: 2, e: "Yamhill-Carlton Districtはオレゴン州に属するAVAです。" },
    { id: "104", q: "次の中から米国カリフォルニア州で白ブドウの中で栽培面積が第2位の品種を選択してください。", c: ["フレンチ・コロンバール", "ソーヴィニョン・ブラン", "シャルドネ", "ピノ・グリ"], a: 1, e: "カリフォルニア州で白ブドウの中で栽培面積が第2位の品種はソーヴィニョン・ブランです。" },
    { id: "105", q: "次の中から米国オレゴン州に属するAVAを選択してください。", c: ["Coombsville", "Rogue Valley", "Lewis-Clark Valley", "Puget Sound"], a: 1, e: "Rogue Valleyはオレゴン州に属するAVAです。" },
    { id: "106", q: "次の中から米国ワシントン州で唯一、カスケード山脈の西側にあるAVAを選択してください。", c: ["Puget Sound", "Lewis-Clark Valley", "Columbia Valley", "Willamette Valley"], a: 0, e: "ワシントン州で唯一、カスケード山脈の西側にあるAVAはPuget Soundです。" },
    { id: "107", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上で12番のカウンティ名をカタカナで入力してください。", t: "サンタ・クルーズ", aliases: ["サンタクルーズ"], img: "california", e: "地図上の12番はSanta Cruz、カタカナではサンタ・クルーズです。" },
    { id: "108", q: "次の中から米国カリフォルニア州のブドウ品種の中で栽培面積が第3位のものを選択してください。", c: ["シャルドネ", "ジンファンデル", "カベルネ・ソーヴィニョン", "ピノ・ノワール"], a: 3, e: "カリフォルニア州のブドウ品種で栽培面積が第3位のものはピノ・ノワールです。" },
    { id: "109", q: "次の中から米国カリフォルニア州ノース・コースト地区に属するカウンティを選択してください。", c: ["San Francisco", "San Luis Obispo", "Napa", "Santa Cruz"], a: 2, e: "Napaはノース・コースト地区に属するカウンティです。" },
    { id: "110", q: "次の中から米国において、ワインの製造方法を規定し品質管理を担っている組織の略称を選択してください。", c: ["DAC", "TTB", "VQA", "AVA"], a: 1, e: "米国でワインの製造方法を規定し品質管理を担う組織はTTBです。" },
    { id: "111", q: "次の米国に関する記述の中から正しいものを選択してください。", c: ["1976年のパリ・テイスティングでは、ナパ・ヴァレーのワインが赤は第1位、白は第2位に入った。", "ニューヨーク州には現在約140軒のワイナリーがある。", "ワシントン州コロンビア・ヴァレーの7〜8月の平均気温はボルドーより高い。", "19世紀初頭、ロシア人がカリフォルニア州ナパ・カウンティに最初のブドウを植えて入植した。"], a: 2, e: "正しい記述は、ワシントン州コロンビア・ヴァレーの7〜8月の平均気温はボルドーより高い、です。" },
    { id: "112", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上でBのワイン・リージョン名をカタカナで入力してください。", t: "ノース・コースト", aliases: ["ノースコースト"], img: "california", e: "地図上のBはNorth Coast、カタカナではノース・コーストです。" },
    { id: "113", q: "次の中から米国ワシントン州に属するAVAを選択してください。", c: ["Columbia Gorge", "Niagara Escarpment", "St. Helena", "Howell Mountain"], a: 0, e: "Columbia Gorgeはワシントン州に属するAVAです。" },
    { id: "114", q: "次の中から2025年8月現在の米国オレゴン州のAVAの数を選択してください。", c: ["21", "28", "23", "14"], a: 2, e: "2025年8月現在のオレゴン州のAVAの数は23です。" },
    { id: "115", q: "次の中から米国カリフォルニア州セントラル・コースト地区に属するカウンティを選択してください。", c: ["Mendocino", "Napa", "Contra Costa", "Marin"], a: 2, e: "Contra Costaはセントラル・コースト地区に属するカウンティです。" },
    { id: "116", q: "次の中から米国オレゴン州、Willamette Valley AVAのサブリージョンを選択してください。", c: ["Ribbon Ridge", "The Rocks District of Milton-Freewater", "Rogue Valley", "Red Hill Douglas County"], a: 0, e: "Ribbon RidgeはWillamette Valley AVAのサブリージョンです。" },
    { id: "117", q: "下記の画像はアメリカ、ナパ・ヴァレーのワイン産地の地図です。地図上で8番のA.V.A名をカタカナで入力してください。", t: "オークヴィル", aliases: ["オークビル"], img: "napa", e: "地図上の8番はOakville、カタカナではオークヴィルです。" },
    { id: "118", q: "次の中から米国カリフォルニア州でNapa Countyに属するAVAを選択してください。", c: ["Stags Leap District", "Knights Valley", "Rockpile", "Alexander Valley"], a: 0, e: "Stags Leap DistrictはNapa Countyに属するAVAです。" },
    { id: "119", q: "下記の画像はアメリカ、カリフォルニア州のワイン産地の地図です。地図上で3番のカウンティ名をカタカナで入力してください。", t: "ナパ", aliases: ["ナパ・カウンティ", "ナパカウンティ"], img: "california", e: "地図上の3番はNapa、カタカナではナパです。" },
    { id: "120", q: "次の中から米国ヴァージニア州で最も生産量の多い白ブドウ品種を選択してください。", c: ["ソーヴィニョン・ブラン", "シャルドネ", "ヴィオニエ", "ピノ・グリ"], a: 1, e: "ヴァージニア州で最も生産量の多い白ブドウ品種はシャルドネです。" },
    { id: "121", q: "次の中から米国カリフォルニア州Napa Countyでヴァカ山脈側に位置するAVAを選択してください。", c: ["Mount Veeder", "Atlas Peak", "Spring Mountain District", "Diamond Mountain District"], a: 1, e: "Atlas PeakはNapa Countyのヴァカ山脈側に位置するAVAです。" },
    { id: "122", q: "次の中から米国オレゴン州に属するAVAを選択してください。", c: ["Yakima Valley", "Coombsville", "Dundee Hills", "Long Island"], a: 2, e: "Dundee Hillsはオレゴン州に属するAVAです。" }
  ].map((item) => {
    const imageMap = {
      california: {
        src: "assets/usa-california-map.jpg",
        alt: "アメリカ、カリフォルニア州のワイン産地の地図",
        caption: "カリフォルニア州のワイン産地"
      },
      "new-york": {
        src: "assets/usa-new-york-map.jpg",
        alt: "アメリカ、ニューヨーク州のワイン産地の地図",
        caption: "ニューヨーク州のワイン産地"
      },
      napa: {
        src: "assets/usa-napa-map.jpg",
        alt: "アメリカ、ナパ・ヴァレーのワイン産地の地図",
        caption: "ナパ・ヴァレーのワイン産地"
      }
    };
    const base = {
      id: `usa-${item.id}`,
      category: "アメリカ",
      importance: "A",
      question: item.q,
      explanation: item.e,
      ...(item.img ? { image: imageMap[item.img] } : {})
    };
    if (item.t) {
      return {
        ...base,
        answerText: item.t,
        answerTextAliases: item.aliases || []
      };
    }
    return {
      ...base,
      choices: item.c,
      answerIndex: item.a
    };
  })
];
