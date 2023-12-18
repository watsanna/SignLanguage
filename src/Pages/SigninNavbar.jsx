
import React from 'react';
import { Link } from 'react-router-dom';

const SigninNavbar = () => {
  return (
    <nav className="lessons-navbar">
      <div className="logo" style={{ fontStyle: 'cursive' }}>Lessons Logo</div>
      <ul className="lessons-nav-links">
        <li><Link to="/lessons">Lessons</Link></li>
        <li><Link to="/dictionary">Dictionary</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default SigninNavbar;
