import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "./App.css";
import "./index.css";

export default function App() {
  return (
    <div>
    <Container className="p-5 mb-4 rounded-3 cc">
    <h1 className="header">Restaurant Name</h1>
    <div className='nav'>
      <Link to="/" className="menu-link">Home</Link> {" "}
      <Link to="/menu" className="menu-link">Menu</Link> {" "}
      </div>
  </Container>
   







    
</div>
  );
}
