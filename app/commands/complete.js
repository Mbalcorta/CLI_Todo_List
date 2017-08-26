'use strict';
const fs = require('fs');
const path = require('path');

const ChangeIncompleteStatus = (arrayOfObjects, taskNumber) => {
  arrayOfObjects[taskNumber].incomplete = false;
  const taskTitle = arrayOfObjects[taskNumber].description;
  return  `Completed tasks ${taskNumber+1}: '${taskTitle}'`;
}

//complete will change incomplete status is false;
exports.complete = (taskNumber, filePath) => {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const objectTasks = JSON.parse(fileContents);
  const arrayOfObjects = objectTasks.tasks
  const stringReturnValue = ChangeIncompleteStatus(arrayOfObjects, (Number(taskNumber)-1));
  if(filePath === path.resolve(__dirname, '../tasks.json')){
    process.stdout.write(stringReturnValue);
  };
  return stringReturnValue;
};