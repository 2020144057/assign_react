import React from 'react';
import './style.css'
export function DomesticBeerItem({title}) {
    return (
        <div className='domestic-item-container'>
            <p>{title}</p>
        </div>
    )
}