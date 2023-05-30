import React, {useState} from "react"



function FactorialCalculator(){

    const [facdata, setFacdata]= useState(null)
    const [faccalc, setFaccalc]= useState(false)

    function FacCalc(){
        let num1 = facdata
        let factorial = 1

        if (num1<0){
            document.getElementById("answer-facto").innerHTML = "Error: Invalid Input"
        } else if (num1==0){
            document.getElementById("answer-facto").innerHTML = "1"
        } else {
            let i 
            for (i = 1; i <= num1; i++) {
                factorial= factorial*i
            }
            document.getElementById("answer-facto").innerHTML = factorial
        }
    }


    function getFacdata (inputvalue){
        setFacdata(inputvalue.target.value)
    }

    return(
        <div className="facto-page">
            {
                faccalc?
                FacCalc()
                :null
            }
            <div className="title-facto">
                <h1>Factorial Calculator</h1>
            </div>
            <div className="description-facto">
                <h3>This tool takes a number from the user, calculates its factorial and gives it to the user</h3>
            </div>
            <div className="body-facto">
                <div className="instruction-facto">
                    Enter the integer value
                </div>
                <div className="input-facto">
                    <input type="text" placeholder="E.g. 0" onChange={getFacdata}></input>  !
                </div>
                <div className="submit-facto"> <button onClick={()=> setFaccalc(true)}>Submit</button> </div>
                <div className="answer-fac" id="answer-facto">
                    <p></p>
                </div>
            </div>

        </div>
    )
}

export default FactorialCalculator