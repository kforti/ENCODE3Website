import React, { useState, useEffect } from 'react';

import ToolkitProvider, { CSVExport, Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import overlayFactory from 'react-bootstrap-table2-overlay';
import { Query } from './query'

import * as Icon from 'react-bootstrap-icons';
import {Spinner, Row, Col, Button} from 'react-bootstrap';

const { ExportCSVButton } = CSVExport;
const { SearchBar } = Search;

const axios = require('axios');
var qs = require('qs');

const fetchTableData = (table, callBack, query_ops, sort_state) => {
    //aspgjff15a.execute-api.us-east-2.amazonaws.com/beta
    let data = {
        table: {id: table.id},
        view: {page: table.page, page_size: table.page_size},
    }
    if(query_ops.length > 0){
        data.query = {query_ops: query_ops}
    }

    if(Object.keys(sort_state).length > 0){
        data.sort = sort_state
    }

    axios.post('http://127.0.0.1:5000/table', {
        data: data,
    })
    .then((response) => callBack(response))
    .catch(function (error) {
        // console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

const TABLE_DATA = {
    id: '', 
    data: [], 
    columns: [], 
    title: '', 
    keyField: '', 
    fileName: '', 
    s3_object: '',
    page: 1,
    page_size: 5000,
    total_size: null
}

function Table(table_data) {
        this.id = table_data.id
        this.data = table_data.data
        this.columns = table_data.columns
        this.title = table_data.title
        this.keyField = table_data.keyField
        this.fileName = table_data.fileName
        this.s3_object = table_data.s3_object
        this.page = table_data.page
        this.page_size = table_data.page_size
        this.total_size = table_data.total_size 
}


export const RemoteTable = ({ id, page, page_size}) => {
	const [ activeTable, setActiveTable ] = useState(null);
	const [loaded, setLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [updateTable, setUpdateTable] = useState(false);
    const [sortState, setSortState] = useState({})
    const [queryOps, setQueryOps] = useState([]);

    
    const pagination = activeTable ? paginationFactory({ 
        page: page,
        sizePerPage: activeTable.page_size, 
        totalSize: activeTable.total_size,
        sizePerPageList: [100, 500, 1000, 2500, 5000] }) : null;
    

	useEffect(() => {
		if(!id){
			return
		}
        setLoaded(false);
        setQueryOps([]);
        setSortState({});
		setActiveTable(new Table({
            id: id,
            data: [], 
            columns: [], 
            title: '', 
            keyField: '', 
            fileName: '',  
            s3_object: '', 
            page: page,  
            page_size: page_size, 
            total_size: 0}
            ));
        setUpdateTable(true);
    }, [id])

    useEffect(() => {
		if(!activeTable){
			return
        }
        fetchTableData(activeTable, runUpdateTable, queryOps, sortState)
    }, [updateTable])

    const runUpdateTable = (response) => {
        if(response.data){
            const data = response.data
            const newTable = Object.assign({}, activeTable);
            newTable.data = data.data
            newTable.columns = data.columns
            newTable.total_size = data.total_size
            newTable.s3_object = data.s3_object
            newTable.title = data.title
            newTable.columns.map((item) => {
                item.sort = true;
                item.sortState = {};
                if(item.dataField in sortState){
                    item.direction = sortState[item.dataField]
                }
                item.headerStyle = {backgroundColor: "#d0e0f1", border: "0.5px solid #00000073"}
                item.sortCaret = (order, column) => {
                    if(column.direction){
                        if (column.direction === 'asc') return (<div><Icon.CaretDown/><Icon.CaretUpFill/></div>);
                        else if (column.direction === 'desc') return (<div><Icon.CaretDownFill/><Icon.CaretUp/></div>);
                        
                    }
                    if (!order) return (<div><Icon.CaretDown/><Icon.CaretUp/></div>);
                    // else if (sortDirection === 'asc') return (<div><Icon.CaretDown/><Icon.CaretUpFill/></div>);
                    // else if (sortDirection === 'desc') return (<div><Icon.CaretDownFill/><Icon.CaretUp/></div>);
                    else if (order === 'asc') return (<div><Icon.CaretDown/><Icon.CaretUpFill/></div>);
                    else if (order === 'desc') return (<div><Icon.CaretDownFill/><Icon.CaretUp/></div>);

                    return null;
                  }
                  
                return item
            })
            preProcessTable(newTable);
            setLoaded(true);
            setLoading(false);
            setUpdateTable(false);
            setActiveTable(newTable);
        }
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
	}
	
   const updateSort = (sortField, sortOrder) => {
        let newSortState = Object.assign({}, sortState)
        
        activeTable.columns.map((item) => {
            if(item.dataField == sortField){
                item.direction = sortOrder
                newSortState[sortField] = sortOrder
            }
            return item
        })
        setSortState(newSortState)
        setUpdateTable(true)
    }
   
   const onTableChange = (type, { page, sizePerPage, sortField, sortOrder, data }) => {
     
       if(type == 'sort'){
           updateSort(sortField, sortOrder)
           setLoading(true);
       }
       
	//    setLoading(true);
	// setTimeout(() => {
	// 	fetchTableData(activeTable.id, activeTable.remote, activeTable.num_records, sortField, sortOrder)
	//   }, 2000);
	  
   }

   const downloadRemoteCSV = () => {
	   window.open(`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`,'_blank')
   }

   const runQuery = (ops) => {
    setQueryOps(ops);
    setUpdateTable(true);
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
		{activeTable && activeTable.columns.length > 0 && (
		<div>
		 <h3>{activeTable.title}</h3>
		 <hr></hr>
		 <Query cols={activeTable.columns} runQuery={runQuery} />
		
			
			{/* {[...Array(queries).keys()].map((i) => {
				return <QueryForm cols={activeTable.columns} onDelete={() =>}/>
			})} */}
		 <ToolkitProvider
			 keyField= 'field0' data={ activeTable.data } columns={ activeTable.columns }
			 exportCSV= {{fileName: activeTable.fileName}}
			 search
			 >
			 {
				 props => (
					 
                    <div>
                        <a href={`https://encode3-companion.s3.us-east-2.amazonaws.com/${activeTable.s3_object}`} target='_blank' download={`${activeTable.id}.csv`}>
                            <ExportCSVButton className="btn-primary" onClick={downloadRemoteCSV} { ...props.csvProps } >Export CSV</ExportCSVButton>					
                        </a>
                        <Button style={{marginLeft: "5px"}} onClick={() => {
                            setSortState({})
                            setQueryOps([])
                            activeTable.columns.map((item) => {
                                item.sortCaret(null, item)
                            })
                            setUpdateTable(true)}}>Reset Table</Button>
					<div>
						<BootstrapTable bootStrap4={true}
						remote
						wrapperClasses="container table-responsive remote-table tableFixHead" 
						{ ...props.baseProps } 
						pagination={pagination} 
						onTableChange={onTableChange}
						overlay={ overlayFactory({ spinner: true, background: 'rgba(192,192,192,0.3)' }) }
                        loading={loading}
                        noDataIndication="Table is Empty"
					/>
					</div>
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