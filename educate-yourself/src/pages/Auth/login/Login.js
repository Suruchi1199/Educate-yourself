import React from 'react';
import './login.css';
import {useState}  from 'react';
const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form subm',user);
    };
    const [user,setUser] =useState({
        email:"",
        password:""
    });

  return (
    <div className="body">
        <form className="login-form" onSubmit={handleSubmit}>
    <div className="form-container">
      <div className="form-header">
        <h3>Log In</h3>
      </div>
      <div className="input-container">
        <label>Email </label>
        <input type="email" placeholder="email" value={user.email} onChange={(e)=> {setUser({...user,email:e.target.value})}} required />
        <label>Password</label>
        <input type="password" placeholder="password" value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}} required />
      </div>
      <div className="forgot-password">
        <a href="#">Forgot password</a>
      </div>
      <div className="botton">
        <button className="submit" type="submit">LOG IN</button>
      </div>
      <div className="signup">
        Don't Have An Account?<a href="signup.html"> sign up</a>
      </div>
    </div>
    </form>
    </div>
  );
};

export default Login;