import { Link } from "react-router-dom";
import "./Card.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/action";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites
  } = props;
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>Name: {name}</h2>
      {/* <h2>Status: {status}</h2> */}
      <h2>species: {species}</h2>
      <h2>gender: {gender}</h2>
      {/* <h2>origin: {origin.name}</h2> */}
      <img className=".img" src={image} alt="" />
      </Link>
    </div>
  );
}

function mapStateToProp(state) {
  return {
    myFavorites: state.myFavorites
  };
}

function mapDispatchToProp(dispatch) {
  return {
    addFav: (ch) => dispatch(addFav(ch)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProp, mapDispatchToProp)(Card);
