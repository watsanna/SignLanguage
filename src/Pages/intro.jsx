import React from 'react';

const Intro = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img
          src="images/img-1.jpg"
          alt="Responsive Image"
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="600"
          height="315"
          src="https://www.youtube.com/embed/cGavOVNDj1s?si=6JMdNGroGKLsaZU5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ maxWidth: '100%' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Intro;
