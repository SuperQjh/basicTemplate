//安装axios
//npm install axios --save

//封装axios
import axios from "axios";
import { reject, resolve } from "q";

//创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_URL, // api base_url,
    timeout: 60 * 1000, // 请求超时时间,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    crossDomain: true,
});

//响应拦截器
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    Notification.error({
                        message: "请求失败",
                        description: "登录过期，请重新登录"
                    });
                    axios.get('/relog').then(() => {
                        location.href = window.location.origin
                    })
                    break;
                // 403 token过期
                // 登录过期对用户进行提示
                // 清除本地token和清空vuex中token对象
                // 跳转登录页面
                case 403:
                    Notification.error({
                        message: "请求失败",
                        description: "登录过期，请重新登录"
                    });
                    break;
                // 404请求不存在
                case 404:
                    Notification.error({
                        message: "请求失败",
                        description: "网络请求不存在"
                    });
                    break;
                // 其他错误，直接抛出错误提示
                default:
                    Notification.error({
                        message: "请求失败",
                        description: error.response.data.message
                    });
            }
            return Promise.reject(error.response);
        }
    }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @returns 
 */
export function get(url, params) {
    let newObj = {}
    for(let key in parmas) {
        if(params[key]) {
            newObj[key] = params[key]
        }
    }
     return new Promise((resolve, reject) => {
         service
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res)
            })
            .error(err => {
                reject(err)
            })
     })
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @returns 
 */
 export function get(url, params) {
    let newObj = {}
    for(let key in parmas) {
        if(params[key]) {
            newObj[key] = params[key]
        }
    }
     return new Promise((resolve, reject) => {
         service
            .get(url, {
                params: params
            })
            .then(res => {
                resolve(res)
            })
            .error(err => {
                reject(err)
            })
     })
}


/**
 * del 方法，对应delete请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @returns 
 */
 export function del(url, params) {
     return new Promise((resolve, reject) => {
         service
            .delete(url, {
                params: params
            })
            .then(res => {
                resolve(res)
            })
            .error(err => {
                reject(err)
            })
     })
}

/**
 * post 方法，对应 post请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @returns 
 */
 export function post(url, params) {
    return new Promise((resolve, reject) => {
        service
           .post(url, JSON.stringify(params))
           .then(res => {
               resolve(res)
           })
           .error(err => {
               reject(err)
           })
    })
}

/**
 * put 方法，对应put请求
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数]
 * @returns 
 */
 export function put(url, params) {
     return new Promise((resolve, reject) => {
         service
            .put(url, JSON.stringify(params))
            .then(res => {
                resolve(res)
            })
            .error(err => {
                reject(err)
            })
     })
}
