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
 
  // //choose employee to update
  // {
  //   name: "update_employee_name",
  //   type: "list",
  //   message: "Choose an employee to update",
  //   choices: [
  //     "John Doe",
  //     "Mike Chan",
  //     "Ashley Rodriguez",
  //     "Kevin Tupik",
  //     "Malia Brown",
  //     "Sarah Lourd",
  //     "Tom Allen",
  //     "Sam Carter",
  //   ],

  //   validate: (updateEmployeeInput) => {
  //     if (updateEmployeeInput) {
  //       return true;
  //     } else {
  //       console.log("Please choose an employee!");
  //       return false;
  //     }
  //   },
  // },
  // //choose employee role to update
  // {
  //   name: "update_employee_role",
  //   type: "list",
  //   message: "Choose a role for updating this employee role",
  //   choices: [
  //     "Salesperson",
  //     "Lead Engineer",
  //     "Software Engineer",
  //     "Finance Specialist",
  //     "Legal Team Lead",
  //     "Lawyer",
  //     "Marketing Lead",
  //     "Marketing Specialist",
  //   ],

  //   validate: (updateRoleInput) => {
  //     if (updateRoleInput) {
  //       return true;
  //     } else {
  //       console.log("Please choose a role!");
  //       return false;
  //     }
  //   },
  // },
];

module.exports = prompts;
