import * as React from "react";
import RecipeCard from '../RecipeCard/RecipeCard'
import './Recipe.css'
import { useLocation } from 'react-router-dom';

const Recipe = ({data}) => {
    const location = useLocation();
    const recipe_id = location.state?.recipe_id;
    const [recipeData, setRecipeData] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://recipe-django-env.eba-udmkdzi6.us-east-1.elasticbeanstalk.com/api/recipe/${recipe_id}`)
            .then(response => response.json())
            .then(data => {
                setRecipeData(data);
                console.log(data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="recipe-container"></div>
    );
}

export default Recipe;