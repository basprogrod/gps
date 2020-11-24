import React, { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Widget from '../../components/Widget/component'
import { ADMIN, USER } from '../../constants/config'
import AppContext from '../../contexts/AppContext/AppContext'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'
import elements from '../ModalWindow/elements'

import './styles.scss'

const Admin = () => {

  const {targets, handleGetTargets, handleModalShow } = useContext(AppContext) as any
  console.log("TCL: Admin -> targets", targets)
  
  const {lat, lon} = useCoords(ADMIN)
  const [userLat, userLon] = usePosition(USER)

  const distance = useDistance(lat, lon, userLat, userLon)


  useEffect(() => {
    handleGetTargets()
  }, [])

  const handleOpenModal = () => {
    handleModalShow(elements.types.TARGET_CREATION)
  }
  
  
  return (
  <div className="container">
    <div className="widgets">
      <Widget title="Distance to User" value={distance} />
      <Widget title="Users coords" value={`${userLat} ${userLon}`} />
      <Widget title="My coords" value={`${lat} ${lon}`} />
    </div>
    <div className="dashboard">
      <button onClick={handleOpenModal}>New target</button>
    </div>
    
  </div>
  )
}

export default Admin
