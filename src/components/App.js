
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { DogContainer } from './DogInfo/DogContainer';
import { TeamForm } from './DogInfo/TeamForm';
import { NavBar } from './Navigation/NavBar'
import { Header } from './Navigation/Header';
import { Home } from './Home'



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
          
          <Route path="/build">
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
