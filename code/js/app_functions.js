// Loads file with JSON data
const data = JSON.parse(key);

// Creates empty list and index variables
var route = [];
var crawler = 0;

function updateHTML() {
    // Updates the HTML ids to show new values, based on the current line. This is an auxiliary function called by other functions.
    document.getElementById("line").innerHTML = `Linha ${data[crawler]["index"]}`;
    document.getElementById("propA").innerHTML = data[crawler]["propA"];
    document.getElementById("pathA").innerHTML = data[crawler]["pathA"];
    document.getElementById("propB").innerHTML = data[crawler]["propB"];
    document.getElementById("pathB").innerHTML = data[crawler]["pathB"];
    document.getElementById("route").innerHTML = `Caminho até aqui: ${route}`;
};

function button(option) {
    // When pressing a button, changes the crawler to the proper line, adds that line to the route and updates HTML to show nwe values. If a result is reached, shows that group's info.
    // Checks if pathA is a path or a result. If it is a result, show result information; if it is a path, continue iterating.
    if (typeof data[crawler][`path${option}`] != "number") {
    
        // Show result box
        document.getElementById(`resultBox`).style.display = "block";
        
        // Updates HTML values with title, wikipedia link and image
        document.getElementById(`result`).innerHTML = data[crawler][`path${option}`];
        document.getElementById(`link`).href= "https://pt.wikipedia.org/wiki/" + data[crawler][`path${option}`];
        imageQuery(data[crawler][`path${option}`], "resultImg");
        
    } else {
        // Update crawler to be pathA, going to the next line
        crawler = data[crawler][`path${option}`];
        
        // Add number to route list
        route.push(' ' + data[crawler]["index"]);
        
        // Update HTML values
        updateHTML();
    };
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

    document.getElementById("boxA").style.display = "none";
    document.getElementById("boxB").style.display = "none";

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

    console.log(url);
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    
    var pages = json.query.pages;
    for (var page in pages) {
        image_url = pages[page].thumbnail.source;
        console.log(image_url);
        document.getElementById("resultImg").src = image_url;
    };
};
