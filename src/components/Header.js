import React from 'react';
import coin from '../assets/icons/coin.svg';
import logo from '../assets/aerolab-logo.svg';
import { Banner } from './Banner';

export const Header = () => {
  return (
    <div>
      <div>
      <img src={logo} alt="aerolab-logo" />
        <label>
          Usuario{' '}
          <label>
            puntos
            <img src={coin} alt="coin" />
          </label>
        </label>
        <Banner />
      </div>
    </div>
  );
};
