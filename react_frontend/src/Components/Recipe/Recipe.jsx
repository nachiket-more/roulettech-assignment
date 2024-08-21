import * as React from "react";
import RecipeCard from '../RecipeCard/RecipeCard'
import './Recipe.css'

const Recipe = () => {
    const [recipeData, setRecipeData] = React.useState({})

    React.useEffect(() => {
        fetch('http://recipe-django-env.eba-udmkdzi6.us-east-1.elasticbeanstalk.com/api/recipes')
        .then(response => response.json())
        .then(data => {
            setRecipeData(data)
            console.log(data)
        })
        .catch(error => console.log(error))
    },[])

    return (
        <div className="recipe-container">
            <div className="recipe-list">
                {Object.keys(recipeData).length > 0 ? (
                    <RecipeCard data={recipeData} />
                ) : (
                    <p>No recipe data available.</p>
                )}
            </div>
        </div>
    );
}


export default Recipe;