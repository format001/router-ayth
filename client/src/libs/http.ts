import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

axios.interceptors.response.use((res: AxiosResponse) => {
  if (res.data.err === 1) {
    return Promise.reject(res.data.data);
  }

  return res.data.data;
}, (err) => Promise.reject(err));

export default axios;

