const chaveD = `[
{
"index": 0,
"propA": "Prop 0A",
"pathA": 1,
"propB": "Prop 0B",
"pathB": 1
},
{
"index": 1,
"propA": "Ovário ínfero",
"pathA": 2,
"propB": "Ovário súpero",
"pathB": 30
},
{
"index": 2,
"propA": "Ovário unilocular",
"pathA": 3,
"propB": "Ovário bi-plurilocular",
"pathB": 14
},
{
"index": 3,
"propA": "Flores dispostas em capítulos",
"pathA": "Asteraceae (Compositae)",
"propB": "Flores solitárias ou dispostas em outros tipos de inflorescência",
"pathB": 4
},
{
"index": 4,
"propA": "Flores zigomorfas",
"pathA": "Cactaceae",
"propB": "Flores actinomorfas",
"pathB": 5
},
{
"index": 5,
"propA": "Óvulos com placentação central-livre",
"pathA": "Portulacaceae",
"propB": "Óvulos com placentação pêndula, ereta ou parietal",
"pathB": 6
},
{
"index": 6,
"propA": "Óvulos com placentação pêndula",
"pathA": 7,
"propB": "Óvulos com placentação ereta ou parietal",
"pathB": 12
},
{
"index": 7,
"propA": "Gineceu unicarpelar",
"pathA": 8,
"propB": "Gineceu 2-5-carpelar",
"pathB": 10
},
{
"index": 8,
"propA": "Folhas compostas",
"pathA": "Rosaceae",
"propB": "Folhas simples",
"pathB": 9
},
{
"index": 9,
"propA": "Folhas geralmente peninérveas; inflorescência racemosa",
"pathA": "Combretaceae",
"propB": "Folhas geralmente palminérveas; inflorescência cimosa",
"pathB": "Hernandiaceae"
},
{
"index": 10,
"propA": "Plantas lenhosas",
"pathA": "Combretaceae",
"propB": "Plantas herbáceas ou subarbustivas",
"pathB": 11
},
{
"index": 11,
"propA": "Plantas hemiparasitas",
"pathA": "Santalaceae",
"propB": "Plantas não hemiparasitas",
"pathB": "Gunneraceae"
},
{
"index": 12,
"propA": "Sépalas numerosas; folhas geralmente transformadas em espinhos",
"pathA": "Cactaceae",
"propB": "Sépalas 2-6; folhas não transformadas em espinhos",
"pathB": 13
},
{
"index": 13,
"propA": "Flor 4-6-mera",
"pathA": "Portulacaceae",
"propB": "Flor 1-3-mera",
"pathB": "Hydrocharitaceae"
},
{
"index": 14,
"propA": "Plantas com estípulas interpeciolares",
"pathA": "Rubiaceae",
"propB": "Plantas sem estípulas ou com estípulas não interpeciolares",
"pathB": 15
},
{
"index": 15,
"propA": "Flores zigomorfas",
"pathA": "Aristolochiaceae",
"propB": "Flores actinomorfas",
"pathB": 16
},
{
"index": 16,
"propA": "Estames em número igual ou duplo ao das sépalas",
"pathA": 17,
"propB": "Estames numerosos",
"pathB": 26
},
{
"index": 17,
"propA": "Flores 2-3-meras",
"pathA": 18,
"propB": "Flores 4-8-meras",
"pathB": 19
},
{
"index": 18,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": "Haloragaceae",
"propB": "Lóculos do ovário pluriovulados",
"pathB": "Aizoaceae"
},
{
"index": 19,
"propA": "Óvulos com placentação pêndula",
"pathA": 20,
"propB": "Óvulos com placentação axial ou ereta",
"pathB": 25
},
{
"index": 20,
"propA": "Estames 3, 4 ou 8",
"pathA": "Haloragaceae",
"propB": "Estames 5",
"pathB": 21
},
{
"index": 21,
"propA": "Plantas lenhosas",
"pathA": "Araliaceae",
"propB": "Plantas herbáceas",
"pathB": 22
},
{
"index": 22,
"propA": "Folhas compostas ou sectas",
"pathA": "Apiaceae (Umbelliferae)",
"propB": "Folhas simples, inteiras",
"pathB": 23
},
{
"index": 23,
"propA": "Flores sésseis, dispostas em glomérulos ou capítulos",
"pathA": "Apiaceae (Umbelliferae)",
"propB": "Flores pediceladas, dispostas em umbelas",
"pathB": 24
},
{
"index": 24,
"propA": "Brácteas ausentes ou inconspicuas",
"pathA": "Araliaceae",
"propB": "Brácteas conspicuas dispostas na base da umbela",
"pathB": "Apiaceae (Umbelliferae)"
},
{
"index": 25,
"propA": "Óvulos com placentação axial",
"pathA": "Aizoaceae",
"propB": "Óvulos com placentação ereta",
"pathB": "Rhamnaceae"
},
{
"index": 26,
"propA": "Plantas com estípulas",
"pathA": "Lecythidaceae",
"propB": "Plantas sem estípulas ou com estas rudimentares",
"pathB": 27
},
{
"index": 27,
"propA": "Plantas herbáceas, suculentas",
"pathA": "Aizoaceae",
"propB": "Plantas lenhosas ou lianas",
"pathB": 28
},
{
"index": 28,
"propA": "Lianas",
"pathA": "Phytolaccaceae",
"propB": "Arbustos ou árvores",
"pathB": 29
},
{
"index": 29,
"propA": "Folhas com pontuações translúcidas; fruto cápsula ou baga",
"pathA": "Myrtaceae",
"propB": "Folhas sem pontuações translúcidas; fruto lenhoso, do tipo pixídio",
"pathB": "Lecythidaceae"
},
{
"index": 30,
"propA": "Flor com dois ou mais pistilos",
"pathA": 31,
"propB": "Flor com um único pistilo",
"pathB": 37
},
{
"index": 31,
"propA": "Plantas com estípulas",
"pathA": 32,
"propB": "Plantas sem estípulas",
"pathB": 33
},
{
"index": 32,
"propA": "Estípulas laterais",
"pathA": "Rosaceae",
"propB": "Estípulas terminais",
"pathB": "Magnoliaceae"
},
{
"index": 33,
"propA": "Ervas aquáticas submersas",
"pathA": "Potamogetonaceae",
"propB": "Plantas terrestres",
"pathB": 34
},
{
"index": 34,
"propA": "Lianas; folhas opostas",
"pathA": "Ranunculaceae",
"propB": "Plantas eretas; folhas alternas",
"pathB": 35
},
{
"index": 35,
"propA": "Ervas; folhas compostas ou simples e, neste caso, lobadas ou sectas",
"pathA": "Ranunculaceae",
"propB": "Ervas, arbustos ou árvores; folhas simples, inteiras",
"pathB": 36
},
{
"index": 36,
"propA": "Gineceu com mais de cinco carpelos",
"pathA": "Phytolaccaceae",
"propB": "Gineceu pentacarpelar",
"pathB": "Surianaceae"
},
{
"index": 37,
"propA": "Ovário unilocular",
"pathA": 38,
"propB": "Ovário bi-plurilocular",
"pathB": 79
},
{
"index": 38,
"propA": "Ovário bi-pluriovulado",
"pathA": 39,
"propB": "Ovário com um único óvulo",
"pathB": 61
},
{
"index": 39,
"propA": "Plantas com discos adesivos, ocorrentes no leito rochoso de rios encachoeirados",
"pathA": "Podostemaceae",
"propB": "Plantas sem discos adesivos, geralmente com outros tipos de habitats",
"pathB": 40
},
{
"index": 53,
"propA": "Folhas simples",
"pathA": "Proteaceae",
"propB": "Folhas compostas unifolioladas",
"pathB": "Fabaceae (Leguminosae)"
},
{
"index": 40,
"propA": "Inflorescência do tipo espádice",
"pathA": "Araceae",
"propB": "Inflorescência de outros tipos",
"pathB": 41
},
{
"index": 41,
"propA": "Folhas compostas bi-plurifolioladas ou pinatissectas",
"pathA": 42,
"propB": "Folhas simples, não pinatissectas, ou compostas unifolioladas",
"pathB": 45
},
{
"index": 42,
"propA": "Gineceu bi-pluricarpelar",
"pathA": "Rosaceae",
"propB": "Gineceu unicarpelar",
"pathB": 43
},
{
"index": 43,
"propA": "Plantas sem estípula",
"pathA": "Proteaceae",
"propB": "Plantas com estípulas",
"pathB": 44
},
{
"index": 44,
"propA": "Estames 8-12",
"pathA": "Fabaceae (Leguminosae)",
"propB": "Estames 3-5",
"pathB": "Rosaceae"
},
{
"index": 45,
"propA": "Óvulos com placentação central-livre",
"pathA": 46,
"propB": "Óvulos com placentação ereta, marginal, pêndula ou parietal",
"pathB": 49
},
{
"index": 46,
"propA": "Flores hipóginas",
"pathA": 47,
"propB": "Flores períginas",
"pathB": 48
},
{
"index": 47,
"propA": "Folhas carnosas, alternas a opostas na mesma planta",
"pathA": "Talinaceae",
"propB": "Folhas não carnosas; todas opostas",
"pathB": "Caryophyllaceae"
},
{
"index": 48,
"propA": "Folhas alternas",
"pathA": "Chrysobalanaceae",
"propB": "Folhas opostas ou verticiladas",
"pathB": "Lythraceae"
},
{
"index": 49,
"propA": "Óvulos com placentação parietal ou marginal",
"pathA": 50,
"propB": "Óvulos com placentação ereta ou pêndula",
"pathB": 57
},
{
"index": 50,
"propA": "Sépalas numerosas",
"pathA": "Cactaceae",
"propB": "Sépalas 1-12",
"pathB": 51
},
{
"index": 51,
"propA": "Plantas carnívoras",
"pathA": "Sarraceniaceae",
"propB": "Plantas não carnívoras",
"pathB": 52
},
{
"index": 52,
"propA": "Gineceu unicarpelar",
"pathA": 53,
"propB": "Gineceu 2-18-carpelar",
"pathB": 54
},
{
"index": 54,
"propA": "Estames 1",
"pathA": "Lacistemataceae",
"propB": "Estames 3-numerosos",
"pathB": 55
},
{
"index": 55,
"propA": "Plantas geralmente trepadeiras, flores geralmente com androginóforo",
"pathA": "Passifloraceae",
"propB": "Plantas eretas; flores sem androginóforo",
"pathB": 56
},
{
"index": 56,
"propA": "Plantas lenhosas",
"pathA": "Salicaceae",
"propB": "Plantas herbáceas",
"pathB": "Papaveraceae (na realidade diclamídeas com cálice cedo caduco)"
},
{
"index": 57,
"propA": "Óvulos com placentação ereta",
"pathA": 58,
"propB": "Óvulos com placentação pêndula",
"pathB": 59
},
{
"index": 58,
"propA": "Flores escariosas; gineceu bicarpelar",
"pathA": "Amaranthaceae",
"propB": "Flores não escariosas; gineceu tricarpelar",
"pathB": "Talinaceae"
},
{
"index": 59,
"propA": "Estames 4-5",
"pathA": "Estames 10-numerosos",
"propB": "Proteaceae",
"pathB": 60
},
{
"index": 60,
"propA": "Plantas com estípulas intrapeciolares; cálice com prefloração imbricada",
"pathA": "Peridiscaceae",
"propB": "Plantas com estípulas laterais; cálice com prefloração valvar",
"pathB": "Elaeocarpaceae"
},
{
"index": 61,
"propA": "Inflorescência do tipo espádice",
"pathA": "Araceae",
"propB": "Inflorescência de outros tipos",
"pathB": 62
},
{
"index": 62,
"propA": "Plantas com estípulas, às vezes transformadas em ócrea ou em espinhos",
"pathA": 63,
"propB": "Plantas sem estípulas",
"pathB": 71
},
{
"index": 63,
"propA": "Plantas com ócrea",
"pathA": "Polygonaceae",
"propB": "Plantas sem ócrea",
"pathB": 64
},
{
"index": 64,
"propA": "Estames 1-9",
"pathA": 65,
"propB": "Estames 10-numerosos",
"pathB": 69
},
{
"index": 65,
"propA": "Folhas compostas",
"pathA": "Rosaceae",
"propB": "Folhas simples",
"pathB": 66
},
{
"index": 66,
"propA": "Óvulo com placentação pêndula",
"pathA": 67,
"propB": "Óvulo com placentação ereta",
"pathB": 68
},
{
"index": 67,
"propA": "Um dos estigmas muito menor do que o outro; fruto sâmara",
"pathA": "Ulmaceae",
"propB": "Estigmas do mesmo tamanho; fruto drupa",
"pathB": "Cannabaceae"
},
{
"index": 68,
"propA": "Flores bissexuadas",
"pathA": "Microteaceae",
"propB": "Flores unissexuadas",
"pathB": "Urticaceae"
},
{
"index": 69,
"propA": "Folhas compostas",
"pathA": "Fabaceae (Leguminosae)",
"propB": "Folhas simples",
"pathB": 70
},
{
"index": 70,
"propA": "Óvulo com placentação ereta",
"pathA": "Petiveriaceae",
"propB": "Óvulo com placentação parietal ou pêndula",
"pathB": "Elaeocarpaceae"
},
{
"index": 71,
"propA": "Folhas uninérveas",
"pathA": "Amaranthaceae",
"propB": "Folhas peninérveas",
"pathB": 72
},
{
"index": 72,
"propA": "Plantas com látex",
"pathA": "Calophyllaceae",
"propB": "Plantas sem látex",
"pathB": 73
},
{
"index": 73,
"propA": "Óvulo com placentação pêndula",
"pathA": 74,
"propB": "Óvulo com placentação ereta ou parietal",
"pathB": 75
},
{
"index": 74,
"propA": "Estames em número igual ao das sépalas",
"pathA": "Opiliaceae (na realidade diclamídeas)",
"propB": "Estames em número duplo ou mais que o dobro das sépalas",
"pathB": "Thymelaeaceae"
},
{
"index": 75,
"propA": "Cálice escarioso, não petaloide",
"pathA": "Amaranthaceae",
"propB": "Cálice não escarioso, petaloide",
"pathB": 76
},
{
"index": 76,
"propA": "Gineceu tricarpelar",
"pathA": "Basellaceae",
"propB": "Gineceu unicarpelar ou bicarpelar",
"pathB": 77
},
{
"index": 77,
"propA": "Gineceu bicarpelar",
"pathA": "Microteaceae",
"propB": "Gineceu unicarpelar",
"pathB": 78
},
{
"index": 78,
"propA": "Cálice dialissépalo",
"pathA": "Petiveriaceae",
"propB": "Cálice gamossépalo",
"pathB": "Nyctaginaceae"
},
{
"index": 79,
"propA": "Inflorescência do tipo espádice",
"pathA": 80,
"propB": "Inflorescência de outros tipo",
"pathB": 81
},
{
"index": 80,
"propA": "Ervas; espádice simples",
"pathA": "Araceae",
"propB": "Palmeiras (geralmente lenhosas); espádice composto",
"pathB": "Arecaceae (Palmae)"
},
{
"index": 81,
"propA": "Plantas ocorrentes no leito rochoso de rios encachoeirados",
"pathA": "Podostemaceae",
"propB": "Plantas cultivadas ou com outros tipos de habitats",
"pathB": 82
},
{
"index": 82,
"propA": "Estame 1",
"pathA": 83,
"propB": "Estames 2-numerosos",
"pathB": 84
},
{
"index": 83,
"propA": "Plantas lenhosas",
"pathA": "Vochysiaceae",
"propB": "Plantas herbáceas",
"pathB": "Lythraceae"
},
{
"index": 84,
"propA": "Sépalas 3",
"pathA": 85,
"propB": "Sépalas mais de 3",
"pathB": 86
},
{
"index": 85,
"propA": "Plantas com estípulas",
"pathA": "Elaeocarpaceae",
"propB": "Plantas sem estípulas",
"pathB": "Picramniaceae"
},
{
"index": 86,
"propA": "Lóculos do ovário uni-biovulados",
"pathA": 87,
"propB": "Lóculos do ovário tri-pluriovulados",
"pathB": 96
},
{
"index": 87,
"propA": "Folhas simples ou compostas unifolioladas",
"pathA": 88,
"propB": "Folhas compostas",
"pathB": 93
},
{
"index": 88,
"propA": "Lóculos do ovário biovulados",
"pathA": 89,
"propB": "Lóculos do ovário com um único óvulo",
"pathB": 91
},
{
"index": 89,
"propA": "Plantas com estípulas",
"pathA": "Malvaceae",
"propB": "Plantas sem estípulas",
"pathB": 90
},
{
"index": 90,
"propA": "Fruto baga",
"pathA": "Picramniaceae",
"propB": "Fruto seco, alado",
"pathB": "Sapindaceae"
},
{
"index": 91,
"propA": "Carpelos 4-numerosos",
"pathA": "Phytolaccaceae",
"propB": "Carpelos 2-3",
"pathB": 92
},
{
"index": 92,
"propA": "Óvulo com placentação pêndula",
"pathA": "Ulmaceae",
"propB": "Óvulo com placentação ereta",
"pathB": "Rhamnaceae"
},
{
"index": 93,
"propA": "Folhas opostas",
"pathA": 94,
"propB": "Folhas alternas",
"pathB": 95
},
{
"index": 94,
"propA": "Estames 2",
"pathA": "Oleaceae",
"propB": "Estames 4-10",
"pathB": "Sapindaceae"
},
{
"index": 95,
"propA": "Estames 3-6",
"pathA": "Picramniaceae",
"propB": "Estames 7-8",
"pathB": "Sapindaceae"
},
{
"index": 96,
"propA": "Plantas herbáceas",
"pathA": 97,
"propB": "Plantas lenhosas",
"pathB": 101
},
{
"index": 97,
"propA": "Plantas suculentas",
"pathA": "Aizoaceae",
"propB": "Plantas não suculentas",
"pathB": 98
},
{
"index": 98,
"propA": "Folhas alternas",
"pathA": "Molluginaceae",
"propB": "Folhas opostas ou verticiladas",
"pathB": 99
},
{
"index": 99,
"propA": "Flores períginas",
"pathA": "Lythraceae",
"propB": "Flores hipóginas",
"pathB": 100
},
{
"index": 100,
"propA": "Flores actinomorfas",
"pathA": "Molluginaceae",
"propB": "Flores zigomorfas",
"pathB": "Acanthaceae"
},
{
"index": 101,
"propA": "Folhas opostas",
"pathA": "Cunoniaceae",
"propB": "Folhas alternas",
"pathB": 102
},
{
"index": 102,
"propA": "Estames unidos entre si",
"pathA": "Malvaceae",
"propB": "Estames livres",
"pathB": "Elaeocarpaceae"
}
]`;
