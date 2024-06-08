import React from 'react';
import ReactPlayer from 'react-player';

const VideoMobile = () => {
  return (
    <div className='videoMobile-main'>

      <ReactPlayer 
        url="ratio.mp4" 
        playing 
        width= "100%"
        height="100%"
        loop
        muted
       
        controls={true} // Set to true if you want to show controls
        className = "videoMobile-main-one"
    
      />
    </div>
  );
};

export default VideoMobile;