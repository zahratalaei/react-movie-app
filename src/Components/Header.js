import React, { useEffect } from 'react'
import apiConf from '../api/apiConf';
import styled from 'styled-components';
import Bg from '../images/Group.png';
import SearchForm from './SearchForm';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div` 
  height:192px ;
  display:flex ;
  flex-direction:column ;
  align-items:center ;
  justify-content:center ;
  background-image:url(${Bg}), radial-gradient(circle at 53.46% -21.35%, rgba(5, 112, 172, 0.46) 0%, rgba(8, 27, 35, 0) 100%);
  @media (min-width:460px){
  background-repeat:repeat;
  background-position:50%;
  background-size:404px auto,cover;
  }
  @media (max-width:460px){
  background-repeat:no-repeat;
  background-position:50%;
  background-size:460px auto;
  }
  @media (max-width:375px){
  background-repeat:no-repeat;
  background-position:50%;
  background-size:404px auto;
  }
     img{
      width:66px ;
     }

`
const HeroBanner = styled.div` 
/* display:flex ; */
`

const Header = ({search, setSearch, searchMovie,setCurrentPage}) => {
  
  return (
    <HeroBanner>
      <HeaderContainer>
        <Link to="/">
        <img src={apiConf.logoUrl} alt="" />
        </Link>
      </HeaderContainer>
      <SearchForm search={search} setSearch={setSearch} searchMovie={searchMovie} setCurrentPage={setCurrentPage}/>
    </HeroBanner>
  )
}

export default Header