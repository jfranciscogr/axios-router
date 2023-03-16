// import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSibi } from '../hooks/useSibi';

export const PrivateRoute = ({ allowedRoles }) => {
	const { authStatus, user } = useSibi();
	// const { checkAuthToken, checking } = useAuth();

	// useEffect(() => {
	// 	checkAuthToken();
	// }, [startChecking]);

	// if (checking) {
	// 	return <h5>Espere...</h5>;
	// }
	console.log(user);
	console.log({ allowedRoles });
	return user.roles?.find(role => allowedRoles?.includes(role)) ? (
		<Outlet />
	) : authStatus === 'authenticated' ? (
		<Navigate to="/unauthorized" />
	) : (
		<Navigate to="/login" />
	);
};
