/*------------------------------------------------*/
// 	Handlebars Intro
//	http://handlebarsjs.com/
//	Learn more: http://javascriptissexy.com/handlebars-js-tutorial-learn-everything-about-handlebars-js-javascript-templating/
/*------------------------------------------------*/


/*------------------------------------------------

1. Simple Handlebar Example

--------------------------------------------------*/

// let data = {
//     "title": "Title",
//     "description": "Oh this is great!"
// }


// let source = $("#my-template").html();

// let template = Handlebars.compile(source);

// let results = template(data);

// $('body').append(results);






/*------------------------------------------------

2. Handlebars Practical Example

--------------------------------------------------*/

$(() => {

    loadData();

})



loadData = () => {

    $.getJSON("data.json", (data) => {

        console.log("JSON is loaded!")

        console.log(data)

        getWebsites(data);

    })

}

getWebsites = (temp) => {

    let source = $("#my-template").html();

    let template = Handlebars.compile(source);

    let results = template(temp);

    $('.websites-list').append(results);

}