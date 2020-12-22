import { LIMIT } from "../constants/config"
import splitCoordsFromString from "./splitCoordsFromString"

export default (distance) => {
console.log("TCL: target, {lat, lon}", target, lat, lon)
  const [targetLat, targetLon] = splitCoordsFromString(target)

  const maxLat = +targetLat + LIMIT
  const minLat = +targetLat - LIMIT
  
  const maxLon = +targetLon + LIMIT
  const minLon = +targetLon - LIMIT

  return lat < maxLat && lat > minLat && lon < maxLon && lon > minLon
}