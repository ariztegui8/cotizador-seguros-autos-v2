import React from 'react'
import useCotizador from '../hooks/useCotizador'
import Formulario from './Formulario'

const AppSeguro = () => {

  const {resultado} = useCotizador()

  return (
    <>
     <header className='container-header'>
        <h1 className='text-center'>Cotizador de Seguros de Auto</h1>
     </header>

     <main className='bg-white p-4'>
        <Formulario />

        {resultado}
     </main>
    </>
  )
}

export default AppSeguro
