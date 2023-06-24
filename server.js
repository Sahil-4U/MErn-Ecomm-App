const express = require('express');
const color = require('colors');


// rest object
const app = express();

// rest api's
app.get('/', (req, res) => {
    res.send({
        message: "welcome to my ecom-app"
    })
})

// port
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`our app is listning at ${PORT}`.white.underline)
})