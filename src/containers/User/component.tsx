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
import { IAppState, TTaget } from '../../types/types'

const targetsMock = [
  {
    coords: '56.000000, 51.00000',
    descr: 'Lol kek cheburek!'
  }
]

const User = () => {
  const { targets, handleGetTargets } = useContext(AppContext) as IAppState
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
            <Target
              key={target.coords} 
              coords={target.coords} 
              descr={target.descr} 
              img={target.img}
              lat={lat} 
              lon={lon} 
              id={target.id}
            />
          )
         })
       }
    </div>
  )
}

export default User
