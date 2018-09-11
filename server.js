var express = require("express");
var bodyParser = require("body-parser");


var app = express();

var PORT = process.env.PORT || 8080;

var path = require("path");

app.use(express.static(path.join(__dirname, './app/public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});