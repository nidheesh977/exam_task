import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom'

const domain = process.env.REACT_APP_BEDOMAIN

function Login() {

  const history = useHistory()

  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(localStorage.getItem("access_token")){
      history.push("/")
    }
  })

  const changeHandler = (e) => {
    let tempData = data
    tempData[e.target.name] = e.target.value
    setData({...tempData})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    axios.post(`${domain}/api/token/`, data)
    .then(res => {
      console.log(res.data)
      localStorage.setItem("access_token", res.data.access)
      localStorage.setItem("refresh_token", res.data.refresh)
      history.push("/")
    })
    .catch(err => {
      console.log(err.response)
      setError(true)
    })
  }
  return (
    <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email' className='register_form_label'/>
            <input type="email" name="email" id="email" onChange = {changeHandler} value = {data.email} />
            <label htmlFor='password' className='register_form_label'/>
            <input type = "password" name = "password" id = "password" onChange = {changeHandler} value = {data.password} />
            {error?<p>Invalid credentials</p>:""}
            <p>Don't have account. <Link to = "/register">Create new</Link></p>
            <input type="submit" value="Login" className='submitBtn1'/>
        </form>
    </div>
  )
}

export default Login