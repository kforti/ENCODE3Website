import React, { useState } from 'react';
import { useEffect } from 'react';

import { TableTab } from './table-tab';

const axios = require('axios');
var qs = require('qs');



export const TablePage = ({page}) => {
    const [tables, setTables] = useState(() => {
        try {
            return(window.localStorage.getItem(page.id).tables)
        } catch{
            return([])
        }
    });
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        
        axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/tables', {
		params: {
		  id: page.tables
        },
        paramsSerializer: (params) => {
            return qs.stringify(params, {arrayFormat: 'repeat'})
         },
	  })
	  .then(function (response) {
          console.log(response.data)
        if(response.data){
            setTables(response.data)
        }
        
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .finally(function () {
		// always executed
	  });  
    }, [page])

    return(
        <div className="tab-content">
            <div id="tabhuman" className={"tab-pane " + (activeTab ? "" : "active")}>
                <TableTab tables={tables}/>
            </div>
            <div id="tabmouse" className={"tab-pane " + (activeTab ? "active" : "")}>
                
            </div>
        </div>
        
    )
}