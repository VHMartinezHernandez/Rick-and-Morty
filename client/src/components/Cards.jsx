import Card from "./Card.jsx";
import './Cards.css'


export default function Cards({characters, onClose }) { 
   
   return(
     
      <div className="cards_container">
         
         
         {
            characters.map((element, index) => {
               return(
                  <Card
                  key={index}
                  id={element.id}                  
                  name ={element.name}
                  status = {element.status}
                  species = {element.species}
                  gender = {element.gender}
                  origin = {element.origin}
                  image = {element.image}
                  onClose={onClose}
               />
               );
               
            })            
         }
         
      </div>
     
   );   
}

