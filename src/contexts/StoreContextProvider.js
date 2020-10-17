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
  const [loading, setLoading] = useState(false);
  const [sortPrice, setSortPrice] = useState('ASC');
  const { addToast } = useToasts();

  useEffect(() => {
    getUserStore();
    getCategories();
  }, []);

  const getUserStore = () => {
    StoreService.getUser().then((response) => {
      // response.data.points = 500;
      setUser(response.data);
    });
  };

  const getProductStore = (categoryId) => {
    setLoading(true);
    StoreService.getProducts()
      .then((response) => {
        const products = response.data;
        if (categoryId) {
          const newArray = products.filter((element) => element.category === categoryId);
          setProducts(newArray);
        } else {
          setProducts(products);
        }
      })
      .finally(() => setLoading(false));
  };

  const getHistory = () => {
    setLoading(true);
    StoreService.getHistory()
      .then((response) => {
        const data = response.data;
        const productsRepeated = [];
        const mySetproduct = new Set();

        data.forEach((element) => {
          if (!mySetproduct.has(element.productId) && element.productId) {
            let elementArray = data.filter((element2) => element2.productId === element.productId);
            productsRepeated.push({ ...element, count: elementArray.length });
            mySetproduct.add(element.productId);
          }
        });
        setHistoryProducts(productsRepeated);
      })
      .finally(() => setLoading(false));
  };

  const getCategories = () => {
    StoreService.getProducts().then((response) => {
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
        addToast('Puntos agregados exitosamente', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 5000 });
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
        getCategories,
        getUserStore,
        postRedeem,
        addPoints,
        historyProducts,
        setHistoryProducts,
        getHistory,
        path,
        setPath,
        loading,
        sortPrice,
        setSortPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
