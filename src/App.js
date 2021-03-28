import './App.css';
import { Grid } from '@material-ui/core';
import Filter from './Comps/Filter/Filter';
import Header from './Comps/Header.js/Header';
import GameSingle from './Comps/GameTitle/GameSingle';

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container spacing={5}>
        <Grid item md={12} lg={3} >
          <Filter />
        </Grid>
        <Grid item md={12} lg={7}>
          <GameSingle />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
