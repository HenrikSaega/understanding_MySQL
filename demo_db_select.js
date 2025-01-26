const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;

    //välastab kogu tabeli info
    let sql = 'SELECT * FROM customers'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    //väljastab ainuld name tabelirea
    sql = 'SELECT name FROM customers'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    //väljastab nime tüübi
    con.query(sql, (err, result, fields) => {
        if(err) throw err;
        console.log(fields);
    })
});