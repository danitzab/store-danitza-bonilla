import Axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk',
};

export const getUser = () => {
  return Axios.get('https://coding-challenge-api.aerolab.co/user/me', { headers });
};

export const addPoints = (amount) => {
  const body = {
    amount,
  };
  return Axios.post('https://coding-challenge-api.aerolab.co/user/points', body, { headers });
};

export const getHistory = () => {
  return Axios.get('https://coding-challenge-api.aerolab.co/user/history', { headers });
};

export const postRedeem = (productId) => {
  const body = {
    productId,
  };
  return Axios.post('https://coding-challenge-api.aerolab.co/redeem', body, { headers });
};

export const getProducts = () => {
  return Axios.get('https://coding-challenge-api.aerolab.co/products', { headers });
};
