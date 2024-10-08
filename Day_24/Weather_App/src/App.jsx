import { useEffect, useState } from 'react'
import './App.css'
import Temperature from './components/Temperature'
import SearchFunction from './components/SearchFunction';
import DayForecaste from './components/DayForecaste';

function App() {  
    const [data, setData] = useState();
    const [cityName, setCityName] = useState("delhi");
    let temp = '';
    const handleOnchange = (e) => {
      temp = e.target.value;
    }
    const handleOnClick = () =>{
      setCityName(temp);
    }
    const findWeather = async() =>{
    try {
      const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=b16ce6c940c14817a26113929242309&q=${cityName}`)
      const items = await responce.json();
      const result = [items];
      setData(result);
    } catch (error) {
      console.log(error.message);
    }}
    useEffect(()=>{
      findWeather();
    },["",cityName]);
    return (
      <center>
      <h1 className='text-center text-3xl font-bold'>Weather App
      </h1>
      <SearchFunction 
      handleOnClick={handleOnClick}
      handleOnchange = {handleOnchange}
      />
      <Temperature data = {data}/>
      {/* <DayForecaste data = {data} /> */}
      </center>
  )}
export default App