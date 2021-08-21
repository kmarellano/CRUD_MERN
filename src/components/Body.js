import React, { useState,useEffect} from 'react'
import Tasks from './Tasks';
import Header from './Header';

const Body = () => {
    useEffect(() => {
       fetchItems();
    }, []);

    const [items,setItems] = useState([]);

    const fetchItems = async() =>{
            const data = await fetch('http://localhost:8000/api/items');
            const value = await data.json();
            await setItems(value);
    }

    return (
        <div>
           <Header/>
          {items.length>0? (<Tasks allItems={items}/>): ('No Task to Show')}
        </div>
    )
}

export default Body
