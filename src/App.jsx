import AppSeguro from "./components/AppSeguro";
import { CotizadorProvider } from "./context/CotizadorProvider";



function App() {

  
  return (
    <div className="container">
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </div>
  );
}

export default App;
