import service from "@/utils/request";
// 发送 POST 请求
export function Login(data){
 return service.request({ //切记要记得返回
    method:'POST',
    url:'/login',
    headers: {
    'Content-Type': 'application/json'
  },
    data:data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function Register(data){
 return service.request({ //切记要记得返回
    method:'POST',
    url:'/register',
    headers: {
    'Content-Type': 'application/json'
  },
    data:data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function AdminLogin(data){
 return service.request({ //切记要记得返回
    method:'POST',
    url:'/admin_login',
    headers: {
    'Content-Type': 'application/json'
  },
    data:data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
