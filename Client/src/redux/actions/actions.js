import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types"

export const addFav = (char) => {
    return {
        type: ADD_FAV,
        payload: char
    }
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
};

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
};