import * as React from "react";
import './RecipeCard.css'

const RecipeCard = ({data}) => {
    return (
        <div className="recipe-card">
            <div className="picture" style={{ backgroundImage: `url(${data.image})` }}>
            </div>
            <div className="info-section">        
                <div className="info">
                    <div className="cuisine">{data.cuisine}</div>
                    <div className="prep-time">{data.prep_time}</div>
                </div>
            <div className="name">{data.recipe_name}</div></div>
    
        </div>
    );
}

export default RecipeCard;