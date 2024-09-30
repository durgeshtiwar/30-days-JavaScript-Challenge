import React from 'react'

function Header() {
  return (
    <div className='h-28 w-auto bg-slate-800 flex'>
      <div className='ml-20 p-6'>
        <h1 className="text-3xl font-bold underline text-white">
        Movie Search App
        </h1>
      </div>
      <div className='ml-20 p-6'>
          <input className='w-72' type="text" placeholder='Search Movie or Show' 
          />
          <button
          className='bg-blue-800 rounded-md m-2 font-semibold w-14'>
          Search
          </button>
      </div>
      <div className='ml-28 p-6'>
        <img className='h-14 w-14 rounded-full ' src="https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg" alt="" />
      </div>
    </div>
  )
}

export default Header