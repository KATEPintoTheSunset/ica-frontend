import React from 'react';
import { Link, useNavigate  } from "react-router-dom";
import {loginValidate, passwordValidate} from "../../validate/validate";
import { loginPost } from "../../post/login-post";

function LoginForm(){
  const navigate = useNavigate();
  const email = React.createRef();
  const password = React.createRef();
  const paragraph = React.createRef();

      return (
      <section className="login-form">
        <div className="login-form-container">
          <p className="login-container-paragraph" ref={paragraph}>LogIn</p>
          <div className="login-container-input">
            <p className="login-container-paragraph">Email</p>
            <input type='email' className='login-input' onBlur={() => {loginValidate(email.current.value) ? email.current.classList.remove('error') : email.current.classList.add('error')}} ref={email}></input>
            <p className="login-container-paragraph">Password</p>
            <input type='password' className='login-input' onBlur={() => {passwordValidate(password.current.value) ? password.current.classList.remove('error') : password.current.classList.add('error')}} ref={password}></input>
          </div>
          <button className='login-container-btn' onClick={async() => {await loginPost(email.current.value, password.current.value) ? navigate("/recipes") : paragraph.current.innerHTML = "Not YAY"}}>Submit</button>
          <div className="login-container-signIn"><Link to="/signup">SignUp</Link></div>
        </div>
      </section>
    );
}

export default LoginForm;
