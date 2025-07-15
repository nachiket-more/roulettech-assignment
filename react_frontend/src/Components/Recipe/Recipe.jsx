import React, { useEffect, useState } from "react";
import './Recipe.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../loader/loader';

const Recipe = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const recipe_id = location.state?.recipe_id;
    const [recipe, setRecipeData] = useState(null);

    useEffect(() => {
        if (recipe_id) {
            fetch(`${process.env.REACT_APP_API_URL}/api/recipe/${recipe_id}/`)
                .then(response => response.json())
                .then(data => setRecipeData(data))
                .catch(error => console.log(error));
        }
    }, [recipe_id]);

    if (!recipe) {
        return <div className="rp-loader-wrap"><Loader /></div>;
    }

    const tags = typeof recipe.tags === 'string'
        ? recipe.tags.split(',').map(t => t.trim())
        : recipe.tags || [];

    return (
        <div className="rp-container">

            {/* Back button */}
            <div className="rp-back-bar">
                <div className="rp-back-inner">
                    <button className="rp-back" onClick={() => navigate(-1)}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                        Back to recipes
                    </button>
                </div>
            </div>

            {/* Hero card */}
            <div className="rp-hero-wrap">
                <div className="rp-hero-card">

                    {/* Circular image */}
                    <div className="rp-circle-image-wrap">
                        <div
                            className="rp-circle-image"
                            style={{ backgroundImage: `url(${recipe.image})` }}
                        />
                    </div>

                    {/* Title */}
                    <h1 className="rp-title">{recipe.recipe_name}</h1>

                    {/* Cuisine tags */}
                    <div className="rp-cuisine-row">
                        {recipe.cuisine.map((c, i) => (
                            <span key={i} className="rp-cuisine-tag">{c}</span>
                        ))}
                    </div>

                    {/* Gold divider */}
                    <div className="rp-gold-divider" />

                    {/* Meta row */}
                    <div className="rp-meta-row">
                        <div className="rp-meta-item">
                            <span className="rp-meta-label">Prep Time</span>
                            <span className="rp-meta-value">{recipe.prep_time}</span>
                        </div>
                        <div className="rp-meta-divider" />
                        <div className="rp-meta-item">
                            <span className="rp-meta-label">Serves</span>
                            <span className="rp-meta-value">{recipe.serves}</span>
                        </div>
                        <div className="rp-meta-divider" />
                        <div className="rp-meta-item">
                            <span className="rp-meta-label">Ingredients</span>
                            <span className="rp-meta-value">{recipe.ingredients.length} items</span>
                        </div>
                        <div className="rp-meta-divider" />
                        <div className="rp-meta-item">
                            <span className="rp-meta-label">Steps</span>
                            <span className="rp-meta-value">{recipe.cooking_method.length} steps</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Body */}
            <div className="rp-body">

                {/* Left: ingredients + tags */}
                <div className="rp-left">
                    <div className="rp-section-label">Ingredients</div>
                    <ul className="rp-ingredients">
                        {recipe.ingredients.map((item, i) => (
                            <li key={i} className="rp-ingredient">
                                <span className="rp-ingredient-dot" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {tags.length > 0 && (
                        <div className="rp-tags-block">
                            <div className="rp-section-label">Tags</div>
                            <div className="rp-tags">
                                {tags.map((tag, i) => (
                                    <span key={i} className="rp-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right: instructions */}
                <div className="rp-right">
                    <div className="rp-section-label">Instructions</div>
                    <ol className="rp-steps">
                        {recipe.cooking_method.map((step, i) => (
                            <li key={i} className="rp-step">
                                <span className="rp-step-num">{i + 1}</span>
                                <p className="rp-step-text">{step}</p>
                            </li>
                        ))}
                    </ol>
                </div>

            </div>
        </div>
    );
};

export default Recipe;