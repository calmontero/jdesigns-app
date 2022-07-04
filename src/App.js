import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Navigation from './components/Navigation/Navigation';
import Services from './components/pages/Services';
import CraftSwiper from './components/CraftSwiper/CraftSwiper';
import Downloads from './components/pages/Downloads';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/testimonials' exact component={Services} />
          <Route path='/downloads' exact component={Downloads} />
          <Route path='/services/:id' exact component={CraftSwiper} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
