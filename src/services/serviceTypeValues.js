import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/typeValue';

export function getTypeValue({params}) {
  return axios.get(BASE_URL,{params})
}

export function getTypeValueID({id}) {
  return axios.get(`${BASE_URL}/${id}`)
}


export const deleteTypeValue = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}
    
export const GetMapTypeValue = () => {
  const [selectData, setselectData] = useState([]);
          
  useEffect(() => {
    const params = {};
   
    getTypeValue({ params }).then((response) => {
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



