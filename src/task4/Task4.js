import React from "react";
import t from "./Task4.module.css";
import Form from "./Form";

export default class Task4 extends React.Component {
	constructor() {
		super();
		
	}

	componentDidMount() {
		// console.log('componentDidMount');
	}

	componentDidUpdate() {
		// console.log('componentDidUpdate');
	}

	render() {
		return(
			<div className={t.wrap}>
				<Form />
			</div>
		);
	}
} 