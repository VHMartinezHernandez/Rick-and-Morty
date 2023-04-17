import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Detail.css';

const Detail = () => {
    const {id} = useParams();
    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/detail/${id}`).then(({ data }) => {           
            setCharacter(data);         
        });
        return setCharacter({});
     }, []);

    return(
            <div className="fondo">
                <br />
            <h1 className="white">Tarjeta del Personaje</h1>
            <div className="detail">
            {character.name ? (
                <>
                    <h1>{character.name}</h1>
                    <img src={character.image} alt="img" />
                    <h2>{character.status}</h2>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                
                </>
            ) : (
                <h3>Loading...</h3>
            )}
            
        </div>
        </div>
        
    )
}

export default Detail;

