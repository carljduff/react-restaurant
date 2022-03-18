import React, { useEffect, useState } from 'react';
import { getData } from '../util/data';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Menu from '../routes/menu'



export default function Appetizers() {
    //Declaring a state variable called apps and set it to an empty array 
    // Making two new variables apps and setApps...
  // During the initial render, the returned state (apps) is the same as the value passed as the first argument ([])
  // The setApps function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

    const [apps, setApps] = useState([]); 

    useEffect(() => {
        getData()
        .then((data) => {
            setApps(data)
        })
    },[]);
        
    return (


        <div>
            <Menu/>
          
                
        {
        apps
        .filter(app => app.category.title === 'Appetizer')
        .map(app => <Appetizer key={app.id} app={app}/>)}
                        
                    </div>
                
       
    );

}
    const Appetizer = ({app}) => {
        return (
          
         
            
            <div className='small'>
                <div className='menu-container'>
                    <div className="row">
                <h3 className='title'>{app.title}</h3>
                <h6 className='price'>{app.price}</h6> 
                <div className='p-container des'>
                <p className='description p-container'> {app.description}</p>
                    </div>
                    </div>
                </div>
                </div>
             
               
            
        
        )
    } 