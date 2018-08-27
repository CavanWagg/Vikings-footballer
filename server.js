const express = require("express");  
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars"); 

const db = require("./models");
 
const app = express(); 

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/nfl.js")(app);


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on: http://localhost:${  PORT}`);
    });

})

// add something for heroku to push