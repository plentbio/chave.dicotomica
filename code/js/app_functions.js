// Loads file with JSON data
var data = JSON.parse(chave1);

// Creates empty list and index variables
var chaves = {
    "Chave1": chave1,
    "Chave A": chaveA,
    "Chave B": chaveB
}

var route = [];
var crawler = 0;

function updateHTML() {
    // Updates the HTML ids to show new values, based on the current line. This is an auxiliary function called by other functions.
    document.getElementById("line").innerHTML = `Linha ${data[crawler]["index"]}`;
    document.getElementById("propA").innerHTML = data[crawler]["propA"];
    document.getElementById("pathA").innerHTML = data[crawler]["pathA"];
    document.getElementById("propB").innerHTML = data[crawler]["propB"];
    document.getElementById("pathB").innerHTML = data[crawler]["pathB"];
    document.getElementById("route").innerHTML = `(${route})`;
};


function beginning() {
    document.getElementById("start").style.display = "inline";

    document.getElementById("back").style.display = "none";
    var boxes = document.getElementsByClassName("propBox");
    for (var i = 0; i < boxes.length; i += 1) {
        boxes[i].style.display = "none";        
    }
    document.getElementById("resultBox").style.display = "none";

    route = [];
    crawler = 0;

    document.getElementById("route").innerHTML = "";
    document.getElementById("line").innerHTML = "Linha e Caminho";
};


function start() {
    var boxes = document.getElementsByClassName("propBox");
    for (var i = 0; i < boxes.length; i += 1) {
        boxes[i].style.display = "block";
    }
    document.getElementById("start").style.display = "none";
    document.getElementById("back").style.display = "inline";

    crawler = 1;
    route.push("1");
    
    updateHTML();
};

function changeKey(keyString) {
    data = JSON.parse(chaves[keyString]);
    beginning();   
};

function changeSelect(target) {
    document.getElementById("keys").value = target;
    changeKey(target);
};

function button(option) {
    // When pressing a button, changes the crawler to the proper line, adds that line to the route and updates HTML to show nwe values. If a result is reached, shows that group's info.
    // Checks if pathA is a path or a result. If it is a result, show result information; if it is a path, continue iterating.
    document.getElementById("resultBox").style.display = "none";

    
    if (data[crawler][`path${option}`] in chaves) {

        changeSelect(data[crawler][`path${option}`]);

    } else if (typeof data[crawler][`path${option}`] != "number") {

        result(option);

    } else {
        // Update crawler to be pathA, going to the next line
        crawler = data[crawler][`path${option}`];
        
        // Add number to route list
        route.push(' ' + data[crawler]["index"]);
        
        // Update HTML values
        updateHTML();
    };
};

function result(option) {
    // Show result box
    document.getElementById(`resultBox`).style.display = "block";
        
    // Updates HTML values with title, wikipedia link and image
    document.getElementById(`result`).innerHTML = data[crawler][`path${option}`];
    document.getElementById(`link`).href= "https://pt.wikipedia.org/wiki/" + data[crawler][`path${option}`];
    imageQuery(data[crawler][`path${option}`], "resultImg");
};
    
function back() {
    // Goes back one step, updating crawler and route.

    // Checks if crawler is 0 or 1. I could not do it properly using OR operator, so I did this mess :)
    if (crawler == 0 ) {
        
    } else if (crawler == 1){
    
    } else {
        crawler = Number(route[route.length - 2]);
        route.pop();
        updateHTML();  
    };

    document.getElementById("resultBox").style.display = "none";

};

async function imageQuery(query){
    var url_list = [];

    var url = "https://pt.wikipedia.org/w/api.php"; 

    var params = {
        action: "query",
        prop: "pageimages&redirects",
        titles: query,
        format: "json",
        pithumbsize: 400
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    let response = await fetch(url);
    let json = await response.json();
   
    var pages = json.query.pages;
    for (var page in pages) {
        console.log(pages[page].thumbnail)
        if (typeof(pages[page].thumbnail) == "undefined") {            
            image_url = "/images/no-image.png";
        } else {
            image_url = pages[page].thumbnail.source;
        }

        document.getElementById("resultImg").src = image_url;
    };
};