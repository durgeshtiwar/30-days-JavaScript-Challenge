import './App.css'
import Temperature from './components/Temperature'

function App() {  
    let items = null;
    const findWeather = async()=>{
    try {
      const responce = await fetch("https://api.weatherapi.com/v1/current.json?key=b16ce6c940c14817a26113929242309&q=India")
      const data = await responce.json();
      const assignData = () =>
      {
        items = data;
      }
      assignData();
      
    } catch (error) {
      console.log(error.message);
    }}
    findWeather();
    console.log(items)
    return (
    <>
    <Temperature items ={items} />
    </>
  )
}

export default App
