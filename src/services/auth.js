import serverApi from '../api/serverApi';

export const startLogin = async ({ email, password }) => {
	try {
		const { data } = await serverApi.post('/auth/login', { email, password });
		localStorage.setItem('token', data.token);
	} catch (error) {
		throw error;
	}
};

export const checkAuthToken = async () => {
	try {
		const { data } = await serverApi.get('/auth/refresh');
		if (data.token) {
			localStorage.setItem('token', data.token);
		} else {
			localStorage.clear();
			console.log('error token');
		}
	} catch (error) {
		localStorage.clear();
		throw error;
	}
};
