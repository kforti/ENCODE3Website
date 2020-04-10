import React from 'react';
import { supplementary_table_3_dnase } from '../../tables/supplementarytable3_dnase';
import { supplementary_table_3_peaks } from '../../tables/supplementarytable3_peaks';

import { Table } from '../common/table';


const SupplementaryTable3 = () => (
    <div>
        <Table title='Using DNase Peaks' 
            keyField='field0' 
            data={ supplementary_table_3_dnase.data } 
            columns={ supplementary_table_3_dnase.cols }
            fileName= 'supplementary-table-3-dnase-encode3.csv'
            />	
        
        <Table title='Across Different Peak Sets' 
                keyField='field0' 
                data={ supplementary_table_3_peaks.data } 
                columns={ supplementary_table_3_peaks.cols }
                fileName= 'supplementary-table-3-peaks-encode3.csv'
                />	

    </div>
);
export default SupplementaryTable3;
