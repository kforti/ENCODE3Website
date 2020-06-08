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
import { ToolsPage } from './components/tools-page';

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
			// console.log(response.data)
			if(response.data){
				setState(response.data[id])
			}
		})
		.catch(function (error) {
			// console.log(error);
		})
		.finally(function () {
			// always executed
		});
	}


const FIGURE_COLLECTIONS = ["main-extended-figures", "supplemental-figures"]

function App() {
  const [mainExtendedFigures, setMainFigures] = useState({});
  const [supplementalFigures, setSupplementalFigures] = useState([]);
  axios.get('https://aspgjff15a.execute-api.us-east-2.amazonaws.com/beta/table')

  useEffect(() => {
    get_figure_collection("main-extended-figures", setMainFigures)
    get_figure_collection("supplemental-figures", setSupplementalFigures)
  }, [])

  return (
    <Router>
      <NavBar/>
      <Container style={{padding: "12px"}}>
      <Switch>
          <Route exact path="/">
              <HomePage></HomePage>
             </Route>
          <Route  exact path="/main-figures">
            <FiguresCollection figures={Object.entries(mainExtendedFigures).map((figure, index) => {
          return figure[1]
        })}/>
          </Route>
          <Route  path="/main-extended-figures/:id">
            <StaticFigure figures={mainExtendedFigures}/>
          </Route>
          <Route  path="/supplemental-figures" exact>
            <FiguresCollection figures={Object.entries(supplementalFigures).map((figure, index) => {
          return figure[1]
        })}/>
          </Route>
          <Route  path="/supplemental-figures/:id">
            <StaticFigure figures={supplementalFigures}/>
          </Route>
          <Route  path="/tables/:table" render={({ match, location }) => {
                let page = match.params.table ? match.params.table : "extended_data_table_1"
                return(
                  <TablesCollection table_pages={TABLE_PAGES} page={TABLE_PAGES[page]}/>
                )
            }}>
          </Route>
          <Route  path="/variant-annotation-tools">
            <ToolsPage />
          </Route>
      </Switch>
      </Container>
      <div class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-dark">
      <div className='container' style={{color: "white"}}>ENCODE Encyclopedia V5</div>
      </div>
      {/* <footer className='footer mt-auto py-3 bg-dark text-white' style={{
        position: "fixed",
        left: "0",
        bottom: "0",
        marginTop: "50px",
        width: "100%",
        color: "white",
        textAlign: "center"
}}>
        <div className='container'>ENCODE Encyclopedia V5</div>
      </footer> */}
    </Router>    

  );
}

export default App;
