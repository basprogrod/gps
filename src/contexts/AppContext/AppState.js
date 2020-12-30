import React, { useReducer } from 'react'
import axios from 'axios'
import AppContext from './AppContext'
import appReducer from './appReducer'
import { HIDE_MODAL, IAction, IInitialState, net, SHOW_MODAL, TIds, TTaget, ui } from '../../types/types'
import { DB_URL } from '../../constants/config'

const initialState = {
  isShowModal: false,
  elementType: 'TARGET_CREATION',
  targetText: '',
  targetImg: '',
  targets: [],
  ids: {},
}

window.ax = axios

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  const handleModalShow = (element) => {
    dispatch({
      type: SHOW_MODAL,
      payload: element,
    })
  }

  const handleSetTargetDescr = (data) => {
    dispatch({
      type: ui.SET_TARGET_DATA,
      payload: data,
    })
  }

  const handleTargetAchievment = async (id) => {
  console.log(`${DB_URL}/targets/${id}/isAchive.json`)
    const resp = await axios.put(`${DB_URL}/targets/${id}/isAchieve.json`, true)
  }

  const handleModalClose = () => dispatch({ type: HIDE_MODAL })

  const handleGetTargets = async () => {
    
    const ids = {}
    const targets = []

    try {
      const resp = await axios.get(`${DB_URL}/targets.json`)

      Object.keys(resp.data).forEach((item, index) => {
        console.log("item", item)
        ids[`target_${index + 1}`] = item

        targets.push({...resp.data[item], id: item})
      })

      dispatch({type: net.SET_IDS, payload: ids})
      dispatch({ type: net.SET_TARGETS, payload: targets })
    } catch (error) {
    console.log("TCL ~ file: AppState.js ~ line 61 ~ handleGetTargets ~ error", error)
      
    }
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
      handleSetTargetDescr,
      handleTargetAchievment,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppState



// import React, { useReducer } from 'react'
// import axios from 'axios'
// import AppContext from './AppContext'
// import appReducer from './appReducer'
// import { HIDE_MODAL, IAction, IInitialState, net, SHOW_MODAL, TIds, TTaget, ui } from '../../types/types'
// import { DB_URL } from '../../constants/config'

// const initialState: IInitialState = {
//   isShowModal: false,
//   elementType: 'TARGET_CREATION',
//   targetText: '',
//   targets: [],
//   ids: {},
// }

// const AppState: React.FC = ({ children }) => {
//   const [state, dispatch]: [IInitialState, (action: IAction) => void] = useReducer(appReducer, initialState)

//   const handleModalShow = (element: string) => {
//     // dispatch({
//     //   type: SHOW_MODAL,
//     //   payload: element,
//     // })
//   }

//   const handleSetTargetDescr = (data: any) => {
//     // dispatch({
//     //   type: ui.SET_TARGET_DATA,
//     //   payload: data,
//     // })
//   }

//   const handleModalClose = () => dispatch({ type: HIDE_MODAL })

//   const handleGetTargets = async () => {
//     // const ids: TIds = {}
//     // const targets: TTaget[] = []

//     // const resp = await axios.get(`${DB_URL}/targets.json`)

//     // Object.keys(resp.data).forEach((item, index) => {
//     //   ids[`target_${index + 1}`] = item

//     //   targets.push(resp.data[item])
//     // })

//     // dispatch({type: net.SET_IDS, payload: ids})
//     // dispatch({ type: net.SET_TARGETS, payload: targets })
//   }

//   const handleCreateTarget = async (target: any) => {
//     // const resp: any = axios.post(`${DB_URL}/targets.json`, JSON.stringify(target))

//     // console.log(resp.data);
//   }

//   return (
//     <AppContext.Provider value={{
//       // ...state,
//       handleModalShow,
//       handleModalClose,
//       handleGetTargets,
//       handleCreateTarget,
//       handleSetTargetDescr,
//     }}>
//       {children}
//     </AppContext.Provider>
//   )
// }

// export default AppState