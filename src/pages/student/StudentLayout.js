// 学生页面的布局组件
import React,{Component}  from 'react'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

class StudentLayout extends Component{
  render(){
    return (
      <div className='student_layout'>
        {/* 表单（添加，修改） */}
        <StudentForm/>
        {/* 过滤，触发添加 */}
        <div className='student_btns'>
          <input type="search" placeholder='please input keywords' />
          <button>添加</button>
        </div>
        {/* 列表（显示,删除，触发修改） */}
        <StudentList/>
      </div>
    )
  }
}
export default StudentLayout;