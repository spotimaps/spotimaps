import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import StartModal from './components/StartModal';
import './components/StartModal.css';
import { locationPermissionError } from './components/Errors';
import Swal from 'sweetalert2';
import Calls from './Calls';
import './App.css';


const App = () => {
	console.log("Version 4.1.5");
	const [data, setData] = useState([]);
	const [center, setCenter] = useState([ 34.42, -119.99 ]);

	const getToken = (code, pos) => {
		console.log(code);
		if(code === null){
			return;
		}
		fetch('https://spotimaps.appspot.com/token?code=' + code)
		.then(res => {
			return res.json();
		}).then(res => {
			console.log(res.access_token);
			let myHeaders = new Headers();
			myHeaders.append("Authorization", "Bearer " + res.access_token);
			fetch('https://api.spotify.com/v1/me/player/currently-playing', {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
			}).then(resp => {
				return resp.json();
			}).then(resp => {
				console.log(resp);
				Calls.add({
					info: {
						name: resp.item.name,
						audio: resp.item.preview_url,
						img: resp.item.album.images[0],
						artist: resp.item.artists[0].name
					},
					lat: pos.coords.latitude,
					lng: pos.coords.longitude
				});
			});
		});
	}

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		navigator.geolocation.getCurrentPosition(
            pos => {
                setCenter([ pos.coords.latitude,
							pos.coords.longitude ]);
				getToken(urlParams.get('code'), pos);
            }, locationPermissionError);
		Calls.get(setData);
		if(urlParams.get('code') === null){
			Swal.fire({
				html: StartModal,
				confirmButtonText: 'Log into Spotify',
				showCancelButton: true,
			}).then(result => {
				if (result.value) window.location.href = "https://spotimaps.appspot.com/login";
			});
		}
	}, []);

	return (
		<div className="site-wrapper">
			{/* <StartModal style={{display: start ? "block" : "none"}} onClick={setStart.bind(null, false)}/> */}
			<Map data={data} center={center}/>
		</div>
	);
}

export default App;
