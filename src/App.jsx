import { useState } from 'react'
import Search from './Components/Search'
import FoodList from './Components/FoodList';
import Nav from './Components/Nav';
import "./App.css"
import Container from './Components/Container';
import InnerContainer from './Components/InnerContainer';


function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <div className="App">
      <Nav />
     <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer> 
        <FoodList foodData={foodData}  />
        </InnerContainer>
      
      </Container>
    
    </div>
  )
}

export default App
