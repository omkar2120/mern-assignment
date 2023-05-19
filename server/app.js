const express  = require('express');
const app = express();
require("./conn/connection")
app.use(express.json());
const router = require("./route/routes.js");
const cors = require('cors');

app.use(cors());
app.use(router)


app.listen(3001,() => {
    console.log("Server is running on port 3000")
})