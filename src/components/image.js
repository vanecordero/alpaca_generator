

export default function image({srcText, srcFile,altText, className}) {
           
    return <img src={require(`img/${srcFile}/${srcText}`).default} alt={altText}className={className}/>

}
