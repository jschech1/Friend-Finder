var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, './app/routes/apiRoutes'))(app);
require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });