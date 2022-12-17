import React from "react";
import { useMovieContext } from "../../hooks/UseContext";
import Movie from "./Movie";

const SearchedResutRow = () => {
  const { searchedMovie } = useMovieContext();
  if (!searchedMovie) {
    return;
  } else {
    return (
      <div>
        <div className="ml-[77px] mt-[48px]">
          <h1 className="text-[24px] font-DMsans">Searched Result</h1>
          <div className="w-full overflow-x-scroll">
            <div className="flex w-fit mr-[64px]">
              {searchedMovie?.map((movie, index) => (
                <Movie key={index} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchedResutRow;
