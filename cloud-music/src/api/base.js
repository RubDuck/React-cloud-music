import axios from 'axios';
import config from './config';

function successResponse(res) {
  // 成功操作
  return res.data
}

function failResponse(error) {
  // 失败操作
  return Promise.reject(error);
}


const instance = axios.create(config);
instance.interceptors.use(successResponse, failResponse);

export default instance;


