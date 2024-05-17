import { getPaintings } from '../../libs/painting';
import { useEffect, useState } from 'react';
import PaintingCard from '../PaintingCard/PaintingCard';
import { Link } from "react-router-dom";


export default function GalleryList(){
    const [paintings, setPaintings] = useState([]);


    useEffect(() => {
        getPaintings().then((response) => {
            setPaintings(response.data);
        });
    }, []);


    return(
        <section className='flex flex-wrap gap-8 my-8 justify-center content-start'>
            {
                paintings.map((painting) => {
                    return (
                        <Link className='w-full sm:w-[40%] md:w-[30%] relative hover:cursor-pointer' key={painting.id} to={`/paintings/${painting.id}`}>
                            <PaintingCard painting={painting} />
                        </Link>
                        )
                })
            }
        </section>
    )
}
