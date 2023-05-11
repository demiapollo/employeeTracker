const { errorMonitor } = require('mysql2/typings/mysql/lib/Connection');
const db = require('../config/connection');

function viewDepartments() {
  db.query(
    `SELECt department.id AS department_id, department.name AS department_name FROM department;`,
    (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
    
        const selectTask = require('./selectTask');
        selectTask();
    });
};

function viewRoles() {
    db.query(
        `SELECT role.id AS role_id, role.title AS role_title, role.salary AS role_salary, department.name AS department_name FROM role LEFT JOIN department ON role.department_id = department.id;`,
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res);
        
            const selectTask = require('./selectTask');
            selectTask();
        });
};

function viewEmployees() {
    db.query(`SELECT employee.id AS employee_id, employee.first_name AS employee_first_name, employee.last_name AS employee_last_name, role.title AS role_title, role.salary AS role_salary, department.name AS department_name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;`,
    (err, res) => {
        if (err) {
            console.log(err);
        }
        console.table(res);
    
        const selectTask = require('./selectTask');
        selectTask();
    });
};

module.exports = { viewDepartments, viewRoles, viewEmployees };
