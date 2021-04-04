const express = require('./config/express.js')
const data = require("./routes/dataRoute");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

app.listen(port, () => console.log(`Server now running on port ${port}!`));
