import React from 'react';
import { Link } from 'react-router-dom';



export const NavBar = () => {
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="mr-auto">
            <Link to={{pathname: "/"}} style={{fontSize: "16pt"}} className="navbar-brand">ENCODE Encyclopedia V5</Link>
            
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
		  		  
           <div className="navbar-nav ml-auto " style={{marginLeft: '100px'}}>
            <Link to={{pathname: "/"}} className="nav-item header-nav-item nav-link active">Home <span className="sr-only">(current)</span></Link>
            <Link to={{pathname: "/main-figures"}} className="nav-item header-nav-item nav-link" >Figures</Link>
            <Link to={{pathname: "/supplemental-figures"}} className="nav-item header-nav-item nav-link" >Supplemental Figures</Link>
            <Link to={{pathname: "/tables/extended_data_table_1"}} className="nav-item header-nav-item nav-link" >Tables</Link>
            <Link to={{pathname: "/contact"}} className="nav-item header-nav-item nav-link" >Contact</Link>
            </div>
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