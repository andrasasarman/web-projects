import React from "react";

const Card = ({name, email, id}) => {
return (
    <div className=" bg-[#FDF7E4] p-8 rounded-2xl hover:shadow-xl hover:cursor-pointer hover:border-[#265073] hover:border-2">
        <img alt='robo' src={`https://robohash.org/${id}test/200x200`}/>
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
);
}

export default Card;