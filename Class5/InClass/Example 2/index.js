let express = require('express');

let app = express();


app.get('/', (request, response) => {

    response.send("New Text!!!Yay ");

})

let PORT = 4000;
app.listen(PORT, () => {
    console.log("My port is" + PORT);
})