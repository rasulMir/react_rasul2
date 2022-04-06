import React from "react";
import t from "./Task5.module.css";
import Button from "./Button";
import Quote from "./Quote";
export default class Card extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div 
				className={t.card} 
				style={{color : this.props.quote.color}}>
				<Quote quote={this.props.quote}/>
				<Button  
					className={t.btn} 
					onClick={this.props.btnHandler} 
					style={{backgroundColor : this.props.quote.color}}
					>
						New Quote
				</Button>
			</div>
		);
	}
} 