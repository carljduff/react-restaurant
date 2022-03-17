import React, { useEffect, useState } from 'react';
// import { getData } from '../utilities/data';
import Axios from 'axios'

export default function Appetizers() {
    //Declaring a state variable called apps and set it to an empty array 
    // Making two new variables apps and setApps...
  // During the initial render, the returned state (apps) is the same as the value passed as the first argument ([])
  // The setApps function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

    const [apps, setApps] = useState([]); //returns a pair
    // {apps.filter(app => app.category.title === 'Appetizer')}

    useEffect(() => {
         Axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
        .then(res => {
            // console.log("Getting from....", res.data)
            let data = res.data;
        setApps(data)
        console.log(data)
        // console.log(apps)
       })
    }, [])

        
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
            <div>
            <h1>{app.title}</h1>
            <h1>{app.description}</h1> 
            <h1></h1> 
            </div>
        )
    } 