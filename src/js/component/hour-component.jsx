import React from "react"

const Hours = (props)=>{
    let hoursToString= JSON.stringify(props.prop)

    let arrayHours = hoursToString.split('')
    if(props.prop<10){
        arrayHours.unshift("0")
    }
    return(
        <>
        <p>{arrayHours[0]}</p>
        <p>{arrayHours[1]}</p>
        </>
    )
}

export default Hours;