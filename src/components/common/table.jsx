import React from 'react';

import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;

export const Table = ({ title, keyField, data, columns, fileName }) => {
    return(
    <div>
        <h3>{title}</h3>
		<ToolkitProvider
			keyField={keyField} data={ data } columns={ columns }
			exportCSV= {{fileName: fileName}}
			search
			>
			{
				props => (
				<div>
					<ExportCSVButton className="btn-primary" { ...props.csvProps } >Export CSV</ExportCSVButton>					
					<SearchBar { ...props.searchProps } style={{marginLeft: '20px'}}/>
					<BootstrapTable { ...props.baseProps } pagination={paginationFactory()}/>
				</div>
				)
			}
	    </ToolkitProvider>
        <hr />
    </div>
    
)
}