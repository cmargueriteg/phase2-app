
import './App.css';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { DogContainer } from './DogInfo/DogContainer';
import { DogCard } from './DogInfo/DogCard';
import { DogCollection } from './DogInfo/DogCollection';
import { NavBar } from './Navigation/NavBar'
import { Header } from './Navigation/Header';
import { TeamForm } from './DogInfo/TeamForm';
import {Home} from './Home'



function App() {


  return (
    <div className='App'>
      
          <Router>
          <NavBar />
          <Header />
          <Switch>
          <Route path="/dogs">
            <DogContainer />
          </Route>
          
          <Route path="/dogs/build">
            <TeamForm />

          </Route>

          <Route path="/">
            <Home />
          </Route>

          </Switch>
          </Router>
      
    </div>
  );
}

export default App;
