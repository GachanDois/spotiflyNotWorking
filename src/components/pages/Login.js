import React from "react"
import LoginMiddle from "../LoginMiddle"

export default function Login(props) { 
    return(
        <>
        <LoginMiddle isLogged={props.isLogged} setIsLogged={props.setIsLogged}/>
        </>
    ) 
}