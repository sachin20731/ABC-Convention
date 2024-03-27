import React from "react";


function Parti() {
 
  return (
    <div className='select'>
      <label>
        <input
          type="radio"
          value="lessThan5"
         
        />
        Less than 5 participants
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="between10and20"
          
        />
        Between 10-20 participants
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="over20"
         
        />
        Over 20 participants
      </label>
    </div>
  );
}

export default Parti