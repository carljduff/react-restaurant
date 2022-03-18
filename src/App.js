import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import logo from './images/logo.png'
import Footer from './Footer.js'

export default function App() {
  return (
    <div>
    <Container className="p-5 mb-4 rounded-3 cc">
      
    
    <img className='logo' src={logo} alt="Logo"/>
    <div className='main'>Menu</div>
    <div className='nav'>
      <Link to="/appetizers" style={{ textDecoration: 'none' }} className="menu-link">Appetizers</Link> {" "}
      <Link to="/sandwiches" style={{ textDecoration: 'none' }} className="menu-link">Sandwiches</Link> {" "}
      </div>
  </Container>
   
      


<Footer />




    
</div>
  );
}
