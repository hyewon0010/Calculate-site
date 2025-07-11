import { useState } from "react";

function Calculator(){

    
    const [input,setInput] = useState("");
    const handleClick = (value) => {
        setInput(prev => prev + value);
    };

    const calculateResult =()=>{
        try{
            const result = eval(input);
            setInput(result.toString());
        }catch{
            setInput("Error")
        }
    };

    return(
        <div>
            <h2>계산기</h2>
            <div>{input || "0"}</div> {/* 화면에 입력 표시 */}

            <button onClick={() => handleClick("1")}>1</button>
            <button onClick={() => handleClick("2")}>2</button>
            <button onClick={() => handleClick("3")}>3</button>
            <br/>
            <button onClick={() => handleClick("4")}>4</button>
            <button onClick={() => handleClick("5")}>5</button>
            <button onClick={() => handleClick("6")}>6</button>
            <br/>
            <button onClick={() => handleClick("7")}>7</button>
            <button onClick={() => handleClick("8")}>8</button>
            <button onClick={() => handleClick("9")}>9</button>
            <br/>
            <button onClick={() => handleClick("0")}>0</button>
            <br/><br/>
            <button onClick={() => handleClick("+")}>더하기</button>
            <button onClick={() => handleClick("-")}>빼기</button>
            <button onClick={() => handleClick("*")}>곱하기</button>
            <button onClick={() => handleClick("/")}>나누기</button>
            <br/>
            <button onClick={() => setInput(input.slice(0, -1))}>뒤로가기</button>
            <button onClick={calculateResult}>계산</button>
        </div>
    )
}

export {Calculator};