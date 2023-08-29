require("dotenv").config(); 
const express = require("express"); // import express
const morgan = require("morgan"); //import morgan
const methodOverride = require("method-override");
const Log = require('./models/Log.js')
const path = require("path"); 

const app = express();
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')



//middleware
app.use(morgan("tiny")); //logging
app.use(methodOverride("_method")); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
app.use(express.static("public")); // serve files from public statically



  

//routes
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});
  

app.use('/logs', require('./controllers/logs'))


//////////////////////////////////////////////
// Server Listener 
//////////////////////////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));