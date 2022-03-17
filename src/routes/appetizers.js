import React, { useEffect, useState } from 'react';
import { getData } from '../util/data';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'


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
        {
        apps
        .filter(app => app.category.title === 'Sandwiches')
        .map(app => <Appetizer key={app.id} app={app}/>)}
        </div>
    );

}
    const Appetizer = ({app}) => {
        return (
          
        //     <div class='container'>
        //         <div class='row'>
        //             <div class='col'>

        //     <Card className='cards' style={{ width: '18rem' }}>
        //     <Card.Body>
        //       <Card.Title className='title'>{app.title}</Card.Title>
        //       <Card.Subtitle className="mb-2 price text-muted">{app.price}</Card.Subtitle>
        //       <Card.Text className='card-body'>
        //         {app.description}
        //       </Card.Text>
        //     </Card.Body>
        //   </Card>
        //             </div>

        //         </div>
        //   </div>
            
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
            
            

//             <Card className='cards justify-content-center' style={{ width: '18rem' }}>
//   <Card.Img variant="top" />
//   <Card.Body>
//     <Card.Title>{app.title}</Card.Title>
//     <Card.Text>
//       {app.description}
//     </Card.Text>
//   </Card.Body>
// </Card>
        
        )
    } 