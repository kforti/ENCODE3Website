import React from 'react';
import { supplementary_table_5 } from '../../tables/supplementarytable5';

import { Table } from '../common/table';

const SupplementaryTable5 = () => (
    <div>
    <Table title='Supplementary Table 5' 
        keyField='field0' 
        data={ supplementary_table_5.data } 
        columns={ supplementary_table_5.cols }
        fileName= 'supplementary-table-5-encode3.csv'
        />
    </div>
);
export default SupplementaryTable5;
