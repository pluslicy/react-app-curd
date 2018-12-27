import React,{Component} from 'react';
import './style/courselist.css'

import axios from "axios";
import './mock.js';
class CourseList extends Component{
  //创建构造函数，声明state中数据
  constructor(props){
    super(props);
    this.state={
        courses:[]
    }
  }
  // 请求课程数据
  componentWillMount(){
    axios.get("/courseList").then((response)=>{
      var courses = response.data.courses;
      if(courses.length>0){
        this.setState({
          courses:courses
        })
      }
    });
  }
  render(){
    let {courses} = this.state
    return (
      <div className="CourseList">
        <table className="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <th>课程编号</th>
              <th>课程名称</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((item,index)=>{
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.desc}</td>
                    <td>
                      <i className='fa fa-trash'></i>
                      <i className='fa fa-edit'></i>
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
export default CourseList;