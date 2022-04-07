import React from "react";
import t from "./Task7.module.css";

export default class Form extends React.Component {

	render() {
		return(
			<form onSubmit={this.props.onSubmit} className={t.form}>
				<input 
					type="text"
					onChange={this.props.onChange}
					value={this.props.value}/>
			</form>
		);
	}

}