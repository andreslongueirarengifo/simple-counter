import React from "react"

const Seconds = (props)=>{
    let secondToString= JSON.stringify(props.prop)
    let arraySeconds = secondToString.split('')
    if(props.prop<10){
        arraySeconds.unshift("0")
    }
    return(
        <div className="d-flex bg-dark text-white justify-content-center">
            <p className="p-2 m-1 border border-white rounded h1 num">{arraySeconds[0]}</p>
            <p className="p-2 m-1 border border-white rounded h1">{arraySeconds[1]}</p>
        </div>
    )
}

export default Seconds;