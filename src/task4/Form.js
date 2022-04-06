import React from "react";
import Item from "./Item";
import t from "./Task4.module.css";

export default class Form extends React.Component {
	constructor() {
		super();
		this.state = {
			txts : []
		}
	}

	onchange = (ev) => {
		this.inpTxt = ev.target
	};

	onsubmit = (ev) => {
		ev.preventDefault();
		let item = {
			txt : this.inpTxt.value,
			id : Math.random().toString(32).substr(3,8),
		}
		let list = this.state.txts;
		list.push(item);
		this.setState({
			txts: list
		});
		this.inpTxt.value = '';
	}

	delHandler = (id) => {
		let filtered = this.state.txts.filter(item => item.id !== id);
		this.setState({
			txts: filtered
		});
	}

	getItems = () => {
		if(this.state.txts.length) {
			return this.state.txts.map(li => 
				<Item 
					key={li.id}
					txt={li.txt}
					id={li.id}
					onclick={this.delHandler}
				/>
			)
		}
		return;
	}

	render() {
		return(
			<form action="" className={t.form} onSubmit={this.onsubmit}>
				{this.getItems()}
				<input onChange={this.onchange} type="text" className={t.text} />
			</form>
		);
	}
} 