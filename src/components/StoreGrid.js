import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import Pagination from './Pagination';
import usePagination from '../hook/usePagination';

//Componentes
import Card from './Card';
import { CardHistory } from './CardHistory';

export const StoreGrid = ({ path }) => {
  const { products, historyProducts, setPath } = useContext(StoreContext);
  // console.log('products grid', products[0]?.createDate);
  // console.log('id', id);

  // console.log('ANTES');

  let data = [];
  setPath(path);
  if (path === 'history') {
    data = historyProducts;
  } else {
    data = products;
  }
  const { slicedData, slicedDataTemp, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage: 16, data });
  // console.log('slicedData', slicedData);

  // console.log('DESPUES');
  // const { slicedData, slicedDataTemp, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage: 16, data:products });

  // console.log('ENTROOO', products);
  // console.log('ENTROOOhistoryProducts', historyProducts);
  // console.log('ENTROOO', data);
  // console.log('redeem', redeem);
  // console.log('slicedDataTemp', slicedDataTemp);

  return (
    <div>
      {!path ? (
        <div className="container">
          <div className="row">
            {(slicedData.length ? slicedData : slicedDataTemp).map((element, index) => (
              <div className="col-sm-12 col-md-3 mb-4" key={index}>
                <Card {...element} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            {(slicedData.length ? slicedData : slicedDataTemp).map((element, index) => (
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
