import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/recipeEquipment';

export function getRecipeEquipment({params}) {
  return axios.get(BASE_URL,{params})
}

export const deleteRecipeEquipment = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}
    




