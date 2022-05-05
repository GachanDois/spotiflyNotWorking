import React, { useEffect, useState } from "react"; 
import "../Change.css" 
import axios from "axios"; 
import { Navigate, useParams } from "react-router-dom";

function Change() { 
    const { id } =useParams()
    const [currentUser,setCurrentUser]=useState({})
    var changeObj="" 
    var typeObg="text"  
    const mainObj=React.createRef()
    const confirmation=React.createRef() 
    const [loading,setLoading]=useState(false)
    if(id ==1) { 
        changeObj="Senha"
        typeObg="password"
    } else if(id ==2) { 
        changeObj="Nome"
        typeObg="text"
    } else if(id ==3) { 
        changeObj="Email"
        typeObg="email"
    } 
    else { 
        changeObj="Data de Nascimento" 
        typeObg="date"
    }   
    function leave(){
        Navigate("/Profile")  
    }   
    useEffect(() => { 
        setLoading(true) 
        axios.get("http://localhost:5000/currentUser").then( (res) => {
                setCurrentUser(res.data)
                //console.log(currentUser.playlists) 
                
        }).finally(() => { 
          setLoading(false)
        })
      },[])
    function  onHandleSubmit(e) { 
        e.preventDefault() 
        if(mainObj.current.value == confirmation.current.value && confirmation.current.value != "" && mainObj.current.value != "") {
            if(id ==1) { 
                var aux=currentUser 
                aux.senha=mainObj.current.value 
                axios.put(`http://localhost:5000/users/${currentUser.id}`,aux) 
                axios.put(`http://localhost:5000/currentUser`,aux) 
                alert({changeObj} + " alterado(a) com suceso")
            } else if(id ==2) { 
                var aux=currentUser 
                aux.name=mainObj.current.value 
                axios.put(`http://localhost:5000/users/${currentUser.id}`,aux) 
                axios.put(`http://localhost:5000/currentUser`,aux) 
                alert({changeObj} + " alterado(a) com suceso")
            } else if(id ==3) { 
                var aux=currentUser 
                aux.email=mainObj.current.value 
                axios.put(`http://localhost:5000/users/${currentUser.id}`,aux) 
                axios.put(`http://localhost:5000/currentUser`,aux) 
                alert({changeObj} + " alterado(a) com suceso")
            } 
            else { 
                var aux=currentUser 
                aux.dataNascimento=mainObj.current.value 
                axios.put(`http://localhost:5000/users/${currentUser.id}`,aux) 
                axios.put(`http://localhost:5000/currentUser`,aux) 
                alert({changeObj} + " alterado(a) com suceso")
            } 
        } 
        else { 
            alert("os(as) dois(duas) " + {changeObj} +" nao estao iguais")
        }
    }
    if(!loading) {
        return (
            <> 
                <form onSubmit={onHandleSubmit}> 
                <div className="theone">
                <h1 style={{color:"red"}}>digite e confirme seu(a) novo(a) {changeObj} </h1> 
                <input type={typeObg} ref={mainObj} placeholder={`digite seu(sua) novo(a) ${changeObj}`}></input> 
                <input type={typeObg} ref={confirmation} placeholder={`confirme seu(sua) novo(a) ${changeObj}`}></input>   
                <button type="submit">pronto!</button>
                </div>
                </form>
            </>
        ) 
    } 
    else { 
        return ( 
            <>
            <p>Data is loading...</p>
            </>
        )
    }
}   
export default Change