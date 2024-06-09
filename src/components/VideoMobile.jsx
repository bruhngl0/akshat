import React, { Suspense } from 'react';

const LazyReactPlayer = React.lazy(() => import('react-player'));

const VideoMobile = () => {
  return (
    <div className='videoMobile-main'>
      <Suspense fallback={<div>Loading video...</div>}>
        <LazyReactPlayer
          url="shines.mp4"
          playing
          width="100%"
          height="100%"
          loop
          muted
          controls={false}
          playsinline
          autoPlay
          className="videoMobile-main-one"
        />
      </Suspense>
    </div>
  );
};

export default VideoMobile;
