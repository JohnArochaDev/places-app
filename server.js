// Dependencies
const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
require('dotenv').config();




// Routers




// Create the app object
const app = express()



// Middleware




// Routes
app.get('/', (req, res) => {
    res.send('The app is connected')
});



// Server Listener
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log('Your server is running, better go catch it')
});
// End