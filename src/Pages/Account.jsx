import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Account.css';

const Account = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
    setLoggedIn(true);

    // Replace with your actual sign-in logic
    const isSignInSuccessful = true;

    if (isSignInSuccessful) {
      // Directly navigate to the "Lessons" page using React Router
      navigate('/lessons');
    }

    
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="container">
      <div className='right-container'>
        <div className="form-container sign-up container ">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSignUpClick}>Sign Up</button>
          </form>
        </div>
      </div>

      <div className='left-container'>
        <div className="form-container sign-in container ">
          <form action="#">
            <h1>Sign In</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot Password?</a>
            <button onClick={handleSignInClick}>Sign In</button>
          </form>
        </div>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hey There!</h1>
            <p>To get connected with us please sign up</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Account;
