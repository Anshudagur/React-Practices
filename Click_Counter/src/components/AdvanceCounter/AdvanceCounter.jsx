import {useState} from "react"
import "./AdvanceCounter.modules.css"

function AdvanceCounter() { 
    let [count, setCounter] = useState(0);
    
    function incrementOnClick() { 
        setCounter(count => count + 1);
    }

    function decrementOnClick() { 
        if (count > 0)
            setCounter(count => count - 1);
        else
            window.alert("Count can not be in -ve.");
    }

    function resetOnClick() { 
        if(count != 0)
            setCounter(0);
        else
            window.alert("You can not resent on Zero.");
    }

    return (
        <div className="container">
            <h3 className="counter">Count: {count}</h3>
            <div className="controls">
                <button onClick={incrementOnClick} name="incrementBtn">Increment</button>
                <button onClick={decrementOnClick} name="decrementBtn">Decrement</button>
                <button onClick={resetOnClick} name="resetBtn">Reset</button>
            </div>
        </div>
    )
}

export default AdvanceCounter;
