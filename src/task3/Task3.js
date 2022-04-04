import React from "react";
import t from "./Task3.module.css";
import Item from "./Item";

class Task3 extends React.Component {

	constructor() {
		super();
		this.state = {
			toDoItems : [],
		};
	}

	handlerChange = (ev) => this.inpTxt = ev.target;

	handlerAdd = (ev) => {
		let item = {
			txt : this.inpTxt.value,
			id : Math.random().toString(36).substr(2, 9),
			isDone : false,
		};
		let toDoArr = this.state.toDoItems;
		toDoArr.push(item);
		this.setState({
			toDoItems: toDoArr,
		});
		this.inpTxt.value = '';
	}

	handlerDel = (id) => {
		let filtered = this.state.toDoItems.filter(item => item.id !== id);
		this.setState({
			toDoItems : filtered
		});
	}

	render() {
		return(
			<div className={t.wrap} >
				<h2 className={t.title} >my to do list</h2>
				<div>
					<input className={t.toDoInpTxt} onChange={this.handlerChange} type="text"/>
					<button className={t.addBtn} onClick={this.handlerAdd} >add #{ this.state.toDoItems.length }</button>
				</div>
				<ul  className={t.itemsWrap}>
					{this.state.toDoItems.map(item=> <Item key={item.id} data={item} handlerClick={this.handlerDel} />)}
				</ul>
			</div>
		);
	}
}

export default Task3;