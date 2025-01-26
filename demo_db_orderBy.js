const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;

    //kasvavas järjekorras
    let sql = 'SELECT * FROM customers ORDER BY aadress';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    //kahanevas järjekorras
    sql = 'SELECT * FROM customers ORDER BY aadress DESC';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })
});