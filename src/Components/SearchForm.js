import React from 'react'
import SearchIcon from'@mui/icons-material/Search'
import styled from 'styled-components'
const Form = styled.form` 
width:90% ;
margin: -21px auto 44px auto;
`
const SearchInputs = styled.div` 
    display: flex;
`
const Search = styled.input`
  box-sizing:border-box ;
  width:100% ;
  height:42px ;
  border-radius:22px 0 0 22px ;
  color: #01D277 ;
  padding-top:14px;
  padding-left:17px ;
  padding-bottom:18px;
  font-weight:500 ;
  font-size:14px ;
  line-height:16px ;
  font-family: 'Roboto';
  border:none;
  ::placeholder{
    font-family:'Roboto';
    color: #01D277;
    font-size: 14px;
    line-height:16px;
  }
  :focus {
      outline: none;
    }
`
const SearchButton =styled.button`
  height: 42px;
  width: 42px;
  background-color: white;
  display: grid;
  place-items: center;
  border: none;
  border-radius:0 22px 22px 0;
  svg {
  color:#01D277 ;
  font-size: 20px;
}
`
const SearchForm = ({ search, setSearch, searchMovie, setCurrentPage }) => {
  const clickHandler = () =>{
    setCurrentPage(1)
  }
  return (
    <Form onSubmit={searchMovie}>
      <SearchInputs>
        <Search 
        type="text"
        placeholder='Search'
        id='search'
        value={search || ''}
        onChange={(e)=>setSearch(e.target.value)}
        />
        <SearchButton type='submit' onClick={clickHandler}><SearchIcon/></SearchButton>
    </SearchInputs>
    </Form>
  )
}
export default SearchForm