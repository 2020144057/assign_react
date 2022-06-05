import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export function DomesticBeerItem({id,title, des, image, rate}) {
    return (
        <Link to={`/detail?itemID=${id}&title=${title}&des=${des}&image=${image}&rate=${rate}`} className='domestic-item-container'>
            <img src={image} width={"180px"} height={"200px"} />
            <div className='domestic-item-container-description'>
                <h3>{title}</h3>
                <p style={{fontSize: '15px'}}>{des}</p>
                <p>{rate}</p>
            </div>
        </Link>
    )
}