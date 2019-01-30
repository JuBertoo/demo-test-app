process.env.NODE_ENV = "test";

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let User = require('../models').User;
chai.should();
chai.use(chaiHttp);

const {formatMyString} = require('../utils/string')

describe('Utils testing', () => {
  describe('Test custom function', () => {

    it('It should return a string capitalized', (done) => {
      let result = formatMyString(376733)
      result.should.be.eql('376733');
      done()
    })

    it('Email should be capitalized', (done) => {
      User.create({
        email: 'blabla@gmail.com',
        password: 'Mypaass',
        age: 56,
      })
      .then((user) => {
        user.email.should.be.eql("BLABLA@GMAIL.COM")
        done()
      })
      .catch((err) => {
        console.log(err)
        done()
      })
    })
  })

})