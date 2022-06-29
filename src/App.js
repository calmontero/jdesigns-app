import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navigation from './components/Navigation/Navigation';
import Services from './components/pages/Services';
import CraftSwiper from './components/CraftSwiper/CraftSwiper';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/jobs' exact component={Services} />
          <Route path='/services/:id' exact component={CraftSwiper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
