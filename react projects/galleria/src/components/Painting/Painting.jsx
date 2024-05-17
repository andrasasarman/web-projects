import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPaintingById } from '../../libs/painting';

export default function Painting(){
    const { id } = useParams(); 
    const [painting, setPainting] = useState();

    useEffect(() => {
        getPaintingById(id).then((response) => {
            console.log(response.data);
            setPainting(response.data);
        });
    }, [id]);
    
    if (!painting) {
        return (
          <h2>
            The painting you have requested does not exits please search for a
            different one
          </h2>
        );
      }

    return (
        <section className='flex flex-col xl:flex-row py-8 justify-between relative'>
            <div className='xl:w-1/2 h-fit'>
                <img className='w-full' src={painting.image} alt={painting.name} />
            </div>
            <div className='xl:w-1/6 flex flex-col justify-between'>
                <div className='bg-white sm:-ml-20 p-4 sm:p-20 absolute top-0 xl:relative'>
                    <h2 className='font-marcellus text-3xl font-bold'>{painting.name}</h2>
                    <p className='font-montserrat text-base text-gray-600'>{painting.author}</p>
                </div>
                <img className='w-1/12 xl:w-1/2 mx-auto absolute right-0 mt-4 xl:relative' src={painting.authorImage} alt={painting.author} />
            </div>
            <div className='xl:w-1/3'>
                <p className='font-marcellus text-[8rem] sm:text-[12rem] text-gray-200'>{painting.year}</p>
                <p className='font-montserrat text-lg text-gray-800 font-extrabold -mt-28 w-10/12'>{painting.description}</p>
            </div>
        </section>
    )
}