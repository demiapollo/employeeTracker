const db = require("../config/connection");

async function getDepartments(response) {
  let departmentList;
  let returnList = await db
    .promise()
    .query(`SELECT * FROM department;`)
    .then((data) => {
      departmentList = data[0].map((data) => {
        return { name: data.name, value: data.id };
      });
      return departmentList;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnList;
}

module.exports = getDepartments;