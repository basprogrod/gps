import React, { useContext } from 'react'
import pt from 'prop-types'
import AppContext from '../../contexts/AppContext/AppContext'

import './styles.scss'

const Popup = () => {
  const { targetText } = useContext(AppContext) as any

  return (
    <div className="popup">
      <div className="popup__block">
        <p>
          {targetText}
        </p>
      </div>
    </div>
  )
}

export default Popup
