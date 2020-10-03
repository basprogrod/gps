import { useEffect, useState } from "react"
import getDistance from "../utils/getDistance"

export default (lat, lon, lat1, lon1) => {
  const [state, setState] = useState(0)

  useEffect(() => {
    setState(
      getDistance(lat, lon, lat1, lon1)
    )
  }, [lat, lon, lat1, lon1])

  return state
}