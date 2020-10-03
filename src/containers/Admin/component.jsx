import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ADMIN, USER } from '../../constants/config'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'

import './styles.scss'

const Admin = () => {
  const {lat, lon} = useCoords(ADMIN)
  const [userLat, userLon] = usePosition(USER)

  const distance = useDistance(lat, lon, userLat, userLon)
  
  return (
  <>
    <div className="title">
      <span>Distance to User:</span>
      <div>{distance} m</div>
    </div>
    <hr/>
    <div className="title">
      <span>Users coords:</span>
      <div>{userLat}</div>
      <div>{userLon}</div>
    </div>
    <hr/>
    <div className="title">
      <span>My coords:</span>
      <div>{lat}</div>
      <div>{lon}</div>
    </div>
    
  </>
  )
}

export default Admin
