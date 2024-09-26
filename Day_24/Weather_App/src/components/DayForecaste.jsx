import React from 'react'
import Temperature from './Temperature'

function DayForecaste({data}) {
  return (
    <center className='flex flex-wrap pl-6'>
        <Temperature data={data} />
        <Temperature data={data} />
        <Temperature data={data} />
        <Temperature data={data} />
        <Temperature data={data} />
    </center>
  )
}

export default DayForecaste