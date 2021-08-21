import React from 'react'
import Button from './Button'

const Header = ({title,text,destination}) => {
    return (
        <header className="header">
            <h1> {title}</h1>
            <Button color="blue" destination={destination} text={text}/>
        </header>
    )
}
Header.defaultProps = {
    text: "Add Item",
    destination: "addItem",
    title: "ToDo List",
}


export default Header
