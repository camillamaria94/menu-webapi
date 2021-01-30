import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerCategory({ category }) {  
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {category.name}
                </p>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${category.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${category.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

