import React from 'react'

function Login() {
  return (
    <div>
        <h3>Login</h3>
        <form>
            <label htmlFor='email' className='register_form_label'/>
            <input type="email" name="email" id="email" />
            <label htmlFor='password' className='register_form_label'/>
            <input type = "password" name = "password" id = "password" />
            <input type="submit" value="Login" className='submitBtn1'/>
        </form>
    </div>
  )
}

export default Login