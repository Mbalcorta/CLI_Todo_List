const assert = require('chai').assert;
const fs = require('fs');
const {add, complete, deleted, list, path} = require('../app/tasks.js');
const terminalText =
path.resolve( __dirname,'./terminal_print.txt');
const jsonFile = path.resolve( __dirname,'./test_json.json');


describe('Should add tasks',() => {
  describe('When once task is added', ()=> {
    let fileContent;
    before(()=>{
    fs.writeFileSync(jsonFile, '{"tasks":[]}')
      fileContent = fs.readFileSync(terminalText, 'utf8');
    });
    it('should print "Created task 1"', () => {
      assert.equal(fileContent, 'Created task 1');
    });
  });
  describe('When two task are added', ()=> {
    let fileContent;
    before(()=>{
      fs.writeFileSync(jsonFile, '{"tasks":[]}')
      add('Buy eggs');
      add('Buy Milk');
      fileContent = fs.readFileSync(terminalText, 'utf8')
    });
    it('should print "Created task 2"', () => {
      assert.equal(fileContent, 'Created task 2');
    });
  })
  describe('When one task is added when passed as argument', ()=> {
     let fileContent;
    before(()=>{
      fs.writeFileSync(jsonFile, '{"tasks":[]}')
      add('Buy eggs');
      fileContent = fs.readFileSync(jsonFile, 'utf8')
    });
    it('it will create an object with a tasks array"', () => {
       assert.equal(fileContent, '{"tasks":[{"id":1,"description":"Buy eggs","incomplete":true}]}');
    });
  })
});
//
// describe('prints complete is exported',() => {
//   it('should return complete is exported string', () => {
//     assert.equal(complete(), 'complete is exported', 'says complete is exported');
//   });
// });
//
// describe('prints deleted is exported',() => {
//   it('should return deleted is exported string', () => {
//     assert.equal(deleted(), 'deleted is exported', 'says deleted is exported');
//   });
// });


describe('should return list of incomplete tasks',() => {

  describe('should return no list if no list in task list', () => {
    let fileContents;
    before(()=> {
      fs.writeFileSync(jsonFile, '');
      fs.writeFileSync(terminalText,'');
      list();
      fileContents =  fs.readFileSync(terminalText, 'utf8');
    });

    after(()=>{
      fs.writeFileSync(jsonFile, '');
      fs.writeFileSync(terminalText,'');
    })
    //checking before and after of print txt file
    it('should print "You have 0 tasks" if no task', () => {
        assert.equal(fileContents, 'You have 0 tasks');
    });
  });

  describe('should return task object', () => {
    let fileContents;
    const jsonTask = '{"tasks":[{"id":1,"description":"Buy Milk","incomplete":true}]}';
    before(()=> {
      fs.writeFileSync(jsonFile, jsonTask);
      fs.writeFileSync(terminalText,'');
      list();
      fileContents =  fs.readFileSync(terminalText, 'utf8');
    });

    after(()=>{
      fs.writeFileSync(jsonFile, '');
      fs.writeFileSync(terminalText,'');
    });

    //checking before and after of print txt file
    it('If one task is added should print one task if incomplete', () => {
        assert.equal(fileContents, '{"id":1,"description":"Buy Milk","incomplete":true}');
      });
  })

  //works with add task// build add task first then come back
  // describe('should print all tasks that are not complete ', () => {
  //
  // })
});