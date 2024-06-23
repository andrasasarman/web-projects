import { useParams, useNavigate } from "react-router-dom";
// import { movieList } from '../../data.js';
import MovieCard from "../MovieCard/MovieCard";
import { useContext, useEffect, useState } from "react";
import { getMovie, deleteMovie, patchMovie } from "../../libs/movie";
import Dialog from "../Dialog/Dialog";
import { useDialog } from "../Dialog/DialogHooks";
import './MovieDetails.css';
import { AuthContext } from "../../contexts/AuthContext";

// const obj = {
//   prop1: '11'
// }

// delete obj.prop1;

export default function MovieDetails() {
  const { idMovie } = useParams();
  // useSearchParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState();
  const [isBookmarked, setIsBookmarked] = useState(false);
  //const [showDialog, setShowDialog] = useState(false);
  const dialogConfig = useDialog(`Are you sure you want to delete ${movie?.title}?`, 'Yes', 'No');
  const {auth} = useContext(AuthContext);


  // const movie = movieList.find((movie) => movie.id === idMovie);

  useEffect(() => {
    // getMovies().then((body) => {
    //   const foundMovie = body.find((movie) => movie.id === idMovie);
    //   setMovie(foundMovie);
    // });
    getMovie(idMovie, auth)
      .then((response) => {
        setMovie(response.data);
        setIsBookmarked(response.data.bookmarked);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idMovie]);

  // useEffect(() => {
  //   if (!movie) {
  //     navigate('/404');
  //     return;
  //   }
  // }, []);

  function editMovie() {
    navigate(`/edit-movie/${movie.id}`);
  }

  function success() {
    deleteMovie(movie.id, auth).then(() => {
        navigate('/');
    });
 }

 function setBookmark(){
    patchMovie(movie.id, {bookmarked: !isBookmarked}, auth).then(()=>{
        setIsBookmarked(!isBookmarked);
    });
}


  if (!movie) {
    return (
      <h2>
        The movie you have requested does not exits please search for a
        different one
      </h2>
    );
  }

  return (
    <section className="movie-details">
      <header className="movie-details__header">
        <h2 className=" mt-8 text-3xl font-bold">Movie details</h2>
      </header>

      {<MovieCard skipNavigation moviePage movie={movie} />}
      
      <button className="form-button" onClick={editMovie}>Edit Movie</button>
      <button className="form-button" onClick={()=>dialogConfig.setShowDialog(true)}>Delete Movie</button>
      <button className="form-button" onClick={setBookmark}>{!isBookmarked ? 'Bookmark' : 'Unbookmark' }</button>

      <Dialog {...dialogConfig} success={success} reject={()=>dialogConfig.setShowDialog(false)} />

    </section>
  );
}