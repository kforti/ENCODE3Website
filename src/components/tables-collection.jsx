import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TableContainer } from './common/table';

const REMOTE_TABLES = [
	"supplementary_table_11",
	"supplementary_table_10",
	"supplementary_table_22d",
	"supplementary_table_22d", 
	"supplementary_table_22e", 
	"supplementary_table_22f", 
	"supplementary_table_22h", 
	"supplementary_table_22i", 
	"supplementary_table_22j"]

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
		<nav aria-label="Page navigation example">
		<ul class="pagination">
			{items.map( (item, i) => (
			<li key={i} className={item === active ? "active page-item" : "page-item"}>
				<Link to={{pathname: `/tables/${item.page_id}`}} className="nav-item nav-link page-link" onClick={() => {onClick(item)}}>{item.nav_slug}</Link>
				{/* <a class="page-link" href="#" onClick={() => {onClick(item)}}></a> */}
			</li>
		) )}
		</ul>
		</nav>
	)
}

export const TablesCollection = ({table_pages, page}) => {
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
	      <div className="row">
	          <Pagination items={Object.entries(table_pages).map((item) => item[1])} active={activePage}
	            onClick={onTableClick} />
              </div>
	      <div className="row">
	        <div className="col-xs-12">
	          <div className="alert alert-info" style={{fontSize: "16pt"}}>
	              <span className="glyphicon glyphicon-info-sign" style={{marginRight: "10px"}}></span>These tables are interactive. Click the column headers to sort, use the textboxes to search, and click the CSV buttons to download the table contents in CSV format.
	          </div>
	          
			<div><h2>{activePage.title}</h2>
				{activePage.tables.map((id) => (
					<TableContainer 
					id={id}
					// remove redundancy
					num_records={REMOTE_TABLES.includes(id) ? '1000': 'all'}
					remote={REMOTE_TABLES.includes(id) ? true: false}
					/>
				))}
			</div>
	          
	        </div>
	      </div>	      
	  </Tab>
	)
}
    

// export class TabTables extends React.Component {

//     constructor(props) {
// 	super(props);
// 	this.state = {
// 	    selected_table: 0
// 	};
//     }

//     setSelection(i) {
// 	this.setState({ selected_table: i });
//     }

//     _format(title) {
// 	if (title === "Table 1") { return "T1"; }
// 	return title.replace(/Supp. Table /g, "S");
//     }

//     render() {
//       return (
// 	  <Tab>
// 	      <div className="row">
// 	          <CustomPagination items={this.props.globals.tables.map(t => this._format(t.title.split(":")[0]))} active={this.state.selected_table}
// 	            onClick={this.setSelection.bind(this)} />
//               </div>
// 	      <div className="row">
// 	        <div className="col-xs-12">
// 	          <div className="alert alert-info" style={{fontSize: "16pt"}}>
// 	              <span className="glyphicon glyphicon-info-sign" style={{marginRight: "10px"}}></span>These tables are interactive. Click the column headers to sort, use the textboxes to search, and click the CSV buttons to download the table contents in CSV format.
// 	          </div>
// 	          {this.state.selected_table !== 6 ? null : (
// 	            <div className="alert alert-info" style={{fontSize: "16pt"}}>
// 	              <span className="glyphicon glyphicon-info-sign" style={{marginRight: "10px"}}></span>The colors in this table correspond to the bar colors in <b>Extended Data Figure 9</b>.
// 	            </div>
// 		  )}	  
// 	          {this.props.globals.tables.map( (t, i) => ( i !== this.state.selected_table ? null : 
// 		      <div key={i}><h2>{t.title.replace(/Supp./g, "Supplementary")}</h2><t.component /></div>
// 		  ) )}
// 	        </div>
// 	      </div>	      
// 	  </Tab>
//       );
	
//     }
    
// }

