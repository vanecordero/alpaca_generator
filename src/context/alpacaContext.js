import React,{ useState } from "react";

const Context = React.createContext({})

 export function AlpacaContext ({children}){

   const [imgStyles, setImgStyles] = useState({
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
    return (
        <Context.Provider value={{imgStyles, setImgStyles}}>
            {children}
        </Context.Provider>
    )

}

export default Context