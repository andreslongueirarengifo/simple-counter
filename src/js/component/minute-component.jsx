import React from "react"

const Minutes = (props)=>{
    let minutesToString= JSON.stringify(props.prop)

    let arrayMinutes = minutesToString.split('')
    if(props.prop<10){
        arrayMinutes.unshift("0")
    }
    return(
        <>
        <p>{arrayMinutes[0]}</p>
        <p>{arrayMinutes[1]}</p>
        </>
    )
}

export default Minutes;