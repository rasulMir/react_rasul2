import React from "react";
import task1 from './Task1.module.css';
import Chbx from './Chbx';

class Task1 extends React.Component {
	constructor () {
		super();
		this.state = {
			isDarkMode : false
		}
	}
	changeHandler = (ev) => {
		let isChecked = ev.target.checked;
		this.setState({
			isDarkMode : isChecked
		});
	}
	
	getClassNameMode = () => (this.state.isDarkMode) ? task1.card_dark : task1.card_white;

	render() {
		console.log(task1.card);
		return(
			<div className={` ${task1.card} ${ this.getClassNameMode() } `}>
				<h2 className={task1.title}>
					Render Props!
				</h2>
				<p className={task1.txt}>
					I was build with a two class components.A wrapper that handles state and state changing functions, and child that uses that functionality.
				</p>
				<Chbx change={this.changeHandler} />
			</div>
		);
	}
}



export default Task1;
