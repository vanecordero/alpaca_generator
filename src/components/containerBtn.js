import React,{ useState, useRef, useContext } from "react";
import { Alpaca } from "service/Alpaca";
import sty from './containerBtn.module.css';
import {AlpacaContext} from "context/alpacaContext";
import CreateImage from "./images/createImage";
import SectionButtons from "./sections/sectionbuttons";
import HeadButton from "./headBtn";

export default function Container(){
    const [style, setstyle] = useState(Object.keys(Alpaca["backgrounds"]))
    const [typeUrl, setType] = useState("backgrounds")
    const [styles, setstyles] = useState({        
        "backgrounds":"darkblue70.png",
        "ears":"default.png",
        "leg":"default.png",
        "neck":"default.png",
        "face":"nose.png",
        "mouth":"default.png",
        "hair":"default.png",
        "accessories":"headphone.png",
        "eyes":"default.png"
    })
    const {imgStyles, setImgStyles} = useContext(AlpacaContext)
    const image = useRef(null)

    function hadleClick(val) {
         setstyle(Object.keys(Alpaca[val.target.value]))
          setType(val.target.value)
    }
      
    function changeImage(val) {
        setImgStyles({...imgStyles, [typeUrl]: Alpaca[typeUrl][val.target.value]})
    }   

    
   return(
    
    <div className={sty.container}>
       
            <HeadButton
            title="ALPACA GENERATOR"
            className={[sty.ctn_ramDown, sty.btn_ramDown]}
            objec={Object.keys(Alpaca)}
            images={image}
            />
        <div className={sty.ctn_img_btn}>

            <div className={sty.img_container} ref={image}> 
                <CreateImage/> 
            </div>  

            <div className={sty.button_container}>
                <SectionButtons 
                    title={"ACCESSORIZE THE ALPACA'S"}
                    objec={Object.keys(Alpaca)}
                    typeUrl={typeUrl}
                    actionF={hadleClick}
                />  
                <SectionButtons 
                    title={"STYLE"}
                    objec={style}
                    typeUrl={typeUrl}
                    actionF={changeImage}
                /> 
            </div>
        
        </div>
     </div>     
     
    )
} 