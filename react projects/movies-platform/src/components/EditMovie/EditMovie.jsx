import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, patchMovie } from "../../libs/movie";
import MovieForm from "../MovieForm/MovieForm";
import { AuthContext } from "../../contexts/AuthContext";

export default function EditMovie () {
    const { id } = useParams();
    const [movie, setMovie] = useState(); 
    const navigator = useNavigate();
    const {auth} = useContext(AuthContext);

    useEffect(()=>{
        getMovie(id, auth).then((response)=>{
            // debugger;
            console.log(response);
            setMovie(response.data);
        })
    }, [id]);  
    
    function submit(movie){
        patchMovie(id, movie, auth).then(()=>{
            navigator(`/movie-details/${id}`);
        })
    }
    return (
        <section>
            <h2 className="text-center mt-8 text-3xl font-bold">Edit Movie</h2>
            <MovieForm submit={submit} movie={movie} id={id} buttonTitle={"Edit Movie"}/>       
        </section>
    )
}