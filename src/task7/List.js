import React from "react";
import t from "./Task7.module.css";

export default class List extends React.Component {

	filteredList = (bool) => {
		let filtered = this.props.list.filter(i => (i.isDone === bool));
		return filtered.map(i => {
			return(
				<li
					className={t.li} key={i.id}
					onClick={() => this.props.onChange(i)}
					>
					<input
						type="checkbox"
						defaultChecked={i.isDone}
						/>
					<span>
						{i.toDo}
					</span>
				</li>
			);
		})
	}

	render() {
		return(
			<>
				<h2>{this.props.title}</h2>
				<ul className={t.ul}>
					{this.filteredList(this.props.bool)}
				</ul>
			</>
		);
	}
}