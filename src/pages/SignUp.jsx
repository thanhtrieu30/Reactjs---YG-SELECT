import React from 'react'
import '../styles/signup.css'
import imgyg from '../assets/images/logo.png'
import { SignUpForm } from '../components/Auth/components/signupForm/SignUpForm'

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup__content'>
        <span>Welcome to YG SELECT</span>
        <p>Set your favorite YG artist as Main. </p>
        <div className='signup__sub__content'>
            <img src={imgyg} alt="imgyg" />
            <h3>Create a new account</h3>
        </div>
      </div>
      <div className='form__sign'>
            <SignUpForm />
      </div>
    </div>
  )
}

export default SignUp