import React, { useContext, useEffect } from 'react'
import Target from '../../components/Target/component'
import { ADMIN, FIRST_TARGET, LIMIT, SECOND_TARGET, /* targets, */ THIRD_TARGET, USER } from '../../constants/config'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'
import useTargetCoords from '../../hooks/useDistanceToTarget'
import isAchieveTarget from '../../utils/isAchieveTarget'

import './styles.scss'
import AppContext from '../../contexts/AppContext/AppContext'

const User = () => {
  const { targets, handleGetTargets } = useContext(AppContext)
  const {lat, lon} = useCoords(USER) // coords of user
  // console.log("TCL: User -> lat, lon", lat, lon) 
  // const [userLat, userLon] = usePosition(ADMIN) // coords of admin
  // const distance = useDistance(lat, lon, userLat, userLon)
  // const distanceUntilTarget = useTargetCoords(FIRST_TARGET, lat, lon)

  // useEffect(() => {
  //   const isAchieve = isAchieveTarget(FIRST_TARGET, { lat, lon })
  //   // setState(isAchieve)
  // }, [lat, lon])

  useEffect(() => {
    handleGetTargets()
  }, [])


  return (
     <div className="targets">
       {
         targets.map((target) => {
           return (
            <Target key={target.coords} coords={target.coords} descr={target.descr} lat={lat} lon={lon} />
          )
         })
       }
      {/* <span>Distance to Target:</span>
      <div>{distanceUntilTarget} m</div> */}
      {/* <div>{distance} m</div> */}
    </div>
  )
}

export default User
