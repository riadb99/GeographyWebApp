const express = require('./config/express.js')
const data = require("./routes/dataRoute");
 
// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()

//app.use("/api/country",data);

app.listen(port, () => console.log(`Server now running on port ${port}!`));
