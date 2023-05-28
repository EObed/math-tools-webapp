

function LYCalc(year) {
    if (typeof year == 'number'){ 
        if (year>0){
            if (year%4===0){
             if (year%100===0){
                if (year%400===0){
                console.log("Leap year")
            }else{
                console.log("Not a leap year") 
            }
        } else {
            console.log("Leap year")
        }
    } else{
        console.log("Not a leap year")
    }
    } else{
        console.log("Error: Invalid Year!")
    }
} else{
    console.log("Error: Invalid Input!")
}
}


const button = document.querySelector(".submit-button")

export default LYCalc