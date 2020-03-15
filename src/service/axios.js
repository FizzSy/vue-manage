import axios from "axios";
import { Loading, Message } from "element-ui";
import router from "../router/index";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  //   timeout: 5000
});
let loading; //定义loading变量

function startLoading() {
  //使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: "加载中...",
    background: "rgba(0, 0, 0, 0.7)"
  });
}
function endLoading() {
  //使用Element loading-close 方法
  loading.close();
}
service.interceptors.request.use(
  config => {
    startLoading();
    if (localStorage.token) {
      //   config.headers['Authorization'] = `Bearer ${getToken()}`
      config.headers["Authorization"] = localStorage.token;
    }
    return config;
  },
  error => {
    console.log(error); // for debug
    return Promise.reject(error);
  }
);
// response interceptor
service.interceptors.response.use(
  response => {
    endLoading();
    const res = response.data;
    console.log(res);
    if (res.error !== 0) {
      Message({
        message: res.msg || "请求失败",
        type: "error",
        duration: 5 * 1000
      });
      return Promise.reject(new Error(res.msg || "请求失败"));
    } else {
      if (res.msg) {
        Message({
          message: res.msg,
          type: "success",
          duration: 5 * 1000
        });
      }

      return res;
    }
  },
  error => {
    // 非200的报错请求处理
    endLoading();
    console.log("error:", error);
    const { status } = error.response;
    if (status === 401) {
      localStorage.removeItem("token");
      Message({
        message: "请登录",
        type: "error",
        duration: 5 * 1000
      });
      router.push("/login");
    } else {
      Message({
        message: "请求失败",
        type: "error",
        duration: 5 * 1000
      });
    }
    return Promise.reject(error);
  }
);

export default service;
