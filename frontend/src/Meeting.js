// import React from 'react'
// import './meeting.css'
// import Calendar from 'react-calendar';

// function Meeting() {
   
//   return (
//     <div className='container'>
//     <div>
//     <form action=''>

//     <h1>ABC Convention - 5th - 10th Feb 2024 Meeting Appointment - Free Meeting Space</h1>
//         <div className='date-section'>
//           <h4 className='create'>Create Date  :</h4>
//           <Calendar className='small-calendar' />
//         </div>


//         <div className='date-section2'>
//           <h4 className='create2'>Appointment Date :</h4>
//           <Calendar className='small-calendar2' />
//         </div>

        

    


//         <label htmlFor="meeting-room">Available Meeting Space:</label>
//             <select className='option1' id="meeting-room" name="meeting-room">
//               <option> Avilabel meetiting slot for the appointment date  </option>

//               <option value="room1">Room 1</option>
//               <option value="room2">Room 2</option>
//               <option value="room3">Room 3</option>
//               <option value="room4">Room 4</option>
//             </select>


    
  
//         <div className='M-space'>

//         <label htmlFor='meeting-time'> <b>Meeting Time :</b></label>
//         <input  type='text'  name='meeting-time'/>
//         </div>


//         <div className='organization'>
//         <label htmlFor='meeting-space2'> <b>organization :</b></label>
//         <input type='text'  />
//         </div>

//         <div className='organization2'>
//         <label htmlFor='meeting-space'> <b>organization :</b></label>
//         <input type='text'  />
//         </div>




//     </form>


//     </div>

//     </div>
//   )
// }

// export default Meeting



import React from 'react';
import './meeting.css';
import Calendar from 'react-calendar';

function Meeting() {
  return (
    <div className='container'>
      
        <form action=''>
          <h1>ABC Convention - 5th - 10th Feb 2024 Meeting Appointment - Free Meeting Space</h1>
          
          <div className='container2'>
            <h4 className='create'>Create Date:</h4>
            <Calendar className='small-calendar' />
          </div>


          <div className='container3'>
            <h4 className='create2'>Appointment Date:</h4>
            <Calendar className='small-calendar2' />
          </div>

          <div className='container-form'>

          <label htmlFor="meeting-room">Available Meeting Space:</label>
          <select className='option1' id="meeting-room" name="meeting-room">
            <option>Available meeting slot for the appointment date</option>
            <option value="room1">Room 1</option>
            <option value="room2">Room 2</option>
            <option value="room3">Room 3</option>
            <option value="room4">Room 4</option>
          </select>
          <br/>
          <br/>

          <div className='M-space'>
            <label htmlFor='meeting-time'><b>Meeting Time:</b></label>
            <input  className='space1' type='text' id='meeting-time' name='meeting-time' placeholder='List available Time slot' />
          </div>
          <br/>
          <br/>
          
          <div className='container-organization'>
          <div className='organization'>
            <label htmlFor='meeting-space'><b>Organization:</b></label>
            <input type='text' id='meeting-space' name='meeting-space' placeholder='Enter the name of Organization'  />
          </div>
          </div>
          <br/>
          <br/>

          <div className='organization2'>
            <label htmlFor='meeting-space2'><b>Meeting of Host :</b></label>
            <input type='text' id='meeting-space2' name='meeting-space2' placeholder='Enter Host name'  />
          </div>
          <br/>
          <br/>

          <div className='Host Profile'>
            <label htmlFor='meeting-space2'><b> Host Profile :</b></label>
            <input type='text' id='meeting-space2' name='meeting-space2' placeholder='Enter Host name'  />
          </div>

          </div>



        </form>
      
    </div>
  );
}

export default Meeting;
