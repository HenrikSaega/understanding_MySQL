const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    const sql = 'INSERT INTO customers (name, aadress) VALUES ("Company Inc", "Highway* 38")';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('1 record inserted\n');
    })
});