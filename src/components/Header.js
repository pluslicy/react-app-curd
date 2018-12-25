// 头部组件 
import React,{Component} from 'react'
import './Header.css'

class Header extends Component{

  render(){
    return (
      <div className='header' >
        <div className="wrapper">
          <span style={{color:'#0066cc',fontSize:34,paddingRight:'.5em'}}>briup</span>
          杰普内部培训专用框架
        </div>
      </div>
    )
  }
}

export default Header;