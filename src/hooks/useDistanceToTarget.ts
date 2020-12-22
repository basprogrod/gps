import getDistance from "../utils/getDistance"
import splitCoordsFromString from "../utils/splitCoordsFromString"

export default (coords: string, lat: string | number, lon: string | number) => {
  const [targetLat, targetLon] = splitCoordsFromString(coords)
  
  return getDistance(+targetLat, +targetLon, +lat, +lon)
}