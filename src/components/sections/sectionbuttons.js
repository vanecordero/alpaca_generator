import Button from "../button";
import sty from './section.module.css'

export default function SectionButtons({title, objec, typeUrl, actionF}) {
    return ( 
        <>
            <h2>{title}</h2>
            <div>
            {
                objec.map(value=>{
                    return <Button key={"btn_"+value} value={value} onClick={actionF} className={`${sty.button_style} ${typeUrl===value? sty.btn_active: null}`}/>
                })   
            }
            </div>
        </>
     );
}

