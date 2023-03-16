import { createContext, useState } from 'react';

const SibiContext = createContext();
//  not-authenticated

const SibiProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		authStatus: 'authenticated',
		user: {
			name: 'Jose Francisco',
			roles: [2001],
		},
		startChecking: true,
	});
	const [error, setError] = useState(null);

	const cambiaStatus = status => {
		// setAuthState(status);
		setAuthState(prevState => {
			return { ...prevState, ...status };
		});
	};

	const isLoadin = () => {
		setAuthState(prevState => {
			return { ...prevState, startChecking: !prevState.startChecking };
		});
	};

	return (
		<SibiContext.Provider
			value={{ ...authState, error, setError, cambiaStatus, isLoadin }}
		>
			{children}
		</SibiContext.Provider>
	);
};

export { SibiProvider };
export default SibiContext;
