import React, { useEffect,useState } from "react"
import './LoginMiddle.css' 
import axios from "axios"
import { useNavigate } from "react-router-dom" 

function LoginMiddle(props) { 
    const [userList,setUserList]=useState()  
    const email=React.createRef() 
    const password=React.createRef() 
    const navigate=useNavigate()   

    function handleSubmit(e) {
        e.preventDefault();

        var currentEmail=email.current.value
        var currentPassword=password.current.value  

        if(currentEmail == "" || currentPassword == "") { 
            alert("porfavor tenha os dois campos inseridos") 
        } 
        else { 
            axios.get("http://localhost:5000/users").then(
            (res) => {
                setUserList(res.data)

                    //we use res.data cuz the setUserList doesnt work immediatly 
                    res.data.forEach(o  => { 
                        if(currentEmail == o.email && currentPassword== o.senha) { 
                            const currentuser={name: o.name,email:o.email,senha:o.senha,dataNascimento:o.dataNascimento,id:o.id,playlists:o.playlists}
                            axios.post("http://localhost:5000/currentuser",currentuser)   
                            props.setIsLogged(true)
                            navigate("/")
                        }
                    })
                
            })
        }
        
        
    }
    return(  
        <> 
        <form onSubmit={handleSubmit}> 
            <input type="email" ref={email} placeholder="Digite seu Email" ></input>
            <input type="password" ref={password} placeholder="Digite sua Senha" name="password"></input>
            <button type="submit">Login</button> 
        </form>
        </>
    )
}  
export default LoginMiddle