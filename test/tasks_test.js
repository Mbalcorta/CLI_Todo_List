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
    fs.writeFileSync(jsonFile, '{"tasks":[]}');
      add('Buy Milk');
      fileContent = fs.readFileSync(terminalText, 'utf8');
    });
    it('should print "Created task 1"', () => {
      assert.equal(fileContent, 'Created task 1');
    });
  });
  describe('When four tasks are added', ()=> {
    let fileContent;
    before(()=>{
      fs.writeFileSync(jsonFile, '{"tasks":[]}')
      add('Buy Eggs');
      add('Buy Milk');
      add('Walk dogs');
      add('Read to baby');
      fileContent = fs.readFileSync(terminalText, 'utf8')
    });
    it('should print "Created task 4"', () => {
      assert.equal(fileContent, 'Created task 4');
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
  });
  describe('When two tasks added terminal', ()=> {
     let fileContent;
    before(()=>{
      fs.writeFileSync(jsonFile, '{"tasks":[]}')
      add('Buy eggs');
      add('Buy milk');
      fileContent = fs.readFileSync(terminalText, 'utf8')
    });
    it('should print created task 2"', () => {
       assert.equal(fileContent, 'Created task 2');
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

  after(()=>{
    fs.writeFileSync(jsonFile, '{"tasks":[]}');
    fs.writeFileSync(terminalText,'');
  });

  describe('should return no list if no list in task list', () => {
    let fileContents;
    before(()=> {
      fs.writeFileSync(jsonFile, '{"tasks":[]}');
      fs.writeFileSync(terminalText,'');
      list();
      fileContents =  fs.readFileSync(terminalText, 'utf8');
    });
    //checking before and after of print txt file
    it('should print "You have 0 tasks" if no task', () => {
        assert.equal(fileContents, 'You have 0 tasks');
    });
  });

  describe('should return task object', () => {
    let fileContents;
    // const jsonTask = '{"tasks":[{"id":1,"description":"Buy Milk","incomplete":true}]}';
    before(()=> {
      fs.writeFileSync(jsonFile, '{"tasks":[]}');
      fs.writeFileSync(terminalText,'');
       add('Buy Milk');
      list();
      fileContents =  fs.readFileSync(terminalText, 'utf8');
    });

    //checking before and after of print txt file
    it('If one task is added should print one task if incomplete', () => {
        assert.equal(fileContents, '{"id":1,"description":"Buy Milk","incomplete":true}');
      });
  })

  describe('should print out list of incomplete tasks to console', () => {
    let fileContents;
    before(()=> {
      fs.writeFileSync(jsonFile, '{"tasks":[]}');
      fs.writeFileSync(terminalText,'');
       add('Buy Milk');
       list();
      fileContents =  fs.readFileSync(terminalText, 'utf8');
    });

    //checking before and after of print txt file
    it('If one task is should print to terminal list of id and description', () => {
        assert.equal(fileContents, '1 Buy milk you have 1 task');
      });
  })

  //works with add task// build add task first then come back
  // describe('should print all tasks that are not complete ', () => {
  //
  // })
});