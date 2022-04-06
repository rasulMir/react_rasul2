import React from "react";
import t from "./Task5.module.css";
import Card from "./Card";

export default class Task5 extends React.Component {
	constructor() {
		super();
		this.state = {
			quote : 0
		}
	}

	newQuote = (limit) => {
		this.setState(prevSt => {
			if(prevSt.quote === limit) {
				return {quote : 0}
			}
			else {
				let num = this.state.quote;
				num++;
				return {
					quote : num
				}
			}
		});
	}

	render() {
		const quotes = [
			{color : '#332022', txt : 'Я такая счастливая!!!', author : 'мария соколова1'},
			{color : 'red', txt : 'Lorem ipsum dolor sit amet consectetur', author : 'мария соколова2'},
			{color : '#9A58B5', txt : 'Accusamus porro iste consectetur labore quam dolore deserunt', author : 'мария соколова3'},
			{color : '#F29A12', txt : 'Lorem ipsum dolor sit amet', author : 'мария соколова4'},
			{color : '#E8602F', txt : 'dolorem ea sit voluptates at sunt necessitatibus velit?', author : 'мария соколова5'},
			{color : '#462C30', txt : 'Aspernatur quos iusto, dolorem', author : 'мария соколова6'},
			{color : '#9E6422', txt : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', author : 'мария соколова7'},
			{color : '#A87728', txt : 'Aspernatur quos iusto, dolorem ea sit voluptates at sunt necessitatibus velit?', author : 'мария соколова8'},
			{color : '#2B3C50', txt : ' Aspernatur quos iusto, dolorem ea sit voluptates at sunt necessitatibus velit?', author : 'мария соколова9'},
			{color : '#929581', txt : 'Я такая счастливая!!!', author : 'мария соколова10'},
			{color : '#834B95', txt : 'Я такая счастливая!!!', author : 'мария соколова11'},
		]

		return(
			<div className={t.wrap} style={{backgroundColor : quotes[this.state.quote].color}}>
				<Card 
					quote={quotes[this.state.quote]} 
					btnHandler={() => this.newQuote(quotes.length - 1)}
					/>
			</div>
		);
	}
} 