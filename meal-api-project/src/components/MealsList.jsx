import { useEffect, useState  } from "react";
import axios from "axios";
import "./MealsList.css";




const MealsList = () => {
    const [meals, setmeals] = useState([]);
    
    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res) => setmeals(res.data.meals));
    }, [meals]);

    const itemsList = meals.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
      <section className="card">
        <img src={strMealThumb} />
        <section className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
    })

   return <div className="items-container">{itemsList}</div>;
}

export default MealsList