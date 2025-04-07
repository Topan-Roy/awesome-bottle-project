import React from 'react';

const Card = ({card, handelRemoveFromCard}) => {
    return (
        <div className='flex gap-5'>
            {
                card.map(bottle=><div key={bottle.id}>
                    <img className='w-28 ' src={bottle.img} alt="" />
                    <button onClick={()=> handelRemoveFromCard(bottle.id)}> X</button>
                </div>)
            }
        </div>
    );
};

export default Card;