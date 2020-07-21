import React, { useState, useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { HomePage } from './components/home';
import { NavBar } from './components/navbar';
import { FiguresCollection } from './components/figures-collection';
import { StaticFigure } from './components/static-figure';
import { TablesCollection } from './components/tables-collection'
import { TABLE_PAGES } from './tables';
import { ToolsPage } from './components/tools-page';
import { ContactPage } from './components/contact-page';

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

function App() {
  const [mainExtendedFigures, setMainFigures] = useState({});
  const [supplementalFigures, setSupplementalFigures] = useState([]);

  useEffect(() => {
    get_figure_collection("main-extended-figures", setMainFigures)
    get_figure_collection("supplemental-figures", setSupplementalFigures)
  }, [])
  console.log(mainExtendedFigures)
  return (
    <Router>
      <NavBar/>
      {/* <Container style={{padding: "12px", marginBottom: '4rem'}}> */}
      <Switch>
          <Route exact path="/">
            <Container style={{padding: "12px", marginBottom: '4rem'}}>
              <HomePage/>
            </Container>
              
             </Route>
          <Route  exact path="/main-figures">
          <Container style={{padding: "12px", marginBottom: '4rem'}}>
            <FiguresCollection title="Main and Extended Figures" figures={Object.entries(mainExtendedFigures).map((figure, index) => {
              console.log(figure[0])
              if(figure[0] != "Main-Figure-2"){
                figure[1].thumbnail_url = figure[1].thumbnail_url.replace("Thumbnails", "Images")
              }
              return figure[1]
        })}/>
        </Container>
          </Route>
          <Route  path="/main-extended-figures/:id">
          <Container style={{padding: "12px", marginBottom: '4rem'}}>
            <StaticFigure figures={mainExtendedFigures}/>
          </Container>
          </Route>
          <Route  path="/supplemental-figures" exact>
          <Container style={{padding: "12px", marginBottom: '4rem'}}>
            <FiguresCollection title="Supplemental Figures" figures={Object.entries(supplementalFigures).map((figure, index) => {
              figure[1].thumbnail_url = figure[1].thumbnail_url.replace("Thumbnails", "Images")
              return figure[1]
        })}/>
        </Container>
          </Route>
          <Route  path="/supplemental-figures/:id">
            <StaticFigure figures={supplementalFigures}/>
          </Route>
          <Route  path="/tables/:table" render={({ match, location }) => {
                let page = match.params.table ? match.params.table : "extended_data_table_1"
                return(
                  <Container style={{padding: "12px", marginBottom: '4rem'}}>
                  <TablesCollection table_pages={TABLE_PAGES} page={TABLE_PAGES[page]}/>
                  </Container>
                )
            }}>
          </Route>
          <Route  path="/variant-annotation-tools">
            <ToolsPage />
          </Route>
          <Route  path="/contact">
            <ContactPage />
          </Route>
      </Switch>
      {/* </Container> */}
      <div style={{marginTop: '10px'}} class="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
      <div className='container' style={{color: "white"}}>ENCODE Encyclopedia V5</div>
      </div>
    </Router>    

  );
}

export default App;
