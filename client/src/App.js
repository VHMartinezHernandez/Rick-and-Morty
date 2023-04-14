import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites';


function App() {

   //Hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();


   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   //Credeciales Fake
   const EMAIL = "123@mail.com"
   const PASSWORD = "mipass123"

   //Controladores de evento
   // function onSearch(id) {
   //    axios( `http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
   //       if (data.name && !characters.find((char) => char.id === data.id)) {
   //          setCharacters((oldChars) => [...oldChars, data]);
   //       } else {
   //          window.alert('Este personaje ya se encunetra agregado');
   //       }
   //    });
   // }

   const onSearch = (id) => {
      // const URL_BASE = "http://localhost:3001/rickandmorty"
      const URL_BASE = "http://localhost:3001/rickandmorty/onsearch/"

      if(characters.find((char) => char.id === id)){
         return alert ("Este personaje ya se encuentra agregado");
      }

      fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         if(data.name) {
            setCharacters((oldChars) => [...oldChars, data]);            
         } else {
            alert ("Algo salio mal")
         }
      })
   }

   function onClose (id) {
      setCharacters(characters.filter((char) => char.id !== id));
   }   

   function login (userData) {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home")
      }
      else{
         alert("Credenciales Incorrectas");
      }
   }

   const {pathname} = useLocation();
   
   
   
   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>            
            <Route path="/" element={<Form login={login} />} />           
            <Route 
               path="/home"
               element={<Cards onClose={onClose} characters={characters} />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/" element={<Form/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>         
      </div>
   );
}

export default App;
