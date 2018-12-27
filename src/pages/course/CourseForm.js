import React,{Component} from 'react';
import './style/courseform.css'
class CourseForm extends Component{
  //创建构造函数，声明state中数据
  constructor(props){
    super(props);
    this.state={
      courseId:'',
      courseName:'',
      courseDesc:'',
    }
  }
  handleSave(event){
    event.preventDefault();
  }
  handleChange=(event)=>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState((state)=>({
        [name]:value
    }))
  }
  render(){
    let {courseId,courseName,courseDesc} = this.state;
    return (
      <div className="CourseForm" onSubmit={this.handleSave}>
        {JSON.stringify(this.state)}
        <form action="#">
          <label htmlFor="courseId">
            课程编号：
            <input id="courseId" type="text"  autoComplete="off" name="courseId" value={courseId} onChange={this.handleChange}/>
          </label>
          <label htmlFor="courseName">
            课程名称：
            <input id="courseName" type="text"  autoComplete="off" name="courseName" value={courseName} onChange={this.handleChange}/>
          </label>
          <label htmlFor="courseDeac">
            课程描述：
            <input id="courseDeac" type="text"  autoComplete="off" name="courseDesc" value={courseDesc} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="保存"/>
        </form>
      </div>
    )
  }
}
export default CourseForm;