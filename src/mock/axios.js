//将所有axios请求进行封装，后期发送数据请求直接调用封装方法

import axios from "axios";
import './mock.js';


export const http ={
    apiGet(url){
        return new Promise((resolve)=>{
            axios.get(url).then((response)=>{
                resolve(response);
            });
        })
    }
}