'use strict';
const fs = require('fs');
const path = require('path');
const jsonPath = path.resolve(__dirname, '../../test/test_json.json');
const pathToTerminalText = path.resolve(__dirname, '../../test/terminal_print.txt');

const filter = (arrayOfTasks) => {
  return arrayOfTasks.filter((listObject)=>{
    return listObject.incomplete;
  });
};

const ifEmpty = () => {
  const printToConsole = 'You have 0 tasks';
  fs.writeFileSync(pathToTerminalText, printToConsole);
   process.stdout.write(printToConsole);
};

const writeTerminalPrintFile = (arrayOfTasksObjects) => {
  let stringValue ='';
  arrayOfTasksObjects.forEach((eachObject)=>{
    stringValue += `${eachObject.id} ${eachObject.description}\n`
  })
    stringValue += `\nyou have ${arrayOfTasksObjects.length} task`
  fs.writeFileSync(pathToTerminalText, stringValue);
   process.stdout.write(stringValue)
};

exports.list = () => {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const jsonTasks = JSON.parse(fileContents);
    if(jsonTasks.tasks.length === 0){
      ifEmpty();
    } else {
      const arrayOfObjects = filter(jsonTasks.tasks);
      if(arrayOfObjects.length > 0) {
        writeTerminalPrintFile(arrayOfObjects);
      }
    }
};