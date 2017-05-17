// example of simple node.js server listening on port 81
// no need to use this
// node.js server script (like this) will be in each excercise folder if necc
// to start the server, open windows command-prompt, nav to the file
// and type node <filename.js>
// DO NOT invoke the above command from the node shell, invoke it from the windows shell.
var express = require('express');
var app = express();

app.use('/', express.static('./'));
app.listen(81);