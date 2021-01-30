import axios from 'axios'
import { useState, useEffect } from 'react'


const BASE_URL = 'http://localhost:3001/user';

export function getUser({ params }) {
  return axios.get(BASE_URL, { params })
}

export const deleteUser = ({ id }) => {

  axios.delete(`${BASE_URL}/${id}`)
    .then((response) => {
    })
}

export function getFist({username}) {
  return axios.get(`http://localhost:3001/userEmail/${username}`)
   
}






