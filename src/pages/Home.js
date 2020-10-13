import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

import { StoreGrid } from '../components/StoreGrid';

export const Home = () => {
  const { getProductStore } = useContext(StoreContext);

  useEffect(() => {
    getProductStore();
    console.log('ENTRO HOME' );
  }, []);

  return (
    <div className="container">
      <StoreGrid />
      <br />
    </div>
  );
};
