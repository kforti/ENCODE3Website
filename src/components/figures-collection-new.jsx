import React, { useState, useEffect } from 'react';

import {CollectionCard} from './collection-card';
import { Container, Card } from 'semantic-ui-react';


const axios = require('axios');
var qs = require('qs');

const getFigureCollection = async (id, callback) => {
  axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/figure-collection', {
			params: {
			id: id
			},
			paramsSerializer: (params) => {
				return qs.stringify(params, {arrayFormat: 'repeat'})
			},
		})
		.then(function (response) {
			// console.log(response.data)
			if(response.data){
				callback(id, Object.entries(response.data[id]))
			}
		})
		.catch(function (error) {
			// console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}

export const NewFiguresCollection = ({collectionIds, displayId,  row_size=3}) => {
    const [collections, setCollections] = useState({});
    const [displayCollections, setDisplayCollections] = useState({});
    const [displayRows, setDisplayRows] = useState([]);
   
    useEffect(() => {
        if(collectionIds && collectionIds.length){
            collectionIds.forEach((id, index) => {
                getFigureCollection(id, (id, data) => {
                    let rows = structureRows(data);
                    let newCollections = Object.assign({}, collections);
                    newCollections[id] = rows;
                    // console.log(newCollections);
                    setCollections(newCollections); 
                })
            })
        }
    }, [collectionIds])

    useEffect(() => {
        if(displayId in displayCollections){
            setDisplayRows(displayCollections[displayId]);
        }

    }, [displayId])

    function structureRows(figures) {
        let structured_rows = [];
        var row = [];
        for (var i = 0; i < figures.length; i++) {
            var fig = figures[i][1];
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
            
            {displayRows}
        </Container>
    )
}
