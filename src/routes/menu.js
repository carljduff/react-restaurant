import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "../index.css";



export default function Menu() {
    return (


    

        <main style={{ padding: '1rem 0'}}>
        
        <Container className="p-5 mb-4 rounded-3 cc">
    
    <div className='nav'>
      
            <Link to="/" style={{ textDecoration: 'none' }} className="menu-link">Home</Link> {" "}
            <Link to="/appetizers" style={{ textDecoration: 'none' }} className="menu-link">Appetizers</Link> {" "}
            <Link to="/sandwiches" style={{ textDecoration: 'none' }} className='menu-link'>Sandwiches</Link> {" "}
          <Outlet />
      </div>
  </Container>
        </main>
    )
}