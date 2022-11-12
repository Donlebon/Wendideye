import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

// Imports
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home"
import Search from "./pages/search/Search"
import Create from './pages/create/Create';
import Products from "./pages/products/Products"

export default function App(){
  return (
    <div className = "App">
      <BrowserRouter>
      <Navbar />
      <Switch>

      <Route exact path = "/Wendideye/">
          <Home />
      </Route>

      <Route exact path = "/create">
          <Create />
      </Route>

      <Route path = "/search">
          <Search />
      </Route>

      <Route path = "/products/:id">
          <Products />
      </Route>

      </Switch>

      </BrowserRouter>
    </div>
  )
}