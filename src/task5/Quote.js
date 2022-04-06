import React from "react";
import t from "./Task5.module.css";

export default class Quote extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<>
				<p className={t.txt}>
					<span className={t.quote}>"</span>
					{this.props.quote.txt}
				</p>
				<div className={t.author}>(c) {this.props.quote.author}</div>
			</>
		);
	}
} 