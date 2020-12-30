import React, { useContext, useState } from 'react'
import { PASS } from '../../constants/config'
import elements from '../../containers/ModalWindow/elements'
import AppContext from '../../contexts/AppContext/AppContext'
import './styles.scss'

const Login = ({ handleLogin, pass }) => {
  const { handleModalShow } = useContext(AppContext)
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
		console.log("TCL: handleSubmit -> e", e)
    e.preventDefault()
    handleLogin(value)
  }
  
  return (
    <form className="code" action="/" onSubmit={handleSubmit}>
      <input className="code__input" type="text" value={value} onChange={handleChange}/>
      <input className="code__btn" type="submit"/>
      {
        // pass !== PASS && pass !== '' && (
        //   <div>
        //     <small>Не знаете пароль, то попробуйте угадать</small>
        //     <div>
        //       <button onClick={() => {
        //         handleModalShow(elements.types.TARGET_POPUP, 'Как называется то, когда судьбу нельзя выбрать?')
        //       }}>Подсказка</button>
        //     </div>
        //   </div>
        // )
      }
    </form>
  )
}

export default Login
