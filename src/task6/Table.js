import React from "react";
import Button from "../task6/Button";
import t from "./Task6.module.css";

export default class Table extends React.Component {

	constructor(props) {
		super(props);
	}

	contacts = () => {
		if (this.props.contacts.length) {
			return this.props.contacts.map( (it, i) => {
				return(
					<tr key={i}>
						<td>{it.name}</td>
						<td>{it.num}</td>
						<td>{it.mail}</td>
						<td>
							<button className={t.btn} 
								onClick={() => this.props.onclick(it.id)}>
								Удалить
							</button>
						</td>
					</tr>
				);
			});
		}
		else {
			return(
				<tr>
					<td>Пусто</td>
				</tr>
			);
		}
	}
	render() {
		return(
			<table className={t.table}>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Телефон</th>
						<th>Емаил</th>
					</tr>
				</thead>
				<tbody>
					{this.contacts()}
				</tbody>
			</table>
		);
	}
}