import React from 'react';
import { Link } from 'react-router-dom';



export const NavBar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  		  <a className="navbar-brand" href="#">
				      ENCODE Encyclopedia V5</a>
           <div className="navbar-nav" style={{marginLeft: '100px'}}>
            <Link to={{pathname: "/"}} className="nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to={{pathname: "/main-figures"}} className="nav-item nav-link" >Figures</Link>
            <Link to={{pathname: "/supplemental-figures"}} className="nav-item nav-link" >Supplemental Figures</Link>
            <Link to={{pathname: "/tables/extended_data_table_1"}} className="nav-item nav-link" >Tables</Link>
            <Link to={{pathname: "/contact"}} className="nav-item nav-link" >Contact</Link>
            </div>
      </nav>
      <div className="row" style={{width: "100%"}}>
            <div className="col-xs-1"/>
            <div className="col-xs-10 nopadding-left" id="tabs-container">
            </div>
            <div className="col-xs-1"/>
		    </div>
    </>
    )
} 