import styles from './fooddetails.module.css';
import { useEffect, useState } from "react";
import ItemList from './ItemList';

export default function FoodDetails({foodId}){
    const [food, setFood] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "86358afcba5e4d76a5c0a3f67f9dd8db";
    useEffect(()=>{
       async function fetchFood(){
           const res = await fetch(`${URL}?apiKey=${API_KEY}&includeNutrition=true`);
           const data = await res.json();
           console.log(data);
           setFood(data);
           setIsLoading(false);
        }
        fetchFood();
    }, [foodId]);
    return <div>
        <div className={styles.reciepeCard}>
        <h1 className={styles.reciepeName}> {food.title}
            
            </h1>
            <img className={styles.reciepeImage} src={food.image} alt="" />
        <div className={styles.reciepeDetails}>
        <span>
        <strong>
                ⏲️ {food.readyInMinutes}</strong>
        </span>
        <span>
            <strong>{food.servings}</strong>
         {food.vegitarian ? "🥕 Vegitarian" : "🍖 Non-Vegitarian"}
        </span>
        </div>
        <div>
            <span>{food.pricePerServing}</span>
        </div>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instracts</h2>
        <div className={styles.reciepeInctructions}>
            
            {isLoading? <p>Loading..........</p>: food.analyzedInstructions && food.analyzedInstructions[0] && food.analyzedInstructions[0].steps && food.analyzedInstructions[0].steps.map((step, index)=>(
            <li key={index}>{step.step}</li>
        ))}
       
        </div>
    </div>;
}