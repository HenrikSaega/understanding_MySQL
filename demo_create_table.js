const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    const sql = 'CREATE TABLE customers (name VARCHAR(255), aadress VARCHAR(255))';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Table created\n');

        /* con.query("SHOW TABLES", (err, result) => {
            if(err) throw err;
            console.log(result)
        }) */
    })
});