import React from "react";
import Button from "./button";
import { useState, useRef } from "react";
import { Alpaca } from "service/Alpaca";
import sty from './containerBtn.module.css';


export default function Container(){
    const [accesory] = useState( Object.keys(Alpaca))
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

    
    const image = useRef(null)
      function hadleClick(e, value) {
          setstyle(Object.keys(Alpaca[value]))
          setType(value)
      }
      
    function changeImage(e, value) {
       setstyles({...styles, [typeUrl]: Alpaca[typeUrl][value]})
    }   

    const downloadImg=()=>{
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        canvas.width ="720"
        canvas.height= "720"
        let c = image.current.children
        for (let i = 0; i < c.length; i++) {
            ctx.drawImage(c[i], 0, 0)
        }
        const link = document.createElement('a')
        link.download = 'Alpaca.png'
        link.href = canvas.toDataURL()
        link.click()
    }
      
    const randomImg=()=>{
        let newStyle = { }
        accesory.map(values=>{
            let vals = Object.values(Alpaca[values])
            let nameImg = vals[Math.floor(Math.random()*vals.length)]
            newStyle[values] = nameImg
        })
        setstyles(newStyle)        
    }

    
   return(  
    <div className={sty.container}>
       <h1>ALPACA GENERATOR</h1>
       <div className={sty.ctn_ramDown}>
           <button type="button" onClick={randomImg} className=
            {sty.btn_ramDown}>🔀 Random</button>

            <button type="button" onClick={downloadImg} className=
            {sty.btn_ramDown}>⬇️ Download</button>
        </div>
        <div className={sty.ctn_img_btn}>
        <div className={sty.img_container} ref={image}> 
                {
                    Object.keys(Alpaca).map(elem=>{
                        return <img key={"key_"+elem}
                        src={require(`img/${elem}/${styles[elem]}`).default}
                        alt={elem}
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
                return <Button key={"btn-style_"+value} value={value} onClick={e =>{changeImage(e,value)}} className={`${sty.button_style} ${styles[typeUrl]===value+".png"? sty.btn_active: null}`}/>
                })  
                }
                </div>
        </div>

    
        </div>
     </div>
    )
} 