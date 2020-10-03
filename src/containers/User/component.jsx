import React from 'react'
import { ADMIN, USER } from '../../constants/config'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'

const User = () => {
  const {lat, lon} = useCoords(USER)
  const [userLat, userLon] = usePosition(ADMIN)

  const distance = useDistance(lat, lon, userLat, userLon)

  return (
     <div className="title">
      <span>Distance to Target:</span>
      <div>{distance} m</div>
    </div>
  )
}

export default User
