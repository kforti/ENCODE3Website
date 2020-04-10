import React from 'react';
import { supplementary_table_4_top } from '../../tables/supplementarytable4top';
import { supplementary_table_4_mid } from '../../tables/supplementarytable4mid';
import { supplementary_table_4_bottom } from '../../tables/supplementarytable4bottom';

import { Table } from '../common/table';

const SupplementaryTable4 = () => (
    <div>
        <Table title='Top' 
            keyField='field0' 
            data={ supplementary_table_4_top.data } 
            columns={ supplementary_table_4_top.cols }
            fileName= 'supplementary-table-4-top-encode3.csv'
            />
		<Table title='Mid' 
            keyField='field0' 
            data={ supplementary_table_4_mid.data } 
            columns={ supplementary_table_4_mid.cols }
            fileName= 'supplementary-table-4-mid-encode3.csv'
            />	
		<Table title='Bottom' 
            keyField='field0' 
            data={ supplementary_table_4_bottom.data } 
            columns={ supplementary_table_4_bottom.cols }
            fileName= 'supplementary-table-4-bottom-encode3.csv'
            />	
    </div>
);
export default SupplementaryTable4;
