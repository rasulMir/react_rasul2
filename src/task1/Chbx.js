import React from "react";
import chbx from './Chbx.module.css';

class Chbx extends React.Component {
	constructor (props) {
		super(props);
	}

	render() {
		return (
			<label htmlFor="chbx" className={chbx.lbl}>
				<input className={chbx.chbx} onChange={this.props.change} id="chbx" type="checkbox" />
				Dark mode
			</label>
		);
	}
}

export default Chbx;