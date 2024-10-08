$(function () {
            $(".mapcontainer").mapael({
             map: {
                 name: "hoi4map",
				// Enable zoom on the map
                 zoom: {
                     enabled: false,
                     maxLevel: 20
                 },
				
                 defaultArea: {
                     attrs: {
                         stroke: "#ffffff",
                         "stroke-width": 0.3,
                         fill: "#000000",
                         opacity: 0.4
                     },
                     attrsHover: {
                         "stroke-width": 0.7,
                         opacity: 1
                     }
                 }
             },
             legend: {
                 area: {
                     title: "Population per State",
                     opacity: 1,
                     cssClass:"areaLegend",
                     hideElemsOnClick:{
                        opacity: 0,
                        animDuration:250,
                     }, 
                     slices: [
                         {
                             max: 100000,
                             attrs: {
                                 fill: "#97e766"
                             },
                             label: "<100k population"
                         },
                         {
                             min: 100000,
                             max: 500000,
                             attrs: {
                                 fill: "#7fd34d"
                             },
                             label: "Between 100 000 and 500 000"
                         },
                         {
                             min: 500000,
                             max: 1000000,
                             attrs: {
                                 fill: "#5faa32"
                             },
                             label: "Between 500 000 and 1 000 000"
                         },
                         {
                             min: 1000000,
                             attrs: {
                                 fill: "#3f7d1a"
                             },
                             label: "More than 1 million"
                         }
                     ]
                 }
             },
			 areas: {
"Herat":
{
value: "1634853",
tooltip: {content: "<span style=\"font-weight:bold;\">Herat (Afghanistan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1634853<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kabul":
{
value: "4642801",
tooltip: {content: "<span style=\"font-weight:bold;\">Kabul (Afghanistan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4642801<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Albania":
{
value: "494470",
tooltip: {content: "<span style=\"font-weight:bold;\">Albania (Albania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 494470<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Northern_Epirus":
{
value: "262520",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Epirus (Albania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 262520<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shkodër":
{
value: "247234",
tooltip: {content: "<span style=\"font-weight:bold;\">Shkodër (Albania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 247234<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Buenos_Aires":
{
value: "5603198",
tooltip: {content: "<span style=\"font-weight:bold;\">Buenos Aires (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5603198<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 17<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Chaco_Austral":
{
value: "705101",
tooltip: {content: "<span style=\"font-weight:bold;\">Chaco Austral (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 705101<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chubut":
{
value: "395522",
tooltip: {content: "<span style=\"font-weight:bold;\">Chubut (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 395522<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Formosa":
{
value: "500610",
tooltip: {content: "<span style=\"font-weight:bold;\">Formosa (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 500610<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Los_Andes":
{
value: "782265",
tooltip: {content: "<span style=\"font-weight:bold;\">Los Andes (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 782265<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mendoza":
{
value: "1091605",
tooltip: {content: "<span style=\"font-weight:bold;\">Mendoza (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1091605<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Región_Mesopotámica":
{
value: "1498997",
tooltip: {content: "<span style=\"font-weight:bold;\">Región Mesopotámica (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1498997<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Río_Negro":
{
value: "471575",
tooltip: {content: "<span style=\"font-weight:bold;\">Río Negro (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 471575<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"San_Juan_y_La_Rioja":
{
value: "882387",
tooltip: {content: "<span style=\"font-weight:bold;\">San Juan y La Rioja (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 882387<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"San_Luis_y_La_Pampa":
{
value: "603138",
tooltip: {content: "<span style=\"font-weight:bold;\">San Luis y La Pampa (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 603138<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Santa_Cruz_AR":
{
value: "132161",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa_Cruz_AR (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 132161<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Santa_Fe":
{
value: "3000828",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Fe (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3000828<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tierra_del_Fuego":
{
value: "80864",
tooltip: {content: "<span style=\"font-weight:bold;\">Tierra del Fuego (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 80864<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tucumán":
{
value: "1142704",
tooltip: {content: "<span style=\"font-weight:bold;\">Tucumán (Argentina)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1142704<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bismarck":
{
value: "346062",
tooltip: {content: "<span style=\"font-weight:bold;\">Bismarck (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 346062<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Central_Australia":
{
value: "30037",
tooltip: {content: "<span style=\"font-weight:bold;\">Central Australia (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 30037<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_South_Wales":
{
value: "2566229",
tooltip: {content: "<span style=\"font-weight:bold;\">New South Wales (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2566229<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 51<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"North_Queensland":
{
value: "100122",
tooltip: {content: "<span style=\"font-weight:bold;\">North Queensland (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 100122<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_West_Australia":
{
value: "1001",
tooltip: {content: "<span style=\"font-weight:bold;\">North West Australia (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Territory":
{
value: "13016",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Territory (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13016<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Papua":
{
value: "1078315",
tooltip: {content: "<span style=\"font-weight:bold;\">Papua (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1078315<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Queensland":
{
value: "817797",
tooltip: {content: "<span style=\"font-weight:bold;\">Queensland (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 817797<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Solomon_Islands":
{
value: "150183",
tooltip: {content: "<span style=\"font-weight:bold;\">Solomon Islands (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 150183<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Australia":
{
value: "201045",
tooltip: {content: "<span style=\"font-weight:bold;\">South Australia (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 201045<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_West_Australia":
{
value: "50061",
tooltip: {content: "<span style=\"font-weight:bold;\">South West Australia (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 50061<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southwest_Queensland":
{
value: "10012",
tooltip: {content: "<span style=\"font-weight:bold;\">Southwest_Queensland (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10012<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tasmania":
{
value: "224273",
tooltip: {content: "<span style=\"font-weight:bold;\">Tasmania (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 224273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Victoria":
{
value: "2222209",
tooltip: {content: "<span style=\"font-weight:bold;\">Victoria (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2222209<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Western_Australia":
{
value: "317587",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Australia (Australia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 317587<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lower_Austria":
{
value: "2599152",
tooltip: {content: "<span style=\"font-weight:bold;\">Lower Austria (Austria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2599152<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 35<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Tyrol":
{
value: "1502818",
tooltip: {content: "<span style=\"font-weight:bold;\">Tyrol (Austria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1502818<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Upper_Austria":
{
value: "2278155",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Austria (Austria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2278155<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 26<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vorarlberg":
{
value: "154542",
tooltip: {content: "<span style=\"font-weight:bold;\">Vorarlberg (Austria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 154542<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Burundi":
{
value: "2148350",
tooltip: {content: "<span style=\"font-weight:bold;\">Burundi (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2148350<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Coquilhatville":
{
value: "1696042",
tooltip: {content: "<span style=\"font-weight:bold;\">Coquilhatville (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1696042<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Costermansville":
{
value: "710902",
tooltip: {content: "<span style=\"font-weight:bold;\">Costermansville (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 710902<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Elisabethville":
{
value: "709054",
tooltip: {content: "<span style=\"font-weight:bold;\">Elisabethville (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 709054<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Leopoldville":
{
value: "1949899",
tooltip: {content: "<span style=\"font-weight:bold;\">Leopoldville (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1949899<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lusambo":
{
value: "886318",
tooltip: {content: "<span style=\"font-weight:bold;\">Lusambo (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 886318<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rwanda":
{
value: "1718659",
tooltip: {content: "<span style=\"font-weight:bold;\">Rwanda (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1718659<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Stanleyville":
{
value: "1658771",
tooltip: {content: "<span style=\"font-weight:bold;\">Stanleyville (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1658771<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vlaanderen":
{
value: "4753496",
tooltip: {content: "<span style=\"font-weight:bold;\">Vlaanderen (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4753496<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 67<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 7<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 5"}
},
"Wallonie":
{
value: "3385428",
tooltip: {content: "<span style=\"font-weight:bold;\">Wallonie (Belgium)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3385428<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 18<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bhutan":
{
value: "450549",
tooltip: {content: "<span style=\"font-weight:bold;\">Bhutan (Bhutan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 450549<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"La_Paz":
{
value: "2046996",
tooltip: {content: "<span style=\"font-weight:bold;\">La Paz (Bolivian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2046996<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 22<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Santa_Cruz":
{
value: "334908",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Cruz (Bolivian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 334908<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Borneo":
{
value: "890886",
tooltip: {content: "<span style=\"font-weight:bold;\">North Borneo (British Malaya)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 890886<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Singapore":
{
value: "2896732",
tooltip: {content: "<span style=\"font-weight:bold;\">Singapore (British Malaya)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2896732<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 12<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Arunachal_Pradesh":
{
value: "200244",
tooltip: {content: "<span style=\"font-weight:bold;\">Arunachal Pradesh (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 200244<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Assam":
{
value: "8988058",
tooltip: {content: "<span style=\"font-weight:bold;\">Assam (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8988058<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Baluchistan":
{
value: "464066",
tooltip: {content: "<span style=\"font-weight:bold;\">Baluchistan (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 464066<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bihar":
{
value: "36619147",
tooltip: {content: "<span style=\"font-weight:bold;\">Bihar (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 36619147<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bombay":
{
value: "17376786",
tooltip: {content: "<span style=\"font-weight:bold;\">Bombay (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 17376786<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Burma":
{
value: "10735589",
tooltip: {content: "<span style=\"font-weight:bold;\">Burma (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10735589<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Delhi":
{
value: "31174809",
tooltip: {content: "<span style=\"font-weight:bold;\">Delhi (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 31174809<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"East_Bengal":
{
value: "32012330",
tooltip: {content: "<span style=\"font-weight:bold;\">East Bengal (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 32012330<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gujarat":
{
value: "10603127",
tooltip: {content: "<span style=\"font-weight:bold;\">Gujarat (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10603127<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Hyderabad":
{
value: "14030506",
tooltip: {content: "<span style=\"font-weight:bold;\">Hyderabad (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 14030506<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Indore":
{
value: "8412757",
tooltip: {content: "<span style=\"font-weight:bold;\">Indore (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8412757<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jabalpur":
{
value: "14140340",
tooltip: {content: "<span style=\"font-weight:bold;\">Jabalpur (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 14140340<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kashmir":
{
value: "2126292",
tooltip: {content: "<span style=\"font-weight:bold;\">Kashmir (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2126292<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lucknow":
{
value: "33531883",
tooltip: {content: "<span style=\"font-weight:bold;\">Lucknow (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 33531883<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madras":
{
value: "15810977",
tooltip: {content: "<span style=\"font-weight:bold;\">Madras (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15810977<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madurai":
{
value: "29183080",
tooltip: {content: "<span style=\"font-weight:bold;\">Madurai (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 29183080<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mandalay":
{
value: "3949415",
tooltip: {content: "<span style=\"font-weight:bold;\">Mandalay (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3949415<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mysore":
{
value: "12363273",
tooltip: {content: "<span style=\"font-weight:bold;\">Mysore (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12363273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Kashmir":
{
value: "1417528",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Kashmir (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1417528<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Orissa":
{
value: "14537825",
tooltip: {content: "<span style=\"font-weight:bold;\">Orissa (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 14537825<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Peshawar":
{
value: "4690118",
tooltip: {content: "<span style=\"font-weight:bold;\">Peshawar (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4690118<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Punjab":
{
value: "13681681",
tooltip: {content: "<span style=\"font-weight:bold;\">Punjab (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13681681<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Quetta":
{
value: "405595",
tooltip: {content: "<span style=\"font-weight:bold;\">Quetta (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 405595<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rajahsthan":
{
value: "11800387",
tooltip: {content: "<span style=\"font-weight:bold;\">Rajahsthan (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11800387<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sind":
{
value: "3891745",
tooltip: {content: "<span style=\"font-weight:bold;\">Sind (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3891745<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"West_Bengal":
{
value: "18801022",
tooltip: {content: "<span style=\"font-weight:bold;\">West Bengal (British Raj)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18801022<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Burgas":
{
value: "1360052",
tooltip: {content: "<span style=\"font-weight:bold;\">Burgas (Bulgaria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1360052<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 13<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Moesia":
{
value: "1220268",
tooltip: {content: "<span style=\"font-weight:bold;\">Moesia (Bulgaria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1220268<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Plovdiv":
{
value: "1817151",
tooltip: {content: "<span style=\"font-weight:bold;\">Plovdiv (Bulgaria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1817151<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 14<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Sofia":
{
value: "1688047",
tooltip: {content: "<span style=\"font-weight:bold;\">Sofia (Bulgaria)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1688047<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 6<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Antofagasta":
{
value: "424122",
tooltip: {content: "<span style=\"font-weight:bold;\">Antofagasta (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 424122<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Araucanía":
{
value: "1301587",
tooltip: {content: "<span style=\"font-weight:bold;\">Araucanía (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1301587<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Arica_y_Tarapacá":
{
value: "340415",
tooltip: {content: "<span style=\"font-weight:bold;\">Arica y Tarapacá (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 340415<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Atacama":
{
value: "283951",
tooltip: {content: "<span style=\"font-weight:bold;\">Atacama (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 283951<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aysén":
{
value: "34389",
tooltip: {content: "<span style=\"font-weight:bold;\">Aysén (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 34389<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Easter_Island":
{
value: "6608",
tooltip: {content: "<span style=\"font-weight:bold;\">Easter Island (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6608<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Magallanes":
{
value: "34388",
tooltip: {content: "<span style=\"font-weight:bold;\">Magallanes (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 34388<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Santiago":
{
value: "2638363",
tooltip: {content: "<span style=\"font-weight:bold;\">Santiago (Chile)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2638363<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 26<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Anhui":
{
value: "18287697",
tooltip: {content: "<span style=\"font-weight:bold;\">Anhui (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18287697<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Beijing":
{
value: "9660178",
tooltip: {content: "<span style=\"font-weight:bold;\">Beijing (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 9660178<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Changde":
{
value: "8009766",
tooltip: {content: "<span style=\"font-weight:bold;\">Changde (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8009766<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Fujian":
{
value: "11769950",
tooltip: {content: "<span style=\"font-weight:bold;\">Fujian (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11769950<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ganzi":
{
value: "300366",
tooltip: {content: "<span style=\"font-weight:bold;\">Ganzi (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 300366<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guizhou":
{
value: "7552408",
tooltip: {content: "<span style=\"font-weight:bold;\">Guizhou (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7552408<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Hebei":
{
value: "18457404",
tooltip: {content: "<span style=\"font-weight:bold;\">Hebei (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18457404<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Henan":
{
value: "34331658",
tooltip: {content: "<span style=\"font-weight:bold;\">Henan (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 34331658<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Huangshan":
{
value: "5006104",
tooltip: {content: "<span style=\"font-weight:bold;\">Huangshan (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5006104<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hubei":
{
value: "25572779",
tooltip: {content: "<span style=\"font-weight:bold;\">Hubei (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 25572779<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Hunan":
{
value: "20318473",
tooltip: {content: "<span style=\"font-weight:bold;\">Hunan (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 20318473<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Jiangsu":
{
value: "23698193",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiangsu (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 23698193<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jiangxi":
{
value: "15839712",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiangxi (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15839712<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Liangshan":
{
value: "300366",
tooltip: {content: "<span style=\"font-weight:bold;\">Liangshan (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 300366<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Qingdao":
{
value: "385470",
tooltip: {content: "<span style=\"font-weight:bold;\">Qingdao (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 385470<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shandong":
{
value: "38420042",
tooltip: {content: "<span style=\"font-weight:bold;\">Shandong (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 38420042<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shanghai":
{
value: "17326224",
tooltip: {content: "<span style=\"font-weight:bold;\">Shanghai (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 17326224<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 28<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sichuan":
{
value: "53027952",
tooltip: {content: "<span style=\"font-weight:bold;\">Sichuan (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 53027952<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Xian":
{
value: "9010986",
tooltip: {content: "<span style=\"font-weight:bold;\">Xian (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 9010986<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Xikang":
{
value: "368649",
tooltip: {content: "<span style=\"font-weight:bold;\">Xikang (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 368649<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zhejiang":
{
value: "21256616",
tooltip: {content: "<span style=\"font-weight:bold;\">Zhejiang (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21256616<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zunyi":
{
value: "1501831",
tooltip: {content: "<span style=\"font-weight:bold;\">Zunyi (China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1501831<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cundinamarca":
{
value: "4959095",
tooltip: {content: "<span style=\"font-weight:bold;\">Cundinamarca (Colombia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4959095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"La_Libertad":
{
value: "2830232",
tooltip: {content: "<span style=\"font-weight:bold;\">La Libertad (Colombia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2830232<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Meta":
{
value: "213420",
tooltip: {content: "<span style=\"font-weight:bold;\">Meta (Colombia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 213420<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shaanxi":
{
value: "7014752",
tooltip: {content: "<span style=\"font-weight:bold;\">Shaanxi (Communist China)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7014752<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Costa_Rica":
{
value: "504471",
tooltip: {content: "<span style=\"font-weight:bold;\">Costa Rica (Costa Rica)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 504471<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Cuba":
{
value: "3612323",
tooltip: {content: "<span style=\"font-weight:bold;\">Cuba (Cuba)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3612323<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bohemia":
{
value: "4498084",
tooltip: {content: "<span style=\"font-weight:bold;\">Bohemia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4498084<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 40<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 6"}
},
"Carpathian_Ruthenia":
{
value: "855343",
tooltip: {content: "<span style=\"font-weight:bold;\">Carpathian Ruthenia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 855343<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Eastern_Slovakia":
{
value: "1199262",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1199262<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Eastern_Sudetenland":
{
value: "821001",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 821001<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Moravia":
{
value: "2601572",
tooltip: {content: "<span style=\"font-weight:bold;\">Moravia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2601572<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Slovakia":
{
value: "855343",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 855343<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sudetenland":
{
value: "2833455",
tooltip: {content: "<span style=\"font-weight:bold;\">Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2833455<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Western_Slovakia":
{
value: "1232002",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1232002<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Zaolzie":
{
value: "152186",
tooltip: {content: "<span style=\"font-weight:bold;\">Zaolzie (Czechoslovakia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 152186<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bornholm":
{
value: "45875",
tooltip: {content: "<span style=\"font-weight:bold;\">Bornholm (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 45875<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Faroe_Islands":
{
value: "25932",
tooltip: {content: "<span style=\"font-weight:bold;\">Faroe Islands (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 25932<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Fyn":
{
value: "497680",
tooltip: {content: "<span style=\"font-weight:bold;\">Fyn (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 497680<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Greenland":
{
value: "18022",
tooltip: {content: "<span style=\"font-weight:bold;\">Greenland (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18022<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jylland":
{
value: "1255708",
tooltip: {content: "<span style=\"font-weight:bold;\">Jylland (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1255708<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sjaelland":
{
value: "1493042",
tooltip: {content: "<span style=\"font-weight:bold;\">Sjaelland (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1493042<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 22<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Sønderjylland":
{
value: "418568",
tooltip: {content: "<span style=\"font-weight:bold;\">Sønderjylland (Denmark)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 418568<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dominican_Republic":
{
value: "1257533",
tooltip: {content: "<span style=\"font-weight:bold;\">Dominican Republic (Dominican Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1257533<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Alberta":
{
value: "691643",
tooltip: {content: "<span style=\"font-weight:bold;\">Alberta (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 691643<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"British_Columbia":
{
value: "638944",
tooltip: {content: "<span style=\"font-weight:bold;\">British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 638944<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Cote_Nord":
{
value: "110134",
tooltip: {content: "<span style=\"font-weight:bold;\">Cote_Nord (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 110134<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Districts_of_Ontario":
{
value: "10012",
tooltip: {content: "<span style=\"font-weight:bold;\">Districts of Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10012<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Haida_Gwaii":
{
value: "12699",
tooltip: {content: "<span style=\"font-weight:bold;\">Haida Gwaii (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12699<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Manitoba":
{
value: "641854",
tooltip: {content: "<span style=\"font-weight:bold;\">Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 641854<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Maurice":
{
value: "70085",
tooltip: {content: "<span style=\"font-weight:bold;\">Maurice (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 70085<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_Brunswick":
{
value: "475600",
tooltip: {content: "<span style=\"font-weight:bold;\">New Brunswick (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 475600<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nord_du_Quebec":
{
value: "8871",
tooltip: {content: "<span style=\"font-weight:bold;\">Nord du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8871<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Manitoba":
{
value: "10012",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10012<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Ontario":
{
value: "139229",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 139229<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Saskatchewan":
{
value: "65685",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 65685<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northwest_Territories":
{
value: "27715",
tooltip: {content: "<span style=\"font-weight:bold;\">Northwest Territories (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 27715<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nova_Scotia":
{
value: "491511",
tooltip: {content: "<span style=\"font-weight:bold;\">Nova Scotia (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 491511<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nunavut":
{
value: "46191",
tooltip: {content: "<span style=\"font-weight:bold;\">Nunavut (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 46191<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ouest_du_Quebec":
{
value: "80098",
tooltip: {content: "<span style=\"font-weight:bold;\">Ouest du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 80098<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Saguenay":
{
value: "50061",
tooltip: {content: "<span style=\"font-weight:bold;\">Saguenay (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 50061<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Saint_Lawrence":
{
value: "2435724",
tooltip: {content: "<span style=\"font-weight:bold;\">Saint Lawrence (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2435724<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 23<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Saskatchewan":
{
value: "800977",
tooltip: {content: "<span style=\"font-weight:bold;\">Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 800977<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Ontario":
{
value: "3120822",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3120822<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Upper_British_Columbia":
{
value: "27715",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 27715<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vancouver_Island":
{
value: "259929",
tooltip: {content: "<span style=\"font-weight:bold;\">Vancouver Island (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 259929<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yukon_Territory":
{
value: "10",
tooltip: {content: "<span style=\"font-weight:bold;\">Yukon Territory (Dominion of Canada)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aru_Islands":
{
value: "36190",
tooltip: {content: "<span style=\"font-weight:bold;\">Aru Islands (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 36190<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Java":
{
value: "41769126",
tooltip: {content: "<span style=\"font-weight:bold;\">Java (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 41769126<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kalimantan":
{
value: "2171247",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalimantan (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2171247<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lesser_Sunda_Islands":
{
value: "3464424",
tooltip: {content: "<span style=\"font-weight:bold;\">Lesser Sunda Islands (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3464424<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sulawesi":
{
value: "4237166",
tooltip: {content: "<span style=\"font-weight:bold;\">Sulawesi (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4237166<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sumatra":
{
value: "8264977",
tooltip: {content: "<span style=\"font-weight:bold;\">Sumatra (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8264977<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"The_Moluccas":
{
value: "579807",
tooltip: {content: "<span style=\"font-weight:bold;\">The Moluccas (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 579807<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"West_Papua":
{
value: "314684",
tooltip: {content: "<span style=\"font-weight:bold;\">West Papua (Dutch East Indies)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 314684<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ecuador":
{
value: "2002441",
tooltip: {content: "<span style=\"font-weight:bold;\">Ecuador (Ecuador)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2002441<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 17<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Galapagos_Islands":
{
value: "11546",
tooltip: {content: "<span style=\"font-weight:bold;\">Galapagos Islands (Ecuador)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11546<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pastaza":
{
value: "70105",
tooltip: {content: "<span style=\"font-weight:bold;\">Pastaza (Ecuador)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 70105<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"El_Salvador":
{
value: "1439366",
tooltip: {content: "<span style=\"font-weight:bold;\">El Salvador (El Salvador)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1439366<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Harju":
{
value: "275556",
tooltip: {content: "<span style=\"font-weight:bold;\">Harju (Estonia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 275556<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Pärnu":
{
value: "423586",
tooltip: {content: "<span style=\"font-weight:bold;\">Pärnu (Estonia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 423586<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Saaremaa":
{
value: "32410",
tooltip: {content: "<span style=\"font-weight:bold;\">Saaremaa (Estonia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 32410<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tartu":
{
value: "226116",
tooltip: {content: "<span style=\"font-weight:bold;\">Tartu (Estonia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 226116<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Virumaa":
{
value: "150744",
tooltip: {content: "<span style=\"font-weight:bold;\">Virumaa (Estonia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 150744<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bale":
{
value: "800977",
tooltip: {content: "<span style=\"font-weight:bold;\">Bale (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 800977<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Begemder":
{
value: "1101343",
tooltip: {content: "<span style=\"font-weight:bold;\">Begemder (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1101343<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gojjam":
{
value: "901099",
tooltip: {content: "<span style=\"font-weight:bold;\">Gojjam (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 901099<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hararghe":
{
value: "1501831",
tooltip: {content: "<span style=\"font-weight:bold;\">Hararghe (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1501831<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Illubabor_Kaffa":
{
value: "600732",
tooltip: {content: "<span style=\"font-weight:bold;\">Illubabor_Kaffa (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 600732<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shewa":
{
value: "1802197",
tooltip: {content: "<span style=\"font-weight:bold;\">Shewa (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1802197<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Sidamo":
{
value: "951160",
tooltip: {content: "<span style=\"font-weight:bold;\">Sidamo (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 951160<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tigray":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Tigray (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Welega":
{
value: "600732",
tooltip: {content: "<span style=\"font-weight:bold;\">Welega (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 600732<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wello":
{
value: "650793",
tooltip: {content: "<span style=\"font-weight:bold;\">Wello (Ethiopia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 650793<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Åland":
{
value: "28173",
tooltip: {content: "<span style=\"font-weight:bold;\">Åland (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 28173<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Häme":
{
value: "404994",
tooltip: {content: "<span style=\"font-weight:bold;\">Häme (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 404994<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Karjala":
{
value: "605165",
tooltip: {content: "<span style=\"font-weight:bold;\">Karjala (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 605165<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kuopio":
{
value: "392879",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuopio (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 392879<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kymi":
{
value: "43510",
tooltip: {content: "<span style=\"font-weight:bold;\">Kymi (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 43510<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lappi":
{
value: "121886",
tooltip: {content: "<span style=\"font-weight:bold;\">Lappi (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 121886<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mikkeli":
{
value: "204449",
tooltip: {content: "<span style=\"font-weight:bold;\">Mikkeli (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 204449<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oulu":
{
value: "318388",
tooltip: {content: "<span style=\"font-weight:bold;\">Oulu (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 318388<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Petsamo":
{
value: "2374",
tooltip: {content: "<span style=\"font-weight:bold;\">Petsamo (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2374<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Salla":
{
value: "4636",
tooltip: {content: "<span style=\"font-weight:bold;\">Salla (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4636<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Turku":
{
value: "529946",
tooltip: {content: "<span style=\"font-weight:bold;\">Turku (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 529946<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Uusimaa":
{
value: "559682",
tooltip: {content: "<span style=\"font-weight:bold;\">Uusimaa (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 559682<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 17<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Vaasa":
{
value: "595586",
tooltip: {content: "<span style=\"font-weight:bold;\">Vaasa (Finland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 595586<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aleppo":
{
value: "1327212",
tooltip: {content: "<span style=\"font-weight:bold;\">Aleppo (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1327212<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Algerian_Desert":
{
value: "207987",
tooltip: {content: "<span style=\"font-weight:bold;\">Algerian Desert (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 207987<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Algiers":
{
value: "3093716",
tooltip: {content: "<span style=\"font-weight:bold;\">Algiers (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3093716<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alpes":
{
value: "1008730",
tooltip: {content: "<span style=\"font-weight:bold;\">Alpes (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1008730<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alsace_Lorraine":
{
value: "1917938",
tooltip: {content: "<span style=\"font-weight:bold;\">Alsace_Lorraine (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1917938<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aquitaine":
{
value: "1141792",
tooltip: {content: "<span style=\"font-weight:bold;\">Aquitaine (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1141792<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Auvergne":
{
value: "878872",
tooltip: {content: "<span style=\"font-weight:bold;\">Auvergne (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 878872<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Borkou_Ennedi_Tibesti":
{
value: "18767",
tooltip: {content: "<span style=\"font-weight:bold;\">Borkou_Ennedi_Tibesti (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18767<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bamako":
{
value: "1664420",
tooltip: {content: "<span style=\"font-weight:bold;\">Bamako (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1664420<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bouches_du_Rhone":
{
value: "1672349",
tooltip: {content: "<span style=\"font-weight:bold;\">Bouches_du_Rhone (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1672349<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bourgogne":
{
value: "1372473",
tooltip: {content: "<span style=\"font-weight:bold;\">Bourgogne (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1372473<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Brittany":
{
value: "2399526",
tooltip: {content: "<span style=\"font-weight:bold;\">Brittany (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2399526<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 26<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cambodia":
{
value: "5251403",
tooltip: {content: "<span style=\"font-weight:bold;\">Cambodia (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5251403<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cameroon":
{
value: "2949378",
tooltip: {content: "<span style=\"font-weight:bold;\">Cameroon (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2949378<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Casablanca":
{
value: "3201622",
tooltip: {content: "<span style=\"font-weight:bold;\">Casablanca (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3201622<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Centre":
{
value: "1548188",
tooltip: {content: "<span style=\"font-weight:bold;\">Centre (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1548188<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Centre_Sud":
{
value: "637177",
tooltip: {content: "<span style=\"font-weight:bold;\">Centre_Sud (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 637177<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chad":
{
value: "1444217",
tooltip: {content: "<span style=\"font-weight:bold;\">Chad (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1444217<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Champagne":
{
value: "1372473",
tooltip: {content: "<span style=\"font-weight:bold;\">Champagne (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1372473<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Comoro_Islands":
{
value: "126858",
tooltip: {content: "<span style=\"font-weight:bold;\">Comoro Islands (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 126858<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Constantine":
{
value: "2346698",
tooltip: {content: "<span style=\"font-weight:bold;\">Constantine (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2346698<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Corsica":
{
value: "323294",
tooltip: {content: "<span style=\"font-weight:bold;\">Corsica (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 323294<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dahomey":
{
value: "1353213",
tooltip: {content: "<span style=\"font-weight:bold;\">Dahomey (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1353213<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Damascus":
{
value: "548466",
tooltip: {content: "<span style=\"font-weight:bold;\">Damascus (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 548466<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Deir_az_Zur":
{
value: "324506",
tooltip: {content: "<span style=\"font-weight:bold;\">Deir_az_Zur (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 324506<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Equatorial_Africa":
{
value: "1138309",
tooltip: {content: "<span style=\"font-weight:bold;\">Equatorial Africa (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1138309<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Franche_Comte":
{
value: "1519352",
tooltip: {content: "<span style=\"font-weight:bold;\">Franche_Comte (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1519352<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"French_Caribbean":
{
value: "444832",
tooltip: {content: "<span style=\"font-weight:bold;\">French Caribbean (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 444832<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"French_Guiana":
{
value: "47399",
tooltip: {content: "<span style=\"font-weight:bold;\">French Guiana (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 47399<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"French_India":
{
value: "286760",
tooltip: {content: "<span style=\"font-weight:bold;\">French India (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 286760<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"French_Somaliland":
{
value: "85336",
tooltip: {content: "<span style=\"font-weight:bold;\">French Somaliland (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 85336<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gabès":
{
value: "428346",
tooltip: {content: "<span style=\"font-weight:bold;\">Gabès (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 428346<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gabon":
{
value: "410252",
tooltip: {content: "<span style=\"font-weight:bold;\">Gabon (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 410252<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gao":
{
value: "499327",
tooltip: {content: "<span style=\"font-weight:bold;\">Gao (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 499327<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guangzhouwan":
{
value: "200244",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangzhouwan (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 200244<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guinea":
{
value: "195279",
tooltip: {content: "<span style=\"font-weight:bold;\">Guinea (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 195279<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hatay":
{
value: "234665",
tooltip: {content: "<span style=\"font-weight:bold;\">Hatay (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 234665<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ile_de_France":
{
value: "7047092",
tooltip: {content: "<span style=\"font-weight:bold;\">Ile de France (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7047092<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 50<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 4"}
},
"Ivory_Coast":
{
value: "3855435",
tooltip: {content: "<span style=\"font-weight:bold;\">Ivory Coast (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3855435<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kayes_Koulikoro":
{
value: "1165095",
tooltip: {content: "<span style=\"font-weight:bold;\">Kayes_Koulikoro (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1165095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kerguelen":
{
value: "96",
tooltip: {content: "<span style=\"font-weight:bold;\">Kerguelen (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 96<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Languedoc":
{
value: "1693264",
tooltip: {content: "<span style=\"font-weight:bold;\">Languedoc (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1693264<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Laos":
{
value: "1185445",
tooltip: {content: "<span style=\"font-weight:bold;\">Laos (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1185445<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lebanon":
{
value: "1105348",
tooltip: {content: "<span style=\"font-weight:bold;\">Lebanon (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1105348<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Limousin":
{
value: "1345340",
tooltip: {content: "<span style=\"font-weight:bold;\">Limousin (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1345340<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Loire":
{
value: "1390095",
tooltip: {content: "<span style=\"font-weight:bold;\">Loire (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1390095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madagascar":
{
value: "3699121",
tooltip: {content: "<span style=\"font-weight:bold;\">Madagascar (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3699121<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Marrakech":
{
value: "1867829",
tooltip: {content: "<span style=\"font-weight:bold;\">Marrakech (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1867829<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mauritania":
{
value: "225275",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritania (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 225275<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mauritanian_Desert":
{
value: "124352",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritanian Desert (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 124352<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Middle_Congo":
{
value: "747326",
tooltip: {content: "<span style=\"font-weight:bold;\">Middle Congo (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 747326<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Midi_Pyrenees":
{
value: "1827228",
tooltip: {content: "<span style=\"font-weight:bold;\">Midi Pyrenees (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1827228<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Nendo":
{
value: "5173",
tooltip: {content: "<span style=\"font-weight:bold;\">Nendo (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5173<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_Caledonia":
{
value: "51939",
tooltip: {content: "<span style=\"font-weight:bold;\">New Caledonia (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 51939<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Niger":
{
value: "544481",
tooltip: {content: "<span style=\"font-weight:bold;\">Niger (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 544481<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nord_Pas_de_Calais":
{
value: "2980033",
tooltip: {content: "<span style=\"font-weight:bold;\">Nord_Pas_de_Calais (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2980033<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Normandy":
{
value: "2334947",
tooltip: {content: "<span style=\"font-weight:bold;\">Normandy (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2334947<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Picardy":
{
value: "1581929",
tooltip: {content: "<span style=\"font-weight:bold;\">Picardy (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1581929<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Poitou":
{
value: "1605057",
tooltip: {content: "<span style=\"font-weight:bold;\">Poitou (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1605057<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pyrénées_Atlantiques":
{
value: "281066",
tooltip: {content: "<span style=\"font-weight:bold;\">Pyrénées_Atlantiques (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 281066<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Reunion":
{
value: "186865",
tooltip: {content: "<span style=\"font-weight:bold;\">Reunion (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 186865<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rhone":
{
value: "2976829",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhone (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2976829<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Savoy":
{
value: "908608",
tooltip: {content: "<span style=\"font-weight:bold;\">Savoy (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 908608<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Senegal":
{
value: "1640000",
tooltip: {content: "<span style=\"font-weight:bold;\">Senegal (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1640000<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Indochina":
{
value: "5251403",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Indochina (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5251403<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Sahara":
{
value: "1458134",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Sahara (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1458134<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"St_Pierre_and_Miquelon":
{
value: "3430",
tooltip: {content: "<span style=\"font-weight:bold;\">St Pierre and Miquelon (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3430<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tahiti":
{
value: "105915",
tooltip: {content: "<span style=\"font-weight:bold;\">Tahiti (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 105915<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tlemcen":
{
value: "812477",
tooltip: {content: "<span style=\"font-weight:bold;\">Tlemcen (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 812477<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Togo":
{
value: "1102690",
tooltip: {content: "<span style=\"font-weight:bold;\">Togo (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1102690<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tombouctou":
{
value: "79340",
tooltip: {content: "<span style=\"font-weight:bold;\">Tombouctou (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 79340<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tonkin":
{
value: "11542072",
tooltip: {content: "<span style=\"font-weight:bold;\">Tonkin (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11542072<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tunisia":
{
value: "1985361",
tooltip: {content: "<span style=\"font-weight:bold;\">Tunisia (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1985361<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 12<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Upper_Volta":
{
value: "3190073",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Volta (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3190073<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Var":
{
value: "485592",
tooltip: {content: "<span style=\"font-weight:bold;\">Var (France)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 485592<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Brandenburg":
{
value: "7273897",
tooltip: {content: "<span style=\"font-weight:bold;\">Brandenburg (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7273897<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 55<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 5"}
},
"Ermland_Masuren":
{
value: "1239619",
tooltip: {content: "<span style=\"font-weight:bold;\">Ermland_Masuren (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1239619<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Franken":
{
value: "2511221",
tooltip: {content: "<span style=\"font-weight:bold;\">Franken (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2511221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hannover":
{
value: "2441262",
tooltip: {content: "<span style=\"font-weight:bold;\">Hannover (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2441262<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Hessen":
{
value: "3802872",
tooltip: {content: "<span style=\"font-weight:bold;\">Hessen (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3802872<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 23<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Hinterpommern":
{
value: "1125790",
tooltip: {content: "<span style=\"font-weight:bold;\">Hinterpommern (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1125790<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Holstein":
{
value: "3099409",
tooltip: {content: "<span style=\"font-weight:bold;\">Holstein (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3099409<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Königsberg":
{
value: "2142847",
tooltip: {content: "<span style=\"font-weight:bold;\">Königsberg (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2142847<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mecklenburg":
{
value: "837374",
tooltip: {content: "<span style=\"font-weight:bold;\">Mecklenburg (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 837374<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Moselland":
{
value: "3031435",
tooltip: {content: "<span style=\"font-weight:bold;\">Moselland (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3031435<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Niederbayern":
{
value: "1455139",
tooltip: {content: "<span style=\"font-weight:bold;\">Niederbayern (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1455139<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Niederschlesien":
{
value: "3056452",
tooltip: {content: "<span style=\"font-weight:bold;\">Niederschlesien (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3056452<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oberbayern":
{
value: "2682684",
tooltip: {content: "<span style=\"font-weight:bold;\">Oberbayern (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2682684<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 23<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Oberschlesien":
{
value: "1404303",
tooltip: {content: "<span style=\"font-weight:bold;\">Oberschlesien (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1404303<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ostmark":
{
value: "1252367",
tooltip: {content: "<span style=\"font-weight:bold;\">Ostmark (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1252367<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rhineland":
{
value: "6152244",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhineland (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6152244<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Sachsen":
{
value: "5599403",
tooltip: {content: "<span style=\"font-weight:bold;\">Sachsen (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5599403<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 7<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Schleswig":
{
value: "152706",
tooltip: {content: "<span style=\"font-weight:bold;\">Schleswig (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 152706<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Thüringen":
{
value: "3008882",
tooltip: {content: "<span style=\"font-weight:bold;\">Thüringen (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3008882<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vorpommern":
{
value: "1007449",
tooltip: {content: "<span style=\"font-weight:bold;\">Vorpommern (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1007449<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Weser_Ems":
{
value: "2060980",
tooltip: {content: "<span style=\"font-weight:bold;\">Weser_Ems (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2060980<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Westfalen":
{
value: "5115570",
tooltip: {content: "<span style=\"font-weight:bold;\">Westfalen (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5115570<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Württemberg":
{
value: "5093064",
tooltip: {content: "<span style=\"font-weight:bold;\">Württemberg (German Reich)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5093064<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 23<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 5"}
},
"Guangdong":
{
value: "12715503",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangdong (Guangxi Clique)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12715503<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guangxi":
{
value: "8695802",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangxi (Guangxi Clique)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8695802<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Guangzhou":
{
value: "17856971",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangzhou (Guangxi Clique)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 17856971<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Hainan":
{
value: "4355310",
tooltip: {content: "<span style=\"font-weight:bold;\">Hainan (Guangxi Clique)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4355310<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nanning":
{
value: "6557996",
tooltip: {content: "<span style=\"font-weight:bold;\">Nanning (Guangxi Clique)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6557996<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guatemala":
{
value: "1773162",
tooltip: {content: "<span style=\"font-weight:bold;\">Guatemala (Guatemala)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1773162<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Haiti":
{
value: "2382905",
tooltip: {content: "<span style=\"font-weight:bold;\">Haiti (Haiti)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2382905<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Honduras":
{
value: "860811",
tooltip: {content: "<span style=\"font-weight:bold;\">Honduras (Honduras)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 860811<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Iceland":
{
value: "116011",
tooltip: {content: "<span style=\"font-weight:bold;\">Iceland (Iceland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 116011<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Fars":
{
value: "919740",
tooltip: {content: "<span style=\"font-weight:bold;\">Fars (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 919740<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gilan":
{
value: "1316553",
tooltip: {content: "<span style=\"font-weight:bold;\">Gilan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1316553<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hamadan":
{
value: "797368",
tooltip: {content: "<span style=\"font-weight:bold;\">Hamadan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 797368<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Isfahan":
{
value: "886353",
tooltip: {content: "<span style=\"font-weight:bold;\">Isfahan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 886353<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kerman":
{
value: "486606",
tooltip: {content: "<span style=\"font-weight:bold;\">Kerman (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 486606<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khorasan":
{
value: "1061033",
tooltip: {content: "<span style=\"font-weight:bold;\">Khorasan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1061033<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khuzestan":
{
value: "798329",
tooltip: {content: "<span style=\"font-weight:bold;\">Khuzestan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 798329<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kurdistan":
{
value: "781230",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurdistan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 781230<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Semnan":
{
value: "332768",
tooltip: {content: "<span style=\"font-weight:bold;\">Semnan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 332768<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sistan":
{
value: "341469",
tooltip: {content: "<span style=\"font-weight:bold;\">Sistan (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 341469<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tehran":
{
value: "3450457",
tooltip: {content: "<span style=\"font-weight:bold;\">Tehran (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3450457<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tibriz":
{
value: "1433462",
tooltip: {content: "<span style=\"font-weight:bold;\">Tibriz (Iran)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1433462<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Al_Hajara":
{
value: "122242",
tooltip: {content: "<span style=\"font-weight:bold;\">Al Hajara (Iraq)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 122242<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Baghdad":
{
value: "2046660",
tooltip: {content: "<span style=\"font-weight:bold;\">Baghdad (Iraq)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2046660<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 19<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Mosul":
{
value: "1184185",
tooltip: {content: "<span style=\"font-weight:bold;\">Mosul (Iraq)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1184185<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Connaught":
{
value: "667914",
tooltip: {content: "<span style=\"font-weight:bold;\">Connaught (Ireland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 667914<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Leinster":
{
value: "1359257",
tooltip: {content: "<span style=\"font-weight:bold;\">Leinster (Ireland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1359257<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 12<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Munster":
{
value: "942549",
tooltip: {content: "<span style=\"font-weight:bold;\">Munster (Ireland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 942549<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Abruzzo":
{
value: "2982972",
tooltip: {content: "<span style=\"font-weight:bold;\">Abruzzo (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2982972<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alto_Adige":
{
value: "298654",
tooltip: {content: "<span style=\"font-weight:bold;\">Alto Adige (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 298654<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Benghasi":
{
value: "82636",
tooltip: {content: "<span style=\"font-weight:bold;\">Benghasi (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 82636<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Calabria":
{
value: "1774163",
tooltip: {content: "<span style=\"font-weight:bold;\">Calabria (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1774163<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Campania":
{
value: "4245176",
tooltip: {content: "<span style=\"font-weight:bold;\">Campania (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4245176<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Cyrenaica":
{
value: "8819",
tooltip: {content: "<span style=\"font-weight:bold;\">Cyrenaica (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8819<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Derna":
{
value: "45684",
tooltip: {content: "<span style=\"font-weight:bold;\">Derna (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 45684<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dodecanese":
{
value: "120146",
tooltip: {content: "<span style=\"font-weight:bold;\">Dodecanese (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 120146<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"El_Agheila":
{
value: "40480",
tooltip: {content: "<span style=\"font-weight:bold;\">El Agheila (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 40480<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Emilia_Romagna":
{
value: "3206310",
tooltip: {content: "<span style=\"font-weight:bold;\">Emilia Romagna (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3206310<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Eritrea":
{
value: "601333",
tooltip: {content: "<span style=\"font-weight:bold;\">Eritrea (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 601333<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Istria":
{
value: "126004",
tooltip: {content: "<span style=\"font-weight:bold;\">Istria (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 126004<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jubaland":
{
value: "1030151",
tooltip: {content: "<span style=\"font-weight:bold;\">Jubaland (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1030151<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lazio":
{
value: "2785367",
tooltip: {content: "<span style=\"font-weight:bold;\">Lazio (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2785367<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 41<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Libyan_Desert":
{
value: "42685",
tooltip: {content: "<span style=\"font-weight:bold;\">Libyan Desert (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 42685<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Litorale":
{
value: "1039426",
tooltip: {content: "<span style=\"font-weight:bold;\">Litorale (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1039426<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Lombardia":
{
value: "5604537",
tooltip: {content: "<span style=\"font-weight:bold;\">Lombardia (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5604537<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 18<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 7"}
},
"Piemonte":
{
value: "4771293",
tooltip: {content: "<span style=\"font-weight:bold;\">Piemonte (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4771293<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 7"}
},
"Puglia":
{
value: "2645225",
tooltip: {content: "<span style=\"font-weight:bold;\">Puglia (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2645225<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 24<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sardegna":
{
value: "993132",
tooltip: {content: "<span style=\"font-weight:bold;\">Sardegna (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 993132<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sicilia":
{
value: "3841254",
tooltip: {content: "<span style=\"font-weight:bold;\">Sicilia (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3841254<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 31<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sirte":
{
value: "13229",
tooltip: {content: "<span style=\"font-weight:bold;\">Sirte (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13229<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Somaliland":
{
value: "772613",
tooltip: {content: "<span style=\"font-weight:bold;\">Somaliland (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 772613<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Toscana":
{
value: "3088699",
tooltip: {content: "<span style=\"font-weight:bold;\">Toscana (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3088699<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Trentino":
{
value: "371192",
tooltip: {content: "<span style=\"font-weight:bold;\">Trentino (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 371192<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tripoli":
{
value: "469709",
tooltip: {content: "<span style=\"font-weight:bold;\">Tripoli (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 469709<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tripolitania":
{
value: "17639",
tooltip: {content: "<span style=\"font-weight:bold;\">Tripolitania (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 17639<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Veneto":
{
value: "3967989",
tooltip: {content: "<span style=\"font-weight:bold;\">Veneto (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3967989<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 14<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Zara":
{
value: "18022",
tooltip: {content: "<span style=\"font-weight:bold;\">Zara (Italy)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18022<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Caroline_Islands":
{
value: "42409",
tooltip: {content: "<span style=\"font-weight:bold;\">Caroline Islands (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 42409<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chugoku":
{
value: "5347520",
tooltip: {content: "<span style=\"font-weight:bold;\">Chugoku (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5347520<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Dalian":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalian (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"East_Hebei":
{
value: "6407813",
tooltip: {content: "<span style=\"font-weight:bold;\">East Hebei (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6407813<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Hokkaido":
{
value: "2815433",
tooltip: {content: "<span style=\"font-weight:bold;\">Hokkaido (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2815433<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 22<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hokuriku":
{
value: "1935360",
tooltip: {content: "<span style=\"font-weight:bold;\">Hokuriku (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1935360<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Iwo_Jima":
{
value: "1019",
tooltip: {content: "<span style=\"font-weight:bold;\">Iwo Jima (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1019<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kansai":
{
value: "11028446",
tooltip: {content: "<span style=\"font-weight:bold;\">Kansai (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11028446<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 60<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Kanto":
{
value: "13789813",
tooltip: {content: "<span style=\"font-weight:bold;\">Kanto (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13789813<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 90<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Koshinetsu":
{
value: "3875725",
tooltip: {content: "<span style=\"font-weight:bold;\">Koshinetsu (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3875725<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Kuril_Islands":
{
value: "15018",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuril Islands (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15018<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kyushu":
{
value: "9080071",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyushu (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 9080071<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 55<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Marcus_Island":
{
value: "42",
tooltip: {content: "<span style=\"font-weight:bold;\">Marcus Island (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 42<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Marshall_Islands":
{
value: "52581",
tooltip: {content: "<span style=\"font-weight:bold;\">Marshall Islands (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 52581<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Korea":
{
value: "6782469",
tooltip: {content: "<span style=\"font-weight:bold;\">North Korea (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6782469<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Okinawa":
{
value: "578706",
tooltip: {content: "<span style=\"font-weight:bold;\">Okinawa (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 578706<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Palau":
{
value: "12115",
tooltip: {content: "<span style=\"font-weight:bold;\">Palau (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12115<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Saipan":
{
value: "21683",
tooltip: {content: "<span style=\"font-weight:bold;\">Saipan (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21683<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shikoku":
{
value: "3314041",
tooltip: {content: "<span style=\"font-weight:bold;\">Shikoku (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3314041<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"South_Korea":
{
value: "14301542",
tooltip: {content: "<span style=\"font-weight:bold;\">South Korea (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 14301542<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"South_Sakhalin":
{
value: "295556",
tooltip: {content: "<span style=\"font-weight:bold;\">South Sakhalin (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 295556<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Taiwan":
{
value: "4598143",
tooltip: {content: "<span style=\"font-weight:bold;\">Taiwan (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4598143<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tohoku":
{
value: "6583026",
tooltip: {content: "<span style=\"font-weight:bold;\">Tohoku (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6583026<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tokai":
{
value: "6181537",
tooltip: {content: "<span style=\"font-weight:bold;\">Tokai (Japan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6181537<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 28<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Aegean_Islands":
{
value: "322994",
tooltip: {content: "<span style=\"font-weight:bold;\">Aegean Islands (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 322994<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Attica":
{
value: "2315323",
tooltip: {content: "<span style=\"font-weight:bold;\">Attica (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2315323<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 27<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Central_Macedonia":
{
value: "1157111",
tooltip: {content: "<span style=\"font-weight:bold;\">Central Macedonia (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1157111<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Crete":
{
value: "388374",
tooltip: {content: "<span style=\"font-weight:bold;\">Crete (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 388374<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Epirus":
{
value: "761829",
tooltip: {content: "<span style=\"font-weight:bold;\">Epirus (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 761829<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Peloponnese":
{
value: "946154",
tooltip: {content: "<span style=\"font-weight:bold;\">Peloponnese (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 946154<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Thrace":
{
value: "382967",
tooltip: {content: "<span style=\"font-weight:bold;\">Thrace (Kingdom of Greece)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 382967<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Alföld":
{
value: "2738722",
tooltip: {content: "<span style=\"font-weight:bold;\">Alföld (Kingdom of Hungary)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2738722<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Northern_Hungary":
{
value: "3755331",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Hungary (Kingdom of Hungary)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3755331<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 4"}
},
"Transdanubia":
{
value: "2200288",
tooltip: {content: "<span style=\"font-weight:bold;\">Transdanubia (Kingdom of Hungary)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2200288<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Kurzeme":
{
value: "315885",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurzeme (Latvia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 315885<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Latgale":
{
value: "600983",
tooltip: {content: "<span style=\"font-weight:bold;\">Latgale (Latvia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 600983<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Rīga":
{
value: "420763",
tooltip: {content: "<span style=\"font-weight:bold;\">Rīga (Latvia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 420763<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Vidzeme":
{
value: "408999",
tooltip: {content: "<span style=\"font-weight:bold;\">Vidzeme (Latvia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 408999<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zemgale":
{
value: "215763",
tooltip: {content: "<span style=\"font-weight:bold;\">Zemgale (Latvia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 215763<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Liberia":
{
value: "745909",
tooltip: {content: "<span style=\"font-weight:bold;\">Liberia (Liberia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 745909<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Aukštaitija":
{
value: "161647",
tooltip: {content: "<span style=\"font-weight:bold;\">Aukštaitija (Lithuania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 161647<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kaunas":
{
value: "973126",
tooltip: {content: "<span style=\"font-weight:bold;\">Kaunas (Lithuania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 973126<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Memel":
{
value: "150183",
tooltip: {content: "<span style=\"font-weight:bold;\">Memel (Lithuania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 150183<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sūduva":
{
value: "220008",
tooltip: {content: "<span style=\"font-weight:bold;\">Sūduva (Lithuania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 220008<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Žemaitija":
{
value: "697951",
tooltip: {content: "<span style=\"font-weight:bold;\">Žemaitija (Lithuania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 697951<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Luxembourg":
{
value: "295108",
tooltip: {content: "<span style=\"font-weight:bold;\">Luxembourg (Luxembourg)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 295108<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Heilungkiang":
{
value: "3698701",
tooltip: {content: "<span style=\"font-weight:bold;\">Heilungkiang (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3698701<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hulunbuir":
{
value: "2002441",
tooltip: {content: "<span style=\"font-weight:bold;\">Hulunbuir (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2002441<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jehol":
{
value: "1977788",
tooltip: {content: "<span style=\"font-weight:bold;\">Jehol (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1977788<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kirin":
{
value: "7545466",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirin (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7545466<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Liaoning":
{
value: "3647820",
tooltip: {content: "<span style=\"font-weight:bold;\">Liaoning (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3647820<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Liaotung":
{
value: "10277150",
tooltip: {content: "<span style=\"font-weight:bold;\">Liaotung (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10277150<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Sungkiang":
{
value: "5230551",
tooltip: {content: "<span style=\"font-weight:bold;\">Sungkiang (Manchukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5230551<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chahar":
{
value: "566691",
tooltip: {content: "<span style=\"font-weight:bold;\">Chahar (Mengkukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 566691<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Chahar":
{
value: "1471794",
tooltip: {content: "<span style=\"font-weight:bold;\">South Chahar (Mengkukuo)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1471794<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Baja_California":
{
value: "108974",
tooltip: {content: "<span style=\"font-weight:bold;\">Baja California (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 108974<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chiapas":
{
value: "806858",
tooltip: {content: "<span style=\"font-weight:bold;\">Chiapas (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 806858<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chihuahua":
{
value: "521387",
tooltip: {content: "<span style=\"font-weight:bold;\">Chihuahua (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 521387<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Coahuila":
{
value: "828837",
tooltip: {content: "<span style=\"font-weight:bold;\">Coahuila (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 828837<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Durango":
{
value: "1256626",
tooltip: {content: "<span style=\"font-weight:bold;\">Durango (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1256626<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guerrero":
{
value: "1600262",
tooltip: {content: "<span style=\"font-weight:bold;\">Guerrero (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1600262<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jalisco":
{
value: "2473891",
tooltip: {content: "<span style=\"font-weight:bold;\">Jalisco (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2473891<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mexico_City":
{
value: "3428583",
tooltip: {content: "<span style=\"font-weight:bold;\">Mexico City (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3428583<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 35<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Oaxaca":
{
value: "1665361",
tooltip: {content: "<span style=\"font-weight:bold;\">Oaxaca (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1665361<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sonora":
{
value: "304358",
tooltip: {content: "<span style=\"font-weight:bold;\">Sonora (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 304358<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tamaulipas":
{
value: "1034249",
tooltip: {content: "<span style=\"font-weight:bold;\">Tamaulipas (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1034249<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Veracruz":
{
value: "1953842",
tooltip: {content: "<span style=\"font-weight:bold;\">Veracruz (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1953842<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yucatan":
{
value: "440826",
tooltip: {content: "<span style=\"font-weight:bold;\">Yucatan (Mexico)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 440826<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dornod":
{
value: "88358",
tooltip: {content: "<span style=\"font-weight:bold;\">Dornod (Mongolia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 88358<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gobi":
{
value: "11013",
tooltip: {content: "<span style=\"font-weight:bold;\">Gobi (Mongolia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11013<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khovd":
{
value: "149182",
tooltip: {content: "<span style=\"font-weight:bold;\">Khovd (Mongolia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 149182<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khövsgöl":
{
value: "88308",
tooltip: {content: "<span style=\"font-weight:bold;\">Khövsgöl (Mongolia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 88308<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ulaanbaatar":
{
value: "436082",
tooltip: {content: "<span style=\"font-weight:bold;\">Ulaanbaatar (Mongolia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 436082<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Nepal":
{
value: "5580595",
tooltip: {content: "<span style=\"font-weight:bold;\">Nepal (Nepal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5580595<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Brabant":
{
value: "1450769",
tooltip: {content: "<span style=\"font-weight:bold;\">Brabant (Netherlands)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1450769<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Curaçao":
{
value: "76392",
tooltip: {content: "<span style=\"font-weight:bold;\">Curaçao (Netherlands)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 76392<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Friesland":
{
value: "2366886",
tooltip: {content: "<span style=\"font-weight:bold;\">Friesland (Netherlands)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2366886<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Holland":
{
value: "4128033",
tooltip: {content: "<span style=\"font-weight:bold;\">Holland (Netherlands)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4128033<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 70<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 4"}
},
"Suriname":
{
value: "152186",
tooltip: {content: "<span style=\"font-weight:bold;\">Suriname (Netherlands)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 152186<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Island":
{
value: "900934",
tooltip: {content: "<span style=\"font-weight:bold;\">North Island (New Zealand)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 900934<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Samoa":
{
value: "123364",
tooltip: {content: "<span style=\"font-weight:bold;\">Samoa (New Zealand)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 123364<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Island":
{
value: "547866",
tooltip: {content: "<span style=\"font-weight:bold;\">South Island (New Zealand)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 547866<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nicaragua":
{
value: "683834",
tooltip: {content: "<span style=\"font-weight:bold;\">Nicaragua (Nicaragua)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 683834<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Agder":
{
value: "396909",
tooltip: {content: "<span style=\"font-weight:bold;\">Agder (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 396909<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Finnmark":
{
value: "142273",
tooltip: {content: "<span style=\"font-weight:bold;\">Finnmark (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 142273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Helgeland":
{
value: "88920",
tooltip: {content: "<span style=\"font-weight:bold;\">Helgeland (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 88920<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jan_Mayen":
{
value: "10",
tooltip: {content: "<span style=\"font-weight:bold;\">Jan Mayen (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nordland":
{
value: "142273",
tooltip: {content: "<span style=\"font-weight:bold;\">Nordland (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 142273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Opplandene":
{
value: "211790",
tooltip: {content: "<span style=\"font-weight:bold;\">Opplandene (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 211790<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oslofjord":
{
value: "1058476",
tooltip: {content: "<span style=\"font-weight:bold;\">Oslofjord (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1058476<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Telemark":
{
value: "141675",
tooltip: {content: "<span style=\"font-weight:bold;\">Telemark (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 141675<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Troms":
{
value: "142273",
tooltip: {content: "<span style=\"font-weight:bold;\">Troms (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 142273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Trøndelag":
{
value: "280613",
tooltip: {content: "<span style=\"font-weight:bold;\">Trøndelag (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 280613<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vestlandet":
{
value: "485111",
tooltip: {content: "<span style=\"font-weight:bold;\">Vestlandet (Norway)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 485111<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oman":
{
value: "369450",
tooltip: {content: "<span style=\"font-weight:bold;\">Oman (Oman)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 369450<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Panamá":
{
value: "468030",
tooltip: {content: "<span style=\"font-weight:bold;\">Panamá (Panama)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 468030<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Arequipa":
{
value: "1603233",
tooltip: {content: "<span style=\"font-weight:bold;\">Arequipa (Peru)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1603233<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lima":
{
value: "3567599",
tooltip: {content: "<span style=\"font-weight:bold;\">Lima (Peru)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3567599<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 12<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 6<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Loreto":
{
value: "176842",
tooltip: {content: "<span style=\"font-weight:bold;\">Loreto (Peru)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 176842<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tacna_Moquegua":
{
value: "130159",
tooltip: {content: "<span style=\"font-weight:bold;\">Tacna_Moquegua (Peru)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 130159<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ucayali":
{
value: "736724",
tooltip: {content: "<span style=\"font-weight:bold;\">Ucayali (Peru)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 736724<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cebu":
{
value: "3530019",
tooltip: {content: "<span style=\"font-weight:bold;\">Cebu (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3530019<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Central_islands":
{
value: "1292248",
tooltip: {content: "<span style=\"font-weight:bold;\">Central islands (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1292248<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Luzon":
{
value: "2013110",
tooltip: {content: "<span style=\"font-weight:bold;\">Luzon (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2013110<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Manila":
{
value: "3553016",
tooltip: {content: "<span style=\"font-weight:bold;\">Manila (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3553016<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Mindanao":
{
value: "1498335",
tooltip: {content: "<span style=\"font-weight:bold;\">Mindanao (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1498335<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Palawan":
{
value: "83142",
tooltip: {content: "<span style=\"font-weight:bold;\">Palawan (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 83142<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Samar":
{
value: "1140114",
tooltip: {content: "<span style=\"font-weight:bold;\">Samar (Philippines)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1140114<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Białystok":
{
value: "1158613",
tooltip: {content: "<span style=\"font-weight:bold;\">Białystok (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1158613<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Danzig":
{
value: "367178",
tooltip: {content: "<span style=\"font-weight:bold;\">Danzig (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 367178<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Gdynia":
{
value: "714241",
tooltip: {content: "<span style=\"font-weight:bold;\">Gdynia (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 714241<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Katowice":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Katowice (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kielce":
{
value: "1837941",
tooltip: {content: "<span style=\"font-weight:bold;\">Kielce (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1837941<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kraków":
{
value: "3697308",
tooltip: {content: "<span style=\"font-weight:bold;\">Kraków (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3697308<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 24<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Lodz":
{
value: "2635213",
tooltip: {content: "<span style=\"font-weight:bold;\">Lodz (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2635213<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lublin":
{
value: "2467609",
tooltip: {content: "<span style=\"font-weight:bold;\">Lublin (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2467609<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lwów":
{
value: "3231740",
tooltip: {content: "<span style=\"font-weight:bold;\">Lwów (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3231740<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nowogródek":
{
value: "1600852",
tooltip: {content: "<span style=\"font-weight:bold;\">Nowogródek (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1600852<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Płock":
{
value: "1413824",
tooltip: {content: "<span style=\"font-weight:bold;\">Płock (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1413824<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Polesie":
{
value: "1233704",
tooltip: {content: "<span style=\"font-weight:bold;\">Polesie (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1233704<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Poznan":
{
value: "2109071",
tooltip: {content: "<span style=\"font-weight:bold;\">Poznan (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2109071<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Stanisławów":
{
value: "2182961",
tooltip: {content: "<span style=\"font-weight:bold;\">Stanisławów (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2182961<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Warszawa":
{
value: "3092771",
tooltip: {content: "<span style=\"font-weight:bold;\">Warszawa (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3092771<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 26<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 6"}
},
"Wilejka":
{
value: "726886",
tooltip: {content: "<span style=\"font-weight:bold;\">Wilejka (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 726886<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wilno":
{
value: "517712",
tooltip: {content: "<span style=\"font-weight:bold;\">Wilno (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 517712<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wołyn":
{
value: "1988024",
tooltip: {content: "<span style=\"font-weight:bold;\">Wołyn (Poland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1988024<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Azores":
{
value: "212271",
tooltip: {content: "<span style=\"font-weight:bold;\">Azores (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 212271<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Beja":
{
value: "778845",
tooltip: {content: "<span style=\"font-weight:bold;\">Beja (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 778845<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cape_Verde":
{
value: "150784",
tooltip: {content: "<span style=\"font-weight:bold;\">Cape Verde (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 150784<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Goa":
{
value: "534604",
tooltip: {content: "<span style=\"font-weight:bold;\">Goa (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 534604<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guarda":
{
value: "965878",
tooltip: {content: "<span style=\"font-weight:bold;\">Guarda (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 965878<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lisbon":
{
value: "1998236",
tooltip: {content: "<span style=\"font-weight:bold;\">Lisbon (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1998236<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Lourenço_Marques":
{
value: "1227497",
tooltip: {content: "<span style=\"font-weight:bold;\">Lourenço Marques (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1227497<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Luanda":
{
value: "1601953",
tooltip: {content: "<span style=\"font-weight:bold;\">Luanda (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1601953<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Macau":
{
value: "157998",
tooltip: {content: "<span style=\"font-weight:bold;\">Macau (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 157998<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madeira":
{
value: "211858",
tooltip: {content: "<span style=\"font-weight:bold;\">Madeira (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 211858<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Manica_e_Sofala":
{
value: "188830",
tooltip: {content: "<span style=\"font-weight:bold;\">Manica e Sofala (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 188830<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Angola":
{
value: "25031",
tooltip: {content: "<span style=\"font-weight:bold;\">North Angola (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 25031<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Porto":
{
value: "1906925",
tooltip: {content: "<span style=\"font-weight:bold;\">Porto (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1906925<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Portuguese_Guinea":
{
value: "365345",
tooltip: {content: "<span style=\"font-weight:bold;\">Portuguese Guinea (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 365345<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Portuguese_Timor":
{
value: "456160",
tooltip: {content: "<span style=\"font-weight:bold;\">Portuguese Timor (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 456160<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Santarém":
{
value: "730603",
tooltip: {content: "<span style=\"font-weight:bold;\">Santarém (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 730603<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sao_Tome":
{
value: "24755",
tooltip: {content: "<span style=\"font-weight:bold;\">Sao Tome (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 24755<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_West_Angola":
{
value: "961172",
tooltip: {content: "<span style=\"font-weight:bold;\">South West Angola (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 961172<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zambesi":
{
value: "640781",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambesi (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 640781<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zambezia_Mosambique":
{
value: "1387692",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambezia_Mosambique (Portugal)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1387692<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chaco_Boreal":
{
value: "45956",
tooltip: {content: "<span style=\"font-weight:bold;\">Chaco Boreal (Republic of Paraguay)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 45956<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Paraguay":
{
value: "891187",
tooltip: {content: "<span style=\"font-weight:bold;\">Paraguay (Republic of Paraguay)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 891187<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Banat":
{
value: "942649",
tooltip: {content: "<span style=\"font-weight:bold;\">Banat (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 942649<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bessarabia":
{
value: "2299604",
tooltip: {content: "<span style=\"font-weight:bold;\">Bessarabia (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2299604<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bucovina":
{
value: "475179",
tooltip: {content: "<span style=\"font-weight:bold;\">Bucovina (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 475179<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Crisana":
{
value: "633673",
tooltip: {content: "<span style=\"font-weight:bold;\">Crisana (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 633673<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Dobrudja":
{
value: "378461",
tooltip: {content: "<span style=\"font-weight:bold;\">Dobrudja (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 378461<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Moldova":
{
value: "2809826",
tooltip: {content: "<span style=\"font-weight:bold;\">Moldova (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2809826<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Muntenia":
{
value: "4466846",
tooltip: {content: "<span style=\"font-weight:bold;\">Muntenia (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4466846<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 28<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 4"}
},
"North_Transylvania":
{
value: "2355572",
tooltip: {content: "<span style=\"font-weight:bold;\">North Transylvania (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2355572<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oltenia":
{
value: "1521155",
tooltip: {content: "<span style=\"font-weight:bold;\">Oltenia (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1521155<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Bessarabia":
{
value: "567292",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Bessarabia (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 567292<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Transylvania":
{
value: "1624280",
tooltip: {content: "<span style=\"font-weight:bold;\">Transylvania (Romania)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1624280<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Al_Qassim":
{
value: "5006",
tooltip: {content: "<span style=\"font-weight:bold;\">Al_Qassim (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5006<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Asir_Makkah":
{
value: "500610",
tooltip: {content: "<span style=\"font-weight:bold;\">Asir_Makkah (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 500610<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Dammam":
{
value: "440537",
tooltip: {content: "<span style=\"font-weight:bold;\">Dammam (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 440537<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jawf":
{
value: "5006",
tooltip: {content: "<span style=\"font-weight:bold;\">Jawf (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5006<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madinah":
{
value: "511624",
tooltip: {content: "<span style=\"font-weight:bold;\">Madinah (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 511624<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Najiran":
{
value: "69",
tooltip: {content: "<span style=\"font-weight:bold;\">Najiran (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 69<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nejd":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Nejd (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Rub_al_Khali":
{
value: "42",
tooltip: {content: "<span style=\"font-weight:bold;\">Rub al Khali (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 42<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tabuk":
{
value: "500610",
tooltip: {content: "<span style=\"font-weight:bold;\">Tabuk (Saudi Arabia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 500610<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Acre":
{
value: "464125",
tooltip: {content: "<span style=\"font-weight:bold;\">Acre (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 464125<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amapá":
{
value: "350427",
tooltip: {content: "<span style=\"font-weight:bold;\">Amapá (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 350427<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_1":
{
value: "6761",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 1 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6761<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_2":
{
value: "10361",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 2 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10361<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_3":
{
value: "7692",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 3 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7692<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_4":
{
value: "13558",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 4 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13558<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_5":
{
value: "22014",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 5 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 22014<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_6":
{
value: "8973",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 6 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8973<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_7":
{
value: "10355",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 7 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10355<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazon_impassable_8":
{
value: "12315",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 8 (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12315<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amazonas":
{
value: "160095",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazonas (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 160095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bahia":
{
value: "4239068",
tooltip: {content: "<span style=\"font-weight:bold;\">Bahia (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4239068<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ceará":
{
value: "1633992",
tooltip: {content: "<span style=\"font-weight:bold;\">Ceará (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1633992<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Espírito_Santo":
{
value: "4609220",
tooltip: {content: "<span style=\"font-weight:bold;\">Espírito Santo (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4609220<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Goiás":
{
value: "1664229",
tooltip: {content: "<span style=\"font-weight:bold;\">Goiás (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1664229<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guaporé":
{
value: "120146",
tooltip: {content: "<span style=\"font-weight:bold;\">Guaporé (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 120146<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Maranhão":
{
value: "575752",
tooltip: {content: "<span style=\"font-weight:bold;\">Maranhão (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 575752<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mato_Grosso":
{
value: "120146",
tooltip: {content: "<span style=\"font-weight:bold;\">Mato Grosso (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 120146<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Minas_Gerais":
{
value: "4609220",
tooltip: {content: "<span style=\"font-weight:bold;\">Minas Gerais (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4609220<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pará":
{
value: "976240",
tooltip: {content: "<span style=\"font-weight:bold;\">Pará (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 976240<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Paraná":
{
value: "962524",
tooltip: {content: "<span style=\"font-weight:bold;\">Paraná (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 962524<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pernambuco":
{
value: "2284786",
tooltip: {content: "<span style=\"font-weight:bold;\">Pernambuco (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2284786<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Piauí":
{
value: "1802197",
tooltip: {content: "<span style=\"font-weight:bold;\">Piauí (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1802197<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Punta_Porá":
{
value: "230181",
tooltip: {content: "<span style=\"font-weight:bold;\">Punta Porá (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 230181<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rio_Branco":
{
value: "10012",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Branco (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 10012<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rio_de_Janeiro":
{
value: "6673637",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio de Janeiro (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6673637<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Rio_Grande_do_Norte":
{
value: "649792",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Grande do Norte (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 649792<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rio_Grande_do_Sul":
{
value: "2963213",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Grande do Sul (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2963213<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Santa_Catarina":
{
value: "962524",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Catarina (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 962524<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"São_Paulo":
{
value: "6206767",
tooltip: {content: "<span style=\"font-weight:bold;\">São Paulo (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6206767<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tocantins":
{
value: "1664229",
tooltip: {content: "<span style=\"font-weight:bold;\">Tocantins (Second Brazilian Republic)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1664229<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ordos":
{
value: "500610",
tooltip: {content: "<span style=\"font-weight:bold;\">Ordos (Shanxi)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 500610<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shanxi":
{
value: "11615161",
tooltip: {content: "<span style=\"font-weight:bold;\">Shanxi (Shanxi)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11615161<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Suiyuan":
{
value: "1585633",
tooltip: {content: "<span style=\"font-weight:bold;\">Suiyuan (Shanxi)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1585633<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Isan":
{
value: "2002441",
tooltip: {content: "<span style=\"font-weight:bold;\">Isan (Siam)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2002441<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lanna":
{
value: "2002441",
tooltip: {content: "<span style=\"font-weight:bold;\">Lanna (Siam)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2002441<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Malay":
{
value: "2044192",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Malay (Siam)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2044192<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Siam":
{
value: "8432681",
tooltip: {content: "<span style=\"font-weight:bold;\">Siam (Siam)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8432681<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Dabancheng":
{
value: "700854",
tooltip: {content: "<span style=\"font-weight:bold;\">Dabancheng (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 700854<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Dzungaria":
{
value: "671619",
tooltip: {content: "<span style=\"font-weight:bold;\">Dzungaria (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 671619<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kunlun_Shan":
{
value: "70085",
tooltip: {content: "<span style=\"font-weight:bold;\">Kunlun Shan (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 70085<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Taklamakan":
{
value: "408498",
tooltip: {content: "<span style=\"font-weight:bold;\">Taklamakan (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 408498<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Urumqi":
{
value: "1081819",
tooltip: {content: "<span style=\"font-weight:bold;\">Urumqi (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1081819<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yarkand":
{
value: "1432446",
tooltip: {content: "<span style=\"font-weight:bold;\">Yarkand (Sinkiang)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1432446<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cape":
{
value: "1639177",
tooltip: {content: "<span style=\"font-weight:bold;\">Cape (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1639177<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Karas":
{
value: "46256",
tooltip: {content: "<span style=\"font-weight:bold;\">Karas (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 46256<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khomas":
{
value: "254410",
tooltip: {content: "<span style=\"font-weight:bold;\">Khomas (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 254410<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kunene":
{
value: "69385",
tooltip: {content: "<span style=\"font-weight:bold;\">Kunene (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 69385<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Natal":
{
value: "3966994",
tooltip: {content: "<span style=\"font-weight:bold;\">Natal (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3966994<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Otjozondjupa":
{
value: "92513",
tooltip: {content: "<span style=\"font-weight:bold;\">Otjozondjupa (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 92513<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Transvaal":
{
value: "3684856",
tooltip: {content: "<span style=\"font-weight:bold;\">Transvaal (South Africa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3684856<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Abkhazia":
{
value: "492169",
tooltip: {content: "<span style=\"font-weight:bold;\">Abkhazia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 492169<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Akhtubinsk":
{
value: "282590",
tooltip: {content: "<span style=\"font-weight:bold;\">Akhtubinsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 282590<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Akmolinsk":
{
value: "981730",
tooltip: {content: "<span style=\"font-weight:bold;\">Akmolinsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 981730<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alma_Ata":
{
value: "2566533",
tooltip: {content: "<span style=\"font-weight:bold;\">Alma_Ata (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2566533<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Altai_Krai":
{
value: "2110024",
tooltip: {content: "<span style=\"font-weight:bold;\">Altai Krai (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2110024<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amur":
{
value: "454836",
tooltip: {content: "<span style=\"font-weight:bold;\">Amur (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 454836<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Arkhangelsk":
{
value: "578691",
tooltip: {content: "<span style=\"font-weight:bold;\">Arkhangelsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 578691<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Armenia":
{
value: "1251608",
tooltip: {content: "<span style=\"font-weight:bold;\">Armenia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1251608<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ashkhabad":
{
value: "932595",
tooltip: {content: "<span style=\"font-weight:bold;\">Ashkhabad (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 932595<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Astrakhan":
{
value: "647998",
tooltip: {content: "<span style=\"font-weight:bold;\">Astrakhan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 647998<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ayaguz":
{
value: "535844",
tooltip: {content: "<span style=\"font-weight:bold;\">Ayaguz (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 535844<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Azerbaijan":
{
value: "2884566",
tooltip: {content: "<span style=\"font-weight:bold;\">Azerbaijan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2884566<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Balakovo":
{
value: "309908",
tooltip: {content: "<span style=\"font-weight:bold;\">Balakovo (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 309908<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Balta_Tiraspol":
{
value: "183972",
tooltip: {content: "<span style=\"font-weight:bold;\">Balta_Tiraspol (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 183972<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Belgorod":
{
value: "1366203",
tooltip: {content: "<span style=\"font-weight:bold;\">Belgorod (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1366203<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Birobidzhan":
{
value: "308756",
tooltip: {content: "<span style=\"font-weight:bold;\">Birobidzhan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 308756<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bobruysk":
{
value: "1042355",
tooltip: {content: "<span style=\"font-weight:bold;\">Bobruysk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1042355<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bodaybo":
{
value: "195563",
tooltip: {content: "<span style=\"font-weight:bold;\">Bodaybo (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 195563<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bratsk":
{
value: "410684",
tooltip: {content: "<span style=\"font-weight:bold;\">Bratsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 410684<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bryansk":
{
value: "1709651",
tooltip: {content: "<span style=\"font-weight:bold;\">Bryansk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1709651<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bukhara":
{
value: "2192269",
tooltip: {content: "<span style=\"font-weight:bold;\">Bukhara (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2192269<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Buryatia":
{
value: "371346",
tooltip: {content: "<span style=\"font-weight:bold;\">Buryatia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 371346<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chechnya_Ingushetia":
{
value: "732879",
tooltip: {content: "<span style=\"font-weight:bold;\">Chechnya_Ingushetia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 732879<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chelyabinsk":
{
value: "2077465",
tooltip: {content: "<span style=\"font-weight:bold;\">Chelyabinsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2077465<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cherkasy":
{
value: "2408126",
tooltip: {content: "<span style=\"font-weight:bold;\">Cherkasy (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2408126<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chernigov":
{
value: "1375314",
tooltip: {content: "<span style=\"font-weight:bold;\">Chernigov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1375314<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chita":
{
value: "1045585",
tooltip: {content: "<span style=\"font-weight:bold;\">Chita (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1045585<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chukchi_Peninsula":
{
value: "30037",
tooltip: {content: "<span style=\"font-weight:bold;\">Chukchi Peninsula (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 30037<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chukotka":
{
value: "31220",
tooltip: {content: "<span style=\"font-weight:bold;\">Chukotka (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 31220<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Chuvashia":
{
value: "786990",
tooltip: {content: "<span style=\"font-weight:bold;\">Chuvashia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 786990<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Crimea":
{
value: "1062903",
tooltip: {content: "<span style=\"font-weight:bold;\">Crimea (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1062903<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 22<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dagestan":
{
value: "1359950",
tooltip: {content: "<span style=\"font-weight:bold;\">Dagestan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1359950<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dnipropetrovsk":
{
value: "2393966",
tooltip: {content: "<span style=\"font-weight:bold;\">Dnipropetrovsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2393966<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dudinka":
{
value: "6011",
tooltip: {content: "<span style=\"font-weight:bold;\">Dudinka (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6011<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Engels_Marxstadt":
{
value: "619285",
tooltip: {content: "<span style=\"font-weight:bold;\">Engels_Marxstadt (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 619285<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Georgia_US":
{
value: "2460844",
tooltip: {content: "<span style=\"font-weight:bold;\">Georgia_US (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2460844<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gomel":
{
value: "944574",
tooltip: {content: "<span style=\"font-weight:bold;\">Gomel (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 944574<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gorky":
{
value: "3382300",
tooltip: {content: "<span style=\"font-weight:bold;\">Gorky (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3382300<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Guryev":
{
value: "146673",
tooltip: {content: "<span style=\"font-weight:bold;\">Guryev (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 146673<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Irkutsk":
{
value: "756159",
tooltip: {content: "<span style=\"font-weight:bold;\">Irkutsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 756159<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Ivanovo":
{
value: "2589144",
tooltip: {content: "<span style=\"font-weight:bold;\">Ivanovo (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2589144<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kabardino_Balkaria":
{
value: "388464",
tooltip: {content: "<span style=\"font-weight:bold;\">Kabardino_Balkaria (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 388464<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kalinin":
{
value: "1332836",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalinin (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1332836<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kalmykia":
{
value: "169827",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalmykia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 169827<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kaluga":
{
value: "1122372",
tooltip: {content: "<span style=\"font-weight:bold;\">Kaluga (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1122372<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kamchatka":
{
value: "48891",
tooltip: {content: "<span style=\"font-weight:bold;\">Kamchatka (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 48891<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Karagandy":
{
value: "227293",
tooltip: {content: "<span style=\"font-weight:bold;\">Karagandy (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 227293<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Karakalpakstan":
{
value: "258745",
tooltip: {content: "<span style=\"font-weight:bold;\">Karakalpakstan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 258745<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kargopol":
{
value: "210434",
tooltip: {content: "<span style=\"font-weight:bold;\">Kargopol (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 210434<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kazan":
{
value: "2764662",
tooltip: {content: "<span style=\"font-weight:bold;\">Kazan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2764662<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Khabarovsk":
{
value: "295966",
tooltip: {content: "<span style=\"font-weight:bold;\">Khabarovsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 295966<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khakassia":
{
value: "1569235",
tooltip: {content: "<span style=\"font-weight:bold;\">Khakassia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1569235<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kharkov":
{
value: "2230239",
tooltip: {content: "<span style=\"font-weight:bold;\">Kharkov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2230239<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Khatangsky":
{
value: "15993",
tooltip: {content: "<span style=\"font-weight:bold;\">Khatangsky (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15993<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kherson":
{
value: "729252",
tooltip: {content: "<span style=\"font-weight:bold;\">Kherson (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 729252<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khiva":
{
value: "258745",
tooltip: {content: "<span style=\"font-weight:bold;\">Khiva (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 258745<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khmelnytskyi":
{
value: "1425760",
tooltip: {content: "<span style=\"font-weight:bold;\">Khmelnytskyi (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1425760<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kyiv":
{
value: "2498398",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyiv (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2498398<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Kirensk":
{
value: "146673",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirensk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 146673<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kirov":
{
value: "2118057",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2118057<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kolyma":
{
value: "13106",
tooltip: {content: "<span style=\"font-weight:bold;\">Kolyma (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13106<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kostanay":
{
value: "315835",
tooltip: {content: "<span style=\"font-weight:bold;\">Kostanay (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 315835<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kotlas":
{
value: "263042",
tooltip: {content: "<span style=\"font-weight:bold;\">Kotlas (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 263042<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Krasnodar":
{
value: "2906915",
tooltip: {content: "<span style=\"font-weight:bold;\">Krasnodar (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2906915<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Krasnoyarsk":
{
value: "1728534",
tooltip: {content: "<span style=\"font-weight:bold;\">Krasnoyarsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1728534<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kursk":
{
value: "1682137",
tooltip: {content: "<span style=\"font-weight:bold;\">Kursk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1682137<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kuybyshev":
{
value: "1393518",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuybyshev (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1393518<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Kyzyl_Orda":
{
value: "447566",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyzyl Orda (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 447566<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Leningrad":
{
value: "3754736",
tooltip: {content: "<span style=\"font-weight:bold;\">Leningrad (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3754736<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 6"}
},
"Lipetsk":
{
value: "1283661",
tooltip: {content: "<span style=\"font-weight:bold;\">Lipetsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1283661<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Luga":
{
value: "342236",
tooltip: {content: "<span style=\"font-weight:bold;\">Luga (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 342236<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Magadan":
{
value: "63558",
tooltip: {content: "<span style=\"font-weight:bold;\">Magadan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 63558<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Magnitogorsk":
{
value: "1046267",
tooltip: {content: "<span style=\"font-weight:bold;\">Magnitogorsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1046267<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mari_El":
{
value: "786990",
tooltip: {content: "<span style=\"font-weight:bold;\">Mari El (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 786990<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mikhaylovka":
{
value: "469353",
tooltip: {content: "<span style=\"font-weight:bold;\">Mikhaylovka (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 469353<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Millerovo":
{
value: "762699",
tooltip: {content: "<span style=\"font-weight:bold;\">Millerovo (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 762699<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Minsk":
{
value: "1164583",
tooltip: {content: "<span style=\"font-weight:bold;\">Minsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1164583<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Moscow":
{
value: "8346168",
tooltip: {content: "<span style=\"font-weight:bold;\">Moscow (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8346168<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 50<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 7"}
},
"Mozyr":
{
value: "935773",
tooltip: {content: "<span style=\"font-weight:bold;\">Mozyr (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 935773<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Murmansk":
{
value: "276088",
tooltip: {content: "<span style=\"font-weight:bold;\">Murmansk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 276088<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mykolaiv":
{
value: "897405",
tooltip: {content: "<span style=\"font-weight:bold;\">Mykolaiv (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 897405<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Navoi":
{
value: "465742",
tooltip: {content: "<span style=\"font-weight:bold;\">Navoi (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 465742<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nenets":
{
value: "21822",
tooltip: {content: "<span style=\"font-weight:bold;\">Nenets (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21822<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nevel":
{
value: "831146",
tooltip: {content: "<span style=\"font-weight:bold;\">Nevel (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 831146<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nikolayevsk":
{
value: "97782",
tooltip: {content: "<span style=\"font-weight:bold;\">Nikolayevsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 97782<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Ossetia":
{
value: "388464",
tooltip: {content: "<span style=\"font-weight:bold;\">North Ossetia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 388464<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Sakhalin":
{
value: "94875",
tooltip: {content: "<span style=\"font-weight:bold;\">North Sakhalin (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 94875<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Urals":
{
value: "48891",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Urals (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 48891<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Novgorod":
{
value: "1093911",
tooltip: {content: "<span style=\"font-weight:bold;\">Novgorod (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1093911<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Novosibirsk":
{
value: "1767524",
tooltip: {content: "<span style=\"font-weight:bold;\">Novosibirsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1767524<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Odessa":
{
value: "1287808",
tooltip: {content: "<span style=\"font-weight:bold;\">Odessa (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1287808<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Okhotsk":
{
value: "63557",
tooltip: {content: "<span style=\"font-weight:bold;\">Okhotsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 63557<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Olonets":
{
value: "229844",
tooltip: {content: "<span style=\"font-weight:bold;\">Olonets (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 229844<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Omsk":
{
value: "1318765",
tooltip: {content: "<span style=\"font-weight:bold;\">Omsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1318765<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Onega":
{
value: "215120",
tooltip: {content: "<span style=\"font-weight:bold;\">Onega (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 215120<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Orel":
{
value: "1220095",
tooltip: {content: "<span style=\"font-weight:bold;\">Orel (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1220095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Orenburg":
{
value: "1227366",
tooltip: {content: "<span style=\"font-weight:bold;\">Orenburg (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1227366<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oyrot_Region":
{
value: "153697",
tooltip: {content: "<span style=\"font-weight:bold;\">Oyrot Region (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 153697<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pamir":
{
value: "230281",
tooltip: {content: "<span style=\"font-weight:bold;\">Pamir (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 230281<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pavlodar":
{
value: "230491",
tooltip: {content: "<span style=\"font-weight:bold;\">Pavlodar (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 230491<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pechora":
{
value: "21822",
tooltip: {content: "<span style=\"font-weight:bold;\">Pechora (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21822<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Penza":
{
value: "2345797",
tooltip: {content: "<span style=\"font-weight:bold;\">Penza (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2345797<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Perm":
{
value: "2138486",
tooltip: {content: "<span style=\"font-weight:bold;\">Perm (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2138486<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Poltava":
{
value: "1444345",
tooltip: {content: "<span style=\"font-weight:bold;\">Poltava (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1444345<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pskov":
{
value: "640368",
tooltip: {content: "<span style=\"font-weight:bold;\">Pskov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 640368<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Roslavl":
{
value: "576913",
tooltip: {content: "<span style=\"font-weight:bold;\">Roslavl (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 576913<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rostov":
{
value: "1502908",
tooltip: {content: "<span style=\"font-weight:bold;\">Rostov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1502908<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Ryazan":
{
value: "1826347",
tooltip: {content: "<span style=\"font-weight:bold;\">Ryazan (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1826347<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rzhev":
{
value: "1026710",
tooltip: {content: "<span style=\"font-weight:bold;\">Rzhev (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1026710<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Salekhard":
{
value: "45540",
tooltip: {content: "<span style=\"font-weight:bold;\">Salekhard (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 45540<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Saratov":
{
value: "1227585",
tooltip: {content: "<span style=\"font-weight:bold;\">Saratov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1227585<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Semipalatinsk":
{
value: "429737",
tooltip: {content: "<span style=\"font-weight:bold;\">Semipalatinsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 429737<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Smolensk":
{
value: "1301615",
tooltip: {content: "<span style=\"font-weight:bold;\">Smolensk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1301615<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sochi":
{
value: "388464",
tooltip: {content: "<span style=\"font-weight:bold;\">Sochi (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 388464<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Stalinabad":
{
value: "230281",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalinabad (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 230281<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Stalingrad":
{
value: "1136456",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalingrad (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1136456<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Stalino":
{
value: "3771935",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalino (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3771935<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Stavropol":
{
value: "1318123",
tooltip: {content: "<span style=\"font-weight:bold;\">Stavropol (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1318123<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sumy":
{
value: "1339914",
tooltip: {content: "<span style=\"font-weight:bold;\">Sumy (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1339914<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Surgut":
{
value: "29335",
tooltip: {content: "<span style=\"font-weight:bold;\">Surgut (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 29335<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sverdlovsk":
{
value: "2164289",
tooltip: {content: "<span style=\"font-weight:bold;\">Sverdlovsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2164289<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Syktyvkar":
{
value: "137370",
tooltip: {content: "<span style=\"font-weight:bold;\">Syktyvkar (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 137370<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tambov":
{
value: "1781755",
tooltip: {content: "<span style=\"font-weight:bold;\">Tambov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1781755<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tashauz":
{
value: "133227",
tooltip: {content: "<span style=\"font-weight:bold;\">Tashauz (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 133227<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tashkent":
{
value: "4142961",
tooltip: {content: "<span style=\"font-weight:bold;\">Tashkent (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4142961<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tikhvin":
{
value: "185786",
tooltip: {content: "<span style=\"font-weight:bold;\">Tikhvin (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 185786<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tobolsk":
{
value: "88234",
tooltip: {content: "<span style=\"font-weight:bold;\">Tobolsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 88234<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tomsk":
{
value: "610048",
tooltip: {content: "<span style=\"font-weight:bold;\">Tomsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 610048<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tula":
{
value: "1637546",
tooltip: {content: "<span style=\"font-weight:bold;\">Tula (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1637546<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Tyumen":
{
value: "940213",
tooltip: {content: "<span style=\"font-weight:bold;\">Tyumen (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 940213<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Udachny":
{
value: "12197",
tooltip: {content: "<span style=\"font-weight:bold;\">Udachny (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12197<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Udmurtia":
{
value: "1326552",
tooltip: {content: "<span style=\"font-weight:bold;\">Udmurtia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1326552<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ufa":
{
value: "2555190",
tooltip: {content: "<span style=\"font-weight:bold;\">Ufa (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2555190<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ulyanovsky":
{
value: "1632514",
tooltip: {content: "<span style=\"font-weight:bold;\">Ulyanovsky (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1632514<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Uralsk":
{
value: "268900",
tooltip: {content: "<span style=\"font-weight:bold;\">Uralsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 268900<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ust_Urt":
{
value: "245432",
tooltip: {content: "<span style=\"font-weight:bold;\">Ust Urt (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 245432<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Verkhoyansk":
{
value: "13071",
tooltip: {content: "<span style=\"font-weight:bold;\">Verkhoyansk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 13071<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vinnytsia":
{
value: "1895702",
tooltip: {content: "<span style=\"font-weight:bold;\">Vinnytsia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1895702<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vitebsk":
{
value: "1219341",
tooltip: {content: "<span style=\"font-weight:bold;\">Vitebsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1219341<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vladivostok":
{
value: "842492",
tooltip: {content: "<span style=\"font-weight:bold;\">Vladivostok (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 842492<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Volgodonsk":
{
value: "557357",
tooltip: {content: "<span style=\"font-weight:bold;\">Volgodonsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 557357<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Volkhov":
{
value: "195563",
tooltip: {content: "<span style=\"font-weight:bold;\">Volkhov (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 195563<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vologda":
{
value: "2354971",
tooltip: {content: "<span style=\"font-weight:bold;\">Vologda (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2354971<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Voronezh":
{
value: "2571118",
tooltip: {content: "<span style=\"font-weight:bold;\">Voronezh (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2571118<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Voroshilovgrad":
{
value: "2170057",
tooltip: {content: "<span style=\"font-weight:bold;\">Voroshilovgrad (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2170057<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yakutsk":
{
value: "408364",
tooltip: {content: "<span style=\"font-weight:bold;\">Yakutsk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 408364<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yamalia":
{
value: "22001",
tooltip: {content: "<span style=\"font-weight:bold;\">Yamalia (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 22001<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yaroslavl":
{
value: "1666573",
tooltip: {content: "<span style=\"font-weight:bold;\">Yaroslavl (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1666573<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yeniseisk":
{
value: "117338",
tooltip: {content: "<span style=\"font-weight:bold;\">Yeniseisk (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 117338<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zaporozhe":
{
value: "1295662",
tooltip: {content: "<span style=\"font-weight:bold;\">Zaporozhe (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1295662<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zhytomyr":
{
value: "1419565",
tooltip: {content: "<span style=\"font-weight:bold;\">Zhytomyr (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1419565<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Zlatoust":
{
value: "557357",
tooltip: {content: "<span style=\"font-weight:bold;\">Zlatoust (Soviet Union)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 557357<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Asturias":
{
value: "1198713",
tooltip: {content: "<span style=\"font-weight:bold;\">Asturias (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1198713<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Burgos":
{
value: "740663",
tooltip: {content: "<span style=\"font-weight:bold;\">Burgos (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 740663<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cataluña":
{
value: "3040244",
tooltip: {content: "<span style=\"font-weight:bold;\">Cataluña (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3040244<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 32<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Ciudad_Real":
{
value: "527546",
tooltip: {content: "<span style=\"font-weight:bold;\">Ciudad Real (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 527546<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Córdoba":
{
value: "1430257",
tooltip: {content: "<span style=\"font-weight:bold;\">Córdoba (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1430257<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Eastern_Aragón":
{
value: "387839",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Aragón (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 387839<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Equatorial_Guinea":
{
value: "185226",
tooltip: {content: "<span style=\"font-weight:bold;\">Equatorial Guinea (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 185226<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Extremadura":
{
value: "1419383",
tooltip: {content: "<span style=\"font-weight:bold;\">Extremadura (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1419383<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Galicia":
{
value: "2297887",
tooltip: {content: "<span style=\"font-weight:bold;\">Galicia (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2297887<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Granada":
{
value: "1664321",
tooltip: {content: "<span style=\"font-weight:bold;\">Granada (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1664321<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guadalajara":
{
value: "528341",
tooltip: {content: "<span style=\"font-weight:bold;\">Guadalajara (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 528341<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Islas_Baleares":
{
value: "365946",
tooltip: {content: "<span style=\"font-weight:bold;\">Islas Baleares (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 365946<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Islas_Canarias":
{
value: "562032",
tooltip: {content: "<span style=\"font-weight:bold;\">Islas Canarias (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 562032<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"León":
{
value: "749955",
tooltip: {content: "<span style=\"font-weight:bold;\">León (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 749955<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Madrid":
{
value: "2067179",
tooltip: {content: "<span style=\"font-weight:bold;\">Madrid (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2067179<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 31<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Murcia":
{
value: "1008835",
tooltip: {content: "<span style=\"font-weight:bold;\">Murcia (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1008835<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Navarra":
{
value: "360319",
tooltip: {content: "<span style=\"font-weight:bold;\">Navarra (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 360319<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"País_Vasco":
{
value: "929227",
tooltip: {content: "<span style=\"font-weight:bold;\">País Vasco (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 929227<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Rio_de_Oro":
{
value: "21082",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio de Oro (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21082<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Salamanca":
{
value: "365046",
tooltip: {content: "<span style=\"font-weight:bold;\">Salamanca (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 365046<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sevilla":
{
value: "1748782",
tooltip: {content: "<span style=\"font-weight:bold;\">Sevilla (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1748782<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 13<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Sidi_Ifni":
{
value: "11056",
tooltip: {content: "<span style=\"font-weight:bold;\">Sidi Ifni (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11056<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Spanish_Africa":
{
value: "744908",
tooltip: {content: "<span style=\"font-weight:bold;\">Spanish Africa (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 744908<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Valencia":
{
value: "1981710",
tooltip: {content: "<span style=\"font-weight:bold;\">Valencia (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1981710<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 13<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Valladolid":
{
value: "714499",
tooltip: {content: "<span style=\"font-weight:bold;\">Valladolid (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 714499<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Western_Aragón":
{
value: "669181",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Aragón (Spain)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 669181<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Afar":
{
value: "560684",
tooltip: {content: "<span style=\"font-weight:bold;\">Afar (Sultanate of Aussa)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 560684<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bohuslän":
{
value: "96329",
tooltip: {content: "<span style=\"font-weight:bold;\">Bohuslän (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 96329<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dalarna":
{
value: "250022",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalarna (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 250022<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gävleborg":
{
value: "933093",
tooltip: {content: "<span style=\"font-weight:bold;\">Gävleborg (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 933093<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gotland":
{
value: "57058",
tooltip: {content: "<span style=\"font-weight:bold;\">Gotland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 57058<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jämtland":
{
value: "65079",
tooltip: {content: "<span style=\"font-weight:bold;\">Jämtland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 65079<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Norrbotten":
{
value: "100344",
tooltip: {content: "<span style=\"font-weight:bold;\">Norrbotten (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 100344<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Östergötland":
{
value: "505843",
tooltip: {content: "<span style=\"font-weight:bold;\">Östergötland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 505843<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Skåne":
{
value: "1048980",
tooltip: {content: "<span style=\"font-weight:bold;\">Skåne (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1048980<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Småland":
{
value: "390843",
tooltip: {content: "<span style=\"font-weight:bold;\">Småland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 390843<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Södermalm":
{
value: "1489998",
tooltip: {content: "<span style=\"font-weight:bold;\">Södermalm (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1489998<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 23<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Värmland":
{
value: "297015",
tooltip: {content: "<span style=\"font-weight:bold;\">Värmland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 297015<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Västerbotten":
{
value: "315490",
tooltip: {content: "<span style=\"font-weight:bold;\">Västerbotten (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 315490<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Västergötland":
{
value: "891048",
tooltip: {content: "<span style=\"font-weight:bold;\">Västergötland (Sweden)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 891048<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Eastern_Swiss_Alps":
{
value: "599651",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 599651<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jura_Mountains":
{
value: "2069820",
tooltip: {content: "<span style=\"font-weight:bold;\">Jura Mountains (Switzerland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2069820<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Swiss_Plateau":
{
value: "1218323",
tooltip: {content: "<span style=\"font-weight:bold;\">Swiss Plateau (Switzerland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1218323<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Ticino":
{
value: "160749",
tooltip: {content: "<span style=\"font-weight:bold;\">Ticino (Switzerland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 160749<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Western_Swiss_Alps":
{
value: "178647",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 178647<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tannu_Tuva":
{
value: "85104",
tooltip: {content: "<span style=\"font-weight:bold;\">Tannu Tuva (Tannu Tuva)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 85104<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Nagqu":
{
value: "1724102",
tooltip: {content: "<span style=\"font-weight:bold;\">Nagqu (Tibet)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1724102<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ngari":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Ngari (Tibet)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shigatse":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Shigatse (Tibet)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Afyon":
{
value: "1300128",
tooltip: {content: "<span style=\"font-weight:bold;\">Afyon (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1300128<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Amasya":
{
value: "531820",
tooltip: {content: "<span style=\"font-weight:bold;\">Amasya (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 531820<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ankara":
{
value: "811273",
tooltip: {content: "<span style=\"font-weight:bold;\">Ankara (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 811273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Antalya":
{
value: "363132",
tooltip: {content: "<span style=\"font-weight:bold;\">Antalya (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 363132<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bursa":
{
value: "1079169",
tooltip: {content: "<span style=\"font-weight:bold;\">Bursa (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1079169<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Diyarbakır":
{
value: "572633",
tooltip: {content: "<span style=\"font-weight:bold;\">Diyarbakır (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 572633<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 7<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Edirne":
{
value: "364391",
tooltip: {content: "<span style=\"font-weight:bold;\">Edirne (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 364391<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hakkari":
{
value: "262415",
tooltip: {content: "<span style=\"font-weight:bold;\">Hakkari (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 262415<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Istanbul":
{
value: "1043548",
tooltip: {content: "<span style=\"font-weight:bold;\">Istanbul (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1043548<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Izmir":
{
value: "1403600",
tooltip: {content: "<span style=\"font-weight:bold;\">Izmir (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1403600<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Izmit":
{
value: "808646",
tooltip: {content: "<span style=\"font-weight:bold;\">Izmit (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 808646<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kastamonu":
{
value: "861640",
tooltip: {content: "<span style=\"font-weight:bold;\">Kastamonu (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 861640<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 13<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kayseri":
{
value: "859500",
tooltip: {content: "<span style=\"font-weight:bold;\">Kayseri (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 859500<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Konya":
{
value: "850490",
tooltip: {content: "<span style=\"font-weight:bold;\">Konya (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 850490<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Malatya":
{
value: "1083102",
tooltip: {content: "<span style=\"font-weight:bold;\">Malatya (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1083102<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 33<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mersin":
{
value: "412301",
tooltip: {content: "<span style=\"font-weight:bold;\">Mersin (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 412301<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Samsun":
{
value: "1153269",
tooltip: {content: "<span style=\"font-weight:bold;\">Samsun (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1153269<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sivas":
{
value: "593545",
tooltip: {content: "<span style=\"font-weight:bold;\">Sivas (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 593545<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Trabzon":
{
value: "1032388",
tooltip: {content: "<span style=\"font-weight:bold;\">Trabzon (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1032388<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 26<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tunceli":
{
value: "524176",
tooltip: {content: "<span style=\"font-weight:bold;\">Tunceli (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 524176<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Van":
{
value: "365936",
tooltip: {content: "<span style=\"font-weight:bold;\">Van (Turkey)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 365936<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aberdeenshire":
{
value: "746376",
tooltip: {content: "<span style=\"font-weight:bold;\">Aberdeenshire (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 746376<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Abu_Dhabi":
{
value: "170408",
tooltip: {content: "<span style=\"font-weight:bold;\">Abu Dhabi (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 170408<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aden":
{
value: "872265",
tooltip: {content: "<span style=\"font-weight:bold;\">Aden (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 872265<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alexandria":
{
value: "3863950",
tooltip: {content: "<span style=\"font-weight:bold;\">Alexandria (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3863950<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Andaman":
{
value: "29536",
tooltip: {content: "<span style=\"font-weight:bold;\">Andaman (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 29536<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ascension":
{
value: "459",
tooltip: {content: "<span style=\"font-weight:bold;\">Ascension (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 459<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Aswan":
{
value: "4229673",
tooltip: {content: "<span style=\"font-weight:bold;\">Aswan (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4229673<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bahr_al_Ghazal":
{
value: "550671",
tooltip: {content: "<span style=\"font-weight:bold;\">Bahr al Ghazal (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 550671<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bechuanaland":
{
value: "234286",
tooltip: {content: "<span style=\"font-weight:bold;\">Bechuanaland (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 234286<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Benue":
{
value: "1165095",
tooltip: {content: "<span style=\"font-weight:bold;\">Benue (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1165095<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Bermuda":
{
value: "37562",
tooltip: {content: "<span style=\"font-weight:bold;\">Bermuda (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 37562<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Blue_Nile":
{
value: "661909",
tooltip: {content: "<span style=\"font-weight:bold;\">Blue Nile (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 661909<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Borno":
{
value: "166443",
tooltip: {content: "<span style=\"font-weight:bold;\">Borno (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 166443<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"British_Guyana":
{
value: "309377",
tooltip: {content: "<span style=\"font-weight:bold;\">British Guyana (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 309377<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"British_Honduras":
{
value: "51062",
tooltip: {content: "<span style=\"font-weight:bold;\">British Honduras (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 51062<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"British_Somaliland":
{
value: "345121",
tooltip: {content: "<span style=\"font-weight:bold;\">British Somaliland (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 345121<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cairo":
{
value: "6462744",
tooltip: {content: "<span style=\"font-weight:bold;\">Cairo (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6462744<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 28<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ceylon":
{
value: "5506714",
tooltip: {content: "<span style=\"font-weight:bold;\">Ceylon (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5506714<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Christmas_Island":
{
value: "1627",
tooltip: {content: "<span style=\"font-weight:bold;\">Christmas Island (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1627<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cocos_Islands":
{
value: "42",
tooltip: {content: "<span style=\"font-weight:bold;\">Cocos Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 42<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cumbria":
{
value: "746011",
tooltip: {content: "<span style=\"font-weight:bold;\">Cumbria (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 746011<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cyprus":
{
value: "348384",
tooltip: {content: "<span style=\"font-weight:bold;\">Cyprus (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 348384<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Diego_Garcia":
{
value: "2150",
tooltip: {content: "<span style=\"font-weight:bold;\">Diego Garcia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2150<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"East_Anglia":
{
value: "1364838",
tooltip: {content: "<span style=\"font-weight:bold;\">East Anglia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1364838<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"East_Midlands":
{
value: "2214721",
tooltip: {content: "<span style=\"font-weight:bold;\">East Midlands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2214721<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 13<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Eastern_Desert":
{
value: "2197",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Desert (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2197<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ellice_Islands":
{
value: "494",
tooltip: {content: "<span style=\"font-weight:bold;\">Ellice Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 494<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Falkland_Islands":
{
value: "2466",
tooltip: {content: "<span style=\"font-weight:bold;\">Falkland Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2466<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Fiji":
{
value: "180220",
tooltip: {content: "<span style=\"font-weight:bold;\">Fiji (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 180220<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gambia":
{
value: "199764",
tooltip: {content: "<span style=\"font-weight:bold;\">Gambia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 199764<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Garissa":
{
value: "611305",
tooltip: {content: "<span style=\"font-weight:bold;\">Garissa (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 611305<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ghana":
{
value: "3167462",
tooltip: {content: "<span style=\"font-weight:bold;\">Ghana (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3167462<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gibraltar":
{
value: "21398",
tooltip: {content: "<span style=\"font-weight:bold;\">Gibraltar (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21398<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gilbert_Islands":
{
value: "1036",
tooltip: {content: "<span style=\"font-weight:bold;\">Gilbert Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1036<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gloucestershire":
{
value: "1802813",
tooltip: {content: "<span style=\"font-weight:bold;\">Gloucestershire (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1802813<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Greater_London_Area":
{
value: "9836289",
tooltip: {content: "<span style=\"font-weight:bold;\">Greater London Area (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 9836289<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 50<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Hong_Kong":
{
value: "1144912",
tooltip: {content: "<span style=\"font-weight:bold;\">Hong Kong (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1144912<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Isle_of_Man":
{
value: "51062",
tooltip: {content: "<span style=\"font-weight:bold;\">Isle of Man (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 51062<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jamaica":
{
value: "1076312",
tooltip: {content: "<span style=\"font-weight:bold;\">Jamaica (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1076312<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jordan":
{
value: "933138",
tooltip: {content: "<span style=\"font-weight:bold;\">Jordan (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 933138<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kassala":
{
value: "512026",
tooltip: {content: "<span style=\"font-weight:bold;\">Kassala (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 512026<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Khartoum":
{
value: "822005",
tooltip: {content: "<span style=\"font-weight:bold;\">Khartoum (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 822005<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kurdufan":
{
value: "1804332",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurdufan (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1804332<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kuwait":
{
value: "80098",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuwait (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 80098<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Labrador":
{
value: "22206",
tooltip: {content: "<span style=\"font-weight:bold;\">Labrador (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 22206<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lagos":
{
value: "19781117",
tooltip: {content: "<span style=\"font-weight:bold;\">Lagos (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 19781117<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lanark":
{
value: "2260479",
tooltip: {content: "<span style=\"font-weight:bold;\">Lanark (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2260479<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 16<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lancashire":
{
value: "5777498",
tooltip: {content: "<span style=\"font-weight:bold;\">Lancashire (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5777498<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 35<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Leeward_Islands":
{
value: "25709",
tooltip: {content: "<span style=\"font-weight:bold;\">Leeward Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 25709<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Lothian":
{
value: "1433372",
tooltip: {content: "<span style=\"font-weight:bold;\">Lothian (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1433372<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Malawi":
{
value: "1605933",
tooltip: {content: "<span style=\"font-weight:bold;\">Malawi (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1605933<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Maldives":
{
value: "79397",
tooltip: {content: "<span style=\"font-weight:bold;\">Maldives (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 79397<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Malta":
{
value: "241916",
tooltip: {content: "<span style=\"font-weight:bold;\">Malta (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 241916<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Matrouh":
{
value: "52620",
tooltip: {content: "<span style=\"font-weight:bold;\">Matrouh (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 52620<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mauritius":
{
value: "404952",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritius (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 404952<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mombasa":
{
value: "1018842",
tooltip: {content: "<span style=\"font-weight:bold;\">Mombasa (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1018842<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nairobi":
{
value: "1086765",
tooltip: {content: "<span style=\"font-weight:bold;\">Nairobi (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1086765<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nauru":
{
value: "5792",
tooltip: {content: "<span style=\"font-weight:bold;\">Nauru (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5792<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Newfoundland":
{
value: "255371",
tooltip: {content: "<span style=\"font-weight:bold;\">Newfoundland (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 255371<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Darfur":
{
value: "8153",
tooltip: {content: "<span style=\"font-weight:bold;\">North Darfur (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8153<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Bahamas":
{
value: "40049",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 40049<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Northern_Ireland":
{
value: "1200000",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Ireland (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1200000<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Northumberland":
{
value: "2131459",
tooltip: {content: "<span style=\"font-weight:bold;\">Northumberland (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2131459<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nyanza_Rift_Valley":
{
value: "679228",
tooltip: {content: "<span style=\"font-weight:bold;\">Nyanza_Rift_Valley (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 679228<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Palestine":
{
value: "934281",
tooltip: {content: "<span style=\"font-weight:bold;\">Palestine (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 934281<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pitcairn_Island":
{
value: "40",
tooltip: {content: "<span style=\"font-weight:bold;\">Pitcairn Island (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 40<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Qatar":
{
value: "51663",
tooltip: {content: "<span style=\"font-weight:bold;\">Qatar (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 51663<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Rhodesia":
{
value: "1172766",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhodesia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1172766<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Saint_Helena":
{
value: "2488",
tooltip: {content: "<span style=\"font-weight:bold;\">Saint Helena (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2488<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Scottish_Highlands":
{
value: "248176",
tooltip: {content: "<span style=\"font-weight:bold;\">Scottish Highlands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 248176<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Seychelles":
{
value: "126858",
tooltip: {content: "<span style=\"font-weight:bold;\">Seychelles (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 126858<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Shetland_Islands":
{
value: "18022",
tooltip: {content: "<span style=\"font-weight:bold;\">Shetland Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18022<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sierra_Leone":
{
value: "1770659",
tooltip: {content: "<span style=\"font-weight:bold;\">Sierra Leone (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1770659<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sinai":
{
value: "15378",
tooltip: {content: "<span style=\"font-weight:bold;\">Sinai (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15378<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Socotra":
{
value: "21329",
tooltip: {content: "<span style=\"font-weight:bold;\">Socotra (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 21329<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sokoto":
{
value: "332885",
tooltip: {content: "<span style=\"font-weight:bold;\">Sokoto (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 332885<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Darfur":
{
value: "302389",
tooltip: {content: "<span style=\"font-weight:bold;\">South Darfur (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 302389<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Georgia":
{
value: "30",
tooltip: {content: "<span style=\"font-weight:bold;\">South Georgia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 30<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_West_England":
{
value: "1222503",
tooltip: {content: "<span style=\"font-weight:bold;\">South_West England (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1222503<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Southern_Bahamas":
{
value: "15018",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 15018<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Suez":
{
value: "131893",
tooltip: {content: "<span style=\"font-weight:bold;\">Suez (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 131893<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Sussex":
{
value: "3197281",
tooltip: {content: "<span style=\"font-weight:bold;\">Sussex (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3197281<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 35<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Tanganyika":
{
value: "5305469",
tooltip: {content: "<span style=\"font-weight:bold;\">Tanganyika (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5305469<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Trinidad":
{
value: "413623",
tooltip: {content: "<span style=\"font-weight:bold;\">Trinidad (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 413623<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Uganda":
{
value: "3519917",
tooltip: {content: "<span style=\"font-weight:bold;\">Uganda (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3519917<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Upper_Nile":
{
value: "1041391",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Nile (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1041391<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wales":
{
value: "2312049",
tooltip: {content: "<span style=\"font-weight:bold;\">Wales (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2312049<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 9<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"West_Midlands":
{
value: "3689734",
tooltip: {content: "<span style=\"font-weight:bold;\">West Midlands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3689734<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Western_Desert":
{
value: "18562",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Desert (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 18562<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Windward_Islands":
{
value: "76578",
tooltip: {content: "<span style=\"font-weight:bold;\">Windward Islands (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 76578<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yorkshire":
{
value: "4768309",
tooltip: {content: "<span style=\"font-weight:bold;\">Yorkshire (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4768309<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Zambia":
{
value: "1381774",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambia (United Kingdom)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1381774<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alabama":
{
value: "2649477",
tooltip: {content: "<span style=\"font-weight:bold;\">Alabama (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2649477<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Alaska":
{
value: "67582",
tooltip: {content: "<span style=\"font-weight:bold;\">Alaska (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 67582<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Arizona":
{
value: "436104",
tooltip: {content: "<span style=\"font-weight:bold;\">Arizona (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 436104<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Arkansas":
{
value: "1856745",
tooltip: {content: "<span style=\"font-weight:bold;\">Arkansas (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1856745<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Attu_Island":
{
value: "20",
tooltip: {content: "<span style=\"font-weight:bold;\">Attu Island (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 20<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"California":
{
value: "5684178",
tooltip: {content: "<span style=\"font-weight:bold;\">California (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5684178<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 71<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 6<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"Colorado":
{
value: "1037054",
tooltip: {content: "<span style=\"font-weight:bold;\">Colorado (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1037054<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Florida":
{
value: "1470002",
tooltip: {content: "<span style=\"font-weight:bold;\">Florida (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1470002<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Georgia":
{
value: "2912054",
tooltip: {content: "<span style=\"font-weight:bold;\">Georgia (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2912054<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Guam":
{
value: "75245",
tooltip: {content: "<span style=\"font-weight:bold;\">Guam (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 75245<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Hawaii":
{
value: "368786",
tooltip: {content: "<span style=\"font-weight:bold;\">Hawaii (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 368786<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 18<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Idaho":
{
value: "445574",
tooltip: {content: "<span style=\"font-weight:bold;\">Idaho (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 445574<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Illinois":
{
value: "7639966",
tooltip: {content: "<span style=\"font-weight:bold;\">Illinois (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 7639966<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 30<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 11<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Indiana":
{
value: "3242454",
tooltip: {content: "<span style=\"font-weight:bold;\">Indiana (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3242454<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Iowa":
{
value: "2473954",
tooltip: {content: "<span style=\"font-weight:bold;\">Iowa (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2473954<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Johnston_Atoll":
{
value: "100",
tooltip: {content: "<span style=\"font-weight:bold;\">Johnston Atoll (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 100<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kansas":
{
value: "1883294",
tooltip: {content: "<span style=\"font-weight:bold;\">Kansas (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1883294<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Kentucky":
{
value: "2617780",
tooltip: {content: "<span style=\"font-weight:bold;\">Kentucky (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2617780<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Line_Islands":
{
value: "5374",
tooltip: {content: "<span style=\"font-weight:bold;\">Line Islands (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5374<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Louisiana":
{
value: "2104157",
tooltip: {content: "<span style=\"font-weight:bold;\">Louisiana (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2104157<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Maryland":
{
value: "2120980",
tooltip: {content: "<span style=\"font-weight:bold;\">Maryland (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2120980<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 45<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Michigan":
{
value: "4848234",
tooltip: {content: "<span style=\"font-weight:bold;\">Michigan (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4848234<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 20<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 6<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Midway_Island":
{
value: "2162",
tooltip: {content: "<span style=\"font-weight:bold;\">Midway Island (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2162<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Minnesota":
{
value: "2567082",
tooltip: {content: "<span style=\"font-weight:bold;\">Minnesota (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2567082<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Mississippi":
{
value: "2012273",
tooltip: {content: "<span style=\"font-weight:bold;\">Mississippi (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2012273<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Missouri":
{
value: "3633795",
tooltip: {content: "<span style=\"font-weight:bold;\">Missouri (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3633795<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Montana":
{
value: "538261",
tooltip: {content: "<span style=\"font-weight:bold;\">Montana (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 538261<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nebraska":
{
value: "1379644",
tooltip: {content: "<span style=\"font-weight:bold;\">Nebraska (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1379644<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Nevada":
{
value: "91168",
tooltip: {content: "<span style=\"font-weight:bold;\">Nevada (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 91168<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_England":
{
value: "8414973",
tooltip: {content: "<span style=\"font-weight:bold;\">New England (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 8414973<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 22<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"New_Jersey":
{
value: "4046265",
tooltip: {content: "<span style=\"font-weight:bold;\">New Jersey (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 4046265<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 7<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_Mexico":
{
value: "423833",
tooltip: {content: "<span style=\"font-weight:bold;\">New Mexico (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 423833<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"New_York":
{
value: "12603427",
tooltip: {content: "<span style=\"font-weight:bold;\">New York (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 12603427<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 33<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 7<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 2"}
},
"North_Carolina":
{
value: "3174144",
tooltip: {content: "<span style=\"font-weight:bold;\">North Carolina (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3174144<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Dakota":
{
value: "681675",
tooltip: {content: "<span style=\"font-weight:bold;\">North Dakota (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 681675<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ohio":
{
value: "6654808",
tooltip: {content: "<span style=\"font-weight:bold;\">Ohio (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 6654808<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 6<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Oklahoma":
{
value: "2398964",
tooltip: {content: "<span style=\"font-weight:bold;\">Oklahoma (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2398964<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Oregon":
{
value: "954949",
tooltip: {content: "<span style=\"font-weight:bold;\">Oregon (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 954949<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Panamá_Canal":
{
value: "39515",
tooltip: {content: "<span style=\"font-weight:bold;\">Panamá Canal (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 39515<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Pennsylvania":
{
value: "9643103",
tooltip: {content: "<span style=\"font-weight:bold;\">Pennsylvania (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 9643103<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 35<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Phoenix_Island":
{
value: "24",
tooltip: {content: "<span style=\"font-weight:bold;\">Phoenix Island (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 24<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Puerto_Rico":
{
value: "1545798",
tooltip: {content: "<span style=\"font-weight:bold;\">Puerto Rico (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1545798<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Carolina":
{
value: "1740887",
tooltip: {content: "<span style=\"font-weight:bold;\">South Carolina (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1740887<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"South_Dakota":
{
value: "693695",
tooltip: {content: "<span style=\"font-weight:bold;\">South Dakota (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 693695<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Tennessee":
{
value: "2619749",
tooltip: {content: "<span style=\"font-weight:bold;\">Tennessee (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2619749<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Texas":
{
value: "5831822",
tooltip: {content: "<span style=\"font-weight:bold;\">Texas (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 5831822<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 21<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 9<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Utah":
{
value: "508466",
tooltip: {content: "<span style=\"font-weight:bold;\">Utah (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 508466<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Virginia":
{
value: "2251825",
tooltip: {content: "<span style=\"font-weight:bold;\">Virginia (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2251825<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 25<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wake_Island":
{
value: "150",
tooltip: {content: "<span style=\"font-weight:bold;\">Wake Island (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 150<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Washington":
{
value: "1565303",
tooltip: {content: "<span style=\"font-weight:bold;\">Washington (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1565303<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 11<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"West_Virginia":
{
value: "1904296",
tooltip: {content: "<span style=\"font-weight:bold;\">West Virginia (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1904296<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wisconsin":
{
value: "2942592",
tooltip: {content: "<span style=\"font-weight:bold;\">Wisconsin (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2942592<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Wyoming":
{
value: "225839",
tooltip: {content: "<span style=\"font-weight:bold;\">Wyoming (United States)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 225839<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Cerro_Largo":
{
value: "500841",
tooltip: {content: "<span style=\"font-weight:bold;\">Cerro Largo (Uruguay)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 500841<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Montevideo":
{
value: "914885",
tooltip: {content: "<span style=\"font-weight:bold;\">Montevideo (Uruguay)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 914885<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Paysandú":
{
value: "320391",
tooltip: {content: "<span style=\"font-weight:bold;\">Paysandú (Uruguay)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 320391<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bolivar":
{
value: "245942",
tooltip: {content: "<span style=\"font-weight:bold;\">Bolivar (Venezuela)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 245942<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Miranda":
{
value: "1336640",
tooltip: {content: "<span style=\"font-weight:bold;\">Miranda (Venezuela)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1336640<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 5<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Zulia":
{
value: "1578297",
tooltip: {content: "<span style=\"font-weight:bold;\">Zulia (Venezuela)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1578297<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gannan":
{
value: "3003662",
tooltip: {content: "<span style=\"font-weight:bold;\">Gannan (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3003662<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Gansu":
{
value: "3709923",
tooltip: {content: "<span style=\"font-weight:bold;\">Gansu (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 3709923<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Golog":
{
value: "400488",
tooltip: {content: "<span style=\"font-weight:bold;\">Golog (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 400488<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Haixi":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Haixi (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Jiuquan":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiuquan (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ningxia":
{
value: "2080136",
tooltip: {content: "<span style=\"font-weight:bold;\">Ningxia (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2080136<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 2<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Qinghai":
{
value: "1197560",
tooltip: {content: "<span style=\"font-weight:bold;\">Qinghai (Xibei San Ma)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1197560<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 0<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yemen":
{
value: "2492539",
tooltip: {content: "<span style=\"font-weight:bold;\">Yemen (Yemen)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2492539<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
"Bosnia":
{
value: "1912532",
tooltip: {content: "<span style=\"font-weight:bold;\">Bosnia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1912532<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 8<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 2<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Croatia":
{
value: "2227115",
tooltip: {content: "<span style=\"font-weight:bold;\">Croatia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 2227115<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dalmatia":
{
value: "1433448",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalmatia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1433448<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 6<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Herzegovina":
{
value: "547868",
tooltip: {content: "<span style=\"font-weight:bold;\">Herzegovina (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 547868<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Kosovo":
{
value: "616752",
tooltip: {content: "<span style=\"font-weight:bold;\">Kosovo (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 616752<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Ljubljana":
{
value: "333657",
tooltip: {content: "<span style=\"font-weight:bold;\">Ljubljana (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 333657<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Macedonia":
{
value: "1375877",
tooltip: {content: "<span style=\"font-weight:bold;\">Macedonia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1375877<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 5<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Montenegro":
{
value: "896593",
tooltip: {content: "<span style=\"font-weight:bold;\">Montenegro (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 896593<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 4<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 1<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Morava":
{
value: "707863",
tooltip: {content: "<span style=\"font-weight:bold;\">Morava (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 707863<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"North_Slovenia":
{
value: "812040",
tooltip: {content: "<span style=\"font-weight:bold;\">North Slovenia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 812040<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Serbia":
{
value: "1280682",
tooltip: {content: "<span style=\"font-weight:bold;\">Serbia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1280682<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 15<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 4<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 3"}
},
"Southern_Serbia":
{
value: "210256",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Serbia (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 210256<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Vojvodina":
{
value: "839645",
tooltip: {content: "<span style=\"font-weight:bold;\">Vojvodina (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 839645<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"West_Banat":
{
value: "586294",
tooltip: {content: "<span style=\"font-weight:bold;\">West Banat (Yugoslavia)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 586294<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 1<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Dali":
{
value: "1001221",
tooltip: {content: "<span style=\"font-weight:bold;\">Dali (Yunnan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 1001221<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 3<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 0<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 0"}
},
"Yunnan":
{
value: "11007921",
tooltip: {content: "<span style=\"font-weight:bold;\">Yunnan (Yunnan)</span><br /><img src=\"./resources/Population.png\" width = \"20\">Population: 11007921<br /><img src=\"./resources/VP.png\" width = \"20\">VP: 10<br /><img src=\"./resources/Civilian_factory.png\" width = \"20\">Civilian Factories: 3<br /><img src=\"./resources/Military_factory.png\" width = \"20\">Military Factories: 1"}
},
                }
            });

				/*var $mapcontainer2 = $(".mapcontainer2");*/
				$(".mapcontainer2").mapael({
				map: {
                 name: "hoi4map",
				// Enable zoom on the map
                 zoom: {
                     enabled: false,
                     maxLevel: 20
                 },
				
                 defaultArea: {
                    attrs: {
                        stroke: "#ffffff",
                        "stroke-width": 0.3,
                        fill: "#000000",
                        opacity: 0.4
                    },
                    attrsHover: {
                        "stroke-width": 0.7,
                        opacity: 1
                    }
                 }
             },
             legend: {
                 area: {
                     title: "Oil per State",
                     hideElemsOnClick:{
                        opacity: 0,
                        animDuration:250,
                     }, 
                     slices: [
                         {
                             max: 0,
                             attrs: {
                                 fill: "#dad7cd"
                             },
                             label: "0 Oil",
                         },
                         {
                             min: 1,
                             max: 10,
                             attrs: {
                                 fill: "#a3b18a"
                             },
                             label: "Between 1 and 10",
                         },
                         {
                             min: 11,
                             max: 50,
                             attrs: {
                                 fill: "#588157"
                             },
                             label: "Between 11 and 50",
                         },
                         {
                             min: 51,
                             attrs: {
                                 fill: "#344e41"
                             },
                             label: "More than 50",
                         }
                     ]
                 }
             },
                areas: {
"Herat":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Herat (Afghanistan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kabul":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kabul (Afghanistan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Albania":
{
value: "4",
tooltip: {content: "<span style=\"font-weight:bold;\">Albania (Albania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 4<br />Infra Oil: 5.6"}
},
"Northern_Epirus":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Epirus (Albania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shkodër":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shkodër (Albania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Buenos_Aires":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Buenos Aires (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chaco_Austral":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chaco Austral (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chubut":
{
value: "4",
tooltip: {content: "<span style=\"font-weight:bold;\">Chubut (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 4<br />Infra Oil: 4.8"}
},
"Formosa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Formosa (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Los_Andes":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Los Andes (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mendoza":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mendoza (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Región_Mesopotámica":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Región Mesopotámica (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 2.4"}
},
"Río_Negro":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Río Negro (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 3.6"}
},
"San_Juan_y_La_Rioja":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">San Juan y La Rioja (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"San_Luis_y_La_Pampa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">San Luis y La Pampa (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Santa_Cruz_AR":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa_Cruz_AR (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 3.6"}
},
"Santa_Fe":
{
value: "6",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Fe (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 6<br />Infra Oil: 8.4"}
},
"Tierra_del_Fuego":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Tierra del Fuego (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1"}
},
"Tucumán":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tucumán (Argentina)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bismarck":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bismarck (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Central_Australia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Central Australia (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_South_Wales":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New South Wales (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Queensland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Queensland (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_West_Australia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North West Australia (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Territory":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Territory (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Papua":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Papua (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Queensland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Queensland (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Solomon_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Solomon Islands (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Australia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Australia (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_West_Australia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South West Australia (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southwest_Queensland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southwest_Queensland (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tasmania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tasmania (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Victoria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Victoria (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Western_Australia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Australia (Australia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lower_Austria":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Lower Austria (Austria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.8"}
},
"Tyrol":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tyrol (Austria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Upper_Austria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Austria (Austria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vorarlberg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vorarlberg (Austria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Burundi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Burundi (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Coquilhatville":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Coquilhatville (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Costermansville":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Costermansville (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Elisabethville":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Elisabethville (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Leopoldville":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Leopoldville (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lusambo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lusambo (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rwanda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rwanda (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stanleyville":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stanleyville (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vlaanderen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vlaanderen (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wallonie":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wallonie (Belgium)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bhutan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bhutan (Bhutan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"La_Paz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">La Paz (Bolivian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Santa_Cruz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Cruz (Bolivian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Borneo":
{
value: "12",
tooltip: {content: "<span style=\"font-weight:bold;\">North Borneo (British Malaya)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 12<br />Infra Oil: 16.8"}
},
"Singapore":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Singapore (British Malaya)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Arunachal_Pradesh":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Arunachal Pradesh (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Assam":
{
value: "5",
tooltip: {content: "<span style=\"font-weight:bold;\">Assam (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 5<br />Infra Oil: 7"}
},
"Baluchistan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Baluchistan (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bihar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bihar (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bombay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bombay (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Burma":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Burma (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Delhi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Delhi (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"East_Bengal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">East Bengal (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gujarat":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Gujarat (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 4.2"}
},
"Hyderabad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hyderabad (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Indore":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Indore (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jabalpur":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jabalpur (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kashmir":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kashmir (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lucknow":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lucknow (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madras":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madras (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madurai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madurai (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mandalay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mandalay (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mysore":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mysore (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Kashmir":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Kashmir (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Orissa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Orissa (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Peshawar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Peshawar (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Punjab":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Punjab (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Quetta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Quetta (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rajahsthan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rajahsthan (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sind":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sind (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"West_Bengal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">West Bengal (British Raj)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Burgas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Burgas (Bulgaria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Moesia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Moesia (Bulgaria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Plovdiv":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Plovdiv (Bulgaria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sofia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sofia (Bulgaria)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Antofagasta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Antofagasta (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Araucanía":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Araucanía (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Arica_y_Tarapacá":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Arica y Tarapacá (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Atacama":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Atacama (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aysén":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Aysén (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.2"}
},
"Easter_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Easter Island (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Magallanes":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Magallanes (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 2.4"}
},
"Santiago":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Santiago (Chile)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Anhui":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Anhui (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Beijing":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Beijing (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Changde":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Changde (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Fujian":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Fujian (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ganzi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ganzi (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guizhou":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guizhou (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hebei":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hebei (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Henan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Henan (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Huangshan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Huangshan (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hubei":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hubei (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hunan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hunan (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jiangsu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiangsu (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jiangxi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiangxi (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Liangshan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Liangshan (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Qingdao":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Qingdao (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shandong":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shandong (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shanghai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shanghai (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sichuan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sichuan (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Xian":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Xian (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Xikang":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Xikang (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 2.4"}
},
"Zhejiang":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zhejiang (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zunyi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zunyi (China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cundinamarca":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cundinamarca (Colombia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"La_Libertad":
{
value: "15",
tooltip: {content: "<span style=\"font-weight:bold;\">La Libertad (Colombia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 15<br />Infra Oil: 21"}
},
"Meta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Meta (Colombia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shaanxi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shaanxi (Communist China)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Costa_Rica":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Costa Rica (Costa Rica)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cuba":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cuba (Cuba)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bohemia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bohemia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Carpathian_Ruthenia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Carpathian Ruthenia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eastern_Slovakia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eastern_Sudetenland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Moravia":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Moravia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 3.6"}
},
"Southern_Slovakia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sudetenland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Western_Slovakia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zaolzie":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zaolzie (Czechoslovakia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bornholm":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bornholm (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Faroe_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Faroe Islands (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Fyn":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Fyn (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Greenland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Greenland (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jylland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jylland (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sjaelland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sjaelland (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sønderjylland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sønderjylland (Denmark)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dominican_Republic":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dominican Republic (Dominican Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alberta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alberta (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"British_Columbia":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.6"}
},
"Cote_Nord":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cote_Nord (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Districts_of_Ontario":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Districts of Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Haida_Gwaii":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Haida Gwaii (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Manitoba":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Maurice":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Maurice (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_Brunswick":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New Brunswick (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nord_du_Quebec":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nord du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Manitoba":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Ontario":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Saskatchewan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northwest_Territories":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northwest Territories (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nova_Scotia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nova Scotia (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nunavut":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nunavut (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ouest_du_Quebec":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ouest du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saguenay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saguenay (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saint_Lawrence":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saint Lawrence (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saskatchewan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Ontario":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Upper_British_Columbia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vancouver_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vancouver Island (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yukon_Territory":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yukon Territory (Dominion of Canada)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aru_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aru Islands (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Java":
{
value: "10",
tooltip: {content: "<span style=\"font-weight:bold;\">Java (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 10<br />Infra Oil: 16"}
},
"Kalimantan":
{
value: "5",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalimantan (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 5<br />Infra Oil: 6"}
},
"Lesser_Sunda_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lesser Sunda Islands (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sulawesi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sulawesi (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sumatra":
{
value: "12",
tooltip: {content: "<span style=\"font-weight:bold;\">Sumatra (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 12<br />Infra Oil: 16.8"}
},
"The_Moluccas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">The Moluccas (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"West_Papua":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">West Papua (Dutch East Indies)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ecuador":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Ecuador (Ecuador)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 2.8"}
},
"Galapagos_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Galapagos Islands (Ecuador)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pastaza":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pastaza (Ecuador)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"El_Salvador":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">El Salvador (El Salvador)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Harju":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Harju (Estonia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pärnu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pärnu (Estonia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saaremaa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saaremaa (Estonia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tartu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tartu (Estonia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Virumaa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Virumaa (Estonia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bale":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bale (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Begemder":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Begemder (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gojjam":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gojjam (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hararghe":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hararghe (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Illubabor_Kaffa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Illubabor_Kaffa (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shewa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shewa (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sidamo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sidamo (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tigray":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tigray (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Welega":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Welega (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wello":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wello (Ethiopia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Åland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Åland (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Häme":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Häme (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Karjala":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Karjala (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kuopio":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuopio (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kymi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kymi (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lappi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lappi (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mikkeli":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mikkeli (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oulu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oulu (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Petsamo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Petsamo (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Salla":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Salla (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Turku":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Turku (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Uusimaa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Uusimaa (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vaasa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vaasa (Finland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aleppo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aleppo (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Algerian_Desert":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Algerian Desert (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Algiers":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Algiers (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alpes":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alpes (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alsace_Lorraine":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alsace_Lorraine (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aquitaine":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aquitaine (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Auvergne":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Auvergne (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Borkou_Ennedi_Tibesti":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Borkou_Ennedi_Tibesti (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bamako":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bamako (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bouches_du_Rhone":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bouches_du_Rhone (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bourgogne":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bourgogne (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Brittany":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Brittany (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cambodia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cambodia (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cameroon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cameroon (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Casablanca":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Casablanca (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Centre":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Centre (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Centre_Sud":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Centre_Sud (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chad (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Champagne":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Champagne (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Comoro_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Comoro Islands (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Constantine":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Constantine (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Corsica":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Corsica (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dahomey":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dahomey (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Damascus":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Damascus (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Deir_az_Zur":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Deir_az_Zur (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Equatorial_Africa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Equatorial Africa (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Franche_Comte":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Franche_Comte (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"French_Caribbean":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">French Caribbean (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"French_Guiana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">French Guiana (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"French_India":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">French India (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"French_Somaliland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">French Somaliland (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gabès":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gabès (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gabon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gabon (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gao":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gao (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guangzhouwan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangzhouwan (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guinea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guinea (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hatay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hatay (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ile_de_France":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ile de France (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ivory_Coast":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ivory Coast (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kayes_Koulikoro":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kayes_Koulikoro (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kerguelen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kerguelen (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Languedoc":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Languedoc (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Laos":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Laos (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lebanon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lebanon (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Limousin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Limousin (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Loire":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Loire (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madagascar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madagascar (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Marrakech":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Marrakech (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mauritania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritania (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mauritanian_Desert":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritanian Desert (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Middle_Congo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Middle Congo (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Midi_Pyrenees":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Midi Pyrenees (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nendo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nendo (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_Caledonia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New Caledonia (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Niger":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Niger (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nord_Pas_de_Calais":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nord_Pas_de_Calais (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Normandy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Normandy (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Picardy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Picardy (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Poitou":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Poitou (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pyrénées_Atlantiques":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pyrénées_Atlantiques (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Reunion":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Reunion (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rhone":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhone (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Savoy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Savoy (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Senegal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Senegal (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Indochina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Indochina (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Sahara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Sahara (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"St_Pierre_and_Miquelon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">St Pierre and Miquelon (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tahiti":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tahiti (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tlemcen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tlemcen (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Togo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Togo (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tombouctou":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tombouctou (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tonkin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tonkin (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tunisia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tunisia (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Upper_Volta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Volta (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Var":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Var (France)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Brandenburg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Brandenburg (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ermland_Masuren":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ermland_Masuren (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Franken":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Franken (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hannover":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Hannover (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 3.6"}
},
"Hessen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hessen (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hinterpommern":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hinterpommern (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Holstein":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Holstein (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Königsberg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Königsberg (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mecklenburg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mecklenburg (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Moselland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Moselland (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Niederbayern":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Niederbayern (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Niederschlesien":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Niederschlesien (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oberbayern":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oberbayern (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oberschlesien":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oberschlesien (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ostmark":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ostmark (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rhineland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhineland (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sachsen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sachsen (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Schleswig":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Schleswig (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Thüringen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Thüringen (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vorpommern":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vorpommern (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Weser_Ems":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Weser_Ems (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Westfalen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Westfalen (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Württemberg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Württemberg (German Reich)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guangdong":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangdong (Guangxi Clique)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guangxi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangxi (Guangxi Clique)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guangzhou":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guangzhou (Guangxi Clique)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hainan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hainan (Guangxi Clique)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nanning":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nanning (Guangxi Clique)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guatemala":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guatemala (Guatemala)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Haiti":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Haiti (Haiti)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Honduras":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Honduras (Honduras)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Iceland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Iceland (Iceland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Fars":
{
value: "10",
tooltip: {content: "<span style=\"font-weight:bold;\">Fars (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 10<br />Infra Oil: 12"}
},
"Gilan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gilan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hamadan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hamadan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Isfahan":
{
value: "12",
tooltip: {content: "<span style=\"font-weight:bold;\">Isfahan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 12<br />Infra Oil: 14.4"}
},
"Kerman":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kerman (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khorasan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khorasan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khuzestan":
{
value: "28",
tooltip: {content: "<span style=\"font-weight:bold;\">Khuzestan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 28<br />Infra Oil: 44.8"}
},
"Kurdistan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurdistan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Semnan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Semnan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sistan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sistan (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tehran":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tehran (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tibriz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tibriz (Iran)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Al_Hajara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Al Hajara (Iraq)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Baghdad":
{
value: "15",
tooltip: {content: "<span style=\"font-weight:bold;\">Baghdad (Iraq)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 15<br />Infra Oil: 24"}
},
"Mosul":
{
value: "8",
tooltip: {content: "<span style=\"font-weight:bold;\">Mosul (Iraq)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 8<br />Infra Oil: 11.2"}
},
"Connaught":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Connaught (Ireland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Leinster":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Leinster (Ireland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Munster":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Munster (Ireland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Abruzzo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Abruzzo (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alto_Adige":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alto Adige (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Benghasi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Benghasi (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Calabria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Calabria (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Campania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Campania (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cyrenaica":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cyrenaica (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Derna":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Derna (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dodecanese":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dodecanese (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"El_Agheila":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">El Agheila (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Emilia_Romagna":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Emilia Romagna (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eritrea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eritrea (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Istria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Istria (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jubaland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jubaland (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lazio":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lazio (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Libyan_Desert":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Libyan Desert (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Litorale":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Litorale (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lombardia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lombardia (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Piemonte":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Piemonte (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Puglia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Puglia (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sardegna":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sardegna (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sicilia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sicilia (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sirte":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sirte (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Somaliland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Somaliland (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Toscana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Toscana (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Trentino":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Trentino (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tripoli":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tripoli (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tripolitania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tripolitania (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Veneto":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Veneto (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zara (Italy)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Caroline_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Caroline Islands (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chugoku":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chugoku (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dalian":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalian (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"East_Hebei":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">East Hebei (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hokkaido":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hokkaido (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hokuriku":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hokuriku (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Iwo_Jima":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Iwo Jima (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kansai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kansai (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kanto":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kanto (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Koshinetsu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Koshinetsu (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kuril_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuril Islands (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kyushu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyushu (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Marcus_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Marcus Island (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Marshall_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Marshall Islands (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Korea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Korea (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Okinawa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Okinawa (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Palau":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Palau (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saipan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saipan (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shikoku":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shikoku (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Korea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Korea (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Sakhalin":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">South Sakhalin (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 4.2"}
},
"Taiwan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Taiwan (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tohoku":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tohoku (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tokai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tokai (Japan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aegean_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aegean Islands (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Attica":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Attica (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Central_Macedonia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Central Macedonia (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Crete":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Crete (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Epirus":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Epirus (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Peloponnese":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Peloponnese (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Thrace":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Thrace (Kingdom of Greece)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alföld":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alföld (Kingdom of Hungary)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Hungary":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Hungary (Kingdom of Hungary)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Transdanubia":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Transdanubia (Kingdom of Hungary)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.6"}
},
"Kurzeme":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurzeme (Latvia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Latgale":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Latgale (Latvia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rīga":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rīga (Latvia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vidzeme":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vidzeme (Latvia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zemgale":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zemgale (Latvia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Liberia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Liberia (Liberia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aukštaitija":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aukštaitija (Lithuania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kaunas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kaunas (Lithuania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Memel":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Memel (Lithuania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sūduva":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sūduva (Lithuania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Žemaitija":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Žemaitija (Lithuania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Luxembourg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Luxembourg (Luxembourg)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Heilungkiang":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Heilungkiang (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hulunbuir":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hulunbuir (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jehol":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jehol (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kirin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirin (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Liaoning":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Liaoning (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Liaotung":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Liaotung (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sungkiang":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sungkiang (Manchukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chahar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chahar (Mengkukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Chahar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Chahar (Mengkukuo)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Baja_California":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Baja California (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chiapas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chiapas (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chihuahua":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chihuahua (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Coahuila":
{
value: "8",
tooltip: {content: "<span style=\"font-weight:bold;\">Coahuila (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 8<br />Infra Oil: 11.2"}
},
"Durango":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Durango (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guerrero":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guerrero (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jalisco":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jalisco (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mexico_City":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mexico City (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oaxaca":
{
value: "8",
tooltip: {content: "<span style=\"font-weight:bold;\">Oaxaca (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 8<br />Infra Oil: 11.2"}
},
"Sonora":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sonora (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tamaulipas":
{
value: "9",
tooltip: {content: "<span style=\"font-weight:bold;\">Tamaulipas (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 9<br />Infra Oil: 12.6"}
},
"Veracruz":
{
value: "9",
tooltip: {content: "<span style=\"font-weight:bold;\">Veracruz (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 9<br />Infra Oil: 12.6"}
},
"Yucatan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yucatan (Mexico)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dornod":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dornod (Mongolia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gobi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gobi (Mongolia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khovd":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khovd (Mongolia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khövsgöl":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khövsgöl (Mongolia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ulaanbaatar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ulaanbaatar (Mongolia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nepal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nepal (Nepal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Brabant":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Brabant (Netherlands)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Curaçao":
{
value: "35",
tooltip: {content: "<span style=\"font-weight:bold;\">Curaçao (Netherlands)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 35<br />Infra Oil: 49"}
},
"Friesland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Friesland (Netherlands)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Holland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Holland (Netherlands)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Suriname":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Suriname (Netherlands)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Island (New Zealand)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Samoa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Samoa (New Zealand)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Island (New Zealand)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nicaragua":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nicaragua (Nicaragua)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Agder":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Agder (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Finnmark":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Finnmark (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Helgeland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Helgeland (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jan_Mayen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jan Mayen (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nordland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nordland (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Opplandene":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Opplandene (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oslofjord":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oslofjord (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Telemark":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Telemark (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Troms":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Troms (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Trøndelag":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Trøndelag (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vestlandet":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vestlandet (Norway)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oman":
{
value: "2",
tooltip: {content: "<span style=\"font-weight:bold;\">Oman (Oman)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 2<br />Infra Oil: 2.4"}
},
"Panamá":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Panamá (Panama)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.4"}
},
"Arequipa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Arequipa (Peru)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lima":
{
value: "14",
tooltip: {content: "<span style=\"font-weight:bold;\">Lima (Peru)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 14<br />Infra Oil: 19.6"}
},
"Loreto":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Loreto (Peru)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tacna_Moquegua":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tacna_Moquegua (Peru)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ucayali":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ucayali (Peru)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cebu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cebu (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Central_islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Central islands (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Luzon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Luzon (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Manila":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Manila (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mindanao":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mindanao (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Palawan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Palawan (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Samar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Samar (Philippines)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Białystok":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Białystok (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Danzig":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Danzig (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gdynia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gdynia (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Katowice":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Katowice (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kielce":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kielce (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kraków":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Kraków (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 4.8"}
},
"Lodz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lodz (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lublin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lublin (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lwów":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lwów (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nowogródek":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nowogródek (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Płock":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Płock (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Polesie":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Polesie (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Poznan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Poznan (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stanisławów":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stanisławów (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Warszawa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Warszawa (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wilejka":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wilejka (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wilno":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wilno (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wołyn":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wołyn (Poland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Azores":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Azores (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Beja":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Beja (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cape_Verde":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cape Verde (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Goa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Goa (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guarda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guarda (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lisbon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lisbon (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lourenço_Marques":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lourenço Marques (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Luanda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Luanda (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Macau":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Macau (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madeira":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madeira (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Manica_e_Sofala":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Manica e Sofala (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Angola":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Angola (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Porto":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Porto (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Portuguese_Guinea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Portuguese Guinea (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Portuguese_Timor":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Portuguese Timor (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Santarém":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Santarém (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sao_Tome":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sao Tome (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_West_Angola":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South West Angola (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zambesi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambesi (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zambezia_Mosambique":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambezia_Mosambique (Portugal)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chaco_Boreal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chaco Boreal (Republic of Paraguay)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Paraguay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Paraguay (Republic of Paraguay)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Banat":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Banat (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bessarabia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bessarabia (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bucovina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bucovina (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Crisana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Crisana (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dobrudja":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dobrudja (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Moldova":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Moldova (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Muntenia":
{
value: "44",
tooltip: {content: "<span style=\"font-weight:bold;\">Muntenia (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 44<br />Infra Oil: 70.4"}
},
"North_Transylvania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Transylvania (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oltenia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oltenia (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Bessarabia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Bessarabia (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Transylvania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Transylvania (Romania)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Al_Qassim":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Al_Qassim (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Asir_Makkah":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Asir_Makkah (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dammam":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Dammam (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 3.6"}
},
"Jawf":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jawf (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madinah":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madinah (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Najiran":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Najiran (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nejd":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nejd (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rub_al_Khali":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rub al Khali (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tabuk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tabuk (Saudi Arabia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Acre":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Acre (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amapá":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amapá (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_1":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 1 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_2":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 2 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_3":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 3 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_4":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 4 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_5":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 5 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_6":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 6 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_7":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 7 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazon_impassable_8":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazon impassable 8 (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amazonas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amazonas (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bahia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bahia (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ceará":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ceará (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Espírito_Santo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Espírito Santo (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Goiás":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Goiás (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guaporé":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guaporé (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Maranhão":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Maranhão (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mato_Grosso":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mato Grosso (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Minas_Gerais":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Minas Gerais (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pará":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pará (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Paraná":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Paraná (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pernambuco":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pernambuco (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Piauí":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Piauí (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Punta_Porá":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Punta Porá (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rio_Branco":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Branco (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rio_de_Janeiro":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio de Janeiro (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rio_Grande_do_Norte":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Grande do Norte (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rio_Grande_do_Sul":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio Grande do Sul (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Santa_Catarina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Santa Catarina (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"São_Paulo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">São Paulo (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tocantins":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tocantins (Second Brazilian Republic)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ordos":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ordos (Shanxi)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shanxi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shanxi (Shanxi)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Suiyuan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Suiyuan (Shanxi)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Isan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Isan (Siam)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lanna":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lanna (Siam)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Malay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Malay (Siam)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Siam":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Siam (Siam)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dabancheng":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dabancheng (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dzungaria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dzungaria (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kunlun_Shan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kunlun Shan (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Taklamakan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Taklamakan (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Urumqi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Urumqi (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yarkand":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yarkand (Sinkiang)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cape":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cape (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Karas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Karas (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khomas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khomas (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kunene":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kunene (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Natal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Natal (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Otjozondjupa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Otjozondjupa (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Transvaal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Transvaal (South Africa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Abkhazia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Abkhazia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Akhtubinsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Akhtubinsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Akmolinsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Akmolinsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alma_Ata":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alma_Ata (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Altai_Krai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Altai Krai (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amur":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amur (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Arkhangelsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Arkhangelsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Armenia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Armenia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ashkhabad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ashkhabad (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Astrakhan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Astrakhan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ayaguz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ayaguz (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Azerbaijan":
{
value: "70",
tooltip: {content: "<span style=\"font-weight:bold;\">Azerbaijan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 70<br />Infra Oil: 98"}
},
"Balakovo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Balakovo (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Balta_Tiraspol":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Balta_Tiraspol (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Belgorod":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Belgorod (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Birobidzhan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Birobidzhan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bobruysk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bobruysk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bodaybo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bodaybo (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bratsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bratsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bryansk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bryansk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bukhara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bukhara (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Buryatia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Buryatia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chechnya_Ingushetia":
{
value: "9",
tooltip: {content: "<span style=\"font-weight:bold;\">Chechnya_Ingushetia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 9<br />Infra Oil: 12.6"}
},
"Chelyabinsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chelyabinsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cherkasy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cherkasy (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chernigov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chernigov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chita":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chita (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chukchi_Peninsula":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chukchi Peninsula (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chukotka":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chukotka (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Chuvashia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Chuvashia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Crimea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Crimea (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dagestan":
{
value: "10",
tooltip: {content: "<span style=\"font-weight:bold;\">Dagestan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 10<br />Infra Oil: 14"}
},
"Dnipropetrovsk":
{
value: "4",
tooltip: {content: "<span style=\"font-weight:bold;\">Dnipropetrovsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 4<br />Infra Oil: 6.4"}
},
"Dudinka":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dudinka (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Engels_Marxstadt":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Engels_Marxstadt (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Georgia_US":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Georgia_US (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gomel":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gomel (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gorky":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gorky (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guryev":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guryev (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Irkutsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Irkutsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ivanovo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ivanovo (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kabardino_Balkaria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kabardino_Balkaria (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kalinin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalinin (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kalmykia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kalmykia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kaluga":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kaluga (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kamchatka":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kamchatka (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Karagandy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Karagandy (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Karakalpakstan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Karakalpakstan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kargopol":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kargopol (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kazan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kazan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khabarovsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khabarovsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khakassia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khakassia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kharkov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kharkov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khatangsky":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khatangsky (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kherson":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kherson (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khiva":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khiva (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khmelnytskyi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khmelnytskyi (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kyiv":
{
value: "8",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyiv (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 8<br />Infra Oil: 14.4"}
},
"Kirensk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirensk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kirov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kirov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kolyma":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kolyma (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kostanay":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kostanay (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kotlas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kotlas (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Krasnodar":
{
value: "12",
tooltip: {content: "<span style=\"font-weight:bold;\">Krasnodar (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 12<br />Infra Oil: 19.2"}
},
"Krasnoyarsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Krasnoyarsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kursk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kursk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kuybyshev":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuybyshev (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kyzyl_Orda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kyzyl Orda (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Leningrad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Leningrad (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lipetsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lipetsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Luga":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Luga (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Magadan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Magadan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Magnitogorsk":
{
value: "6",
tooltip: {content: "<span style=\"font-weight:bold;\">Magnitogorsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 6<br />Infra Oil: 9.6"}
},
"Mari_El":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mari El (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mikhaylovka":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mikhaylovka (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Millerovo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Millerovo (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Minsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Minsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Moscow":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Moscow (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mozyr":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mozyr (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Murmansk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Murmansk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mykolaiv":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mykolaiv (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Navoi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Navoi (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nenets":
{
value: "7",
tooltip: {content: "<span style=\"font-weight:bold;\">Nenets (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 7<br />Infra Oil: 8.4"}
},
"Nevel":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nevel (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nikolayevsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nikolayevsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Ossetia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Ossetia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Sakhalin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Sakhalin (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Urals":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Urals (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Novgorod":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Novgorod (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Novosibirsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Novosibirsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Odessa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Odessa (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Okhotsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Okhotsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Olonets":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Olonets (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Omsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Omsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Onega":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Onega (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Orel":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Orel (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Orenburg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Orenburg (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oyrot_Region":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oyrot Region (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pamir":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pamir (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pavlodar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pavlodar (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pechora":
{
value: "7",
tooltip: {content: "<span style=\"font-weight:bold;\">Pechora (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 7<br />Infra Oil: 8.4"}
},
"Penza":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Penza (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Perm":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Perm (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Poltava":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Poltava (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pskov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pskov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Roslavl":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Roslavl (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rostov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rostov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ryazan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ryazan (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rzhev":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rzhev (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Salekhard":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Salekhard (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saratov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saratov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Semipalatinsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Semipalatinsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Smolensk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Smolensk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sochi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sochi (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stalinabad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalinabad (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stalingrad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalingrad (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stalino":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stalino (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Stavropol":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Stavropol (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sumy":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sumy (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Surgut":
{
value: "13",
tooltip: {content: "<span style=\"font-weight:bold;\">Surgut (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 13<br />Infra Oil: 15.6"}
},
"Sverdlovsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sverdlovsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Syktyvkar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Syktyvkar (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tambov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tambov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tashauz":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tashauz (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tashkent":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tashkent (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tikhvin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tikhvin (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tobolsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tobolsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tomsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tomsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tula":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tula (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tyumen":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tyumen (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Udachny":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Udachny (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Udmurtia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Udmurtia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ufa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ufa (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ulyanovsky":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ulyanovsky (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Uralsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Uralsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ust_Urt":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ust Urt (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Verkhoyansk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Verkhoyansk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vinnytsia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vinnytsia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vitebsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vitebsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vladivostok":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vladivostok (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Volgodonsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Volgodonsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Volkhov":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Volkhov (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vologda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vologda (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Voronezh":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Voronezh (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Voroshilovgrad":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Voroshilovgrad (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yakutsk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yakutsk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yamalia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yamalia (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yaroslavl":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yaroslavl (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yeniseisk":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yeniseisk (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zaporozhe":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zaporozhe (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zhytomyr":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zhytomyr (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zlatoust":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zlatoust (Soviet Union)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Asturias":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Asturias (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Burgos":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Burgos (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cataluña":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cataluña (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ciudad_Real":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ciudad Real (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Córdoba":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Córdoba (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eastern_Aragón":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Aragón (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Equatorial_Guinea":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Equatorial Guinea (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Extremadura":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Extremadura (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Galicia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Galicia (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Granada":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Granada (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guadalajara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guadalajara (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Islas_Baleares":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Islas Baleares (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Islas_Canarias":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Islas Canarias (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"León":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">León (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Madrid":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Madrid (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Murcia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Murcia (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Navarra":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Navarra (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"País_Vasco":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">País Vasco (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rio_de_Oro":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rio de Oro (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Salamanca":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Salamanca (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sevilla":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sevilla (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sidi_Ifni":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sidi Ifni (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Spanish_Africa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Spanish Africa (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Valencia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Valencia (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Valladolid":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Valladolid (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Western_Aragón":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Aragón (Spain)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Afar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Afar (Sultanate of Aussa)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bohuslän":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bohuslän (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dalarna":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalarna (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gävleborg":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gävleborg (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gotland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gotland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jämtland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jämtland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Norrbotten":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Norrbotten (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Östergötland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Östergötland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Skåne":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Skåne (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Småland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Småland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Södermalm":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Södermalm (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Värmland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Värmland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Västerbotten":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Västerbotten (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Västergötland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Västergötland (Sweden)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eastern_Swiss_Alps":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jura_Mountains":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jura Mountains (Switzerland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Swiss_Plateau":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Swiss Plateau (Switzerland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ticino":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ticino (Switzerland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Western_Swiss_Alps":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tannu_Tuva":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tannu Tuva (Tannu Tuva)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nagqu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nagqu (Tibet)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ngari":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ngari (Tibet)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shigatse":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shigatse (Tibet)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Afyon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Afyon (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Amasya":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Amasya (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ankara":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ankara (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Antalya":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Antalya (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bursa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bursa (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Diyarbakır":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Diyarbakır (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Edirne":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Edirne (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hakkari":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hakkari (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Istanbul":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Istanbul (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Izmir":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Izmir (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Izmit":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Izmit (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kastamonu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kastamonu (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kayseri":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kayseri (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Konya":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Konya (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Malatya":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Malatya (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mersin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mersin (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Samsun":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Samsun (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sivas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sivas (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Trabzon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Trabzon (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tunceli":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tunceli (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Van":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Van (Turkey)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aberdeenshire":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aberdeenshire (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Abu_Dhabi":
{
value: "5",
tooltip: {content: "<span style=\"font-weight:bold;\">Abu Dhabi (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 5<br />Infra Oil: 6"}
},
"Aden":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aden (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alexandria":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Alexandria (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.6"}
},
"Andaman":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Andaman (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ascension":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ascension (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Aswan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Aswan (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bahr_al_Ghazal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bahr al Ghazal (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bechuanaland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bechuanaland (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Benue":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Benue (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Bermuda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bermuda (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Blue_Nile":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Blue Nile (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Borno":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Borno (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"British_Guyana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">British Guyana (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"British_Honduras":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">British Honduras (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"British_Somaliland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">British Somaliland (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cairo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cairo (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ceylon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ceylon (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Christmas_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Christmas Island (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cocos_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cocos Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cumbria":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cumbria (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cyprus":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cyprus (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Diego_Garcia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Diego Garcia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"East_Anglia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">East Anglia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"East_Midlands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">East Midlands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Eastern_Desert":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Eastern Desert (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ellice_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ellice Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Falkland_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Falkland Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Fiji":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Fiji (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gambia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gambia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Garissa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Garissa (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ghana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ghana (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gibraltar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gibraltar (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gilbert_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gilbert Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gloucestershire":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gloucestershire (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Greater_London_Area":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Greater London Area (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hong_Kong":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hong Kong (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Isle_of_Man":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Isle of Man (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jamaica":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jamaica (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jordan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jordan (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kassala":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kassala (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Khartoum":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Khartoum (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kurdufan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kurdufan (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kuwait":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kuwait (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Labrador":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Labrador (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lagos":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lagos (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lanark":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lanark (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lancashire":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lancashire (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Leeward_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Leeward Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Lothian":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Lothian (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Malawi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Malawi (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Maldives":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Maldives (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Malta":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Malta (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Matrouh":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Matrouh (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mauritius":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mauritius (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mombasa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mombasa (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nairobi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nairobi (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nauru":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nauru (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Newfoundland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Newfoundland (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Darfur":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Darfur (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Bahamas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northern_Ireland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northern Ireland (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Northumberland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Northumberland (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nyanza_Rift_Valley":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nyanza_Rift_Valley (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Palestine":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Palestine (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pitcairn_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pitcairn Island (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Qatar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Qatar (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Rhodesia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Rhodesia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Saint_Helena":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Saint Helena (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Scottish_Highlands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Scottish Highlands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Seychelles":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Seychelles (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Shetland_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Shetland Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sierra_Leone":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sierra Leone (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sinai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sinai (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Socotra":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Socotra (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sokoto":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sokoto (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Darfur":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Darfur (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Georgia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Georgia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_West_England":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South_West England (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Bahamas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Suez":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Suez (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Sussex":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Sussex (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tanganyika":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tanganyika (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Trinidad":
{
value: "12",
tooltip: {content: "<span style=\"font-weight:bold;\">Trinidad (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 12<br />Infra Oil: 16.8"}
},
"Uganda":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Uganda (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Upper_Nile":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Upper Nile (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wales":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wales (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"West_Midlands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">West Midlands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Western_Desert":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Western Desert (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Windward_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Windward Islands (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yorkshire":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yorkshire (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Zambia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Zambia (United Kingdom)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alabama":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alabama (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Alaska":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Alaska (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Arizona":
{
value: "5",
tooltip: {content: "<span style=\"font-weight:bold;\">Arizona (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 5<br />Infra Oil: 7"}
},
"Arkansas":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Arkansas (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Attu_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Attu Island (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"California":
{
value: "180",
tooltip: {content: "<span style=\"font-weight:bold;\">California (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 180<br />Infra Oil: 288"}
},
"Colorado":
{
value: "14",
tooltip: {content: "<span style=\"font-weight:bold;\">Colorado (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 14<br />Infra Oil: 19.6"}
},
"Florida":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Florida (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Georgia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Georgia (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Guam":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Guam (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Hawaii":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Hawaii (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Idaho":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Idaho (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Illinois":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Illinois (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Indiana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Indiana (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Iowa":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Iowa (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Johnston_Atoll":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Johnston Atoll (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kansas":
{
value: "30",
tooltip: {content: "<span style=\"font-weight:bold;\">Kansas (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 30<br />Infra Oil: 42"}
},
"Kentucky":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kentucky (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Line_Islands":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Line Islands (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Louisiana":
{
value: "44",
tooltip: {content: "<span style=\"font-weight:bold;\">Louisiana (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 44<br />Infra Oil: 70.4"}
},
"Maryland":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Maryland (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Michigan":
{
value: "6",
tooltip: {content: "<span style=\"font-weight:bold;\">Michigan (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 6<br />Infra Oil: 9.6"}
},
"Midway_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Midway Island (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Minnesota":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Minnesota (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Mississippi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Mississippi (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Missouri":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Missouri (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Montana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Montana (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nebraska":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nebraska (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Nevada":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Nevada (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_England":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New England (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_Jersey":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New Jersey (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"New_Mexico":
{
value: "14",
tooltip: {content: "<span style=\"font-weight:bold;\">New Mexico (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 14<br />Infra Oil: 19.6"}
},
"New_York":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">New York (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Carolina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Carolina (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Dakota":
{
value: "7",
tooltip: {content: "<span style=\"font-weight:bold;\">North Dakota (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 7<br />Infra Oil: 9.8"}
},
"Ohio":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ohio (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Oklahoma":
{
value: "60",
tooltip: {content: "<span style=\"font-weight:bold;\">Oklahoma (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 60<br />Infra Oil: 84"}
},
"Oregon":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Oregon (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Panamá_Canal":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Panamá Canal (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Pennsylvania":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Pennsylvania (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Phoenix_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Phoenix Island (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Puerto_Rico":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Puerto Rico (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Carolina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Carolina (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"South_Dakota":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">South Dakota (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Tennessee":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Tennessee (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Texas":
{
value: "320",
tooltip: {content: "<span style=\"font-weight:bold;\">Texas (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 320<br />Infra Oil: 512"}
},
"Utah":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Utah (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Virginia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Virginia (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wake_Island":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wake Island (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Washington":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Washington (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"West_Virginia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">West Virginia (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wisconsin":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wisconsin (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Wyoming":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Wyoming (United States)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Cerro_Largo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Cerro Largo (Uruguay)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Montevideo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Montevideo (Uruguay)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Paysandú":
{
value: "3",
tooltip: {content: "<span style=\"font-weight:bold;\">Paysandú (Uruguay)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 3<br />Infra Oil: 3.6"}
},
"Bolivar":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bolivar (Venezuela)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Miranda":
{
value: "41",
tooltip: {content: "<span style=\"font-weight:bold;\">Miranda (Venezuela)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 41<br />Infra Oil: 57.4"}
},
"Zulia":
{
value: "35",
tooltip: {content: "<span style=\"font-weight:bold;\">Zulia (Venezuela)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 35<br />Infra Oil: 49"}
},
"Gannan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gannan (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Gansu":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Gansu (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Golog":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Golog (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Haixi":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Haixi (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Jiuquan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Jiuquan (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ningxia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ningxia (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Qinghai":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Qinghai (Xibei San Ma)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yemen":
{
value: "1",
tooltip: {content: "<span style=\"font-weight:bold;\">Yemen (Yemen)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 1<br />Infra Oil: 1.4"}
},
"Bosnia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Bosnia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Croatia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Croatia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dalmatia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dalmatia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Herzegovina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Herzegovina (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Kosovo":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Kosovo (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Ljubljana":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Ljubljana (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Macedonia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Macedonia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Montenegro":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Montenegro (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Morava":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Morava (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"North_Slovenia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">North Slovenia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Serbia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Serbia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Southern_Serbia":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Southern Serbia (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Vojvodina":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Vojvodina (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"West_Banat":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">West Banat (Yugoslavia)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Dali":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Dali (Yunnan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
"Yunnan":
{
value: "0",
tooltip: {content: "<span style=\"font-weight:bold;\">Yunnan (Yunnan)</span><br /><img src=\"./resources/Oil.png\" width = \"20\">Base Oil: 0<br />Infra Oil: 0"}
},
              
			  }			
		});
		
				$(".mapcontainer3").mapael({
				map: {
                 name: "hoi4map",
				// Enable zoom on the map
                 zoom: {
                     enabled: true,
                     maxLevel: 10
                 },
				
                 defaultArea: {
                     attrs: {
                         stroke: "#fff",
                         "stroke-width": 0.5
                     },
                     attrsHover: {
                         "stroke-width": 0.7
                     }
                 }
             },
             legend: {
                 area: {
                     title: "Alum per State",
                     slices: [
                         {
                             max: 0,
                             attrs: {
                                 fill: "#f8f9fa"
                             },
                             label: "0 Aluminium",
                         },
                         {
                             min: 1,
                             max: 10,
                             attrs: {
                                 fill: "#dee2e6"
                             },
                             label: "Between 1 and 10",
                         },
                         {
                             min: 11,
                             max: 50,
                             attrs: {
                                 fill: "#6c757d"
                             },
                             label: "Between 11 and 50",
                         },
                         {
                             min: 51,
                             attrs: {
                                 fill: "#343a40"
                             },
                             label: "More than 50",
                         }
                     ]
                 }
             },	

			areas: {
"Herat": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Herat (Afghanistan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kabul": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kabul (Afghanistan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Albania": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Albania (Albania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.4"
    }
},
"Northern_Epirus": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Epirus (Albania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shkodër": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shkodër (Albania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.4"
    }
},
"Buenos_Aires": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Buenos Aires (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chaco_Austral": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chaco Austral (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chubut": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chubut (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Formosa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Formosa (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Los_Andes": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Los Andes (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mendoza": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mendoza (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Región_Mesopotámica": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Región Mesopotámica (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Río_Negro": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Río Negro (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"San_Juan_y_La_Rioja": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">San Juan y La Rioja (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"San_Luis_y_La_Pampa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">San Luis y La Pampa (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santa_Cruz_AR": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santa_Cruz_AR (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santa_Fe": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santa Fe (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tierra_del_Fuego": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tierra del Fuego (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tucumán": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tucumán (Argentina)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bismarck": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bismarck (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Central_Australia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Central Australia (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"New_South_Wales": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New South Wales (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Queensland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Queensland (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_West_Australia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North West Australia (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Territory": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Territory (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Papua": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Papua (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Queensland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Queensland (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Solomon_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Solomon Islands (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Australia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Australia (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_West_Australia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South West Australia (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southwest_Queensland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southwest_Queensland (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tasmania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tasmania (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Victoria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Victoria (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Western_Australia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Western Australia (Australia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lower_Austria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lower Austria (Austria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tyrol": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tyrol (Austria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Upper_Austria": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Upper Austria (Austria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.6"
    }
},
"Vorarlberg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vorarlberg (Austria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Burundi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Burundi (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Coquilhatville": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Coquilhatville (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Costermansville": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Costermansville (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Elisabethville": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Elisabethville (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Leopoldville": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Leopoldville (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lusambo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lusambo (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rwanda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rwanda (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stanleyville": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stanleyville (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vlaanderen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vlaanderen (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wallonie": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wallonie (Belgium)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bhutan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bhutan (Bhutan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"La_Paz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">La Paz (Bolivian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santa_Cruz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santa Cruz (Bolivian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Borneo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Borneo (British Malaya)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Singapore": {
    value: "15",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Singapore (British Malaya)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 15<br />Infra Alum: 21"
    }
},
"Arunachal_Pradesh": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arunachal Pradesh (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Assam": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Assam (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Baluchistan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Baluchistan (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bihar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bihar (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bombay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bombay (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Burma": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Burma (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Delhi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Delhi (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"East_Bengal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">East Bengal (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gujarat": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gujarat (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hyderabad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hyderabad (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Indore": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Indore (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jabalpur": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jabalpur (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kashmir": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kashmir (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lucknow": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lucknow (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madras": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madras (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madurai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madurai (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mandalay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mandalay (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mysore": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mysore (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Kashmir": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Kashmir (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Orissa": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Orissa (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.4"
    }
},
"Peshawar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Peshawar (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Punjab": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Punjab (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Quetta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Quetta (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rajahsthan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rajahsthan (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sind": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sind (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"West_Bengal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">West Bengal (British Raj)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Burgas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Burgas (Bulgaria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Moesia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Moesia (Bulgaria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Plovdiv": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Plovdiv (Bulgaria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sofia": {
    value: "2",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sofia (Bulgaria)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 2<br />Infra Alum: 3.2"
    }
},
"Antofagasta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Antofagasta (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Araucanía": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Araucanía (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Arica_y_Tarapacá": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arica y Tarapacá (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Atacama": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Atacama (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aysén": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aysén (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.2"
    }
},
"Easter_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Easter Island (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Magallanes": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Magallanes (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santiago": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santiago (Chile)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Anhui": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Anhui (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Beijing": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Beijing (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Changde": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Changde (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Fujian": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Fujian (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ganzi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ganzi (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guizhou": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guizhou (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hebei": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hebei (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Henan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Henan (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Huangshan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Huangshan (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hubei": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hubei (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hunan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hunan (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jiangsu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jiangsu (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jiangxi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jiangxi (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Liangshan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Liangshan (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Qingdao": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Qingdao (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shandong": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shandong (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shanghai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shanghai (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sichuan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sichuan (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Xian": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Xian (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Xikang": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Xikang (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zhejiang": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zhejiang (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zunyi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zunyi (China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cundinamarca": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cundinamarca (Colombia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"La_Libertad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">La Libertad (Colombia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Meta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Meta (Colombia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shaanxi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shaanxi (Communist China)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Costa_Rica": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Costa Rica (Costa Rica)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cuba": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cuba (Cuba)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bohemia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bohemia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Carpathian_Ruthenia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Carpathian Ruthenia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Eastern_Slovakia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eastern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Eastern_Sudetenland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eastern Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Moravia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Moravia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Slovakia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sudetenland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sudetenland (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Western_Slovakia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Western Slovakia (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zaolzie": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zaolzie (Czechoslovakia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bornholm": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bornholm (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Faroe_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Faroe Islands (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Fyn": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Fyn (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Greenland": {
    value: "10",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Greenland (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 10<br />Infra Alum: 12"
    }
},
"Jylland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jylland (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sjaelland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sjaelland (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sønderjylland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sønderjylland (Denmark)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dominican_Republic": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dominican Republic (Dominican Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alberta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alberta (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"British_Columbia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cote_Nord": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cote_Nord (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Districts_of_Ontario": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Districts of Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Haida_Gwaii": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Haida Gwaii (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Manitoba": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Maurice": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Maurice (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"New_Brunswick": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New Brunswick (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nord_du_Quebec": {
    value: "4",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nord du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 4<br />Infra Alum: 4.8"
    }
},
"Northern_Manitoba": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Manitoba (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Ontario": {
    value: "9",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 9<br />Infra Alum: 14.4"
    }
},
"Northern_Saskatchewan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northwest_Territories": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northwest Territories (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nova_Scotia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nova Scotia (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nunavut": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nunavut (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 8.4"
    }
},
"Ouest_du_Quebec": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ouest du Quebec (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saguenay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saguenay (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saint_Lawrence": {
    value: "3",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saint Lawrence (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 3<br />Infra Alum: 4.8"
    }
},
"Saskatchewan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saskatchewan (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Ontario": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Ontario (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Upper_British_Columbia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Upper British Columbia (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vancouver_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vancouver Island (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yukon_Territory": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yukon Territory (Dominion of Canada)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aru_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aru Islands (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Java": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Java (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kalimantan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kalimantan (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lesser_Sunda_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lesser Sunda Islands (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sulawesi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sulawesi (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sumatra": {
    value: "28",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sumatra (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 28<br />Infra Alum: 39.2"
    }
},
"The_Moluccas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">The Moluccas (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"West_Papua": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">West Papua (Dutch East Indies)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ecuador": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ecuador (Ecuador)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Galapagos_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Galapagos Islands (Ecuador)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pastaza": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pastaza (Ecuador)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"El_Salvador": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">El Salvador (El Salvador)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Harju": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Harju (Estonia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pärnu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pärnu (Estonia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saaremaa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saaremaa (Estonia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tartu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tartu (Estonia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Virumaa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Virumaa (Estonia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bale": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bale (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Begemder": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Begemder (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gojjam": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gojjam (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hararghe": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hararghe (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Illubabor_Kaffa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Illubabor_Kaffa (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shewa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shewa (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sidamo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sidamo (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tigray": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tigray (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Welega": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Welega (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wello": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wello (Ethiopia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Åland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Åland (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Häme": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Häme (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Karjala": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Karjala (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kuopio": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kuopio (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kymi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kymi (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lappi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lappi (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mikkeli": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mikkeli (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Oulu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oulu (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Petsamo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Petsamo (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Salla": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Salla (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Turku": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Turku (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Uusimaa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Uusimaa (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vaasa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vaasa (Finland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aleppo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aleppo (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Algerian_Desert": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Algerian Desert (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Algiers": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Algiers (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alpes": {
    value: "30",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alpes (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 30<br />Infra Alum: 42"
    }
},
"Alsace_Lorraine": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alsace_Lorraine (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aquitaine": {
    value: "11",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aquitaine (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 11<br />Infra Alum: 17.6"
    }
},
"Auvergne": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Auvergne (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Borkou_Ennedi_Tibesti": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Borkou_Ennedi_Tibesti (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bamako": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bamako (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bouches_du_Rhone": {
    value: "60",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bouches_du_Rhone (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 60<br />Infra Alum: 96"
    }
},
"Bourgogne": {
    value: "11",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bourgogne (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 11<br />Infra Alum: 19.8"
    }
},
"Brittany": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Brittany (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cambodia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cambodia (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cameroon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cameroon (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Casablanca": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Casablanca (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Centre": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Centre (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Centre_Sud": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Centre_Sud (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chad (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Champagne": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Champagne (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Comoro_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Comoro Islands (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Constantine": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Constantine (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Corsica": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Corsica (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dahomey": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dahomey (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Damascus": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Damascus (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Deir_az_Zur": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Deir_az_Zur (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Equatorial_Africa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Equatorial Africa (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Franche_Comte": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Franche_Comte (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"French_Caribbean": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">French Caribbean (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"French_Guiana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">French Guiana (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"French_India": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">French India (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"French_Somaliland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">French Somaliland (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gabès": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gabès (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gabon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gabon (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gao": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gao (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guangzhouwan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guangzhouwan (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guinea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guinea (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hatay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hatay (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ile_de_France": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ile de France (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ivory_Coast": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ivory Coast (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kayes_Koulikoro": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kayes_Koulikoro (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kerguelen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kerguelen (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Languedoc": {
    value: "50",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Languedoc (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 50<br />Infra Alum: 80"
    }
},
"Laos": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Laos (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lebanon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lebanon (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Limousin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Limousin (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Loire": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Loire (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madagascar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madagascar (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Marrakech": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Marrakech (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mauritania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mauritania (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mauritanian_Desert": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mauritanian Desert (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Middle_Congo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Middle Congo (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Midi_Pyrenees": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Midi Pyrenees (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nendo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nendo (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"New_Caledonia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New Caledonia (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Niger": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Niger (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nord_Pas_de_Calais": {
    value: "8",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nord_Pas_de_Calais (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 8<br />Infra Alum: 14.4"
    }
},
"Normandy": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Normandy (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Picardy": {
    value: "4",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Picardy (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 4<br />Infra Alum: 7.2"
    }
},
"Poitou": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Poitou (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pyrénées_Atlantiques": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pyrénées_Atlantiques (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Reunion": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Reunion (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rhone": {
    value: "35",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rhone (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 35<br />Infra Alum: 63"
    }
},
"Savoy": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Savoy (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Senegal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Senegal (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Indochina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Indochina (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Sahara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Sahara (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"St_Pierre_and_Miquelon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">St Pierre and Miquelon (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tahiti": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tahiti (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tlemcen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tlemcen (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Togo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Togo (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tombouctou": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tombouctou (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tonkin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tonkin (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tunisia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tunisia (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Upper_Volta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Upper Volta (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Var": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Var (France)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Brandenburg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Brandenburg (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ermland_Masuren": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ermland_Masuren (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Franken": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Franken (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hannover": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hannover (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hessen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hessen (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hinterpommern": {
    value: "6",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hinterpommern (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 6<br />Infra Alum: 9.6"
    }
},
"Holstein": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Holstein (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Königsberg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Königsberg (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mecklenburg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mecklenburg (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Moselland": {
    value: "14",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Moselland (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 14<br />Infra Alum: 25.2"
    }
},
"Niederbayern": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Niederbayern (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Niederschlesien": {
    value: "16",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Niederschlesien (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 16<br />Infra Alum: 25.6"
    }
},
"Oberbayern": {
    value: "18",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oberbayern (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 18<br />Infra Alum: 32.4"
    }
},
"Oberschlesien": {
    value: "6",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oberschlesien (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 6<br />Infra Alum: 9.6"
    }
},
"Ostmark": {
    value: "15",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ostmark (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 15<br />Infra Alum: 24"
    }
},
"Rhineland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rhineland (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sachsen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sachsen (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Schleswig": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Schleswig (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Thüringen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Thüringen (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vorpommern": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vorpommern (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Weser_Ems": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Weser_Ems (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Westfalen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Westfalen (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Württemberg": {
    value: "6",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Württemberg (German Reich)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 6<br />Infra Alum: 10.8"
    }
},
"Guangdong": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guangdong (Guangxi Clique)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guangxi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guangxi (Guangxi Clique)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guangzhou": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guangzhou (Guangxi Clique)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hainan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hainan (Guangxi Clique)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nanning": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nanning (Guangxi Clique)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guatemala": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guatemala (Guatemala)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Haiti": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Haiti (Haiti)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Honduras": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Honduras (Honduras)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Iceland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Iceland (Iceland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Fars": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Fars (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gilan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gilan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hamadan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hamadan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Isfahan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Isfahan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kerman": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kerman (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khorasan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khorasan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khuzestan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khuzestan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kurdistan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kurdistan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Semnan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Semnan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sistan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sistan (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tehran": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tehran (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tibriz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tibriz (Iran)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Al_Hajara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Al Hajara (Iraq)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Baghdad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Baghdad (Iraq)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mosul": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mosul (Iraq)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Connaught": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Connaught (Ireland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Leinster": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Leinster (Ireland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Munster": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Munster (Ireland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Abruzzo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Abruzzo (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alto_Adige": {
    value: "14",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alto Adige (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 14<br />Infra Alum: 19.6"
    }
},
"Benghasi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Benghasi (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Calabria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Calabria (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Campania": {
    value: "10",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Campania (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 10<br />Infra Alum: 16"
    }
},
"Cyrenaica": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cyrenaica (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Derna": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Derna (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dodecanese": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dodecanese (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"El_Agheila": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">El Agheila (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Emilia_Romagna": {
    value: "9",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Emilia Romagna (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 9<br />Infra Alum: 16.2"
    }
},
"Eritrea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eritrea (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Istria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Istria (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jubaland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jubaland (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lazio": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lazio (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Libyan_Desert": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Libyan Desert (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Litorale": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Litorale (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lombardia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lombardia (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Piemonte": {
    value: "16",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Piemonte (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 16<br />Infra Alum: 28.8"
    }
},
"Puglia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Puglia (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sardegna": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sardegna (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sicilia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sicilia (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sirte": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sirte (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Somaliland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Somaliland (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Toscana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Toscana (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Trentino": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Trentino (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tripoli": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tripoli (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tripolitania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tripolitania (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Veneto": {
    value: "11",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Veneto (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 11<br />Infra Alum: 17.6"
    }
},
"Zara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zara (Italy)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Caroline_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Caroline Islands (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chugoku": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chugoku (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dalian": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dalian (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"East_Hebei": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">East Hebei (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hokkaido": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hokkaido (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hokuriku": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hokuriku (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Iwo_Jima": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Iwo Jima (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kansai": {
    value: "3",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kansai (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 3<br />Infra Alum: 5.4"
    }
},
"Kanto": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kanto (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.8"
    }
},
"Koshinetsu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Koshinetsu (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kuril_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kuril Islands (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kyushu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kyushu (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Marcus_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Marcus Island (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Marshall_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Marshall Islands (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Korea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Korea (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Okinawa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Okinawa (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Palau": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Palau (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saipan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saipan (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shikoku": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shikoku (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Korea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Korea (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Sakhalin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Sakhalin (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Taiwan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Taiwan (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tohoku": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tohoku (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tokai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tokai (Japan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aegean_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aegean Islands (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Attica": {
    value: "30",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Attica (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 30<br />Infra Alum: 42"
    }
},
"Central_Macedonia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Central Macedonia (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Crete": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Crete (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Epirus": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Epirus (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Peloponnese": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Peloponnese (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Thrace": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Thrace (Kingdom of Greece)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alföld": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alföld (Kingdom of Hungary)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Hungary": {
    value: "40",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Hungary (Kingdom of Hungary)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 40<br />Infra Alum: 64"
    }
},
"Transdanubia": {
    value: "60",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Transdanubia (Kingdom of Hungary)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 60<br />Infra Alum: 96"
    }
},
"Kurzeme": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kurzeme (Latvia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Latgale": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Latgale (Latvia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rīga": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rīga (Latvia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vidzeme": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vidzeme (Latvia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zemgale": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zemgale (Latvia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Liberia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Liberia (Liberia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aukštaitija": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aukštaitija (Lithuania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kaunas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kaunas (Lithuania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Memel": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Memel (Lithuania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sūduva": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sūduva (Lithuania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Žemaitija": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Žemaitija (Lithuania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Luxembourg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Luxembourg (Luxembourg)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Heilungkiang": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Heilungkiang (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hulunbuir": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hulunbuir (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jehol": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jehol (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kirin": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kirin (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 9.8"
    }
},
"Liaoning": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Liaoning (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Liaotung": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Liaotung (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sungkiang": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sungkiang (Manchukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chahar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chahar (Mengkukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Chahar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Chahar (Mengkukuo)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Baja_California": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Baja California (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chiapas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chiapas (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chihuahua": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chihuahua (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Coahuila": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Coahuila (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Durango": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Durango (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guerrero": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guerrero (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jalisco": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jalisco (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mexico_City": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mexico City (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Oaxaca": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oaxaca (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sonora": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sonora (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tamaulipas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tamaulipas (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Veracruz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Veracruz (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yucatan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yucatan (Mexico)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dornod": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dornod (Mongolia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gobi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gobi (Mongolia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khovd": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khovd (Mongolia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khövsgöl": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khövsgöl (Mongolia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ulaanbaatar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ulaanbaatar (Mongolia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nepal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nepal (Nepal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Brabant": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Brabant (Netherlands)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Curaçao": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Curaçao (Netherlands)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Friesland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Friesland (Netherlands)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Holland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Holland (Netherlands)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Suriname": {
    value: "60",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Suriname (Netherlands)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 60<br />Infra Alum: 84"
    }
},
"North_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Island (New Zealand)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Samoa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Samoa (New Zealand)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Island (New Zealand)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nicaragua": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nicaragua (Nicaragua)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Agder": {
    value: "5",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Agder (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 5<br />Infra Alum: 8"
    }
},
"Finnmark": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Finnmark (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Helgeland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Helgeland (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jan_Mayen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jan Mayen (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nordland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nordland (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Opplandene": {
    value: "5",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Opplandene (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 5<br />Infra Alum: 7"
    }
},
"Oslofjord": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oslofjord (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Telemark": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Telemark (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Troms": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Troms (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Trøndelag": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Trøndelag (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vestlandet": {
    value: "10",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vestlandet (Norway)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 10<br />Infra Alum: 16"
    }
},
"Oman": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oman (Oman)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Panamá": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Panamá (Panama)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Arequipa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arequipa (Peru)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lima": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lima (Peru)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Loreto": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Loreto (Peru)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tacna_Moquegua": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tacna_Moquegua (Peru)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ucayali": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ucayali (Peru)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cebu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cebu (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Central_islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Central islands (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Luzon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Luzon (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Manila": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Manila (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mindanao": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mindanao (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Palawan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Palawan (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Samar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Samar (Philippines)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Białystok": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Białystok (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Danzig": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Danzig (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gdynia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gdynia (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Katowice": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Katowice (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 11.2"
    }
},
"Kielce": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kielce (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kraków": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kraków (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lodz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lodz (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lublin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lublin (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lwów": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lwów (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nowogródek": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nowogródek (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Płock": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Płock (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Polesie": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Polesie (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Poznan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Poznan (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stanisławów": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stanisławów (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Warszawa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Warszawa (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wilejka": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wilejka (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wilno": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wilno (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wołyn": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wołyn (Poland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Azores": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Azores (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Beja": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Beja (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cape_Verde": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cape Verde (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Goa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Goa (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guarda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guarda (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lisbon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lisbon (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lourenço_Marques": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lourenço Marques (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Luanda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Luanda (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Macau": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Macau (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madeira": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madeira (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Manica_e_Sofala": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Manica e Sofala (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Angola": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Angola (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Porto": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Porto (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Portuguese_Guinea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Portuguese Guinea (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Portuguese_Timor": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Portuguese Timor (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santarém": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santarém (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sao_Tome": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sao Tome (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_West_Angola": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South West Angola (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zambesi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zambesi (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zambezia_Mosambique": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zambezia_Mosambique (Portugal)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chaco_Boreal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chaco Boreal (Republic of Paraguay)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Paraguay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Paraguay (Republic of Paraguay)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Banat": {
    value: "4",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Banat (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 4<br />Infra Alum: 6.4"
    }
},
"Bessarabia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bessarabia (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bucovina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bucovina (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Crisana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Crisana (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dobrudja": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dobrudja (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Moldova": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Moldova (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Muntenia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Muntenia (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Transylvania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Transylvania (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Oltenia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oltenia (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Bessarabia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Bessarabia (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Transylvania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Transylvania (Romania)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Al_Qassim": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Al_Qassim (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Asir_Makkah": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Asir_Makkah (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dammam": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dammam (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jawf": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jawf (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madinah": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madinah (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Najiran": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Najiran (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nejd": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nejd (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rub_al_Khali": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rub al Khali (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tabuk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tabuk (Saudi Arabia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Acre": {
    value: "6",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Acre (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 6<br />Infra Alum: 7.2"
    }
},
"Amapá": {
    value: "4",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amapá (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 4<br />Infra Alum: 4.8"
    }
},
"Amazon_impassable_1": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 1 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_2": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 2 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_3": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 3 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_4": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 4 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_5": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 5 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_6": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 6 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_7": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 7 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazon_impassable_8": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazon impassable 8 (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amazonas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amazonas (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bahia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bahia (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ceará": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ceará (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Espírito_Santo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Espírito Santo (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Goiás": {
    value: "3",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Goiás (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 3<br />Infra Alum: 3.6"
    }
},
"Guaporé": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guaporé (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Maranhão": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Maranhão (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mato_Grosso": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mato Grosso (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Minas_Gerais": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Minas Gerais (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pará": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pará (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Paraná": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Paraná (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pernambuco": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pernambuco (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Piauí": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Piauí (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Punta_Porá": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Punta Porá (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rio_Branco": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rio Branco (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rio_de_Janeiro": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rio de Janeiro (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rio_Grande_do_Norte": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rio Grande do Norte (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rio_Grande_do_Sul": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rio Grande do Sul (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Santa_Catarina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Santa Catarina (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"São_Paulo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">São Paulo (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tocantins": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tocantins (Second Brazilian Republic)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ordos": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ordos (Shanxi)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shanxi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shanxi (Shanxi)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Suiyuan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Suiyuan (Shanxi)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Isan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Isan (Siam)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lanna": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lanna (Siam)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Malay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Malay (Siam)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Siam": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Siam (Siam)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dabancheng": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dabancheng (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dzungaria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dzungaria (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kunlun_Shan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kunlun Shan (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Taklamakan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Taklamakan (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Urumqi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Urumqi (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yarkand": {
    value: "2",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yarkand (Sinkiang)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 2<br />Infra Alum: 2.8"
    }
},
"Cape": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cape (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Karas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Karas (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khomas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khomas (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kunene": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kunene (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Natal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Natal (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Otjozondjupa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Otjozondjupa (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Transvaal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Transvaal (South Africa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Abkhazia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Abkhazia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Akhtubinsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Akhtubinsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Akmolinsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Akmolinsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alma_Ata": {
    value: "10",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alma_Ata (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 10<br />Infra Alum: 14"
    }
},
"Altai_Krai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Altai Krai (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amur": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amur (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Arkhangelsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arkhangelsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Armenia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Armenia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ashkhabad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ashkhabad (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Astrakhan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Astrakhan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ayaguz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ayaguz (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Azerbaijan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Azerbaijan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Balakovo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Balakovo (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Balta_Tiraspol": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Balta_Tiraspol (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Belgorod": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Belgorod (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Birobidzhan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Birobidzhan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bobruysk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bobruysk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bodaybo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bodaybo (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bratsk": {
    value: "26",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bratsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 26<br />Infra Alum: 36.4"
    }
},
"Bryansk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bryansk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bukhara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bukhara (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Buryatia": {
    value: "4",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Buryatia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 4<br />Infra Alum: 5.6"
    }
},
"Chechnya_Ingushetia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chechnya_Ingushetia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chelyabinsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chelyabinsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cherkasy": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cherkasy (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chernigov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chernigov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chita": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chita (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chukchi_Peninsula": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chukchi Peninsula (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chukotka": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chukotka (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Chuvashia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Chuvashia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Crimea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Crimea (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dagestan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dagestan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dnipropetrovsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dnipropetrovsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dudinka": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dudinka (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Engels_Marxstadt": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Engels_Marxstadt (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Georgia_US": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Georgia_US (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gomel": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gomel (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gorky": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gorky (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guryev": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guryev (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Irkutsk": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Irkutsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 9.8"
    }
},
"Ivanovo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ivanovo (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kabardino_Balkaria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kabardino_Balkaria (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kalinin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kalinin (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kalmykia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kalmykia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kaluga": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kaluga (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kamchatka": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kamchatka (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Karagandy": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Karagandy (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Karakalpakstan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Karakalpakstan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kargopol": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kargopol (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kazan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kazan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khabarovsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khabarovsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khakassia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khakassia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kharkov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kharkov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khatangsky": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khatangsky (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kherson": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kherson (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khiva": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khiva (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khmelnytskyi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khmelnytskyi (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kyiv": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kyiv (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 12.6"
    }
},
"Kirensk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kirensk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kirov": {
    value: "14",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kirov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 14<br />Infra Alum: 19.6"
    }
},
"Kolyma": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kolyma (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kostanay": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kostanay (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kotlas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kotlas (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Krasnodar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Krasnodar (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Krasnoyarsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Krasnoyarsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kursk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kursk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kuybyshev": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kuybyshev (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kyzyl_Orda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kyzyl Orda (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Leningrad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Leningrad (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lipetsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lipetsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Luga": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Luga (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Magadan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Magadan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Magnitogorsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Magnitogorsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mari_El": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mari El (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mikhaylovka": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mikhaylovka (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Millerovo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Millerovo (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Minsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Minsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Moscow": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Moscow (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mozyr": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mozyr (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Murmansk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Murmansk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mykolaiv": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mykolaiv (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Navoi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Navoi (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nenets": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nenets (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nevel": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nevel (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nikolayevsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nikolayevsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Ossetia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Ossetia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Sakhalin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Sakhalin (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Urals": {
    value: "27",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Urals (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 27<br />Infra Alum: 32.4"
    }
},
"Novgorod": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Novgorod (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Novosibirsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Novosibirsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Odessa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Odessa (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Okhotsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Okhotsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Olonets": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Olonets (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Omsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Omsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Onega": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Onega (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Orel": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Orel (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Orenburg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Orenburg (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Oyrot_Region": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oyrot Region (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pamir": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pamir (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pavlodar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pavlodar (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pechora": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pechora (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Penza": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Penza (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Perm": {
    value: "6",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Perm (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 6<br />Infra Alum: 9.6"
    }
},
"Poltava": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Poltava (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pskov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pskov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Roslavl": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Roslavl (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rostov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rostov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ryazan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ryazan (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rzhev": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rzhev (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Salekhard": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Salekhard (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saratov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saratov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Semipalatinsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Semipalatinsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Smolensk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Smolensk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sochi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sochi (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stalinabad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stalinabad (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stalingrad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stalingrad (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stalino": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stalino (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Stavropol": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Stavropol (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sumy": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sumy (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Surgut": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Surgut (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sverdlovsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sverdlovsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Syktyvkar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Syktyvkar (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tambov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tambov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tashauz": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tashauz (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tashkent": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tashkent (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tikhvin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tikhvin (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tobolsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tobolsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tomsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tomsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tula": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tula (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tyumen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tyumen (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Udachny": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Udachny (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Udmurtia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Udmurtia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ufa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ufa (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ulyanovsky": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ulyanovsky (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Uralsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Uralsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ust_Urt": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ust Urt (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Verkhoyansk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Verkhoyansk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vinnytsia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vinnytsia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vitebsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vitebsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vladivostok": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vladivostok (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Volgodonsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Volgodonsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Volkhov": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Volkhov (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vologda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vologda (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Voronezh": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Voronezh (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Voroshilovgrad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Voroshilovgrad (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yakutsk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yakutsk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yamalia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yamalia (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yaroslavl": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yaroslavl (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yeniseisk": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yeniseisk (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zaporozhe": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zaporozhe (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zhytomyr": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zhytomyr (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zlatoust": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zlatoust (Soviet Union)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Asturias": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Asturias (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Burgos": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Burgos (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cataluña": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cataluña (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ciudad_Real": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ciudad Real (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Córdoba": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Córdoba (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Eastern_Aragón": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eastern Aragón (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Equatorial_Guinea": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Equatorial Guinea (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Extremadura": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Extremadura (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Galicia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Galicia (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Granada": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Granada (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guadalajara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guadalajara (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Islas_Baleares": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Islas Baleares (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Islas_Canarias": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Islas Canarias (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"León": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">León (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Madrid": {
    value: "1",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Madrid (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 1<br />Infra Alum: 1.6"
    }
},
"Murcia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Murcia (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Navarra": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Navarra (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"País_Vasco": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">País Vasco (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rio_de_Oro": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rio de Oro (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Salamanca": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Salamanca (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sevilla": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sevilla (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sidi_Ifni": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sidi Ifni (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Spanish_Africa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Spanish Africa (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Valencia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Valencia (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Valladolid": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Valladolid (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Western_Aragón": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Western Aragón (Spain)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Afar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Afar (Sultanate of Aussa)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bohuslän": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bohuslän (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dalarna": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dalarna (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gävleborg": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gävleborg (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gotland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gotland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jämtland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jämtland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Norrbotten": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Norrbotten (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Östergötland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Östergötland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Skåne": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Skåne (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Småland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Småland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Södermalm": {
    value: "2",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Södermalm (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 2<br />Infra Alum: 3.6"
    }
},
"Värmland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Värmland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Västerbotten": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Västerbotten (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Västergötland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Västergötland (Sweden)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Eastern_Swiss_Alps": {
    value: "15",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eastern Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 15<br />Infra Alum: 18"
    }
},
"Jura_Mountains": {
    value: "18",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jura Mountains (Switzerland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 18<br />Infra Alum: 28.8"
    }
},
"Swiss_Plateau": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Swiss Plateau (Switzerland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ticino": {
    value: "15",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ticino (Switzerland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 15<br />Infra Alum: 21"
    }
},
"Western_Swiss_Alps": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Western Swiss Alps (Switzerland)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tannu_Tuva": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tannu Tuva (Tannu Tuva)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nagqu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nagqu (Tibet)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ngari": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ngari (Tibet)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shigatse": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shigatse (Tibet)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Afyon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Afyon (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Amasya": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Amasya (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ankara": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ankara (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Antalya": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Antalya (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bursa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bursa (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Diyarbakır": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Diyarbakır (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Edirne": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Edirne (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hakkari": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hakkari (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Istanbul": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Istanbul (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Izmir": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Izmir (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Izmit": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Izmit (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kastamonu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kastamonu (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kayseri": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kayseri (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Konya": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Konya (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Malatya": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Malatya (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mersin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mersin (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Samsun": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Samsun (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sivas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sivas (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Trabzon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Trabzon (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tunceli": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tunceli (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Van": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Van (Turkey)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aberdeenshire": {
    value: "3",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aberdeenshire (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 3<br />Infra Alum: 4.8"
    }
},
"Abu_Dhabi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Abu Dhabi (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aden": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aden (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alexandria": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alexandria (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Andaman": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Andaman (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ascension": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ascension (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Aswan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Aswan (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bahr_al_Ghazal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bahr al Ghazal (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bechuanaland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bechuanaland (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Benue": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Benue (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bermuda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bermuda (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Blue_Nile": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Blue Nile (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Borno": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Borno (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"British_Guyana": {
    value: "64",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">British Guyana (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 64<br />Infra Alum: 76.8"
    }
},
"British_Honduras": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">British Honduras (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"British_Somaliland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">British Somaliland (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cairo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cairo (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ceylon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ceylon (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Christmas_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Christmas Island (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cocos_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cocos Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cumbria": {
    value: "5",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cumbria (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 5<br />Infra Alum: 8"
    }
},
"Cyprus": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cyprus (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Diego_Garcia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Diego Garcia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"East_Anglia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">East Anglia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"East_Midlands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">East Midlands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Eastern_Desert": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Eastern Desert (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ellice_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ellice Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Falkland_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Falkland Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Fiji": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Fiji (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gambia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gambia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Garissa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Garissa (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ghana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ghana (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gibraltar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gibraltar (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gilbert_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gilbert Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gloucestershire": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gloucestershire (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Greater_London_Area": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Greater London Area (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hong_Kong": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hong Kong (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Isle_of_Man": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Isle of Man (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jamaica": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jamaica (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jordan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jordan (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kassala": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kassala (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Khartoum": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Khartoum (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kurdufan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kurdufan (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kuwait": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kuwait (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Labrador": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Labrador (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lagos": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lagos (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lanark": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lanark (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lancashire": {
    value: "2",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lancashire (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 2<br />Infra Alum: 3.6"
    }
},
"Leeward_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Leeward Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Lothian": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Lothian (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Malawi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Malawi (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Maldives": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Maldives (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Malta": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Malta (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Matrouh": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Matrouh (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mauritius": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mauritius (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mombasa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mombasa (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nairobi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nairobi (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nauru": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nauru (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Newfoundland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Newfoundland (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Darfur": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Darfur (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Bahamas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Northern_Ireland": {
    value: "2",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northern Ireland (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 2<br />Infra Alum: 3.2"
    }
},
"Northumberland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Northumberland (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nyanza_Rift_Valley": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nyanza_Rift_Valley (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Palestine": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Palestine (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pitcairn_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pitcairn Island (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Qatar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Qatar (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Rhodesia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Rhodesia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Saint_Helena": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Saint Helena (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Scottish_Highlands": {
    value: "9",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Scottish Highlands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 9<br />Infra Alum: 12.6"
    }
},
"Seychelles": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Seychelles (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Shetland_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Shetland Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sierra_Leone": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sierra Leone (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sinai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sinai (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Socotra": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Socotra (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sokoto": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sokoto (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Darfur": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Darfur (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Georgia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Georgia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_West_England": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South_West England (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Bahamas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Bahamas (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Suez": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Suez (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Sussex": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Sussex (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tanganyika": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tanganyika (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Trinidad": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Trinidad (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Uganda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Uganda (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Upper_Nile": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Upper Nile (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wales": {
    value: "3",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wales (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 3<br />Infra Alum: 4.8"
    }
},
"West_Midlands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">West Midlands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Western_Desert": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Western Desert (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Windward_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Windward Islands (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yorkshire": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yorkshire (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zambia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zambia (United Kingdom)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alabama": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alabama (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Alaska": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Alaska (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Arizona": {
    value: "8",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arizona (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 8<br />Infra Alum: 11.2"
    }
},
"Arkansas": {
    value: "14",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Arkansas (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 14<br />Infra Alum: 19.6"
    }
},
"Attu_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Attu Island (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"California": {
    value: "8",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">California (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 8<br />Infra Alum: 12.8"
    }
},
"Colorado": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Colorado (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Florida": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Florida (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Georgia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Georgia (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Guam": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Guam (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Hawaii": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Hawaii (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Idaho": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Idaho (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Illinois": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Illinois (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Indiana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Indiana (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Iowa": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Iowa (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Johnston_Atoll": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Johnston Atoll (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kansas": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kansas (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Kentucky": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kentucky (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Line_Islands": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Line Islands (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Louisiana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Louisiana (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Maryland": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Maryland (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Michigan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Michigan (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Midway_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Midway Island (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Minnesota": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Minnesota (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Mississippi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Mississippi (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Missouri": {
    value: "12",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Missouri (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 12<br />Infra Alum: 19.2"
    }
},
"Montana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Montana (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nebraska": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nebraska (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Nevada": {
    value: "25",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Nevada (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 25<br />Infra Alum: 35"
    }
},
"New_England": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New England (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"New_Jersey": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New Jersey (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"New_Mexico": {
    value: "30",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New Mexico (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 30<br />Infra Alum: 42"
    }
},
"New_York": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">New York (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Carolina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Carolina (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Dakota": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Dakota (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ohio": {
    value: "9",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ohio (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 9<br />Infra Alum: 16.2"
    }
},
"Oklahoma": {
    value: "20",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oklahoma (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 20<br />Infra Alum: 28"
    }
},
"Oregon": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Oregon (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Panamá_Canal": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Panamá Canal (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Pennsylvania": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Pennsylvania (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Phoenix_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Phoenix Island (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Puerto_Rico": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Puerto Rico (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Carolina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Carolina (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"South_Dakota": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">South Dakota (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Tennessee": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Tennessee (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Texas": {
    value: "50",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Texas (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 50<br />Infra Alum: 80"
    }
},
"Utah": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Utah (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Virginia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Virginia (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wake_Island": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wake Island (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Washington": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Washington (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"West_Virginia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">West Virginia (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wisconsin": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wisconsin (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Wyoming": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Wyoming (United States)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Cerro_Largo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Cerro Largo (Uruguay)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Montevideo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Montevideo (Uruguay)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Paysandú": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Paysandú (Uruguay)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bolivar": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bolivar (Venezuela)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Miranda": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Miranda (Venezuela)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Zulia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Zulia (Venezuela)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gannan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gannan (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Gansu": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Gansu (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Golog": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Golog (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Haixi": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Haixi (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Jiuquan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Jiuquan (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ningxia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ningxia (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Qinghai": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Qinghai (Xibei San Ma)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yemen": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yemen (Yemen)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Bosnia": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Bosnia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 11.2"
    }
},
"Croatia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Croatia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dalmatia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dalmatia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Herzegovina": {
    value: "7",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Herzegovina (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 7<br />Infra Alum: 9.8"
    }
},
"Kosovo": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Kosovo (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Ljubljana": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Ljubljana (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Macedonia": {
    value: "16",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Macedonia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 16<br />Infra Alum: 22.4"
    }
},
"Montenegro": {
    value: "70",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Montenegro (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 70<br />Infra Alum: 98"
    }
},
"Morava": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Morava (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"North_Slovenia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">North Slovenia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Serbia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Serbia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Southern_Serbia": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Southern Serbia (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Vojvodina": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Vojvodina (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"West_Banat": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">West Banat (Yugoslavia)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Dali": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Dali (Yunnan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
"Yunnan": {
    value: "0",
    tooltip: {
        content: "<span style=\"font-weight:bold;\">Yunnan (Yunnan)</span><br /><img src=\"./resources/Aluminum.png\" width = \"20\">Base Alum: 0<br />Infra Alum: 0"
    }
},
		}
	});

});