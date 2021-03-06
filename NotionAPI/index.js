const express = require("express");
const getEvents = require("./services/getEvents");
const PORT = process.env.PORT || 4578;

const app = express();

// This will hold the FE pages
/**
 * * https://expressjs.com/en/starter/static-files.html
 */



app.get("/events", async (request, response) => {
    const events = await getEvents();
    response.json(events);
    console.log("End point is up...");
});


app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Application is up and running at ${PORT}`);
})



console.log("End points: ", app._router.stack);
// Sample snippets
/**
 * * Listing all the databases linked to the integrations
 * const listDB = async () => {
 * const result = await notion.databases.list();
 * console.log("DBs are: ", result);
 * }
 */

// Importing getEvents from the services.
// const getEvents = require("./services/getEvents");

// (async () => {
//     const events = await getEvents();
//     console.log("Events: ", events);
// })();
