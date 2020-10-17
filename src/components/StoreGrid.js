import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import Pagination from './Pagination';
import usePagination from '../hook/usePagination';

//Components
import Card from './Card';
import { CardHistory } from './CardHistory';

export const StoreGrid = ({ path }) => {
  const { products, loading, historyProducts, setPath, sortPrice } = useContext(StoreContext);

  useEffect(() => {
    setPath(path);
  }, [path]);

  let data = [];

  if (path === '/history') {
    data = historyProducts;
  } else {
    data = products;
  }
  if (sortPrice === 'ASC') {
    data = data.sort((a, b) => a.cost - b.cost);
  } else {
    data = data.sort((a, b) => b.cost - a.cost);
  }

  const { slicedData, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage: 16, data });

  if (loading) {
    return (
      <div className="container-fluid">
        <img src="https://en-coloradosprings.com/wp-content/themes/geocrafttheme-v2/images/ajax_loader.gif" alt="loading" />
      </div>
    );
  }

  return (
    <div>
      {!path ? (
        <div className="container">
          <div className="row">
            {slicedData.map((element, index) => (
              <div className="col-sm-12 col-md-3 mb-4" key={index}>
                <Card {...element} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {slicedData?.map((element, index) => (
              <div className="col-sm-12 col-md-6 mb-4" key={index}>
                <CardHistory {...element} />
              </div>
            ))}
          </div>
        </div>
      )}
      <br />
      <Pagination pagination={pagination} prevPage={prevPage} nextPage={nextPage} changePage={changePage} />
    </div>
  );
};
