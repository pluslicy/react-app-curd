// 教师管理页面的布局组件
import React,{Component}  from 'react';
import {http} from './mock/axios';
import TeacherForm from './TeacherForm';
import TeacherList from './TeacherList';
import './style/TeacherLayout.css'

class TeacherLayout extends Component{

  constructor(props){
    super(props);
    this.state={
      searchTeacherList:[],
      returnAddTeacherList:[]//父组件向子组件传值，添加刷新数据
    }
    //Object.assign(this.state,this.props);
  }


  //成员方法
  searchForm=(event)=>{
    var self=this;
    var searchInput=document.getElementsByClassName("searchInput")[0];
      var val=searchInput.value;//用户输入的查询值
      if(val){
        http.apiPost('/teacherList',{val:val}).then((response)=>{
          var teachers=response.data;//符合查询结果的查询之后的教师
          if(teachers.length>0){
              self.setState({
                searchTeacherList:teachers
              });
            }
        });
      }else{
        //用户输入空字符串
        http.apiGet("/teacherList").then((response)=>{
          var teachers=response.data;

          if(teachers.length>0){
              this.setState({
                searchTeacherList:teachers
              })

          }
        });
      }

      event.preventDefault();
  }

  //接受子组件传递的值
  handlerClick=(returnAddTeacherList)=>{
    this.setState({
      returnAddTeacherList:returnAddTeacherList
    });
  }
  //重写渲染方法
  render(){
    return (
      <div className='teacher_layout'>
        <TeacherForm GetStates={this.handlerClick}/>
            <div className="search">
              <form action="" onSubmit={this.searchForm}>
                <input type="search" className="searchInput" placeholder="请输入要搜索的内容"/>
                <button>搜索</button>
              </form>
            </div>
           
          <TeacherList searchTeacherList={this.state.searchTeacherList} addList={this.state.returnAddTeacherList}/>
       
      </div>
    )
  }
}
export default TeacherLayout;