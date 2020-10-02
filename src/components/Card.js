import React from 'react';

//Icon
import buy from '../assets/icons/buy-blue.svg';
import buyWhite from '../assets/icons/buy-white.svg';
import coin from '../assets/icons/coin.svg';

const Card = ({ img, name, category, cost }) => {
  return (
    <div className="col-sm-12 col-md-3 mb-4">
      <div className="card mt-4 h-100 mx-auto justify-content-center">
        <img src={buy} alt="icon-comprar" className="mt-2 ml-auto p-3" />
        {img.url ? (
          <img src={img.url} className="card-img-top mb-2" alt={name} />
        ) : (
          <img src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif" className="card-img-top" alt="img-not-found" />
        )}
        <span className="card-overlay">
          <img src={buyWhite} alt="icon-comprar" className="icon" />
          <div className="row col-auto">
            <span className="card-comments text-center">
              {cost} <img src={coin} alt="coin" />
            </span>
            <button className="card-likes btn btn-light">Redimir ahora</button>
          </div>
        </span>
        <div className="card-body">
          <p className="card-text mb-0">
            <small className="text-muted">{category}</small>
          </p>

          <h5 className="card-title mb-1">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
