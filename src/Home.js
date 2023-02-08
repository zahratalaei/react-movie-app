import React, { useEffect } from "react";
import Movies from "./Components/Movies";
import Header from "./Components/Header";


const Home = ({
  movies,
  search,
  setSearch,
  searchMovie,
  totalPages,
  handlePageClick,
  setCurrentPage,
  currentPage,
  isSearch,
}) => {
  
  return (
    <main className="pageWrapper">
      <Header
        search={search}
        setSearch={setSearch}
        searchMovie={searchMovie}
        setCurrentPage={setCurrentPage}
      />
           
      {movies.length > 0 ? (
        <>
          <Movies movies={movies} totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} isSearch={isSearch} />
        </>
      ) : (
        <p>No movies to display</p>
      )}
    </main>
  );
};
export default Home;