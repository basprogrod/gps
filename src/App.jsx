import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import getDistance from './utils/getDistance';
import Admin from './containers/Admin/component';
import Login from './components/Login/component';
import User from './containers/User/component';
import { PASS } from './constants/config'
import AppState from './contexts/AppContext/AppState';


let TARGET = '53.849537, 27.475395'

const target = TARGET.split(', ')

function App() {
  const [state, setState] = useState({
    pass: ''
  })
  // console.log("App -> state", state, PASS)

  const [d, setD] = useState(0)

  const [watchId, setWatchId] = useState(0)

  const handleLogin = (pass) => {
    setState({...state, pass})
  }

  // const handlePutCoords = (params) => {
  //   axios.put('https://gee-gps.firebaseio.com/kek.json', JSON.stringify(params) )
  // }

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((e) => {
  //     const coords = {
  //       lat: e.coords.latitude,
  //       lon: e.coords.longitude,
  //     }
  //     setState(coords)
  //     handlePutCoords(coords)
  //   }, (e) => {
  //     if (e.code === 1) {
  //       alert('Разрешите мне геолокацию')
  //     }
  //   })


    // const options = {
    //   enableHighAccuracy: false,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // const id = navigator.geolocation.watchPosition((e) => {
    // console.log("App -> coords", e.coords)
    // const { latitude, longitude } = e.coords
    // const distance = Math.floor(getDistance(e.coords.latitude, e.coords.longitude, +target[0], +target[1]))

    // axios.put('https://gee-gps.firebaseio.com/kek.json', JSON.stringify({latitude, longitude}))

    // setD(distance)
    // }, () => {}, options)

    // setWatchId(id)
  // }, [])


  return (
    <AppState>
       <div className="App" on={() => {}}>
      <header className="header">
        <Login handleLogin={handleLogin}/>
      </header>
      <main className="main">
      
        {
          state.pass === PASS
            ? <Admin />
            : <User />
        }

        {/* <div>Расстояние</div>
        <div>{d} м</div> */}
      </main>
      
    </div>
    </AppState>
  )
}

export default App;
