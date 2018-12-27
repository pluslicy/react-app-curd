// 部门管理页面的布局组件
import React,{Component}  from 'react'
import './DepartmentLayout.css'

class DepartmentLayout extends Component{
  constructor(props){
    super(props)
    this.state = {
        info:[{
          id:1,
          department:'前端',
          mameger:'李--',
          othername:'webUI',
          num:12
        },{
          id:2,
          department:'后台',
          mameger:'崔--',
          othername:'Java',
          num:25
        },{
          id:3,
          department:'大数据',
          mameger:'丁--',
          othername:'bigdata',
          num:25
        },{
          id:4,
          department:'市场部',
          mameger:'薛--',
          othername:'Marketing',
          num:29
        },{
          id:5,
          department:'人事',
          mameger:'吴--',
          othername:'personnel',
          num:32
        },{
          id:6,
          department:'qweee ',
          mameger:'吴--',
          othername:'personnel',
          num:32
        },{
          id:7,
          department:'dsasd',
          mameger:'吴--',
          othername:'personnel',
          num:32
        }]
    }
  }
  handleDelete = (id)=>{
    alert('确定要删除吗？',id);
    let department = this.state.info;
    let newD = department.filter(item =>{
      if(id == item.id){
         return false
      }
       return item      
    })
    this.setState({
        info:newD
    })      
  }
  render(){
    let {state} = this
    return (
      <div className='department_layout'>
       {/* 部门管理页面的布局组件 */}
           {JSON.stringify(this.state)} 
         <div className='topDepartment'>
           <input type="text" placeholder=' 请输入关键子进行搜索'/>
           <button>搜索</button>
         </div>
          <div className='bottomDepartment'> 
           <table>
              <tbody>
                 <tr>
                  <td>部门</td>
                  <td>负责人</td>
                  <td>别称</td>
                  <td>员工</td>
                  <td>操作</td>
                </tr>          
                  {
                     state.info.map((item)=>{
                      return <tr key={item.id}>
                                <td >{item.department}</td>
                                <td>{item.mameger}</td>
                                <td>{item.othername}</td>
                                <td>{item.num}</td>
                                <td> 
                                   <i className="fa fa-trash-o" style={{color:'#d63333'}} onClick = {this.handleDelete.bind(this,item.id)}></i>
                                   <i className="fa fa-pencil" style={{color:'#0055cc'}} onClick = {this.handleDelete.bind(this,item.id)}></i>                                   
                                </td>
                             </tr>
                    })                     
                  }
              </tbody>
           </table>
         </div>


         
         {/*  <div className='dirlog'>
             <div className=''></div>
             <div>
                <span>  部门：</span><input type="text"/><br/>
                <span>  部门：</span><input type="text"/><br/>
                <span>  部门：</span><input type="text"/><br/>
                <span>  部门：</span><input type="text"/><br/>     
             </div>
         </div> 
 */}
      </div>
    )
  }
}
export default DepartmentLayout;