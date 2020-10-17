import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

// Components
import header from '../assets/header-x1.png';

export const Banner = () => {
  const { getProductStore } = useContext(StoreContext);

  return (
    <div className="d-none d-md-block">
      <label className="card-titles" onClick={() => getProductStore()}>
        Electronic
      </label>
      <img className="img-fluid card-img" src={header} alt="header" />
    </div>
  );
};
