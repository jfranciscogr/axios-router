import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ListadoMarcas } from '../ListadoMarcas';
import { MarcaPage } from '../MarcaPage';

export const MarcaRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ListadoMarcas />} />
			<Route path="/:id" element={<MarcaPage />} />
			{/* <Route path="*" element={<NotFoundPage />} /> */}
		</Routes>
	);
};
