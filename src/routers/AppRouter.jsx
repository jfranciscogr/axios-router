import React from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { UsuariosPage } from '../pages/usuarios/UsuariosPage';
import { ListadoMarcas } from '../pages/marcas/ListadoMarcas';
import { HomePage } from '../pages/HomePage';
import LayoutPrivate from '../Components/layouts/LayoutPrivate';
import { Unauthorized } from '../Components/errorsPage/Unauthorized';
import { NotFoundPage } from '../Components/errorsPage/NotFoundPage';
import { MarcaRoutes } from '../pages/marcas/routers/MarcaRoutes';

const ROLES = {
	User: 2001,
	Editor: 1984,
	Admin: 5150,
};

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route path="unauthorized" element={<Unauthorized />} />

				<Route element={<LayoutPrivate />}>
					<Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
						<Route path="/" element={<HomePage />} />
					</Route>
					<Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
						<Route path="usuarios" element={<UsuariosPage />} />
					</Route>
					<Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
						<Route path="marcas/*" element={<MarcaRoutes />} />
					</Route>
					{/* <Route element={<PrivateRoute allowedRoles={[ROLES.User]} />}>
						<Route path="*" element={<Navigate to="home" />} />
					</Route> */}
				</Route>
				{/* <Route path="/*" element={<Navigate to="/" />} /> */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
};
