import React from "react";
import Movie from "./Movie";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
const MoviesFlexBox = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
  grid-gap: 30px;
`;
const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 20px;
`;
const Movies = ({ movies, totalPages, handlePageClick, currentPage }) => {
  return (
    <>
      <MoviesWrapper>
        
        <MoviesFlexBox>
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MoviesFlexBox>
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={totalPages}
          marginPagesDisplayed={0}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          forcePage={currentPage-1}
              />
        </MoviesWrapper>
    </>
  );
};
export default Movies;