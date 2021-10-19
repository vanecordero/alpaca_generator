
function FindImg({src, alt, className}) {
    return (
       <img src={require(`img/${src}`).default}
       alt={alt}
       className={className}/>
     )
}
export default FindImg;
