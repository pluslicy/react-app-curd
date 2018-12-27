
//TeacherLayout页面中form表单组件

import React,{Component} from 'react';
import './style/TeacherList.css'
import {http} from '../../mock/axios';

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
            var teacherList=response.data.list;
            if(teacherList.length>0){
                this.setState({
                    teacherList:teacherList
                })

                console.log(this.state.teacherList);
            }
          });
    }




    //必须重写成员方法
    render(){
        let {teacherList}=this.state;
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
                                            <input type="checkbox" value={index}/>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.gender===true?"男":"女"}</td>
                                        <td>{item.address}</td>
                                        <td>{item.likes.join("-")}</td>
                                        <td>{item.sigle}</td>
                                        <td>
                                            <span>修改</span>
                                            <span>删除</span>
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
