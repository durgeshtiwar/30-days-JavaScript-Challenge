import React from 'react'

function Temperature() {
    const findWeather = async()=>{
        const url = 'https://www.visualcrossing.com/weather-api'
        const responce = await fetch(url);
        const data = await responce.json();
        console.log(data.posts[0]);
    }
    findWeather();
  return (
    <div className='h-100 w-60 p-4  bg-green-200'> 
        <div className="w-full h-10 p-4   border-2 border-gray-300 bg-white shadow-lg rounded-lg">
            <h1>City Name</h1>
        </div>
        <div className="w-full h-40 p-4  border-2 border-gray-300 bg-white shadow-lg rounded-lg">
            <h1>Temperature</h1>
            <h1>Condition</h1>
        </div>
    </div>
  )
}

export default Temperature