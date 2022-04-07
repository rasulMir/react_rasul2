import React from "react";
import Button from "./Button";
import t from "./Task8.module.css";

export default class Task8 extends React.Component {

	constructor() {
		super();
		this.state = {
			degree : 0
		}
	}

	topOutput = () => {
		let elem;
		if (this.state.degree < 0) {
			elem = <p className={t.ice}>Лед {this.state.degree}</p>;
		}
		else if (this.state.degree > 100) {
			elem = <p className={t.steam}>Пар {this.state.degree}</p>;
		}
		else {
			elem = <p className={t.water}>Вода {this.state.degree}</p>;
		}
		return elem;
	}

	onclick = (ev) => {
		let multiple = +ev.target.name;
		let prev = this.state.degree;
		this.setState({ degree : prev + multiple });
	}

	render() {
		return(
			<div>
				<div className={t.top}>
					{this.topOutput()}
				</div>
				<div className={t.btns}>
					<Button onClick={this.onclick} name='1' children='1' />
					<Button onClick={this.onclick} name='10' children='10' />
					<Button onClick={this.onclick} name='-1' children='-1' />
					<Button onClick={this.onclick} name='-10' children='-10' />
				</div>
			</div>
		);
	}
}