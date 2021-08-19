function Descriptionbox({name,text}) {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <br></br>
            <textarea className="descriptionBox" name={name} id="" cols="10" rows="10"></textarea>
        </>
    )
}

export default Descriptionbox
