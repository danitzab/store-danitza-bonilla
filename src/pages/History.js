import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

import { StoreGrid } from '../components/StoreGrid';

export const History = ({ match }) => {
  const { getHistory, products, historyProducts } = useContext(StoreContext);

  useEffect(() => {
    getHistory();
    console.log('entro getHistory');
  }, []);

  return (
    <div className="container">
      <StoreGrid id={match.params.id} data={historyProducts} />
      {/* <StoreGrid id={match.params.id} data={products} /> */}
      <br />
    </div>
  );
};
