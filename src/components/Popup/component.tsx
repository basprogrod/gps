import React, { useContext } from 'react'
import AppContext from '../../contexts/AppContext/AppContext'
import { IAppState } from '../../types/types'

import './styles.scss'

const Popup = () => {
  const { targetText, targetImg } = useContext(AppContext) as IAppState

  return (
    <div className="popup">
      <div className="popup__block">
        <p>
          {targetText}
        </p>
        <img src={targetImg} alt=""/>
      </div>
    </div>
  )
}

export default Popup
