// 会议室管理页面的布局组件
import React,{Component}  from 'react'
import './style/MeetingRoomLayout.css'

class MeetingRoomLayout extends Component{
  constructor(props){
    super(props);
   
    this.state = {
      info:[{
        id:1,
        title:'工作计划',
        place:'五楼会议室',
        nav:'关于年度工作计划'


      },{
        id:2,
        title:'工作进展',
        place:'八楼会议室',
        nav:'关于年度工作进展'
      },{
        id:3,
        title:'工作部署',
        place:'五楼会议室',
        nav:'关于年度工作部署'
      },{
        id:4,
        title:'年度表彰',
        place:'五楼会议室',
        nav:'关于年度工作表彰'
      }]
    }
    this.handleClick = this.handleClick.bind(this);
    this.changeClick = this.changeClick.bind(this);
    this.showModel = this.showModel.bind(this);
    
  }
 
  handleClick(){
   
    let display = "block";
    this.setState({
      display:display
    })
    
  }

  changeClick(){
    let display = 'none';
    this.setState({
      display:display
      
    })
  
  }
  titleClick = (event)=>{
    this.setState({
      title:event.target.value
    })
  }
placeClick = (event)=>{
    this.setState({
      place:event.target.value
    })
  }
  navClick = (event)=>{
    this.setState({
      nav:event.target.value
    })
  }
  addMeet = ()=>{
    let arr = [...this.state.info]
    let obj = {
      id:arr.length,
      title:this.state.title,
      place:this.state.place,
      nav:this.state.nav

    }
    arr.push(obj);
    this.setState({
      info:arr
     })
  }
  closeEditDialog = ()=>{
    let display = "none";
    this.setState({
      display:display
    })
  }
 

  showModel(){
    let display = "block";
    this.setState({
      display:display
    })
  }
  delMeet = (index,event)=>{
    let arr = [...this.state.info];
    arr.splice(index,1);
    this.setState({
      info:arr
    })
  }
 
  render(){
    let modelStyle = {
      display:this.state.display
  }
    let {state} = this;
   
    
    
    return (
      <div className='meetingRoom_layout'>
      {/* 按钮区 */}
      <button onClick={this.handleClick}>新增+</button>
     
     
      {/* 按钮区结束 */}
     {/* 搜索区 */}
     <input className="search" type="text" placeholder="请输入关键字"/>
     <button>搜索</button>
     {/* 搜索区结束 */}
      {/* 表格区 */}
      <table className="table">
        <thead>
          <tr>
          <th>编号</th>
          <th>会议主题</th>
          <th>会议地点</th>
          <th>会议内容</th>
          <th>操作</th>
          </tr>

        </thead>
        <tbody>
               
                  {
                     state.info.map((item)=>{
                      return <tr key={item.id}>
                      <td>{item.id}</td>
                                <td >{item.title}</td>
                                <td>{item.place}</td>
                                <td>{item.nav}</td>
                                
                                <td> 
                                   <span onClick={this.showModel}>修改</span>
                                   <span onClick={this.delMeet}>删除</span>                       

                                </td>
                             </tr>
                    })                     
                  }
          
        </tbody>
      </table>
      {/* 表格区结束 */}
      {/* 遮罩区 */}
      <div className="model"  style={modelStyle}>
      <div className="addMeet">
      <div className="titleModel">添加内容</div>
      <span>会议主题：</span><input  type="text" className="addNum"  placeholder="请输入内容" value={this.state.title} onChange={(event)=>{
                  this.titleClick(event)
                }}></input>
      <span>会议地点：</span><input type="text" className="addNum"   placeholder="请输入内容"value={this.state.name} onChange={(event)=>{
                  this.placeClick(event)
                }}></input>
      <span>会议内容：</span><input type="text" className="addNum"    placeholder="请输入内容"value={this.state.name} onChange={(event)=>{
                  this.navClick(event)
                }}></input>
                <button  style={{position:"absolute",left:'70%'}} onClick={()=>{
                  this.closeEditDialog()
                }}>取消</button>
         <button onClick={()=>{
                 
                  this.addMeet();
                  this.closeEditDialog()
                }}>确定</button> 
      </div>
      
      </div>
      {/* 遮罩区结束 */}
      
      </div>
    )
  }
}
export default MeetingRoomLayout;