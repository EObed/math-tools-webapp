import React, {useState}  from "react";
import "./LeapYearCalculator.css";
// import LYCalc from "./LYCalc";


function LeapYearCalculator() {

    const [data, setData]= useState(null)
    const [calc, setCalc]= useState(false)

    function LYCalc() {
        let year = data    

        // if (typeof year === 'number'){ 
            if (year>0){
                if (year%4===0){
                 if (year%100===0){
                    if (year%400===0){
                    document.getElementById("confirm").innerHTML="Leap Year"
                }else{
                    document.getElementById("confirm").innerHTML="Not a Leap Year"
                }
            } else {
                document.getElementById("confirm").innerHTML="Leap Year"
            }
        } else{
            document.getElementById("confirm").innerHTML="Not a Leap Year"
        }
        } else{
            document.getElementById("confirm").innerHTML="Error: Invalid Year"
        }
    } 
    // else{
    //     document.getElementById("confirm").innerHTML="Error: Invalid Input"
    // }
    // }

    function getData (inputvalue){
        setData(inputvalue.target.value)
    }

    return (

        <div className="leap-page">
             {
            calc?
            LYCalc()
            :null
        }
            <div className="title-bar">
                <h1>Leap Year Calculator</h1>
            </div>
            <div className="description">
                <p>
                    This tool takes in a natural number value from the user and
                    tells whether or not it is a leap year.
                </p><br></br>
            </div>
            <div className="body">
                <div className="text">
                    Enter the year below and click Submit
                </div>
                <div className="input-field">
                    <form>
                        <input type="text" onChange={getData}></input>
                    </form>
                </div>
                <div className="submit-button">
                    <button onClick={()=> setCalc(true)}>Submit</button>
                    
                </div>
                <div className="confirmation" id="confirm">
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LeapYearCalculator;
