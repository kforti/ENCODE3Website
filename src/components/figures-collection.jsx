import React, { useState, useEffect } from 'react';

import {CollectionCard} from './collection-card';
import { Container, Card } from 'semantic-ui-react';



export const FiguresCollection = ({figures, row_size=3}) => {
    const [rows, setRows] = useState([])

    useEffect(() => {
        let new_rows = []
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
        for (var i = 0; i < figures.length; i++) {
            var fig = figures[i];
            row.push(
                <CollectionCard figure={fig}/>
                )
            if (row.length === row_size || i + 1 === figures.length){
                structured_rows.push(
                    <Card.Group>
                        {row}
                    </Card.Group>
                    )
                row = [];}
        }
        return structured_rows
    }


    return (
        <Container>
            {rows}
        </Container>
    )
}
