import React from "react";
import propTypes from "prop-types";

const estilosH1 = {};

const Home = (props) => {
	return <div>{props.numSec}</div>;
};

Home.propTypes = {
	numSec: propTypes.number,
};
export default Home;
