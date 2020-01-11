import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import StartModal from './components/StartModal';
import './components/StartModal.css';
import Swal from 'sweetalert2';
import Calls from './Calls';
import './App.css';


const App = () => {
	const [data, setData] = useState([]);
	const [start, setStart] = useState(true);

	useEffect(() => {
		Calls.get(setData);
		Swal.fire({
			html: StartModal
		});
	}, []);

	return (
		<div className="site-wrapper">
			{/* <StartModal style={{display: start ? "block" : "none"}} onClick={setStart.bind(null, false)}/> */}

			<Map data={data} />
		</div>
	);
}

export default App;
