import React, { useReducer } from 'react'
import AppContext from './AppContext'
import appReducer from './appReducer'
import { HIDE_MODAL, SHOW_MODAL } from '../../types/types'

const initialState = {
  isShowModal: false,
  element: '',
}

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const handleModalShow = (element) => {
    dispatch({
      type: SHOW_MODAL,
      payload: element,
    })
  }

  const handleModalClose = () => dispatch({type: HIDE_MODAL})

  return (
    <AppContext.Provider value={{
      ...state,
      handleModalShow,
      handleModalClose,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState