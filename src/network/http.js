import axios from 'axios';
const port = process.env.REACT_APP_PORT || 3030;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 20000;

const defaultConfig = {
  useDefaultLoading: true,
};

axios.interceptors.request.use((request) => {
  // Do something before request is sent
  let config = defaultConfig;

  if (request.config) {
    config = Object.assign({}, defaultConfig, request.config);
  }

  if (config && config.useDefaultLoading) {
    console.log('加载中...');
  }

  if (request.url.includes('http:') || request.url.includes('https:')) {
    request.baseURL = '';
  } else {
    request.baseURL = `http://localhost:${port}`;
    switch (request.method) {
      case 'get':
        break;
      case 'post':
        if (request.data) {
        } else {
        }

        break;
      default:
        break;
    }
  }
  // console.log(request, '------ dddd -----');

  return request;
}, (error) => {
  // Do something with request error
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  // Do something with response data

  if (response && response.data) {
    const data = response.data;

    return data;
  } else {
    return {};
  }
}, (error) => {
  // Do something with response error

  if (
    error &&
    error.message &&
    typeof error.message === 'string'
  ) {
    const message = error.message.toLowerCase();

    if (message.includes('network error')) {
    } else if (message.includes('timeout')) {
    } else if (message.includes('404')) {
    } else {
    }
  } else {
  }

  return Promise.reject(error);
});

export default axios;
