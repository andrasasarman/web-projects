import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaAd } from "react-icons/fa";
import { FaRegRegistered } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

export default function Navigation() {
    return (
        <nav className='fixed h-[90vh] left-0 w-[5%] m-[1%] rounded-2xl bg-[#141d2f]'>
            <ul className='flex flex-col justify-around h-full items-center'>
                <li className='w-1/2'>
                    <Link to='/'><FaHome className='w-full h-fit' /></Link>
                </li>
                <li className='w-1/2'>
                    <Link to='/create-movie'><FaAd className='w-full h-fit' /></Link>
                </li>
                <li className='w-1/2'>
                    <Link to='/register'><FaRegRegistered className='w-full h-fit' /></Link>
                </li>
                <li className='w-1/2'>
                    <Link to='/bookmarked'><FaRegBookmark className='w-full h-fit' /></Link>
                </li>
            </ul>
        </nav>
    )
}