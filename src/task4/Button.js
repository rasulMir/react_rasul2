import React from "react";
import t from "./Task4.module.css";

export default class Button extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		return(
			<button 
				{...this.props}
				className={t.btnDel}
				>
					X
			</button>
		);
	}
}