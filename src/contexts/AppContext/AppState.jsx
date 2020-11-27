import React, { useReducer } from 'react'
import AppContext from './AppContext'
import appReducer from './appReducer'
import { HIDE_MODAL, net, SHOW_MODAL, ui } from '../../types/types'
import axios from 'axios'
import { DB_URL } from '../../constants/config'

const initialState = {
  isShowModal: false,
  elementType: 'TARGET_CREATION',
  targetText: '',
  targets: [],
  ids: {},
}

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const handleModalShow = (element, data = '') => {
    dispatch({
      type: ui.SET_TARGET_TEXT,
      payload: data,
    })
    dispatch({
      type: SHOW_MODAL,
      payload: element,
    })
  }

  const handleModalClose = () => dispatch({ type: HIDE_MODAL })

  const handleGetTargets = async () => {
    const resp = await axios.get(`${DB_URL}/targets.json`)
    const ids = {}
    const targets = []

    Object.keys(resp.data).forEach((item, index) => {
      ids[`target_${index + 1}`] = item

      targets.push(resp.data[item])
    })

  
    dispatch({type: net.SET_IDS, payload: ids})
    dispatch({ type: net.SET_TARGETS, payload: targets })
  }

  const handleCreateTarget = async (target) => {
    const resp = axios.post(`${DB_URL}/targets.json`, JSON.stringify(target))

    console.log(resp.data);
  }

  return (
    <AppContext.Provider value={{
      ...state,
      handleModalShow,
      handleModalClose,
      handleGetTargets,
      handleCreateTarget,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState