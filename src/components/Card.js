import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';

//Icons
import buyWhite from '../assets/icons/buy-white.svg';
import buy from '../assets/icons/buy-blue.svg';
import coin from '../assets/icons/coin.svg';

const Card = ({ img, name, category, cost, _id }) => {
  const { user, postRedeem } = useContext(StoreContext);

  return (
    <div className="card mt-4 h-100 mx-auto justify-content-center">
      {user.points >= cost ? (
        <>
          <img src={buy} alt="icon-buy" className="mt-2 ml-auto p-3" />
          <span className="card-overlay">
            <img className="icon" src={buyWhite} alt="icon-buy" />
            <div className="row col-auto">
              <span className="card-comments text-center">
                {cost} <img src={coin} alt="coin" />
              </span>
              <button className="card-likes btn btn-light" onClick={() => postRedeem(_id)}>
                Redimir ahora
              </button>
            </div>
          </span>
        </>
      ) : (
        <label className="btn btn-secondary icon-con">
          Te falta {cost}
          <img src={coin} alt="coin" />
        </label>
      )}

      {img.url ? (
        <img src={img.url} className="card-img-top mb-2" alt={name} />
      ) : (
        <img src="https://media2.giphy.com/media/3zhxq2ttgN6rEw8SDx/giphy.gif" className="card-img-top" alt="img-not-found" />
      )}
      <div className="card-body">
        <p className="card-text mb-0">
          <small className="text-muted">{category}</small>
        </p>
        <h5 className="card-title mb-1">{name}</h5>
      </div>
    </div>
  );
};

export default Card;
