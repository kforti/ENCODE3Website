import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'semantic-ui-react';
import { main_extended_figs } from './figures/objs/main-extended-figs';
import { supplemental_figs } from './figures/objs/supplemental-figs';
import { HomePage } from './components/home';
import { NavBar } from './components/navbar';
import { FiguresCollection } from './components/figures-collection';
import { StaticFigure } from './components/static-figure';
import { TablesCollection } from './components/tables-collection'
import { TABLE_PAGES } from './tables';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container style={{padding: "12px"}}>
      <Switch>
          <Route exact path="/">
              <HomePage></HomePage>
          </Route>
          <Route  path="/main-figures">
            <FiguresCollection figures={main_extended_figs}/>
          </Route>
          <Route  path="/supplemental-figures">
            <FiguresCollection figures={supplemental_figs}/>
          </Route>
          <Route  path="/figure/:id" component={StaticFigure}/>
          <Route  path="/tables/:table" render={({ match, location }) => {
                console.log(match.params.table)
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
