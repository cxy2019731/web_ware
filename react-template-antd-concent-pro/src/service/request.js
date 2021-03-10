import axios from "axios";
import httpConfig from "./config";
const instance = axios.create({
  baseURL: httpConfig.http, //需要根据配置补全
  timeout: 10000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: function (status) {
    // 根据使用情况修改表示正确的状态码
    return [200, 201, 203, 204].indexOf(status) != -1;
  },
});

// 请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default function request(...options) {
  return instance(...options);
}
