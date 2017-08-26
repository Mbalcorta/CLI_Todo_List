'use strict';
const fs = require('fs');
const path = require('path');
// const jsonPath = path.resolve(__dirname,'../tasks.json');

const writingToJsonFile = (taskObjectString, modifiedTasksObject, filePath) => {
  fs.writeFileSync(filePath, taskObjectString);
  if(filePath === path.resolve(__dirname, '../tasks.json')){
  process.stdout.write(`Created task ${modifiedTasksObject.tasks.length}\n`);
  };
  // fs.writeFileSync(pathToTerminalTextTest, `Created task ${modifiedTasksObject.tasks.length}`);
};

const turnIntoObject = (taskString, taskNumber) => {
  const taskObject = {id: taskNumber, description: taskString, incomplete: true};
  return taskObject;
};

const pushNewObjectToTasksArray = (newTaskObject, allTasksObject) => {
  allTasksObject.tasks.push(newTaskObject);
  return allTasksObject;
};


exports.add = (taskString, filePath) => {

  if(taskString){
    //first must read whats in jsonFile
    const readJsonFile = fs.readFileSync(filePath, 'utf8');
    //pull what is in jsonFile and Json.parse
    const tasksObject = JSON.parse(readJsonFile);
    const taskNumber =  tasksObject.tasks.length+1;
    //turn string into object;
    const newTaskObject = turnIntoObject(taskString, taskNumber);
    //hold object and then push new array into tasks array
    const modifiedTasksObject = pushNewObjectToTasksArray(newTaskObject, tasksObject);
    //stringify tasks then write to jsonFile with new array added
    const stringTasksObject = JSON.stringify(modifiedTasksObject);

    writingToJsonFile(stringTasksObject, modifiedTasksObject, filePath);
    return stringTasksObject;
  } else {
    //eventually make a test to catch an error when no string entered
    return 'Error: must enter task';
  }
};
