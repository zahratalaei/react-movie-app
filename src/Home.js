import React, { useEffect } from "react";
import Movies from "./Components/Movies";
import Header from "./Components/Header";
import styled from "styled-components";
// import Pagination from './Components/Pagination'
// import { useParams } from "react-router-dom";
const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: #e3f4fc;
`;
const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left:20px;
`; 
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
           <TitleWrapper>
        <Title>
         {isSearch ? `Results for ${search}`: 'Popular Movies'}</Title>
        </TitleWrapper>
      {movies.length > 0 ? (
        <>
          <Movies movies={movies} totalPages={totalPages} handlePageClick={handlePageClick} currentPage={currentPage} />
        </>
      ) : (
        <p>No movies to display</p>
      )}
    </main>
  );
};
export default Home;