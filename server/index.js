const express = require("express");
const app = express();
const cors = require("cors");
const Database = require("./Database/Database");
const enquiryroutes = require("./routes.js/enquiry_routes.js");

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.listen(9999, () => {
    Database()
    console.log(`${9999} is connected`)
})

app.use("/enquiry",enquiryroutes);

app.get("/rs-softech",  (req, res) => {
 
    res.send("rs-softech")
})