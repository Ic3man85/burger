let express = require('express');
let bodyParser = require('body-parser');
let exhbs = require('express-handlebars');

let PORT = process.env.PORT || 8080;

let app = express();

// app.use(express.static("public"));

app.use(bodyParser.urlencoded({
    extended: true
}));


app.engine("handlebars", exhbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(PORT);