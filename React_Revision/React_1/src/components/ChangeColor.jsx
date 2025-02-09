import React from 'react'

function ChangeColor({handleColor}) {
  return (
    <button onClick={handleColor}>
      click for change color
    </button>
  )
}

export default ChangeColor