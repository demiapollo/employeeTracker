const db = require("../config/connection");

function updateEmployeeRole(answers) {
  db.query(
    `
        UPDATE employee
        SET role_id = '${answers.update_employee_role}'
        WHERE id = '${answers.employee_id}';`,
    (err, res) => {
      if (err) throw err;
      console.log(`Employee role updated!`);
      const selectTask = require("./selectTask");
      selectTask();
    }
  );
}

module.exports = updateEmployeeRole;
