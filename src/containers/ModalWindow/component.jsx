import React from 'react'
import pt from 'prop-types'
import { createPortal } from 'react-dom'
import './styles.scss'
import { useContext } from 'react'
import AppContext from '../../contexts/AppContext/AppContext'

const ModalWindow = () => {
  const { element, handleModalClose } = useContext(AppContext)
  const render = () => {
    return (
      <div className="modal-window" onClick={handleModalClose}>
        {element}
      </div>
    )
  }
  return createPortal(render(), document.getElementById('modal'))
}

ModalWindow.propTypes = {}
ModalWindow.defaultProps = {}

export default ModalWindow
