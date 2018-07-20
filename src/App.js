import React, { Component } from 'react';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Footer from './components/Footer';

import './App.css';


const API_KEY = 'fb4272eb6a308d82167dfdd90b332374';

class App extends Component {
  state = {
    recipes: [],

  }

  getRecipe = async (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    const numberSelected = e.target.elements.numberSelected.value;
      //put this infront of "No 'Access-Control-Allow-Origin' header" errors
      //http://cors-anywhere.herokuapp.com/
      const API_CALL = await fetch(`http://food2fork.com/api/search?key=${API_KEY}&q=${searchTerm}&count=${numberSelected}`);
      const API_RESULT = await API_CALL.json();
      this.setState({ recipes: API_RESULT.recipes });
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    console.log(recipes);
    this.setState({ recipes });
  }
  
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  


  render() {
    return (
      <div className="App">
         <header className="App-header">
           <h1 className="App-title">Recipe Search</h1>
         </header>
         <Form getRecipe={this.getRecipe} />
         <div className="card-columns">
         <Recipes recipes={this.state.recipes}/>
         </div>
         <Footer />
      </div>
    );
  }
}

export default App;
