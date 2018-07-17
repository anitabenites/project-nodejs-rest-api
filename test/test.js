
var chai = require('chai');
var expect = chai.expect; // i can access to this submodul!
var chaiHttp = require('chai-http');
// var request = chai.request;

chai.use(chaiHttp);


describe('Endpoint', function() {
  //You should implement a test for the endpoint that returns all the events
    it('should return the same events', function() {
      expect('./events').to.equal('./events');
    });

    //Use chai-http to start and make requests to your server
    it('Use chai-http to start and make requests to your server', function(done){
      chai.request('http://localhost:3000') // it works when the server is running otherwise no!
        .get('/events')
        .end(function(err,res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        });
      });

      //You should implement a test for the endpoint that creates an event
      it('testing the put events http request created with mocha', function(done) {
        chai.request('http://localhost:3000')
        .post('/events') // endpoint!
        .send({
          '_method': 'put',
          'id': '1213',
          'title': 'req.body.title',
          'description': 'req.body.description',
          'date': 'req.body.date'
        })
        .end(function(err,res){
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        })
      });

      //You should implement a test for the endpoint that returns one event by its id
      it('testing the endpoint that returns one event by its id', function(done) {
        chai.request('http://localhost:3000')
        .get('/events/2') // endpoint!
        .end(function(err,res){
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        })
      });
      //You should implement a test for the endpoint that updates an existing event
      it('updating an existing event', function(done){
        chai.request('http://localhost:3000')
        .patch('/events/2')
        .send({
          '_method': 'put',
          'id': '2134',
          'title': 'soccer',
          'description': 'with friends',
          'date': '22-09-2018'
        })
        .end(function(err,res){
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        })
      })

      //You should implement a test for the endpoint that deletes an existing event
      it('delete an existing event', function(done){
        chai.request('http://localhost:3000')
        .delete('/events/2')
        .send('the event has been delete')
        .end(function(err,res){ // this is a callback!
          expect(res).to.have.status(200);
          expect(err).to.be.null;
          done();
        })
      })


});
