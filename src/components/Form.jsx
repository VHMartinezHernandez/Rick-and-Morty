import { useState } from "react";
import validation from "./validation";
import "./Form.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    validation({ ...userData, [property]: value }, errors, setErrors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className="background-container">
      <form onSubmit={submitHandler}>
        <br />
        <br />
        <br />
        <div className="login">
          <br /> <br />
                  
          <label>Correo Electronico:</label>
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required=""
            ></input>
          
          <p>{errors.email}</p>
          <br />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleChange}
          ></input>
          <p>{errors.password}</p>
          <br />
          <button>Ingresar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
