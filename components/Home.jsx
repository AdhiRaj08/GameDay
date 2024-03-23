import React from 'react';
import YouTube from 'react-youtube';
const videoId = 'B1TRRiLOw0Q&list=PPSV';

function Home() {
  return (
    <div className="mai">
      <YouTube
        videoId={videoId}
        id = "video-bg"
        opts={{
          playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            mute: 1,
            origin: window.location.origin
          }
        }}
      />
      <div className="landing">
          <p id = "Heading">Skater Republic !!</p>
          <p> The thrilling arcade game that puts 
              
              you right in the heart  <br />
              
              a dynamic skateboarding adventure!!!</p>
              <button id="learn"> Download </button>
      </div>
      </div>
  )
}

export default Home;
