import React, { useState, useEffect } from 'react';
import './Profile.css';

// Import images
import a from "./alphabet/a_1_l.jpeg";
import b from "./alphabet/b_1_l.jpeg";
import c from "./alphabet/c_1_l.jpeg";
import d from "./alphabet/d_1_l.jpeg";
import e from "./alphabet/e_1_l.jpeg";
import f from "./alphabet/f_1_l.jpeg";
import g from "./alphabet/g_1_l.jpeg";
import h from "./alphabet/h_1_l.jpeg";
import i from "./alphabet/i_1_l.jpeg";
import j from "./alphabet/j_1_l.jpeg";
import k from "./alphabet/k_1_l.jpeg";
import l from "./alphabet/l_1_l.jpeg";
import m from "./alphabet/m_1_l.jpeg";
import n from "./alphabet/n_1_l.jpeg";
import o from "./alphabet/o_1_l.jpeg";
import p from "./alphabet/p_1_l.jpeg";
import q from "./alphabet/q_1_l.jpeg";
import r from "./alphabet/r_1_l.jpeg";
import s from "./alphabet/s_1_l.jpeg";
import t from "./alphabet/t_1_l.jpeg";
import u from "./alphabet/u_1_l.jpeg";
import v from "./alphabet/v_1_l.jpeg";
import w from "./alphabet/w_1_l.jpeg";
import x from "./alphabet/x_1_l.jpeg";
import y from "./alphabet/y_1_l.jpeg";
import z from "./alphabet/z_1_l.jpeg";



const aslImagesFolder = {
  a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z
};

const imageAnswers = {
  a: 'A',
  b: 'B',
  c: 'C',
  d: 'D',
  e: 'E',
  f: 'F',
  g: 'G',
  h: 'H',
  i: 'I',
  j: 'J',
  k: 'K',
  l: 'L',
  m: 'M',
  n: 'N',
  o: 'O',
  p: 'P',
  q: 'Q',
  r: 'R',
  s: 'S',
  t: 'T',
  u: 'U',
  v: 'V',
  w: 'W',
  x: 'X',
  y: 'Y',
  z: 'Z',
};

function Profile() {
  const [currentImage, setCurrentImage] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const getRandomImage = () => {
    const imageFilenames = Object.keys(aslImagesFolder);
    const randomIndex = Math.floor(Math.random() * imageFilenames.length);
    const randomImageKey = imageFilenames[randomIndex];
    setCurrentImage(aslImagesFolder[randomImageKey]);
  };

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value.toUpperCase());
  };

  const checkAnswer = () => {
    getRandomImage();
    const correctAnswer = imageAnswers[currentImage.split('/').pop().replace('_1_l.jpeg', '')];
    if (userAnswer === correctAnswer) {
      setScore(score + 1);
    }

    
    setUserAnswer('');

    // Increment the total questions count when the button is pressed
    setTotalQuestions(totalQuestions + 1);
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="App">
      <h1>ASL Letter Quiz</h1>
      <img src={currentImage} alt="ASL Letter" />
      <input type="text" value={userAnswer} onChange={handleInputChange} />
      <button onClick={checkAnswer}>Submit Answer</button>
      <p style={{ color: 'black' }}>Score: {score} / {totalQuestions} </p>
   
    </div>
  );
}

export default Profile;
