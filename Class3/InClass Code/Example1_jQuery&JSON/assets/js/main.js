/*------------------------------------

	1. Comparing Vanilla JS with jQuery
	
---------------------------------------*/

// let name = "Karla";
// let lastName = "Polo";


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("This is Vanilla JS");
// });

// $(document).ready(() => {
//     console.log("This is jQuery");
// });



// $(() => {
//     console.log("Another Way!!!");


//     //document.getElementById("container").innerHTML = name + " " + lastName;

//     //$("#container").append(name + " " + lastName);


//     // document.getElementById("my-button").addEventListener("click", () => {
//     //     document.getElementById("container").innerHTML = "I just clicked!!"
//     // })



//     $("#my-button").click(() => {
//         $("#container").append("THIS IS SOOOOO MUCH BETTER")
//     });

// })


/*--------------------------------------------------

	2. Understanding how to build an object 
	and call information inside the object.

--------------------------------------------------*/

// let person = {
//     "name": "Karla",
//     "lastName": "Polo",
//     "age": "31"
// }

// console.log(person);

// $("#container").append(person.name + " " + person.lastName);






/*--------------------------------------------------

	3. Creating a data set that contains an array of objects

--------------------------------------------------*/

// let myData = {
//     "people": [{
//             "name": "Ann",
//             "lastName": "Paterson",
//             "age": "45"
//         },
//         {
//             "name": "Frank",
//             "lastName": "Miller",
//             "age": "74"
//         },
//         {
//             "name": "Patricia",
//             "lastName": "Larson",
//             "age": "13"
//         }
//     ]
// }


//$("#container").append(myData.people[0].name + " " + myData.people[2].lastName)

// console.log(myData)

// $("#container").append(myData)



/*--------------------------------------------------

	4. Stringify the JSON Data and converting it back to JSON format

--------------------------------------------------*/


// let stringpeople = JSON.stringify(myData);
// console.log(stringpeople);

// $("#container").append(stringpeople);


// let parse = JSON.parse(stringpeople);
// console.log(parse);



/*--------------------------------------------------

	5. Understanding for loops and pulling data from a json file.

--------------------------------------------------*/

// $.getJSON("../data.json", function(data) {

//     console.log(data.people);

// });

$.getJSON("data.json", (data) => {

    console.log(data.people);

    let myUser = data.people;

    for (let i = 0; i < myUser.length; i++) {
        console.log(myUser[i].name + " " + myUser[i].lastName);
    }

    for (let i in myUser) {
        console.log(myUser[i].name + " " + myUser[i].lastName);

        $("#container").append(myUser[i].name + "<br>");
    }

});