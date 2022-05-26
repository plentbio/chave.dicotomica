// Loads file with JSON data
const data = JSON.parse(key);

// Creates empty list and index variables
var route = [1];
var crawler = 0;

// Button functions
function buttonA() {

    // Checks if pathA is a path or a result. If it is a result, show result information; if it is a path, continue iterating.
    if (typeof data[crawler]["pathA"] != "number") {

        // Show box
        document.getElementById("boxA").style.display = "block";

        // Updates HTML values with title, wikipedia link and image
        document.getElementById("resultA").innerHTML = data[crawler]["pathA"];
        document.getElementById("linkA").innerHTML = "Wikipedia";
        document.getElementById("imgA").src = results[data[crawler]["pathA"]]["img"];

    } else {

        // Update crawler
        crawler = data[crawler]["index"];
    
        // Add route number
        route.push(' ' + data[crawler]["index"]);
    
        // Update HTML values
        document.getElementById("line").innerHTML = data[crawler]["index"];
        document.getElementById("propA").innerHTML = data[crawler]["propA"];
        document.getElementById("pathA").innerHTML = data[crawler]["pathA"];
        document.getElementById("propB").innerHTML = data[crawler]["propB"];
        document.getElementById("pathB").innerHTML = data[crawler]["pathB"];
        document.getElementById("route").innerHTML = route;

    }
};

function showBox() {
    document.getElementById("boxA").style.display = "show";
}
