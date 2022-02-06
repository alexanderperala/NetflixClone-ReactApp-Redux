import React from "react";
import "./youtubeTrailer.css";

const YoutubeTrailer = ({ trailer }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer.key}?controls=0`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeTrailer;
