const express = require("express"); // import express
const path = require("path"); 


const app = express();
// app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx')
// app.set('views', path.join(__dirname, 'views'));

routes
app.get("/", (req, res) => {
    res.send("your server is running... better catch it.");
});
  
//New
app.get('/logs/new', (req, res) => {
    res.render('new')
  });

//Create
app.post('/logs', (req, res) => {
    // Log.create(req.body)
    //   .then(data => res.redirect('/logs'))
    //   .catch(error => res.status(400).json({ error }));
    res.send('Received') 
  });



//////////////////////////////////////////////
// Server Listener process.env.PORT || 
//////////////////////////////////////////////
const PORT = 3000;
app.listen(PORT, () => console.log(`Now Listening on port ${PORT}`));