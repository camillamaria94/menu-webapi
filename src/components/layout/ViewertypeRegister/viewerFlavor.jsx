import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerFlavor({ flavor }) {  
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {flavor.name}
                </p>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${flavor.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${flavor.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

