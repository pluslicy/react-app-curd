//引入mockjs进行后台数据模拟

import Mock from "mockjs";

Mock.mock('/teacherList',{
        "list|1-10":[{
            "name|1-5":"terry",
            "age|+1":22,
            "gender|1":true,
            "likes|1":[["篮球","足球"],["篮球"],["足球","羽毛球"],["排球","羽毛球","篮球"],["羽毛球"]],
            "address|1":["江西",'上海','南京'],
            "sigle|1-5":"我是一个活泼的老师"
        }]
  
});