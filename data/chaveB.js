const chaveB = `[
{
"index": 0,
"propA": "Prop 0A",
"pathA": 1,
"propB": "Prop 0B",
"pathB": 1
},
{
"index": 1,
"propA": "Folhas opostas ou verticiladas",
"pathA": 2,
"propB": "Folhas alternas ou ausentes",
"pathB": 8
},
{
"index": 2,
"propA": "Folhas escamiformes",
"pathA": "Casuarinaceae",
"propB": "Folhas não escamiformes",
"pathB": 3
},
{
"index": 3,
"propA": "Gineceu unicarpelar",
"pathA": 4,
"propB": "Gineceu bi-pluricarpelar",
"pathB": 5
},
{
"index": 4,
"propA": "Folhas serreadas, concrescidas em um mesmo nó por uma ócrea formada pelas estípulas",
"pathA": "Chloranthaceae",
"propB": "Folhas inteiras ou, se serreadas, não concrescidas",
"pathB": "Piperaceae"
},
{
"index": 5,
"propA": "Ovário unilocular",
"pathA": "Piperaceae",
"propB": "Ovário bi-tetralocular",
"pathB": 6
},
{
"index": 6,
"propA": "Plantas em geral com látex; ovário trilocular; fruto geralmente com deiscência explosiva (tricoca)",
"pathA": "Euphorbiaceae",
"propB": "Plantas sem látex; ovário tetralocular pelo desenvolvimento de um falso septo; fruto indeiscente ou com deiscência não explosiva",
"pathB": 7
},
{
"index": 7,
"propA": "Flores solitárias",
"pathA": "Plantaginaceae",
"propB": "Flores dispostas em espigas ou glomérulos",
"pathB": "Bataceae"
},
{
"index": 8,
"propA": "Plantas afilas, aclorofiladas",
"pathA": "Balanophoraceae",
"propB": "Plantas com folhas, às vezes reduzidas a escamas, clorofiladas",
"pathB": 9
},
{
"index": 9,
"propA": "Plantas aquáticas flutuantes ou submersas por quase todo o ciclo de vida, às vezes exceto pela inflorescência",
"pathA": 10,
"propB": "Plantas terrestres ou, se aquáticas, não flutuantes nem submersas",
"pathB": 15
},
{
"index": 10,
"propA": "Plantas flutuantes",
"pathA": "Araceae",
"propB": "Plantas submersas",
"pathB": 11
},
{
"index": 11,
"propA": "Plantas com discos adesivos, ocorrentes no leito rochoso de rios encachoeirados",
"pathA": "Podostemaceae",
"propB": "Plantas sem discos adesivos, geralmente com outros tipos de habitats",
"pathB": 12
},
{
"index": 12,
"propA": "Inflorescência cimosa ou flores solitárias",
"pathA": "Cymodoceaceae",
"propB": "Inflorescência espiciforme",
"pathB": 13
},
{
"index": 13,
"propA": "Folhas alternas dísticas",
"pathA": "Ruppiaceae",
"propB": "Folhas alternas espiraladas",
"pathB": 14
},
{
"index": 14,
"propA": "Gineceu dialicarpelar",
"pathA": "Potamogetonaceae",
"propB": "Gineceu gamocarpelar",
"pathB": "Cyperaceae"
},
{
"index": 15,
"propA": "Inflorescência do tipo espádice",
"pathA": 16,
"propB": "Inflorescência de outros tipos",
"pathB": 19
},
{
"index": 16,
"propA": "Gineceu 2-9-carpelar",
"pathA": 17,
"propB": "Gineceu 10-pluricarpelar",
"pathB": 18
},
{
"index": 17,
"propA": "Espata única; estames (1-) 4-8 (-12), livres ou unidos entre si; gineceu 2-3(-pluri)-carpelar",
"pathA": "Araceae",
"propB": "Espata única ou diversas; estames 6-numerosos, unidos entre si; gineceu 4-carpelar",
"pathB": "Cyclanthaceae"
},
{
"index": 18,
"propA": "Plantas lenhosas",
"pathA": "Pandanaceae",
"propB": "Plantas herbáceas",
"pathB": "Araceae"
},
{
"index": 19,
"propA": "Folhas com bainha",
"pathA": 20,
"propB": "Folhas sem bainha.",
"pathB": 24
},
{
"index": 20,
"propA": "Flores dispostas em espiguetas",
"pathA": 21,
"propB": "Flores dispostas em espigas ou racemos",
"pathB": 22
},
{
"index": 21,
"propA": "Caule geralmente de seção triangular; folhas alternas espiraladas, com bainha geralmente fechada; fruto aquênio",
"pathA": "Cyperaceae",
"propB": "Caule geralmente de seção circular ou achatado; folhas alternas dísticas ou muito raramente espiraladas, com bainha geralmente aberta; fruto cariopse",
"pathB": "Poaceae (Gramineae)"
},
{
"index": 22,
"propA": "Gineceu 10-pluricarpelar",
"pathA": "Pandanaceae",
"propB": "Gineceu 1-3-carpelar",
"pathB": 23
},
{
"index": 23,
"propA": "Gineceu unicarpelar",
"pathA": "Juncaginaceae",
"propB": "Gineceu tricarpelar",
"pathB": "Typhaceae"
},
{
"index": 24,
"propA": "Plantas hemiparasitas, com folhas escamiformes",
"pathA": "Balanophoraceae",
"propB": "Plantas autótrofas, com folhas geralmente não escamiformes",
"pathB": 25
},
{
"index": 25,
"propA": "Ovário 2-3(-pluri)-locular",
"pathA": 26,
"propB": "Ovário unilocular, raramente falsamente plurilocular pelo desenvolvimento das placentas",
"pathB": 30
},
{
"index": 26,
"propA": "Gineceu tricarpelar",
"pathA": 27,
"propB": "Gineceu bicarpelar",
"pathB": 29
},
{
"index": 27,
"propA": "Plantas com látex",
"pathA": "Euphorbiaceae",
"propB": "Plantas sem látex",
"pathB": 28
},
{
"index": 28,
"propA": "Plantas sem estípulas ou com estas inconspícuas",
"pathA": "Peraceae",
"propB": "Plantas com estípulas",
"pathB": "Euphorbiaceae"
},
{
"index": 29,
"propA": "Flores dispostas em amentilhos; óvulos com placentação pêndula",
"pathA": "Betulaceae",
"propB": "Flores dispostas em glomérulos; óvulos com placentação axial",
"pathB": "Altingiaceae"
},
{
"index": 30,
"propA": "Folhas compostas",
"pathA": "Juglandaceae",
"propB": "Folhas simples",
"pathB": 31
},
{
"index": 31,
"propA": "Ovário com dois a muitos óvulos",
"pathA": "Salicaceae",
"propB": "Ovário com um único óvulo",
"pathB": 32
},
{
"index": 32,
"propA": "Inflorescências opostas às folhas",
"pathA": "Piperaceae",
"propB": "Inflorescências terminais ou axilares",
"pathB": 33
},
{
"index": 33,
"propA": "Óvulos com placentação ereta",
"pathA": "Piperaceae",
"propB": "Óvulos com placentação pêndula",
"pathB": "Moraceae"
}
]`;
