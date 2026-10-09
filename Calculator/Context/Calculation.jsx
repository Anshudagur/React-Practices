import { createContext, useState } from "react";
const CalculationContext = createContext({
  calculation: null,
  lastNumber: 0,
  sign: null,
  ans: 0.0,
});

export default CalculationContext;

export function CalculationContextProvider({ children }) {
  const { calc, setCalc } = useState();
  <CalculationContext.Provider value={{ calc, setCalc }}>
    {children}
  </CalculationContext.Provider>;
}
