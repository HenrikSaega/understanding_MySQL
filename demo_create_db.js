const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty',
});

con.connect((err) => {
    if(err) throw err;
    console.log("Connected!")
    const sql = 'CREATE DATABASE mydb';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log('Database created\n');
    })
});