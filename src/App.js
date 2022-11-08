import React, { useEffect, useState } from "react";
import {Routes, Route, useNavigate } from "react-router-dom";
import apiConf from "./api/apiConf";
import GlobalFonts from './fonts/fonts'
import './App.css';
import MoviePage from "./Components/MoviePage.js";
import Home from "./Home";
import { useLocation } from "react-router-dom";
const App =()=>{
    const[movies, setMovies]=useState([]);
    const[search, setSearch]=useState('');
    const[currentPage, setCurrentPage] = useState(1);
    const[totalPages, setTotalPages] = useState();
    const navigate =useNavigate();
    const { pathname } = useLocation();
    const[isSearch, setIsSearch] = useState(false)
	
    useEffect(() => {
        
            if (!search) {
                getMovies() 
                console.log("getmovies")
                console.log("currentpage:" ,currentPage);
        } else {
            searchMovie();   
            }
        
        
},[setSearch])
    useEffect(() => {
        if (pathname === '/') {refreshPage()}
    }, [pathname])
    
    const refreshPage = () => {
        setCurrentPage(1);
        setSearch('');
        getMovies()
        setIsSearch(false)
    }
    // get popular movies
    const getMovies = async ()=>{
        try{
            const res = await fetch(apiConf.baseUrl + 'movie/popular' + apiConf.apiKey + '&page=1' )
            const data = await res.json()
            if(data.results.length > 0){
                setMovies(data.results)
                setTotalPages(data.total_pages)
            }
        }
        catch(err){
            console.log(err.message);
        }
    }
    // get search movies
    const searchMovie = async (e)=>{
        if(e && e.preventDefault){e.preventDefault();}
        if(search!=='')
        {
            try {
            const res = await fetch(apiConf.baseUrl + 'search/movie' + apiConf.apiKey + '&query=' + search + '&page='+ currentPage)
            const data = await res.json();
            if(data.results.length > 0){
                setMovies(data.results)
                setTotalPages(data.total_pages)
                navigate(`./search?search=${search}&page=${currentPage}`)
            }
            }
        catch(err){
            console.log(err.message);
            }
            setIsSearch(true)
        } else {
            getMovies(); 
        }
    }
    const fetchMovies = async(currentPage) => {
        try{
            const res = await fetch(apiConf.baseUrl + 'movie/popular' + apiConf.apiKey + '&page=' + currentPage)
            const data = await res.json()
            if(data.results.length > 0){
               return data.results
                
            }
            console.log(data.results)
        }
        catch(err){
            console.log(err.message);
        }
    }
    const fetchSearchMovies = async (currentPage) => {
        try{
            const res = await fetch(apiConf.baseUrl + 'search/movie' + apiConf.apiKey + '&query=' + search + '&page='+ currentPage)
            const data = await res.json();
            if(data.results.length > 0){
                return data.results
            }
        }
        catch(err){
            console.log(err.message);
        }
    }
    const handlePageClick = async (data) => {
        console.log(data.selected + 1);
        setCurrentPage(data.selected + 1)
        if (!search) {
            setMovies(await fetchMovies(data.selected + 1))
            navigate(`./${data.selected + 1}`)
            console.log("search in pagination: ", search)
        } else {
            setMovies(await fetchSearchMovies(data.selected + 1))
            navigate(`./search?search=${search}&page=${data.selected + 1}`)
            console.log("search in pagination: ", search)
        }
    }
    
    return(
        <div className="App">
            <GlobalFonts/>
            <Routes>
                <Route path="/" element={<Home movies={movies} search={search} setSearch={setSearch} setCurrentPage={setCurrentPage}
                    searchMovie={searchMovie}  currentPage={currentPage} totalPages={totalPages} handlePageClick={handlePageClick} isSearch={isSearch} />} />
                <Route path="/:page" element={<Home movies={movies} search={search} setSearch={setSearch} setCurrentPage={setCurrentPage}
                    searchMovie={searchMovie} currentPage={currentPage} totalPages={totalPages} handlePageClick={handlePageClick} isSearch={isSearch}/>} />
                <Route path="/:search" element={<Home movies={movies} search={search} setSearch={setSearch} setCurrentPage={setCurrentPage}
                    searchMovie={searchMovie}  currentPage={currentPage} totalPages={totalPages} handlePageClick={handlePageClick} isSearch={isSearch}/>} />
                <Route path="/movie/:id" element={<MoviePage/>}/>
                
            </Routes>
        </div>
    )
}
export default App;