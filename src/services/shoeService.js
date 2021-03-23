import axios from 'axios';

export const getShoes = () => {
  return axios.get('http://localhost:3001/api/products');
};

export const getShoe = (id) => {
  return axios.get(`http://localhost:3001/api/products/${id}`);
};
