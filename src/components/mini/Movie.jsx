import React from "react";
import { useMovieContext } from "../../hooks/UseContext";

const Movie = ({ movie }) => {
  const { setMovieToShowId, setShowDetail } = useMovieContext();

  //When a movie is clicked, this function will
  //close the other sections apart from the movieDetail section and will
  //also give the the IMDB Id of the clicked movie as to be used to get the deatils of the movie
  const handleClick = async () => {
    await setShowDetail(true);
    setMovieToShowId(movie.imdbID);
  };

  return (
    <div
      onClick={handleClick}
      className="relative h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] bg-black mr-[13px] text-white "
    >
      <img
        className="h-full w-full object-cover hover:scale-105 duration-200"
        src={movie.Poster}
        alt={movie.Title}
      />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center font-extrabold">
        {movie.Title}
      </p>
    </div>
  );
};

export default Movie;
