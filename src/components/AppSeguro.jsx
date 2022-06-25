import React from 'react'
import useCotizador from '../hooks/useCotizador'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppSeguro = () => {

  const {resultado, cargando} = useCotizador()

  return (
    <>
     <header className='container-header'>
        <h1 className='text-center'>Cotizador de Seguros de Auto</h1>
     </header>

     <main className='bg-white p-4'>
        <Formulario />

        {cargando ? <Spinner /> : <Resultado />}
     </main>
    </>
  )
}

export default AppSeguro
