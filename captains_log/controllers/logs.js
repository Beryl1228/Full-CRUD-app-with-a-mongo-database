// Import Dependencies
const express = require("express");
const Log = require("../models/Log");
const router = express.Router();


// Index route
router.get('/', (req, res) => {
    console.log("it's working")
      Log.find({})
        .then(foundlogs => {
          res.render('logs/Index', {
            logs: foundlogs
          });
        })
        .catch(error => res.status(400).json({ error }))
    })
  


//New
router.get('/new', (req, res) => {
    res.render('logs/New')
  });


//Delete
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Log.deleteOne({ _id: id })
      .then(data => res.redirect('/logs'))
      .catch(error => res.status(400).json({ error }));
  });

// Update a log
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedLog = {
    title: req.body.title,
    entry: req.body.entry,
    shipIsBroken: req.body.shipIsBroken === 'true', // Convert checkbox value to boolean
    updatedAt: new Date() // Update the updatedAt field
  };

  Log.findByIdAndUpdate(id, updatedLog)
    .then(() => {
      res.redirect(`/logs/${id}`);
    })
    .catch(error => {
      console.error("Error while updating log:", error);
      res.status(400).json({ error });
    });
});

  
  
//Create
router.post('/', (req, res) => {
    Log.create(req.body)
      .then(data => res.redirect('/logs'))
      .catch(error => res.status(400).json({ error }));
  });


//Edit
router.get('/:id/edit', (req, res) => {
    const id = req.params.id; 
    Log.findOne({ _id: id })
      .then(foundLog => {
        res.render('logs/Edit', { log: foundLog });
      })
      .catch(error => res.status(400).json({ error }));
  });


//Show
router.get('/:id', (req, res) => {
    // get the id from params
    const id = req.params.id;
  

// find the particular snack from the database
Log.findOne({ _id: id })
      .then(foundLog => {
        res.render('logs/Show', { log: foundLog });
      })
      .catch(error => res.status(400).json({ error }));
  })

  
//seed route
// app.get("/logs/seed", (req, res) =>{
//   //Array of starter Logs
//   const starterLogs = [
//       {
//       title: "Encountered mysterious space anomaly",
//       entry: "At 1300 hours, the ship suddenly dropped out of warp speed after encountering an anomalous gravitational field emanating from a nearby asteroid. The ship shuddered under the strain but navigation systems were able to plot a safe exit vector. Note to engineering - run a level 3 diagnostic on the warp core.",
//       shipIsBroken: false,
//       },

//       {
//       title: "Navigator miscalculated hyperjump",
//       entry: "During a routine hyperspace jump, the navigator's calculations were off resulting in the ship overshooting the target system by 3.5 light years. After re-calibrating, we should arrive in the Andoria system in approximately 2 days. I've requested the navigator to undergo additional jump training to avoid any future miscalculations.", 
//       shipIsBroken: false,
//       },

//       {
//       title: "Striking new planet in uncharted territory", 
//       entry: "Stumbled upon a previously unexplored Minshara class planet in grid 390 mark 7. Preliminary scans show a nitrogen-oxygen atmosphere and abundance of aquatic lifeforms. An away team has been dispatched to the surface for further analysis and to determine if the planet can support humanoid life. Extreme caution recommended as environmental threats are unknown.", 
//       shipIsBroken: false,
//       }
//   ];
//   // Delete all logs
//   Log.deleteMany({})
//       .then(data => {
//           Log.create(starterLogs)
//               .then( data => {
//                 console.log("Data inserted successfully");
//                 res.status(200).json(data); 
//               })
//               .catch(error => {
//                 console.error("Error while creating logs:", error);
//                 res.status(400).json(error);  
//               });
//       })
//       .catch(error => {
//           console.error("Error while creating logs:",error);
//           res.status(400).json(error);
//       });
// });

// Export the Router
module.exports = router;
