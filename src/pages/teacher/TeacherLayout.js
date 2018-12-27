// 教师管理页面的布局组件
import React,{Component}  from 'react';
import {http} from '../../mock/axios';
import TeacherForm from './TeacherForm';
import TeacherList from './TeacherList';
import './style/TeacherLayout.css'

class TeacherLayout extends Component{




  //成员方法
  handlerClick(){
    http.apiGet("/teacherList").then((response)=>{
      console.log(response);
    });
  }
  //重写渲染方法
  render(){
    return (
      <div className='teacher_layout'>
        <TeacherForm/>
            <div className="search">
              <form action="">
                <input type="search" placeholder="请输入要搜索的姓名"/>
                <button>搜索</button>
              </form>
            </div>
           
          <TeacherList/>
       
      </div>
    )
  }
}
export default TeacherLayout;