import { ProtectedRouteProps } from './protected-route.props';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const user = false;
	return user ? children : null;
};
