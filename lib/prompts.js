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
  //add department
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
  //add role
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
    choices: ["Sales", "Engineering", "Finance", "Legal", "Marketing"],

    validate: (departmentInput) => {
      if (departmentInput) {
        return true;
      } else {
        console.log("Please choose a department!");
        return false;
      }
    },
  },
  //add employee first name
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
    choices: [
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Finance Specialist",
      "Legal Team Lead",
      "Lawyer",
      "Marketing Lead",
      "Marketing Specialist",
    ],

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
    name: "manager_name",
    type: "list",
    message: "Choose a manager for this employee",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
      "Sam Carter",
    ],

    validate: (managerInput) => {
      if (managerInput) {
        return true;
      } else {
        console.log("Please choose a manager!");
        return false;
      }
    },
  },
  //choose employee to update
  {
    name: "update_employee_name",
    type: "list",
    message: "Choose an employee to update",
    choices: [
      "John Doe",
      "Mike Chan",
      "Ashley Rodriguez",
      "Kevin Tupik",
      "Malia Brown",
      "Sarah Lourd",
      "Tom Allen",
      "Sam Carter",
    ],

    validate: (updateEmployeeInput) => {
      if (updateEmployeeInput) {
        return true;
      } else {
        console.log("Please choose an employee!");
        return false;
      }
    },
  },
  //choose employee role to update
  {
    name: "update_employee_role",
    type: "list",
    message: "Choose a role for updating this employee role",
    choices: [
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Finance Specialist",
      "Legal Team Lead",
      "Lawyer",
      "Marketing Lead",
      "Marketing Specialist",
    ],

    validate: (updateRoleInput) => {
      if (updateRoleInput) {
        return true;
      } else {
        console.log("Please choose a role!");
        return false;
      }
    },
  },
];

module.exports = prompts;
