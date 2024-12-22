// Step 3: Require/Loads the express module
const express = require('express');
// body-parser is used to read data payload from the http request body
const bodyParser = require('body-parser'); 
// path is used to set default directories for MVC and also for the static files
const path = require('path'); 

// Step 4: Creates our express server
const app = express();

// Serves static files inside the public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Serves homepage.html when the website initially starts
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'homepage.html')); // Changed to serve homepage.html
})

// Step 5: Start HTTP Server on a port number 3000
// This will create a web service for your own project
const port = 3000;
app.listen(port, () => console.log(`App listening to port ${port}`));
