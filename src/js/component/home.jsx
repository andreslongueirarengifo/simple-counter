import React from "react";
import { useState, useEffect } from "react";


//imports components 
import Seconds from "./second-component.jsx";
import Minutes from "./minute-component.jsx";
import Hours from "./hour-component.jsx";

//create your first component
const Home = () => {

	const [secondCounter, setCountSeconds] = useState(0);
	let countSeconds = 0;
	const [minuteCounter, setCountMinutes] = useState(0);
	let countMinutes = 0;
	const [hourCounter, setCountHours] = useState(0);

	useEffect(()=>{
		const interval = setInterval(()=>{
			if(countSeconds<59){
				setCountSeconds(secondCounter => secondCounter+1)
				countSeconds++;
			}else if(countMinutes<59){
				countSeconds=0;
				setCountSeconds(secondCounter => secondCounter=0)
			  	setCountMinutes(minuteCounter => minuteCounter+1)
				countMinutes++;
			}else{
				countMinutes=0;
				setCountMinutes(minuteCounter => minuteCounter=0)
				setCountHours(hourCounter => hourCounter+1)
			}
	   	},1000)
	   	return () => clearInterval(interval);
	},[])

	return (
		<div className="d-flex justify-content-center">
			<Hours prop={hourCounter}/>
			<p>:</p>
			<Minutes prop={minuteCounter}/>
			<p>:</p>
			<Seconds prop={secondCounter}/>
		</div>
	);
};

export default Home;
