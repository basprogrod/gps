import React, { useState } from 'react'

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
    <form action="/" onSubmit={handleSubmit}>
      <div>пароль</div>
      <input type="text" value={value} onChange={handleChange}/>
      <input type="submit"/>
    </form>
  )
}

export default Login
