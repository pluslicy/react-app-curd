// 商品页面模块表单组件
import React,{Component} from 'react'
import './GoodsFrom.css'

class GoodsFrom extends Component{
	constructor(props){
		super(props);
		this.state={
			name:"",
			money:"",
			category:"",
			address:"",
		}
	}
	handleChange = (event)=>{
		let value = event.target.value;
		let name = event.target.name;
		this.setState({
			[name]:value
		})
	}
	handleSubmit =(event)=>{
		alert(JSON.stringify(this.state));
		// 有数据时，使用axios或ajax传值到后台，由课表页接受
		event.preventDefault();
	}

	render(){
		let {name,money,category,address} = this.state;
		let handleChange = this.handleChange;
		return(
			<div className="goods_from">
				{JSON.stringify(this.state)}
				<form action='save' onSubmit={this.handleSubmit}>
					<div className="name">
						<span>商品名：</span>
						<input type="text" 
									 name='name' 
									 value={name}
									 placeholder='请输入商品名称'
									 onChange={handleChange}
						/>
					</div>
					<div className="money">
						<span>商品价格：</span>
						<input type="text"
									 name='money'
									 value={money}
									 placeholder='请输入商品价格'
									 onChange={handleChange}
						/>
					</div>
					<div className="category">
						<span>商品类别：</span>
						<label>
							<input type="radio"
										 name='category'
										 value='commodity'
										 onChange={handleChange}
										 checked={category=='commodity'?'checked':''}
							/>日用品
						</label>
						<label>
							<input type="radio"
										 name='category'
										 value='food'
										 onChange={handleChange}
										 checked={category=='food'?'checked':''}
							/>食物
						</label>
					</div>
					<div className="address">
						<span>产地：</span>
						<select name="address" value={address} onChange={handleChange}>
							<option value="">请选择</option>
							<option value="JS">江苏</option>
							<option value="ZJ">浙江</option>
							<option value="SH">上海</option>
							<option value="YN">云南</option>
						</select>
					</div>
					<div className="ack_btn">
						<input type="submit" value='保存'/>
					</div>
				</form>
			</div>
		)
	}
}
export default GoodsFrom
