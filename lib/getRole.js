const db = require("../config/connection");

async function getRole(answer) {
  let roleList;
  let returnedValue = await db
    .promise()
    .query(`SELECT * FROM role;`)
    .then((data) => {
      roleList = data[0].map((data) => {
        return { name: data.title, value: data.id };
      });
      return roleList;
    })
    .catch((err) => {
      console.log(err);
    });
  return returnedValue;
}

module.exports = getRole;