import axios from "axios"
import { useEffect, useState } from "react"
import { DB_URL, REFRESH_INTERVAL } from "../constants/config"

let tid

export default (who) => {
	const [state, setState] = useState({
		lat: 0,
		lon: 0,
	})

	const getData = () => {
		tid = setInterval(async () => {
			try {
				const data = await axios.get(`${DB_URL}/${who}.json`)
				// console.log(who, data)
				setState({
					...state,
					...data.data,
				})
			} catch (error) {
				console.log("TCL: getData -> error", error)
				
			}
		}, REFRESH_INTERVAL)
		

	}

	useEffect(() => {
		getData()
		return () => clearInterval(tid)
	}, [])


	return [state.lat, state.lon]
}