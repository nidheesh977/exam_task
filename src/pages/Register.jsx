import React, { useState } from 'react'
import axios from 'axios'
const domain = process.env.REACT_APP_BEDOMAIN

function Register() {
  const [data, setData] = useState({
    email: "",
    name: "",
    dob: "",
    password: "",
    confirm_password: "",
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${domain}/accounts/register/`, data)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err.response)
    })
  }
  const changeHandler = (e) => {
    let tempData = data
    tempData[e.target.name] = e.target.value
    setData({...tempData})
  }
  return (
    <div>
        <h3>Register</h3>
        <form onSubmit = {handleSubmit}>
            <label htmlFor='email' className='register_form_label'/>
            <input type="email" name="email" id="email" onChange = {changeHandler} value = {data.email} />
            <label htmlFor='name' className='register_form_label'/>
            <input type="text" name="name" id="name" onChange = {changeHandler} value = {data.name} />
            <label htmlFor='dob' className='register_form_label'/>
            <input type = "date" name = "dob" id = "dob" onChange = {changeHandler} value = {data.dob}/>
            <label htmlFor='password' className='register_form_label'/>
            <input type = "password" name = "password" id = "password" onChange = {changeHandler} value = {data.password} />
            <label htmlFor='confirm_password' className='register_form_label'/>
            <input type = "password" name = "confirm_password" id = "confirm_password" onChange = {changeHandler} value = {data.confirm_password} />
            <input type="submit" value="Register" className='submitBtn1' />
        </form>
    </div>
  )
}

export default Register