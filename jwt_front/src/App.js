import React, { useState } from 'react';
import './App.css';

function App() {
	//Single state object
	const [inputValues, setInputValues] = useState({
		form_email: '', form_pass: '', form_first_name: '',
		form_last_name: '', form_phone_number: '', form_age: '', form_gender: '',
	});
	//State handler
	const handleOnChange = event => {
		const { name, value } = event.target;
		setInputValues({ ...inputValues, [name]: value });
	};
	// POST req handler
	const sendReq = (e) => {
		fetch('http://127.0.0.1:8000/api/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				'profile': {
					'first_name': inputValues.form_first_name,
					'last_name': inputValues.form_last_name,
					'phone_number': inputValues.form_phone_number,
					'age': inputValues.form_age,
					'gender': inputValues.form_gender,
				},
				'email': inputValues.form_email,
				'password': inputValues.form_pass
			}),
		})
			.then(res => res.json())
			.then(data => console.log(data))
		//Prevents redirect
		e.preventDefault();
	}
	return (
		<>
			<form onSubmit={sendReq}>

				<label>email:</label>
				<input type="email" name="form_email" onChange={handleOnChange} />

				<label>password:</label>
				<input type="password" name="form_pass" onChange={handleOnChange} />

				<label>first_name:</label>
				<input type="text" name="form_first_name" onChange={handleOnChange} />

				<label>last_name:</label>
				<input type="text" name="form_last_name" onChange={handleOnChange} />

				<label>Phone_number:</label>
				<input type="number" name="form_phone_number" onChange={handleOnChange} />

				<label>age:</label>
				<input type="number" name="form_age" onChange={handleOnChange} />

				<label>gender:</label>
				<input type="text" name="form_gender" onChange={handleOnChange} />

				<input type="submit" value="submit" />

			</form>
		</>
	);
}

export default App;
