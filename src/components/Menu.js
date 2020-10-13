import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
import { NavLink } from 'react-router-dom';

// Components
// import { History } from './History';

// Icon
import coin from '../assets/icons/coin.svg';
// import arrow from '../assets/icons/arrow-right.svg';
// import arrow1 from '../assets/icons/arrow-left.svg';

export const Menu = () => {
  const { categories, getProductStore, addPoints, getHistory, historyProducts, setHistoryProducts } = useContext(StoreContext);

  const handleClickGetCategories = (e) => {
    const id = e.target.id;
    getProductStore(id);
    getHistory(id);
  };

  const handleAddPoints = (e) => {
    const value = e.target.id;
    addPoints(parseInt(value));
  };

  // const handleGetHistoryAll = () => {
  //   setHistoryProducts(historyProducts);
  //   getHistory();
  // };

  // const handleGetHistoryMostRecent = () => {
  //   // const valueLabel = e.target.id;
  //   setHistoryProducts(historyProducts.slice(0, 16));
  // };

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
            <li className="nav-item dropdown">
              <span
                className="nav-links dropdown-toggle br mr-auto"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorías
              </span>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <label name="item" className="dropdown-item" href="#" onClick={() => getProductStore()}>
                  Ver todos
                </label>
                {categories.map((element, i) => (
                  <label name="item" id={element} className="dropdown-item" href="#" key={i} onClick={handleClickGetCategories}>
                    {element}
                  </label>
                ))}
              </div>
            </li>
            <li className="nav-item ml-3">
              <NavLink to="/history">
                <label className="nav-links">Historial de Canjes</label>
              </NavLink>
            </li>
            {/* <li className="nav-item ml-3 text-white">
              <label className="nav-link">Mas reciente</label>
            </li>
            <li className="nav-item ml-3 text-white">
              <label className="nav-link">Todos</label>
            </li> */}
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
                {/* <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">
                    Cerrar
                  </button>
                  <button type="button" className="btn btn-primary"onChange={addPoints}>
                    Agregar
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          {/* <form className="form-inline my-2 my-lg-0"> */}
          {/* <label>16 of 32</label> */}
          {/* <a href="#" className="mr-3">
              <img src={arrow1} alt="arrow-left" value="arrow" />
            </a>
            <a href="#" className="mr">
              <img src={arrow} alt="arrow-left" value="arrow" />
            </a> */}
          {/* </form> */}
        </div>
      </nav>
    </div>
  );
};
