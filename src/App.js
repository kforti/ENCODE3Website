import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { main_extended_figs } from './figures/objs/main-extended-figs';
import { supplemental_figs } from './figures/objs/supplemental-figs';
import { HomePage } from './components/home';
import { NavBar } from './components/navbar';
import { FiguresCollection } from './components/figures-collection';
import { NewFiguresCollection } from './components/figures-collection-new';
import { StaticFigure } from './components/static-figure';
import { TablesCollection } from './components/tables-collection'
import { TABLE_PAGES } from './tables';

const axios = require('axios');
var qs = require('qs');

const get_figure_collection = (id, setState) => {
  axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/figure-collection', {
			params: {
			id: id
			},
			paramsSerializer: (params) => {
				return qs.stringify(params, {arrayFormat: 'repeat'})
			},
		})
		.then(function (response) {
			console.log(response.data)
			if(response.data){
				setState(Object.entries(response.data[id]).map((figure, index) => {
          return figure[1]
        }))
			}
		})
		.catch(function (error) {
			console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}


const FIGURE_COLLECTIONS = ["main-extended-figures", "supplemental-figures"]

function App() {
  const [mainExtendedFigures, setMainFigures] = useState([]);
  const [supplementalFigures, setSupplementalFigures] = useState([]);
  axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/table')

  useEffect(() => {
    get_figure_collection("main-extended-figures", setMainFigures)
    get_figure_collection("supplemental-figures", setSupplementalFigures)
    
    return () => {
      console.log("done")
    }
  }, [])

  return (
    <Router>
      <NavBar/>
      <Container style={{padding: "12px"}}>
      <Switch>
          <Route exact path="/">
              <HomePage></HomePage>
             </Route>
          <Route  path="/main-figures">
            <FiguresCollection figures={mainExtendedFigures}/>
          </Route>
          <Route  path="/supplemental-figures">
            <FiguresCollection figures={supplementalFigures}/>
          </Route>
          <Route  path="/figure/:id" component={StaticFigure}/>
          <Route  path="/tables/:table" render={({ match, location }) => {
                let page = match.params.table ? match.params.table : "extended_data_table_1"
                return(
                  <TablesCollection table_pages={TABLE_PAGES} initial_page={TABLE_PAGES[page]}/>
                )
            }}>
          </Route>
      </Switch>
      </Container>
    </Router>    

  );
}

export default App;
