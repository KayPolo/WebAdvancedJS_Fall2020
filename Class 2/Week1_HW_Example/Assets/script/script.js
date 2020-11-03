let data = [

    {
        "question": "Pick a Color!",
        "answerA": "yellow",
        "answerB": "teal"
    },

    {
        "question": "One More Time!",
        "answerA": "purple",
        "answerB": "salmon"
    }
];

console.log(data);


document.addEventListener("DOMContentLoaded", function() {

    loadQuestions();


});



function loadQuestions() {

    let questionNumber = 0;

    let questions = document.getElementsByClassName("questions");


    for (let i = 0; i < data.length; i++) {


        // In this case we're creating the image tag with and ID and class

        let newQuestion = document.createElement("span");
        newQuestion.className = "title";
        newQuestion.innerText = data[i].question;

        let optionA = document.createElement("button");
        optionA.className = "btn";
        optionA.id = data[i].answerA;
        optionA.innerText = data[i].answerA;

        let optionB = document.createElement("button");
        optionB.className = "btn";
        optionB.id = data[i].answerB;
        optionB.innerText = data[i].answerB;

        questions[questionNumber].appendChild(newQuestion);
        questions[questionNumber].appendChild(optionA);
        questions[questionNumber].appendChild(optionB);
        questionNumber++;




    }


    //End of the for loop

    let answerYellow = document.getElementById("yellow");

    answerYellow.addEventListener("click", function() {
        console.log("YELLOW");

        let background = document.getElementById("container");
        background.style.backgroundColor = "gold";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "OH YEA, I LOVE YELLOW!";



    });

    let answerTeal = document.getElementById("teal");

    answerTeal.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "teal";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "block";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "none";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "I GUESS THAT YOU PREFER TEAL";

    });


    let answerPurple = document.getElementById("purple");

    answerPurple.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "purple";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "YEA, PURPLE IS NICE";

    });

    let answerSalmon = document.getElementById("salmon");

    answerSalmon.addEventListener("click", function() {

        let background = document.getElementById("container");
        background.style.backgroundColor = "salmon";

        let questionTwo = document.getElementById("questionTwo");
        questionTwo.style.display = "none";

        let questionOne = document.getElementById("questionOne");
        questionOne.style.display = "block";

        let pickColor = document.getElementById("pickColor");
        pickColor.style.display = "block";
        pickColor.innerText = "SALMON? REALY?";

    });

}