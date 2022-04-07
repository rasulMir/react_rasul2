import React from "react";
import Form from "./Form";
import List from "./List";
import t from "./Task7.module.css";

export default class Task7 extends React.Component {

	constructor() {
		super();
		this.state = {
			txt : '',
			list : []
		};
	}

	
	onSubmit = (ev) => {
		ev.preventDefault();
		let ID = Math.random().toString(36).substr(2,9);
		let inpTxt = this.state.txt;
		let newList = this.state.list;
		let obj = { isDone: false, toDo : inpTxt, id: ID}
		newList.push(obj);
		this.setState({
			txt : '',
			list : newList
		});
	}

	onChange = (ev) => this.setState({ txt : ev.target.value });

	chbxHandle = (item) => {
		let newList = this.state.list.map(i => {
			if(i.id === item.id) {
				i.isDone = !item.isDone;
				return i;
			}	
			return i;
		});
		this.setState({ list : newList });
	}

	render() {
		return(
			<div className={t.wrap}>
				<Form 
					onSubmit={this.onSubmit}
					onChange={this.onChange} 
					value={this.state.txt}
					/>
				<List
					title="ToDo"
					list={this.state.list}
					onChange={this.chbxHandle}
					bool={false}
					/>
				<List
					title="isDone"
					list={this.state.list}
					onChange={this.chbxHandle}
					bool={true}
					/>
			</div>
		);
	}
}