import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerIngredients({ ingredients }) {  

    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {ingredients.name}
                </p>
                <span className="layoutViwerValue_subtitle">
                Calorias: {ingredients.calories}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${ingredients.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${ingredients.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

