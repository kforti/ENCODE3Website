import React from 'react';
import { useState } from 'react';

import { TablePage } from './table-page';

const tables = ["Main Table", "supp-table"]

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
	console.log(items)
    return(
		<nav aria-label="Page navigation example">
		<ul class="pagination">
			{items.map( (item, i) => (
			<li key={i} className={item === active ? "active page-item" : "page-item"}>
				<a class="page-link" href="#" onClick={() => {onClick(item)}}>{item.nav_slug}</a>
			</li>
		) )}
		</ul>
		</nav>
	)
}

export const TablesCollection = ({table_pages, initial_page}) => {
	const [activePage, setActivePage] = useState(initial_page);
	console.log(table_pages)
	
	const onTableClick = (page) =>{
		console.log(page)
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
	          {activePage !== 6 ? null : (
	            <div className="alert alert-info" style={{fontSize: "16pt"}}>
	              <span className="glyphicon glyphicon-info-sign" style={{marginRight: "10px"}}></span>The colors in this table correspond to the bar colors in <b>Extended Data Figure 9</b>.
	            </div>
		  )}
			<div><h2>{activePage.title}</h2><TablePage page={activePage}/></div>
	          
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

