import { useState } from "react";

export default function SearchBar({onSearch}) {
   const [id,setId]= useState("");

   const handleChange = (event) => {
      console.log(id, handleChange);
      setId(event.target.value);
   }
   
   return (
      <div>
         <input 
            type="search"
            onChange={handleChange}
            name="search"
            
         />
         <button onClick={() => onSearch(id)}>
            Agregar
         </button>         
      </div>
   );
}
