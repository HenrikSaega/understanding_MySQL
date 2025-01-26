const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
    database: 'mydb'
});

con.connect((err) => {
    if(err) throw err;
    let sql = 'SELECT * FROM customers WHERE aadress = "Highway 37"'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    //väljastab need andmed, mille aadress algab tähega L
    sql = 'SELECT * FROM customers WHERE aadress LIKE "L%"'
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
    })

    //laseb väljastada erimärkidega tekste
    let adr = 'Highway* 38';
    sql = 'SELECT * FROM customers WHERE aadress = ' + mysql.escape(adr);
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
});