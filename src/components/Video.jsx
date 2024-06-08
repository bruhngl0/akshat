import React from 'react';
import ReactPlayer from 'react-player';

const Video = () => {
  return (
    <div className='video-main'>

      <ReactPlayer 
        url="cropp.mp4" 
        playing 
        width= "80%"
        height="80%"
        loop
        muted
       
        controls={false} // Set to true if you want to show controls
        className = "video-main-one"
    
      />
    </div>
  );
};

export default Video;


