import React, { useEffect, useState } from 'react';
import { API_OPTION } from '../util/constant';

const VideoBackground = ({ movieId }) => {
  const [trailer, setTrailer] = useState(null);

  const getMovieVideos = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTION);
      if (!response.ok) {
        throw new Error('Failed to fetch trailer');
      }
      const json = await response.json();
      console.log(json);
      const filteredData = json.results.filter((video) => video.type === "Trailer");
      const selectedTrailer = filteredData.length ? filteredData[0] : json.results[0];
      setTrailer(selectedTrailer);
      console.log(selectedTrailer);
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []); // Run effect whenever movieId changes

  return (
    <div>
      {trailer ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoBackground;
