import React, { useEffect, useState } from "react"; 
import './SignUpMiddle.css'  
import reactRouterDom from "react-router-dom"; 
import axios from "axios"; 
import { useNavigate} from "react-router-dom";
function SignUpMiddle() { 
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("") 
    const [currentUser,setCurrentUser]=useState("")
    const [confirmarEmail, setConfirmarEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState('');  
    const navigate = useNavigate() 

    function handleSubmit(e) {
        e.preventDefault();
        if (confirmarEmail == email && email.length>0) {  
             
            const playlists=[]
            const usuario = {name,email,senha,dataNascimento,playlists}
            axios.post("http://localhost:5000/users",usuario) 
            navigate("/Login")
        }else{
            alert("Email errado")
        } 
        
    }
    return ( 
        <>  
        <div className="formulae">
            <form onSubmit={handleSubmit}> 
                <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Nome:</label>
                    <input type="name" onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder="Enter name" name="name"/>
                </div>

                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Confirmar Email:</label>
                    <input type="email" onChange={(e) => setConfirmarEmail(e.target.value)} className="form-control" id="emailconfirma" placeholder="Enter email" name="email"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Senha:</label>
                    <input type="password" onChange={(e) => setSenha(e.target.value)} className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="data" className="form-label">Data de nascimento:</label>
                    <input type="date" onChange={(e) => setDataNascimento(e.target.value)} className="form-control" id="data" placeholder="Enter data" name="data"/>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar</button> 
                </form>
        </div>
        </>
    )
} 
export default SignUpMiddle; 
