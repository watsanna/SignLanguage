import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  const handleSignInSuccess = () => {
    setLoggedIn(true);

    // Redirect to a different page after successful login
    navigate('/lessons');
  };

  const handleLogout = () => {
    // Your logout logic here
    setLoggedIn(false);
    navigate('/account');
  };


  return (
    <nav className="navbar">
      <div className="logo" style={{ fontStyle: 'cursive' }}>
      American Sign Language
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {isLoggedIn && (
          <>
            
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/dictionary">Dictionary</Link></li>
            <li><Link to="/profile">Practice</Link></li>
            

          </>
        )}
      </ul>

      <div className="user-status">
        {isLoggedIn ? (
          <>
            Welcome, User! <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/account" onClick={handleSignInSuccess}>Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
