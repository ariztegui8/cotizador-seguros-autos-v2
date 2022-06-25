import { useCallback, useMemo, useRef } from "react"
import { MARCAS, PLANES } from "../constants"
import useCotizador from "../hooks/useCotizador"


const Resultado = () => {

    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos
    const yearRef = useRef(year)

    const [nombreMarca] = useMemo( ()=>
        MARCAS.filter(m => m.id === Number(marca)),
        [resultado]
    ) 

    const [nombrePlan] = useMemo( ()=>
        PLANES.filter(m => m.id === Number(plan)),
        [resultado]
    )

    if(resultado === 0) return null

  return (
    <div className="p-4 text-center bg-secondary mt-4 text-white">
        <h2 className="mb-4">Resumen</h2>

        <p><span className="fw-semibold">Marca: </span>{nombreMarca.nombre}</p>
        <p><span className="fw-semibold">Plan: </span>{nombrePlan.nombre}</p>
        <p><span className="fw-semibold">Año del Auto: </span>{yearRef.current}</p>
        <p className="fs-3"><span className="fw-semibold">Total Cotización: </span>{resultado}</p>
        
    </div>
  )
}

export default Resultado