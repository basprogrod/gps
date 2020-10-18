import axios from "axios"
import { useEffect, useState } from "react"
import { DB_URI, REFRESH_INTERVAL, _ } from '../constants/config'

let id
// navigator.geolocation.watchPosition = (cb) => {
// 	let latitude = 53.8935296, longitude = 27.5677184
// 	setInterval((e) => {
// 		latitude = +(+latitude + 0.00001).toFixed(7)
// 		longitude = +(+longitude + 0.00001).toFixed(7)
// 		cb({coords: { latitude, longitude } })
// 	}, 1000)
// }

export default (who, deps = []) => {

	const [state, setState] = useState({
		lat: 0,
		lon: 0,
	}, [])
	
	const onError = (e) => {
		if (e.code === 1) {
			alert('Разрешите мне геолокацию')
		}
	}

	const onSuccess = (e) => {
		const coords = {
			lat: e.coords.latitude,
			lon: e.coords.longitude,
		}
		setState(coords)
	}

	const onChangePosition = (e) => {
		// console.log("TCL: onChangePosition -> e", e.coords)
		const coords = {
			lat: e.coords.latitude,
			lon: e.coords.longitude,
		}
		setState(coords)
		// const { latitude, longitude } = e.coords
		// const data = JSON.stringify({ lat: latitude, lon: longitude })
		// axios.put(`${DB_URI}/${who}.json`, data)


	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(onSuccess, onError)

		const options = {
			enableHighAccuracy: false,
			timeout: REFRESH_INTERVAL,
			maximumAge: 0
			}
	
		id = navigator.geolocation.watchPosition(onChangePosition, _, options)

		return () => navigator.geolocation.clearWatch(id)

	}, deps)

	return state

}