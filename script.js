var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var button = document.querySelector("button");
var container2 = document.querySelector(".container2");
var copyMessage = document.getElementById("copyMessage");

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";";

    container2.style.display = "block";
}

function copyToClipboard() {
    var text = document.getElementById("tocopy").innerHTML;
    navigator.clipboard.writeText(text);
    copyMessage.style.display = "inline";
    setTimeout(function() {
        copyMessage.style.display = "none";
    }, 2000);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", copyToClipboard);