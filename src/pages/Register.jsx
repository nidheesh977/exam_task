import React from 'react'

function Register() {
  return (
    <div>
        <h3>Register</h3>
        <form>
            <label htmlFor='email' className='register_form_label'/>
            <input type="email" name="email" id="email" />
            <label htmlFor='name' className='register_form_label'/>
            <input type="text" name="name" id="name" />
            <label htmlFor='dob' className='register_form_label'/>
            <input type = "date" name = "dob" id = "dob"/>
            <label htmlFor='password' className='register_form_label'/>
            <input type = "password" name = "password" id = "password" />
            <label htmlFor='confirm_password' className='register_form_label'/>
            <input type = "password" name = "confirm_password" id = "confirm_password" />
            <input type="submit" value="Register" className='submitBtn1' />
        </form>
    </div>
  )
}

export default Register