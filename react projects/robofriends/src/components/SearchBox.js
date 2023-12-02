import React from "react";

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div>
            <input className="p-4 text-center" type='search' placeholder='search robots' onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;