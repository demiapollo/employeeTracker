const db = require("../config/connection");

function addDepartment() {
  db.query(
    `
    INSERT INTO department (name)
    VALUES
    ('${answers.department_name}');`,
    (err, res) => {
      if (err) throw err;
      console.log(`${answers.department_name} added to departments!`);
      const selectTask = require("./selectTask");
      selectTask();
    }
  );
}

function addRole() {
  db.query(
    `
    INSERT INTO role (title, salary, department_id)
    VALUES
    ('${answers.role_title}', '${answers.role_salary}', '${answers.role_department}');`,
    (err, res) => {
      if (err) throw err;
      console.log(`${answers.role_title} added to roles!`);
      const selectTask = require("./selectTask");
      selectTask();
    }
  );
}

function addEmployee() {
  db.query(
    `
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('${answers.employee_first_name}', '${answers.employee_last_name}', '${answers.employee_role}', '${answers.employee_manager}');`,
    (err, res) => {
      if (err) throw err;
      console.log(
        `${answers.employee_first_name} ${answers.employee_last_name} added to employees!`
      );
      const selectTask = require("./selectTask");
      selectTask();
    }
  );
}

module.exports = { addDepartment, addRole, addEmployee };
