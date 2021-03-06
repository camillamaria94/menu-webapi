import axios from 'axios'
import { useState, useEffect } from 'react'


const BASE_URL = 'http://localhost:3001/category';

export function getCategory({params}) {
  return axios.get(BASE_URL,{params})
}

export const deleteCategory= ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}

export const GetMapCategory = () => {
  const [selectData, setselectData] = useState([]);
          
  useEffect(() => {
    const params = {};
   
    getCategory({ params }).then((response) => {
      setselectData(response.data)
    });

   }, []);
 
  const mapResponseToValuesAndLabels = (data) => ({
    value: data.id,
    label: data.name,
  });

  function optionsValue({selectData}){
  const data = selectData.map((selectData) =>
    (mapResponseToValuesAndLabels(selectData)
    ))
    return data
  }
  const valor = optionsValue({selectData})

  return valor;
}




