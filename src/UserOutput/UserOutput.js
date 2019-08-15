import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
	return (
		<div className="UserOutput">
			<p> {props.userName} </p>
			<p> {props.children} </p>
		</div>
	);
}

export default UserOutput;