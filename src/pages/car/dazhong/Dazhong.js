// 商品管理页面的布局组件
import React,{Component}  from 'react'
import './Dazhong.css'
class Dazhong extends Component{
  constructor(props){
    super(props)
    this.state={
      src:"https://car3.autoimg.cn/cardfs/series/g29/M07/AF/BE/100x100_f40_autohomecar__wKgHJFs9vGCABLhjAAAxZhBm1OY195.png",
      tableitem:[{
        id:0,
        name:"Polo",
        price:"7.59-14.69"
      },{
        id:1,
        name:"桑塔纳",
        price:"8.49-13.89"
      },{
        id:2,
        name:"朗逸",
        price:"10.99-16.59"
      },{
        id:3,
        name:"凌度",
        price:"14.59-22.89"
      },{
        id:4,
        name:"帕萨特",
        price:"18.99-30.39"
      }],
      dialog:"none",
      name:'',
      price:'',
    }
  }
  // 弹框
  openDialog = ()=>{
    let dialog = 'block';
    this.setState({
      dialog:dialog
    })
  }
  closeDialog = ()=>{
    let dialog = 'none';
    this.setState({
      dialog:dialog
    })
  }
  // 增加
  nameChange = (event)=>{
    this.setState({
      name:event.target.value
    })
  }
  priceChange = (event)=>{
    this.setState({
      price:event.target.value
    })
  }
  addNewCar = ()=>{
    let arr = [...this.state.tableitem]
    let obj = {
      id:arr.length,
      name:this.state.name,
      price:this.state.price
    }
    arr.push(obj);
    this.setState({
      tableitem:arr
    })
  }
  // 编辑
  edit = (index,event)=>{

  }
  // 删除
  del = (index,event)=>{
    let arr = [...this.state.tableitem]
    arr.splice(index,1)
    this.setState({
      tableitem:arr
    })
  }
  render(){
    let dialogStyle = {
      display:this.state.dialog
    }
    let inputStyle = {
      border:'1px #ccc solid',
      borderRadius:'5px',
      lineHeight:'30px',
      width:'50%',
      padding:'0 0.5em',
    }
    return (
      <div className='car_dazhong'>
        {/* dialog开始 */}
        <div className="dialog_model" style={dialogStyle}>
          <div className="dialog_div" style={dialogStyle}>
            <div className="dialog_div_title">
              新 增
              <span style={{float:'right',marginRight:'12px',cursor:'pointer'}} onClick={()=>{
                this.closeDialog()
              }}>×</span>
            </div>
            <div className="dialog_div_content">
              <div style={{height:'30px',lineHeight:'30px'}}>
                <label style={{width:'80px',cursor:'default',}}>车型：</label>
                <input type="text" placeholder="请输入车型" style={inputStyle} value={this.state.name} onChange={(event)=>{
                  this.nameChange(event)
                }}></input>
              </div>
              <div style={{height:'30px',lineHeight:'30px',marginTop:'30px'}}>
                <label style={{width:'80px',cursor:'default',}}>价格：</label>
                <input type="text" placeholder="请输入价格" style={inputStyle} value={this.state.price} onChange={(event)=>{
                  this.priceChange(event)
                }}></input>
              </div>
              <div style={{float:'right',marginRight:'1.5em',marginTop:'50px'}}>
                <button className="blue_button" style={{background:"#ccc"}} onClick={()=>{
                  this.closeDialog()
                }}>取消</button>
                <button className="blue_button"onClick={()=>{
                  this.closeDialog()
                  this.addNewCar();
                }}>确定</button>
              </div>
            </div>
          </div>
          
        </div>
        {/* dialog结束 */}
        <div style={{height:'50px',fontSize:'28px',lineHeight:'50px'}}>
          <img src={this.state.src} alt="" style={{width:'50px',height:'50px',verticalAlign:'middle'}}></img>
          大众（Volkswagen）
        </div>
        <button className="blue_button" onClick={(event)=>{
          this.openDialog()
        }}>新增+</button>
        {/* <button className="blue_button">2</button>
        <button className="blue_button">3</button> */}
        <table style={{border:'1px solid black',width:'95%',textAlign:'center'}} border="1" cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td>编号</td>
              <td>车型</td>
              <td>价格</td>
              <td>操作</td>
            </tr>
            {this.state.tableitem.map((item,index)=>{
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <span style={{color:'blue',fontWeight:'700',cursor:'pointer'}} onClick={(event)=>{
                      this.edit(index,event)
                    }}>编辑</span>
                    <span style={{marginLeft:'20px',color:'red',fontWeight:'700',cursor:'pointer'}} onClick={(event)=>{
                      this.del(index,event)
                    }}>删除</span>
                  </td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Dazhong;