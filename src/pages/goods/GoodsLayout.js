// 商品管理页面的布局组件
import React,{Component}  from 'react'
import GoodsFrom from './GoodsFrom'
import GoodsList from './GoodsList'
import './GoodsLayout.css'

class GoodsLayout extends Component{
  constructor(props){
    super(props);
    this.state = {
      onOff:'none'
    }
  }
  toAdd = ()=>{
    this.setState({
      onOff:'block'
    })
  }
  toClose = ()=>{
    this.setState({
      onOff:'none'
    })
  }
  render(){
    let {onOff} = this.state;
    return (
      <div className='goods_layout'>
        {/* 表单模块（添加、修改） */}
        <div id='goods_from' style={{display:onOff}}>
          {/* 没弄明白父子组件之间传值，因此在父组件中插入一个按钮测试（无法作为最终成果） */}
          <button className='close_btn' onClick={this.toClose}>关闭</button>  
          <GoodsFrom/>  
        </div>
        {/* 按钮区 */}
        <div className='btns'>
					{/* 缺少组件通信，点击添加商品后，应清空表单 */}
          <div>
            <button onClick={this.toAdd}>添加商品</button>
          </div>
          <div className='goods_find'>
            <input type="text" placeholder='请输入想要商品的名称'/><button>查找商品</button>
          </div>
        </div>
        {/* 列表模块（显示数据，删除、修改） */}
        <GoodsList/>
      </div>
    )
  }
}
export default GoodsLayout;