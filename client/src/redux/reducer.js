import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    //antes de express
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    //funcion de express
    // case ADD_FAV:
    //   return { ...state, myFavorites: payload, allCharacters: payload };

    //antes de express
      case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

      //funcion de express
      // case REMOVE_FAV:
      // return { ...state, myFavorites: payload };

    case FILTER:
      const newFilter = state.allCharacters.filter(
        (ch) => ch.gender === action.payload
      );
      return {
        ...state,
        myFavorites: newFilter,
      };

    case ORDER:
      const newOrder = state.allCharacters.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === action.payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: newOrder,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
