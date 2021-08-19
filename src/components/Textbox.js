const Textbox = ({name,text}) => {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <br></br>
            <input 
            className="inputBox"
            type="text" 
            name={name} 
            />
        </>
    )
}

export default Textbox
