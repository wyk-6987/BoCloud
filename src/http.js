import axios from 'axios'
//创建取消请求
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
//配置基础地址
let baseURL;
if(process.env.VUE_APP_ENV === 'dev') {
    baseURL = '/';
} else {
    baseURL = process.env.VUE_APP_BASE_URL
}
// 创建实例
const http = axios.create({
    baseURL: baseURL, // api 的 base_url
    timeout: 5000,  // 超时时间
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
})
/**
 * 请求拦截
 */
http.interceptors.request.use(config => {
    config.cancelToken=source.token;
    return config
}, error => {
    return Promise.reject(error)
})
// source.cancel('Operation canceled by the user.');//这样二的话会将每次的请求都终端，需要进行绑定
/**
 * 响应拦截
 */

// 设置不同的信号对应不同的信息提示
http.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default http
