import axios from 'axios';
import Vue from "vue";

const API_ENDPOINT = process.env.VUE_APP_API_HOST || 'http://localhost:8081/';

let config = {
  baseURL: `${API_ENDPOINT}api/`,
};

const axiosClient = axios.create(config);

axiosClient.interceptors.request.use(config => {
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axiosClient;
  }
});