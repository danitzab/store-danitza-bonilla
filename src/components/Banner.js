import React, { useContext } from 'react';
import header from '../assets/header-x1.png';

import { StoreContext } from '../contexts/StoreContextProvider';

export const Banner = () => {
  const { getProductStore } = useContext(StoreContext);

  return (
    <div>
      <label className="card-titles" onClick={() => getProductStore()}>
        Electronic
      </label>
      <img className="img-fluid card-img" src={header} alt="header" />
    </div>
  );
};
