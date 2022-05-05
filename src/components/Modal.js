import React, { useState , useEffect} from "react";
import "./Modal.css";
import axios, { Axios } from 'axios';
import {useNavigate} from 'react-router-dom'

export default function Modal() {

  const [modal, setModal] = useState(false);
  const [listName, setListName] = useState("")
  const [autor, setAutor] = useState("")
  const [playlistsUser,setPlaylistsUser] = useState({});
  const [currentUser,setCurrentUser]=useState({})

  const toggleModal = () => {
    setModal(!modal);
  }; 

  axios.get("http://localhost:5000/currentUser").then( (res) => { 
    setCurrentUser(res.data)
  }

  )

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const newPlaylist = {name:listName,capa:"blankPlaylist.png",descricao: "a",autor:currentUser.name,quantidadeFaixas: '1',quantidadeCurtidas: "2.450 curtidas",userId:currentUser.id,musicas:[]}
    var aux=currentUser 
    aux.playlists.push(newPlaylist)
    axios.post("http://localhost:5000/currentUser",aux) 
    axios.put(`http://localhost:5000/users/${currentUser.id}`,aux)

    /* axios.post(`http://localhost:5000/playlistsUser`, playlistsUser)
        .then((response) =>{
            navigate.push('/');
        }); */
    toggleModal();
    
}


  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Criar playlist
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>De um nome para sua playlist</h2>

            <input type="text" onChange={(e) => setListName(e.target.value)} id="listName" placeholder="Digite o nome da sua playlist" ></input>

            <button type ="submit" className="save-modal" onClick={handleSubmit}>
              Salvar
            </button>
            <button className="close-modal" onClick={toggleModal}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}