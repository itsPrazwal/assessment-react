import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const NormalRoute = ({ component: Component, ...data }) => {
	return (
		<>
			<Route
				{...data}
				render={(props) => {
					return (
						<>
							{/*NAVIGATION*/}
							<Component {...props} />
							{/*FOOTER*/}
						</>
					);
				}}
			/>
		</>
	);
};

NormalRoute.propTypes = {
	component: PropTypes.element
};

export default NormalRoute;
