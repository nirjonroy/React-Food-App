import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "86358afcba5e4d76a5c0a3f67f9dd8db";
export default function Search(){
    const [query, setQuery] = useState("Pizza");
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
        }
        fetchFood();
    }, [query])
    return(
        <div>
            <input type="text" placeholder="Search"  value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
    )
}