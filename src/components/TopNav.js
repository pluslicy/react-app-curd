import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './TopNav.css'

class TopNav extends Component {
  render(){
    return (
      <div className='top_nav'>
        <div className='user_info'>
          超级管理员
        </div>
        <ul>
          <li><i className='fa fa-fw fa-tv'></i> <Link to='/student'>学生</Link></li>
          <li><i className='fa fa-fw fa-user'></i> <Link to='/teacher'>教师</Link></li>
          <li><i className='fa fa-fw fa-tag'></i> <Link to='/course'>课程</Link></li>
          <li><i className='fa fa-fw fa-envelope'></i> <Link to='/car'>车辆</Link></li>
          <li><i className='fa fa-fw fa-tint'></i> <Link to='/department'>部门</Link></li>
          <li><i className='fa fa-fw fa-phone'></i> <Link to='/goods'>商品</Link></li>
          <li><i className='fa fa-fw fa-flag'></i> <Link to='/mr'>会议室</Link></li>
        </ul>
      </div>
    )
  }
}

export default TopNav;