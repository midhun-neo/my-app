import './styles/App.css'
import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from "./components/HomePage"
import Nav from "./components/Nav"
import About from "./components/About"
import Shop from "./components/Shop"
import ContactUs from "./components/Contactus"
import ItemDetails from "./components/ItemDetails"
import Footer from "./components/Footer"




function App() {
  return (
    <Router>  
          <Nav />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetails} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
