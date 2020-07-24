import React, { useState, useEffect } from 'react';

import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';
import { Query } from '../query'

import * as Icon from 'react-bootstrap-icons';
import {Spinner, Row, Col, Button} from 'react-bootstrap';

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


const getRemoteTable = (id) => {
	if(id == "supplementary_table_10"){
		return getTable10(id)
	}
	else if(id == "supplementary_table_11"){
		return getTable11(id)
	}
	else if(id == "supplementary_table_22f"){
		return getTable22f(id)
	}
	else if(id == "supplementary_table_22d"){
		return getTable22d(id)
	}
	else if(id == "supplementary_table_22e"){
		return getTable22e(id)
	}
	else if(id == "supplementary_table_22h"){
		return getTable22h(id)
	}
	else if(id == "supplementary_table_22i"){
		return getTable22i(id)
	}
	else if(id == "supplementary_table_22j"){
		return getTable22j(id)
	}

}


const getTable10 = (id) =>{
	let table = new Table(id,
		0,
		[],
		[],
		true, 
		"Supplementary Table 10 - Human-cCREs",
		"supplementary_table_10.csv",
		"tables/supplementary_table_10/supplementary_table_10.csv",
	)
	return table
}


const getTable11 = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 11 - Mouse-cCREs", 
		"supplementary_table_11.csv",
		"tables/supplementary_table_11/supplementary_table_11.csv",
	)
	return table
}


const getTable22f = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22f. Ranked limb e11.5 mouse elements", 
		"supplementary_table_22f.csv",
		"tables/supplementary_table_22/supplementary_table_22f.csv",
	)
	return table
}

const getTable22d = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22d. Ranked midbrain e11.5 mouse elements", 
		"supplementary_table_22d.csv",
		"tables/supplementary_table_22/supplementary_table_22d.csv",
	)
	return table
}


const getTable22e = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22e. Ranked hindbrain e11.5 mouse elements", 
		"supplementary_table_22e.csv",
		"tables/supplementary_table_22/supplementary_table_22e.csv",
	)
	return table
}


const getTable22h = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22h. Ranked forebrain e12.5 mouse elements", 
		"supplementary_table_22h.csv",
		"tables/supplementary_table_22/supplementary_table_22h.csv",
	)
	return table
}


const getTable22i = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22i. Ranked heart e12.5 mouse elements", 
		"supplementary_table_22i.csv",
		"tables/supplementary_table_22/supplementary_table_22i.csv",
	)
	return table
}


const getTable22j = (id) => {
	let table = new Table(id,
		0,
		[],
		[],
		true,
		"Supplementary Table 22j. Ranked limb e12.5 mouse elements", 
		"supplementary_table_22j.csv",
		"tables/supplementary_table_22/supplementary_table_22j.csv",
	)
	return table
}


