import React from 'react';
import { supplementary_table_7 } from '../../tables/supplementarytable7';

import { Table } from '../common/table';

const SupplementaryTable7 = () => (
    <div>
    <Table title='Supplementary Table 7' 
        keyField='field1' 
        data={ supplementary_table_7.data } 
        columns={ supplementary_table_7.cols }
        fileName= 'supplementary-table-7-encode3.csv'
        />
    </div>
);
export default SupplementaryTable7;
