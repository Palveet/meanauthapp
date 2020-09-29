//dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

//app variable
const app = express();

//port
const port = 3000;


//home page route
app.get('/', (req, res) => {
    res.send("invalid endpoint");
});


//listens and starts server
app.listen(port, () => {
    console.log('server started on port ' + port);
});