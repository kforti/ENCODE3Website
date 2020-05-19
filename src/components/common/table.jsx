import React, { useState, useEffect } from 'react';

import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import * as Icon from 'react-bootstrap-icons';
import {Spinner, Row, Col} from 'react-bootstrap';

const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;

const axios = require('axios');
var qs = require('qs');

function Table(id='', num_records='all', remote=false, data=[], columns=[], title='', keyField='', fileName='', s3_object='') {
	this.id = id
	this.num_records = num_records
	this.data = data
	this.columns = columns
	this.title = title
	this.keyField = keyField
	this.fileName = fileName
	this.s3_object = s3_object
	this.remote = remote 
}


export const TableContainer = ({ id, num_records, remote }) => {
	const [ activeTable, setActiveTable ] = useState(new Table(id, num_records, remote));
	const [loaded, setLoaded] = useState(false);
	console.log(activeTable)
	useEffect(() => {
		if(!id){
			return
		}
		setLoaded(false);
		setActiveTable(new Table(id, num_records, remote));
		fetchTableData(id, remote, num_records)
    }, [id])

	const fetchTableData = (_id, _remote, _num_records, sort_column, sort_order) => {
		//aspgjff15a.execute-api.us-east-2.amazonaws.com/beta
		axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/table', {
			params: {
			id: id,
			num_records: num_records,
			sort_column: sort_column,
			sort_order: sort_order
			},
			paramsSerializer: (params) => {
				return qs.stringify(params, {arrayFormat: 'repeat'})
			},
		})
		.then(function (response) {
			console.log(response.data)
			if(response.data){
				const new_table = response.data[0]
				new_table.id = _id
				new_table.remote = _remote
				new_table.num_records = _num_records
				new_table.columns.map((item) => {
					item.sort = true;
					item.sortFunc = sortFunc
					item.sortCaret = (order, column) => {
						if (!order) return (<div><Icon.CaretDown/><Icon.CaretUp/></div>);
						else if (order === 'asc') return (<span><Icon.CaretUpFill/></span>);
						else if (order === 'desc') return (<span><Icon.CaretDownFill/></span>);
						return null;
					  }
					return item
				})
				preProcessTable(new_table);
				setLoaded(true);
				console.log(new_table)
				setActiveTable(new_table);
			}
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}
	const preProcessTable = (new_table) => {
		new_table.data = new_table.data.map((item) => {
			for (var key of Object.keys(item)) {
				item[key] = item[key].toLocaleString('en-us')
			}
			return item
		})
		new_table.columns = new_table.columns.map((item) => {
			item.sort = true;
			item.sortFunc = sortFunc
			return item
		})
	}
	const sortFunc = (a, b, order, dataField, rowA, rowB) => {
		console.log("entry")
		console.log(b)
		console.log(a)
		if(a == "0"){ a = "0.0"}
		a = typeof a === 'string' ? parseFloat(a.replace(/[,]/g, '')) : a
		b = typeof b === 'string' ? parseFloat(b.replace(/[,]/g, '')) : b
		console.log("transformed")
		console.log(b)
		console.log(a)
		if(typeof a === 'string') {
			console.log("assess")
			console.log(b)
			console.log(a)
		   if (order === 'asc') return a.localeCompare(b);
		   else return b.localeCompare(a);
		}
		
		if (order === 'asc') return a - b;
	   else return b - a;
   }

   const onTableChange = (type, { sortField, sortOrder, data }) => {
	setTimeout(() => {
		fetchTableData(activeTable.id, activeTable.remote, activeTable.num_records, sortField, sortOrder)
	  }, 2000);
   }

   const downloadRemoteCSV = () => {
	   console.log("remote download")
	   window.open(`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`,'_blank')
   }

    return(
    <div>

		{!loaded && (
			<Row className="show-grid" float="center">
				<Col xs={12} xsOffset={6}>
					<Spinner animation="border" role="status">
						<span className="sr-only">Loading...</span>
					</Spinner>
					<hr />
				</Col>
			</Row>
			
		)}
		{activeTable && activeTable.data.length > 0 && (
		<div>
		 <h3>{activeTable.title}</h3>
		 <ToolkitProvider
			 keyField= 'field0' data={ activeTable.data } columns={ activeTable.columns }
			 exportCSV= {{fileName: activeTable.fileName}}
			 search
			 >
			 {
				 props => (
					 <div>
					{ activeTable.remote &&
						<div>
							<ExportCSVButton className="btn-primary" onClick={downloadRemoteCSV} { ...props.csvProps } >Export CSV</ExportCSVButton>					
					<div>
						<BootstrapTable bootStrap4={true}
						remote={ { sort: activeTable.remote } } 
						wrapperClasses="container table-responsive" 
						classes="table-responsive" { ...props.baseProps } 
						pagination={paginationFactory()} 
						onTableChange={onTableChange}
					/>
					</div>
					</div>
					}
					{ !activeTable.remote &&
						<div>
							<ExportCSVButton className="btn-primary" { ...props.csvProps } >Export CSV</ExportCSVButton>					
					 <SearchBar { ...props.searchProps } style={{marginLeft: '20px'}}/>
					<div>
					
						<BootstrapTable bootStrap4={true}
						wrapperClasses="container table-responsive" 
						classes="table-responsive" { ...props.baseProps } 
						pagination={paginationFactory()} 
					/>

						
					</div>
					</div>
					}
					 
				 </div>
				 )
			 }
		 </ToolkitProvider>
		 <hr />
		 </div>
		)}
       
    </div>
    
)
}