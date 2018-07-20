import React from 'react';

import { Link } from 'react-router-dom';


const Recipes = props => (
  <div className="recipe-list">
  {props.recipes &&
     props.recipes.map((recipe) => {
      return (
        <div className="recipe-card card" key={recipe.recipe_id}>
          <img className="card-img-top" src={recipe.image_url} alt={`${recipe.title} by ${recipe.publisher}`} />
          <p className="card-title">
            { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 20)}...` }
          </p>
          
          <div className="card-content">
            <p className="card-publisher">By: <span>{ recipe.publisher }</span></p>
              <Link to={{
                pathname: `${`${process.env.PUBLIC_URL}/recipe/${recipe.recipe_id}`}`, 
                state: { recipe: recipe.title }
              }} >
                <button className="btn">
                  View Recipe
                </button>
              </Link>

          </div>
        </div>
      );
    }) }
  </div>
);

export default Recipes;
