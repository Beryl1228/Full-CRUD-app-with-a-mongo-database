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


app.get("/logs/seed", (req, res) =>{
    //Array of starter Logs
    const starterLogs = [
        {
        title: "Encountered mysterious space anomaly",
        entry: "At 1300 hours, the ship suddenly dropped out of warp speed after encountering an anomalous gravitational field emanating from a nearby asteroid. The ship shuddered under the strain but navigation systems were able to plot a safe exit vector. Note to engineering - run a level 3 diagnostic on the warp core.",
        shipIsBroken: false,
        },

        {
        title: "Navigator miscalculated hyperjump",
        entry: "During a routine hyperspace jump, the navigator's calculations were off resulting in the ship overshooting the target system by 3.5 light years. After re-calibrating, we should arrive in the Andoria system in approximately 2 days. I've requested the navigator to undergo additional jump training to avoid any future miscalculations.", 
        shipIsBroken: false,
        },

        {
        title: "Striking new planet in uncharted territory", 
        entry: "Stumbled upon a previously unexplored Minshara class planet in grid 390 mark 7. Preliminary scans show a nitrogen-oxygen atmosphere and abundance of aquatic lifeforms. An away team has been dispatched to the surface for further analysis and to determine if the planet can support humanoid life. Extreme caution recommended as environmental threats are unknown.", 
        shipIsBroken: false,
        }
    ];
    // Delete all logs
    Log.deleteMany({})
        .then(data => {
            Log.create(starterLogs)
                .then( data => {
                  console.log("Data inserted successfully");
                  res.status(200).json(data); 
                })
                .catch(error => {
                  console.error("Error while creating logs:", error);
                  res.status(400).json(error);  
                });
        })
        .catch(error => {
            console.error("Error while creating logs:",error);
            res.status(400).json(error);
        });
});

  

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