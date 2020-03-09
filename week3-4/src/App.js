import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import History from './components/History/History';


const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));

const App = () => (
  <React.Fragment>
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pokedex" component={Pokedex}/>
      </Switch>
    </Suspense>
  </Router>
  <History />
  </React.Fragment>
);

export default App;
