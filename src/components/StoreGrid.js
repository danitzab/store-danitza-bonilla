import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import Pagination from './Pagination';
import usePagination from '../hook/usePagination';

//Componentes
import Card from './Card';

export const StoreGrid = () => {
  const { products } = useContext(StoreContext);
  const { slicedData, slicedDataTemp, pagination, prevPage, nextPage, changePage } = usePagination({ itemsPerPage: 16, data: products });
  // console.log('ENTROOO', products);
  // console.log('redeem', redeem);


  return (
    <div>
      <div className="container">
        <div className="card-deck">
          <div className="row">
            {(slicedData.length ? slicedData : slicedDataTemp).map((element, index) => (
              <Card key={index} {...element} />
            ))}
          </div>
        </div>
      </div>
      <br />
      <Pagination pagination={pagination} prevPage={prevPage} nextPage={nextPage} changePage={changePage} />
    </div>
  );
};
