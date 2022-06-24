import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador';
import Error from './Error';

const Formulario = () => {

    const {datos, handleChangeDatos, error, setError, cotizarSeguro} = useCotizador();

    const handleSubmit = e =>{
        e.preventDefault();

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }

        setError('')

        cotizarSeguro()
    }

  return (
    <>
      <form
        className='form'
        onSubmit={handleSubmit}
    >
        <div>
            <label>Marca</label>
            <select
                name='marca'
                onChange={e =>handleChangeDatos(e)}
                value={datos.marca}
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
                name='year'
                onChange={e => handleChangeDatos(e)}
                value={datos.year}
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
                                onChange={e => handleChangeDatos(e)}
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
          {error && <Error />}
      </form>
    </>
  )
}

export default Formulario
