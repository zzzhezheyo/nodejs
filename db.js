
const mysql = require('mysql');
exports.base = (sql,data,callback)=>{
    const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'h5 1809'
      });

    connection.connect();
    // 数据库操作是异步的
    connection.query(sql,data, function (error, results, fields) {
        if (error) throw error;
        callback(results);
    });

    connection.end();
}


