#!/usr/bin/env node
const add = require('./commands/add.js').add;
const complete = require('./commands/complete.js').complete;
const deleted = require('./commands/delete.js').deleted;
const list = require('./commands/list.js').list;
const args = process.argv.slice(2);
const firstArgument = args[0];

switch(firstArgument){
  case 'add':
    add();
    break;
  case 'complete':
    complete();
    break;
  case 'delete':
    deleted();
    break;
  case 'list':
    list();
    break;
  default:
    console.log('Error: not a correct command, please try again')
}

module.exports = {add, complete, deleted, list}