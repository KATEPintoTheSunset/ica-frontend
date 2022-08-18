import React from 'react';
import { Link } from "react-router-dom";
import {loginValidate, passwordValidate, nameValidate} from "../../validate/validate";
import { signupPost } from "../../post/signup-post";

function SignupForm(){
  let email = React.createRef();
  let password = React.createRef();
  let name = React.createRef();
  let paragraph = React.createRef();

      return (
      <section className="login-form">
        <div className="login-form-container">
          <p className="login-container-paragraph" ref={paragraph}>SignIn</p>
          <div className="login-container-input">
            <p className="login-container-paragraph">Name</p>
            <input type='email' className='login-input' onBlur={() => {nameValidate(name.current.value) ? name.current.classList.remove('error') : name.current.classList.add('error')}} ref={name}></input>
            <p className="login-container-paragraph">Email</p>
            <input type='email' className='login-input' onBlur={() => {loginValidate(email.current.value) ? email.current.classList.remove('error') : email.current.classList.add('error')}} ref={email}></input>
            <p className="login-container-paragraph">Password</p>
            <input type='password' className='login-input' onBlur={() => {passwordValidate(password.current.value) ? password.current.classList.remove('error') : password.current.classList.add('error')}} ref={password}></input>
          </div>
          <button className='login-container-btn' onClick={async() => {await signupPost(email.current.value, password.current.value) ? paragraph.current.innerHTML = "YAY" : paragraph.current.innerHTML = "Not YAY"}}>Submit</button>
          <div className="login-container-signIn"><Link to="/login">LogIn</Link></div>
        </div>
      </section>
    );
}

export default SignupForm;