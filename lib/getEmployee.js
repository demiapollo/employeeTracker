const db = require("../config/connection");

async function getEmployee(answer) {
  let employeeList;
  let returnedValue = await db
    .promise()
    .query(`SELECT * FROM employee;`)
    .then((data) => {
      employeeList = data[0].map((data) => {
        return { name: data.first_name + " " + data.last_name, value: data.id };
      });
      employeeList.push({ name: "None", value: null });
      return employeeList;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnedValue;
}

module.exports = getEmployee;
