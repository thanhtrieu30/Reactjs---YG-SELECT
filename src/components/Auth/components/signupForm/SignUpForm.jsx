
import React, { useRef } from 'react';
import '../../../../styles/signupForm.css';


import {useForm} from 'react-hook-form';
 
export function SignUpForm() {
  
  const {register , handleSubmit , formState: { errors } , reset , watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit =  (values) => {
    
    reset();
    console.log(values)
 };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 htmlFor="name">Name</h3>
      <input 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Your Name" 
        {...register("name",{required : true})} />

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
      <h3 htmlFor="name">Retype Password</h3>
      <input
        type="password"
        name="password_repeat"
        id="password"
        placeholder="Retype Password"
        
        {...register("password_repeat",{
          validate: (valuee) =>
            valuee === password.current || "The passwords do not match"
        })}
      />
      

      {Object.keys(errors).length !== 0 && (
        <ul className="error-container">
          {errors.name?.type === "required" && <li>Name is required</li>}
          
          {errors.email?.type === "required" && <li>Email is required</li>}
          {errors.email?.type === "pattern" && <li>Invalid Email Address</li>}

          {errors.password?.type === "required" && (
            <li>Password is required</li>
          )}
          {errors.password?.type === "minLength" && (
            <li>Password must be 6 characters long</li>
          )}
          {errors.password_repeat && (
            <li>The passwords do not match</li>)}
        </ul>
      )}

      <button type="submit" >Sign Up</button>
    </form>
  );
};