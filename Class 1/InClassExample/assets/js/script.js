// console.log("This is my JS File" + " " + 32467896);

// // var data = "This is a string"; 
// let data = "This is the new syntax";

// // function oldFunction() {
// //     console.log("This is the old syntax");
// // }


// myFunction = () => {

//     let newVar = "Hello";
//     console.log(data);
//     console.log(newVar);

// }

// myOtherFunction = () => {

//     let newVar = "New Information";
//     console.log(data);
//     console.log(newVar);

// }



// myFunction();
// // oldFunction();
let columns = document.getElementsByClassName("column");

console.log(columns.length);

let imageNumber = 0;

let imageSwitch = 0;


let images = [
    "img01.jpg",
    "img02.jpg",
    "img03.jpg",
    "img04.jpg",
    "img05.jpg",
    "img06.jpg",
    "img07.jpg",
    "img08.jpg",
    "img09.jpg",
    "img10.jpg",
    "img11.jpg",
    "img12.jpg",
    "img13.jpg",
    "img14.jpg",
    "img15.jpg"
]

for (let i = 0; i < images.length; i++) {

    let newImg = document.createElement("img");
    newImg.className = "images";
    newImg.id = i;
    newImg.src = "./assets/images/" + images[i];

    columns[imageNumber].appendChild(newImg);
    imageNumber++;

    if (imageNumber > columns.length - 1) {
        imageNumber = 0;
    }

    newImg.addEventListener("click", (tempvalue) => {
        popUp(tempvalue.target.id);

        imageSwitch = tempvalue.target.id;

    })

}



popUp = (imgCount) => {
    imageSwitch = imgCount;

    let popup = document.getElementById("popup");
    let img = document.getElementById("pic");

    popup.style.zIndex = 1;
    popup.style.display = "block";

    img.src = "./assets/images/" + images[imgCount];
}