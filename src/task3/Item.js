import React from "react";
import t from "./Task3.module.css";

class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDone : props.data.isDone,
			txt : props.data.txt,
		}
	}

	handlerIsDone = () => {
		let bool = this.state.isDone;
		this.setState({
			isDone : !bool
		});
	}

	render() {
		return(
			<li className={t.item}>
				<input 
					checked={this.state.isDone ? 'checked' : ''}
					className={t.chbx} 
					type="checkbox" 
					onChange={this.handlerIsDone}/>
				<p
					onClick={this.handlerIsDone}
					className={`${t.txt} ${this.state.isDone ? t.done : ''}`}
					>
					{this.state.txt}
				</p>
				<button className={t.del} onClick={() => {
					this.props.handlerClick(this.props.data.id);
				}} >del</button>
			</li>
		);
	}
}

export default Item;