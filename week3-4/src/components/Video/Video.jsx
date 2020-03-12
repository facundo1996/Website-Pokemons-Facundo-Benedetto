import React, {} from 'react';

import './Video.css';

const Video = () => {
    return(
    <div id="video" className="videodiv1">
        <iframe className="video" width="50%" height="315" src="https://www.youtube.com/embed/c2edLO4GxGs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="videodiv2">
            <h2 className="videoh2">Checkout the Official Pokémon YouTube Channel</h2>
            <a className="linkvideo" href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" target="_blank">View more</a>
        </div>
    </div>
    )
};

export default Video;