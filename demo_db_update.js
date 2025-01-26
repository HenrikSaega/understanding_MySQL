const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    let sql = 'UPDATE customers SET aadress = "Lowway 40" WHERE aadress = "Lowway 37"'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    })
});