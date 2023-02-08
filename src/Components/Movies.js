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
export const Content = styled.div`
margin: 0 auto;
 @media(min-width:375px){
    width: 100%;

  }
  @media(min-width:460px){
    width: 90%;

  }
  @media(min-width:1200px){
    width: 70%;

  }
  
`
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
const Movies = ({ movies, totalPages, handlePageClick, currentPage,isSearch }) => {
  return (
    <Content>
      <TitleWrapper>
        <Title>
         {isSearch ? `Results for ${search}`: 'Popular Movies'}</Title>
        </TitleWrapper>
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
          containerClassName={"pagination"}
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
    </Content>
  );
};
export default Movies;