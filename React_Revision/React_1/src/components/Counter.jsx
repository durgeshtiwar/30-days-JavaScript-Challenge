import React, { useState } from 'react'

function Counter(props) {
  return (
    <div className='count'>
      {props.children}
      <button className='inc' onClick={props.handleClick}>INC +</button>
      {/* <button className='dec' onClick={props.handleClick}>DEC -</button>  */}
    </div>
  )
}

export default Counter