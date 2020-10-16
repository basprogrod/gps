import React, { useEffect } from 'react'
import { ADMIN, FIRST_TARGET, LIMIT, USER } from '../../constants/config'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'
import useTargetCoords from '../../hooks/useTargetCoords'
import isAchieveTarget from '../../utils/isAchieveTarget'

const User = () => {
  const {lat, lon} = useCoords(USER) // coords of user
  console.log("TCL: User -> lat, lon", lat, lon)
  const [userLat, userLon] = usePosition(ADMIN) // coords of admin
  // const distance = useDistance(lat, lon, userLat, userLon)
  const distanceUntilTarget = useTargetCoords(FIRST_TARGET, { lat, lon })

  // useEffect(() => {
  //   const isAchieve = isAchieveTarget(FIRST_TARGET, { lat, lon })
  //   // setState(isAchieve)
  // }, [lat, lon])

  return (
     <div className="title">
      <div>{distanceUntilTarget < LIMIT ? 'in' : 'out'}</div>
      <span>Distance to Target:</span>
      <div>{distanceUntilTarget} m</div>
      {/* <div>{distance} m</div> */}
    </div>
  )
}

export default User
