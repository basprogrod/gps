import React, { useState } from 'react'
import './styles.scss'

const Login = ({ handleLogin }) => {
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
      <div>Код</div>
      <input className="code__input" type="text" value={value} onChange={handleChange}/>
      <input className="code__btn" type="submit"/>
    </form>
  )
}

export default Login
