//引入mockjs进行后台数据模拟

import Mock from "mockjs";

var teacherList=[{
    id:0,
    name:"terry",
    gender:"men",
    age:12,
    likes:["篮球"],
    address:["江西"],
    sigle:"我是一个活泼的老师"
},{
    id:1,
    name:"tom",
    gender:"women",
    age:12,
    likes:["篮球","足球"],
    address:["上海"],
    sigle:"to摸头摸头马桶门"
},{
    id:2,
    name:"wangym",
    gender:"men",
    age:121,
    likes:["篮球","排球","羽毛球"],
    address:["江西"],
    sigle:"我是一个活泼的老师1111"
},{
    id:3,
    name:"lily",
    gender:"men",
    age:12,
    likes:["排球"],
    address:["江西"],
    sigle:"我是一个活泼的老师"
},{
    id:4,
    name:"李三",
    gender:"women",
    age:32,
    likes:["篮球"],
    address:["内蒙"],
    sigle:"我是一个活泼的老师2121121"
}];

//默认请求所有教师，进行列表展示
Mock.mock('/teacherList',function(options){//默认列表请求
    if(options.type==="GET"){
        return teacherList
    }else if(options.type==="POST"){//查询请求
        var val=JSON.parse(options.body).val;
        var newArr=[];
        teacherList.forEach(function(item){
            for(var key in item){
                if(item[key]==val){
                    newArr.push(item);
                }
            }
        });
        return newArr
    }
   
});

//删除请求
Mock.mock('/deleteTeacherById',function(options){
    var id=Number(JSON.parse(options.body).id);
    teacherList= teacherList.filter(function(item){
        return item.id!=id
    });

    return teacherList
});

//add添加
Mock.mock('/addTeacher',function(options){
    var addTeacher=JSON.parse(options.body);
    teacherList.push(addTeacher);
    return teacherList
});

//展示默认所有家庭住址，供用户选择
Mock.mock('/addressList',{
    "list":[{
        id:1001,
        name:'江苏'
    },{
        id:1002,
        name:'江西'
    },{
        id:1003,
        name:'上海'
    },{
        id:1004,
        name:'内蒙'
    },{
        id:1005,
        name:'山西'
    }]

});