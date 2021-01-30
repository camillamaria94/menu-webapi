import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/menu';

export async function getMenu({ params }) {
  return axios.get(BASE_URL, { params })
}

export function getMenuPublish() {
  const publish = 1
  return axios.get(`${BASE_URL}/publish/${publish}`)
   
}

export const deleteMenu = ({ id }) => {

  axios.delete(`${BASE_URL}/${id}`)
    .then((response) => {
    })
}

export const GetMapMenu = () => {
  const [selectData, setselectData] = useState([]);

  useEffect(() => {
    const params = {};

    getMenu({ params }).then((response) => {
      setselectData(response.data)
    });

  }, []);

  const mapResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name,
  });

  function optionsValue({ selectData }) {
    const data = selectData.map((selectData) =>
    (mapResponseToValuesAndLabels(selectData)
    ))
    return data
  }
  const valor = optionsValue({ selectData })

  return valor;
}


export const GetMapMenuPublish = () => {
  const [selectData, setselectData] = useState([]);

  useEffect(() => {
    const params = {};

    getMenuPublish().then((response) => {
      setselectData(response.data)
    });

  }, []);

  const mapResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name,
  });

  function optionsValue({ selectData }) {
    const data = selectData.map((selectData) =>
    (mapResponseToValuesAndLabels(selectData)
    ))
    return data
  }
  const valor = optionsValue({ selectData })

  return valor;
}





