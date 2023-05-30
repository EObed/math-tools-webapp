import React, {useState} from "react";
import "./FibonacciSequence.css"

function FibonacciSequence() {

    function FibCalc (){
        let digit = 2
        let num = fibdata

        if (num==1){
            document.getElementById("fib-confirm").innerHTML = "The first digit of the Fibonacci sequence is: 1"
        } else if (num==2){
            document.getElementById("fib-confirm").innerHTML = "The first 2 digits of the Fibonacci sequence are: 1, 1"
        } else if (num>2){
            let nextNum
            let arr1 = [1, 1]
            while (digit<num) {
              nextNum = arr1[digit-1]+arr1[digit-2]  
              arr1.push(nextNum)
              digit=digit+1
            } document.getElementById("fib-confirm").innerHTML = "The first " +num+ " digits of the Fibonacci sequence are: " + arr1.toString()
        } else {
            document.getElementById("fib-confirm").innerHTML = "Error: Invalid Input"
        }
    }


    const [fibdata, setFibdata] = useState(null)
    const [calcfib, setCalcfib] = useState(false)

    function getFibdata (fibvalue){
            setFibdata(fibvalue.target.value)
    }

    const handleKeypress = e => {
        //it triggers by pressing the enter key
      if (e.keyCode === 13) {
        setCalcfib(true);
      }
    };

    return (
        <div className="fibo-page">
            {
                calcfib?
                FibCalc()
                :null
            }
            <div className="title-fibo"> <h1> Fibonacci Sequence Generator </h1></div>
            <div className="desc-fibo"> <h3> This tool takes an integer value, n, and returns the first n digits in the Fibonacci sequence</h3> </div>
            <div className="body-fibo">
                <div className="instruction-fibo">
                    <p>Enter your integer value below</p>
                </div>
                <div className="input-fibo">
                    <input type="text" onChange={getFibdata} onKeyDown={handleKeypress}></input>
                </div>
                <div className="submit-fibo">
                    <button onClick={() => setCalcfib(true)}>Submit</button>

                </div>
                <div className="fib-conf" id="fib-confirm">
                    <p></p>
                </div>
            </div>
        </div>
        
    )
}

export default FibonacciSequence