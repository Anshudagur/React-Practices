import { useState } from "react"
import "./TextArea.css"

const TextArea = () => { 
    const [text, setText] = useState("");
    const totalChar = 350;
    const charCounter = text.length;

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="parent">
                <form className="userInput">
                    <label>Enter any Text : </label>
                    <textarea 
                        id="text" 
                        placeholder="The quick brown fox jumps over the lazy dog." 
                        value={text}
                        onChange={handleChange}
                        maxLength={totalChar}
                    />
                    <div className="controls">
                        <button type="submit" id="submitBtn">Submit</button>
                        <button type="button" id="refreashBtn">Refresh</button>
                    </div>
                </form>
                <div className="feedback">
                    <h3>Used Characters : {charCounter}</h3>
                    <h3>Remaining Characters : {totalChar - charCounter}</h3>
                </div>
            </div>
        </>
    );
}

export default TextArea;