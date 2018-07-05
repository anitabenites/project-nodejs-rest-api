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
  "id": shortid.generate(),
  "title": "Volleyball",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}
let event2 = {
  "id": shortid.generate(),
  "title": "Swimming",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}

let event3 = {
  "id": shortid.generate(),
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
  var newEvent = {
    "id": shortid.generate(),
    "title": req.body.title,
    "description": req.body.description,
    "date": req.body.date
  }
  var num = Object.keys(events).length + 1;
  events[num] = newEvent;
  res.send(events[num]);
});

// there should be an endpoint that allows to update an existing event(PATCH/events/{})
app.patch('/events/:id', function(req, res) {
  if(req.params.id in events) {
    if(req.body.title) {
      // console.log("Footbal", req.body.title);
      // console.log(req.body.title);
      // console.log(events[req.params.id]['title']);
      // console.log("Previous title", events[req.params.id]['title']);
      events[req.params.id]['title'] = req.body.title;
      // console.log("Title changed", events[req.params.id]['title']);
    } else if(req.body.description) {
      // console.log("New", req.body.description);
      // console.log("Old", req.params.id.description);
      events[req.params.id]['description'] = req.body.description;
    } else if(req.body.date) {
        events[req.params.id]['date'] = req.body.date;
    }
    res.send(events[req.params.id]); // why it does not work with a ".notation"?
  } else {
    res.send(404);
  }
});

app.delete('/events/:id', function(req,res) {
  if(req.params.id in events) {
    console.log("this is:", req.params.id)
    delete events[req.params.id]
    res.send(events);
  } else {
    res.send(404);
  }

});

app.post('/', (req,res) => res.send('Got a POST request'));


app.listen(3000, () => console.log('Example app listening on port 3000!'))
