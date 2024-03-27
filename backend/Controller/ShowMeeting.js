const db = require('../db')

const ShowMeeting = (req,res)=>{
    const sql = 'SELECT * FROM room;'
    db.connection.query(sql, (err, rows , fields) => {
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(rows)
            res.send(rows)
        }
    })
}

module.exports = ShowMeeting