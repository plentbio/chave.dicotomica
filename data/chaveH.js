const chaveH = `[
{
"index": 0,
"propA": "Prop 0A",
"pathA": 1,
"propB": "Prop 0B",
"pathB": 1
},
{
"index": 1,
"propA": "Plantas com estípulas laterais, intrapeciolares ou interpeciolares",
"pathA": 2,
"propB": "Plantas sem estípulas",
"pathB": 30
},
{
"index": 2,
"propA": "Folhas opostas ou verticiladas",
"pathA": 3,
"propB": "Folhas alternas",
"pathB": 11
},
{
"index": 3,
"propA": "Folhas compostas",
"pathA": "Caryocaraceae",
"propB": "Folhas simples",
"pathB": 4
},
{
"index": 4,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": 5,
"propB": "Lóculos do ovário com dois a muitos óvulos",
"pathB": 6
},
{
"index": 5,
"propA": "Plantas com estípulas interpeciolares; ovário bilocular",
"pathA": "Rubiaceae",
"propB": "Plantas com estípulas intrapeciolares; ovário trilocular",
"pathB": "Rhamnaceae"
},
{
"index": 6,
"propA": "Gineceu pentacarpelar",
"pathA": "Linaceae",
"propB": "Gineceu bicarpelar",
"pathB": 7
},
{
"index": 7,
"propA": "Gineceu dialicarpelar",
"pathA": "Apocynaceae",
"propB": "Gineceu gamocarpelar",
"pathB": 8
},
{
"index": 8,
"propA": "Corola 4-mera",
"pathA": "Scrophulariaceae",
"propB": "Corola 5-10-mera",
"pathB": 9
},
{
"index": 9,
"propA": "Corola com prefloração valvar",
"pathA": "Loganiaceae",
"propB": "Corola com prefloração imbricada",
"pathB": 10
},
{
"index": 10,
"propA": "Corola com 8-10 pétalas",
"pathA": "Loganiaceae",
"propB": "Corola com 5 pétalas",
"pathB": "Gelsemiaceae"
},
{
"index": 11,
"propA": "Gineceu unicarpelar ou dialicarpelar",
"pathA": "Fabaceae (Leguminosae)",
"propB": "Gineceu gamocarpelar",
"pathB": 12
},
{
"index": 12,
"propA": "Ovário uni-bilocular",
"pathA": 13,
"propB": "Ovário tri-plurilocular",
"pathB": 21
},
{
"index": 13,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": 14,
"propB": "Lóculos do ovário com dois ou mais óvulos",
"pathB": 16
},
{
"index": 14,
"propA": "Cálice gamossépalo (na realidade possui apenas pseudoestípulas)",
"pathA": "Plumbaginaceae",
"propB": "Cálice dialissépalo",
"pathB": 15
},
{
"index": 15,
"propA": "Fruto carnoso",
"pathA": "Sapotaceae",
"propB": "Fruto seco",
"pathB": "Euphorbiaceae"
},
{
"index": 16,
"propA": "Lóculos do ovário biovulados",
"pathA": 17,
"propB": "Lóculos do ovário pluriovulados",
"pathB": 18
},
{
"index": 17,
"propA": "Pecíolo unido ao pedúnculo da inflorescência",
"pathA": "Dichapetalaceae",
"propB": "Pecíolo não unido ao pedúnculo da inflorescência",
"pathB": "Vitaceae"
},
{
"index": 18,
"propA": "Anteras poricidas",
"pathA": "Solanaceae (na realidade possui apenas pseudoestípulas)",
"propB": "Anteras rimosas",
"pathB": 19
},
{
"index": 19,
"propA": "Prefloração do cálice imbricada",
"pathA": "Passifloraceae",
"propB": "Prefloração do cálice valvar ou aberta",
"pathB": 20
},
{
"index": 20,
"propA": "Ovário unilocular",
"pathA": "Caricaceae",
"propB": "Ovário bilocular",
"pathB": "Malvaceae"
},
{
"index": 21,
"propA": "Lóculos do ovário pluriovulados",
"pathA": 22,
"propB": "Óvulos 1-2 por lóculo do ovário",
"pathB": 23
},
{
"index": 22,
"propA": "Prefloração do cálice imbricada",
"pathA": "Oxalidaceae",
"propB": "Prefloração do cálice valvar ou aberta",
"pathB": "Malvaceae"
},
{
"index": 23,
"propA": "Gineceu tricarpelar",
"pathA": 24,
"propB": "Gineceu 4-20-carpelar",
"pathB": 26
},
{
"index": 24,
"propA": "Pecíolo unido ao pedúnculo da inflorescência",
"pathA": "Dichapetalaceae",
"propB": "Pecíolo não unido ao pedúnculo da inflorescência",
"pathB": 25
},
{
"index": 25,
"propA": "Fruto carnoso",
"pathA": "Sapotaceae",
"propB": "Fruto seco",
"pathB": "Euphorbiaceae"
},
{
"index": 26,
"propA": "Folhas compostas",
"pathA": "Oxalidaceae",
"propB": "Folhas simples ou compostas unifolioladas",
"pathB": 27
},
{
"index": 27,
"propA": "Arbustos ou árvores; lóculos do ovário com um único óvulo",
"pathA": 28,
"propB": "Ervas ou subarbustos; lóculos do ovário biovulados",
"pathB": 29
},
{
"index": 28,
"propA": "Plantas com látex",
"pathA": "Sapotaceae",
"propB": "Plantas sem látex",
"pathB": "Aquifoliaceae"
},
{
"index": 29,
"propA": "Estames 5, alternados com 5 estaminódios",
"pathA": "Linaceae",
"propB": "Estames 10",
"pathB": "Oxalidaceae"
},
{
"index": 30,
"propA": "Corola zigomorfa",
"pathA": 31,
"propB": "Corola actinomorfa",
"pathB": 85
},
{
"index": 31,
"propA": "Estames em número superior ao das pétalas",
"pathA": 32,
"propB": "Estames em número igual ou inferior ao das pétalas",
"pathB": 33
},
{
"index": 32,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": "Polygalaceae",
"propB": "Lóculos do ovário pluriovulados",
"pathB": "Ericaceae"
},
{
"index": 33,
"propA": "Ovário unilocular",
"pathA": 34,
"propB": "Ovário bi-pentalocular ou gineceu dialicarpelar (às vezes carpelos unidos pelos estiletes)",
"pathB": 45
},
{
"index": 34,
"propA": "Gineceu unicarpelar ou tricarpelar",
"pathA": 35,
"propB": "Gineceu bicarpelar",
"pathB": 36
},
{
"index": 35,
"propA": "Corola com prefloração imbricada",
"pathA": "Krameriaceae",
"propB": "Corola com prefloração valvar",
"pathB": "Metteniusaceae"
},
{
"index": 36,
"propA": "Estames em número igual ao das pétalas",
"pathA": 37,
"propB": "Estames em número inferior ao das pétalas",
"pathB": 39
},
{
"index": 37,
"propA": "Estames unidos pelas anteras",
"pathA": "Gesneriaceae",
"propB": "Anteras livres entre si",
"pathB": 38
},
{
"index": 38,
"propA": "Plantas com látex",
"pathA": "Apocynaceae",
"propB": "Plantas sem látex",
"pathB": "Gentianaceae"
},
{
"index": 39,
"propA": "Estames unidos pelas anteras",
"pathA": "Gesneriaceae",
"propB": "Anteras livres entre si",
"pathB": 40
},
{
"index": 40,
"propA": "Plantas com utrículos; corola calcarada",
"pathA": "Lentibulariaceae",
"propB": "Plantas sem utrículos; corola não calcarada",
"pathB": 41
},
{
"index": 41,
"propA": "Óvulos numerosos",
"pathA": 42,
"propB": "Óvulos 1-4",
"pathB": 43
},
{
"index": 42,
"propA": "Fruto cápsula",
"pathA": "Martyniaceae",
"propB": "Fruto bacáceo",
"pathB": "Bignoniaceae"
},
{
"index": 43,
"propA": "Inflorescência determinada",
"pathA": "Lamiaceae (Labiatae)",
"propB": "Inflorescência indeterminada",
"pathB": 44
},
{
"index": 44,
"propA": "Cálice maior do que a corola",
"pathA": "Verbenaceae",
"propB": "Cálice menor do que a corola",
"pathB": "Martyniaceae"
},
{
"index": 45,
"propA": "Gineceu pentacarpelar",
"pathA": 46,
"propB": "Gineceu bi-tetracarpelar",
"pathB": 47
},
{
"index": 46,
"propA": "Folhas simples, sem pontuações translúcidas; plantas herbáceas",
"pathA": "Balsaminaceae",
"propB": "Folhas geralmente compostas, com pontuações translúcidas; plantas geralmente lenhosas",
"pathB": "Rutaceae"
},
{
"index": 47,
"propA": "Estilete ginobásico",
"pathA": "Lamiaceae (Labiatae)",
"propB": "Estilete terminal",
"pathB": 48
},
{
"index": 48,
"propA": "Estames em número igual ao das pétalas",
"pathA": 49,
"propB": "Estames em número inferior ao das pétalas",
"pathB": 53
},
{
"index": 49,
"propA": "Plantas com látex",
"pathA": "Apocynaceae",
"propB": "Plantas sem látex",
"pathB": 50
},
{
"index": 50,
"propA": "Folhas alternas",
"pathA": "Solanaceae",
"propB": "Folhas opostas ou verticiladas",
"pathB": 51
},
{
"index": 51,
"propA": "Flores 4-meras",
"pathA": "Verbenaceae",
"propB": "Flores 5-7-meras",
"pathB": 52
},
{
"index": 52,
"propA": "Estames todos do mesmo tamanho",
"pathA": "Apocynaceae",
"propB": "Estames de diferentes tamanhos",
"pathB": "Solanaceae"
},
{
"index": 53,
"propA": "Folhas com pontuações translúcidas",
"pathA": "Rutaceae",
"propB": "Folhas sem pontuações translúcidas",
"pathB": 54
},
{
"index": 54,
"propA": "Lóculos do ovário uni-biovulados",
"pathA": 55,
"propB": "Lóculos do ovário tri-pluriovulados",
"pathB": 61
},
{
"index": 55,
"propA": "Flores dispostas em inflorescências racemosas; óvulos com placentação ereta",
"pathA": "Verbenaceae",
"propB": "Flores dispostas em inflorescências cimosas ou racemosas; óvulos com placentação axial ou pêndula",
"pathB": 56
},
{
"index": 56,
"propA": "Cálice muito reduzido, mas flores com 1-2 brácteas na base, semelhantes a um cálice",
"pathA": "Acanthaceae",
"propB": "Cálice desenvolvido",
"pathB": 57
},
{
"index": 57,
"propA": "Flores tetrâmeras",
"pathA": "Lamiaceae (Labiatae)",
"propB": "Flores pentâmeras",
"pathB": 58
},
{
"index": 58,
"propA": "Folhas alternas",
"pathA": "Scrophulariaceae",
"propB": "Folhas opostas",
"pathB": 59
},
{
"index": 59,
"propA": "Lóculos do ovário uniovulados",
"pathA": "Lamiaceae (Labiatae)",
"propB": "Lóculos do ovário biovulados",
"pathB": 60
},
{
"index": 60,
"propA": "Inflorescência geralmente com brácteas vistosas; óvulos empilhados (um sobre o outro)",
"pathA": "Acanthaceae",
"propB": "Inflorescência geralmente com brácteas não vistosas; óvulos paralelos (um ao lado do outro)",
"pathB": "Lamiaceae (Labiatae)"
},
{
"index": 61,
"propA": "Folhas opostas ou verticiladas",
"pathA": 62,
"propB": "Folhas alternas, às vezes rosuladas",
"pathB": 80
},
{
"index": 62,
"propA": "Cálice gamossépalo",
"pathA": 63,
"propB": "Cálice dialissépalo, às vezes muito reduzido",
"pathB": 73
},
{
"index": 63,
"propA": "Folhas compostas",
"pathA": "Bignoniaceae",
"propB": "Folhas simples",
"pathB": 64
},
{
"index": 64,
"propA": "Pelo menos dois estames inseridos na fauce da corola",
"pathA": "Linderniaceae",
"propB": "Todos os estames inseridos no tubo da corola",
"pathB": 65
},
{
"index": 65,
"propA": "Óvulos pouco numerosos, empilhados; fruto geralmente com retináculo (ejaculador",
"pathA": "Acanthaceae",
"propB": "Óvulos muito numerosos, não empilhados; fruto sem ejaculador",
"pathB": 66
},
{
"index": 66,
"propA": "Flores com estaminódio",
"pathA": 67,
"propB": "Flores sem estaminódio",
"pathB": 69
},
{
"index": 67,
"propA": "Sementes aladas",
"pathA": "Bignoniaceae",
"propB": "Sementes não aladas",
"pathB": 68
},
{
"index": 68,
"propA": "Cálice unido apenas na base",
"pathA": "Plantaginaceae",
"propB": "Cálice unido até a metade do tubo ou além",
"pathB": "Scrophulariaceae"
},
{
"index": 69,
"propA": "Plantas eretas",
"pathA": 70,
"propB": "Lianas",
"pathB": 72
},
{
"index": 70,
"propA": "Plantas hemiparasitas; cálice espatáceo ou unido até a metade do tubo ou além",
"pathA": "Orobanchaceae",
"propB": "Plantas não hemiparasitas; cálice unido apenas na base",
"pathB": 71
},
{
"index": 71,
"propA": "Plantas rastejantes, não ultrapassando 5 cm alt.; folhas rosuladas",
"pathA": "Mazaceae",
"propB": "Plantas geralmente eretas, com mais de 5 cm alt.; folhas não rosuladas",
"pathB": "Plantaginaceae"
},
{
"index": 72,
"propA": "Cálice espatáceo; corola de coloração alaranjada",
"pathA": "Orobanchaceae",
"propB": "Cálice não espatáceo; corola geralmente 83. Flores dispostas em inflorescências racemosas",
"pathB": "Schlegeliaceae"
},
{
"index": 73,
"propA": "Óvulos pouco numerosos, empilhados; fruto geralmente com retináculo (ejaculador)",
"pathA": "Acanthaceae",
"propB": "Óvulos muito numerosos, não empilhados; fruto sem ejaculador",
"pathB": 74
},
{
"index": 74,
"propA": "Flores dispostas em inflorescências cimosas frequentemente em tirsos",
"pathA": 75,
"propB": "Flores solitárias ou dispostas em inflorescências racemosas",
"pathB": 79
},
{
"index": 75,
"propA": "Corola com lábio inferior inflado",
"pathA": 76,
"propB": "Corola com lábio inferior não inflado",
"pathB": 77
},
{
"index": 76,
"propA": "Estames 4",
"pathA": "Scrophulariaceae",
"propB": "Estames 2",
"pathB": "Calceolariaceae"
},
{
"index": 77,
"propA": "Árvores",
"pathA": "Paulowniaceae",
"propB": "Ervas ou arbustos sublenhosos",
"pathB": 78
},
{
"index": 78,
"propA": "Plantas com caule e pecíolos subterrâneos",
"pathA": "Plantaginaceae",
"propB": "Plantas com caule e pecíolos ao menos parcialmente aéreos",
"pathB": "Linderniaceae"
},
{
"index": 79,
"propA": "Fruto alongado, com mais de 1,5cm de comprimento, incompletamente deiscente (deiscência apenas apical)",
"pathA": "Pedaliaceae",
"propB": "Fruto geralmente ovoide e com menos de 1,5cm de comprimento, deiscente por fendas longitudinais",
"pathB": "Plantaginaceae"
},
{
"index": 80,
"propA": "Cálice dialissépalo",
"pathA": 81,
"propB": "Cálice gamossépalo",
"pathB": 83
},
{
"index": 81,
"propA": "Estames 2",
"pathA": "Plantaginaceae",
"propB": "Estames 4-5",
"pathB": 82
},
{
"index": 82,
"propA": "Corola gibosa",
"pathA": "Plantaginaceae",
"propB": "Corola não gibosa",
"pathB": "Scrophulariaceae"
},
{
"index": 83,
"propA": "Flores dispostas em inflorescências cimosas",
"pathA": "Solanaceae",
"propB": "Flores dispostas em inflorescências racemosas",
"pathB": 84
},
{
"index": 84,
"propA": "Plantas não hemiparasitas; cálice unido apenas na base",
"pathA": "Plantaginaceae",
"propB": "Plantas hemiparasitas; cálice unido até a metade do tubo ou além",
"pathB": "Orobanchaceae"
},
{
"index": 85,
"propA": "Brácteas não transformadas em nectário em forma de 'jarra'",
"pathA": "Marcgraviaceae",
"propB": "Brácteas transformadas em nectário",
"pathB": 86
},
{
"index": 86,
"propA": "Estames em número superior ao dobro das pétalas",
"pathA": 87,
"propB": "Estames em número duplo, igual ou inferior ao das pétalas",
"pathB": 97
},
{
"index": 87,
"propA": "Estames unidos entre si",
"pathA": 88,
"propB": "Estames livres entre si",
"pathB": 91
},
{
"index": 88,
"propA": "Folhas compostas",
"pathA": "Caryocaraceae",
"propB": "Folhas simples ou compostas unifolioladas",
"pathB": 89
},
{
"index": 89,
"propA": "Plantas com látex",
"pathA": "Clusiaceae (Guttiferae)",
"propB": "Plantas sem látex",
"pathB": 90
},
{
"index": 90,
"propA": "Cálice com prefloração valvar ou aberta",
"pathA": "Styracaceae",
"propB": "Cálice com prefloração imbricada",
"pathB": "Ebenaceae"
},
{
"index": 91,
"propA": "Óvulos com placentação ereta ou pêndula",
"pathA": 92,
"propB": "Óvulos com placentação axial ou parietal",
"pathB": 96
},
{
"index": 92,
"propA": "Lóculos do ovário com dois a muitos óvulos",
"pathA": 93,
"propB": "Lóculos do ovário com um único óvulo",
"pathB": 95
},
{
"index": 93,
"propA": "Estames mais de 20",
"pathA": "Pentaphyllacaceae",
"propB": "Estames menos de 20",
"pathB": 94
},
{
"index": 94,
"propA": "Cálice com prefloração valvar ou aberta",
"pathA": "Styracaceae",
"propB": "Cálice com prefloração imbricada",
"pathB": "Ebenaceae"
},
{
"index": 95,
"propA": "Pétalas dispostas em dois verticilos de 3",
"pathA": "Annonaceae",
"propB": "Pétalas dispostas em um único verticilo",
"pathB": "Ebenaceae"
},
{
"index": 96,
"propA": "Ervas",
"pathA": "Papaveraceae",
"propB": "Arbustos ou árvores",
"pathB": "Theaceae"
},
{
"index": 97,
"propA": "Ovário unilocular (gineceu unicarpelar ou gamocarpelar)",
"pathA": 98,
"propB": "Ovário bi-plurilocular (ao menos na região mediana) ou gineceu dialicarpelar (podendo ter a região dos ovários livre, mas os estiletes unidos)",
"pathB": 120
},
{
"index": 98,
"propA": "Ovário com 1 ou 2 óvulos",
"pathA": 99,
"propB": "Ovário com 3 a numerosos óvulos",
"pathB": 105
},
{
"index": 99,
"propA": "Plantas com látex",
"pathA": "Sapotaceae",
"propB": "Plantas sem látex",
"pathB": 100
},
{
"index": 100,
"propA": "Óvulos com placentação pêndula",
"pathA": 101,
"propB": "Óvulos com placentação ereta",
"pathB": 103
},
{
"index": 101,
"propA": "Gineceu unicarpelar",
"pathA": "Menispermaceae",
"propB": "Gineceu 2-5-carpelar",
"pathB": 102
},
{
"index": 102,
"propA": "Flores com disco nectarífero ou com glândulas nectaríferas isoladas",
"pathA": "Opiliaceae",
"propB": "Flores sem nectários",
"pathB": "Cardiopteridaceae"
},
{
"index": 103,
"propA": "Gineceu pentacarpelar",
"pathA": "Plumbaginaceae",
"propB": "Gineceu 1-3-carpela",
"pathB": 104
},
{
"index": 104,
"propA": "Gineceu unicarpelar (na realidade monoclamídeas)",
"pathA": "Nyctaginaceae",
"propB": "Gineceu tricarpelar (na realidade monoclamídeas)",
"pathB": "Basellaceae"
},
{
"index": 105,
"propA": "Folhas opostas ou verticiladas",
"pathA": 106,
"propB": "Folhas alternas",
"pathB": 113
},
{
"index": 106,
"propA": "Óvulos com placentação parietal",
"pathA": 107,
"propB": "Óvulos com placentação central-livre ou ereta",
"pathB": 110
},
{
"index": 107,
"propA": "Carpelos unidos apenas pelos estiletes",
"pathA": "Apocynaceae",
"propB": "Carpelos unidos na região do ovário",
"pathB": 108
},
{
"index": 108,
"propA": "Plantas com látex",
"pathA": "Apocynaceae",
"propB": "Plantas sem látex",
"pathB": 109
},
{
"index": 109,
"propA": "Plantas aquáticas; corola com prefloração valvar",
"pathA": "Menyanthaceae",
"propB": "Plantas terrestres ou paludosas; corola com prefloração convoluta",
"pathB": "Gentianaceae"
},
{
"index": 110,
"propA": "Flores com 5 estaminódios",
"pathA": "Primulaceae",
"propB": "Flores sem estaminódios",
"pathB": 111
},
{
"index": 111,
"propA": "Folhas dispostas em rosetas basais",
"pathA": "Primulaceae",
"propB": "Folhas não dispostas em rosetas",
"pathB": 112
},
{
"index": 112,
"propA": "Óvulos com placentação parietal",
"pathA": "Pittosporaceae",
"propB": "Óvulos com placentação central-livre",
"pathB": "Primulaceae"
},
{
"index": 113,
"propA": "Cálice trímero",
"pathA": "Canellaceae",
"propB": "Cálice 4-7-mero",
"pathB": 114
},
{
"index": 114,
"propA": "Estames em número igual ao dobro das pétalas",
"pathA": "Caricaceae",
"propB": "Estames em número inferior ao dobro das pétalas",
"pathB": 115
},
{
"index": 115,
"propA": "Óvulos com placentação central-livre ou basal",
"pathA": 116,
"propB": "Óvulos com placentação parietal",
"pathB": 118
},
{
"index": 116,
"propA": "Flores com 5 estaminódios",
"pathA": "Primulaceae",
"propB": "Flores sem estaminódios",
"pathB": 117
},
{
"index": 117,
"propA": "Plantas geralmente volúveis; gineceu bicarpelar; óvulos 4, com placentação ereta",
"pathA": "Convolvulaceae",
"propB": "Ervas, arbustos ou árvores, muito raramente plantas volúveis; gineceu 3-6-carpelar; óvulos numerosos, com placentação central-livre",
"pathB": "Primulaceae"
},
{
"index": 118,
"propA": "Ervas aquáticas",
"pathA": "Menyanthaceae",
"propB": "Plantas terrestres",
"pathB": 119
},
{
"index": 119,
"propA": "Gineceu bicarpelar; flor sem androginóforo",
"pathA": "Apocynaceae",
"propB": "Gineceu 3-4-carpelar; flor com androginóforo",
"pathB": "Passifloraceae"
},
{
"index": 120,
"propA": "Lóculos do ovário 4-pluriovulados",
"pathA": 121,
"propB": "Lóculos do ovário uni-triovulados",
"pathB": 150
},
{
"index": 121,
"propA": "Estames 2-4",
"pathA": 122,
"propB": "Estames 5 ou mais de 5",
"pathB": 130
},
{
"index": 122,
"propA": "Cálice dialissépalo",
"pathA": 123,
"propB": "Cálice gamossépalo",
"pathB": 126
},
{
"index": 123,
"propA": "Folhas rosuladas; flores sésseis",
"pathA": "Plantaginaceae",
"propB": "Folhas não rosuladas; flores pediceladas",
"pathB": 124
},
{
"index": 124,
"propA": "Estames 2",
"pathA": "Plantaginaceae",
"propB": "Estames 4-5",
"pathB": 125
},
{
"index": 125,
"propA": "Folhas opostas",
"pathA": "Plantaginaceae",
"propB": "Folhas alternas",
"pathB": "Scrophulariaceae"
},
{
"index": 126,
"propA": "Folhas opostas",
"pathA": 127,
"propB": "Folhas alternas, às vezes rosuladas",
"pathB": 128
},
{
"index": 127,
"propA": "Flores tetrâmeras",
"pathA": "Scrophulariaceae",
"propB": "Flores pentâmeras",
"pathB": "Orobanchaceae"
},
{
"index": 128,
"propA": "Flores pediceladas, dispostas em cimeiras ou panículas; anteras poricidas",
"pathA": "Solanaceae",
"propB": "Flores sésseis, dispostas em espigas; anteras rimosas",
"pathB": 129
},
{
"index": 129,
"propA": "Plantas não hemiparasitas; flores não vistosas; estames geralmente exsertos; anteras bitecas",
"pathA": "Plantaginaceae",
"propB": "Plantas hemiparasitas; flores vistosas, geralmente roxas; estames inclusos; anteras monotecas",
"pathB": "Orobanchaceae"
},
{
"index": 130,
"propA": "Estames 5-7",
"pathA": 131,
"propB": "Estames 8 ou mais de 8",
"pathB": 144
},
{
"index": 131,
"propA": "Gineceu 3-5-carpelar",
"pathA": 132,
"propB": "Gineceu 2-carpelar",
"pathB": 137
},
{
"index": 132,
"propA": "Gineceu pentacarpelar",
"pathA": 133,
"propB": "Gineceu 3-4-carpelar",
"pathB": 134
},
{
"index": 133,
"propA": "Anteras poricidas",
"pathA": "Ericaceae",
"propB": "Anteras rimosas",
"pathB": "Caricaceae"
},
{
"index": 134,
"propA": "Gineceu tetracarpelar",
"pathA": 135,
"propB": "Gineceu tricarpelar",
"pathB": 136
},
{
"index": 135,
"propA": "Cálice gamossépalo",
"pathA": "Solanaceae",
"propB": "Cálice dialissépalo",
"pathB": "Convolvulaceae"
},
{
"index": 136,
"propA": "Estames não unidos ao tubo da corola",
"pathA": "Pittosporaceae",
"propB": "Estames unidos ao tubo da corola",
"pathB": "Polemoniaceae"
},
{
"index": 137,
"propA": "Folhas opostas ou verticiladas",
"pathA": "Apocynaceae",
"propB": "Folhas alternas (pelo menos as basais)",
"pathB": 138
},
{
"index": 138,
"propA": "Plantas com látex",
"pathA": "Apocynaceae",
"propB": "Plantas sem látex",
"pathB": 139
},
{
"index": 139,
"propA": "Cálice dialissépalo",
"pathA": "Scrophulariaceae",
"propB": "Cálice gamossépalo",
"pathB": 140
},
{
"index": 140,
"propA": "Anteras poricidas",
"pathA": "Solanaceae",
"propB": "Anteras rimosas",
"pathB": 141
},
{
"index": 141,
"propA": "Fruto baga",
"pathA": "Solanaceae",
"propB": "Fruto cápsula",
"pathB": 142
},
{
"index": 142,
"propA": "Flores grandes, com mais de 3 cm de comprimento",
"pathA": "Solanaceae",
"propB": "Flores menores, com menos de 3 cm de comprimento",
"pathB": 143
},
{
"index": 143,
"propA": "Cápsula septicida; corola rotácea; placentas não bífidas em cada lóculo",
"pathA": "Hydroleaceae",
"propB": "Cápsula loculicida; corola infundibuliforme; placentas bífidas em cada lóculo",
"pathB": "Boraginaceae"
},
{
"index": 144,
"propA": "Plantas suculentas",
"pathA": "Crassulaceae",
"propB": "Plantas não suculentas",
"pathB": 145
},
{
"index": 145,
"propA": "Folhas compostas, com mais de um folíolo",
"pathA": 146,
"propB": "Folhas simples ou compostas unifolioladas",
"pathB": 147
},
{
"index": 146,
"propA": "Estiletes livres entre si",
"pathA": "Oxalidaceae",
"propB": "Estilete único ou estigma séssil",
"pathB": "Caricaceae"
},
{
"index": 147,
"propA": "Anteras rimosas",
"pathA": 148,
"propB": "Anteras poricidas",
"pathB": 149
},
{
"index": 148,
"propA": "Cálice com prefloração valvar ou aberta",
"pathA": "Styracaceae",
"propB": "Cálice com prefloração imbricada",
"pathB": "Oxalidaceae"
},
{
"index": 149,
"propA": "Pétalas unidas apenas na base; ovário 3-locular",
"pathA": "Clethraceae",
"propB": "Pétalas unidas pelo menos até a sua porção mediana; ovário 4-10-locular",
"pathB": "Ericaceae"
},
{
"index": 150,
"propA": "Folhas compostas",
"pathA": 151,
"propB": "Folhas simples ou compostas unifolioladas, às vezes escamiformes",
"pathB": 162
},
{
"index": 151,
"propA": "Gineceu dialicarpelar",
"pathA": 152,
"propB": "Gineceu gamocarpelar",
"pathB": 153
},
{
"index": 152,
"propA": "Folhas sem pontuações translúcidas; estames férteis em número igual ou maior ao das pétalas",
"pathA": "Oxalidaceae",
"propB": "Folhas com pontuações translúcidas; estames férteis em número inferior ao das pétalas",
"pathB": "Rutaceae"
},
{
"index": 153,
"propA": "Óvulos com placentação pêndula",
"pathA": 154,
"propB": "Óvulos com placentação axial ou ereta",
"pathB": 156
},
{
"index": 154,
"propA": "Folhas com pontuações translúcidas",
"pathA": "Rutaceae",
"propB": "Folhas sem pontuações translúcidas",
"pathB": 155
},
{
"index": 155,
"propA": "Plantas aromáticas",
"pathA": "Burseraceae",
"propB": "Plantas não aromáticas",
"pathB": "Oleaceae"
},
{
"index": 156,
"propA": "Folhas opostas",
"pathA": 157,
"propB": "Folhas alternas",
"pathB": 158
},
{
"index": 157,
"propA": "Folhas com pontuações translúcidas",
"pathA": "Rutaceae",
"propB": "Folhas sem pontuações translúcidas",
"pathB": "Oleaceae"
},
{
"index": 158,
"propA": "Estames unidos entre si",
"pathA": 159,
"propB": "Estames livres entre si",
"pathB": 161
},
{
"index": 159,
"propA": "Estames dispostos em dois ciclos de diferentes alturas, sendo um destes, às vezes, estaminodial",
"pathA": "Oxalidaceae",
"propB": "Estames dispostos em um único ciclo",
"pathB": 160
},
{
"index": 160,
"propA": "Folhas geralmente sem pontuações translúcidas; fruto cápsula",
"pathA": "Meliaceae",
"propB": "Folhas com pontuações translúcidas; fruto esquizocárpico",
"pathB": "Rutaceae"
},
{
"index": 161,
"propA": "Folhas com pontuações translúcidas",
"pathA": "Rutaceae",
"propB": "Folhas sem pontuações translúcidas",
"pathB": "Convolvulaceae"
},
{
"index": 162,
"propA": "Folhas com pontuações translúcidas",
"pathA": "Rutaceae",
"propB": "Folhas sem pontuações translúcidas",
"pathB": 163
},
{
"index": 163,
"propA": "Estames unidos entre si",
"pathA": 164,
"propB": "Estames livres entre si",
"pathB": 169
},
{
"index": 164,
"propA": "Ervas",
"pathA": 165,
"propB": "Plantas lenhosas",
"pathB": 166
},
{
"index": 165,
"propA": "Estames 5, alternados com 5 estaminódios",
"pathA": "Linaceae",
"propB": "Estames 10",
"pathB": "Oxalidaceae"
},
{
"index": 166,
"propA": "Óvulos com placentação axial",
"pathA": 167,
"propB": "Óvulos com placentação pêndula",
"pathB": 168
},
{
"index": 167,
"propA": "Folhas compostas..",
"pathA": "Meliaceae",
"propB": "Folhas simples",
"pathB": "Oleaceae"
},
{
"index": 168,
"propA": "Cálice com prefloração valvar ou aberta",
"pathA": "Styracaceae",
"propB": "Cálice com prefloração imbricada",
"pathB": "Ebenaceae"
},
{
"index": 169,
"propA": "Lóculos do ovário com um único óvulo",
"pathA": 170,
"propB": "Lóculos do ovário 2-3-ovulados",
"pathB": 191
},
{
"index": 170,
"propA": "Plantas com látex",
"pathA": 171,
"propB": "Plantas sem látex.",
"pathB": 173
},
{
"index": 171,
"propA": "Plantas herbáceas",
"pathA": "Convolvulaceae",
"propB": "Plantas lenhosas",
"pathB": 172
},
{
"index": 172,
"propA": "Corola com prefloração valvar",
"pathA": "Olacaceae",
"propB": "Corola com prefloração imbricada",
"pathB": "Sapotaceae"
},
{
"index": 173,
"propA": "Estames 2",
"pathA": "Oleaceae",
"propB": "Estames 3-numerosos",
"pathB": 174
},
{
"index": 174,
"propA": "Óvulos com placentação axial",
"pathA": 175,
"propB": "Óvulos com placentação ereta ou pêndula",
"pathB": 179
},
{
"index": 175,
"propA": "Carpelos 3-10",
"pathA": 176,
"propB": "Carpelos 2",
"pathB": 177
},
{
"index": 176,
"propA": "Plantas geralmente herbáceas ou lianescentes; corola unida além da metade de seu comprimento; gineceu bicarpelar",
"pathA": "Convolvulaceae",
"propB": "Plantas arbustivas ou arbóreas; corola unida apenas próximo à base; gineceu 4-6-carpelar",
"pathB": "Aquifoliaceae"
},
{
"index": 177,
"propA": "Plantas geralmente herbáceas ou lianescentes; estames 5; fruto cápsula",
"pathA": "Convolvulaceae",
"propB": "Plantas arbustivas; estames geralmente 4; fruto drupa",
"pathB": 178
},
{
"index": 178,
"propA": "Ovário com ambos os lóculos férteis",
"pathA": "Scrophulariaceae",
"propB": "Ovário com um dos lóculos atrofiado",
"pathB": "Lamiaceae"
},
{
"index": 179,
"propA": "Estames 8-10",
"pathA": "Polygalaceae",
"propB": "Estames 3-5",
"pathB": 180
},
{
"index": 180,
"propA": "Estames não unidos ao tubo da corola",
"pathA": "Cyrillaceae",
"propB": "Estames unidos ao tubo da corola",
"pathB": 181
},
{
"index": 181,
"propA": "Estilete ginobásico",
"pathA": "Boraginaceae",
"propB": "Estilete terminal",
"pathB": 182
},
{
"index": 182,
"propA": "Cálice gamossépal",
"pathA": 183,
"propB": "Cálice dialissépalo",
"pathB": 187
},
{
"index": 183,
"propA": "Ovário 1-3-locular",
"pathA": 184,
"propB": "Ovário 4-5-locular",
"pathB": 186
},
{
"index": 184,
"propA": "Flor hexâmera",
"pathA": "Olacaceae",
"propB": "Flor 4-5-mera",
"pathB": 185
},
{
"index": 185,
"propA": "Ervas",
"pathA": "Plantaginaceae",
"propB": "Arbustos ou árvores",
"pathB": "Styracaceae"
},
{
"index": 186,
"propA": "Estigma séssil",
"pathA": "Olacaceae",
"propB": "Estilete desenvolvido",
"pathB": "Boraginaceae"
},
{
"index": 187,
"propA": "Plantas herbáceas, subarbustivas ou lianescentes",
"pathA": 188,
"propB": "Plantas arbustivas ou arbóreas; fruto drupa",
"pathB": 190
},
{
"index": 188,
"propA": "Flores pouco ou não vistosas, dispostas em espigas",
"pathA": "Plantaginaceae",
"propB": "Flores vistosas, solitárias ou dispostas em inflorescências cimosas",
"pathB": 189
},
{
"index": 189,
"propA": "Flores solitárias ou dispostas em cimeiras ou panículas laxas",
"pathA": "Convolvulaceae",
"propB": "Flores dispostas em inflorescências densas, secundifloras",
"pathB": "Boraginaceae"
},
{
"index": 190,
"propA": "Árvores; flores dispostas em inflorescências terminais",
"pathA": "Boraginaceae",
"propB": "Arbustos; flores dispostas em inflorescências laterais",
"pathB": "Scrophulariaceae"
},
{
"index": 191,
"propA": "Óvulos com placentação ereta ou pêndula",
"pathA": 192,
"propB": "Óvulos com placentação axial",
"pathB": 198
},
{
"index": 192,
"propA": "Ervas",
"pathA": 193,
"propB": "Plantas lenhosas",
"pathB": 195
},
{
"index": 193,
"propA": "Flores dispostas em inflorescências densas, secundifloras",
"pathA": "Boraginaceae",
"propB": "Flores solitárias ou dispostas em cimeiras ou panículas laxas",
"pathB": 194
},
{
"index": 194,
"propA": "Flores com cinco estaminódios alternados com os estames",
"pathA": "Linaceae",
"propB": "Flores sem estaminódios",
"pathB": "Convolvulaceae"
},
{
"index": 195,
"propA": "Cálice gamossépalo",
"pathA": 196,
"propB": "Cálice dialissépalo",
"pathB": 197
},
{
"index": 196,
"propA": "Inflorescência cimosa, frequentemente reduzida a uma única flor",
"pathA": "Ebenaceae",
"propB": "Inflorescência racemosa",
"pathB": "Cyrillaceae"
},
{
"index": 197,
"propA": "Plantas geralmente herbáceas ou lianescentes; estames 5; fruto cápsula",
"pathA": "Convolvulaceae",
"propB": "Plantas arbustivas; estames geralmente 4; fruto drupa",
"pathB": "Scrophulariaceae"
},
{
"index": 198,
"propA": "Gineceu 5-6-carpelar",
"pathA": "Linaceae",
"propB": "Gineceu 2-4-carpelar",
"pathB": 199
},
{
"index": 199,
"propA": "Estames 2",
"pathA": "Oleaceae",
"propB": "Estames 3-5",
"pathB": 200
},
{
"index": 200,
"propA": "Ervas ou lianas",
"pathA": 201,
"propB": "Arbustos ou árvores",
"pathB": 202
},
{
"index": 201,
"propA": "Folhas rosuladas; flores pouco vistosas, dispostas em espigas",
"pathA": "Plantaginaceae",
"propB": "Folhas não rosuladas; flores vistosas, dispostas em cimeiras ou panículas",
"pathB": "Convolvulaceae"
},
{
"index": 202,
"propA": "Folhas alternas",
"pathA": "Scrophulariaceae",
"propB": "Folhas opostas",
"pathB": 203
},
{
"index": 203,
"propA": "Cálice dialissépalo",
"pathA": "Oleaceae",
"propB": "Cálice gamossépal",
"pathB": "Lamiaceae"
}
]`;
