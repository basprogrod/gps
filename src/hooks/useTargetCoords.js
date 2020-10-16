import getDistance from "../utils/getDistance"
import splitCoordsFromString from "../utils/splitCoordsFromString"

export default (target, { lat, lon }) => {
  const [targetLat, targetLon] = splitCoordsFromString(target)
  
  return getDistance(targetLat, targetLon, lat, lon)
}