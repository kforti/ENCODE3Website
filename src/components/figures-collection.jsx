import React, { useState, useEffect } from 'react';

import {CollectionCard} from './collection-card';
import { Container, CardDeck, Card } from 'react-bootstrap';
import fig from '../Supplementary-Figure-5-ccRE-Tiers-2.png';
import fig2 from '../logo512.png';


export const FiguresCollection = ({figures, title, collectionId, row_size=3}) => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        let new_rows = []
        setRows()
        if (figures.length) {
            new_rows = structureRows()
        }
        if (new_rows.length){
            setRows(new_rows)
        }
    }, [figures])

    function structureRows() {
        let structured_rows = [];
        var row = [];
        let group = 0;
        for (var i = 0; i < figures.length; i++) {
            var fig = figures[i];
            row.push(
                <CollectionCard key={fig.id} figure={fig}/>
                )
            if (row.length === row_size || i + 1 === figures.length){
                structured_rows.push(
                    <CardDeck style={{marginBottom: "1.5rem"}} key={`${collectionId}-${group}`}>
                        {row}
                    </CardDeck>
                    )
                    group += 1;
                row = [];}
        }
        return structured_rows
    }
    return (
        <Container>
            <div className="text-center">
                <h2 style={{marginBottom: "2.5rem", marginTop: "1.5rem"}}>{title}</h2>
            </div>
            {rows}
        </Container>
    )
}
