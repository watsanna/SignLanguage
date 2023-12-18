import React from 'react';

const Pro = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img
          src="images/img-4.jpg"
          alt="Responsive Image"
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8nIkMn1p0ic?si=MBN2rXBBura4BZKJ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Pro;
