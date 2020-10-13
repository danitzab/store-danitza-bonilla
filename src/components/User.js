import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import { NavLink } from 'react-router-dom';

// import * as StoreService from '../services/StoreService';

//Icons
import coin from '../assets/icons/coin.svg';
import logo from '../assets/aerolab-logo.svg';

export const User = () => {
  const { user, getProductStore } = useContext(StoreContext);

  return (
    <div>
      <nav className="navbar navbar-white justify-content-between">
        <label className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="aerolab-logo" onClick={() => getProductStore()} />
          </NavLink>
        </label>
        <form className="form-inline">
          <label className="form-control mr-sm-2">{user.name}</label>
          <label className="btn-gray my-2 my-sm-0">
            {user.points} <img src={coin} alt="coin" />
          </label>
        </form>
      </nav>
    </div>
  );
};
