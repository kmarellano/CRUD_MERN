import React, { useState,useEffect} from 'react'
import Task from './Task';
import Header from './Header';
const Body = () => {
    useEffect(() => {
       fetchItems();
    }, []);

    const [items,setItems] = useState([]);
 
    const fetchItems = async() =>{
            const data = await fetch('http://localhost:8000/api/items');
            const items = await data.json();
            console.log(items);
    }

    return (
        <div>
           <Header/>
           <Task/>
        </div>
    )
}

export default Body
