import React, { useEffect, useState } from "react";
import './Recipe.css';
import { useLocation } from 'react-router-dom';
import Loader from '../loader/loader'

const Recipe = () => {
    const location = useLocation();
    const recipe_id = location.state?.recipe_id;
    const [recipe, setRecipeData] = useState(null); // Initialize with null

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

        // <img src={recipe.image} alt={recipe.recipe_name} style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }} />

        //     <div>
        //         <strong>Prep Time:</strong> {recipe.prep_time}
        //     </div>

        //     <div>
        //         <strong>Serves:</strong> {recipe.serves}
        //     </div>

        //     <div>
        //         <strong>Cuisine:</strong>
        //         <ul>
        //             {recipe.cuisine.map((cuisine, index) => (
        //                 <li key={index}>{cuisine}</li>
        //             ))}
        //         </ul>
        //     </div>

        //     <div>
        //         <strong>Ingredients:</strong>
        //         <ul>
        //             {recipe.ingredients.map((ingredient, index) => (
        //                 <li key={index}>{ingredient}</li>
        //             ))}
        //         </ul>
        //     </div>

        //     <div>
        //         <strong>Cooking Method:</strong>
        //         <ol>
        //             {recipe.cooking_method.map((step, index) => (
        //                 <li key={index}>{step}</li>
        //             ))}
        //         </ol>
        //     </div>

        //     <div>
        //         <strong>Tags:</strong>
        //         <ul>
        //             {recipe.tags.map((tag, index) => (
        //                 <li key={index}>{tag}</li>
        //             ))}
        //         </ul>
        //     </div> *
        // </div>
    );
}

export default Recipe;
