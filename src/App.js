import './styles/App.css'
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import Products from "./components/Products"
import Shop from "./components/Shop"
import ContactUs from "./components/Contactus"
import ItemDetails from "./components/ItemDetails"
import Footer from "./components/Footer"




function App() {
  return (
    <Router>  
          <Nav />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" exact component={Products} />    
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetails} />
          <Route path="/contact" component={ContactUs} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
