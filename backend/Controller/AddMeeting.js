const db = require('../db')

const AddMeeting = (req,res) =>{

    const {createdate, appointmentdate,space,time,organization,host,hostprofile,sheduleappoinment,participentcount} = req.body
    const value = [createdate, appointmentdate,space,time,organization,host,hostprofile,sheduleappoinment,participentcount]
    const sql = 'INSERT INTO room VALUES(?,?,?,?,?,?,?,?,?)'

    db.connection.query(sql,value, (err,result)=>{
        if(err){
            console.log(err)
            res.send(err)
        }else{
            console.log(createdate, appointmentdate,space,time,organization,host,hostprofile,participentcount)
            console.log("Meeting added Success")
            res.send('add successfull' + result)
        }
    })
}

module.exports = AddMeeting