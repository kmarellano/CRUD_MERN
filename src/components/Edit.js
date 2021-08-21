import React, { useState,useEffect } from 'react'
import Header from './Header'
import { useHistory } from "react-router";

function Edit(props){
    let history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(title,description);

        const id = props.match.params.id;
        const date = new Date();
        fetch(`http://localhost:8000/api/items/update/${id}`, {
        method: 'PUT',
        headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },        
        body: JSON.stringify({title, description,date})
        })
        .then(res => res.json())
        .then(res => console.log(res))
        alert("Item Updated");
        history.push(`/`);
    }
    
    const [item,setItem] = useState([]);
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');

    useEffect(() => {
        getData();
    });

    const getData = async () =>{
        const id = props.match.params.id;
        const data = await fetch(`http://localhost:8000/api/items/${id}`)
        const value = await data.json();
        setItem(value);
    }
   
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <Header title="Edit Item" text="Back" destination=""/>
        <label htmlFor="title">Title</label>
        <br></br>
        <input 
        className="inputBox"
        type="text" 
        name="title"
        defaultValue={item.title}
        onChange={(e)=> setTitle(e.target.value)}
        />

        <label htmlFor={description}>Description</label>
        <br></br>
        <textarea className="descriptionBox" name="description" id="" cols="10" rows="10"
        defaultValue={item.description}
        onChange={(e)=> setDescription(e.target.value)}
        ></textarea>
        
        <button type="submit" style={{backgroundColor:'red'}} className="btn2">Submit</button>
        </form>
        </div>
    )
}

export default Edit
