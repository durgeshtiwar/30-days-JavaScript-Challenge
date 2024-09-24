import React from 'react'

function Temperature({data}) {
  return (
    <div className='h-60 w-60 p-4 '> 
        <div className="w-full h-10  border-2 border-gray-300 shadow-lg rounded-lg bg-blue-900 text-white">
          <h1 className='text-center pt-1 font-bold'>{data && data.map(item => item.location.name)}</h1>
        </div>
        <div className="w-full h-44 border-2 border-gray-300 bg-white shadow-lg rounded-lg pl-3">
            <h1 className='font-bold pl-4 pt-1'>Temperature : {data && data.map(item => item.current.temp_c)}</h1>
            <h1 className='font-bold pl-7 '>Condition :{data && data.map(item=><p key={Date.now()}>{item.current.condition.text}</p>)}
            {data && data.map(item => 
              <img key={Date.now} src={`${item.current.condition.icon}`}></img>
            )}
            {data && data.map(item => item.current.condition.code)}
            </h1>
        </div>
    </div>
  )
}

export default Temperature