import React, { useEffect, useState } from 'react'
import queryString from "query-string";
import { useLocation } from 'react-router-dom';

export function BeerDetail() {
    const location = useLocation()
    const params = queryString.parse(location.search)


    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <img src={params.image} width={'50%'} height={'50%'} />
            <p style={{fontSize: '50px', fontWeight: '600'}}>{params.title}</p>
            <p style={{fontSize: '30px'}}>{params.des}</p>
            <p style={{fontSize: '25px'}}>{params.rate}</p>
        </div>
    )
}