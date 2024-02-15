import React from "react";
import { useSelector } from "react-redux";

const VideoBackground = () => {
    const details = useSelector((store) => store.movies.trailerVideo)
	return (
		<div className="w-screen h-full">
			<iframe
                className="w-screen aspect-video"
                title="Youtube video player"
				src={"https://www.youtube.com/embed/"+details?.key+"?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				>
            </iframe>
		</div>
	);
};

export default VideoBackground;
