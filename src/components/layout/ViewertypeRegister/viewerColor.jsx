import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerColor({ color }) {  

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {color.name}
                </p>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${color.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${color.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

