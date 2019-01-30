process.env.NODE_ENV = "test";

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let User = require('../models').User;
chai.should();
chai.use(chaiHttp);

describe('Users Controller', () => {
  describe('Test all routes', () => {
    before((done) => {
      User.destroy({
        where: {},
        truncate: true
      }, (err) => {
        if (err) console.log(err)
      })
      done();
    });

    it('It should return all users', (done) => {
      chai.request(server)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.users.should.be.a('array');
        res.body.users.length.should.be.eql(0);
        done();
      })
    })

    it('It can create a new user', (done) => {
      const user = {email: 'test@gmail.com', password: 'test1234', age: 30}
      chai.request(server)
      .post('/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.user.should.be.a('object');
        res.body.user.email.should.be.eql(user.email)
        done();
      })
    })

    it('It can get an user by id', (done) => {
      chai.request(server)
      .get('/users/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.user.should.be.a('object');
        res.body.user.id.should.be.eql(1)
        done();
      })
    })

    it('It can update an user by id', (done) => {
      const newData = {email: 'newemail@hotmail.com'}
      chai.request(server)
      .put('/users/1')
      .send(newData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.user.should.be.a('object');
        res.body.user.id.should.be.eql(1)
        res.body.user.email.should.be.eql(newData.email)
        done();
      })
    })

    it('It can delete an user', (done) => {
      chai.request(server)
      .delete('/users/1')
      .end((err, res) => {
        chai.request(server)
        .get('/users')
        .end((err, res) => {
          res.body.users.length.should.be.eql(0)
          done();
        })
      })
    })
  })

})