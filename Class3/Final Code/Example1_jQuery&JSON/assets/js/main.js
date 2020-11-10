/*------------------------------------

	1. Comparing Vanilla JS with jQuery
	
---------------------------------------*/

// let firstName = "Karla";
// let lastName = "Polo";


// /* Add Event Listener (DOMContentLoaded)
//     	Vanilla JS vs jQuery
// */


// document.addEventListener("DOMContentLoaded", () => {
//     console.log("This is Vanilla JS")
// });

// $(document).ready(() => {});

// $(() => {
//     console.log("I'm using jQuery!!!")

//     /* Adding Content to the DOM
// 		Vanilla JS vs jQuery */

//     document.getElementById("container").innerHTML = firstName + " " + lastName;
//     $("#container").append(firstName + " " + lastName);


//     /* Add Event Listener (CLICK)
//     	Vanilla JS vs jQuery
//     */

//     // document.getElementById("my-button").addEventListener("click", () => {
//     //     document.getElementById("container").innerHTML = "And I just Clicked!"
//     // });

//     // $("#my-button").click(() => {
//     //     $("#container").append("I Clicked jQuery!")
//     // })



// });





/*--------------------------------------------------

	2. Understanding how to build an object 
	and call information inside the object.

--------------------------------------------------*/


// let myData = { "firstName": "Karla", "lastName": "Polo", "age": "30" };

// console.log(myData);
// $("#container").append(myData.firstName + " " + myData.lastName + " is " + myData.age + " years ");






/*--------------------------------------------------

	3. Creating a data set that contains an array of objects

--------------------------------------------------*/

// let myData = {
//     "people": [{ "firstName": "Karla", "lastName": "Polo", "age": "30" },
//         { "firstName": "Ann", "lastName": "Marie", "age": "62" },
//         { "firstName": "Chris", "lastName": "Palmer", "age": "25" }
//     ]
// };

// console.log(myData);

// $("#container").append(myData.people[0].firstName + " " + myData.people[2].lastName);



/*--------------------------------------------------

	4. Stringify the JSON Data and converting it back to JSON format

--------------------------------------------------*/

// let stringpeople = JSON.stringify(myData);
// console.log(stringpeople);

// // // This can serve to store information, for example in a shopping cart
// $("#container").append(stringpeople);


// // 	To convert the data back to JSON format: 

// let backtojson = JSON.parse(stringpeople);
// console.log(backtojson);

// // 	//This information is not a string, so it can't be readed by the HTML
// $("#container").append(backtojson);

// $("#container").append(backtojson);



/*--------------------------------------------------

	5. Understanding for loops and pulling data from a json file.

--------------------------------------------------*/

$.getJSON("../data.json", function(data) {

    console.log(data.people);

    let myUsers = data.people;

    console.log(myUsers);

    // Two different ways to do the for loop

    for (let i = 0; i < myUsers.length; i++) {
        console.log(myUsers[i].firstName + " " + myUsers[i].lastName);
    }

    // or you could also do 
    for (let i in myUsers) {

        console.log(myUsers[i].firstName + " " + myUsers[i].lastName);

        $("#container").append(myUsers[i].firstName + " " + myUsers[i].lastName + "<br>");

    }

})