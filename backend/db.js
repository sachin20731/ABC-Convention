const mysql = require('mysql')

class Database {
    constructor(){
        this.connection = mysql.createConnection({
                host : 'localhost',
                user : 'root',
                password : 'root123',
                database : 'meeting'
            })

    }

    connect(){
        this.connection.connect(function(err) {
                if (err) {
                  console.error('error connecting: ' + err.stack);
                  return;
                }
               
                console.log('database connected...!');
              });

    }
}

module.exports = new Database