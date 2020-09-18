const {connection} = require('../../dbConfig');

connection.query(`SELECT "NARENDRA"` , function (err, result) {
    if (err) throw err;
    console.log(result[0]);
  });
