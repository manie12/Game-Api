import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Filter from './Comps/Filter/Filter';
import Header from './Comps/Header.js/Header';
import GameSingle from './Comps/GameTitle/GameSingle';
import Contacts from './Comps/Contacts/Contacts';

function App() {
  const [Search, setSearch] = useState([]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/"  >
          <Grid container spacing={3}>
            <Grid item lg={3} >
              <Filter Search={Search} setSearch={setSearch} />
            </Grid>
            <Grid item lg={9}>
              <GameSingle />
            </Grid>
          </Grid>

        </Route>
        <Route exact path="/contacts">
          <Contacts />
        </Route>
      </Switch>
    </div >
  );
}

export default App;
