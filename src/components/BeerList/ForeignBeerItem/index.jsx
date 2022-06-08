import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export function ForeignBeerItem({id,name, tag,  des, image, rate, food_pairing}) {
    return (

        <Link to={`/detail/foreign?name=${name}&tag=${tag}&des=${des}&image=${image}&rate=${rate}&food_pairing=${food_pairing}`} className='foreign-item-container'>
            <img src={image} width={"150px"} height={"300px"} />
            <div className='foreign-item-container-description'>
                <h3>Name: {name}</h3>
                <p>Tag: {tag}</p>
                <p style={{fontSize: '15px'}}>Description: {des}</p>
                <p>abv: {rate}</p>
                <div>food pair:{food_pairing}</div>
            </div>
        </Link>
    )
}