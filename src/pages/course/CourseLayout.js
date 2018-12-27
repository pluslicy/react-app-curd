// 课程管理页面的布局组件
import React,{Component}  from 'react'
import CourseList from './CourseList';
import CourseForm from './CourseForm';
class CourseLayout extends Component{
  render(){
    return (
      <div className='course_layout'>
        <CourseForm/>
        <CourseList/>
      </div>
    )
  }
}
export default CourseLayout;