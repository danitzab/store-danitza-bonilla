import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

import { StoreGrid } from '../components/StoreGrid';
// import Notification from '../components/toast/Notification';
import { useToasts } from 'react-toast-notifications';

export const Home = () => {
  const { getProductStore, products } = useContext(StoreContext);
  const { addToast } = useToasts();

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
