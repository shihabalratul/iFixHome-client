import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
	const auth = JSON.parse(localStorage.getItem("userInfo"));
	return (
		<Route
			{...rest}
			render={({ location }) =>
				auth?.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: location }
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;