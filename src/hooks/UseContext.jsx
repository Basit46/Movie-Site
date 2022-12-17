import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const movieContext = createContext();

const OurProvider = ({ children }) => {
  // I made use of the useContext Hook

  // This for the movies i initially fetched
  const [movies, setMovies] = useState([]);

  // The value gotten from the input, This is updated as
  // the value of imput changes
  const [searchInput, setSearchInput] = useState("");

  //The result of the searched movie
  const [searchedMovie, setSearchedMovie] = useState([]);

  //The IMDB Id of the clicked movie so as to get the detail of the movie
  const [movieToShowId, setMovieToShowId] = useState("");

  //The details of the clicked movie
  const [movieToShow, setMovieToShow] = useState({});

  // This show detail is used to kno whether to close or open the other sections apart from the MovieDetail Section
  const [showDetail, setShowDetail] = useState(false);

  //This useEffect runs everytime the value of the input changes
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchInput}&page=1&apikey=dc047495`)
      .then((res) => setSearchedMovie(res.data?.Search))
      .catch((err) => console.log(err));
  }, [searchInput]);

  return (
    <movieContext.Provider
      value={{
        movies,
        setMovies,
        searchInput,
        setSearchInput,
        searchedMovie,
        setSearchedMovie,
        movieToShowId,
        setMovieToShowId,
        movieToShow,
        setMovieToShow,
        showDetail,
        setShowDetail,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default OurProvider;

export const useMovieContext = () => {
  return useContext(movieContext);
};
