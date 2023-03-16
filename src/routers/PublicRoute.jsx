import { Navigate } from 'react-router-dom';
import { useSibi } from '../hooks/useSibi';

export const PublicRoute = ({ children }) => {
	const { authStatus } = useSibi();

	return authStatus === 'authenticated' ? <Navigate to="/" /> : children;
};
