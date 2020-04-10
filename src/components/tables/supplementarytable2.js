import React from 'react';
import { supplementary_table_2 } from '../../tables/supplementarytable2';

import { Table } from '../common/table';

const SupplementaryTable2 = () => (
    <Table title='Supplementary Table 2' 
		keyField='start' 
		data={ supplementary_table_2.data } 
		columns={ supplementary_table_2.cols }
		fileName= 'supplementary-table-2-encode3.csv'
		/>
);
export default SupplementaryTable2;
