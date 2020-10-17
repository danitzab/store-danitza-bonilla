import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import { NavLink } from 'react-router-dom';

// Components
import { Banner } from './Banner';
import { Filter } from './Filter';

//Icons
import coin from '../assets/icons/coin.svg';
import logo from '../assets/aerolab-logo.svg';

export const Header = () => {
  const { user, getProductStore } = useContext(StoreContext);

  return (
    <div>
      <nav className="navbar navbar-position bg-white">
        <label className="navbar-brand">
          <NavLink to="/">
            <img src={logo} alt="aerolab-logo" onClick={() => getProductStore()} />
          </NavLink>
        </label>
        <form className="form-inline">
          <label className="form-control mr-sm-2 font-weight-bold text-info">{user.name}</label>
          <label className="btn-gray my-2 my-sm-0">
            {user.points} <img src={coin} alt="coin" />
          </label>
        </form>
      </nav>
      <Banner />
      <Filter />
    </div>
  );
};
