import * as React from "react";
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';
import Loader from '../loader/loader';

const RecipeList = () => {
    const [recipeList, setRecipeList] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [activeFilter, setActiveFilter] = React.useState('All');

    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/recipes/`)
            .then(response => response.json())
            .then(data => setRecipeList(data))
            .catch(error => console.log(error));
    }, []);

    const cuisines = React.useMemo(() => {
        const all = recipeList.flatMap(r =>
            Array.isArray(r.cuisine) ? r.cuisine : r.cuisine.split(',').map(c => c.trim())
        );
        return ['All', ...new Set(all)];
    }, [recipeList]);

    const filtered = React.useMemo(() => {
        return recipeList.filter(recipe => {
            const cuisineArr = Array.isArray(recipe.cuisine)
                ? recipe.cuisine
                : recipe.cuisine.split(',').map(c => c.trim());
            const matchesCuisine = activeFilter === 'All' || cuisineArr.includes(activeFilter);
            const matchesSearch = recipe.recipe_name.toLowerCase().includes(search.toLowerCase());
            return matchesCuisine && matchesSearch;
        });
    }, [recipeList, search, activeFilter]);

    return (
        <div className="rl-container">

            {/* Hero */}
            <div className="rl-hero">
                <div className="rl-hero-inner">
                    <p className="rl-eyebrow">{recipeList.length} recipes · {cuisines.length - 1} cuisines</p>
                    <h1 className="rl-title">What are you cooking today?</h1>
                    <p className="rl-sub">There's no time! But is there ever? If you're feeling like you need something super quick and super easy, then you came to the right place. Let's get you eating, stat!</p>
                    <div className="rl-search-wrap">
                        <svg className="rl-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <input
                            className="rl-search"
                            type="text"
                            placeholder="Search recipes..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        {search && (
                            <button className="rl-search-clear" onClick={() => setSearch('')}>✕</button>
                        )}
                    </div>
                </div>
            </div>

            {/* Filters */}
            <div className="rl-filters-bar">
                <div className="rl-filters-inner">
                    {cuisines.map(c => (
                        <button
                            key={c}
                            className={`rl-pill ${activeFilter === c ? 'active' : ''}`}
                            onClick={() => setActiveFilter(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="rl-grid-outer">
                {recipeList.length === 0 ? (
                    <div className="rl-loader"><Loader /></div>
                ) : filtered.length === 0 ? (
                    <div className="rl-empty">No recipes found for "<strong>{search}</strong>"</div>
                ) : (
                    <>
                        <p className="rl-results-count">{filtered.length} recipe{filtered.length !== 1 ? 's' : ''}</p>
                        <div className="rl-grid">
                            {filtered.map((recipe, i) => (
                                <RecipeCard key={i} recipe={recipe} />
                            ))}
                        </div>
                    </>
                )}
            </div>

        </div>
    );
};

export default RecipeList;
