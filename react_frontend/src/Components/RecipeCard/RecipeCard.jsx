import * as React from "react";
import './RecipeCard.css';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ data }) => {
    const navigate = useNavigate();
  
    const handleClick = () => {
        navigate(`/recipes/${data.recipe_name}`, { state: { recipe_id: data.id } });
    };

    return (
        <div className="recipe-card" onClick={handleClick}>
            <div className="picture" style={{ backgroundImage: `url(${data.image})` }}>
            </div>
            <div className="info-section">        
                <div className="info">
                    {/* <div className="cuisine">{data.cuisine}</div> */}
                    <div className="prep-time medium">prep time: {data.prep_time}</div>
                </div>
                <div className="name bold">{data.recipe_name}</div>
            </div>
        </div>
    );
};

export default RecipeCard;
