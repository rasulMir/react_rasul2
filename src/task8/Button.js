import React from "react";
import t from "./Task8.module.css";

export default class Button extends React.Component {

	render() {
		return(
			<button className={t.btn} {...this.props}>
				{this.props.children}
			</button>
		);
	}
}