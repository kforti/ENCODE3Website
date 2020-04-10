import React from 'react';
import { supplementary_table_6 } from '../../tables/supplementarytable6';

import { Table } from '../common/table';

// supplementary_table_6.data.map((item) => item.field3 = <p className="font-weight-bold" style={{backgroundColor: item.field3}}>{item.field3}</p>) 

const SupplementaryTable6 = () => (
    <div>
    <Table title='Supplementary Table 6' 
        keyField='field0' 
        data={ supplementary_table_6.data} 
        columns={ supplementary_table_6.cols }
        fileName= 'supplementary-table-6-encode3.csv'
        />
    </div>
);

export default SupplementaryTable6;
