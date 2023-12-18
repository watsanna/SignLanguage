// Lessons.jsx
import React from 'react';
import SigninNavbar from './SigninNavbar';
import './Lessons.css';
import CardItem from './Lessons_card';
import img1 from "./images/img-1.jpg";
import img2 from "./images/img-2.jpg";
import img3 from "./images/img-3.jpg";
import img4 from "./images/img-4.jpg";
import img5 from "./images/img-5.jpg";
import imghome from "./images/img-home.jpg";

const Lessons = () => {
  return (
    <div>
      
      
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src={img1}
                text='The introduction and basics to ASL'
                label='THE BASICS'
                path='/intro'
              />
              <CardItem
                src={img2}
                text='Learn everyday simple terms'
                label='USE EVERYDAY'
                path='/general'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src={img3}
                text='Have a simple conversation'
                label='DIVE IN'
                path='/sentence'
              />
              <CardItem
                src={img4}
                text='Integrating previous knowledge together'
                label='BE A PRO'
                path='/pro'
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
