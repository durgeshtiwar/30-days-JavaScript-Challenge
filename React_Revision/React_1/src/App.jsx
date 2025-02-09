import './App.css'
import UserCard from './components/UserCard'
import images from './assets/image.jpg'
import Counter from './components/Counter'
import { useState } from 'react'
import ChangeColor from './components/ChangeColor'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  function handleColor()
  {
    let var_1 =  Math.floor(Math.random() * 100) + 1;
    let var_2 =  Math.floor(Math.random() * 100) + 1;
    let var_3 =  Math.floor(Math.random() * 100) + 1;
    let container = document.querySelector(".container");
    container.style.backgroundColor = `rgb(${var_1}, ${var_2}, ${var_3})`;
  }


  return (
    <div className='container'>
      {/* <UserCard name="Shubham Tiwari" img={images}/> */}
      <Counter handleClick = {handleClick}>
      <h3>You Have Clicked {count} Times</h3>
      </Counter>
      <ChangeColor handleColor={handleColor}/>
      
    </div>
  )
}

export default App
