import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react"; 
import '../playlistdetail.css' 
import axios from 'axios'
function Playlistdetail() {  
    
    var playing=false;
    const { id }=useParams()  
    const [first,setFirst]=useState(true)
    const[playlists,setPlaylists] = useState([])
    const[musicas, setMusicas] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/playlists/`, playlists).then( (res) => { 
        setPlaylists(res.data)
      }
    )

    axios.get("http://localhost:5000/musicas", musicas).then( (res) => { 
        setMusicas(res.data)
      }
    )
    },[])
 


    const songPlay= musicas.map((o) => <li><button onClick={() => PlaySong(o.musica)} className="button"><i
        className="fa fa-play"></i></button></li>)
    const songTitles=musicas.map((o) => <li><h5>{o.titulo_musica}</h5></li>)
    const songArtist=musicas.map((o) => <li><h5>{o.Cantor}</h5></li>)


    let audio;
    const PlaySong = async (song) => {         
           if(playing) { 
                audio.pause()
                playing=false;
           } 
           else { 
                audio=new Audio(`/music/${song}`) 
                await audio.play()
                playing=true
           }
    }
    return(
        <>
        <div className="sideArea">
            <img src={`/images/${playlists.capa}`} alt="cannot display"></img>
            <div className="coluna">
                <h1>{playlists.name}</h1>
                <h4>{playlists.descricao}</h4>
                <div className="linha">
                    <h4>{playlists.autor}</h4>
                    <h4>{playlists.quantidadeFaixas}</h4>
                    <h4><i className="fa fa-heart"></i> {playlists.quantidadeCurtidas}</h4>
                </div>
            </div>

        </div>
        <div className="musicArea">
            <table>
                 <tr>
                    <th><h6>#</h6></th>
                    <th><h6>Título</h6></th>
                     <th><h6>Artista</h6></th>
                     <th><h6>Album</h6></th>
                     <th><h6>Adicionado em</h6></th>
                </tr>
                <tr>
                    <td width="10%">{songPlay}</td>
                    <td width="40%">{songTitles}</td>
                    <td>{songArtist}</td>


                </tr>
            </table>
        </div>
        </>
    )


}  
export default Playlistdetail