import React, { useReducer } from 'react'
import AppContext from './AppContext'
import appReducer from './appReducer'
import { HIDE_ALERT, SHOW_ALERT } from '../../types/types'

const initialState = {
  kek: 'lol',
}

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const show = (text, type = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {text, type}
    })
  }

  const hide = () => dispatch({type: HIDE_ALERT})

  return (
    <AppContext.Provider value={{
      ...state,
      show,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState