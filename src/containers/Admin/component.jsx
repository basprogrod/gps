import React, { useContext } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { useState } from 'react'
import { useEffect } from 'react'
import Widget from '../../components/Widget/component'
import { ADMIN, USER } from '../../constants/config'
import AppContext from '../../contexts/AppContext/AppContext'
import useCoords from '../../hooks/useCoords'
import useDistance from '../../hooks/useDistance'
import usePosition from '../../hooks/usePosition'
import { IAppState } from '../../types/types'
import elements from '../ModalWindow/elements'

import './styles.scss'

mapboxgl.accessToken = 'pk.eyJ1IjoiYmFzcHJvZ3JvZCIsImEiOiJja2o1ZDduMjkxbmw2MnNsZzhmY3dmNWF6In0.brGTZP2aNXd7rQI7d-YHYw'

var map = undefined
var marker = undefined

const Admin = () => {

  const {targets, handleGetTargets, handleModalShow } = useContext(AppContext)
  // console.log("TCL: Admin -> targets", targets)
  
  // const {lat, lon} = useCoords(ADMIN)
  const [userLat, userLon] = usePosition(USER)
  // console.log("Admin ~ userLat, userLon", userLat, userLon)

  // const distance = useDistance(lat, lon, userLat, userLon)


  // useEffect(() => {
  //   map = new mapboxgl.Map({
  //     container: 'mapGL',
  //     zoom: 2,
  //     center: [27.558208, 53.897976],
  //     style: 'mapbox://styles/mapbox/streets-v11'
  //     })   

  //     map.on('load', () => {

  //       map.addSource('points', {
  //         type: 'geojson',
  //         data: {
  //           "type": "FeatureCollection",
  //           "features": [{
  //             "type": "Feature",
  //             "properties": {
  //               "title": "Mapbox DC",
  //             },
  //             "geometry": {
  //               "type": "Point",
  //               "coordinates": [
  //                 53.897976,
  //                 27.558208
  //               ]
  //             }
  //           }]
  //         }
  //       });

  //       map.addLayer({
  //         "id": "points",
  //         "type": "symbol",
  //         "source": "points",
  //         "layout": {},
  //       });
  //     })
    
  //     // map.on('click', (e) => {
  //     //   console.log(e);
  //     // })
  //   console.log("useEffect ~ map", map)
  // }, [])

  useEffect(() => {
    console.log(userLat, userLon);
    console.log("TCL ~ file: component.jsx ~ line 51 ~ useEffect ~ marker", map)

    
    
      // marker = new mapboxgl.Marker({
      //   color: "#FFFFFF",
      //   draggable: false,
      //   }).setLngLat([userLon, userLat])
      //   .addTo(map)
  
    
  }, [userLat, userLon])

  const handleOpenModal = () => {
    handleModalShow(elements.types.TARGET_CREATION)
  }
  
  
  
  return (
  <div className="container">
    <div className="widgets">
      {/* <Widget title="Distance to User" value={distance} /> */}
      <Widget title="Users coords" value={`${userLat} ${userLon}`} />
      {/* <Widget title="My coords" value={`${lat} ${lon}`} /> */}
    </div>
    <div className="dashboard">
      <button onClick={handleOpenModal}>New target</button>
    </div>
    <div className="mapGL">
      <div id="mapGL"></div>
    </div>
    
  </div>
  )
}

export default Admin
