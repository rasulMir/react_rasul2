import React from "react";
import Button from "./Button";
import t from "./Task4.module.css";

export default class Item extends React.Component {

	constructor(props) {
		super(props);
	}

	onclick = (ev) => {
		ev.preventDefault();
		this.props.onclick(this.props.id);
	}

	render() {
		return(
			<div className={t.item}>
					{this.props.txt}
					<Button onClick={this.onclick} type="button"/>
			</div>
		);
	}
}