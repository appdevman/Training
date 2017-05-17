//node.js Express (plugin) server on port 81   (body parser plugin also)
// this is a virtual web service with method/route '/request', simple HTTP 'get'
// to start the server, open windows command-prompt, nav to this file
// and type "node server_lesson15_ajax_handling.js"
// DO NOT invoke the above command from the node.js shell, invoke it from the windows shell.
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./'));
app.get('/request', function (req, res) { // listening ROUTE that our jquery script will call
  var queryObj = req.query;
  if (queryObj.name == "Lancalot" && queryObj.color == "blue"){
    res.send(200, "Welcome To AJAX!");     
  } else {
    res.send(400, "Invalid Answers!");
  }
});
app.listen(81);