//将所有axios请求进行封装，后期发送数据请求直接调用封装方法

import axios from "axios";
import './mock.js';


export const http ={
    //发送get请求
    apiGet(url){
        return new Promise((resolve)=>{
            axios.get(url).then((response)=>{
                resolve(response);
            });
        })
    },

    //发送post请求
    apiPost(url,params){
        return new Promise((resolve)=>{
            axios.post(url,params).then((response)=>{
                resolve(response);
            });
        })
    }

}