import React from "react";
import Form from "./Form";
import Table from "./Table";
import s from "./Task6.module.css";

export default class Task6 extends React.Component {

	constructor() {
		super();
		this.state = {
			name: '',
			num: '',
			mail: '',
			id : '',
			contacts : []
		}
	}

	onChange = (ev) => {
		let current = ev.target;

		if (current.type === 'text') {
			this.setState({name : current.value });
		}
		else if (current.type === 'number') {
			this.setState({num : current.value });
		}
		else if (current.type === 'email') {
			this.setState({mail : current.value });
		}
	}

	btnAdd = (ev) => {
		ev.preventDefault();
		let state = this.state;
		let contact = {
			name : state.name,
			num : state.num,
			mail : state.mail,
			id : Math.random().toString(36).substr(2,9),
		}

		state.contacts.push(contact);
		this.setState({
			name: '',
			num: '',
			mail: '',
			id: '',
			contacts : state.contacts,
		});
	}

	delContact = (id) => {
		let filtered = this.state.contacts.filter(contact => contact.id !== id);
		this.setState({
			contacts : filtered
		});
	}

	render() {
		return(
			<div className={s.wrapper}>
				<div className={s.col}>
					<h2 className={s.title}>Добавить</h2>
					<Form onchange={this.onChange} onclick={this.btnAdd}
						value={
							{
								txt: this.state.name,
								num : this.state.num,
								mail : this.state.mail
							}
							}/>
				</div>
				<div className={s.col}>
					<h2 className={s.title}>Список контактов</h2>
					<Table contacts={this.state.contacts} onclick={this.delContact}/>
				</div>
			</div>
		);
	}
}