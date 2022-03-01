//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="container-fluid bg-black bigCounter">
			<div className="clock rounded border border-white">
				<i
					className=" fa fa-solid fa-clock"
					style={{ height: "25px" }}></i>
			</div>
			<div className="six bg-dark m-2 rounded border border-white">
				{props.digitSix % 10}
			</div>
			<div className="five bg-dark m-2 rounded border border-white">
				{props.digitFive % 10}
			</div>
			<div className="four bg-dark m-2 rounded border border-white">
				{props.digitFour % 10}
			</div>
			<div className="three bg-dark m-2 rounded border border-white">
				{props.digitThree % 10}
			</div>
			<div className="two bg-dark m-2 rounded border border-white">
				{props.digitTwo % 10}
			</div>
			<div className="one bg-dark m-2 rounded border border-white">
				{props.digitOne % 10}
			</div>
		</div>
	);
}

SimpleCounter.prototype = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

//render your react application
let contador = 0;
setInterval(() => {
	const six = Math.floor(contador / 100000);
	const five = Math.floor(contador / 10000);
	const four = Math.floor(contador / 1000);
	const three = Math.floor(contador / 100);
	const two = Math.floor(contador / 10);
	const one = Math.floor(contador / 1);
	console.log(six, five, four, three, two, one);
	contador++;
	ReactDOM.render(
		<SimpleCounter
			digitSix={six}
			digitFive={five}
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
