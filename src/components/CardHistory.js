import React from 'react';

// Icon
import coin from '../assets/icons/coin.svg';

export const CardHistory = ({ img, name, category, cost, count }) => {
  return (
    <div className="mt-4 h-100 mx-auto justify-content-center">
      <div className="card ">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              {img.url ? (
                <img
                  className="card-img-top"
                  src={img.url.replace('https://aerolab-challenge.now.sh/', 'https://coding-challenge-api.aerolab.co/')}
                  alt={name}
                />
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
              <h5 className="card-text">
                <img className="width-img mr-2" src={coin} alt="dolar" />
                {cost}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
