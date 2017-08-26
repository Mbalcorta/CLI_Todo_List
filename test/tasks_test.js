const assert = require('chai').assert;
const fs = require('fs');
const {add, complete, deleted, list, path} = require('../app/tasks.js');
const jsonTestFile =
path.resolve( __dirname,'./test_json.json');
// const jsonFile = path.resolve( __dirname,'./test_json.json');



describe('Should add tasks',() => {
  describe('When one task is added', ()=> {
    let contents ='';
    before(()=>{
      fs.writeFileSync(jsonTestFile, '{"tasks":[]}');
      fs.writeFileSync(jsonTestFile, add('Buy Milk', 1, jsonTestFile));
      contents += fs.readFileSync(jsonTestFile);
    });
    after(()=>{
      fs.writeFileSync(jsonTestFile, '{"tasks":[]}')
    });
    it('should contain json element', () => {
      assert.equal(contents,'{"tasks":[{"id":1,"description":"Buy Milk","incomplete":true}]}');
    });
  });









  // describe('When four tasks are added', ()=> {
  //   let fileContent;
  //   before(()=>{
  //     fs.writeFileSync(jsonFile, '{"tasks":[]}')
  //     add('Buy Eggs', 1);
  //     add('Buy Milk', 2);
  //     add('Walk dogs', 3);
  //     add('Read to baby', 4);
  //     fileContent = fs.readFileSync(terminalText, 'utf8')
  //   });
  //   it('should print "Created task 4"', () => {
  //     assert.equal(fileContent, 'Created task 4');
  //   });
  // })
  // describe('When one task is added when passed as argument', ()=> {
  //    let fileContent;
  //   before(()=>{
  //     fs.writeFileSync(jsonFile, '{"tasks":[]}')
  //     add('Buy eggs', 1);
  //     fileContent = fs.readFileSync(jsonFile, 'utf8')
  //   });
  //   it('it will create an object with a tasks array"', () => {
  //      assert.equal(fileContent, '{"tasks":[{"id":1,"description":"Buy eggs","incomplete":true}]}');
  //   });
  // });
  // describe('When two tasks added terminal', ()=> {
  //    let fileContent;
  //   before(()=>{
  //     fs.writeFileSync(jsonFile, '{"tasks":[]}')
  //     add('Buy eggs', 1);
  //     add('Buy milk', 2);
  //     fileContent = fs.readFileSync(terminalText, 'utf8')
  //   });
  //   it('should print created task 2"', () => {
  //      assert.equal(fileContent, 'Created task 2');
  //   });
  // })
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


// describe('should return list of incomplete tasks',() => {
//
//   after(()=>{
//     fs.writeFileSync(jsonFile, '{"tasks":[]}');
//     fs.writeFileSync(terminalText,'');
//   });
//
//   describe('should return no list if no list in task list', () => {
//     let fileContents;
//     before(()=> {
//       fs.writeFileSync(jsonFile, '{"tasks":[]}');
//       fs.writeFileSync(terminalText,'');
//       list();
//       fileContents =  fs.readFileSync(terminalText, 'utf8');
//     });
//     //checking before and after of print txt file
//     it('should print "You have 0 tasks" if no task', () => {
//         assert.equal(fileContents, 'You have 0 tasks');
//     });
//   });
//
//
//   describe('should print out list of incomplete task to console if one item added', () => {
//     let fileContents;
//     before(()=> {
//       fs.writeFileSync(jsonFile, '{"tasks":[]}');
//       fs.writeFileSync(terminalText,'');
//        add('Buy Milk', 1);
//        list();
//       fileContents =  fs.readFileSync(terminalText, 'utf8');
//     });
//
//     //checking before and after of print txt file
//     it('If one task is should print to terminal list of id and description', () => {
//         assert.equal(fileContents, '1 Buy Milk\n\nyou have 1 task');
//       });
//   });
//
//   describe('should print out list of incomplete tasks to console if many items added', () => {
//     let fileContents;
//     before(()=> {
//       fs.writeFileSync(jsonFile, '{"tasks":[]}');
//       fs.writeFileSync(terminalText,'');
//        add('Buy Milk', 1);
//        add('Take dogs on walk', 2);
//        add('Go for a bike ride', 3);
//        add('Take baby to beach', 4);
//        list();
//       fileContents =  fs.readFileSync(terminalText, 'utf8');
//     });
//
//     //checking before and after of print txt file
//     it('If multiple tasks it should print to terminal list of id and description', () => {
//         assert.equal(fileContents, '1 Buy Milk\n2 Take dogs on walk\n3 Go for a bike ride\n4 Take baby to beach\n\nyou have 4 task');
//       });
//   });

  // describe('should return task object', () => {
  //   let fileContents;
  //   // const jsonTask = '{"tasks":[{"id":1,"description":"Buy Milk","incomplete":true}]}';
  //   before(()=> {
  //     fs.writeFileSync(jsonFile, '{"tasks":[]}');
  //     fs.writeFileSync(terminalText,'');
  //      add('Buy Milk');
  //     list();
  //     fileContents =  fs.readFileSync(terminalText, 'utf8');
  //   });
  //
  //   //checking before and after of print txt file
  //   it('If one task is added should print one task if incomplete', () => {
  //       assert.equal(fileContents, '{"id":1,"description":"Buy Milk","incomplete":true}');
  //     });
  // })
// });