'use strict';
const fs = require('fs');
const path = require('path');
// const jsonPath = path.resolve(__dirname, '../../test/test_json.json');
// const pathToTerminalText = path.resolve(__dirname, '../../test/terminal_print.txt');

const filter = (arrayOfTasks) => {
  return arrayOfTasks.filter((listObject)=>{
    return listObject.incomplete;
  });
};

const writeToFile = (arrayOfTasksObjects, jsonPath) => {
  let stringValue ='';
  let taskVariable;
  arrayOfTasksObjects.forEach((eachObject)=>{
    stringValue += `${eachObject.id} ${eachObject.description}\n`
  });
  arrayOfTasksObjects.length === 1 ? taskVariable = 'task' : taskVariable = 'tasks'

  stringValue += `\nYou have ${arrayOfTasksObjects.length} ${taskVariable}\n`
    if(jsonPath === path.resolve(__dirname, '../tasks.json')){
      process.stdout.write(stringValue);
  }
   return stringValue;
};

exports.list = (jsonPath) => {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const jsonTasks = JSON.parse(fileContents);
    const arrayOfObjects = filter(jsonTasks.tasks);
    return writeToFile(arrayOfObjects, jsonPath);
};