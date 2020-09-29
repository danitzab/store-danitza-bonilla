import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreContextProvider';
// import { NavLink } from 'react-router-dom';

// Componetes
// import { History } from './History';

export const Categories = () => {
  const { categories } = useContext(StoreContext);

  // useEffect(() => {
  //   getCategory();
  // }, []);

  return (
    <div>
      <nav className="navbar flex navbar-light light-blue lighten-4">
        <button
          className="navbar-toggler toggler-example"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <p className="navbar-brand">Categorias</p>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent1">
          <ul className="navbar-nav mr-auto">
            {categories.map((element, i) => (
              <li className="nav-item active" key={i}>
                {/* <NavLink to={`/category/${element.id}`} className="nav-link" activeClassName="active"> */}
                <label className="nav-link">{element}</label>
                {/* </NavLink> */}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* <History /> */}
    </div>
  );
};
