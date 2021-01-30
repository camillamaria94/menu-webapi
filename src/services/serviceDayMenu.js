import axios from 'axios'
import { useState, useEffect } from 'react'


const BASE_URL = 'http://localhost:3001/dayMenu';

export function getDayMenu({params}) {
  return axios.get(BASE_URL,{params})
}

export async function getDayMenuID({idMenu}) {
  const response = await axios.get(`${BASE_URL}/menu/${idMenu}`,{idMenu})
  return response.data
}

export const deleteDayMenu = ({id}) => {
  
  axios.delete(`${BASE_URL}/${id}`)
      .then((response) => {
    })
}

export const GetMapDayMenu = () => {
  const [selectData, setselectData] = useState([]);
          
  useEffect(() => {
    const params = {};
   
    getDayMenu({ params }).then((response) => {
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






