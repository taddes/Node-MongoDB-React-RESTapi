const express = require('express');

// Set up Express
const app = express();


// Listen for requests
app.listen(process.env.port || 4000, function() {
console.log(`Listening for requests on port 4000`)
})