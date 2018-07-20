import React, { Component } from 'react'
import './Recipe.css';

import { Link } from 'react-router-dom';

const API_KEY = 'fb4272eb6a308d82167dfdd90b332374';



class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const recipeTitle = this.props.location.state.recipe;
      //put this infront of "No 'Access-Control-Allow-Origin' header" errors
      //http://cors-anywhere.herokuapp.com/
      const RECIPE_API_CALL = await fetch (`http://food2fork.com/api/search?key=${API_KEY}&q=${recipeTitle}`);
      const RECIPE_API_RESULT = await RECIPE_API_CALL.json();
    this.setState({ activeRecipe: RECIPE_API_RESULT.recipes[0]});
  }
  render() {
      const currentRecipe= this.state.activeRecipe;
    return (
        <div className="Recipe">
        {
          this.state.activeRecipe.length  !== 0 &&
            <div className="single-recipe">
              <div className="single-recipe-card card text-center">
                <div className="card-header">
                  by <a href={currentRecipe.publisher_url} target="_blank">
                    {currentRecipe.publisher}
                  </a>
                </div>
                <div className="card-body single-recipe-body">
                  <img className="card-img-top" src={currentRecipe.image_url} alt={`${currentRecipe.title} by ${currentRecipe.publisher}`} />
                  <h5 className="card-title">{currentRecipe.title}</h5>
                  <p className="card-text">< a href={currentRecipe.source_url} target="_blank"><button className="btn">View Recipe</button></a></p>
                </div>
                <div className="card-footer text-muted">
                  <strong>Social Rank:</strong> {currentRecipe.social_rank}
                </div>
              </div>
              <Link className="home-link" to={`${process.env.PUBLIC_URL}/`}>
                <button className="btn btn-secondary">
                  Go Home
                </button>
              </Link>
            </div>
        }
      
      </div>
    )
  }
}

export default Recipe;
