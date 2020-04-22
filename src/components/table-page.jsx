import React, { useState } from 'react';
import { useEffect } from 'react';

import { TableContainer } from './common/table';


export const TablePage = ({page}) => {
    return(
        <div><h2>{page.title}</h2>
				{page.tables.map((id) => (
					<TableContainer 
					id={id}
					num_records={id === "supplementary_table_13d" ? '1000': 'all'}
					/>
				))}
			</div>
        
    )
}