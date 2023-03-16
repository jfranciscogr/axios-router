import React from 'react';
import { SibiProvider } from './context/SibiProvider';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
	return (
		<SibiProvider>
			<AppRouter />
		</SibiProvider>
	);
};
