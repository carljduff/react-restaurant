import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Outlet, Link } from "react-router-dom";
import "../index.css";
import Nav from 'react-bootstrap/Nav'



export default function Menu() {
    return (

    
        <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Link className='menu-link' eventKey="disabled" disabled>
      Menu
    </Nav.Link>
  <Nav.Item>
    <Nav.Link className='menu-link' href='appetizers' eventKey="appetizers">Appetizers</Nav.Link>
   
  </Nav.Item>
  <Nav.Item>
    <Nav.Link className='menu-link' href='sandwiches' eventKey="sandwiches">Sandwiches</Nav.Link>
    
  </Nav.Item>
</Nav>
    

//         <main style={{ padding: '1rem 0'}}>
        
//         <Container className="p-5 mb-4 rounded-3 cc">
    
//     <div className='nav'>
      
//             <Link to="/" style={{ textDecoration: 'none' }} className="menu-link">Home</Link> {" "}
//             <Link to="/appetizers" style={{ textDecoration: 'none' }} className="menu-link">Appetizers</Link> {" "}
//             <Link to="/sandwiches" style={{ textDecoration: 'none' }} className='menu-link'>Sandwiches</Link> {" "}
//           <Outlet />
//       </div>
//   </Container>
//         </main>
    )
}
