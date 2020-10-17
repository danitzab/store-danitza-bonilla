import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

// Components
import { StoreGrid } from '../components/StoreGrid';

export const Home = () => {
  const { getProductStore, products } = useContext(StoreContext);

  useEffect(() => {
    getProductStore();
  }, []);

  return (
    <div className="container">
      <StoreGrid data={products} />
      <br />
    </div>
  );
};
