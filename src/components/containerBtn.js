import React from "react";
import Button from "./button";
import { useState } from "react";
import { Alpaca } from "service/Alpaca";
import Image from "./image";
import sty from './containerBtn.module.css';


export default function Container(){
    const [accesory] = useState( Object.keys(Alpaca))
    const [style, setstyle] = useState(Object.keys(Alpaca["backgrounds"]))
    const [typeUrl, setType] = useState("backgrounds")
    const [styles, setstyles] = useState({
        "accessories":"headphone.png",
        "backgrounds":"darkblue70.png",
        "ears":"default.png",
        "eyes":"default.png",
        "hair":"default.png",
        "leg":"default.png",
        "mouth":"default.png",
        "neck":"default.png",
        "face":"nose.png"
        })
    const [styleSelect, setstyleSelect] = useState("darkblue70")

      function hadleClick(e, value) {
          setstyle(Object.keys(Alpaca[value]))
          setType(value)
      }
      
      function changeImage(e, value) {
        let tipo = typeUrl
       setstyles({...styles, [tipo]: Alpaca[typeUrl][value]})
       setstyleSelect(value)
    }      
      
   return(  
       <div className={sty.container}>
       <h1>ALPACA GENERATOR</h1>
   <div className={sty.ctn_img_btn}>
   
        <div className={sty.img_container}> 
                {
                    Object.keys(Alpaca).map(elem=>{
                        return <Image key={"key_"+elem}
                        srcFile={elem} 
                        srcText={styles[elem]}
                        altText={elem}
                        className={sty["img_"+elem]}
                        /> 
                    })
                }
        </div>
                    
        <div className={sty.button_container}>
            
        <h2>ACCESSORIZE THE ALPACA'S</h2> 
            <div> 
                { 
                accesory.map(value=>{
                    return <Button key={"btn_"+value} value={value} onClick={(e)=>{hadleClick(e, value)}} className={`${sty.button_style} ${typeUrl===value? sty.btn_active: null}`}/>
                })           
                }
            </div>
            <h2>STYLE</h2> 
            <div>
             
                {
                style.map(value=>{
                return <Button key={"btn-style_"+value} value={value} onClick={e =>{changeImage(e,value)}} className={`${sty.button_style} ${styleSelect===value? sty.btn_active: null}`}/>
                })  
                }
                </div>
        </div>

    
     </div>
     </div>
    )
} 