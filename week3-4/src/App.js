import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './styles/App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';



const Home = lazy(() => import('./pages/Home/Home'));
const Pokedex = lazy(() => import('./pages/Pokedex/Pokedex'));
const Myfavs = lazy(()=> import ('./pages/MyFavs/Myfavs') )

const App = () => (
  <React.Fragment>
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/pokedex" component={Pokedex}/>
        <Route exact path="/myfavs" component={Myfavs}/>
      </Switch>
    </Suspense>
  </Router>
  <Footer />
  </React.Fragment>
);

export default App;
