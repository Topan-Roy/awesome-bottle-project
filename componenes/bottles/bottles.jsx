import React, { use, useEffect, useState } from 'react';
import Bottle from '../bottle/bottle';
import './bottles.css'
import { addToStoredCart, getStoreCart, removeFromCard } from '../../src/utiliti/utiliti';
import Card from '../card/card';


const Bottles = ({bottlesPromice}) => {
    const [card,setCard]=useState([])
    const bottles = use(bottlesPromice);
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);
        const storedCart = [];

        for (const id of storedCartIds) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCard(storedCart);

    }, [bottles])
    const handelAddtoCard=(bottle)=>{
        // console.log('add to the card',bottle)
        const newCard=[...card,bottle];
        setCard(newCard);
     addToStoredCart(bottle.id)
    }
    
    const handelRemoveFromCard=id=>{
        console.log('remove item',id)
        const reaminigeCard= card.filter(bottle=>bottle.id !== id);
        setCard(reaminigeCard);
        removeFromCard(id)
    }
    //  console.log(bottles)
    return (
        <div >
            <h3 > bottles : {bottles.length}</h3>
            <p>added to card {card.length}</p>
            <Card card={card}  handelRemoveFromCard={ handelRemoveFromCard}></Card>
            <div className=' grid grid-cols-3 gap-5'>
            {
                bottles.map(bottle=><Bottle 
                    key={bottle.id} 
                    handelAddtoCard={ handelAddtoCard}
                    bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;