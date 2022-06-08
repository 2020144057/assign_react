import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { DomesticBeerItem } from '../components/BeerList/DomesticBeerItem'
import { ForeignBeerItem } from '../components/BeerList/ForeignBeerItem'
import { ListHeader } from '../components/ListHeader'
import { OptionButton } from '../components/OptionButton'

export function ForeignBeerList() {
    const [beers, setBeers] = useState([])
    const innerRef = useRef()

    useEffect(() => {
        getBeerList()

    }, [])
    function getBeerList() {
        axios({
            method: 'get',
            baseURL: 'https://api.punkapi.com/v2/',
            url: `beers?page=${1}&per_page=80`,
        })
        .then(respones => respones.data)
        // .then(console.log)
        .then(array => setBeers(array))
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ListHeader />
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: 'fit-content', alignItems: 'center'}}>
                {
                    beers.map(item => {
                        return <ForeignBeerItem id={item.id} name={item.name} tag={item.tagline} des={item.description} image={item.image_url} rate={item.abv} food_pairing={item.food_pairing} />
                    })
                }
            </div>
        </div>
    )
}