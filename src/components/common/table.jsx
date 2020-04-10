import React from 'react';

import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { ExportCSVButton } = CSVExport;

export const Table = ({ title, keyField, data, columns, fileName }) => {
    return(
    <div>
        <h3>{title}</h3>
		<ToolkitProvider
			keyField={keyField} data={ data } columns={ columns }
			exportCSV= {{fileName: fileName}}
			>
			{
				props => (
				<div>
					<ExportCSVButton className="btn-primary" { ...props.csvProps } >Export CSV</ExportCSVButton>					
					<BootstrapTable { ...props.baseProps } pagination={paginationFactory()}/>
				</div>
				)
			}
	    </ToolkitProvider>
        <hr />
    </div>
    
)
}