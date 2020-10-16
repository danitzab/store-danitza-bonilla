import React, { createContext, useEffect, useState } from 'react';
import * as StoreService from '../services/StoreService';
import { useToasts } from 'react-toast-notifications';

export const StoreContext = createContext();

export const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [historyProducts, setHistoryProducts] = useState([]);
  const [path, setPath] = useState();
  const { addToast } = useToasts();

  // const [filter, setfilter] = useState([]);

  useEffect(() => {
    getUserStore();
    // countHistoryProducts();
    // getProductStore();
    getCategory();
    // getHistory();

    console.log('entro useeffect Contex');
  }, []);

  const getUserStore = () => {
    StoreService.getUser().then((response) => {
      response.data.points = 0;
      setUser(response.data);
    });
  };

  const getProductStore = (categoryId) => {
    console.log('ENTRO getProductStore -----------------');
    StoreService.getProducts().then((response) => {
      const products = response.data;
      // console.log('DATA----', products && products[0]);
      if (categoryId) {
        // console.log('ENTROOOOOO IF');
        const newArray = products.filter((element) => element.category === categoryId);
        setProducts(newArray);
      } else {
        // console.log('ENTROOOOOO ELSE');
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

  const getHistory = (categoryId) => {
    console.log('ENTRO getHistory -----------------id', categoryId);
    StoreService.getHistory().then((response) => {
      const data = response.data;

      // const productsRepeated = new Map();
      const productsRepeated = [];
      const mySetproduct = new Set();

      data.forEach((element) => {
        // if (!productsRepeated.get(element.productId) && element.productId) {
        if (!mySetproduct.has(element.productId) && element.productId) {
          let elementArray = data.filter((element2) => element2.productId === element.productId);
          // console.log(element.name, ' - ', elementArray.length);
          // productsRepeated.set(element.productId, { ...element, count: elementArray.length });
          productsRepeated.push({ ...element, count: elementArray.length });
          mySetproduct.add(element.productId);
        }
      });
      setHistoryProducts(productsRepeated);
      console.log(productsRepeated);
      console.log(mySetproduct);
      // console.log(Array.from(productsRepeated));
      // const getHistoryproducts = response.data;
      // console.log('DATA----', products && products[0]);
      if (categoryId) {
        // console.log('ENTROOOOOO IF');
        const newArray = productsRepeated.filter((element) => element.category === categoryId);
        setHistoryProducts(newArray);
      } else {
        // console.log('ENTROOOOOO ELSE');
        setHistoryProducts(productsRepeated);
      }
      // });
    });
    //   const getHistoryproducts = response.data;
    //   // console.log('DATA----', products && products[0]);
    //   if (categoryId) {
    //     // console.log('ENTROOOOOO IF');
    //     const newArray = getHistoryproducts.filter((element) => element.category === categoryId);
    //     setHistoryProducts(newArray);
    //   } else {
    //     // console.log('ENTROOOOOO ELSE');
    //     setHistoryProducts(getHistoryproducts);
    //   }
    // });
    // countHistoryProducts()
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

  const addPoints = (amount) => {
    StoreService.addPoints(amount)
      .then((response) => {
        addToast('Puntos agregados exitosamente', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 1000000 });
        getUserStore();
      })
      .catch((error) => {
        addToast('Ocurrio un error, Vuelve a intentarlo', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 });
      });
  };

  const postRedeem = (productId) => {
    StoreService.postRedeem(productId)
      .then((response) => {
        addToast('Puntos redimidos exitosamente', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 });
        getUserStore();
      })
      .catch((error) => {
        addToast('Ocurrio un error, Vuelve a intentarlo', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 5000 });
      });
  };

  // const countHistoryProducts = () => {
  //   StoreService.getHistory().then((response) => {
  //     const data = response.data;

  //     // const productsRepeated = new Map();
  //     const productsRepeated = [];
  //     const mySetproduct = new Set();

  //     data.forEach((element) => {
  //       // if (!productsRepeated.get(element.productId) && element.productId) {
  //       if (!mySetproduct.has(element.productId) && element.productId) {
  //         let elementArray = data.filter((element2) => element2.productId === element.productId);
  //         // console.log(element.name, ' - ', elementArray.length);
  //         // productsRepeated.set(element.productId, { ...element, count: elementArray.length });
  //         productsRepeated.push({ ...element, count: elementArray.length });
  //         mySetproduct.add(element.productId);
  //       }
  //     });
  //     setHistoryProducts(productsRepeated);
  //     console.log(productsRepeated);
  //     console.log(mySetproduct);
  //     // console.log(Array.from(productsRepeated));
  //   });
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
        historyProducts,
        setHistoryProducts,
        getHistory,
        path,
        setPath,
        // countHistoryProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
