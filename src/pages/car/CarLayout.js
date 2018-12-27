// 车辆管理页面的布局组件
import React,{Component}  from 'react'
import {BrowserRouter , Route , Link} from 'react-router-dom'
import './CarLayout.css'

import Dazhong from'./dazhong/Dazhong'
import Fengtian from'./fengtian/Fengtian'
import Benchi from './benchi/Benchi'
import Bentian from './bentian/Bentian'
import Baoma from './baoma/Baoma'
import Richan from './richan/Richan'
import Audi from './aodi/Audi'
import Fute from './fute/Fute'
import Jili from './jili/Jili'
import Bieke from './bieke/Bieke'

class CarLayout extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list:[{
        label:'大众',
        link:'/car/dazhong'
      },{
        label:'丰田',
        link:'/car/fengtian'
      },{
        label:'奔驰',
        link:'/car/benchi'
      },{
        label:'本田',
        link:'/car/bentian'
      },{
        label:'宝马',
        link:'/car/baoma'
      },{
        label:'日产',
        link:'/car/richan'
      },{
        label:'奥迪',
        link:'/car/aodi'
      },{
        label:'福特',
        link:'/car/fute'
      },{
        label:'吉利',
        link:'/car/jili'
      },{
        label:'别克',
        link:'/car/bieke'
      }]
    }
  }
  addCar = ()=>{
    // let arr = [...this.state.list]
    alert('暂无功能')
  }
  render(){ 
    return (
      <div className='car_layout'>
        <BrowserRouter>
          <div className="car_content">
            <div className="car_left">
              <Route exact path="/car/dazhong" component={Dazhong} />
              <Route exact path="/car/fengtian" component={Fengtian} />
              <Route exact path="/car/benchi" component={Benchi} />
              <Route exact path="/car/bentian" component={Bentian} />
              <Route exact path="/car/baoma" component={Baoma} />
              <Route exact path="/car/richan" component={Richan} />
              <Route exact path="/car/aodi" component={Audi} />
              <Route exact path="/car/fute" component={Fute} />
              <Route exact path="/car/jili" component={Jili} />
              <Route exact path="/car/bieke" component={Bieke} />
            </div>
            <div className="car_tab">
              {this.state.list.map((item,index)=>{
                return(
                  <Link to={item.link} key={index}><div className="car_nav_item">{item.label}</div></Link>
                )
              })}
              <div className="car_nav_item_last" onClick={(event)=>{this.addCar(event)}}>新增+</div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
export default CarLayout;