import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getBeers } from '../axios';
import { DomesticBeerItem } from '../components/BeerList/DomesticBeerItem'
import { ListHeader } from '../components/ListHeader'
import { OptionButton } from '../components/OptionButton'

export function DomesticBeerList() {
    let isLazy = true
    const [beers, setBeers] = useState([])
    useEffect(() => {
        getBeerList()
    }, [])



    function getBeerList() {
        if (isLazy) {
            isLazy = false
            setTimeout(() => {
                const result = axios({
                    url: `/beers?count=3`,
                    method: "GET",
                    headers: {"Access-Control-Allow-Origin": "*"},
                    baseURL: 'http://13.125.229.199:8080',
                    withCredentials: false,
                }).then(response => response.data)
                .then(array => setBeers(array))
                isLazy = true
            }, 1000)
        }

    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ListHeader />
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: 'fit-content', alignItems: 'center'}}>
                {
                    beers.map(item => {
                        return <DomesticBeerItem id={item.id} title={item.name} image={item.image} des={item.des} rate={item.rate} />
                    })
                }

            </div>
        </div>
    )
}