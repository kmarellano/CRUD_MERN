const Button = ({color,addItem}) => {
    return (
        <button 
        className='btn'
        style={{backgroundColor: color}}
        onClick = {addItem}
        
        >Add Item</button>
    )
}

Button.defaultProps ={
    color: 'black',
}
export default Button
