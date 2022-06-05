import React from 'react'
import { getBeers } from '../axios';
import { DomesticBeerItem } from '../components/BeerList/DomesticBeerItem'
import { ListHeader } from '../components/ListHeader'
import { OptionButton } from '../components/OptionButton'

export function DomesticBeerList() {
    console.log(getBeers());
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ListHeader />
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: 'fit-content', alignItems: 'center'}}>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
                <DomesticBeerItem title={"domestic"}/>
            </div>
        </div>
    )
}