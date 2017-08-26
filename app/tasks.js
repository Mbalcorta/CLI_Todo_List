#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const add = require('./commands/add.js').add;
const complete = require('./commands/complete.js').complete;
const deleted = require('./commands/delete.js').deleted;
const list = require('./commands/list.js').list;
const args = process.argv.slice(2);
const firstArgument = args[0];
const taskString = process.argv.slice(3).join(' ');
//checks if specific file exist/ if not make file
const jsonPath = path.resolve(__dirname, './tasks.json');

//need to figure header out
const header = () => {
  console.log('ID Description');
  console.log('-- -------------');
};

fs.stat(jsonPath, (err, stats) => {
    if(err){
      //need taskNumber to persist
      fs.writeFileSync(jsonPath, '{"tasks":[]}')
    }

    switch(firstArgument){
      case 'add':
        if(taskString){
          header();
          add(taskString, jsonPath);
        }
        break;
      case 'complete':
        complete(taskString, jsonPath);
        break;
      case 'delete':
        deleted();
        break;
      case 'list':
        header();
        list(jsonPath);
        break;
      default:
        console.log('Error: not a correct command, please try again');
    }
  });




module.exports = {add, complete, deleted, list, jsonPath, path}