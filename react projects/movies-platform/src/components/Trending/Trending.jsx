import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import PropTypes from 'prop-types';

export default function Trending({movieList}) {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
      };
    return (
        <section>
            <h2 className='text-3xl font-bold py-4'>Trending</h2>
            <ul className='p-0 list-none'>
            <Slider {...settings}>
                {
                    movieList
                    .filter((movie)=>movie.trending === true)
                    .map((movie)=>(
                        <>
                        
                        <li key={movie.id} className=' mr-4'>
                            <MovieCard movie={movie} large />
                        </li>
                        
                        </>
                        
                    ))
                }
                </Slider>
            </ul>
        </section>
    );
}

Trending.propTypes = {
    movieList: PropTypes.any
}