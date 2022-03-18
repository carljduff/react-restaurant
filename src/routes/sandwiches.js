import React, { useEffect, useState } from 'react';
import { getData } from '../util/data';
import Menu from '../routes/menu'



export default function Sandwiches() {
    //Declaring a state variable called apps and set it to an empty array 
    // Making two new variables apps and setApps...
  // During the initial render, the returned state (apps) is the same as the value passed as the first argument ([])
  // The setApps function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

    const [sands, setSand] = useState([]); 

    useEffect(() => {
        getData()
        .then((data) => {
            setSand(data)
        })
    },[]);
        
    return (


        <div>
            <Menu />
        {
        sands
        .filter(sand => sand.category.title === 'Sandwiches')
        .map(sand => <Sandwich key={sand.id} sand={sand}/>)}
        </div>
    );

}
    const Sandwich = ({sand}) => {
        return (
          
            <div className='card'>
            <div className='card-top'>
            <h1>{sand.title}</h1>
            </div>
            <div className='card-price'>
           {sand.price}
            </div>
            <div> 
            <p className='card-body'> {sand.description}</p>
            </div>
            </div> 
            
            // <div className='small'>
            //     <div className='menu-container'>
            //         <div className="row">
            //     <h3 className='title'>{sand.title}</h3>
            //     <h6 className='price'>{sand.price}</h6> 
            //     <div className='p-container des'>
            //     <p className='description p-container'> {sand.description}</p>
            //         </div>
            //     </div>
            //     </div>
            //     </div>
        )
    } 