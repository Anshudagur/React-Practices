import Calc from "./componets/calc.jsx";
import { CalculationContextProvider } from "../Context/CalculationContext.jsx";
function App() {
  return (
    <>
      <CalculationContextProvider>
        <Calc />
      </CalculationContextProvider>
    </>
  );
}

export default App;
