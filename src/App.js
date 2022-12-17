import React from "react";
import Display from "./components/main/Display";
import Hero from "./components/main/Hero";
import MovieDetail from "./components/main/MovieDetail";
import Navbar from "./components/main/Navbar";
import { useMovieContext } from "./hooks/UseContext";

function App() {
  const { showDetail } = useMovieContext();
  // This show detail is used to kno whether to close or open the other sections apart from the MovieDetail Section
  return (
    <>
      <div
        className={`${
          showDetail && "hidden"
        } relative w-full overflow-x-hidden`}
      >
        <Navbar />
        <Hero />
        <Display />
      </div>
      <MovieDetail />
    </>
  );
}

export default App;
