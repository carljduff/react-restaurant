import React, { useEffect, useState } from 'react';
import { getData } from '../util/data';
import Axios from 'axios'
import Card from 'react-bootstrap/Card'

export default function Appetizers() {
    //Declaring a state variable called apps and set it to an empty array 
    // Making two new variables apps and setApps...
  // During the initial render, the returned state (apps) is the same as the value passed as the first argument ([])
  // The setApps function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

    const [apps, setApps] = useState([]); //returns a pair
    // {apps.filter(app => app.category.title === 'Appetizer')}

    useEffect(() => {
        getData()
        .then((data) => {
            setApps(data)
        })
    },[]);
        
    return (


        <div>
        {
        apps
        .filter(app => app.category.title === 'Appetizer')
        .map(app => <Appetizer key={app.id} app={app}/>)}
        </div>
    );

}
    const Appetizer = ({app}) => {
        return (
            <Card className='cards justify-content-center' style={{ width: '18rem' }}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>{app.title}</Card.Title>
    <Card.Text>
      {app.description}
    </Card.Text>
  </Card.Body>
</Card>
        
        )
    } 