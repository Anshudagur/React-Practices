import Button from "button/Button.jsx";
import { CalculationContext } from "../Context/CalculationContext.jsx";
import { useContext } from "react";

function Calc() {
  const { CalculationContext, setCalculationContext } =
    useContext(CalculationContext);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="flex justify-center items-center w-[368px] h-[480px] m-12 border border-solid border-slate-600 rounded-lg bg-slate-800"
        id="outer-frame"
      >
        <div
          className="flex flex-col items-center w-[336px] h-[448px] bg-gray-600 rounded-lg"
          id="inner-frame"
        >
          <div
            className="flex flex-col w-[312px] h-[94px] m-2 bg-[#333] rounded-lg "
            id="screen"
          >
            <div className="px-4 flex justify-start text-[42px] text-white font-mono">
              0
            </div>
            <div className="px-4 flex justify-end text-[22px] text-white font-mono">
              Ans
            </div>
          </div>
          <div
            className="flex flex-col justify-between w-[312px] h-[321px] m-2 bg-[#233775cb] rounded-lg"
            id="controls"
          >
            <div
              className="flex flex-row justify-space-between items-center"
              id="first-row"
            >
              <Button btnId="btnBack" text="⌫" colr="gray" />
              <Button btnId="btnAllClear" text="AC" colr="gray" />
              <Button btnId="btnModuls" text="%" colr="gray" />
              <Button btnId="btnDivition" text="÷" colr="orange" />
            </div>
            <div
              className="flex flex-row justify-space-between items-center"
              id="second-row"
            >
              <Button btnId="btnSeven" text="7" colr="darkGray" />
              <Button btnId="btnEight" text="8" colr="darkGray" />
              <Button btnId="btnNine" text="9" colr="darkGray" />
              <Button btnId="btnMultiplication" text="X" colr="orange" />
            </div>
            <div
              className="flex flex-row justify-space-between items-center"
              id="thred-row"
            >
              <Button btnId="btnFour" text="4" colr="darkGray" />
              <Button btnId="btnFive" text="5" colr="darkGray" />
              <Button btnId="btnSix" text="6" colr="darkGray" />
              <Button btnId="btnMinus" text="-" colr="orange" />
            </div>
            <div
              className="flex flex-row justify-space-between items-center"
              id="fourth-row"
            >
              <Button btnId="btnOne" text="1" colr="darkGray" />
              <Button btnId="btnTwo" text="2" colr="darkGray" />
              <Button btnId="btnThree" text="3" colr="darkGray" />
              <Button btnId="btnPlus" text="+" colr="orange" />
            </div>
            <div
              className="flex flex-row justify-space-between items-center"
              id="fiveth-row"
            >
              <Button btnId="btnPlusMinus" text="+/-" colr="gray" />
              <Button btnId="btnDot" text="." colr="darkGray" />
              <Button btnId="btnZero" text="0" colr="gray" />
              <Button btnId="btnEqual" text="=" colr="orange" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
