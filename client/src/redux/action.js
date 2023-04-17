export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV"
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const RESET = "RESET"

//funcion antes de express
export const addFav = (character) => {
    return{type:ADD_FAV, payload:character}
}

//Funcion de express
// export const addFav = (character) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/favorite';
//   return (dispatch) => {
//      axios.post(endpoint, character).then(({ data }) => {
//         return dispatch({
//            type: 'ADD_FAV',
//            payload: data,
//         });
//      });
//   };
// };

//antes de express
export const removeFav = (id) => {
    return { type: REMOVE_FAV, payload: id}
}

//funcion de express
// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/favorite/' + id;
//   return (dispatch) => {
//      axios.delete(endpoint).then(({ data }) => {
//         return dispatch({
//            type: 'REMOVE_FAV',
//            payload: data,
//      });
//      });
//   };
// };


export function filterCards(gender) {
    return {
      type: FILTER,
      payload: gender,
    };
  }

export function orderCards(order) { 
    return {
      type: ORDER,
      payload: order,
    };
  }
  
  export function reset() { 
    return {
      type: RESET,
    };
  }