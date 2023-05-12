const db = require("../config/connection");
const { prompt } = require("inquirer");

function updateEmployeeRole(answers) {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    const employeeChoices = res.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));

    prompt([
      {
        name: "update_employee_role",
        type: "list",
        message: "Choose an employee to update",
        choices: employeeChoices,
      },
    ]).then((answers) => {
      let employee_id = answers.update_employee_role;
      db.query("SELECT * FROM role", (err, res) => {
        if (err) throw err;
        const roleChoices = res.map(({ id, title }) => ({
          name: title,
          value: id,
        }));
        prompt([
          {
            name: "select_role",
            type: "list",
            message: "Choose a role for this employee to update",
            choices: roleChoices,
          },
        ])
          .then((answers) => {
            let role_id = answers.select_role;
            db.query(
              "UPDATE employee SET role_id = ? WHERE id = ?",
              [role_id, employee_id],
              (err, res) => {
                if (err) throw err;
                console.log("Employee role updated!");
              }
            );
          })

          .then(() => {
            const selectTask = require("./selectTask");
            selectTask();
          });
      });
    });
  });
}

module.exports = updateEmployeeRole;
