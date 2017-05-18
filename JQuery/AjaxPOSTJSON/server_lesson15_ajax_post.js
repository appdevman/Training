// from windows cmd prompt, start via:  node <thisFileName>
// do not attempt from node.js prompt, do it from standard windows shell prompt
var express = require('express'); // express web svr mod
var bodyParser = require('body-parser'); // body parser mod
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', express.static('./')); // root route
var trips = [ // some collection data
 {
   "idx": 0,
   "title": "Lost in Paradise",
   "location": "Hawaii",
   "date": "November 15th",
   "days": "7",
   "image": "flower.jpg",
   "rating": "4"
 },
 {
   "idx": 1,
   "title": "Breathtaking Beauty",
   "location": "Yosemite",
   "date": "June 25th",
   "days": "4",
   "rating": "4",
   "image": "falls.jpg"
 },
 {
   "idx": 2,
   "title": "Wild Expanse",
   "location": "Yellowstone",
   "date": "August 11th",
   "days": "6",
   "rating": "2",
   "image": "bison.jpg"
 },
 {
   "idx": 3,
   "title": "Awe Inspiring",
   "location": "Zion",
   "date": "September 16th",
   "days": "4",
   "rating": "4",
   "image": "peak.jpg"
 }
];
app.get('/getList', function(req, res){ // endpoint to send back list of places
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips));
});
app.get('/getTrip', function(req, res){ // endpoint to send back list of trips
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips[req.query.idx]));
});
app.post('/setRating', function(req, res){ // endpoint POST, to set the new star rating selected by enduser
  var test = 1;
  trips[req.body.idx].rating = req.body.rating;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(trips[req.body.idx]));
});
app.listen(81); // start server listening on port 81