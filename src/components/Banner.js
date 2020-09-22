import React from 'react';
import header from '../assets/header-x1.png';

export const Banner = () => {
  return (
    <div>
      <h1 className="card-title">Electronic</h1>
      <img className="img-fluid card-img" src={header} alt="header" />
    </div>
  );
};
