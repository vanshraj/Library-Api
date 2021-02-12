let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app");
let should = chai.should();
let assert = chai.assert
chai.use(chaiHttp);

describe('Books Api', () => {
  let length;
  let aBook = {
    'uuid':'1234',
    'name':'A fine Balance',
    'authorName':'Rohinton'
  }
  let uBook = {
    'name':'The Book Thief',
    'authorName':'Markus'
  }
  //Test GET
  describe('GET /books', () =>{
    it("It should get all the books", (done) => {
      chai.request(server)
      .get('/books')
      .end((err,res) =>{
        res.should.have.status(200);
        res.body.confirmation.should.equal("success");
        res.body.results.should.be.a('Array');
        length = res.body.results.length;
        done();
      });
    });
  });

  //Test post by id
  describe('ADD /books/add', () =>{
    it("It should add a book", (done) => {
      chai.request(server)
      .post('/books/add')
      .send(aBook)
      .end((err,res) =>{
        res.should.have.status(200);
        res.body.confirmation.should.equal("success");
        res.body.result.should.be.a('Object');
        done();
      });
    });
  });


  //Test GET by id
  describe('GET /books/{uuid}', () =>{
    it("It should get a book", (done) => {
      chai.request(server)
      .get('/books/'+aBook.uuid)
      .end((err,res) =>{
        res.should.have.status(200);
        res.body.confirmation.should.equal("success");
        res.body.result.should.be.a('Object');
        done();
      });
    });
  });

  //Test update by id
  describe('UPDATE /books/{uuid}/update', () =>{
    it("It should update a book", (done) => {
      chai.request(server)
      .post('/books/'+aBook.uuid+'/update')
      .send(uBook)
      .end((err,res) =>{
        res.should.have.status(200);
        res.body.confirmation.should.equal("success");
        res.body.result.should.be.a('Object');
        done();
      });
    });
  });

  //Test delete by id
  describe('DELETE /books/{uuid}/delete', () =>{
    it("It should delete a book", (done) => {
      chai.request(server)
      .post('/books/'+aBook.uuid+'/delete')
      .end((err,res) =>{
        res.should.have.status(200);
        res.body.confirmation.should.equal("success");
        res.body.deleted.should.be.a('Object');
        done();
      });
    });
  });
});
