import React from 'react';
import { supplementary_table_8 } from '../../tables/supplementarytable8';

import { Table } from '../common/table';

const SupplementaryTable8 = () => (
    <div>
    <Table title='Supplementary Table 8' 
        keyField='field1' 
        data={ supplementary_table_8.data } 
        columns={ supplementary_table_8.cols }
        fileName= 'supplementary-table-8-encode3.csv'
        />
    </div>
);
export default SupplementaryTable8;
