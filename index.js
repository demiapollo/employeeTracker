const db = require("./config/connection");


const selectTask = require("./lib/selectTask");

//start application
function init() {
  selectTask();
}

init();
