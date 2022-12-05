import React from "react"

const Seconds = (props)=>{
    let secondToString= JSON.stringify(props.prop)
    let arraySeconds = secondToString.split('')
    if(props.prop<10){
        arraySeconds.unshift("0")
    }
    return(
        <>
        <p>{arraySeconds[0]}</p>
        <p>{arraySeconds[1]}</p>
        </>
    )
}

export default Seconds;