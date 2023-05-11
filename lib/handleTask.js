const { viewDepartments, viewRoles, viewEmployees } = require('./viewQuery');
const { addDepartment, addRole, addEmployee } = require('./addQuery');
const { updateEmployeeRole } = require('./updateQuery');

function handleTask(answers) {
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
};

module.exports = handleTask;