import React, { ChangeEvent, ChangeEventHandler, useContext } from 'react'
import pt from 'prop-types'

import './styles.scss'
import { useState } from 'react'
import AppContext from '../../contexts/AppContext/AppContext'
import { IAppState } from '../../types/types'

interface Props {
  kek: string
}

const CreateTargetFormPopup: React.FC<Props> = (props) => {

  const { handleCreateTarget } = useContext(AppContext) as IAppState

  const [state, setState] = useState({
    coords: '',
    descr: ''
  })

  const handleInputChange = (e: any): void => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    const { coords, descr } = state
    
    if (state.coords.match(/\d+\.\d+\,\s\d+\.\d+/)) {
      handleCreateTarget({coords, descr, name: 'Test'})
      return
    }

    console.log('ERROR');
    return

  }

  return (
    <form action="/" className="create-target-form" onSubmit={handleSubmit}>
  
      <div className="create-target-form__inps">
        <input 
          name="coords" 
          type="text" 
          placeholder="lat, lon" 
          onChange={handleInputChange} 
          value={state.coords}
        />
      </div>
  
      <div className="create-target-form__descr">
        <textarea
          name="descr" 
          id="targetDescription" 
          cols={30} 
          rows={10}
          onChange={handleInputChange}
          value={state.descr}
          placeholder="Description" />
      </div>
  
      <input type="submit" value="Create"/>
      
    </form>
  )
}

CreateTargetFormPopup.propTypes = {}
CreateTargetFormPopup.defaultProps = {}

export default CreateTargetFormPopup
