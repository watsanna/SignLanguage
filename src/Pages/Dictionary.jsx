import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dictionary.css';
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



const letterImages = {
   a: a,
    b: b,
    c: c,
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    q: q,
    r: r,
    s: s,
    t: t,
    u: u,
    v: v,
    w: w,
    x: x,
    y: y,
    z: z,
  };
  

const Dictionary = () => {
  const dictUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const [inpWord, setInpWord] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [letterImagesData, setLetterImagesData] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const synonymUrl = 'https://api.api-ninjas.com/v1/thesaurus?word=';

  const fetchDefinition = () => {
    fetch(`${dictUrl}${inpWord}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        fetchLetterImages(inpWord.toLowerCase());
      })
      .catch(() => {
        setError(true);
      });
  };

  const fetchSynonyms = async (word) => {
    try {
      const response = await axios.get(`${synonymUrl}${word}`, {
        headers: {
          'x-rapidapi-host': 'https://api.api-ninjas.com/v1/thesaurus?word=',
          'x-rapidapi-key': 'shA5mZY7OhRtpaRD+6jdzw==x4lB80RclItmKgxz', // Make sure to enclose the key within quotes
        },
      });
      const synonyms = response.data.map((item) => item.word);
      setSynonyms(synonyms);
    } catch (error) {
      console.error('Error fetching synonyms:', error);
    }
  };
  

  const fetchLetterImages = (word) => {
    const letters = word.split('');
    const images = letters.map(letter => letterImages[letter] || null);
    setLetterImagesData(images);
  };

  useEffect(() => {
    fetchLetterImages(inpWord.toLowerCase());
  }, [inpWord]);

  return (
    <div className="dictionary-modal">
      <div className="container">
        <div className="search-box">
          <input
            type="text"
            value={inpWord}
            onChange={(e) => setInpWord(e.target.value)}
            placeholder="Enter a word"
          />
          <button onClick={fetchDefinition}>Search</button>
        </div>
        {error ? (
          <h3 className="error">Couldn't Find The Word</h3>
        ) : (
          data && (
            
            <div className="result">
              <div className="word">
                <h3>{inpWord}</h3>
              </div>
              <div className="letter-images">
                {letterImagesData.map((image, index) => (
                    
                  <img key={index} 
                  src={image} 
                  alt={`Letter ${index}`} 
                  style={{ width: '50px', height: '50px' }}
                  />
                ))}
              </div>
         
              <div className="details">
                <p>{data[0].meanings[0].partOfSpeech}</p>
                <p>/{data[0].phonetic}/</p>
              </div>
              <p className="word-meaning">
                {data[0].meanings[0].definitions[0].definition}
              </p>
              {data[0].meanings[0].definitions[0].example && (
                <p className="word-example">
                  {data[0].meanings[0].definitions[0].example}
                </p>
              )}
            </div>
            
          )
        )}
       {synonyms.length > 0 && (
  <div className="synonyms">
    <h3>Synonyms</h3>
    <ul>
      {synonyms.map((synonym, index) => (
        <li key={index}>{synonym}</li>
      ))}
    </ul>
  </div>
)}
      </div>
    </div>
  );
};

export default Dictionary;