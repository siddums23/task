const {
    createPool
} = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "database1",
    connectionLimit: 10
})

pool.query("INSERT INTO user_details(username, password, role, selection) VALUES ('siddu', 'gagan', 'admin', 'colleg')", (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})