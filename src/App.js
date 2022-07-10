import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navigation from './components/Navigation/Navigation';
//import Services from './components/pages/Services';
import CraftSwiper from './components/CraftSwiper/CraftSwiper';
import Downloads from './components/pages/Downloads';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="/downloads">
          <Downloads />
        </Route>
        <Route path="/services/:id">
          <CraftSwiper />
        </Route>
      </Router>
    </>
  );
}

export default App;