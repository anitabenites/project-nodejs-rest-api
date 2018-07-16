
var chai = require('chai');
var expect = chai.expect;
var chaiHttp = require('chai-http');
// var request = chai.request;

chai.use(chaiHttp);

describe('Endpoint', function() {
    it('should return the same events', function() {
      expect('./events').to.equal('./events');
    });

    it('Use chai-http to start and make requests to your server', function(done){
      chai.request('http://localhost:3000') // it works when the server is running otherwise no!
        .get('/events')
        .end(function(err,res) {
          expect(res).to.have.status(200);
          expect(err).to.be.null
          done();
        });
      });

      it('testing the put events http request created with mocha', function() {
        chai.request('http://localhost:3000')
        .post('/events') // endpoint!
        .send({
          '_method': 'put',
          'id': '1213',
          'title': 'req.body.title',
          'description': 'req.body.description',
          'date': 'req.body.date'
        })
      });
});

//You should implement a test for the endpoint that creates an event
