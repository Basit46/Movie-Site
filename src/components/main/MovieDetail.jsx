import React, { useEffect } from "react";
import { useMovieContext } from "../../hooks/UseContext";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const MovieDetail = () => {
  const {
    movieToShowId,
    movieToShow,
    setMovieToShow,
    showDetail,
    setShowDetail,
  } = useMovieContext();

  //This useEffect run when the movieToShowId changes
  //so that it will update the movie that wwwill view
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieToShowId}&apikey=dc047495`)
      .then((res) => setMovieToShow(res.data))
      .catch((err) => console.log(err));
  }, [movieToShowId, setMovieToShow]);

  //handleCancel is used to close the MovieDetail section and open other section
  const handleCancel = () => {
    setShowDetail(false);
  };
  return (
    <div
      className={`${
        showDetail ? "" : "hidden"
      } hero absolute top-0 left-0 bg-[black] w-full h-full grid place-items-center`}
    >
      <div className="relative h-[80vh] w-[80vw] bg-black text-white flex justify-around items-center px-[30px]">
        <FaTimes
          onClick={handleCancel}
          className="absolute top-3 right-3 w-[70px] h-[70px] text-red-600"
        />
        <img
          className="mr-[40px]"
          src={movieToShow.Poster}
          alt={movieToShow.Title}
        />
        <div>
          <p className="text-center mb-[20px]">{movieToShow.Title}</p>
          <p className="text-center mb-[10px]">{movieToShow.Plot}</p>
          <p className="text-center mb">
            IMDB Rating: {movieToShow.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
