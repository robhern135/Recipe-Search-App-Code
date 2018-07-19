import React from 'react'

const Form = props => (
    <form className="navForm" onSubmit={props.getRecipe}>
      <input
        type="text"
        name="searchTerm"
      />
      <select name="numberSelected">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="5000">All</option>
      </select>
      <button className="form-button">Search</button>
    </form>
);

export default Form;