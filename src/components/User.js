import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
// import * as StoreService from '../services/StoreService';

//Icons
import coin from '../assets/icons/coin.svg';
import logo from '../assets/aerolab-logo.svg';

export const User = () => {
  const { user } = useContext(StoreContext);

  return (
    <div>
      <nav className="navbar navbar-light bg-light justify-content-between">
        <label className="navbar-brand">
          <img src={logo} alt="aerolab-logo" />
        </label>
        <form className="form-inline">
          <label className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            {user.name}
          </label>
          <label className="btn btn-outline-success my-2 my-sm-0">
            {user.points} <img src={coin} alt="coin" />
          </label>
        </form>
      </nav>
    </div>
  );
};
