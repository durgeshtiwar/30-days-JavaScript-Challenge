import React, { useState } from 'react'

function Counter() {
  const[count, setCount] = useState(0);
  return (
    <div className='count'>
      <h3>You Have Clicked {count} Times</h3>
      <button className='inc' onClick={()=>setCount(count+1)}>INC +</button>
      <button className='dec' onClick={()=>setCount(count-1)}>DEC -</button> 
    </div>
  )
}

export default Counter