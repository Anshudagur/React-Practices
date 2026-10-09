import { useState, useEffect, useRef } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const prvousCountRef = useRef(0);

  useEffect(() => {
    prvousCountRef.current = counter;
  }, [counter]);

  return (
    <>
      <div>
        <p>
          Counter :<span>{counter}</span>
        </p>
        <button
          type="button"
          onClick={() => {
            if (this.prvousCountRef.current.value != this.counter) {
              setCounter(counter + 1);
            }
          }}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => {
            if (this.counter != this.prevous.current.value) {
              this.counter = 0;
            } else if (this.prevous.current.value == 0 && this.counter) {
              this.promp("You can't Reset it already is set to Zero.");
            }
          }}
        >
          Reset
        </button>
        <button type="button">Decrement</button>
      </div>
    </>
  );
}

export default Counter;
