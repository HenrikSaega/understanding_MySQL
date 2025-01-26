const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    let sql = 'DELETE FROM customers Where aadress = "Lowway 40"'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log("Number of record deleted: " + result.affectedRows);
    })
});