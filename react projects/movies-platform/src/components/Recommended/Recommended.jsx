import MovieCard from '../MovieCard/MovieCard';
import PropTypes from 'prop-types';

export default function Recommended({searchResult, movieList}) {
    


    return (
        
        <section className='recommended'>
            <h2 className='text-3xl font-bold py-4'>Recommended</h2>
            <ul className='flex flex-wrap gap-6 p-0 list-none'>
                {
                    movieList
                    .filter((movie)=>movie.title.toLowerCase().includes(searchResult.toLowerCase().trim()))
                    .map((movie)=>(
                        <li key={movie.id} className='w-[22%]'>
                            <MovieCard movie={movie} />
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

Recommended.propTypes = {
    searchResult: PropTypes.string,
    movieList: PropTypes.any
}