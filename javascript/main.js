// Live date - on Contact page
let myDate = setInterval (myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("current-date").innerHTML = d.toLocaleString();
}
