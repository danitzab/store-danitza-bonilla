import React, { createContext, useEffect, useState } from 'react';
import * as StoreService from '../services/StoreService';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [filter, setfilter] = useState([]);

  useEffect(() => {
    getUserStore();
    getProductStore();
    getCategory();

    console.log('entro useeffect Contex');
  }, []);

  const getUserStore = () => {
    StoreService.getUser().then((response) => {
      response.data.points = 0;
      setUser(response.data)
    });
  };

  const getProductStore = (categoryId) => {
    StoreService.getProducts().then((response) => {
      const products = response.data;
      if (categoryId) {
        const newArray = products.filter((element) => element.category === categoryId);
        setProducts(newArray);
      } else {
        setProducts(products);
      }

      //   const array = [];
      //   response.data.forEach((element) => {
      //     const found = array.find((element2) => element2 === element.category);
      //     if (!found) {
      //       array.push(element.category);
      //     }
      //   });
      //   array.sort();
      //   setCategories(array);
      // });
    });
  };

  const postRedeem = (productId) => {
    StoreService.postRedeem(productId).then((response) => {
      getUserStore();
    });
  };

  const addPoints = (amount) => {
    StoreService.addPoints(amount).then((response) => {
      getUserStore();
    });
  };

  const getCategory = () => {
    StoreService.getProducts().then((response) => {
      setProducts(response.data);

      const array = [];
      response.data.forEach((element) => {
        const found = array.find((element2) => element2 === element.category);
        if (!found) {
          array.push(element.category);
        }
      });
      array.sort();
      setCategories(array);
    });
  };

  // const getProductsByCategory = (categoryId) => {
  //   const newArray = products.filter((element) => element.category === categoryId);
  //   setProducts(newArray);
  //   console.log(newArray);
  // };

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
        getUserStore,
        postRedeem,
        // getProductsByCategory,
        addPoints,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
