const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    let sql = 'SELECT * FROM customers LIMIT 5'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    sql = 'SELECT * FROM customers LIMIT 3'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    ql = 'SELECT * FROM customers LIMIT 1'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })
});