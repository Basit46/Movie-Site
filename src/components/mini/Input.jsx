import React from "react";
import { useMovieContext } from "../../hooks/UseContext";

const Input = () => {
  const { searchInput, setSearchInput } = useMovieContext();
  return (
    <div className="px-[28px] sm:px-[77px]">
      <h1 className="mt-[63px] mb-[4px] text-[24px] font-DMsans">Search</h1>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="border-black border-2 w-full"
        type="text"
      />
    </div>
  );
};

export default Input;