export const LocalTable = ({ id, remote }) => {
	const [ activeTable, setActiveTable ] = useState(new Table(id));
	const [loaded, setLoaded] = useState(false);
	const [loading, setLoading] = useState(false);
	

	useEffect(() => {
		if(!id){
			return
		}
		if(remote){
			console.log(id)
			setLoaded(true);
			setActiveTable(getRemoteTable(id))
			return
		}
		setLoaded(false);
		setActiveTable(new Table(id));
		fetchTableData(id)
    }, [id])

	const pagination = activeTable ? paginationFactory({ 
        page: 1,
		sizePerPageList: [100, 500, 1000, 2500, 5000],
		sizePerPage: 50 
	}) : null;

	const fetchTableData = (_id) => {
		//aspgjff15a.execute-api.us-east-2.amazonaws.com/beta
		axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/table', {
			params: {
			id: id
			},
			paramsSerializer: (params) => {
				return qs.stringify(params, {arrayFormat: 'repeat'})
			},
		})
		.then(function (response) {
			// console.log(response.data)
			if(response.data){
				const new_table = response.data[0]
				new_table.id = _id
				new_table.columns.map((item) => {
					item.sort = true;
					item.sortFunc = sortFunc
					item.sortCaret = (order, column) => {
						if (!order) return (<div><Icon.CaretDown/><Icon.CaretUp/></div>);
						else if (order === 'asc') return (<div><Icon.CaretDownFill/><Icon.CaretUp/></div>);
						else if (order === 'desc') return (<div><Icon.CaretDown/><Icon.CaretUpFill/></div>);
						return null;
					  }
					return item
				})
				preProcessTable(new_table);
				setLoaded(true);
				setLoading(false);
				setActiveTable(new_table);
			}
		})
		.catch(function (error) {
			// console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}
	const preProcessTable = (new_table) => {
		if (!new_table.id.includes("supplementary_table_23")){
			new_table.data = new_table.data.map((item) => {
				for (var key of Object.keys(item)) {
					item[key] = item[key].toLocaleString('en-us')
				}
				return item
			})
		}
		new_table.columns = new_table.columns.map((item) => {
			item.sort = true;
			item.sortFunc = sortFunc
			item.headerStyle = {backgroundColor: "#efefef", border: "0.2px solid #00000073"}
			return item
		})
	}
	const sortFunc = (a, b, order, dataField, rowA, rowB) => {
		if(parseFloat(a) && parseFloat(b)){
			a = typeof a === 'string' ? parseFloat(a.replace(/[,]/g, '')) : a
			b = typeof b === 'string' ? parseFloat(b.replace(/[,]/g, '')) : b
		}
		if(typeof a === 'string') {
		   if (order === 'asc') return a.localeCompare(b);
		   else {
			   return b.localeCompare(a);
		   }
		}
		if (order === 'asc') return a - b;
	   else {
		return b - a;
	   }
   }

//    const onTableChange = (type, { page, sizePerPage, sortField, sortOrder, data }) => {
// 	   console.log(page)
// 	   setLoading(true);
// 	setTimeout(() => {
// 		fetchTableData(activeTable.id, activeTable.remote, activeTable.num_records, sortField, sortOrder)
// 	  }, 2000);
	  
//    }

   const downloadRemoteCSV = () => {
	   window.open(`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`,'_blank')
   }

   console.log(activeTable)
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
		{activeTable && (
		<div>
		 <h3>{activeTable.title}</h3>
		 <hr></hr>
			
		 <ToolkitProvider
			 keyField= 'field0' data={ activeTable.data } columns={ activeTable.columns }
			 exportCSV= {{fileName: activeTable.fileName}}
			 search
			 >
			 {
				 props => (
					 <div>
					
						
						{!remote && activeTable.columns.length > 0 &&
						<div>
							<div style={{marginBottom: '1rem'}}>
						
								<a href={`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`} target='_blank' download={`${activeTable.id}.csv`}>
									<ExportCSVButton className="btn-primary" onClick={downloadRemoteCSV} { ...props.csvProps } >Export Entire CSV</ExportCSVButton>
								</a>
								<ExportCSVButton style={{marginLeft: "5px"}} className="btn-primary" { ...props.csvProps } >Export Data Below</ExportCSVButton>						
					
								<SearchBar { ...props.searchProps } style={{marginLeft: "3rem"}}/>					 
							</div>
							<BootstrapTable bootStrap4={true}
							wrapperClasses="container table-responsive remote-table tableFixHead" 
							// classes="table-responsive" 
							{ ...props.baseProps } 
							pagination={pagination} 
							overlay={ overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' }) }
							loading={!loaded}
							noDataIndication="Table is Empty"
							// onTableChange={onTableChange}
							
						/>
						</div>
						}
						{remote && 
						<div style={{marginBottom: "2rem"}}>
							<div style={{marginBottom: '1rem'}}>
						
							<a href={`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`} target='_blank' download={`${activeTable.id}.csv`}>
								<ExportCSVButton className="btn-primary" onClick={downloadRemoteCSV} { ...props.csvProps } >Export Entire CSV</ExportCSVButton>
							</a>
							</div>
							<p style={{fontSize: "14pt"}}>Table only available as downloadable csv</p>
						</div>
						}
						
					</div>
					
					 
				 
				 )
			 }
		 </ToolkitProvider>
		 {activeTable.additional_info && 
		 activeTable.additional_info.map((item) => {
			return(
			<p>{item}</p>
			)
		 })
		 }
		 <hr />
		 <br/>
		 </div>
		)}
       
    </div>
    
)
}