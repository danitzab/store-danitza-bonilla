import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
// import { NavLink } from 'react-router-dom';


//Icon
import arrow from '../assets/icons/arrow-right.svg';
import arrow1 from '../assets/icons/arrow-left.svg';

export const Categories = () => {
  const { categories } = useContext(StoreContext);

  return (
    // <div>
    //   <nav className="navbar flex navbar-light light-blue lighten-4">
    //     <button
    //       className="navbar-toggler toggler-example"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent1"
    //       aria-controls="navbarSupportedContent1"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //       <p className="navbar-brand">Categorias</p>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent1">
    //       <ul className="navbar-nav mr-auto">
    //         {categories.map((element, i) => (
    //           <li className="nav-item active" key={i}>
    //             {/* <NavLink to={`/category/${element.id}`} className="nav-link" activeClassName="active"> */}
    //             <label className="nav-link">{element}</label>
    //             {/* </NavLink> */}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </nav>
    //   {/* <History /> */}
    // </div>
    <div className="container2">
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
                className="nav-link dropdown-toggle br mr-auto"
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sort by:
              </a>
            </li>
            <li className="nav-item text-white">
              <label className="nav-link btn btn-primary" href="#">
                Most recent
              </label>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Lowest price
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Highest price
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <a href="#" className="mr-3">
              <img src={arrow1} alt="arrow-left" value="arrow" />
            </a>
            <a href="#" className="mr">
              <img src={arrow} alt="arrow-left" value="arrow" />
            </a>
          </form>
        </div>
      </nav>
    </div>
  );
};
