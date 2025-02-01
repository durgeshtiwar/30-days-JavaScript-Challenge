import './App.css'
import UserCard from './components/UserCard'
import images from './assets/image.jpg'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  function handleClick(){
    setCount(count+1);
  }
  return (
    <div className='container'>
      {/* <UserCard name="Shubham Tiwari" img={images}/> */}
      <Counter handleClick = {handleClick}>
      <h3>You Have Clicked {count} Times</h3>
      </Counter>
      
    </div>
  )
}

export default App
