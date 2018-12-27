
//TeacherLayout页面中form表单组件

import React,{Component} from 'react';
import './style/TeacherForm.css'

class TeacherForm extends Component{


    //重写成员方法
    render(){
        return (
            <div className="teacherForm">
                <form action="">
                    <div className="row">
                        <div>
                            输入姓名：<input type="text"/>
                            </div>
                            <div>
                            输入年龄：<input type="text"/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                                性别：
                                <label>
                                男： <input type="radio"/>
                                </label>
                                <label>
                                女： <input type="radio"/>
                                </label>
                        </div>
                        <div>
                            家庭住址：
                            <select name="" id="">
                                <option value="">江西</option>
                                <option value="">上海</option>
                                <option value="">江苏</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            爱好：
                            <label>
                                篮球：<input type="checkbox"/>
                            </label>
                            <label>
                                足球：<input type="checkbox"/>
                            </label>
                            <label>
                                羽毛球：<input type="checkbox"/>
                            </label>
                            <label>
                                排球：<input type="checkbox"/>
                            </label>
                           
                        </div>
                        <div>
                            <span className="sigle">个人简介：</span>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>

                    <button type="button">添加</button>                    
                   
                   

                </form>
            </div>
        )
    }


}

export default TeacherForm;
