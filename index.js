const db = require("./config/connection");
const inquirer = require("inquirer");
const selectTask = require("./lib/selectTask");

//start application
function init() {
  selectTask();
}

init();
