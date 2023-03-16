import React from 'react';
import { checkAuthToken, startLogin } from '../../services/auth';

export const LoginPage = () => {
	const handleSubmit = async () => {
		try {
			await startLogin({
				email: 'jfranciscogr@gmail.com',
				password: '123456',
			});
		} catch (error) {
			console.log(error.response?.data?.errores);
		}
	};

	const handleRefresh = async () => {
		try {
			await checkAuthToken();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<h1>Login</h1>
			<button className="btn btn-primary" onClick={handleSubmit}>
				Login
			</button>
			<button className="btn btn-primary" onClick={handleRefresh}>
				Refresh
			</button>
			;
		</>
	);
};
