//引入mockjs进行后台数据模拟

import Mock from "mockjs";

Mock.mock('/GoodsList',{
        "list|1-10":[{
            "name|1-3":"面包",
            "money|+1":15,
            "category|1":["日用品","食品"],
            "address|1":["江苏",'浙江','上海','云南'],
        }]
  
});