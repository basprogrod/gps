import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { DB_URL, REFRESH_INTERVAL, _ } from '../constants/config'

// interface IWindow extends Window {
// 	axi: any
// 	ax: any
// }


// let axi = axios
// let ax = (val: any, target: any) => {
// 	return axios.post(`${DB_URL}/${val}.json`, JSON.stringify(target))
// }

let id: number

// navigator.geolocation.watchPosition = (cb) => {
// 	let latitude = 53.8928896, longitude = 27.5677184
// 	setInterval((e) => {
// 		latitude = +(+latitude + 0.00001).toFixed(7)
// 		longitude = +(+longitude + 0.00001).toFixed(7)
// 		cb({coords: { latitude, longitude } })
// 	}, 1000)
// }

export default (who: string, deps: any = []) => {

	const [state, setState] = useState({
		lat: 0,
		lon: 0,
	})
	
	const onError = (e: PositionError) => {
		if (e.code === 1) {
			alert('Разрешите мне геолокацию')
		}
	}

	const onSuccess = (e: Position) => {
		
		const coords = {
			lat: e.coords.latitude,
			lon: e.coords.longitude,
		}
		setState(coords)
	}

	const onChangePosition = (e: Position) => {
		const coords = {
			lat: e.coords.latitude,
			lon: e.coords.longitude,
		}
    console.log("TCL ~ file: useCoords.ts ~ line 54 ~ onChangePosition ~ coords", coords.lat + ', ' + coords.lon)

		setState(coords)

		const { latitude, longitude } = e.coords
		const data = JSON.stringify({ lat: latitude, lon: longitude })
		axios.put(`${DB_URL}/${who}.json`, data)
		axios.post(`${DB_URL}/${who}_data.json`, JSON.stringify(latitude + ', ' + longitude))


	}

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(onSuccess, onError)

		const options: PositionOptions = {
			enableHighAccuracy: false,
			timeout: REFRESH_INTERVAL,
			maximumAge: 0
		}
	
		id = navigator.geolocation.watchPosition(onChangePosition, _, options)

		return () => navigator.geolocation.clearWatch(id)

	}, deps)

	return state

}