import axios from 'axios';

function getLocalAccessToken() {
	const accessToken = window.localStorage.getItem('token');
	return accessToken;
}

function getLocalRefreshToken() {
	const refreshToken = window.localStorage.getItem('refreshToken');
	return refreshToken;
}

const serverApi = axios.create({
	baseURL: 'http://sibiapi.test/api',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

// serverApi.interceptors.request.use(
// 	config => {
// 		const token = getLocalAccessToken();
// 		if (token) {
// 			config.headers[Authorization] = `Bearer ${token}`;
// 		}
// 		return config;
// 	},
// 	error => {
// 		return Promise.reject(error);
// 	}
// );
serverApi.interceptors.request.use(config => {
	const token = getLocalAccessToken();
	config.headers = {
		...config.headers,
		Authorization: `Bearer ${token}`,
	};
	return config;
});

export default serverApi;
