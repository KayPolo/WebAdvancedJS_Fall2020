//https://openweathermap.org/api
// We're going to work with the current weather
// You need to register in order to obtain a key

$(() => {

    /* 1. Let's create a function named loadData to make the JSON request*/
    //loadData();

    /* 7. Don't forget to call your new function */
    attachEvent();

});


/* 6. We don't want to load the data when the page loads anymore, we want to load it only
When we input a city on the searbar
Define function that hadles the request from the input on Search Bar*/

attachEvent = () => {

    $("#search-button").click(() => {
        loadData($("#city").val());


        $("#city").val([]);

    });
    $("#city").keypress((e) => {
        if (e.keyCode == 13) {
            loadData($("#city").val());

            $("#city").val([]);

        }

    });


}

/* 2. We already called the function loadData(), but we haven't created it yet*/

loadData = () => {

    /* 3. We can set a variable that stores the city*/

    // let city = "New York";

    /*5. Let's create a searchbar and
        We want to do look for the value in a dynamic way, that's why we're going to take 
        the value imputted on the search bar as reference*/

    let city = $("#city").val();

    /*getJSON() is a method for pulling information from an API 
        that uses JSON markup language. It is faster and a little 
        bit easier to use than using traditional ajax methods. What 
        it cannot do is pull any information from XML API’s.
    
        https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e
        */


    /*4. Let's make an API call
     * Important, make sure that you have yourr API key*/

    // $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
    //     (data) => {



    //         console.log(data.name);
    //         console.log(data);

    //         // $("body").append(data.name);




    //         // /* 8. Now let's find other pieces of information, like temperture */


    //         // /* 9. Make sure that the field is empty*/
    //         $(".icon").empty();
    //         $(".weather").empty();
    //         $(".temp").empty();
    //         $(".city-name").empty();

    //         let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    //         let temp = data.main.temp;
    //         let weather = data.weather[0].description;
    //         let cityName = data.name;
    //         let country = data.sys.country;

    //         $(".icon").attr("src", icon);

    //         //Convert Kelvin to Farenheit - T(°F) = T(K) * 9/5 - 459.67
    //         $(".weather").append(Math.floor(temp * 9 / 5 - 459.67) + " " + "°F");

    //         // Conver Kelvin to Celcius - T(°F) = T(K) - 273.15
    //         //$(".weather").append(Math.floor((temp - 273.15)) + " " + "°C");

    //         $(".temp").append(weather);
    //         $(".city-name").append(cityName + ", " + country);

    //         console.log(temp);


    //     });





    if (city != '') {

        /* 10. Ajax Call vs getJSON
            This is where AJAX has the upper hand. AJAX can pull information from JSON API’s, 
             but they also can pull information from XML API’s. It’s just a little bit more of a process.
             https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e
        */
        $.ajax({

            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
            type: "GET",
            dataType: "json",
            success: function(data) {



                console.log(data);
                console.log(data.name);

                $("#error").empty();

                $(".icon").empty();
                $(".weather").empty();
                $(".temp").empty();
                $(".city-name").empty();


                let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                let temp = data.main.temp;
                let weather = data.weather[0].description;
                let cityName = data.name;
                let country = data.sys.country;

                $(".icon").attr("src", icon);
                // Convert Kelvin to Farenheit - T(°F) = T(K) * 9/5 - 459.67
                $(".weather").append(Math.floor(temp * 9 / 5 - 459.67) + " " + "°F");

                // //  Conver Kelvin to Celcius - T(°F) = T(K) - 273.15
                // $(".weather").append(Math.floor((temp - 273.15)) + " " + "°C");
                $(".temp").append(weather);
                $(".city-name").append(cityName + ", " + country);

                console.log(temp);

            }

        });

        /* 11. Error message if the nothing is requested */

    } else {
        $("#error").html("City can't be empty");
    }
}





// JSON vs XML 
// https://restfulapi.net/json-vs-xml/