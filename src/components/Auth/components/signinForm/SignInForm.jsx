import React from 'react'
import '../../../../styles/signupForm.css';
import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom'

const SignInForm = () => {
    const {register , handleSubmit , formState: { errors } , reset  } = useForm();
    const onSubmit =  (values) => {
        reset();
        console.log(values)
     };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <h3 htmlFor="email">Email</h3>
      <input 
        type="email" 
        name="email" 
        id="email" 
        placeholder="Your Email" 
        {...register("email",
        {required: true ,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         })} />

      <h3 htmlFor="name">Password</h3>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        {...register("password",{required : true , minLength : 6 })}
      />


      

      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
          
          
          {errors.email?.type === "required" && <li>Email is required</li>}
          {errors.email?.type === "pattern" && <li>Invalid Email Address</li>}

          {errors.password?.type === "required" && (
            <li>Password is required</li>
          )}
          {errors.password?.type === "minLength" && (
            <li>Password must be 6 characters long</li>
          )}
          
        </ul>
      )}

      <button type="submit" >Sign In</button>

      <div className='pageSignup'>Don't have an account ? <Link to='/signup'> <span>Sign Up</span></Link></div>
    </form>
  )
}

export default SignInForm