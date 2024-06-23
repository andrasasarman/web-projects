import Search from "../Search/Search";
import Trending from "../Trending/Trending";
import Recommended from "../Recommended/Recommended";
import { useState } from "react";
import { useEffect } from "react";
import { getMovies } from "../../libs/movie";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";


export default function Landing() {
    let [searchResult, setSearchResult] = useState('');
    let[movieList, setMovieList] = useState([]);
    const navigator = useNavigate();
    const {auth} = useContext(AuthContext);

    useEffect(()=>{
        getMovies(auth).then((body)=>setMovieList(body))
        .catch((response)=> {
            if (response.status === 401) {
                navigator('/login' );
            }
        });
    },[]);

    function setSearchTerm(term){
      setSearchResult(term);
    }



    return (
        <>
        <Search setSearchTerm={setSearchTerm} />
        <Trending movieList={movieList} />
        <Recommended movieList={movieList} searchResult={searchResult} />
      </>
    );
}