import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerTexture({ texture }) {  

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {texture.name}
                </p>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${texture.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${texture.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

