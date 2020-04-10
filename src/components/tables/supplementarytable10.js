import React from 'react';
import { supplementary_table_10 } from '../../tables/supplementarytable10';

import { Table } from '../common/table';

const SupplementaryTable10 = () => (
    <div>
    <Table title='Supplementary Table 10' 
        keyField='field0' 
        data={ supplementary_table_10.data } 
        columns={ supplementary_table_10.cols }
        fileName= 'supplementary-table-10-encode3.csv'
        />
    </div>
);
export default SupplementaryTable10;
