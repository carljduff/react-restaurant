import React, { useEffect, useState } from 'react';
// import { getData } from '../utilities/data';
import Axios from 'axios'

export default function Appitizers() {
    const [apps, setApps] = useState('');

    useEffect(() => {
       Axios.get('https://sheltered-refuge-85246.herokuapp.com/api/json')
       .then(res => {
        console.log("Getting from....", res.data)
        setApps(res.data)
       })
    }, [])

        
    return (
        <div>
         APPS
        </div>
    );

}
    const Appitizer = ({app}) => {
        return (
            <div>
            <h1>{app.title}</h1>
            <h1></h1> 
            <h1></h1> 
            </div>
        )
    } 