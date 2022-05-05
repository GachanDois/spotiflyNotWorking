import React, { useState,useEffect } from "react";   
import axios from "axios";
import "../Profile.css"
import { useNavigate } from "react-router-dom";
export default function Profile() { 
    const [currentUser,setCurrentUser]=useState({})
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/currentUser").then( (res) => { 
            setCurrentUser(res.data)
        }) 
      }, []); 

      function changePassword() { 
        navigate("/Change/1")
      } 
      function changeName() { 
        navigate("/Change/2")
      }  
      function changeEmail() {
        navigate("/Change/3")
      }
      function changeDate() { 
        navigate("/Change/4")
      }

    return ( 
        <>
        <div className="whole"> 
            <div className="toparea"> 
                <div className="imagearea">   
                    <img src={`./images/blank.png`} alt="o lado bom de ser gay"></img>
                </div> 
                <div className="subhead">
                    <h1 style={{color:"red"}}>{currentUser.name}</h1> 
                    <h3 style={{color:"red"}}>{currentUser.email}</h3> 
                    <h5 style={{color:"red"}}>{currentUser.dataNascimento}</h5>  
                </div> 
            </div> 
            <div className="bottomarea">   
                <button onClick={changePassword}>Alterar Senha</button> 
                <button onClick={changeEmail}>Mudar email</button>  
                <button onClick={changeName}>Mudar Nome</button> 
                <button onClick={changeDate}>Mudar Data</button>
            </div>
        </div>
        </>
    )
}