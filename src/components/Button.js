import { useHistory } from "react-router";

const Button = ({color,destination,text}) => {
    let history = useHistory();

    return (
            <button 
            type="button"
            className='btn'
            style={{backgroundColor: color}}
            onClick={()=>{  
                history.push(`/${destination}`);
            }}
            >{text}
            </button>
    )
}

Button.defaultProps ={
    color: 'black',
}
export default Button
