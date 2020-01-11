import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import Calls from './Calls';
import './App.css';


const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		Calls.get(setData);
	}, []);

	return (
		<div className="site-wrapper">
			<Map data={data} />
		</div>
	);
}

export default App;
