import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

//Componenetes
import Card from './Card';

export const StoreGrid = () => {
  const { products } = useContext(StoreContext);
//   console.log('product', products);

  //   useEffect(() => {
  //     getProductStore();
  //   }, []);

  return (
    <div className="container">
      <div className="card-deck">
        <div className="row">
          {products.map((element, index) => (
            <Card key={index} {...element} />
          ))}
        </div>
      </div>
    </div>
  );
};
