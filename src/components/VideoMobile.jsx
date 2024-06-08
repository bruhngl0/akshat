import React from 'react';
import ReactPlayer from 'react-player';

const VideoMobile = () => {
  return (
    <div className='videoMobile-main'>

      <ReactPlayer 
         url="kas.mp4" 
         playing 
         width= "100%"
         height="100%"
         loop
         muted
         controls={false}
         playsinline // Add this attribute
         autoPlay // Add this attribute
         className="videoMobile-main-one"
    
      />
    </div>
  );
};

export default VideoMobile;