import Button from "./button"
import { Alpaca } from "service/Alpaca"
import AlpacaContext from "context/alpacaContext";
import { useContext } from "react";

export default function HeadButton({title, className, objec, images}){
    const {setImgStyles} = useContext(AlpacaContext)

    const downloadImg=()=>{
        var canvas = document.createElement("canvas")
        var ctx = canvas.getContext("2d")
        canvas.width ="720"
        canvas.height= "720"
        let c = images.current.children
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
        objec.map(values=>{
            let vals = Object.values(Alpaca[values])
            let nameImg = vals[Math.floor(Math.random()*vals.length)]
            newStyle[values] = nameImg
        })
        setImgStyles(newStyle)        
    }


    return(
        <>
        <h1>{title}</h1>
        
        <div className={className[0]}>
           <Button type="button" onClick={randomImg} className=
            {className[1]}
            value={"🔀 Random"}            
            />

            <Button type="button" onClick={downloadImg} className={className[1]} value={"⬇️ Download"}/>
        </div>
        </>
    )
}