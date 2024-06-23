import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import './MovieCard.css';
import { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { patchMovie } from "../../libs/movie";
import { AuthContext } from "../../contexts/AuthContext";

export default function MovieCard(props) {
    const { id, title, pg, imageUrl, category, bookmarked, year } = props.movie;
    const [checked, setChecked] = useState(bookmarked);
    const { auth } = useContext(AuthContext);

    function setBookmark() {
        console.log('Toggling bookmark for movie:', id);
        patchMovie(id, { bookmarked: !checked }, auth).then(() =>
          setChecked(!checked)
        ).catch(error => {
            console.error('Error updating bookmark:', error);
        });
    }

    let movieImage = (
        <img className="image" src={imageUrl} alt={title} />
    );

    if (!props.skipNavigation) {
        console.log('Link to movie details for movie:', id);
        movieImage = (
            <Link to={`/movie-details/${id}`}>
                <img className="image" src={imageUrl} alt={title} />
            </Link>
        );
    }

    return (
        <article className={`movie ${props.large ? 'movie--large' : ''} ${props.moviePage ? 'movie--moviePage' : ''}`}>
            <div className="movie__image">
                {movieImage}
            </div>
            <span className="movie__bookmark" onClick={setBookmark}>
                {checked ? <FaBookmark /> : <FaRegBookmark />}
            </span>
            <h3 className="movie__title">{title}</h3>
            <p className="movie__details">
                <span>{`${props.moviePage ? 'Year : ' + year : year}`}</span>
                <span>{`${props.moviePage ? 'Category : ' + category : category}`}</span>
                <span>{`${props.moviePage ? 'PG : ' + pg : pg}`}</span>
            </p>
        </article>
    );
}

MovieCard.propTypes = {
    large: PropTypes.bool,
    moviePage: PropTypes.bool,
    skipNavigation: PropTypes.bool,
    movie: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        bookmarked: PropTypes.bool.isRequired,
        pg: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,
};
