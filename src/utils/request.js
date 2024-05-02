// 拦截器
import axios from 'axios'
import { useStore } from 'vuex';
import { getToken } from './app';
// 创建axios,赋值给变量service
// const BASEURL=process.env.MODE_ENV==='production'?'':'/devApi';
const service=axios.create({
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
//   baseURL: BASEURL,//转换成的api eg:http://localhost:8000/api== 我们所要请求的api
  baseURL:'/devApi',
  timeout:1000,//超时，请求时间超过，无法再做请求，尽可能设置长一点时间
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 后端需要前端创相关参数（在请求头添加相关参数)
    // Token
    // userid
    // console.log("添加请求");
    // console.log(config.headers);
    // 业务需求

    // 最终目的在请求头添加参数
    const store=useStore()
    const token=getToken()
    config.headers.Authorization=token

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么 
    // 业务需求
    // let data=response.data
    // if (data.msg!==0) { //后面数据修改
    //   console.log(data.msg);
    //   ElMessage('This is a message.')
      // console.log("有问题");
      // 如果有问题返回错误的数据回去
    //   return Promise.reject(data);
    // }else{
    console.log("拦截器成功");
      
      return response.data;//==>return Promise.resolve(data)
    // }
    
  }, function (error) {
    // 对响应错误做点什么
    console.log("拦截器错误");
    return Promise.reject(error);
  });
  
export default service;
// 使用export default时 但不能同时存在多个default 
// 文件import 不需要花括号
// 如果只用export 文件import 需要花括号