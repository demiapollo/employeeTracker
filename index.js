const db = require("./config/connection");
const inquirer = require("inquirer");
const prompts = require("./lib/prompts");

//errors or start
db.connect((err) => {
  if (err) throw err;
  inherits();
});

//select task
function selectTask() {
  inquirer.prompt(prompts).then((answers) => {
    switch (answers.task) {
      case "View all departments":
        viewDepartments();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "View all employees":
        viewEmployees();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "Add a role":
        addRole();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        updateEmployeeRole();
        break;
      case "Exit":
        db.end();
        break;
    }
  });
}

//start application
function init() {
  prompts();
  selectTask();
}
