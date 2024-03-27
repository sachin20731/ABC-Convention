// import React, { useEffect,useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom';


// import Calendar from 'react-calendar';
// import './application.css'; 


// function Application() {

   


//   return (
//     <>
//     <div>
//       <div className='container1'>
//         <h1>ABC Convention - 5th - 10th Feb 2024 Meeting Appointment - Free Meeting Space</h1>
//         <div className='date-section'>
//           <h4 className='create'>Create Date  :</h4>
//           <Calendar className='small-calendar' />
//         </div>


//         <div className='date-section2'>
//           <h4 className='create2'>Appointment Date :</h4>
//           <Calendar className='small-calendar2' />
//         </div>
     
//         <form className='form-container' >
// {/* 
//         <div className='Dropdown'>
        

//         <label htmlFor="meetingRoom">Available Meeting Space:</label>
//             <select className='option1' id="meetingRoom" name="meetingRoom">
//               <option> Avilabel meetiting slot for the appointment date  </option>

//               <option value="room1">Room 1</option>
//               <option value="room2">Room 2</option>
//               <option value="room3">Room 3</option>
//               <option value="room4">Room 4</option>
//             </select>
//             <br />
//             <br />


    
//     </div> */}
            


// {/* 
//             <label  htmlFor="meetingTime">Meeting Time:</label>
//             <input  type="datetime-local" id="meetingtime" name="meetingtime" 
                
//             />
//             <br />
//             <br/>
            

//             <div className='organization'>
//             <label  htmlFor="organization">Organization:</label>
//             <input   type="text" id="organization" name="organization" 
                
//             />
//             <br />
//             <br/>
//             </div>

    

//             <label  htmlFor="hostProfile">Host Profile:</label>
//             <input  type="text" id="hostProfile" name="hostprofile" 
               
//             />
//             <br />
//             <br />

//             <label  htmlFor="hostProfile">scheduled Appointments:</label>
//             <input  type="text" id="hostProfile" name="hostProfile" placeholder='Summary of the host profile' />
//             <br />
//             <br />

//             <label  htmlFor="hostProfile">Host Profile:</label>
//             <input  type="text" id="hostProfile" name="hostProfile" placeholder='List Scheduled Appointments' />
//             <br />
//             <br />

//             <div>

//             </div> */}



//           </form>
//         </div>
//       </div>

      
//     </>
//   );
// }

// export default Application;

import React, {useState } from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';


import Calendar from 'react-calendar';
import './application.css';

function Application() {

  const[createdate, setCreateDate] = useState(new Date())
  const handleDateChange1 = (date) => {
    setCreateDate(date)
    console.log(date)
  }

  const[appointmentdate, setAppoinmentDate] = useState(new Date())
  const handleDateChange2 = (date) => {
    setAppoinmentDate(date)
    console.log(date)
  }

  const [host, setHost] = useState('')
  const [organization, setOrganization] = useState('')
  const [space, setSpace] = useState('')
  const [time, setTime] = useState('')
  const [hostprofile, setHostProfile] = useState('')
  const [sheduleappoinment, setSheduleAppoinment] = useState('')
  const [participentcount, setParticipantCount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Selected date: ",createdate, appointmentdate,space,time,organization,host,hostprofile,sheduleappoinment,participentcount)

    axios.post('http://localhost:8080/meeting/add', {createdate, appointmentdate,space,time,organization,host,hostprofile,sheduleappoinment,participentcount} )
     .then(result => {
         console.log(result.data);
         if(result.data === 'Already Added'){
            alert("Already added!");
         } else {
            alert('Appoinment created Successfully!');
         }
     })
     .catch(err => console.log(err));
}




  return (

    <>
    <div className='container1'>
     <h1>ABC Convention - 5th - 10th Feb 2024 Meeting Appointment - Free Meeting Space</h1>
     
          <div>
            <h3 className='create'>Create Date:</h3>
            <Calendar className='small-calendar' onChange={handleDateChange1} value={createdate}/>
          </div>

    </div>

    <div className='container2'>

          <div className='small2'>
            <h4 className='create2'>Appointment Date :</h4>
            <Calendar className='small-calendar2' onChange={handleDateChange2} value={appointmentdate}/>
          </div>
    </div>



   

<form onSubmit={handleSubmit} className='form1'>

<div className='container-form'>
<div className='dropdown'>
<label className='drop'  htmlFor="meeting-room"><b>Available Meeting Space: </b></label>
<select onChange={(e)=>setSpace(e.target.value)} className='option1' id="meeting-room" name="meeting-room">
  <option>Available meeting slot for the appointment date</option>
  <option value="room1">Room 1</option>
  <option value="room2">Room 2</option>
  <option value="room3">Room 3</option>
  <option value="room4">Room 4</option>
</select>
</div>
<br/>
<br/>
<br/>
<br/>

<div className='M-space'>
  <label htmlFor='meeting-time'><b>Meeting Time:</b></label>
  <input onChange={(e)=>setTime(e.target.value)} className='space1' type='text' id='meeting-time' name='meeting-time' placeholder='List available Time slot' />
</div>
<br/>
<br/>

<div id='parent'>


      <div className='organization'>
        <label htmlFor='meeting-space'><b>Organization:</b></label>
        <input onChange={(e)=>setOrganization(e.target.value)} className='m' type='text' id='meeting-space' name='meeting-space' placeholder='Enter the name of Organization'  />
      </div>


      <div className='organization2'>
        <label htmlFor='meeting-space2'><b>Meeting Host :</b></label>
        <input onChange={(e)=>setHost(e.target.value)} className='m' type='text' id='meeting-space2' name='meeting-space2' placeholder='Enter Host name'  />
      </div>


</div>


<br/>
<br/>

<div className='Host-Profile'>
  <label  className='host' htmlFor='meeting-space2'><b> Host Profile :</b></label>
  {/* <input type='text' id='meeting-space2' name='meeting-space2' placeholder='Enter Host name'  /> */}
  <textarea
        className='text'
        id="letterBox"
        placeholder="Summary of the Host Profile." onChange={(e)=>setHostProfile(e.target.value)}
       
        rows="10"
      />
</div>
<br/>
<br/>


<div className='Schedule-appointment'>
  <label  className='host' htmlFor='Schedule appointment'><b> Schedule Appointments :</b></label>
  {/* <input type='text' id='meeting-space2' name='meeting-space2' placeholder='Enter Host name'  /> */}
  <textarea
        className='text'
        id="letterBox"
        placeholder="List of Schedule Appointment" onChange={(e)=>setSheduleAppoinment(e.target.value)}
       
        rows="10"
      />
</div>

<br/>
<br/>
<br/>

<div className='radio-2'>
        <h2>Select Participant Count</h2>
        <label>
          <input type="radio" value="less Than 5" checked={participentcount === "lessThan 5"} onChange={(e)=>setParticipantCount(e.target.value)} />
          Less than 5
        </label>
        <br />
        <label>
          <input type="radio" value="between 5 And 25" checked={participentcount === "between 5 And 25"} onChange={(e)=>setParticipantCount(e.target.value)} />
          Between 5 and 25
        </label>
        <br />
        <label>
          <input type="radio" value="over 25" checked={participentcount === "over 25"} onChange={(e)=>setParticipantCount(e.target.value)} />
          Over 25
        </label>
      </div>



      
<div>
<button className='btn' type='submit'>Create Appointment</button>
</div>



</div>
</form>
</>


  )
}

export default Application
