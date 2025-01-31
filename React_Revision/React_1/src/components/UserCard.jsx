import React from 'react'

function UserCard(props) {
  return (
    <div className='card'>
      <p className='title'>{props.name}</p>
      <img id='img' src={props.img} alt="Durgesh Ki Image" />
      <p>Discription of This Page</p>
    </div>
  )
}

export default UserCard