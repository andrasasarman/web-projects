import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div className='flex gap-4 flex-wrap justify-center m-12'>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                    key={i} 
                    id={robots[i].id} 
                    name={robots[i].name} 
                    email={robots[i].email} 
                    />
                    )
                })
            }
        </div>
    )
}

export default CardList;