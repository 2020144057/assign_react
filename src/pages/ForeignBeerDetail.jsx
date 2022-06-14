import React, { useEffect, useState } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export function ForeignBeerDetail() {

    const location = useLocation()
    const params = queryString.parse(location.search)

    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <img src={params.image} width={'200px'} height={'500px'} />
            <p style={{fontSize: '50px', fontWeight: '600'}}>{params.name}</p>
            <p style={{fontSize: '30px'}}>{params.tag}</p>
            <p style={{fontSize: '30px'}}>Description</p>
            <p style={{fontSize: '30px'}}>{params.des}</p>
            <br></br>
            <br></br>
            <p style={{fontSize: '25px'}}>Rate</p>
            <p style={{fontSize: '25px'}}>{params.rate}</p>
            <br></br>
            <br></br>
            <p style={{fontSize: '25px'}}>Food pairing</p>
            <p style={{fontSize: '25px'}}>{params.food_pairing}</p>
        </div>
    )
}