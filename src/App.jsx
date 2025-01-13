import { useState } from 'react'
import Search from './Components/Search'
import FoodList from './Components/FoodList';



function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
     <Search foodData={foodData} setFoodData={setFoodData} />

     <FoodList foodData={foodData}  />
    </div>
  )
}

export default App
