import React from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'

const Formulario = () => {
  return (
    <>
      <form>
        <div>
            <label>Marca</label>
            <select
                name='marca'
            >
                <option value="">--Seleccione Modelo--</option>
                {MARCAS.map(marca =>(
                    <option
                        key={marca.id}
                        value={marca.id}
                    >
                        {marca.nombre}
                    </option>
                ))}
            </select>
        </div>

        <div>
            <label>Año</label>
            <select
                name='marca'
            >
                <option value="">--Seleccione Año--</option>
                {YEARS.map(year =>(
                    <option
                        key={year}
                        value={year}
                    >
                        {year}
                    </option>
                ))}
            </select>
        </div>

        <div>
            {PLANES.map(plan =>(
                <div key={plan.id}>
                    <label>{plan.nombre}</label>
                    <input
                        type="radio"
                        name='plan'
                        value={plan.id}
                    />
                </div>
            ))}
        </div>

        <input
            type="submit"
            value='Cotizar'
        />
      </form>
    </>
  )
}

export default Formulario
