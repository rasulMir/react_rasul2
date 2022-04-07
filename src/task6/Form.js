import React from "react";
import InpText from "./InpText";
import t from "./Task6.module.css";

export default class Form extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<form className={t.form}>
				<InpText type="text" title="Имя" onChange={this.props.onchange} value={this.props.value.txt}/>
				<InpText type="number" title="Телефон" onChange={this.props.onchange} value={this.props.value.num}/>
				<InpText type="email" title="Email" onChange={this.props.onchange} value={this.props.value.mail}/>
				<button  className={t.btn} onClick={this.props.onclick}>
					Добавить
				</button>
			</form>
		);
	}
}