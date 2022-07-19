const chaveC = `[
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
"propB": "Folhas alternas ou plantas afilas",
"pathB": 34
},
{
"index": 2,
"propA": "Ovário ínfero",
"pathA": 3,
"propB": "Ovário súpero",
"pathB": 7
},
{
"index": 3,
"propA": "Ovário unilocular",
"pathA": 4,
"propB": "Ovário 2-5-locular",
"pathB": 6
},
{
"index": 4,
"propA": "Flores dispostas em inflorescências do tipo capítulo",
"pathA": "Asteraceae (Compositae)",
"propB": "Flores solitárias ou dispostas em outros tipos de inflorescência",
"pathB": 5
},
{
"index": 5,
"propA": "Plantas autótrofas; ovário com um único óvulo",
"pathA": "Chloranthaceae",
"propB": "Plantas hemiparasitas; ovário com dois a muitos óvulos",
"pathB": "Santalaceae"
},
{
"index": 6,
"propA": "Plantas com estípulas interpeciolares",
"pathA": "Rubiaceae",
"propB": "Plantas sem estípulas interpeciolares",
"pathB": "Haloragaceae"
},
{
"index": 7,
"propA": "Ervas aquáticas; inteiramente submersas; folhas verticiladas, multipartidas",
"pathA": "Ceratophyllaceae",
"propB": "Plantas não aquáticas submersas; folhas opostas, não multipartidas",
"pathB": 8
},
{
"index": 8,
"propA": "Estames em número igual ou maior ao das sépalas",
"pathA": 9,
"propB": "Estames em número menor do que as sépalas",
"pathB": 31
},
{
"index": 9,
"propA": "Folhas simples",
"pathA": 10,
"propB": "Folhas compostas",
"pathB": 29
},
{
"index": 10,
"propA": "Flor com único pistilo",
"pathA": 11,
"propB": "Flor com dois ou mais pistilos",
"pathB": 27
},
{
"index": 11,
"propA": "Ovário unilocular (às vezes por aborto)",
"pathA": 12,
"propB": "Ovário bi-plurilocular",
"pathB": 22
},
{
"index": 12,
"propA": "Gineceu unicarpelar (ou com dois carpelos, mas um deles extremamente reduzido)",
"pathA": 13,
"propB": "Gineceu bi-pluricarpelar",
"pathB": 16
},
{
"index": 13,
"propA": "Óvulo com placentação pêndula ou axial",
"pathA": "Monimiaceae",
"propB": "Óvulo com placentação ereta",
"pathB": 14
},
{
"index": 14,
"propA": "Plantas com estípulas",
"pathA": "Urticaceae",
"propB": "Plantas sem estípulas",
"pathB": 15
},
{
"index": 15,
"propA": "Cálice dialissépalo",
"pathA": "Calophyllaceae",
"propB": "Cálice gamossépalo",
"pathB": "Nyctaginaceae"
},
{
"index": 16,
"propA": "Ovário com dois a muitos óvulos",
"pathA": "Rubiaceae",
"propB": "Ovário com um único óvulo",
"pathB": 17
},
{
"index": 17,
"propA": "Óvulo com placentação ereta",
"pathA": 18,
"propB": "Óvulo com placentação pêndula",
"pathB": 19
},
{
"index": 18,
"propA": "Ervas",
"pathA": "Amaranthaceae",
"propB": "Arbustos ou árvores",
"pathB": "Calophyllaceae"
},
{
"index": 19,
"propA": "Folhas palmilobadas",
"pathA": 20,
"propB": "Folhas não lobadas",
"pathB": 21
},
{
"index": 20,
"propA": "Ervas; flores dispostas em glomérulos, espigas ou panículas",
"pathA": "Cannabaceae",
"propB": "Árvores; flores dispostas em sicônios",
"pathB": "Moraceae"
},
{
"index": 21,
"propA": "Plantas com látex",
"pathA": "Moraceae",
"propB": "Plantas sem látex",
"pathB": "Thymelaeaceae"
},
{
"index": 22,
"propA": "Lóculos com um único óvulo",
"pathA": 23,
"propB": "Lóculos com dois a muitos óvulos",
"pathB": 25
},
{
"index": 23,
"propA": "Óvulos com placentação ereta ou pêndula",
"pathA": "Moraceae",
"propB": "Óvulos com placentação parietal ou axial",
"pathB": 24
},
{
"index": 24,
"propA": "Gineceu tricarpelar, raramente bicarpelar; carpelos com um único óvulo",
"pathA": "Euphorbiaceae",
"propB": "Gineceu bicarpelar; óvulos 2 por carpelo",
"pathB": "Bataceae"
},
{
"index": 25,
"propA": "Ovário trilocular",
"pathA": "Buxaceae",
"propB": "Ovário bilocular ou tetralocular pelo desenvolvimento de falso septo",
"pathB": 26
},
{
"index": 26,
"propA": "Folhas compostas ou simples e palminérveas; fruto samarídeo",
"pathA": "Sapindaceae",
"propB": "Folhas simples, enérveas ou uninérveas; fruto drupa",
"pathB": "Bataceae"
},
{
"index": 27,
"propA": "Óvulos com placentação ereta",
"pathA": "Siparunaceae",
"propB": "Óvulos com placentação pêndula",
"pathB": 28
},
{
"index": 28,
"propA": "Plantas geralmente arbustivas ou arbóreas; frutículos carnosos",
"pathA": "Monimiaceae",
"propB": "Lianas ou ervas; frutículos secos, plumosos",
"pathB": "Ranunculaceae"
},
{
"index": 29,
"propA": "Flor com dois ou mais pistilos",
"pathA": "Ranunculaceae",
"propB": "Flor com único pistilo",
"pathB": 30
},
{
"index": 30,
"propA": "Ervas",
"pathA": "Cannabaceae",
"propB": "Arbustos ou árvores",
"pathB": "Sapindaceae"
},
{
"index": 31,
"propA": "Folhas compostas",
"pathA": "Oleaceae",
"propB": "Folhas simples",
"pathB": 32
},
{
"index": 32,
"propA": "Flor com dois ou mais pistilos",
"pathA": "Siparunaceae",
"propB": "Flor com um único pistilo",
"pathB": 33
},
{
"index": 33,
"propA": "Plantas com látex; folhas opostas, não escamiformes",
"pathA": "Moraceae",
"propB": "Plantas sem látex; folhas verticiladas, escamiformes",
"pathB": "Casuarinaceae"
},
{
"index": 34,
"propA": "Plantas aclorofiladas, holoparasitas ou saprófitas",
"pathA": 35,
"propB": "Plantas clorofiladas, autótrofas, hemiparasitas ou carnívoras",
"pathB": 38
},
{
"index": 35,
"propA": "Flores dispostas em inflorescências capituliformes ou estrobiliformes",
"pathA": "Balanophoraceae",
"propB": "Flores isoladas ou dispostas em racemos",
"pathB": 36
},
{
"index": 36,
"propA": "Plantas endoparasitas (apenas as flores ficam expostas)",
"pathA": "Apodanthaceae",
"propB": "Plantas saprófitas",
"pathB": 37
},
{
"index": 37,
"propA": "Flores solitárias",
"pathA": "Aristolochiaceae",
"propB": "Flores dispostas em racemos",
"pathB": "Triuridaceae"
},
{
"index": 38,
"propA": "Ovário ínfero",
"pathA": 39,
"propB": "Ovário súpero",
"pathB": 52
},
{
"index": 39,
"propA": "Gineceu unicarpelar",
"pathA": "Hernandiaceae",
"propB": "Gineceu bi-pluricarpelar",
"pathB": 40
},
{
"index": 40,
"propA": "Plantas hemiparasitas",
"pathA": "Santalaceae",
"propB": "Plantas não hemiparasitas",
"pathB": 41
},
{
"index": 41,
"propA": "Ovário unilocular",
"pathA": 42,
"propB": "Ovário bi-plurilocular, ao menos na região mediana do ovário",
"pathB": 49
},
{
"index": 42,
"propA": "Ovário com um único óvulo",
"pathA": 43,
"propB": "Ovário bi-pluriovulado",
"pathB": 47
},
{
"index": 43,
"propA": "Flores dispostas em capítulos",
"pathA": "Asteraceae (Compositae)",
"propB": "Flores dispostas em inflorescências de outros tipos",
"pathB": 44
},
{
"index": 44,
"propA": "Folhas compostas",
"pathA": "Juglandaceae",
"propB": "Folhas simples",
"pathB": 45
},
{
"index": 45,
"propA": "Plantas com látex",
"pathA": "Moraceae",
"propB": "Plantas sem látex",
"pathB": 46
},
{
"index": 46,
"propA": "Ervas",
"pathA": "Gunneraceae",
"propB": "Plantas lenhosas",
"pathB": "Moraceae"
},
{
"index": 47,
"propA": "Sépalas numerosas; folhas geralmente transformadas em espinhos",
"pathA": "Cactaceae",
"propB": "Sépalas 2-9; folhas não transformadas em espinhos",
"pathB": 48
},
{
"index": 48,
"propA": "Óvulos com placentação pêndula",
"pathA": "Combretaceae",
"propB": "Óvulos com placentação parietal",
"pathB": "Hydrocharitaceae"
},
{
"index": 49,
"propA": "Lóculos do ovário com dois a muitos óvulos",
"pathA": 50,
"propB": "Lóculos do ovário com um único óvulo",
"pathB": 51
},
{
"index": 50,
"propA": "Plantas herbáceas",
"pathA": "Begoniaceae",
"propB": "Plantas lenhosas",
"pathB": "Fagaceae"
},
{
"index": 51,
"propA": "Ervas",
"pathA": "Haloragaceae",
"propB": "Arbustos, árvores ou lianas",
"pathB": "Griseliniaceae"
},
{
"index": 52,
"propA": "Flor com dois ou mais pistilos",
"pathA": 53,
"propB": "Flor com um único pistilo",
"pathB": 55
},
{
"index": 53,
"propA": "Sépalas 6-numerosas",
"pathA": "Menispermaceae",
"propB": "Sépalas 1-5",
"pathB": 54
},
{
"index": 54,
"propA": "Cálice pentâmero",
"pathA": "Phytolaccaceae",
"propB": "Cálice 1-4-mero",
"pathB": "Potamogetonaceae"
},
{
"index": 55,
"propA": "Gineceu bi-pluricarpelar",
"pathA": 56,
"propB": "Gineceu unicarpelar (ou bicarpelar com um dos carpelos extremamente reduzido",
"pathB": 93
},
{
"index": 56,
"propA": "Ovário unilocular ou com um carpelo fértil e os demais estéreis",
"pathA": 57,
"propB": "Ovário bi-plurilocular",
"pathB": 75
},
{
"index": 57,
"propA": "Inflorescência do tipo espádice",
"pathA": 58,
"propB": "Inflorescência de outros tipos",
"pathB": 59
},
{
"index": 58,
"propA": "Ovário pluriovulado",
"pathA": "Cyclanthaceae",
"propB": "Ovário com um único óvulo",
"pathB": "Arecaceae (Palmae)"
},
{
"index": 59,
"propA": "Ovário com um único óvulo",
"pathA": 60,
"propB": "Ovário bi-pluriovulado",
"pathB": 73
},
{
"index": 60,
"propA": "Folhas com bainha",
"pathA": 61,
"propB": "Folhas sem bainha",
"pathB": 62
},
{
"index": 61,
"propA": "Folhas alternas dísticas; flores dispostas em espigas; ovulo com placentação pêndula",
"pathA": "Typhaceae",
"propB": "Folhas alternas espiraladas; flores dispostas em espiguetas; ovulo com placentação ereta",
"pathB": "Cyperaceae"
},
{
"index": 62,
"propA": "Óvulos com placentação ereta",
"pathA": 63,
"propB": "Óvulos com placentação pêndula ou parietal",
"pathB": 67
},
{
"index": 63,
"propA": "Folhas com ócrea",
"pathA": "Polygonaceae",
"propB": "Folhas sem ócrea",
"pathB": 64
},
{
"index": 64,
"propA": "Estames em número maior do que as sépalas",
"pathA": "Achatocarpaceae",
"propB": "Estames em número igual ou menor do que as sépalas",
"pathB": 65
},
{
"index": 65,
"propA": "Estípulas presentes",
"pathA": "Urticaceae",
"propB": "Estípulas ausentes",
"pathB": 66
},
{
"index": 66,
"propA": "Flores escariosas",
"pathA": "Amaranthaceae",
"propB": "Flores não escariosas",
"pathB": "Opiliaceae (na realidade diclamídeas)"
},
{
"index": 67,
"propA": "Flores períginas",
"pathA": "Thymelaeaceae",
"propB": "Flores hipóginas",
"pathB": 68
},
{
"index": 68,
"propA": "Plantas com látex",
"pathA": "Moraceae",
"propB": "Plantas sem látex",
"pathB": 69
},
{
"index": 69,
"propA": "Estames em número maior que o das sépalas",
"pathA": "Ulmaceae",
"propB": "Estames em número igual ou inferior ao das sépalas",
"pathB": 70
},
{
"index": 70,
"propA": "Um dos estigmas muito menor do que o outro",
"pathA": "Ulmaceae",
"propB": "Estigmas do mesmo tamanho",
"pathB": 71
},
{
"index": 71,
"propA": "Flores pentâmeras",
"pathA": "Cannabaceae",
"propB": "Flores tetrâmeras",
"pathB": 72
},
{
"index": 72,
"propA": "Frutos isolados",
"pathA": "Cannabaceae",
"propB": "Frutos formando um sincarpo",
"pathB": "Moraceae"
},
{
"index": 73,
"propA": "Placentação ereta ou pêndula",
"pathA": "Amaranthaceae",
"propB": "Placentação central-livre ou parietal",
"pathB": 74
},
{
"index": 74,
"propA": "Flores com um estame",
"pathA": "Lacistemataceae",
"propB": "Flores com mais de um estame",
"pathB": "Salicaceae"
},
{
"index": 75,
"propA": "Inflorescência do tipo espádice",
"pathA": 76,
"propB": "Inflorescência de outros tipos",
"pathB": 77
},
{
"index": 76,
"propA": "Ervas; espádice simples",
"pathA": "Araceae",
"propB": "Palmeiras (geralmente lenhosas); espádice composto",
"pathB": "Arecaceae (Palmae)"
},
{
"index": 77,
"propA": "Folhas com bainha",
"pathA": "Typhaceae",
"propB": "Folhas sem bainha",
"pathB": 78
},
{
"index": 78,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": 79,
"propB": "Lóculos do ovário com mais de um óvulo",
"pathB": 83
},
{
"index": 79,
"propA": "Placentação ereta",
"pathA": 80,
"propB": "Placentação pêndula ou axial",
"pathB": 81
},
{
"index": 80,
"propA": "Ovário penta-plurilocular",
"pathA": "Phytolaccaceae",
"propB": "Ovário bi-trilocular",
"pathB": "Rhamnaceae"
},
{
"index": 81,
"propA": "Inflorescência do tipo sicônio",
"pathA": "Moraceae",
"propB": "Inflorescência de outros tipos",
"pathB": 82
},
{
"index": 82,
"propA": "Gineceu bicarpelar; flores dispostas em amentilhos; óvulos com placentação pêndula",
"pathA": "Betulaceae",
"propB": "Gineceu (2)3(-pluri)-carpelar; flores não dispostas em amentilhos; óvulos com placentação axial",
"pathB": "Euphorbiaceae"
},
{
"index": 83,
"propA": "Lóculos do ovário tri-pluriovulados",
"pathA": 84,
"propB": "Lóculos do ovário biovulados",
"pathB": 85
},
{
"index": 84,
"propA": "Plantas carnívoras, com folhas transformadas em 'jarras' onde os insetos são capturados",
"pathA": "Nepenthaceae",
"propB": "Plantas não carnívoras",
"pathB": "Malvaceae"
},
{
"index": 85,
"propA": "Plantas com estípulas",
"pathA": 86,
"propB": "Plantas sem estípulas",
"pathB": 90
},
{
"index": 86,
"propA": "Folhas compostas",
"pathA": "Picrodendraceae",
"propB": "Folhas simples",
"pathB": 87
},
{
"index": 87,
"propA": "Ervas",
"pathA": "Phyllanthaceae",
"propB": "Plantas lenhosas",
"pathB": 88
},
{
"index": 88,
"propA": "Fruto carnoso",
"pathA": "Putranjivaceae",
"propB": "Fruto seco",
"pathB": 89
},
{
"index": 89,
"propA": "Sementes com carúncula",
"pathA": "Picrodendraceae",
"propB": "Sementes sem carúncula",
"pathB": "Phyllanthaceae"
},
{
"index": 90,
"propA": "Folhas simples ou compostas unifolioladas",
"pathA": 91,
"propB": "Folhas compostas com mais de um folíolo",
"pathB": 92
},
{
"index": 91,
"propA": "Fruto baga",
"pathA": "Picramniaceae",
"propB": "Fruto seco, alado",
"pathB": "Sapindaceae"
},
{
"index": 92,
"propA": "Estames 3-6",
"pathA": "Picramniaceae",
"propB": "Estames 7-8",
"pathB": "Sapindaceae"
},
{
"index": 93,
"propA": "Plantas lenhosas",
"pathA": 94,
"propB": "Plantas não lenhosas",
"pathB": 99
},
{
"index": 94,
"propA": "Flores 4-5-meras",
"pathA": 95,
"propB": "Flores trímeras",
"pathB": 97
},
{
"index": 95,
"propA": "Plantas com látex",
"pathA": "Moraceae",
"propB": "Plantas sem látex",
"pathB": 96
},
{
"index": 96,
"propA": "Plantas com estípulas",
"pathA": "Urticaceae",
"propB": "Plantas sem estípulas",
"pathB": "Nyctaginaceae"
},
{
"index": 97,
"propA": "Filetes unidos entre si",
"pathA": "Myristicaceae",
"propB": "Filetes livres entre si",
"pathB": 98
},
{
"index": 98,
"propA": "Plantas com estípulas",
"pathA": "Urticaceae",
"propB": "Plantas sem estípulas",
"pathB": "Nyctaginaceae"
},
{
"index": 99,
"propA": "Óvulo com placentação parietal ou pêndula",
"pathA": "Potamogetonaceae",
"propB": "Óvulo com placentação ereta",
"pathB": 100
},
{
"index": 100,
"propA": "Plantas aquáticas submersas",
"pathA": "Potamogetonaceae",
"propB": "Plantas terrestres ou paludosas",
"pathB": 101
},
{
"index": 101,
"propA": "Folhas uninérveas ou paralelinérveas; inflorescência racemosa",
"pathA": "Juncaginaceae",
"propB": "Folhas peninérveas ou palminérveas; inflorescência cimosa",
"pathB": "Urticaceae"
}
]`;
