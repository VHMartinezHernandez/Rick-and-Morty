const validation = (userData, errors, setErrors) => {
  
    //email
    if(!userData.email){
    setErrors({...errors, email: "Email vacio"});
    }
    else{ 
        if(userData.email.length > 35){
        setErrors({...errors, email:"No puede superar los 35 caracteres"});
        }
        else{
            if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)){
                setErrors({...errors, email:"Email invalido"});
            }
                else{
                    setErrors({...errors, email:""});
                }
            }
        }    
    
    //Pasword
    
        if (userData.password.length < 6 || userData.password.length > 10) {
            setErrors({...errors, password: 'El password debe tener entre 6 y 10 caracteres'});
        }
        else{
            if(!/\d/.test(userData.password)){
                setErrors({...errors, password: 'El password debe contener por lo menos un numero'});
            }
            else{
                setErrors({...errors, password: ''});

            }

        }




            
                
      
} 

export default validation;