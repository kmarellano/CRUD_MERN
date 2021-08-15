import React from 'react'
import Button from './Button'

const Header = ({title}) => {
    const addItem = () =>{
        console.log('click')
    }
    return (
        <header className="header">
            <h1> {title}</h1>
            <Button color="blue" addItem={addItem}/>
        </header>
    )
}
Header.defaultProps = {
    title: "ToDo List",
}


export default Header
