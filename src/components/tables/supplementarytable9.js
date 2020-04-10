import React from 'react';
import { supplementary_table_9 } from '../../tables/supplementarytable9';

import { Table } from '../common/table';

const SupplementaryTable9 = () => (
    <div>
    <Table title='Supplementary Table 9' 
        keyField='field0' 
        data={ supplementary_table_9.data } 
        columns={ supplementary_table_9.cols }
        fileName= 'supplementary-table-9-encode3.csv'
        />
    </div>
);
export default SupplementaryTable9;
