import React from "react"

const Minutes = (props)=>{
    let minutesToString= JSON.stringify(props.prop)

    let arrayMinutes = minutesToString.split('')
    if(props.prop<10){
        arrayMinutes.unshift("0")
    }
    return(
        <div className="d-flex bg-dark text-white justify-content-center">
            <p className="p-2 m-1 border border-white rounded h1">{arrayMinutes[0]}</p>
            <p className="p-2 m-1 border border-white rounded h1">{arrayMinutes[1]}</p>
        </div>
    )
}

export default Minutes;