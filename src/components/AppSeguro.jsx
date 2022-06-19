import React from 'react'
import Formulario from './Formulario'

const AppSeguro = () => {
  return (
    <>
     <header>
        <h1 className='text-center'>Cotizador de Seguros de Auto</h1>
     </header>

     <main className='bg-white p-4'>
        <Formulario />
     </main>
    </>
  )
}

export default AppSeguro
