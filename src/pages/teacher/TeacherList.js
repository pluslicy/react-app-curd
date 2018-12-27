
//TeacherLayout页面中form表单组件

import React,{Component} from 'react';
import './style/TeacherList.css'
import {http} from './mock/axios';


class TeacherList extends Component{
    //创建构造函数，声明state中数据
    constructor(props){
        super(props);
        this.state={
            teacherList:[]
        }
    }

    //生命周期
    componentWillMount(){//组件即将绑定
       
        //在组件即将绑定之前发送请求，返回默认techerList
        http.apiGet("/teacherList").then((response)=>{
            var teacherList=response.data;

            if(teacherList.length>0){
                this.setState({
                    teacherList:teacherList
                })

            }
          });
    }
    //修改方法
    handlerChange=(event)=>{
        var currentTr=event.target.parentNode.parentNode;
        

    }

    //单个删除方法
    handlerDelete=(event)=>{
        var id=event.target.parentNode.parentNode.firstChild.firstChild.value;
        //调用后台api进行删除
        http.apiPost('/deleteTeacherById',{id:id}).then((response)=>{
            
             let teacherList=response.data;
             if(teacherList.length>0){
                this.setState({
                    teacherList:teacherList
                })
             }
        });

        //当前页面不调用后台api进行删除
        /* var arr=this.state.teacherList.filter(function(item,index){
            return item.id != id;
        });

        this.setState({
            teacherList:arr
        }); */



    }
 


    //必须重写成员方法
    render(){
         //判断父组件是否传递参数，传递参数代表用户进行查询并有结果返回
         var searchTeacherList=this.props.searchTeacherList;
         if(searchTeacherList.length>0){
            var teacherList=searchTeacherList//搜索之后返回的新数组
         }else if(this.props.addList.length>0){
            var teacherList=this.props.addList;//添加之后返回的新数组
           
         }else{
            var teacherList=this.state.teacherList;//未操作时默认返回的教师数组
         }


        let self=this;
        return (
            <div className="teacherList">
                <table>
                    <thead>
                        <tr>
                            <th>选项</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>性别</th>
                            <th>家庭住址</th>
                            <th>爱好</th>
                            <th>简介</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            teacherList.map(function(item,index){
                                return (
                                    <tr  key={index}>
                                        <td>
                                            <input type="checkbox" value={item.id}/>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender==="men"?"男":"女"}</td>
                                        <td>{item.address}</td>
                                        <td>{item.likes.join("-")}</td>
                                        <td>{item.sigle}</td>
                                        <td>
                                            <span onClick={self.handlerChange}>修改</span>
                                            <span onClick={self.handlerDelete}>删除</span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                       
                    </tbody>
                </table>
            </div>
        )
    }


}

export default TeacherList;
