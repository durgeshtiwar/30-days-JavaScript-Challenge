import './App.css'
import UserCard from './components/UserCard'
import images from './assets/image.jpg'

function App() {
  return (
    <div className='container'>
      <UserCard name="Durgseh Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
      <UserCard name="Shubham Tiwari" img={images}/>
    </div>
  )
}

export default App
