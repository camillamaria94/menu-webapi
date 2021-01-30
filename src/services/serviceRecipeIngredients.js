import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/recipeIngredients';

export function getRecipeIngredients({params}) {
  return axios.get(BASE_URL,{params})
}

export async function getRecipeIngIdRecipe({idRecipe}) {
  const response = await axios.get(`${BASE_URL}/recipe/${idRecipe}`)
  return response.data
}


export const deleteRecipeIngredients = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}
    
export function getRecipeIngredientsRecipe({ params, id }) {
  return axios.get(BASE_URL,{params, id})
}





