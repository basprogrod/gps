import React, { useContext } from 'react'
import pt from 'prop-types'
import './styles.scss'
import AppContext from '../../contexts/AppContext/AppContext'

const Popup = () => {
  const { targetText } = useContext(AppContext)
  console.log("TCL ~ file: component.jsx ~ line 8 ~ Popup ~ targetText", targetText)
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

Popup.propTypes = {}
Popup.defaultProps = {}

export default Popup
