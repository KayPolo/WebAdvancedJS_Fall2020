console.log("JS is connected!")

let myDevice = window.navigator.userAgent;
document.getElementById("device").innerHTML = myDevice;
console.log(myDevice);

// http://stackoverflow.com/questions/1789945/how-can-i-check-if-one-string-contains-another-substring
// http://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-using-jquery

// indexOf function is used for finding the occurance of a string within a string and returning the index of that string.
if (myDevice.indexOf("Mobile") > -1) {
    window.location.replace("assets/html/mobile.html");
};

if (myDevice.indexOf("Macintosh") > -1) {
    window.location.replace("assets/html/desktop.html");
};