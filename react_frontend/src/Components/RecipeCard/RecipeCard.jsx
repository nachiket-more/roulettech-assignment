import *  as React from "react";
import './RecipeCard.css';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const RecipeCard = ({ recipe }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`, { state: { recipe_id: recipe.id } });
    };

    return (
        <div className="recipe-card" onClick={handleClick}>
            <div className="picture" style={{ backgroundImage: `url(${recipe.image})` }}>
            </div>
            <div className="info-section">
                <div className="info">
                    <div className="prep-time medium">prep time: {recipe.prep_time}</div>
                </div>
                <div className="name bold">{recipe.recipe_name}</div>
            </div>
        </div>
    );
};

export default RecipeCard;
