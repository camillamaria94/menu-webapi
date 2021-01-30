import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/flavor';

export function getFlavor({params}) {
  return axios.get(BASE_URL,{params})
}

export const deleteFlavor = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}
    
export const GetMapFlavor = () => {
  const [selectData, setselectData] = useState([]);
          
  useEffect(() => {
    const params = {};
   
    getFlavor({ params }).then((response) => {
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








