import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (
  <div className="errorPage">
    <h1>Page Not Found!</h1>
    <Link className="home-link" to={`${process.env.PUBLIC_URL}/`}>
      <button className="btn btn-secondary">
        Go Home
      </button>
    </Link>
  </div>
)

export default Error;