import { FaSearch } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function Search({setSearchTerm}) {
    let [term, setTerm] = useState('');

    
    function clearSearch(){
        setTerm('');
        // Call the setSearchTerm function with an empty string
        setSearchTerm('');
    }

    
    function updateSearchTerm(event){
        setTerm(event.target.value);
        setSearchTerm(event.target.value);
    }

    return (
        <div className="flex gap-4 items-center my-6">
            <FaSearch />
            <input onChange={updateSearchTerm} className="w-full border-none outline-none text-white  bg-[#10141f]" type="text" placeholder="Search for movies or TV series" value={term}/>
            <FaMinusCircle className=" cursor-pointer" onClick={clearSearch}/>
        </div>
    )
}

Search.propTypes = {
    setSearchTerm: PropTypes.func
}