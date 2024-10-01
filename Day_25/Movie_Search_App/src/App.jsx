import { useEffect, useState } from 'react'
import './App.css'
import MovieData from './components/MovieData';
import Header from './components/Header';

function App() {
  const [data, setData] = useState('');
  const fetchData = async() =>{
    const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=e4eec3b9e98b29bd2caac3c5edcbbea5");
    const responseData = await response.json();
    setData(responseData.results);
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div>
    <div>
    <Header/>
    </div>
    <div className='p-4'>
    <MovieData data={data} />
    </div>
    </div>
  )
}
export default App
