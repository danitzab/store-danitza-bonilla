import React, { createContext, useEffect, useState } from 'react';
import * as StoreService from '../services/StoreService';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    StoreService.getUser().then((response) => setUser(response.data));
  }, []);

  const getProductStore = () => {
    StoreService.getProducts().then((response) => setProducts(response.data));
  };

  const getCategory = () => {
    StoreService.getProducts().then((response) => {
      setProducts(response.data);

      const array = [];
      response.data.map((element) => {
        const found = array.find((element2) => element2 === element.category);
        if (!found) {
          array.push(element.category);
        }
      });
      array.sort();
      setCategories(array);
    });
  };

  return (
    <StoreContext.Provider
      value={{
        user,
        setUser,
        products,
        setProducts,
        getProductStore,
        categories,
        setCategories,
        getCategory,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
