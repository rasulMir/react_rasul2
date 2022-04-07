import React from "react";
import t from "./Task6.module.css";

export default class InpText extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className={t.inpWrap}>
				<h4 className={t.inpTitle}>{this.props.title}</h4>
				<input className={t.inp} {...this.props}/>
			</div>
		);
	}
}