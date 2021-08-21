import { AiFillEdit} from 'react-icons/ai'
import React from 'react'
import { useHistory } from "react-router";

function Task({title,description,id,date}) {
    let history = useHistory();

    const getTitle = async (id)=>{
        history.push(`/editItem/${id}`,);
        // console.log(id)
    }

    return (
        <div className="task">
            <h3>{title}<AiFillEdit onClick={()=> getTitle(id)}/> </h3>
            <p>{description}</p>
            <h6>{date}</h6>
        </div>
    )
}

export default Task
