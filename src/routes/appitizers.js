import React, { useEffect, useState} from 'react';
import { getData } from '../utilities/data';

export default function Appitizers() {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        getData()
        .then((data)=> {
            setApps(data);
        })
    }, []);


    return (
        <main style={{ padding: '1rem 0'}}>
            HELLO   
        </main>
    );

    const Appitizer = ({app}) => {
        return (
            <div>
            <h1>{menu_items.title}</h1>
            <h1></h1> 
            <h1></h1> 
            </div>
        )
    }
}