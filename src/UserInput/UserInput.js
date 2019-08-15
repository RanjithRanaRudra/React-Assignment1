import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
	return(
		<div className="UserInput">
			<label className="label">User Input </label>
			<input type="text" onChange={props.change} value = {props.name} />
		</div>
	);
}

export default UserInput;