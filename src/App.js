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
  </Container>
    <div>
      <nav className='nav m-3 p-3'>
        <Link to="/appitizers" className="p-3">Appitizers</Link> {" "}
        <Link to="/pasta" className='p-3'>Pasta</Link> {" "}
      </nav>
      <Outlet />
    </div>







    
</div>
  );
}
