import React from 'react';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./pages/home";
import Products from "./pages/products";
import Cart from "./pages/cart";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">CatsStore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </nav>

<Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/products" element={<Products/>} exact/>
      <Route path="/products/:id" component={Product}>
      
      </Route>

      <Route path="/cart" component={Cart} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
