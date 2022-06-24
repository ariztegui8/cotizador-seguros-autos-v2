import useCotizador from "../hooks/useCotizador"


const Error = () => {

    const {error} = useCotizador()

  return (
    <div className="mt-3">
        <p className="alert alert-danger p-2">{error}</p>
    </div>
  )
}

export default Error