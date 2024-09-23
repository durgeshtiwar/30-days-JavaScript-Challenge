import React from 'react'

function Temperature() {
    const findWeather = async()=>{
    const responce = await fetch("https://api.weatherapi.com/v1/current.json?key=b16ce6c940c14817a26113929242309&q=India")
    const data = await responce.json();
    console.log(data["location"]);
    console.log(data.current.temp_c);
    }
    //console.log(findWeather());
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