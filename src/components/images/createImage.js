import { useContext } from "react";
import AlpacaContext from "context/alpacaContext";
import FindImg from "./FindImg";
import sty from './imgStyle.module.css'

function CreateImage() {
    const {imgStyles} = useContext(AlpacaContext)
    return ( 
        <>
            {
                Object.keys(imgStyles).map(elem=>{
                    return <FindImg key={"key_"+elem}
                    src={`${elem}/${imgStyles[elem]}`}
                    alt={elem}
                    className={sty["img_"+elem]}
                    />
                })
            }
        </>
     )
}
export default CreateImage;