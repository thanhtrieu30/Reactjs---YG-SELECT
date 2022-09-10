import React from 'react'
import '../styles/signup.css'
import imgyg from '../assets/images/logo.png'
import SignInForm from '../components/Auth/components/signinForm/SignInForm'

const SignIn = () => {
  return (
    <div className='signup'>
      <div className='signup__content'>
        <span>Welcome to YG SELECT</span>
        <p>Set your favorite YG artist as Main. </p>
        <div className='signup__sub__content'>
            <img src={imgyg} alt="imgyg" />
            <h3>Sign in to your account</h3>
        </div>
      </div>
      <div className='form__sign'>
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn