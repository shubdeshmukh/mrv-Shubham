import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Products from './routingdemo/Products';
import ProductDetails from './routingdemo/ProductDetails';
import Cart from './routingdemo/Cart';
import Home from './routingdemo/Home';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

      <Router>
        <nav>
          <Link to ='/'>Home</Link> | <Link to ="/products">Products</Link> | <Link to ="/cart">Cart</Link>  
        </nav>

        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/products" Component={Products}/>
          <Route  path="/products/:productID" Component={ProductDetails}/>
          <Route  path="/cart" Component={Cart}/>




        </Routes>
      </Router>
    </div>
  );
}

export default App;
