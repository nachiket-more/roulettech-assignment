import * as React from "react";
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeList.css'
import Loader from '../loader/loader'

const RecipeList = () => {
    const [recipeList, setRecipeList] = React.useState([]);

    React.useEffect(() => {
        fetch('http://django-env.eba-ehdx2drn.us-east-1.elasticbeanstalk.com/api/recipes/')
            .then(response => response.json())
            .then(data => {
                setRecipeList(data);
            })
            .catch(error => console.log(error));

        
    }, []);

    return (
        <div className="recipe-list-container">
            <div className="recipe-header">
                <div className="content">
                    <div className="heading bold">Quick and Easy Recipes</div>
                    <div className="sub-heading">There's no time! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!</div>
                </div>

            </div>
            <div className="recipe-list">
                <div className="content">
                {recipeList.length > 0 ? (
                    recipeList.map((recipe, index) => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))
                ) : (
                    <Loader />
                )}
                </div>
            </div>
        </div>
    );
}

export default RecipeList;