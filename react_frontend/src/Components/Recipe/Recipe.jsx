import React, { useEffect, useState } from "react";
import './Recipe.css';
import { useLocation } from 'react-router-dom';
import Loader from '../loader/loader'

const Recipe = () => {
    const location = useLocation();
    const recipe_id = location.state?.recipe_id;
    const [recipe, setRecipeData] = useState(null);

    useEffect(() => {
        if (recipe_id) {
            fetch(`http://django-env.eba-ehdx2drn.us-east-1.elasticbeanstalk.com/api/recipe/${recipe_id}/`)
                .then(response => response.json())
                .then(data => {
                    setRecipeData(data);
                })
                .catch(error => console.log(error));
        }
    }, [recipe_id]); // Fetch data when recipe_id changes



    return (
        <div className="recipe-container">
            {recipe != null ? (
                <div className="recipe">
                    <div className="image" style={{ backgroundImage: `url(${recipe.image})` }}></div>
                    <h1>{recipe.recipe_name}</h1>
                    <div className="cuisine">
                        {
                            recipe.cuisine.map((cuisineItem, index) => (
                                <span key={index} className="cuisine-item bold">
                                    {cuisineItem}
                                </span>
                            ))
                        }
                    </div>
                    <div className="recipe-info">
                        <div className="prep-time">Prep time : {recipe.prep_time}</div>
                        <div className="serving">Servers: {recipe.serves}</div>
                    </div>
                    <div className="detail-container">
                        <div className="title bolder">Ingredients</div>
                        <ul>


                            {
                                recipe.ingredients.map((item, index) => (
                                    <li>
                                        <p key={index} className="ingridient-item">
                                            {item}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <br />
                        <div className="title bolder">Instructions</div>
                        <ul>


                            {
                                recipe.cooking_method.map((item, index) => (
                                    <li>
                                        <p key={index} className="method-item">
                                            {item}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            ) : (
                <Loader />
            )}
        </div>
    );
}

export default Recipe;
