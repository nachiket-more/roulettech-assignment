import * as React from "react";
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'

const RecipeList = () => {
    const [recipeList, setRecipeList] = React.useState([]);

    React.useEffect(() => {
        fetch('http://recipe-django-env.eba-udmkdzi6.us-east-1.elasticbeanstalk.com/api/recipes/')
            .then(response => response.json())
            .then(data => {
                setRecipeList(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="recipe-list-container">
            <div className="recipe-list">
                {recipeList.length > 0 ? (
                    recipeList.map((recipe, index) => (
                        <RecipeCard key={index} data={recipe} />
                    ))
                ) : (
                    <p>No recipe data available.</p>
                )}
            </div>
        </div>
    );
}

export default RecipeList;