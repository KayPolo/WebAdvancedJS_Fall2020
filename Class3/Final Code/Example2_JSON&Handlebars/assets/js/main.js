/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/


/*------------------------------------------------

1. Simple Handlebar Example

--------------------------------------------------*/

// let data = {
//     title: "My First Post",
//     description: "Why is this so easy?!"
// }


// var source = $('#myfirst-template').html();

// var templete = Handlebars.compile(source);

// var results = templete(data);

// $('body').append(results);




/*------------------------------------------------

2. Handlebars Practical Example

--------------------------------------------------*/

// window.addEventListener('DOMContentLoaded', function () {
// 	loadData();
// });

// $(document).ready(() => {
//     loadData();
// });

$(() => {
    loadData();
    console.log("JS Connected")
});


function loadData() {
    $.getJSON("../data.json", (data) => {


        for (let i in data) {
            console.log(data[i]);
        }

        generateWebsites(data);

    });

}


generateWebsites = (temporary) => {

    let source = $("#websites-template").html();
    let template = Handlebars.compile(source);
    let result = template(temporary);
    let list = $('.websites-list');
    list.append(result);

}