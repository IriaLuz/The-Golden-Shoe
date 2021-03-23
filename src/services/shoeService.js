import axios from 'axios';

export const getShoes = () => {
  return axios.get(
    'https://the-golden-shoe-iria-luz.herokuapp.com/api/products',
  );
};

export const getShoe = (id) => {
  return axios.get(
    `https://the-golden-shoe-iria-luz.herokuapp.com/api/products/${id}`,
  );
};
