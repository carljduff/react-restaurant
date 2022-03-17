import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "../index.css";



export default function Menu() {
    return (
        <main style={{ padding: '1rem 0'}}>
        
        <Container className="p-5 mb-4 rounded-3 cc">
    <h1 className="header">Restaurant Name</h1>
    <div className='nav'>
      
            <Link to="/" className="menu-link">Home</Link> {" "}
            <Link to="/appitizers" className="menu-link">Appitizers</Link> {" "}
            <Link to="/pasta" className='menu-link'>Pasta</Link> {" "}
          <Outlet />
      </div>
  </Container>
        </main>
    )
}