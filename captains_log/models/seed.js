const mongoose = require('./connection');
const Log = require('./Log');

const db = mongoose.connection;

db.on('open', () => {
    // Array of starter Logs
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
                    db.close();
                })
                .catch(error => {
                  console.error("Error while creating logs:", error);
                    db.close();
                });
        })
        .catch(error => {
            console.error("Error while creating logs:",error);
            db.close();
        });
});
