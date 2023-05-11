const db = require("../config/connection");
const { prompt } = require("inquirer");

function addDepartment() {
  prompt([
    {
      name: "department",
      type: "input",
      message: "Enter the name of the department you would like to add",

      validate: (departmentInput) => {
        if (departmentInput) {
          return true;
        } else {
          console.log("Please enter a department name!");
          return false;
        }
      },
    },
  ]).then((answers) => {
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
  });
}

function addRole() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    const departmentChoices = res.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    prompt([
      {
        name: "title",
        type: "input",
        message: "Enter the name of the role you would like to add",

        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter a role name!");
            return false;
          }
        },
      },
      //add role salary
      {
        name: "salary",
        type: "input",
        message: "Enter the salary of the role you would like to add",

        validate: (salaryInput) => {
          if (salaryInput) {
            return true;
          } else {
            console.log("Please enter a salary!");
            return false;
          }
        },
      },
      //choose role department
      {
        name: "department_name",
        type: "list",
        message: "Choose a department for this role",
        choices: departmentChoices,

        validate: (departmentInput) => {
          if (departmentInput) {
            return true;
          } else {
            console.log("Please choose a department!");
            return false;
          }
        },
      },
    ]).then((answers) => {
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
    });
  });
}

function addEmployee() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    const roleChoices = res.map(({ id, title }) => ({
      name: title,
      value: id,
    }));

    db.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      const managerChoices = res.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id,
      }));

      prompt([
        {
          name: "first_name",
          type: "input",
          message: "Enter the first name of the employee you would like to add",

          validate: (firstNameInput) => {
            if (firstNameInput) {
              return true;
            } else {
              console.log("Please enter a first name!");
              return false;
            }
          },
        },
        //add employee last name
        {
          name: "last_name",
          type: "input",
          message: "Enter the last name of the employee you would like to add",

          validate: (lastNameInput) => {
            if (lastNameInput) {
              return true;
            } else {
              console.log("Please enter a last name!");
              return false;
            }
          },
        },
        //choose employee role
        {
          name: "role_name",
          type: "list",
          message: "Choose a role for this employee",
          choices: roleChoices,

          validate: (roleInput) => {
            if (roleInput) {
              return true;
            } else {
              console.log("Please choose a role!");
              return false;
            }
          },
        },
        //choose employee manager
        {
          name: "manager_id",
          type: "list",
          message: "Choose a manager for this employee",
          choices: managerChoices,

          validate: (managerInput) => {
            if (managerInput) {
              return true;
            } else {
              console.log("Please choose a manager!");
              return false;
            }
          },
        },
      ]).then((answers) => {
        db.query(
          `
    INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
    ('${answers.first_name}', '${answers.last_name}', '${answers.role_name}', '${answers.manager_id}');`,
          (err, res) => {
            if (err) throw err;
            console.log(
              `${answers.first_name} ${answers.last_name} added to employees!`
            );
            const selectTask = require("./selectTask");
            selectTask();
          }
        );
      });
    });
  });
}

module.exports = { addDepartment, addRole, addEmployee };
