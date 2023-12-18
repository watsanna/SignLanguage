import React from 'react';
import './Home.css';
import asl from "./images/asl.jpg"





const Home = () => {
  return (
    
    
  <>
  
    <div className="home-container">
      { <div className="summary-container"> 
      <img src={asl} alt="Description of the image" />

      <p> <strong> This website aims to educate you in American Sign Langauge and give you access to a dictionary. <br/>
         Sign in or create an acconut to learn more.</strong></p>
      </div>}
      

    
      
    
      
    </div>
    
  </>
    
  );
};

export default Home;








