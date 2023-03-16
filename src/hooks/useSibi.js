import { useContext } from 'react';
import SibiContext from '../context/SibiProvider';

export const useSibi = () => {
	return useContext(SibiContext);
};
