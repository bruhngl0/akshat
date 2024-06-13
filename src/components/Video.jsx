import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className='video-main'>

      <ReactPlayer 
        url="cropp.mp4" 
        playing 
        width= "100%"
        height="100%"
        loop
        muted
       
        controls={false} // Set to true if you want to show controls
        className = "video-main-one"
    
      />
    </div>
  );
};

export default Video;


