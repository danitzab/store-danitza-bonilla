import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import { NavLink } from 'react-router-dom';

// Icon
import coin from '../assets/icons/coin.svg';
import filter from '../assets/icons/filter.svg';
import list from '../assets/icons/list.svg';
import logo from '../assets/aerolab-logo.svg';
import history from '../assets/icons/history-2.svg';

export const Menu = () => {
  const { categories, getProductStore, setSortPrice, addPoints, path } = useContext(StoreContext);

  const handleAddPoints = (e) => {
    const value = e.target.id;
    addPoints(parseInt(value));
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light bt-1">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {!path ? (
              <li className="nav-item dropdown">
                <span
                  className="nav-links dropdown-toggle br mr-auto"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="width-img mr-2" src={list} alt="list" />
                  Categorías
                </span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <label name="item" className="dropdown-item" href="#" onClick={() => getProductStore()}>
                    Ver todos
                  </label>
                  {categories.map((element, i) => (
                    <label
                      name="item"
                      id={element}
                      className="dropdown-item"
                      href="#"
                      key={i}
                      onClick={(e) => getProductStore(e.target.id)}
                    >
                      {element}
                    </label>
                  ))}
                </div>
              </li>
            ) : (
              <li className="nav-item ml-3">
                <NavLink to="/">
                  <label className="nav-links br">
                    <img className="width-img mr-2" src={logo} alt="aerolab-logo" />
                    Home
                  </label>
                </NavLink>
              </li>
            )}
            <li className="nav-item dropdown">
              <span
                className="nav-links dropdown-toggle br mr-auto ml-3"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="width-img mr-2" src={filter} alt="filter" />
                Precios
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <label name="menor a mayor" className="dropdown-item" href="#" onClick={() => setSortPrice('ASC')}>
                  Menor a mayor
                </label>
                <label name="mayor a menor" className="dropdown-item" href="#" onClick={() => setSortPrice('DESC')}>
                  Mayor a menor
                </label>
              </div>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/history">
                <label className="nav-links">
                  <img className="width-img mr-2" src={history} alt="history" />
                  Historial de Canjes
                </label>
              </NavLink>
            </li>
          </ul>
          <button type="button" className="btn btn-outline-success " data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
            Agregar puntos <img src={coin} alt="coin" />
          </button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Agrega más puntos
                  </h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <button type="button" className="btn btn-primary mr-3" id="1000" onClick={handleAddPoints}>
                        1000
                      </button>
                      <button type="button" className="btn btn-primary mr-3" id="5000" onClick={handleAddPoints}>
                        5000
                      </button>
                      <button type="button" className="btn btn-primary mr-3" id="7500" onClick={handleAddPoints}>
                        7500
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
