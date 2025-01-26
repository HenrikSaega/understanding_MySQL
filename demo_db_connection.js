const mysql = require('mysql2');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'qwerty'
});

con.connect((err) => {
    if(err) throw err;
    console.log('Successfully Connected!');
});