import _axios from 'axios';

const axios = _axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

const todos = {
  index: () => {
    return axios.get('/todos')
  }
}

export default {
  todos
}