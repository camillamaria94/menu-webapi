import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'


export default function layoutViewerTexture({ texture }) {  
   
   
    return (
      
        <div className="layoutViwerValue__footer">

        <Link to={`/application/createIncidences`} className="layoutViwerValue_link">Incidências de Ingredientes</Link>
        <Link to={`/application/createIncidencesType`} className="layoutViwerValue_link">Incidências por Tipos</Link>
        </div>
)

}
