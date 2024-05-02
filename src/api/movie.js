import service from "@/utils/request";
export function PopularMovie(data){
 return service.request({ //切记要记得返回
    method:'Get',
    url:'/movie/popular',
    headers: {
    'Content-Type': 'application/json'
  },
    data:data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function MovieInfo(data){
const params = new URLSearchParams(data);
 return service.request({ //切记要记得返回
    method:'Get',
    url:'/movie',
    headers: {
    'Content-Type': 'application/json'
  },
    params:params
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function DeleteMovie(data){
const params = new URLSearchParams(data);
 return service.request({ //切记要记得返回
    method:'Delete',
    url:'/delete_movie',
    headers: {
    'Content-Type': 'application/json'
  },
    params:params
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function AddMovie(data){
 return service.request({ //切记要记得返回
    method:'Post',
    url:'/add_movie',
    headers: {
    'Content-Type': 'application/json'
  },
  data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}
export function UpdateMovie(data){
 return service.request({ //切记要记得返回
    method:'PUT',
    url:'/update_movie',
    headers: {
    'Content-Type': 'application/json'
  },
  data
   // data:data, //左边的data是后台接收的，右边的data是接收的参数，如果两者同名，可以写成一个即可。
});
}