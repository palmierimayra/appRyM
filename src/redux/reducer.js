import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV: {
      const filtroLista = state.allCharacters.filter(
        ({ id }) => id !== Number(payload)
      );
      return {
        ...state,
        myFavorites: filtroLista,
        allCharacters: filtroLista,
      };
    }

    case FILTER: {
      const filtroGLista = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: filtroGLista,
      };
    }

    case ORDER:
      let characters = state.allCharacters;
      let order = characters.sort((a,b) => {
        if(payload ==='A'){
          return a.id - b.id
        } else if (payload ==='D'){
          return b.id - a.id
        } else {
          return 0;
        }
      })  
      return {
        ...state,
        myFavorites: order
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
