import React from 'react'

function SearchFunction({handleOnClick}) {
  return (
    <div className='p-2'>
        <h1 className='font-bold'>Search Your City.....</h1>
        <div>
            <input className='rounded-md' type="text" />
            <button
            className='bg-blue-800 rounded-md m-2 font-semibold'
            onClick={handleOnClick}>
            Search</button>
        </div>
    </div>
  )
}

export default SearchFunction