import React from 'react'
import { DomesticBeerItem } from '../components/BeerList/DomesticBeerItem'
import { ListHeader } from '../components/ListHeader'
import { OptionButton } from '../components/OptionButton'

export function ForeignBeerList() {
    
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <ListHeader />
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: 'fit-content', alignItems: 'center'}}>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
                <DomesticBeerItem title={"foreign"}/>
            </div>
        </div>
    )
}