import React from "react";
import c from "./task2.module.css";

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			counter : 0
		}
	}

	handlerClick = () => {
		let increment = this.state.counter;
		increment++;
		this.setState({
			counter : increment
		});
	}

	render() {
		return (
			<div className={c.wrap}>
				<h2 className={c.title} >Counter</h2>
				<h3 className={c.txt}>
					I have been clicked <span className={c.count}>{this.state.counter}</span> time!
				</h3>
				<button onClick={this.handlerClick} className={c.btn}>click me</button>
			</div>
		);
	}
}

export default Counter;