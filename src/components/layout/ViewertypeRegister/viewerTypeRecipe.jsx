import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerTypeRegister({typeRecipe}) {  
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {typeRecipe.name}
                </p>
                <span className="layoutViwerValue_subtitle">
                    Aparecer no cardapio: {typeRecipe.showMenu ? "Sim" : "Não"}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${typeRecipe.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/remove/${typeRecipe.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )
}

