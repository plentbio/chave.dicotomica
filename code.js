// Loads file with JSON data
const data = JSON.parse(key);

// Creates empty list and index variables
var route = [];
var crawler = 0;

function updateHTML() {
    // Updates the HTML ids to show new values, based on the current line. This is an auxiliary function called by other functions.
    document.getElementById("line").innerHTML = data[crawler]["index"];
    document.getElementById("propA").innerHTML = data[crawler]["propA"];
    document.getElementById("pathA").innerHTML = data[crawler]["pathA"];
    document.getElementById("propB").innerHTML = data[crawler]["propB"];
    document.getElementById("pathB").innerHTML = data[crawler]["pathB"];
    document.getElementById("route").innerHTML = route;
};

function button(id) {
    // When pressing a button, changes the crawler to the proper line, adds that line to the route and updates HTML to show nwe values. If a result is reached, shows that group's info.

    // Checks if the button is A or B. Then proceeds with modifications.
    if (id == "pathA") {
        // Checks if pathA is a path or a result. If it is a result, show result information; if it is a path, continue iterating.
        if (typeof data[crawler]["pathA"] != "number") {

            // Show result box
            document.getElementById("boxA").style.display = "block";

            // Updates HTML values with title, wikipedia link and image
            document.getElementById("resultA").innerHTML = data[crawler]["pathA"];
            document.getElementById("linkA").innerHTML = "Wikipedia";
            document.getElementById("linkA").href= "https://pt.wikipedia.org/wiki/" + data[crawler]["pathA"];
            imageQuery(data[crawler]["pathA"], "imgA");
            

        } else {

            // Update crawler to be pathA, going to the next line
            crawler = data[crawler]["pathA"];
    
            // Add number to route list
            route.push(' ' + data[crawler]["index"]);
    
            // Update HTML values
            updateHTML();
        };
    };

    if (id == "pathB") {
        if (typeof data[crawler]["pathB"] != "number") {

            // Show result box
            document.getElementById("boxB").style.display = "block";

            // Updates HTML values with title, wikipedia link and image
            document.getElementById("resultB").innerHTML = data[crawler]["pathB"];
            document.getElementById("linkB").innerHTML = "Wikipedia";
            document.getElementById("linkB").href= "https://pt.wikipedia.org/wiki/" + data[crawler]["pathB"];
            imageQuery(data[crawler]["pathB"], "imgB");


        } else {

            // Update crawler to be pathB, going to the next line
            crawler = data[crawler]["pathB"];
    
            // Add number to route list
            route.push(' ' + data[crawler]["index"]);
    
            // Update HTML values
            updateHTML();
        };
    };
};
    
function buttonKey(id) {
    // Changes -data- to the desired key, then hides selection buttons
    
    // Check keys for each case
    switch (id) {
        case "keyA":
            document.getElementById("currentKey").innerHTML = "Chave A";
            break;

        case "keyB":
            document.getElementById("currentKey").innerHTML = "Chave B";

        case "keyC":
            document.getElementById("currentKey").innerHTML = "Chave C";

        case "keyD":
            document.getElementById("currentKey").innerHTML = "Chave D";

        default:
            break;
    }

    // Hides all key buttons
    var keys = document.getElementsByClassName("buttonKeys");
    var i;
    for (i = 0; i < keys.length; i++) {
        keys[i].style.display = 'none';
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

var query = "Zamiaceae";

async function imageQuery(query, imgX){
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
        document.getElementById(imgX).src = image_url;
    };
};
