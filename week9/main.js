function assign() {
    location.assign("https://www.w3schools.com");
}

function reload() {
    location.reload();
}

function replace() {
    location.replace("https://www.w3schools.com");
}

function hashFunction() {
    location.hash = "hashexample";
    var x = "The anchor part is now: " + location.hash;
}

function hostFunction() {
    var x = location.host;
    document.getElementById("host").innerHTML = x;
   
}

function linkProperty() {
    var x = location.href;
    document.getElementById("link").innerHTML = x;
}

function hostName() {
    var x = location.hostname;
    document.getElementById("hostname").innerHTML = x;
}

function originFunction() {
    var x = location.origin;
    document.getElementById("origin").innerHTML = x;
}

function portFunction() {
    var x = location.port;
    document.getElementById("port").innerHTML = x;
}

function protocolFunction() {
    var x = location.protocol;
    document.getElementById("protocol").innerHTML = x;
}

function timeoutFunction() {
    alert('Thanks for being patient!');
}

setInterval(myTimer, 1000);
function myTimer() {
    const d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleDateTimeString();
}