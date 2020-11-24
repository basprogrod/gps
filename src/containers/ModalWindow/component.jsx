import React from 'react'
import pt from 'prop-types'
import { createPortal } from 'react-dom'
import './styles.scss'
import { useContext } from 'react'
import AppContext from '../../contexts/AppContext/AppContext'
import elements from './elements'

const ModalWindow = () => {
  const { elementType, handleModalClose } = useContext(AppContext)

  const handleClick = (e) => {
    if (e.target.dataset.modal) {
      handleModalClose()
    }
  }

  const { Component, props } = elements[elementType]

  const render = () => {
    return (
      <div data-modal="true" className="modal-window" onClick={handleClick}>
        <Component {...props} />
      </div>
    )
  }

  return createPortal(render(), document.getElementById('modal'))
}

ModalWindow.propTypes = {}
ModalWindow.defaultProps = {}

export default ModalWindow
