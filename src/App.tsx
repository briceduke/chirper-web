import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Routes } from './routes/Routes';

export const App = () => {
	const user = false;

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			// set the auth state from user query
			navigate("/home");
		}
	}, [user, navigate]);

	return (
			<Routes />
	);
};
