console.log("JS is connected!");

let myDevice = window.navigator.userAgent;

console.log(myDevice);

if (myDevice.indexOf("Macintosh") > -1) {
    window.location.replace("assets/html/desktop.html");
}

if (myDevice.indexOf("iPhone") > -1) {
    window.location.replace("assets/html/mobile.html");
};