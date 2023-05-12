import {
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Product from './components/Product';
import Services from './components/Services';
import About from './components/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Link to="/">Product</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="main-content">
        <Routes>
          <Route
            exact
            path="/"
            element={<Product />}
          />
          <Route
            path="services"  
            element={<Services />}
          />
          <Route
            path="about"  
            element={<About />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
