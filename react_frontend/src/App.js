import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RecipeList from './Components/RecipeList/RecipeList';
import Navbar from './Components/Navbar/Navbar';
import Recipe from './Components/Recipe/Recipe';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
