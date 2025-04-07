import React from 'react';
import './card.css'

const Bottle = ({bottle, handelAddtoCard}) => {
    // console.log(bottle)
   const {img, name,price,stock}=bottle;
    return (
        <div className='card bottle'>
           <img src={img} alt="" />
           <h3>{name}</h3>
           <p>${price }</p>
           <h4>{stock } remening</h4>
           <button onClick={ ()=> handelAddtoCard(bottle)}>buy now</button>
        </div>
    );
};

export default Bottle;