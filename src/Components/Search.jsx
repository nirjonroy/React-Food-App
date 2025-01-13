import { useEffect, useState } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "86358afcba5e4d76a5c0a3f67f9dd8db";
export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("Pizza");
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    }, [query])
    return(
        <div className={styles.search-container}>
            <input className={styles.input} type="text" placeholder="Search"  value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}