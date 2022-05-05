import React , {useState, useEffect}from "react";
import { Link } from "react-router-dom";
//import Playlists from "../Data/PlaylistsData"; 
import '../playlists.css'
import axios from 'axios';
import Modal from '../Modal'

export default function PlaylistPage(props) { 

  const isLogged=props.isLogged 

  const [id, setId] = useState({})
  const [name, setName] = useState({})
  const [descricao,setDescricao] = useState({})
  const [capa, setCapa] = useState({})
  const [autor, setAutor] = useState({})
  const [quantidadeFaixas, setQuantidadeFaixas] = useState({})
  const [quantidadeCurtidas, setquantidadeCurtidas] = useState({})
  const [musicas, setMusicas] = useState({})
  const [currentUser,setCurrentUser]=useState({playlists: []}) 
  var currentPlaylists=["wow"]
  const [counter,setCounter]=useState(0)
  const [playlists,setPlaylists] = useState([]);
  const [loading,setLoading]=useState(false)

  useEffect(() => { 
    setLoading(true) 
    axios.get("http://localhost:5000/currentUser").then( (res) => {
            setCurrentUser(res.data)
            //console.log(currentUser.playlists) 
            
    }).finally(() => { 
      setLoading(false)
    })
  },[])

  if(isLogged) {    
        if(loading) { 
          return(
            <>
            <p style={{color:"red"}}>Data is loading</p> 
            </>
          )
        } 
        else {  

          currentPlaylists = currentUser.playlists.map((o) => {
            return (
              <Link to = {`/playlistdetail/${o.id}`} >
                <img  src={`./images/${o.capa}`} ></img>
              </Link> 
            )
           }
          ) 
            return( 
              <>
              <h1 style={{color:"black"}}>Bem vindo a suas playlists {currentUser.name}</h1>
              <div className="playMenu">
                  { currentPlaylists   }
                </div>
              <Modal/>
              </>
            )
        } 
  } else{ 

    axios.get("http://localhost:5000/playlists").then((res) => setPlaylists(res.data))  
  
  return (
      <> 
        <div className="sb">
        </div>
        <div className="playMenu">
          {playlists.map((o) => (
   
   <Link to = {`/playlistdetail/${o.id}`} >
      <img  src={`./images/${o.capa}`} ></img>
  </Link>)
          )}

        </div>
      </>
  );       
}

}

