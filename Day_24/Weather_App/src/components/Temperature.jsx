import React from 'react'

function Temperature({items}) {
  console.log(items);
  return (
    <div className='h-100 w-60 p-4'> 
        <div className="w-full h-10  border-2 border-gray-300 shadow-lg rounded-lg bg-blue-900 text-white">
          <h1 className='text-center pt-1 font-bold'></h1>
        </div>
        <div className="w-full h-36 border-2 border-gray-300 bg-white shadow-lg rounded-lg text-center">
            <h1 className='font-bold p-2'>Temperature : </h1>
            <h1 className='font-bold '>Condition</h1>
        </div>
    </div>
  )
}

export default Temperature