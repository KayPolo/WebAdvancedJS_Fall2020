//https://openweathermap.org/api
// We're going to work with the current weather
// You need to register in order to obtain a key

//-------------------------------------------------------------
//Your Code Starts here

$(() => {

    //loadData();

    attachEvent();


})


attachEvent = () => {

    // Click the button 
    $("#search-button").click(() => {
        loadData($("#city").val());

        $("#city").val([]);

    });

    //Click enter
    $("#city").keypress((e) => {
        if (e.keyCode == 13) {
            loadData($("#city").val());

            $("#city").val([]);

        }

    });
}




loadData = () => {

    //let city = "Havana";
    let city = $("#city").val();

    // This is the getJSON Methode 

    //$.getJSON("url",()=>{})


    // $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
    //     (data) => {
    //         console.log(data);
    //         console.log(data.name);


    //         let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
    //         let temp = data.main.temp;
    //         let weather = data.weather[0].description;
    //         let cityName = data.name;
    //         let country = data.sys.country;

    //         // This empties the fields before putting a new value 
    //         $(".icon").empty();
    //         $(".weather").empty();
    //         $(".temp").empty();
    //         $(".city-name").empty();



    //         $(".icon").attr("src", icon);
    //         $(".weather").append(weather);
    //         $(".temp").append(Math.floor(temp * 9 / 5 - 459.67) + " " + "°F");

    //         //$(".temp").append(Math.floor(temp - 273.15) + " " + "°C")

    //         $(".city-name").append(cityName + ", " + country);








    //     })

    if (city != "") {
        $.ajax({

            url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=70f708ea0ae960d4c869108676d2a8f4",
            type: "GET",
            dataType: "json",

            success: (data) => {

                console.log(data);



                let icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
                let temp = data.main.temp;
                let weather = data.weather[0].description;
                let cityName = data.name;
                let country = data.sys.country;

                // This empties the fields before putting a new value 
                $(".icon").empty();
                $(".weather").empty();
                $(".temp").empty();
                $(".city-name").empty();
                $("#error").empty();





                $(".icon").attr("src", icon);
                $(".weather").append(weather);
                $(".temp").append(Math.floor(temp * 9 / 5 - 459.67) + " " + "°F");

                //$(".temp").append(Math.floor(temp - 273.15) + " " + "°C")

                $(".city-name").append(cityName + ", " + country);

            }



        })

    } else {
        $("#error").empty();

        $("#error").append("City can't be empty");

    }



}








//-------------------------------------------------------------

// Other Resources

// JSON vs XML 
// https://restfulapi.net/json-vs-xml/

// AJAX Call vs getJSON Call
//https://medium.com/@KDweber89/ajax-vs-getjson-ca910fa6854e