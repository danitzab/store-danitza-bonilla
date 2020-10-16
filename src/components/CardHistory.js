import React from 'react';
// import { StoreContext } from '../contexts/StoreContextProvider';

export const CardHistory = ({ img, name, category, cost, count }) => {
  // const { countProducts } = useContext(StoreContext);
  // console.log('countProducts', countProducts);

  return (
    <div className="mt-4 h-100 mx-auto justify-content-center">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              {img.url ? (
                <img className="card-img-top" src={img.url} alt={name} />
              ) : (
                <img src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif" className="card-img-top" alt="img-not-found" />
              )}
            </div>
            <div className="col-8">
              <label type="button" className="btn btn-primary ml-auto">
                # Canjes <span className="badge badge-light">{count}</span>
              </label>
              <p className="card-text">{category}</p>
              <h5 className="card-title justify-content-center">{name}</h5>
              <h5 className="card-text">Us {cost}</h5>

              {/* <label type="button" className="btn btn-primary">
                # Canjes <span className="badge badge-light">{count}</span>
              </label> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
