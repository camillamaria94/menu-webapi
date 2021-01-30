import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'http://localhost:3001/incidencesType';

export async function getIncidencesType() { 
  const response = await axios.get(BASE_URL)
  return response.data
}

export const deleteIncidencesType = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}
    
export const GetMapIncidencesType = () => {
  const [selectData, setselectData] = useState([]);
          
  useEffect(() => {
    const params = {};
   
    getIncidencesType({ params }).then((response) => {
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





