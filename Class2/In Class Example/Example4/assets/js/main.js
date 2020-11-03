console.log("JS is connected!")

mySize = () => {
    document.getElementById("widthheight").innerHTML = ("W:" + window.innerWidth + "______ H:" + window.innerHeight);
}


window.onload = mySize;
window.onresize = mySize;