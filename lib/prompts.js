const getDepartments = require("./getDepartments");
const getRoles = require("./getRole");
const getEmployee = require("./getEmployee");

const prompts = [
  //tasks
  {
    name: "task",
    type: "list",
    message: "Choose a task",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Exit",
    ],
  },
 
];

module.exports = prompts;
