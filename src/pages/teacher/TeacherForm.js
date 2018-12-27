
//TeacherLayout页面中form表单组件

import React,{Component} from 'react';
import './style/TeacherForm.css';
import {http} from './mock/axios'

class TeacherForm extends Component{
    //构造函数获取/设置属性
    constructor(props){
        super(props);
        this.state={
            form:{
                id:'1',
                name:'',
                age:"",
                gender:'men',
                address:"",
                likes:[],
                sigle:""
            },
            addressList:[],
            returnAddTeacherList:[]//添加教师之后返回的数组
        }
     //   Object.assign(this.state,this.props);
    }

    //生命周期
    componentWillMount(){//组件即将绑定
        //在组件即将绑定之前发送请求，返回默认所有家庭住址
        http.apiGet("/addressList").then((response)=>{
            var addressList=response.data.list;
            if(addressList.length>0){
                this.setState({
                    addressList:addressList
                })

            }
          });
    }
    //生命成员方法
    //非多选框change方法
    handlerChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
    
        let data = Object.assign({}, this.state.form, { [name]: value })
         this.setState({
            form:data
        });
    }
    //多选框change方法
    checkboxChange=(event)=>{
        let value=event.target.value;

        let likes = this.state.form.likes;
        let index=likes.indexOf(value);//在likes中查找当前用户选择的value，找不到返回-1，找到返回当前元素位置idnex
        index===-1?likes.push(value):likes.splice(index,1);
        let data = Object.assign({}, this.state.form, { likes: likes })
        this.setState({
            form:data
        });

    }
    //表单提交
    formSubmit=(event)=>{
        //获取用户添加的数据表单
        var id=1001;
        id++;
        let form = Object.assign({}, this.state.form, { id: id })
       // var form=this.state.form;
        var self=this;
        //发送请求
        http.apiPost('/addTeacher',form).then((params)=>{
            //返回值为添加之后的数组
            self.setState({
                returnAddTeacherList:params.data//准备向父组件传值，再有父组件向子组件传递进行页面刷新
            });

             //向父组件船传值
            this.props.GetStates(this.state.returnAddTeacherList);
        });

       
       

         
        
        event.preventDefault();
    }

    //重写生命周期渲染方法
    render(){
        let {id,name,age,gender,address,sigle}=this.state.form;
        let {addressList}=this.state;
        return (
            <div className="teacherForm">
               {/*  {JSON.stringify(this.state.form)} */}
                <form action="" onSubmit={this.formSubmit}>
                    <div className="row">
                        <div>
                            <input type="text" value={id} onChange={this.handlerChange} className="hideInput"/>
                            输入姓名：<input type="text" name="name" value={name} onChange={this.handlerChange} required/>
                            </div>
                            <div>
                            输入年龄：<input type="text" name="age" value={age} onChange={this.handlerChange} required/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                                性别：
                                <label>
                                男： <input type="radio" name="gender" value="men" checked={gender==='men'?"checked":""} onChange={this.handlerChange}/>
                                </label>
                                <label>
                                女： <input type="radio" name="gender" value="women" checked={gender==='women'?"checked":""} onChange={this.handlerChange}/>
                                </label>
                        </div>
                        <div>
                            家庭住址：
                            <select name="address" value={address} onChange={this.handlerChange} required>
                               {addressList.map(function(item,index){
                                   return <option value={item.name} key={item.id} >{item.name}</option>
                               })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            爱好：
                            <label>
                                篮球：<input type="checkbox" name="likes" value="篮球" onChange={this.checkboxChange}/>
                            </label>
                            <label>
                                足球：<input type="checkbox" name="likes" value="足球" onChange={this.checkboxChange}/>
                            </label>
                            <label>
                                羽毛球：<input type="checkbox" name="likes" value="羽毛球" onChange={this.checkboxChange}/>
                            </label>
                            <label>
                                排球：<input type="checkbox" name="likes" value="排球" onChange={this.checkboxChange}/>
                            </label>
                           
                        </div>
                        <div>
                            <span className="sigle">个人简介：</span>
                                <textarea name="sigle" value={sigle} onChange={this.handlerChange} cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <button>添加</button>                    
                   
                   

                </form>
            </div>
        )
    }


}

export default TeacherForm;
