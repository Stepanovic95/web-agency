var today = new Date();
var y = today.getFullYear();
var mon = today.getMonth() + 1;
var d = today.getDate();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

document.getElementById("current-date").innerText = d + "/" + mon + "/" + y + " " + h + ":" + m + ":" + s;


