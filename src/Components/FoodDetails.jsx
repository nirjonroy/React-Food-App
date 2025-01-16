import { useEffect, useState } from "react";

export default function FoodDetails({foodId}){
    const [food, setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "86358afcba5e4d76a5c0a3f67f9dd8db";
    useEffect(()=>{
       async function fetchFood(){
           const res = await fetch(`${URL}?apiKey=${API_KEY}&includeNutrition=true`);
           const data = await res.json();
           console.log(data);
           setFood(data);
        }
        fetchFood();
    }, [foodId]);
    return <div>
        <h1>Food Details : {foodId}
            {food.title}
            <img src={food.image} alt="" />
        </h1>
    </div>;
}