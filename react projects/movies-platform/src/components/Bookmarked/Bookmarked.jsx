import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getMovies } from "../../libs/movie";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';


export default function Bookmarked() {
    let[movieList, setMovieList] = useState([]);
    const { auth } = useContext(AuthContext);
    const navigator = useNavigate();
    
    useEffect(()=>{
        getMovies(auth).then((body)=>setMovieList(body))
        .catch((response)=> {
            if (response.status === 401) {
                navigator('/login' );
            }
        });
    },[]);


    return (
        
        <section>
            <h2 className='text-3xl font-bold py-4'>Bookmarked</h2>
            <ul className='flex flex-wrap gap-6 list-none p-0'>
                {
                    movieList
                    .filter((movie)=>movie.bookmarked === true )
                    .map((movie)=>(
                        <>
                        <li key={movie.id} className='w-[22%]'>
                            <MovieCard movie={movie} />
                        </li>
                        </>
                    ))
                }
            </ul>
        </section>
    );
}

Bookmarked.propTypes = {
    searchResult: PropTypes.string,
    movieList: PropTypes.any
}