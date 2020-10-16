import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

import { StoreGrid } from '../components/StoreGrid';

export const History = ({ match }) => {
  const { getHistory, historyProducts } = useContext(StoreContext);

  useEffect(() => {
    getHistory();
    // console.log('entro getHistory');
  }, []);

  return (
    <div className="container">
      <StoreGrid path={match.params.id} data={historyProducts} />
      <br />
    </div>
  );
};
