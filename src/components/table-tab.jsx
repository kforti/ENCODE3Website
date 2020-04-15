import React from 'react';

import { Table } from './common/table';

export const TableTab = ({ tables=[] }) => {
    console.log(tables)
    return(
        <div>
            {tables.map((table) => (
                <Table title={table.title} 
                keyField='field0' 
                data={ table.data } 
                columns={ table.columns.map((item) => {
                    item.sort = true;
                    return item
                }) }
                fileName= 'supplementary-table-9-encode3.csv'
                />
            ))}
        </div>
    )
}