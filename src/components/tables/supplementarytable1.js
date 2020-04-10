import React from 'react';
import { supplementary_table_1 } from '../../tables/supplementarytable1';

import { Table } from '../common/table'

const SupplementaryTable1 = () => (
    <Table title='Supplementary Table 1' 
		keyField='accession' 
		data={ supplementary_table_1.data } 
		columns={ supplementary_table_1.cols }
		fileName= 'supplementary-table-1-encode3.csv'
		/>
);
export default SupplementaryTable1;
