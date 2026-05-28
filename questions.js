/*
  問題データはこのファイルで管理します。
  アプリ画面には問題追加機能やJSON入力欄を置かず、開発者がここを編集します。

  id: 一意のID
  category: 分野名
  importance: "A" | "B" | "C"
  question: 問題文
  choices: 4択の選択肢
  answerIndex: 正解の番号。0が1つ目、1が2つ目
  explanation: 回答後に表示する解説
*/
window.WINE_QUESTIONS = [
  {
    id: "france-bordeaux-001",
    category: "フランス",
    importance: "A",
    question: "ボルドー地方の左岸で、カベルネ・ソーヴィニヨン主体になりやすい代表的な地区はどれですか。",
    choices: ["サンテミリオン", "ポムロール", "メドック", "ソーテルヌ"],
    answerIndex: 2,
    explanation: "メドックを中心とする左岸は砂利質土壌が多く、晩熟のカベルネ・ソーヴィニヨンに適します。右岸のサンテミリオンやポムロールはメルロ主体になりやすい地区です。"
  },
  {
    id: "france-burgundy-001",
    category: "フランス",
    importance: "A",
    question: "ブルゴーニュ地方の赤ワインで主要品種として最も重要なものはどれですか。",
    choices: ["シラー", "ピノ・ノワール", "ガメイ", "カベルネ・フラン"],
    answerIndex: 1,
    explanation: "ブルゴーニュの高品質赤ワインではピノ・ノワールが中心です。ガメイは主にボージョレ地区で重要です。"
  },
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
    id: "italy-tuscany-001",
    category: "イタリア",
    importance: "A",
    question: "キャンティ・クラッシコの主要品種はどれですか。",
    choices: ["ネッビオーロ", "サンジョヴェーゼ", "バルベーラ", "アリアニコ"],
    answerIndex: 1,
    explanation: "キャンティ・クラッシコはトスカーナ州の代表的なDOCGで、主要品種はサンジョヴェーゼです。"
  },
  {
    id: "spain-rioja-001",
    category: "スペイン",
    importance: "B",
    question: "リオハの赤ワインで中心的な黒ブドウ品種はどれですか。",
    choices: ["テンプラニーリョ", "モナストレル", "ガルナッチャ・ブランカ", "メンシア"],
    answerIndex: 0,
    explanation: "リオハの赤ワインではテンプラニーリョが中心です。熟成表示やアメリカンオークのニュアンスも頻出ポイントです。"
  },
  {
    id: "germany-pradikat-001",
    category: "ドイツ",
    importance: "A",
    question: "ドイツのPrädikatsweinで、Kabinettより糖度の高い格付けはどれですか。",
    choices: ["Tafelwein", "Spätlese", "Landwein", "Deutscher Wein"],
    answerIndex: 1,
    explanation: "Prädikatsweinの肩書きでは、一般にKabinettの次にSpätleseが位置します。収穫時の果汁糖度による分類です。"
  },
  {
    id: "viticulture-001",
    category: "栽培",
    importance: "B",
    question: "ブドウ樹の光合成に直接必要な要素として適切な組み合わせはどれですか。",
    choices: ["酸素・窒素・アルコール", "二酸化炭素・水・光", "糖・酵母・熱", "酒石酸・乳酸・酸素"],
    answerIndex: 1,
    explanation: "光合成では光エネルギーを使い、二酸化炭素と水から糖を作ります。ブドウの成熟理解に関わる基本事項です。"
  },
  {
    id: "vinification-001",
    category: "醸造",
    importance: "A",
    question: "赤ワイン醸造で果皮から色素やタンニンを抽出する工程に最も関係が深いものはどれですか。",
    choices: ["デゴルジュマン", "マセラシオン", "シャプタリザシオン", "フロール"],
    answerIndex: 1,
    explanation: "マセラシオンは果皮や種子を果汁・ワインに接触させて、色素・タンニン・香味成分を抽出する工程です。"
  },
  {
    id: "service-001",
    category: "サービス",
    importance: "C",
    question: "スパークリングワインを開栓する際の基本として最も適切なものはどれですか。",
    choices: ["瓶口を人に向けて勢いよく抜く", "コルクではなく瓶をゆっくり回す", "十分に温めてから開ける", "ワイヤーを外したら強く振る"],
    answerIndex: 1,
    explanation: "安全で静かな開栓のため、コルクを押さえながら瓶側をゆっくり回します。瓶口を人に向けないことも重要です。"
  },
  {
    id: "japan-001",
    category: "日本",
    importance: "B",
    question: "日本固有の白ブドウ品種としてよく知られ、山梨県と関係が深いものはどれですか。",
    choices: ["甲州", "マスカット・ベーリーA", "ピノタージュ", "ヴィオニエ"],
    answerIndex: 0,
    explanation: "甲州は日本を代表する白ブドウ品種で、山梨県との関係が深い品種です。マスカット・ベーリーAは黒ブドウ品種です。"
  },
  {
    id: "australia-001",
    category: "新世界",
    importance: "C",
    question: "オーストラリアのバロッサ・ヴァレーで特に重要な黒ブドウ品種はどれですか。",
    choices: ["シラーズ", "ネッビオーロ", "サンジョヴェーゼ", "ガメイ"],
    answerIndex: 0,
    explanation: "バロッサ・ヴァレーはオーストラリアを代表する産地の一つで、凝縮感のあるシラーズで知られます。"
  }
];
