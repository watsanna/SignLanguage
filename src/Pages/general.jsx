import React from 'react';

const Gen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
        <img
          src="images/img-2.jpg"
          alt="Responsive Image"
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/0FcwzMq4iWg?si=cGOmwEGrPhGDTWiH"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Gen;
