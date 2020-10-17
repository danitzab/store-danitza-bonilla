import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

// Components
import { StoreGrid } from '../components/StoreGrid';

export const History = ({ match }) => {
  const { getHistory, historyProducts } = useContext(StoreContext);

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="container">
      <StoreGrid path={match.path} data={historyProducts} />
      <br />
    </div>
  );
};
