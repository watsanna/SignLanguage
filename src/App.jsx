// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import Lessons from './Pages/Lessons';
import Account from './Pages/account';
import Profile from './Pages/Profile';
import Dictionary from './Pages/Dictionary';
import Footer from './Pages/Footer';
import Gen from './Pages/general';
import Intro from './Pages/intro';
import Pro from './Pages/pro';
import Sen from './Pages/sentence';
import Video from './Pages/video';
import Layout from './Pages/layout';




function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    // Perform logout logic
    setLoggedIn(false);
  };

  return (
    <div id="root">
      <Router>
        
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/account" element={<Account setLoggedIn={setLoggedIn} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dictionary" element={<Dictionary />} />
            <Route path="/general" element={<Gen />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/pro" element={<Pro />} />
            <Route path="/sentence" element={<Sen />} />
            
          
    
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
