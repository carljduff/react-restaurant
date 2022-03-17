import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import logo from './images/logo.png'

export default function App() {
  return (
    <div>
    <Container className="p-5 mb-4 rounded-3 cc">
      
    
    <img className='logo' src={logo} alt="Logo"/>
    <div className='nav'>
      <Link to="/" style={{ textDecoration: 'none' }} className="menu-link">Home</Link> {" "}
      <Link to="/menu" style={{ textDecoration: 'none' }} className="menu-link">Menu</Link> {" "}
      </div>
  </Container>
   
      







    
</div>
  );
}
