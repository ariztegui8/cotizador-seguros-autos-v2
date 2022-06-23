import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';

const Formulario = () => {


  return (
    <>
      <form className='form'>
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
                <label>Elige tu plan</label>
                <div className='container-plan'>
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
            </div>

        <input
            type="submit"
            value='Cotizar'
            className='btn-submit'
        />
      </form>
    </>
  )
}

export default Formulario
