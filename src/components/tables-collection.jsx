import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RemoteTable } from './remote-table';


const Tab = ({ children }) => (
    <div>
        <div className={"panel panel-default"}>
            <div className={"panel-body"}>
                <div className={"container-fluid"}>
                    {children}
	        </div>
	    </div>
	</div>
    </div>
);


const Pagination = ({ items, active, onClick }) => {
    return(
		<nav style={{marginTop: "2rem"}} aria-label="Page navigation example">
		<ul class="pagination">
			{items.map( (item, i) => (
			<li key={i} style={{ borderRight: "0.5px solid #fff"}} className={item === active ? "active page-item" : "page-item"}>
				<Link to={{pathname: `/tables/${item.page_id}`}} className="nav-item nav-link page-link" onClick={() => {onClick(item)}}>{item.nav_slug}</Link>
				{/* <a class="page-link" href="#" onClick={() => {onClick(item)}}></a> */}
			</li>
		) )}
		</ul>
		</nav>
	)
}

export const TablesCollection = ({table_pages, page}) => {
	// Refactor to get table_pages with table-collection id

	const [activePage, setActivePage] = useState(page);
	
	useEffect(() => {
		if(page){
			setActivePage(page);
		}
	}, [page])

	const onTableClick = (page) =>{
		setActivePage(page)
	}
	return(
		<Tab>
			<div style={{textAlign: "center", marginTop: "2rem"}}>
				<h1>Tables</h1>
			</div>
			
	      <div className="row" style={{textAlign: "center"}}>
	          <Pagination items={Object.entries(table_pages).map((item) => item[1])} active={activePage}
	            onClick={onTableClick} />
              </div>
	      <div className="row">
	        <div className="col-xs-12">
	          <div className="alert alert-info" style={{fontSize: "16pt"}}>
	              <span className="glyphicon glyphicon-info-sign" style={{marginRight: "10px"}}></span>
				  These tables are interactive. Click the column headers to sort, use the filter operators to filter columns, and click the CSV buttons to download the entire table contents in CSV format.
	          </div>
	          
			<div><h2>{activePage.title}</h2>
				{activePage.tables.map((id) => {
					return(
						<RemoteTable 
							id={id}
							key={id}
							/>
					)}	
				)}
			</div>
	          
	        </div>
	      </div>	      
	  </Tab>
	)
}
    