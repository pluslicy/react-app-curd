import React,{Component} from 'react'
import mock from './mock/mock.js'
import axios from 'axios'
import './GoodsList.css'

class GoodsList extends Component{
	constructor(props){
		super(props);
		this.state = {
			goods:[]
		}
	}
	// 生命周期函数，再次获取mock中数据
	componentWillMount(){
		axios.get('/GoodsList')
		.then((res)=>{
			var goods = res.data.list;
			if(goods.length>0){
				this.setState({
					goods:goods
				})
			}
		})
	}
	deleteGoods = (id)=>{
		alert('id='+id)
	}
	render(){
		let {goods} = this.state; 
		return(
			<div className='goods_list'>
				<table>
					<thead>
						<tr>
							<td>选择</td>
							<td>商品名</td>
							<td>单价</td>
							<td>商品类别</td>
							<td>产地</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						{
							goods.map((item,index)=>{
								return(
									<tr key={index}>
										<td>
											<input type="checkbox" value={index}/>
										</td>
										<td>{item.name}</td>
										<td>￥{item.money}</td>
										<td>{item.category}</td>
										<td>{item.address}</td>
										<td>
											<span onClick={this.deleteGoods.bind(this,index)}>删除</span>
											{/* 向父组件传值，改变父组件中#goods_from的display属性 使其显示出GoodsFrom模块（还未弄明白传值） */}
											<span>修改</span>
										</td>
									</tr>
								)
							})
						}
					</tbody>
				</table>
			</div>
		)
	}
}
export default GoodsList