import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { IndexPage } from '../pages/Index';

export const Routes = () => {
	return (
		<RouterRoutes>
			<Route path="/" element={<IndexPage />} />
		</RouterRoutes>
	);
};
