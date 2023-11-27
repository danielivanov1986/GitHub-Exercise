const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');
const expect = chai.expect;

chai.use(chaiHttp);


describe('Books API', () =>{
let bookID;


it('Should post a book', (done) => {
    const book = {id: "1", title: "Test Book", author: "Test Author"};

    chai.request(server)
    .post('/books')
    .send(book)
    .end((err,res) =>{
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('Object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('author');
        bookID = res.body.id;
        done();
})
});

it('Should Get all books', (done) => {
   
    chai.request(server)
    .get('/books')
    .end((err,res) =>{
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('array');
        done();
})
});

it('Should Get a single book', (done) => {
    const bookId = 1;

    chai.request(server)
    .get('/books/1')
    
    .end((err,res) =>{
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('Object');
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('title');
        expect(res.body).to.have.property('author');
       
        done();
})
});




});
