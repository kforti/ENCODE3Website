import React from 'react';

import { Table } from './common/table';
import { Button } from 'react-bootstrap';

const axios = require('axios');

export const TableTab = ({ page_id, tables=[] }) => {
    // console.log(tables)
    const sortFunc = (a, b, order, dataField, rowA, rowB) => {
        
         a = parseFloat(a) && typeof a === 'string' ? parseFloat(a.replace(/[,]/g, '')) : a
         b = parseFloat(b) && typeof b === 'string' ? parseFloat(b.replace(/[,]/g, '')) : b
         if(typeof a === 'string') {
            if (order === 'asc') return a.localeCompare(b);
            else return b.localeCompare(a);
         }
         
         if (order === 'asc') return a - b;
        else return b - a;
    }

    const onClick = () => {
        window.open(`https://encode3-companion.s3.us-east-2.amazonaws.com/tables/${page_id}/${page_id}.csv`,'_blank')
        // var s3 = new AWS.S3();
        // s3.getObject(
        // { Bucket: "encode3-companion", Key: "tables/supplementary_table_10/supplementary_table_10.csv" },
        // function (error, data) {
        //     if (error != null) {
        //     alert("Failed to retrieve an object: " + error);
        //     } else {
        //     alert("Loaded " + data.ContentLength + " bytes");
        //     // do something with data.Body
        //     }
        // }
        // );
    }

    if(page_id === 'supplementary_table_10' || page_id === 'supplementary_table_11'){
        return(
           <div>
               <h3>This table is too large to display in your browser. Click below to download.</h3>
            <Button onClick={onClick}>Export CSV</Button>
           </div> 
        )
    }
    return(
        <div>
            {tables.map((table) => (
                <Table title={table.title} 
                keyField='field0' 
                data={ table.data.map((item) => {
                    for (var key of Object.keys(item)) {
                        item[key] = item[key].toLocaleString('en-us')
                       
                    }
                    return item
                })  } 
                columns={ table.columns.map((item) => {
                    item.sort = true;
                    item.sortFunc = sortFunc
                    return item
                }) }
                fileName= 'supplementary-table-9-encode3.csv'
                />
            ))}
        </div>
    )
}