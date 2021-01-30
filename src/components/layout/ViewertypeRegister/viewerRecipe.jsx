import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


export default function layoutViewerTypeRegister({ recipe }) {  
    
    return (
        <div className="layoutViwerValue">
            <div className="layoutViwerValue_text">
                <p className="layoutViwerValue_title">
                    {recipe.name}
                </p>
                <span className="layoutViwerValue_subtitle">
                {recipe.methodPreparation}
                </span>
                <span className="layoutViwerValue_subtitle">
                <br /> Contém gluten: { recipe.gluten ? "Sim" : "Não"}
                </span>
                <span className="layoutViwerValue_subtitle">
                <br />Contém Lactose: { recipe.lactose ? "Sim" : "Não"}
                </span>
            </div>
            <div className="layoutViwerValue__footer">
                <Link to={`/edit/${recipe.id}`} className="layoutViwerValue_link">Editar</Link>
                <Link to={`/application/addIngredients/${recipe.id}`}  className="layoutViwerValue_link">Adicionar Ingredientes</Link>
                <Link to={`/application/addEquipments/${recipe.id}`} className="layoutViwerValue_link">Adicionar Equipamentos</Link>
                <Link to={`/remove/${recipe.id}`} className="layoutViwerValue_link">Excluir</Link>
            </div>
        </div>
    )

}

