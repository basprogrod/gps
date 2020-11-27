import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import axios from 'axios';
import getDistance from './utils/getDistance';
import Admin from './containers/Admin/component';
import Login from './components/Login/component';
import User from './containers/User/component';
import { PASS, ADMIN_PASS } from './constants/config'
import AppState from './contexts/AppContext/AppState';
import ModalWindow from './containers/ModalWindow/component';
import { useContext } from 'react';
import AppContext from './contexts/AppContext/AppContext';

function App() {
  const context = useContext(AppContext)
  console.log("TCL: App -> context", context)

  const [state, setState] = useState({
    pass: ''
  })

  const handleLogin = (pass) => {
    setState({...state, pass})
  }

  return (
    <>
        {
          context.isShowModal && <ModalWindow />
        }
        <div className="App" onClick={() => {}}>
          {
            state.pass !== PASS && state.pass !== ADMIN_PASS && (
              <header className="header">
                <Login pass={state.pass} handleLogin={handleLogin}/>
              </header>
            )
          }

          <main className="main">
            {
              state.pass === PASS && <User />
            }
            {
              state.pass === ADMIN_PASS && <Admin />
            }
          </main>
      </div>
    </>
  )
}

export default App;
