import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WeatherHome({locations}) {

  return (
    <div>
        
      {/* {weather ? ( */}
        <div>
          <h1>Welcome to StratusWOW!</h1>
        </div>
      {/* ) : (
        <p>loading...</p>
      )} */}
        <div class='ratio ratio-4x3'>
          <iframe
            src="https://www.youtube.com/embed/videoseries?list=PLoMnrqkLaQgkDZLC3Ekm5XqN9NOCErpXB" 
            title='YouTube video'
            width="600xp"
            height="370px"
            allowFullScreen
          ></iframe>
        </div>
     
    </div>
  );
}
