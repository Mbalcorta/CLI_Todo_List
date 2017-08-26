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
  arrayOfTasksObjects.forEach((eachObject)=>{
    stringValue += `${eachObject.id} ${eachObject.description}\n`
  });
    stringValue += `\nyou have ${arrayOfTasksObjects.length} task\n`
    if(jsonPath === path.resolve(__dirname, '../tasks.json')){
   process.stdout.write(stringValue);
  }
   return stringValue;
};

exports.list = (jsonPath) => {
    const fileContents = fs.readFileSync(jsonPath, 'utf8');
    const jsonTasks = JSON.parse(fileContents);

    // //######print this depending on how many items are incomplete
    // if(jsonTasks.tasks.length === 0){
    //   if(jsonPath === path.resolve(__dirname, '../tasks.json')){
    //     process.stdout.write('You have 0 tasks\n');
    //   }
    //   return 'You have 0 tasks';
    // } else {
    //   const arrayOfObjects = filter(jsonTasks.tasks);
    //   if(arrayOfObjects.length > 0) {
    //     return writeToFile(arrayOfObjects, jsonPath);
    //   }
    // }

      const arrayOfObjects = filter(jsonTasks.tasks);
      writeToFile(arrayOfObjects, jsonPath);
       //change return value
      // return writeToFile(arrayOfObjects, jsonPath);
};