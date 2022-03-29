import React, { useState }  from 'react';



function Form(props) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

function handleSubmit(event) {
event.preventDefault();
}

function handleChangeEmail(event) {
event.preventDefault();
}

function handleChangePassword(event) {
event.preventDefault();
}

    return (
			<div>
				<form onSubmit={handleSubmit}>
					<input id='email' type='email' placeholder='Email Address' onChange='handleChangeEmail' />
					<input id='password' type='password' placeholder='Password' onChange='handleChangePassword'/>
					<button type='submit' >Login</button>
				</form>
			</div>
		);
}

export default Form;