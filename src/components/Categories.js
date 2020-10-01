import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
// import { NavLink } from 'react-router-dom';

//Icon
// import arrow from '../assets/icons/arrow-right.svg';
// import arrow1 from '../assets/icons/arrow-left.svg';

export const Categories = () => {
  const { categories } = useContext(StoreContext);
  console.log('categories', categories);

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
              <a
                className="nav-links dropdown-toggle br mr-auto"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Categorías
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {categories.map((element, i) => (
                  <a className="dropdown-item" href="#" key={i}>
                    {element}
                  </a>
                ))}
              </div>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-links" href="#">
                Sort by:
              </a>
            </li>
            <li className="nav-item ml-3 text-white">
              <a className="nav-link" href="#">
                Most recent
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link" href="#">
                Lowest price
              </a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link" href="#">
                Highest price
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <label>16 of 32</label>
            {/* <a href="#" className="mr-3">
              <img src={arrow1} alt="arrow-left" value="arrow" />
            </a>
            <a href="#" className="mr">
              <img src={arrow} alt="arrow-left" value="arrow" />
            </a> */}
          </form>
        </div>
      </nav>
    </div>
  );
};
