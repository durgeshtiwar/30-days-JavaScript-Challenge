import './App.css'
import UserCard from './components/UserCard'
import images from './assets/image.jpg'
import Counter from './components/Counter'

function App() {
  return (
    <div className='container'>
      {/* <UserCard name="Shubham Tiwari" img={images}/> */}
      <Counter/>
      
    </div>
  )
}

export default App
