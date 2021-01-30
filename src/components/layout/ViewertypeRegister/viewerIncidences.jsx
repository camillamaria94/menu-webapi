import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'



export default function layoutViewerIncidences({ incidences }) {  
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {incidences.name}
                </p>
                <span className="layoutViwerValue_subtitle">
               {incidences.ingredients}
                </span>
                <span className="layoutViwerValue_subtitle">
                <br /> {incidences.min}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${incidences.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${incidences.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

