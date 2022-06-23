const { createContext, useState } = require("react");


const CotizadorContext = createContext();

const CotizadorProvider = ({children})=>{



    return(
        <CotizadorContext.Provider
            value={{
              
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export{
    CotizadorProvider
}

export default CotizadorContext