import React, { useState } from 'react'
import { useHistory } from "react-router";
import Header from './Header'

function Add() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    let history = useHistory();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const date = new Date();
        if(title){
            const data = await fetch('http://localhost:8000/api/items/post', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({title, description,date})
            });
            const val = await data.json();
            alert("Item Added to List");
            console.log(val);
            history.push(`/`);
        }else{
            alert("Item title cannot be blank!");
        }

    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <Header title="Add Item" text="Back" destination=""/>

        <label htmlFor="title">Title</label>
        <br></br>
        <input 
        className="inputBox"
        type="text" 
        name="title"
        onChange={(e)=> setTitle(e.target.value)}
        />

        <label htmlFor={description}>Description</label>
        <br></br>
        <textarea className="descriptionBox" name="description" id="" cols="10" rows="10"
        onChange={(e)=> setDescription(e.target.value)}
        ></textarea>

        <button type="submit" style={{backgroundColor:'red'}} className="btn2">Submit</button>
        </form>
        </div>
    )
}
export default Add
