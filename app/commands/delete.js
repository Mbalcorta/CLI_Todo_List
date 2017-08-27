'use strict';
const fs = require('fs');
const path = require('path');

const ChangeIncompleteStatus = (arrayOfObjects, taskNumber, filePath) => {
  if(arrayOfObjects[taskNumber] && arrayOfObjects[taskNumber].incomplete){
      arrayOfObjects[taskNumber].incomplete = false;
      const taskTitle = arrayOfObjects[taskNumber].description;
      return  `Deleted tasks ${taskNumber+1}: '${taskTitle}'\n`;
    } else {
      if(filePath === path.resolve(__dirname, '../tasks.json')){
        process.stdout.write('ID Description\n');
        process.stdout.write('-- -------------\n\n');
        }
      return 'You have 0 tasks\n'
    }
};

//complete will change incomplete status is false;
exports.deleted = (taskNumber, filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const objectTasks = JSON.parse(fileContents);
  const arrayOfObjects = objectTasks.tasks;
  const stringReturnValue = ChangeIncompleteStatus(arrayOfObjects, (Number(taskNumber)-1), filePath);
  const objectTasksString = JSON.stringify(objectTasks);
  fs.writeFileSync(filePath, objectTasksString);
  if(filePath === path.resolve(__dirname, '../tasks.json')){
    process.stdout.write(stringReturnValue);
  }
  return stringReturnValue;
};