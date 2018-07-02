const express = require('express')
const app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var shortid = require('shortid');
console.log(shortid.generate());




let event1 = {
  _id: shortid.generate(),
  "title": "Volleyball",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}
let event2 = {
  _id: shortid.generate(),
  "title": "Swimming",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}

let event3 = {
  _id: shortid.generate(),
  "title":"Football",
  "description": "Outdoor sport",
  "date":"29-06-2018"
}


let events = {
  1: event1,
  2: event2,
  3: event3
}


app.get('/events', (req,res) => res.send(events));

app.get('/events/:id', (req,res) => {
  if(req.params.id in events) {
    res.send(events[req.params.id])
  } else {
    res.send(404);
  }
});

app.post('/events', function(req,res) {
  var id = shortid.generate();
  var title = req.body.title;
  var description = req.body.description;
  var date = req.body.date;
  res.send({id,title, description,date});
});

app.patch('/events/:id/', function(req,res) { // updating information in the url
if(req.params.id in events) {
  var title = req.body.title;
  var description = req.body.description;
  var date = req.body.date;
  res.send(events[req.params.id], title, description, date);
}
});


app.post('/', (req,res) => res.send('Got a POST request'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
