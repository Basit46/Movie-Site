import React, { useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import { useMovieContext } from "../../hooks/UseContext";

const Row = ({ rowTitle, search }) => {
  const { movies, setMovies } = useMovieContext();
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${search}&page=1&apikey=dc047495`)
      .then((res) => setMovies(res.data?.Search));
  }, [search, setMovies]);
  return (
    <div className="ml-[28px] sm:ml-[77px] mt-[48px]">
      <h1 className="text-[24px] font-DMsans">{rowTitle}</h1>
      <div className="w-full overflow-x-scroll">
        <div className="flex w-fit mr-[15px] sm:mr-[64px]">
          {movies.map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
