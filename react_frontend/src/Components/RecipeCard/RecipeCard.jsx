import * as React from "react";
import './RecipeCard.css';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe_id: recipe.id } });
    };

    const cuisines = Array.isArray(recipe.cuisine)
        ? recipe.cuisine
        : recipe.cuisine.split(',').map(c => c.trim());

    return (
        <div className="rc-card" onClick={handleClick}>
            <div className="rc-image-wrap">
                <div className="rc-image" style={{ backgroundImage: `url(${recipe.image})` }} />
            </div>
            <div className="rc-body">
                <div className="rc-cuisine-row">
                    {cuisines.map((c, i) => (
                        <span key={i} className="rc-cuisine">{c}</span>
                    ))}
                </div>
                <div className="rc-name">{recipe.recipe_name}</div>
                <div className="rc-meta">
                    <span>{recipe.prep_time}</span>
                    <span className="rc-dot" />
                    <span>Serves {recipe.serves}</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
