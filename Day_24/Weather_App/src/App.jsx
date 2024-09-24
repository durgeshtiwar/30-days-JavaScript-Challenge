import { useEffect, useState } from 'react'
import './App.css'
import Temperature from './components/Temperature'

function App() {  
    const [data, setData] = useState();
    const findWeather = async() =>{
    try {
      const responce = await fetch("https://api.weatherapi.com/v1/current.json?key=b16ce6c940c14817a26113929242309&q=surat")
      const items = await responce.json();
      const result = [items];
      setData(result);
    } catch (error) {
      console.log(error.message);
    }}
    useEffect(()=>{
      findWeather();
    },[]);
    return (
      <>
      <h1 className='text-center text-3xl font-bold'>Weather App
      </h1>
      <Temperature data = {data}/>
      </>
  )}
export default App