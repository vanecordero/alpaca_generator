

const Button = ({value, onClick, className}) =>(
    <button
     onClick={onClick}
    className={className}
    value={value}>
        {value}
    </button> 
 )
 
 export default Button