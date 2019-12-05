import axios from 'axios';

export const getTemplate = () => {
  return new Promise((resolve, reject) => {
    axios.get('http://localhost:3000/index.html').then((res) => {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    });
  });
};
