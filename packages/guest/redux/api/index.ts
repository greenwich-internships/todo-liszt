import axios from 'axios';

const todoLisztAPI = axios.create({
  baseURL: 'http://api-todo-liszt.sestud.io/api/v1.0/',
  responseType: 'json',
});

export default todoLisztAPI;
